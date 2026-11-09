import { Show, createSignal, onCleanup, onMount } from "solid-js"
import { useNavigate } from "solid-start"
import { Canvas, Graph, Anim } from "@nothing-but/force-graph"
import { Num } from "@nothing-but/utils"
import { getHankoCookie } from "../../lib/auth"
import { safeQuery, type TopicsQueryResult } from "../../lib/api"
import { useMobius } from "../root"
import { useGlobalState } from "../GlobalContext/global"
import { catalogStats } from "../content"
import {
  buildTopicSearchItems,
  topicHref,
  type TopicSearchItem,
} from "../lib/search"
import Search from "../components/Search"

export const graph_options = Graph.graphOptions({
  inertia_strength: 0.3,
  origin_strength: 0.01,
  repel_distance: 22,
  repel_strength: 0.5,
})

export function generateInitialGraph(length: number = 256): Graph.Graph {
  const nodes: Graph.Node[] = Array.from({ length }, Graph.makeNode)
  const edges: Graph.Edge[] = []

  for (let i = 0; i < length; i++) {
    const node = nodes[i]!

    if (node.edges.length > 0 && Math.random() < 0.8) continue

    const b_index = Num.random_int(length)
    let node_b = nodes[b_index]!

    if (node_b === node) {
      node_b = nodes[(b_index + 1) % length]!
    }

    edges.push(Graph.connect(node, node_b))
  }

  Graph.randomizeNodePositions(nodes, graph_options.grid_size)

  return Graph.makeGraph(graph_options, nodes, edges)
}

export default function Home() {
  const navigate = useNavigate()
  const mobius = useMobius()
  const global = useGlobalState()

  // everything in the bundled catalog is searchable right away, topics that
  // only exist on the server are merged in when the request succeeds
  const [searchItems, setSearchItems] = createSignal(buildTopicSearchItems())

  onMount(async () => {
    if (global.state.globalTopicsSearchList.length > 0) {
      setSearchItems(buildTopicSearchItems(global.state.globalTopicsSearchList))
      return
    }

    const result = await safeQuery<TopicsQueryResult>(async () => {
      return (await mobius.query({
        publicGetGlobalTopics: {
          prettyName: true,
          name: true,
        },
      })) as TopicsQueryResult
    })

    const serverTopics = result?.data?.publicGetGlobalTopics
    if (Array.isArray(serverTopics) && serverTopics.length > 0) {
      global.setGlobalTopicsSearchList(serverTopics)
      setSearchItems(buildTopicSearchItems(serverTopics))
    }
  })

  const [hankoCookie] = createSignal(getHankoCookie())

  const graph = generateInitialGraph()

  const el = (<canvas class="absolute w-full h-full" />) as HTMLCanvasElement

  const ctx = el.getContext("2d")
  if (!ctx) throw new Error("no context")

  const canvas = Canvas.canvasState({
    ...Canvas.default_options,
    el,
    ctx,
    graph,
    init_scale: 2,
  })

  const animation = Anim.frameAnimation({
    ...Anim.default_options,
    onIteration(alpha) {
      Graph.simulate(graph, alpha)
    },
    onFrame() {
      Canvas.drawCanvas(canvas)
    },
  })
  Anim.bump(animation)

  onCleanup(() => Anim.cleanup(animation))

  const ro = Canvas.resizeObserver(el, (size) => {
    Canvas.updateCanvasSize(canvas, size)
    Anim.requestFrame(animation)
  })
  onCleanup(() => ro.disconnect())

  const gestures = Canvas.canvasGestures({
    canvas,
    onTranslate() {
      Anim.requestFrame(animation)
    },
    onNodeClick(node) {
      console.log("click", node)
    },
    onNodeHover(node) {
      canvas.hovered_node = node
    },
    onNodeDrag(node, pos) {
      Graph.changeNodePosition(canvas.options.graph.grid, node, pos.x, pos.y)
      Anim.requestFrame(animation)
    },
    onModeChange(mode) {
      if (mode === Canvas.Mode.DraggingNode) {
        Anim.start(animation)
      } else {
        Anim.pause(animation)
      }
    },
  })
  onCleanup(() => Canvas.cleanupCanvasGestures(gestures))

  const openTopic = (topic: TopicSearchItem) => {
    navigate(topicHref(topic.name))
  }

  return (
    <>
      <style>
        {`
    #RotatePlanet {
      animation: 20s RotatePlanets infinite linear;
    }
    @keyframes RotatePlanets {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }

    `}
      </style>
      <div class="w-full h-full">
        <div class="w-screen bg-neutral-950 text-white h-screen flex flex-col  items-center justify-start">
          <div class="flex flex-col gap-2 items-center p-[50px] w-full max-w-[720px] z-50 pt-[70px]">
            <div
              class=" tracking-wide font-bold bg-clip-text text-transparent"
              style={{
                "background-image":
                  "linear-gradient(145deg, #fff 65%, rgba(255,255,255,.43))",
                "font-size": "clamp(2.6rem, 9vw, 5rem)",
              }}
            >
              I want to learn
            </div>

            <div class="w-full relative flex flex-col gap-3">
              <Search
                variant="dark"
                autofocus
                placeholder="Search a topic — physics, rust, machine learning…"
                searchResults={searchItems()}
                onSelect={openTopic}
              />
              <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12px] text-neutral-400">
                <span>
                  {searchItems().length} topics · {catalogStats.sourceCount} curated
                  sources
                </span>
                <span class="text-neutral-600">·</span>
                <span>every topic has a roadmap</span>
              </div>
            </div>
          </div>

          <div class="w-[80%] flex justify-center">{el}</div>

          <Show when={!hankoCookie}>
            <div
              onClick={() => {
                navigate("/auth")
              }}
              class="absolute top-5 right-5 hover:text-green-400 font-bold text-lg transition-all cursor-pointer"
            >
              Sign In
            </div>
          </Show>
        </div>
      </div>
    </>
  )
}
