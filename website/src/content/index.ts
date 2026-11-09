import type { Source, Stage, Step, TopicGuide } from "./types"
import { stages } from "./types"

import * as programming from "./topics/programming"
import * as math from "./topics/math"
import * as science from "./topics/science"
import * as ai from "./topics/ai"
import * as build from "./topics/build"
import * as designBusiness from "./topics/design-business"
import * as humanities from "./topics/humanities"

// The whole catalog. Adding a topic is a single new `defineTopic` export in one
// of the `topics/*.ts` files plus a line below — search, the sources page and
// the roadmap all pick it up automatically.
const topicModules: Record<string, TopicGuide>[] = [
  programming,
  math,
  science,
  ai,
  build,
  designBusiness,
  humanities,
]

export const topicGuides: TopicGuide[] = topicModules
  .flatMap((module) => Object.values(module) as TopicGuide[])
  .filter((topic) => topic && typeof topic === "object" && "steps" in topic)
  .sort((a, b) => a.prettyName.localeCompare(b.prettyName))

const guidesByName = new Map<string, TopicGuide>()
const guidesByAlias = new Map<string, TopicGuide>()

for (const topic of topicGuides) {
  guidesByName.set(topic.name, topic)
  for (const alias of topic.aliases ?? []) {
    const slug = topicSlug(alias)
    if (slug && !guidesByName.has(slug) && !guidesByAlias.has(slug)) {
      guidesByAlias.set(slug, topic)
    }
  }
}

/** url friendly version of a topic name: `Machine Learning` -> `machine-learning` */
export function topicSlug(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

/** Find a topic by its route name, its pretty name or one of its aliases. */
export function getTopicGuide(nameOrAlias: string | undefined): TopicGuide | undefined {
  if (!nameOrAlias) return

  let decoded = nameOrAlias
  try {
    decoded = decodeURIComponent(nameOrAlias)
  } catch {
    // malformed url encoding, fall through with the raw value
  }

  const slug = topicSlug(decoded)
  if (!slug) return

  return guidesByName.get(slug) ?? guidesByAlias.get(slug)
}

/** All the sources of a topic, flattened, with the step they belong to. */
export function topicSources(
  topic: TopicGuide,
): { stage: Stage; step: Step; source: Source }[] {
  return topic.steps.flatMap((step) =>
    step.sources.map((source) => ({ stage: step.stage, step, source })),
  )
}

export function sourceCount(topic: TopicGuide): number {
  return topic.steps.reduce((total, step) => total + step.sources.length, 0)
}

export const catalogStats = {
  topicCount: topicGuides.length,
  sourceCount: topicGuides.reduce((total, topic) => total + sourceCount(topic), 0),
  stepCount: topicGuides.reduce((total, topic) => total + topic.steps.length, 0),
}

export const categories = Array.from(
  new Set(topicGuides.map((topic) => topic.category)),
).sort()

// Cheap sanity check that keeps the catalog honest. It only warns, so a typo
// in the content can never take the site down.
function validateCatalog(topics: TopicGuide[]) {
  const problems: string[] = []
  const seenTopics = new Set<string>()

  for (const topic of topics) {
    if (seenTopics.has(topic.name)) {
      problems.push(`duplicate topic name "${topic.name}"`)
    }
    seenTopics.add(topic.name)

    if (topicSlug(topic.name) !== topic.name) {
      problems.push(`topic "${topic.name}" is not a valid slug`)
    }
    if (topic.steps.length === 0) {
      problems.push(`topic "${topic.name}" has no steps`)
    }

    const urlsInTopic = new Map<string, string>()
    const stepIds = new Set<string>()
    for (const step of topic.steps) {
      if (stepIds.has(step.id)) {
        problems.push(`topic "${topic.name}" has duplicate step id "${step.id}"`)
      }
      stepIds.add(step.id)

      if (!stages.includes(step.stage)) {
        problems.push(`topic "${topic.name}" step "${step.id}" has invalid stage`)
      }
      if (step.sources.length === 0) {
        problems.push(`topic "${topic.name}" step "${step.id}" has no sources`)
      }

      const stepUrls = new Set<string>()
      for (const source of step.sources) {
        if (!/^https?:\/\//.test(source.url)) {
          problems.push(`source "${source.title}" has a non absolute url`)
        }
        if (stepUrls.has(source.url)) {
          problems.push(
            `topic "${topic.name}" step "${step.id}" lists ${source.url} twice`,
          )
        }
        stepUrls.add(source.url)

        // the same link in two steps of one topic means one of the two titles
        // is lying about what is behind it
        const otherStep = urlsInTopic.get(source.url)
        if (otherStep && otherStep !== step.id) {
          problems.push(
            `topic "${topic.name}" links ${source.url} from both "${otherStep}" and "${step.id}"`,
          )
        }
        urlsInTopic.set(source.url, step.id)
      }
    }
  }

  if (problems.length > 0) {
    console.warn(`[learn-anything] content problems:\n- ${problems.join("\n- ")}`)
  }
}

validateCatalog(topicGuides)

export type { Source, SourceKind, Stage, Step, TopicGuide } from "./types"
export { sourceKindLabel, stageMeta, stages } from "./types"
