// Guards the landing page background: every node must be a real topic with a
// name, because the canvas paints `String(node.key)` and used to paint
// "undefined" for all 256 anonymous nodes.
import { generateTopicGraph } from "../src/lib/backgroundGraph"
import { buildTopicSearchItems } from "../src/lib/search"

const items = buildTopicSearchItems()
const { graph, labels, topics } = generateTopicGraph(items)

const problems: string[] = []
if (graph.nodes.length !== items.length) problems.push("node count mismatch")

for (const node of graph.nodes) {
  if (node.key === undefined) problems.push("a node has no key")
  const label = labels.get(String(node.key))
  if (!label || label === "undefined") problems.push(`bad label for ${String(node.key)}`)
  if (!topics.has(String(node.key))) problems.push(`no topic behind ${String(node.key)}`)
}

console.log(`${graph.nodes.length} topic nodes, ${graph.edges.length} edges inside ${new Set(items.map((i) => i.category)).size} categories`)
console.log(problems.length === 0 ? "OK — every background node is a named topic" : problems.join("\n"))
if (problems.length > 0) process.exit(1)

// The background is a locked map: it must offer no pan/zoom affordances, and the
// lines between topic words must actually be present in the graph data.
import { readFileSync } from "node:fs"

const landing = readFileSync(new URL("../src/routes/index.tsx", import.meta.url), "utf8")
for (const banned of ["canvasGestures", "deltaY", "addEventListener(\"wheel\"", "connectEvents"])
  if (landing.includes(banned)) problems.push(`landing background still handles input: ${banned}`)

const byCategory = new Map<string, string[]>()
for (const item of items) {
  const list = byCategory.get(item.category) ?? []
  list.push(String(item.prettyName))
  byCategory.set(item.category, list)
}
const keys = new Set(
  graph.edges.map((edge) => [String(edge.a.key), String(edge.b.key)].sort().join("|")),
)
let missingRing = 0
for (const names of byCategory.values()) {
  for (let i = 0; i < names.length; i++) {
    const a = names[i]
    const b = names[(i + 1) % names.length]
    if (names.length > 1 && !keys.has([a, b].sort().join("|"))) missingRing++
  }
}
if (missingRing > 0) problems.push(`${missingRing} category neighbours are not joined by a line`)
if (graph.edges.length < items.length) problems.push(`only ${graph.edges.length} lines for ${items.length} topics`)

console.log(`${graph.edges.length} lines join ${graph.nodes.length} topic words, ${missingRing} gaps`)
if (problems.length) {
  console.log("PROBLEMS:")
  for (const problem of problems) console.log(" -", problem)
  process.exit(1)
}
console.log("OK — background lines and lock verified")
