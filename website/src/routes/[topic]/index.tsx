import {
  Match,
  Show,
  Switch,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
} from "solid-js"
import { A, useNavigate, useParams } from "solid-start"
import { signedIn } from "../../../lib/auth"
import Card from "../../components/Topic/Card"
import GlobalGuide from "../../components/Topic/GlobalGuide"
import GuideNotes from "../../components/Topic/GuideNotes"
import Roadmap from "../../components/Topic/Roadmap"
import Sources from "../../components/Topic/Sources"
import TitlePill from "../../components/Topic/TitlePill"
import TopicNav from "../../components/Topic/TopicNav"
import TopicTabs from "../../components/Topic/TopicTabs"
import Search from "../../components/Search"
import { useMobius } from "../../root"
import { useGlobalTopic } from "../../GlobalContext/global-topic"
import { getTopicGuide } from "../../content"
import { buildTopicSearchItems, topicHref } from "../../lib/search"

export default function GlobalTopic() {
  const params = useParams()
  const topic = useGlobalTopic()
  const mobius = useMobius()
  const navigate = useNavigate()

  const [notFound, setNotFound] = createSignal(false)
  const [searchItems] = createSignal(buildTopicSearchItems())

  // the topic in the bundled catalog (sources + roadmap)
  const guide = createMemo(() => getTopicGuide(params.topic))

  // load the catalog topic into the shared store, once per topic
  createEffect(() => {
    const current = guide()
    if (!current) return
    if (topic.globalTopic.name !== current.name) {
      topic.setTopicFromGuide(current)
    }
  })

  // topics that only exist on the server still open, they just have no sources
  createEffect(() => {
    const name = params.topic
    const current = guide()
    setNotFound(false)

    if (!name || current) return

    let cancelled = false

    const load = async () => {
      try {
        const result = signedIn()
          ? await mobius.query({
              getGlobalTopic: {
                where: { topicName: name },
                select: { prettyName: true, topicSummary: true },
              },
            })
          : await mobius.query({
              publicGetGlobalTopic: {
                where: { topicName: name },
                select: { prettyName: true, topicSummary: true },
              },
            })

        const data = (result as any)?.data
        const found = data?.getGlobalTopic ?? data?.publicGetGlobalTopic
        if (cancelled) return

        if (found?.prettyName) {
          topic.setTopicFromDatabase({
            name,
            prettyName: found.prettyName,
            topicSummary: found.topicSummary,
          })
        } else {
          setNotFound(true)
        }
      } catch {
        // no server / topic missing: show the empty state instead of a blank page
        if (!cancelled) setNotFound(true)
      }
    }

    load()
    onCleanup(() => {
      cancelled = true
    })
  })

  return (
    <>
      <style>{`
        #InfoSidebar {
          display: none;
        }
        #InfoMain {
          width: 100%;
        }
        #InfoOptions {
          display: flex;
        }

      @media (min-width: 700px) {
        #InfoSidebar {
          display: flex;
        }
        #InfoMain {
          width: 65%;
        }
      }
      `}</style>
      <div class="w-screen h-full text-white bg-neutral-950">
        <TopicNav />
        <div class="w-full" style={{ padding: "24px 24px 0 24px" }}>
          <TitlePill />
        </div>
        <TopicTabs />
        <div class="h-fit w-full flex justify-center">
          <div
            id="InfoMain"
            class="h-full min-h-screen flex gap-6 flex-col"
            style={{ padding: "24px 40px 24px 40px" }}
          >
            <Show
              when={!notFound()}
              fallback={
                <div class="flex flex-col gap-4 max-w-[520px] py-10">
                  <div class="text-[22px] font-bold text-white">
                    We could not find “{params.topic}”
                  </div>
                  <p class="text-neutral-400 leading-[1.5]">
                    Search for a topic below, or{" "}
                    <A href="/" class="text-[#8AB4FF]">
                      go back home
                    </A>
                    .
                  </p>
                  <Search
                    variant="night"
                    placeholder="Search a topic"
                    autofocus
                    searchResults={searchItems()}
                    inputClass="w-full border border-neutral-700 rounded-lg px-4 py-3 outline-none text-white placeholder:text-neutral-500"
                    onSelect={(item) => navigate(topicHref(item.name))}
                  />
                </div>
              }
            >
              <Switch>
                <Match when={topic.globalTopic.showPage === "Global Guide"}>
                  <GlobalGuide />
                </Match>
                <Match when={topic.globalTopic.showPage === "Roadmap"}>
                  <Show
                    when={guide() ?? topic.globalTopic.topicGuide}
                    fallback={<NoRoadmap />}
                  >
                    {(current) => <Roadmap topic={current()} />}
                  </Show>
                </Match>
                <Match when={topic.globalTopic.showPage === "Links"}>
                  <Sources topic={guide() ?? topic.globalTopic.topicGuide} />
                </Match>
                <Match when={topic.globalTopic.showPage === "Notes"}>
                  <GuideNotes />
                </Match>
              </Switch>
            </Show>
          </div>

          {/* add this when we have the data from server for who is learning the topic..  */}
          <div
            id="InfoSidebar"
            class="h-full w-[35%] flex flex-col gap-6 overflow-auto"
            style={{ padding: "24px 40px 24px 0px" }}
          >
            <div class="flex flex-col w-full gap-2 font-light text-[#6B6B70]"></div>
            <div id="Cards" class="flex flex-col gap-2">
              <Show when={true}>
                <Card name="Learners" />
              </Show>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// shown for topics that exist in the database but have no sources yet
function NoRoadmap() {
  return (
    <div class="border border-dashed border-neutral-700 rounded-xl p-8 text-center text-neutral-400">
      <div class="font-semibold text-white pb-1">No roadmap available yet</div>
      A roadmap is generated from the sources of a topic. This topic does not have
      sources yet, so there is nothing to build a path from.
    </div>
  )
}
