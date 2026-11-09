import { Show, createSignal, onCleanup, onMount } from "solid-js"
import { useNavigate } from "solid-start"
import { Canvas, Graph, Anim } from "@nothing-but/force-graph"
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
import { generateTopicGraph, themedContext } from "../lib/backgroundGraph"
import Search from "../components/Search"

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

  // every topic we support, drawn behind the search box
  const background = generateTopicGraph(buildTopicSearchItems())
  const graph = background.graph

  const el = (<canvas class="absolute w-full h-full" />) as HTMLCanvasElement

  const ctx = el.getContext("2d")
  if (!ctx) throw new Error("no context")

  const canvas = Canvas.canvasState({
    ...Canvas.default_options,
    el,
    ctx: themedContext(ctx),
    graph,
    init_scale: 2,
    nodeLabel: (node) => background.labels.get(String(node.key)) ?? "",
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
      const topic = background.topics.get(String(node.key))
      if (topic) navigate(topicHref(topic.name))
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
