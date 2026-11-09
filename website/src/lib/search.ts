import Fuse from "fuse.js"
import { getTopicGuide, sourceCount, topicGuides, topicSlug } from "../content"

/** One row in the search dropdown. */
export type TopicSearchItem = {
  /** route name, i.e. `machine-learning` */
  name: string
  prettyName: string
  category?: string
  aliases?: string[]
  stepCount?: number
  sourceCount?: number
  /** topics that only exist on the server (not in the bundled catalog) */
  fromCatalog: boolean
}

/** Topics shown when the search box is empty. */
const featuredTopicNames = [
  "physics",
  "mathematics",
  "javascript",
  "python",
  "machine-learning",
  "personal-finance",
  "music-theory",
  "philosophy",
  "writing",
  "spanish",
  "product-management",
  "3d-printing",
]

function catalogItem(topicName: string): TopicSearchItem | undefined {
  const topic = getTopicGuide(topicName)
  if (!topic) return

  return {
    name: topic.name,
    prettyName: topic.prettyName,
    category: topic.category,
    aliases: topic.aliases,
    stepCount: topic.steps.length,
    sourceCount: sourceCount(topic),
    fromCatalog: true,
  }
}

export const featuredTopics: TopicSearchItem[] = featuredTopicNames
  .map(catalogItem)
  .filter((item): item is TopicSearchItem => item !== undefined)

export function topicHref(name: string): string {
  return `/${topicSlug(name)}`
}

/**
 * The list of topics to search over. Topics that the database knows about are
 * merged in after the bundled catalog, so a topic that only exists on the
 * server is still searchable and navigable.
 */
export function buildTopicSearchItems(
  databaseTopics: { name: string; prettyName: string }[] = [],
): TopicSearchItem[] {
  const items: TopicSearchItem[] = topicGuides.map((topic) => ({
    name: topic.name,
    prettyName: topic.prettyName,
    category: topic.category,
    aliases: topic.aliases,
    stepCount: topic.steps.length,
    sourceCount: sourceCount(topic),
    fromCatalog: true,
  }))

  const known = new Set(items.map((item) => item.name))

  for (const topic of databaseTopics) {
    if (!topic?.name) continue
    const name = topicSlug(topic.name)
    if (!name || known.has(name)) continue

    known.add(name)
    items.push({
      name,
      prettyName: topic.prettyName || topic.name,
      fromCatalog: false,
    })
  }

  return items
}

export function createTopicSearch(items: TopicSearchItem[]): Fuse<TopicSearchItem> {
  return new Fuse(items, {
    includeScore: true,
    ignoreLocation: true,
    threshold: 0.34,
    minMatchCharLength: 1,
    keys: [
      { name: "prettyName", weight: 3 },
      { name: "name", weight: 2 },
      { name: "aliases", weight: 1.5 },
      { name: "category", weight: 0.5 },
    ],
  })
}

/**
 * Fuzzy topic search that also copes with things Fuse alone misses:
 * plain substrings (`learn` -> `machine-learning`) and very short queries.
 */
export function searchTopics(
  fuse: Fuse<TopicSearchItem>,
  items: TopicSearchItem[],
  rawQuery: string,
  limit = 12,
): TopicSearchItem[] {
  const query = rawQuery.trim().toLowerCase()
  if (!query) return featuredTopics.slice(0, limit)

  const slug = topicSlug(query)
  const scored = new Map<string, { item: TopicSearchItem; score: number }>()

  const haystackOf = (item: TopicSearchItem) =>
    [item.prettyName, item.name, item.category ?? "", ...(item.aliases ?? [])]
      .join(" ")
      .toLowerCase()

  const matches = (item: TopicSearchItem) => {
    const haystack = haystackOf(item)

    if (haystack.includes(query) || (slug.length > 0 && haystack.includes(slug))) {
      return 0
    }

    // every word of the query appears somewhere in the topic (any order)
    const words = query.split(/\s+/).filter(Boolean)
    if (words.length > 1 && words.every((word) => haystack.includes(word))) {
      return 0.6
    }

    return
  }

  // Fuse is happy to match `cook` against `hooks`, which makes long queries
  // return nonsense. A fuzzy hit only counts when the first letters line up
  // with a word of the topic, which keeps real typos working.
  const sharesWordPrefix = (item: TopicSearchItem) => {
    if (query.length < 2) return false
    const prefix = query.slice(0, 2)
    return haystackOf(item)
      .split(/[^a-z0-9]+/)
      .filter(Boolean)
      .some((word) => word.startsWith(prefix))
  }

  for (const result of fuse.search(query)) {
    const bonus = matches(result.item)
    if (bonus === undefined && !sharesWordPrefix(result.item)) continue

    scored.set(result.item.name, {
      item: result.item,
      score: Math.min(result.score ?? 1, bonus ?? 0.9),
    })
  }

  for (const item of items) {
    const bonus = matches(item)
    if (bonus === undefined) continue

    const existing = scored.get(item.name)
    const score = existing ? Math.min(existing.score, bonus) : bonus
    scored.set(item.name, { item, score })
  }

  return [...scored.values()]
    .sort((a, b) => {
      if (a.score !== b.score) return a.score - b.score
      const aStarts = a.item.prettyName.toLowerCase().startsWith(query) ? 0 : 1
      const bStarts = b.item.prettyName.toLowerCase().startsWith(query) ? 0 : 1
      if (aStarts !== bStarts) return aStarts - bStarts
      return a.item.prettyName.localeCompare(b.item.prettyName)
    })
    .slice(0, limit)
    .map((entry) => entry.item)
}
