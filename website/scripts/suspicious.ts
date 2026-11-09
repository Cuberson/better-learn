// Sources whose title promises a specific page but whose url is the site root.
import { topicGuides, topicSources } from "../src/content"

const rows: string[] = []
for (const topic of topicGuides) {
  for (const { step, source } of topicSources(topic)) {
    const url = new URL(source.url)
    const depth = url.pathname.split("/").filter(Boolean).length
    if (depth <= 1 && /[—:–]/.test(source.title)) {
      rows.push(`${topic.name} | ${step.id} | ${source.title} | ${source.url}`)
    }
  }
}
console.log(`specific title on a shallow url: ${rows.length}`)
for (const r of rows) console.log(r)
