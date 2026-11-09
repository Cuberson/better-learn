import { topicGuides } from "../src/content"
for (const t of topicGuides) {
  const byStage = ["beginner", "intermediate", "advanced"].map((stage) => {
    const titles = t.steps.filter((s) => s.stage === stage).map((s) => s.title)
    return `${stage[0]!.toUpperCase()}: ${titles.join(" / ")}`
  })
  console.log(`${t.name} [${t.category}] — ${byStage.join(" | ")}`)
}
