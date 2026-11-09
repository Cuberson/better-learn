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

function edgeKey(a: Graph.Node, b: Graph.Node): string {
  const first = String(a.key)
  const second = String(b.key)
  return first < second ? `${first}|${second}` : `${second}|${first}`
}

function distance(a: Graph.Node, b: Graph.Node): number {
  const dx = a.position.x - b.position.x
  const dy = a.position.y - b.position.y
  return Math.hypot(dx, dy)
}

// The background is a map of every topic we support instead of anonymous
// dots: one node per topic, labelled with its name, joined by lines to the
// topics it sits next to.
//
// The previous version used `Array.from({ length }, Graph.makeNode)`, which
// passes the index as the *second* argument, so every node had
// `key === undefined` and the canvas painted the literal text "undefined" for
// each of the 256 nodes.
export function generateTopicGraph(items: TopicSearchItem[]): BackgroundGraph {
  const labels = new Map<string, string>()
  const topics = new Map<string, TopicSearchItem>()
  const categoryOf = new Map<string, string>()

  const nodes = items.map((item) => {
    const label = item.prettyName
    labels.set(label, label)
    topics.set(label, item)
    categoryOf.set(label, item.category ?? "other")
    return Graph.makeNode(label)
  })

  Graph.randomizeNodePositions(nodes, graph_options.grid_size)

  // every topic gets a line to its two closest neighbours, so the words are
  // visibly connected instead of floating on their own
  const edges: Graph.Edge[] = []
  const seen = new Set<string>()

  const connect = (a: Graph.Node, b: Graph.Node) => {
    if (a === b) return
    const key = edgeKey(a, b)
    if (seen.has(key)) return
    seen.add(key)
    edges.push(Graph.connect(a, b))
  }

  for (const node of nodes) {
    const nearest = nodes
      .filter((other) => other !== node)
      .sort((a, b) => distance(node, a) - distance(node, b))
      .slice(0, 2)

    for (const other of nearest) connect(node, other)
  }

  // plus a ring inside each category, which keeps related topics clustered
  const byCategory = new Map<string, Graph.Node[]>()
  for (const node of nodes) {
    const category = categoryOf.get(String(node.key)) ?? "other"
    byCategory.set(category, [...(byCategory.get(category) ?? []), node])
  }
  for (const group of byCategory.values()) {
    if (group.length < 2) continue
    group.forEach((node, index) => connect(node, group[(index + 1) % group.length]!))
  }

  return {
    graph: Graph.makeGraph(graph_options, nodes, edges),
    labels,
    topics,
  }
}

// The force graph library hard codes red and indigo text and grey edges, which
// clash with the black + emerald theme. The colours are only ever set through
// canvas properties, so they are remapped on the way to the real canvas instead
// of forking the library.
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
      if (property === "strokeStyle" && typeof value === "string") {
        // the library draws the connections at 20% grey; on black that is
        // almost invisible, so the same lines get a brighter slate
        value = value
          .replace("rgba(150, 150, 150, 0.2", "rgba(148, 163, 184, 0.55")
          .replace("rgba(129, 140, 248", "rgba(52, 211, 153")
      }
      if (property === "lineWidth" && typeof value === "number") {
        value = value * 2.2
      }
      return Reflect.set(target, property, value)
    },
  })
}
