import { topicGuides, catalogStats, sourceCount } from "../src/content"
console.log(catalogStats)
const counts = topicGuides.map(sourceCount)
console.log("sources per topic: min", Math.min(...counts), "max", Math.max(...counts))
const perStep = topicGuides.flatMap((t) => t.steps.map((s) => s.sources.length))
console.log("sources per step: min", Math.min(...perStep), "max", Math.max(...perStep))

let dupeURLs = 0
let projects = 0
for (const t of topicGuides) {
  const urls = new Set<string>()
  for (const st of t.steps) {
    for (const src of st.sources) {
      if (urls.has(src.url)) dupeURLs++
      urls.add(src.url)
    }
  }
  for (const list of Object.values(t.projects ?? {})) projects += list?.length ?? 0
}
console.log("duplicate urls inside a topic:", dupeURLs, "| projects:", projects)
