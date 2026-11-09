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

  let openTopicRef: (topic: TopicSearchItem) => void = () => {}

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

  // The background is decoration, not a map: it can be hovered and clicked,
  // but never panned, zoomed or dragged, so it always stays exactly where it
  // is while you scroll and read. (It used to be a free-roaming canvas.)
  const pointerToGraph = (event: PointerEvent) => {
    const rect = el.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return

    const grid = graph.grid.size
    const { scale, translate } = canvas
    const scaled = grid / scale
    const correct = grid / 2 - scaled / 2
    const width = canvas.size.width || rect.width
    const height = canvas.size.height || rect.height

    const ratioX = (event.clientX - rect.left) / rect.width
    const ratioY = (event.clientY - rect.top) / rect.height

    return {
      x:
        (ratioX * Math.min(1, width / height) + Canvas.arMargin(width / height)) *
          scaled +
        correct +
        translate.x,
      y:
        (ratioY * Math.min(1, height / width) + Canvas.arMargin(height / width)) *
          scaled +
        correct +
        translate.y,
    }
  }

  const nodeAt = (event: PointerEvent) => {
    const point = pointerToGraph(event)
    if (!point) return
    return Graph.findClosestNodeLinear(
      graph.nodes,
      point,
      Canvas.pointerNodeRadius(canvas.max_size, graph.grid.size),
    )
  }

  const onPointerMove = (event: PointerEvent) => {
    const node = nodeAt(event) ?? null
    if (node === canvas.hovered_node) return
    canvas.hovered_node = node
    el.style.cursor = node ? "pointer" : "default"
    Anim.requestFrame(animation)
  }

  const onPointerLeave = () => {
    if (!canvas.hovered_node) return
    canvas.hovered_node = null
    Anim.requestFrame(animation)
  }

  const onBackgroundClick = (event: MouseEvent) => {
    const node = nodeAt(event as PointerEvent)
    const topic = node ? background.topics.get(String(node.key)) : undefined
    if (topic) openTopicRef(topic)
  }

  el.addEventListener("pointermove", onPointerMove)
  el.addEventListener("pointerleave", onPointerLeave)
  el.addEventListener("click", onBackgroundClick)
  onCleanup(() => {
    el.removeEventListener("pointermove", onPointerMove)
    el.removeEventListener("pointerleave", onPointerLeave)
    el.removeEventListener("click", onBackgroundClick)
  })

  const openTopic = (topic: TopicSearchItem) => {
    navigate(topicHref(topic.name))
  }
  openTopicRef = openTopic

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
