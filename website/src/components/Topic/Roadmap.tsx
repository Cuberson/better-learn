import { For, Show, createEffect, createMemo, createSignal, onCleanup } from "solid-js"
import type { TopicGuide } from "../../content/types"
import { sourceKindLabel, stageMeta } from "../../content/types"
import {
  buildRoadmap,
  type RoadmapNode,
  type RoadmapZone,
} from "../../lib/roadmap"
import { sourceKindStyle } from "./sourceKindStyles"

type Props = {
  topic: TopicGuide
}

// The roadmap is generated from the sources of the topic: every zone is a
// stage, every box is a step, and every box owns the list of sources you use
// to complete it. Boxes are connected top to bottom so the order is obvious.
export default function Roadmap(props: Props) {
  const roadmap = createMemo(() => buildRoadmap(props.topic))
  const [opened, setOpened] = createSignal<RoadmapNode | null>(null)

  const closeModal = () => setOpened(null)

  const openedIndex = () => {
    const node = opened()
    if (!node) return -1
    return roadmap().nodes.findIndex((candidate) => candidate.step.id === node.step.id)
  }

  const move = (direction: -1 | 1) => {
    const nodes = roadmap().nodes
    const next = nodes[openedIndex() + direction]
    if (next) setOpened(next)
  }

  // lock the page behind the opened step, close on escape
  createEffect(() => {
    if (!opened()) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal()
      if (event.key === "ArrowRight") move(1)
      if (event.key === "ArrowLeft") move(-1)
    }

    document.addEventListener("keydown", onKeyDown)

    onCleanup(() => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
    })
  })

  return (
    <div class="w-full flex flex-col gap-6">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <div class="flex flex-col gap-1">
          <h2 class="text-[22px] font-bold text-white">Roadmap</h2>
          <p class="text-[13px] text-neutral-400 leading-[1.5] max-w-[560px]">
            Built from the {roadmap().sourceCount} sources on this page. Follow it
            from the top, one box at a time — click any box to see what it covers
            and the sources to explore for it.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-2 text-[12px] text-neutral-400">
          <span class="border border-neutral-800 rounded-full px-3 py-1">
            {roadmap().stepCount} steps
          </span>
          <span class="border border-neutral-800 rounded-full px-3 py-1">
            {roadmap().sourceCount} sources
          </span>
          <span class="border border-neutral-800 rounded-full px-3 py-1">
            {roadmap().zones.length} levels
          </span>
        </div>
      </div>

      <Show
        when={roadmap().stepCount > 0}
        fallback={
          <div class="border border-dashed border-neutral-700 rounded-xl p-8 text-center text-neutral-400">
            No roadmap has been built for this topic yet. Add a few sources to
            the guide and the roadmap will appear here.
          </div>
        }
      >
        <div class="flex flex-col gap-2">
          <For each={roadmap().zones}>
            {(zone, zoneIndex) => (
              <>
                <Show when={zoneIndex() > 0}>
                  <ZoneBridge from={roadmap().zones[zoneIndex() - 1]} to={zone} />
                </Show>
                <Zone zone={zone} onOpen={setOpened} />
              </>
            )}
          </For>
        </div>
      </Show>

      <Show when={opened()}>
        {(node) => (
          <StepModal
            node={node()}
            total={roadmap().stepCount}
            hasPrevious={openedIndex() > 0}
            hasNext={openedIndex() < roadmap().nodes.length - 1}
            onClose={closeModal}
            onPrevious={() => move(-1)}
            onNext={() => move(1)}
          />
        )}
      </Show>
    </div>
  )
}

