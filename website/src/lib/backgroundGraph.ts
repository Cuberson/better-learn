import { Graph } from "@nothing-but/force-graph"
import type { TopicSearchItem } from "./search"

export const graph_options = Graph.graphOptions({
  inertia_strength: 0.3,
  origin_strength: 0.01,
  repel_distance: 26,
  repel_strength: 0.5,
})

export type BackgroundGraph = {
  graph: Graph.Graph
  /** node key -> the text drawn on the canvas */
  labels: Map<string, string>
  /** node key -> the topic that node stands for */
  topics: Map<string, TopicSearchItem>
}

// The background is a map of every topic we support instead of anonymous
// dots: one node per topic, labelled with its name, connected to the topics in
// the same category.
//
// The previous version used `Array.from({ length }, Graph.makeNode)`, which
// passes the index as the *second* argument, so every node had
// `key === undefined` and the canvas painted the literal text "undefined" for
// each of the 256 nodes.
export function generateTopicGraph(items: TopicSearchItem[]): BackgroundGraph {
  const labels = new Map<string, string>()
  const topics = new Map<string, TopicSearchItem>()

  const nodes = items.map((item) => {
    labels.set(item.prettyName, item.prettyName)
    topics.set(item.prettyName, item)
    return Graph.makeNode(item.prettyName)
  })

  // a ring of edges inside each category, so related topics end up next to
  // each other instead of floating alone
  const byCategory = new Map<string, Graph.Node[]>()
  items.forEach((item, index) => {
    const group = byCategory.get(item.category ?? "other") ?? []
    group.push(nodes[index]!)
    byCategory.set(item.category ?? "other", group)
  })

  const edges: Graph.Edge[] = []
  for (const group of byCategory.values()) {
    if (group.length < 2) continue
    group.forEach((node, index) => {
      const next = group[(index + 1) % group.length]!
      if (next !== node) edges.push(Graph.connect(node, next))
    })
  }

  Graph.randomizeNodePositions(nodes, graph_options.grid_size)

  return {
    graph: Graph.makeGraph(graph_options, nodes, edges),
    labels,
    topics,
  }
}

// The force graph library hard codes red and indigo labels, which clash with
// the black + emerald theme. The colours are only ever set through
// `fillStyle`, so they are remapped on the way to the real canvas instead of
// forking the library.
export function themedContext(ctx: CanvasRenderingContext2D): CanvasRenderingContext2D {
  return new Proxy(ctx, {
    get(target, property) {
      const value = Reflect.get(target, property)
      return typeof value === "function" ? value.bind(target) : value
    },
    set(target, property, value) {
      if (property === "fillStyle" && typeof value === "string") {
        value = value
          .replace("rgba(248, 113, 113", "rgba(255, 255, 255")
          .replace("rgba(129, 140, 248", "rgba(52, 211, 153")
      }
      return Reflect.set(target, property, value)
    },
  })
}
