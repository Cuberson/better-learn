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