function Zone(props: { zone: RoadmapZone; onOpen: (node: RoadmapNode) => void }) {
  const meta = () => stageMeta[props.zone.stage] ?? stageMeta.beginner

  return (
    <section class={`rounded-xl border ${meta().accentBorder} ${meta().accentBg} p-3 sm:p-4`}>
      <header class="flex flex-wrap items-center justify-between gap-2 pb-1">
        <div class="flex items-center gap-2">
          <span class={`w-2.5 h-2.5 rounded-full ${meta().dot}`} />
          <h3 class={`font-bold text-[16px] ${meta().accentText}`}>
            {props.zone.label}
          </h3>
        </div>
        <span class="text-[12px] text-neutral-400">
          {props.zone.nodes.length} step{props.zone.nodes.length === 1 ? "" : "s"} ·{" "}
          {props.zone.sourceCount} source{props.zone.sourceCount === 1 ? "" : "s"}
        </span>
      </header>
      <p class="text-[12px] text-neutral-400 pb-3">{props.zone.description}</p>

      <div class="flex flex-col items-center">
        <For each={props.zone.nodes}>
          {(node, index) => (
            <>
              <StepBox node={node} onOpen={props.onOpen} />
              <Show when={index() < props.zone.nodes.length - 1}>
                <Connector />
              </Show>
            </>
          )}
        </For>
      </div>
    </section>
  )
}

function StepBox(props: { node: RoadmapNode; onOpen: (node: RoadmapNode) => void }) {
  const meta = () => stageMeta[props.node.stage] ?? stageMeta.beginner

  return (
    <button
      type="button"
      onClick={() => props.onOpen(props.node)}
      aria-label={`Open step ${props.node.number}: ${props.node.step.title}`}
      class={`group w-full max-w-[620px] text-left bg-neutral-900 border ${meta().accentBorder} ${
        meta().nodeHover
      } rounded-xl px-3.5 py-3 hover:bg-neutral-800/70 transition-all active:scale-[0.995] focus:outline-none focus:ring-2 focus:ring-[#8AB4FF] focus:ring-offset-2 focus:ring-offset-black`}
    >
      <div class="flex items-start gap-3">
        <span
          class={`mt-[1px] shrink-0 w-7 h-7 rounded-full ${meta().accentBg} ${meta().accentText} border ${meta().accentBorder} text-[13px] font-bold flex items-center justify-center`}
        >
          {props.node.number}
        </span>

        <span class="min-w-0 flex-1 flex flex-col gap-1">
          <span class="font-semibold text-white leading-[1.35]">
            {props.node.step.title}
          </span>
          <span class="text-[13px] text-neutral-400 leading-[1.45] line-clamp-2">
            {props.node.step.summary}
          </span>
          <span class="mt-1 flex items-center gap-1.5 text-[12px] font-medium text-[#8AB4FF]">
            {props.node.sourceCount} source{props.node.sourceCount === 1 ? "" : "s"} to explore
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" aria-hidden="true">
              <path
                d="M1 1l4 4-4 4"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </span>

        <span class="hidden sm:flex shrink-0 items-center gap-1 pt-1 text-[11px] text-neutral-500">
          open
        </span>
      </div>
    </button>
  )
}

function Connector() {
  return (
    <div class="flex flex-col items-center py-[3px]" aria-hidden="true">
      <div class="w-[2px] h-4 bg-neutral-700" />
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path
          d="M1 1l5 5 5-5"
          stroke="#737373"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  )
}

function ZoneBridge(props: { from: RoadmapZone; to: RoadmapZone }) {
  return (
    <div class="flex flex-col items-center py-2" aria-hidden="true">
      <div class="w-[2px] h-5 bg-neutral-700" />
      <span class="text-[11px] uppercase tracking-[0.08em] text-neutral-400 px-2 py-1 border border-neutral-800 rounded-full bg-neutral-950">
        level up · {props.from.label} → {props.to.label}
      </span>
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" class="mt-1">
        <path
          d="M1 1l6 6 6-6"
          stroke="#737373"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  )
}

