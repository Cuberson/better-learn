import { topicGuides, topicSources } from "../src/content"

const out: { topic: string; url: string; uses: { step: string; title: string; kind?: string }[] }[] = []

for (const topic of topicGuides) {
  const byUrl = new Map<string, { step: string; title: string }[]>()
  for (const { step, source } of topicSources(topic)) {
    const key = source.url.replace(/\/$/, "")
    byUrl.set(key, [...(byUrl.get(key) ?? []), { step: step.id, title: source.title }])
  }
  for (const [url, uses] of byUrl) if (uses.length > 1) out.push({ topic: topic.name, url, uses })
}

console.log(JSON.stringify(out, null, 1))
