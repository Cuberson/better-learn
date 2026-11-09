// Reports sources that point at a whole site instead of the material for the
// step, and sources listed twice inside the same topic.
import { topicGuides, topicSources } from "../src/content"

const rows: string[] = []
const duplicates: string[] = []
const bare: string[] = []

for (const topic of topicGuides) {
  const seen = new Map<string, string[]>()

  for (const { step, source } of topicSources(topic)) {
    const key = source.url.replace(/\/$/, "")
    seen.set(key, [...(seen.get(key) ?? []), `${step.id}: ${source.title}`])

    let url: URL
    try {
      url = new URL(source.url)
    } catch {
      rows.push(`invalid | ${topic.name} | ${step.id} | ${source.url}`)
      continue
    }

    const path = url.pathname.replace(/\/+$/, "")
    if (path === "") bare.push(`${topic.name} | ${step.id} | ${source.title} | ${source.url}`)
    else if (path.split("/").filter(Boolean).length <= 1 && !url.search)
      rows.push(`one segment | ${topic.name} | ${step.id} | ${source.title} | ${source.url}`)
  }

  for (const [url, uses] of seen) {
    if (uses.length > 1) duplicates.push(`${topic.name} | ${url} | ${uses.join(" + ")}`)
  }
}

console.log(`bare domain: ${bare.length}`)
console.log(`one segment: ${rows.length}`)
console.log(`duplicated inside a topic: ${duplicates.length}`)
console.log("\n--- duplicates ---")
for (const d of duplicates) console.log(d)
console.log("\n--- bare domain ---")
for (const b of bare) console.log(b)