function StepModal(props: {
  node: RoadmapNode
  total: number
  hasPrevious: boolean
  hasNext: boolean
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}) {
  const meta = () => stageMeta[props.node.stage] ?? stageMeta.beginner
  let closeButton: HTMLButtonElement | undefined

  createEffect(() => {
    closeButton?.focus()
  })

  return (
    <div class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6">
      <div
        class="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
        onClick={props.onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="roadmap-step-title"
        class="relative bg-neutral-950 border border-neutral-800 w-full sm:max-w-[640px] max-h-[88vh] overflow-auto rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col"
      >
        <header class="sticky top-0 bg-neutral-950 border-b border-neutral-800 px-5 py-4 flex items-start justify-between gap-3">
          <div class="flex flex-col gap-2 min-w-0">
            <div class="flex flex-wrap items-center gap-2">
              <span
                class={`text-[11px] font-semibold px-2 py-[3px] rounded-full border ${meta().accentBorder} ${meta().accentBg} ${meta().accentText}`}
              >
                {meta().label}
              </span>
              <span class="text-[12px] text-neutral-500">
                step {props.node.number} of {props.total}
              </span>
            </div>
            <h3 id="roadmap-step-title" class="text-[20px] font-bold text-white leading-tight">
              {props.node.step.title}
            </h3>
          </div>
          <button
            ref={closeButton}
            type="button"
            onClick={props.onClose}
            aria-label="Close step"
            class="shrink-0 w-8 h-8 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#8AB4FF]"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path
                d="M1 1l11 11M12 1L1 12"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </header>

        <div class="px-5 py-4 flex flex-col gap-4">
          <p class="text-[15px] text-neutral-200 leading-[1.55]">{props.node.step.summary}</p>

          <Show when={props.node.step.outcome}>
            <div class="rounded-lg bg-neutral-900 border border-neutral-800 px-4 py-3">
              <div class="text-[11px] uppercase tracking-[0.08em] text-neutral-500 pb-1">
                When you finish this step
              </div>
              <div class="text-[14px] text-neutral-200 leading-[1.5]">
                {props.node.step.outcome}
              </div>
            </div>
          </Show>

          <div class="flex flex-col gap-2">
            <div class="text-[11px] uppercase tracking-[0.08em] text-neutral-500">
              Sources to explore
            </div>
            <For each={props.node.step.sources}>
              {(source) => (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group flex items-start gap-3 border border-neutral-800 rounded-lg px-3.5 py-3 hover:border-[#3B5CCC] hover:bg-neutral-900 transition-colors"
                >
                  <span
                    class={`shrink-0 text-[11px] font-medium border rounded-full px-2 py-[2px] mt-[1px] ${sourceKindStyle(
                      source.kind,
                    )}`}
                  >
                    {sourceKindLabel[source.kind ?? "article"]}
                  </span>
                  <span class="min-w-0 flex flex-col gap-[2px]">
                    <span class="text-[14px] font-semibold text-neutral-100 group-hover:text-[#8AB4FF] leading-[1.35]">
                      {source.title}
                    </span>
                    <Show when={source.description}>
                      <span class="text-[13px] text-neutral-400 leading-[1.45]">
                        {source.description}
                      </span>
                    </Show>
                    <span class="text-[12px] text-neutral-600 break-all">{source.url}</span>
                  </span>
                </a>
              )}
            </For>
          </div>
        </div>

        <footer class="sticky bottom-0 bg-neutral-950 border-t border-neutral-800 px-5 py-3 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={props.onPrevious}
            disabled={!props.hasPrevious}
            class="text-[13px] font-medium px-3 py-2 rounded-lg border border-neutral-800 text-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-neutral-600"
          >
            ← Previous
          </button>
          <span class="text-[12px] text-neutral-600 hidden sm:block">
            use ← → to move through the roadmap
          </span>
          <button
            type="button"
            onClick={props.onNext}
            disabled={!props.hasNext}
            class="text-[13px] font-medium px-3 py-2 rounded-lg border border-neutral-800 text-neutral-300 disabled:opacity-40 disabled:cursor-not-allowed hover:border-neutral-600"
          >
            Next step →
          </button>
        </footer>
      </div>
    </div>
  )
}
