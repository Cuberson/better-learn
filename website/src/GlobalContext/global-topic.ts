import { createContext, useContext } from "solid-js"
import { createStore } from "solid-js/store"
import type { SourceKind, TopicGuide } from "../content/types"
import { stageMeta } from "../content/types"
import { sourcesByStage } from "../lib/roadmap"

export type Link = {
  title: string
  url: string
  author?: string
  year?: number
  completed?: boolean
  addedByUser?: boolean
  /** what kind of source this is (course, book, video, ...) */
  kind?: SourceKind
  /** one line telling you why the source is here */
  description?: string
  /** the roadmap step this source belongs to */
  stepTitle?: string
}

export type Section = {
  order: number
  title: string
  ordered: boolean
  links: Link[]
  summary?: string
}

// TODO: add sections, do query to edgedb
type GlobalGuide = {
  summary: string
  sections: Section[]
}

type PageState = "Global Guide" | "Roadmap" | "Links" | "Notes" | "Edit Global Guide"

type LearningStatus = "to learn" | "learning" | "learned" | null

type GlobalTopic = {
  showPage: PageState
  prettyName: string
  /** route name of the topic, i.e. `machine-learning` */
  name: string
  category: string
  /** set when the topic has sources + a roadmap in the bundled catalog */
  topicGuide: TopicGuide | null
  globalGuide: GlobalGuide
  userLearningStatus: LearningStatus
}

// all state needed to render global topic found in learn-anything.xyz/<topic>
export default function createGlobalTopic() {
  const [globalTopic, setGlobalTopic] = createStore<GlobalTopic>({
    prettyName: "",
    name: "",
    category: "",
    topicGuide: null,
    globalGuide: {
      summary: "",
      sections: [],
    },
    showPage: "Global Guide",
    userLearningStatus: null,
  })

  return {
    globalTopic,
    set: (state: Partial<GlobalTopic>) => {
      setGlobalTopic(state)
    },
    /**
     * Fills the page from a catalog topic. The guide sections are just the
     * sources grouped by stage, so the sources page, the guide and the roadmap
     * can never disagree with each other.
     */
    setTopicFromGuide: (guide: TopicGuide) => {
      const sections: Section[] = sourcesByStage(guide).map((group, index) => ({
        order: index,
        title: group.label,
        summary: (stageMeta[group.stage] ?? stageMeta.beginner).description,
        ordered: true,
        links: group.steps.flatMap(({ step, sources }) =>
          sources.map((source) => ({
            title: source.title,
            url: source.url,
            author: source.author,
            year: source.year,
            kind: source.kind,
            description: source.description,
            stepTitle: step.title,
          })),
        ),
      }))

      setGlobalTopic({
        name: guide.name,
        prettyName: guide.prettyName,
        category: guide.category,
        topicGuide: guide,
        showPage: "Global Guide",
        globalGuide: {
          summary: guide.topicSummary,
          sections,
        },
      })
    },
    /**
     * Used when the topic only exists on the server (no bundled sources yet).
     */
    setTopicFromDatabase: (state: {
      name: string
      prettyName: string
      topicSummary?: string
    }) => {
      setGlobalTopic({
        name: state.name,
        category: "",
        prettyName: state.prettyName,
        globalGuide: {
          summary: state.topicSummary ?? "",
          sections: [],
        },
        topicGuide: null,
      })
    },
    setShowPage: (state: PageState) => {
      setGlobalTopic({ showPage: state })
    },
    // TODO: add effect that will send db query to update learning status of user
    setUserLearningStatus: (state: LearningStatus) => {
      setGlobalTopic({ userLearningStatus: state })
    },
    addSection: (state: Section) => {
      const newSections = [...globalTopic.globalGuide.sections, state]
      setGlobalTopic({
        ...globalTopic,
        globalGuide: {
          ...globalTopic.globalGuide,
          sections: newSections,
        },
      })
    },
    addLinkToSection: (sectionOrder: number, link: Link) => {
      // Find the index of the section to modify
      const sectionIndex = globalTopic.globalGuide.sections.findIndex(
        (section) => section.order === sectionOrder,
      )

      // If the section is found
      if (sectionIndex !== -1) {
        // Copy the current sections
        const newSections = [...globalTopic.globalGuide.sections]

        // Copy the links array of the specific section and add the new link
        newSections[sectionIndex] = {
          ...newSections[sectionIndex],
          links: [...newSections[sectionIndex]!.links, link],
        }

        // Update the globalTopic state with the modified sections
        setGlobalTopic({
          ...globalTopic,
          globalGuide: {
            ...globalTopic.globalGuide,
            sections: newSections,
          },
        })
      } else {
        console.error(`Section with order ${sectionOrder} not found.`)
      }
    },
  }
}

const GlobalTopicCtx = createContext<ReturnType<typeof createGlobalTopic>>()

export const GlobalTopicProvider = GlobalTopicCtx.Provider

export const useGlobalTopic = () => {
  const ctx = useContext(GlobalTopicCtx)
  if (!ctx) throw new Error("useGlobalTopic must be used within UserProvider")
  return ctx
}
