import { For, Show, createMemo } from "solid-js"
import type { TopicGuide } from "../../content/types"
import { sourceKindLabel, stageMeta } from "../../content/types"
import { sourcesByStage } from "../../lib/roadmap"
import { sourceKindStyle } from "./sourceKindStyles"

type Props = {
  topic: TopicGuide | null | undefined
}

// The sources page. These are the exact sources the roadmap is generated from,
// grouped by the stage and the step they belong to.
export default function Sources(props: Props) {
  const groups = createMemo(() => (props.topic ? sourcesByStage(props.topic) : []))

  const totalSources = createMemo(() =>
    groups().reduce(
      (total, group) =>
        total +
        group.steps.reduce((sum, entry) => sum + entry.sources.length, 0),
      0,
    ),
  )

  return (
    <div class="w-full flex flex-col gap-6">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <div class="flex flex-col gap-1">
          <h2 class="text-[22px] font-bold text-white">Sources</h2>
          <p class="text-[13px] text-neutral-400 leading-[1.5] max-w-[560px]">
            Every source used to build the roadmap for{" "}
            {props.topic?.prettyName ?? "this topic"} — {totalSources()} in total,
            grouped by the step they belong to.
          </p>
        </div>
        <Show when={props.topic}>
          <div class="text-[12px] text-neutral-400 border border-neutral-800 rounded-full px-3 py-1">
            {props.topic!.steps.length} steps · {totalSources()} sources
          </div>
        </Show>
      </div>

      <Show
        when={groups().length > 0}
        fallback={
          <div class="border border-dashed border-neutral-700 rounded-xl p-8 text-center text-neutral-400">
            <div class="font-semibold text-white pb-1">No sources yet</div>
            Sources for this topic have not been added yet. Check the Global Guide
            for the summary, or search for a related topic.
          </div>
        }
      >
        <For each={groups()}>
          {(group) => {
            const meta = () => stageMeta[group.stage] ?? stageMeta.beginner
            const count = () =>
              group.steps.reduce((sum, entry) => sum + entry.sources.length, 0)

            return (
              <section class="flex flex-col gap-3">
                <header class="flex flex-wrap items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <span class={`w-2.5 h-2.5 rounded-full ${meta().dot}`} />
                    <h3 class={`font-bold text-[16px] ${meta().accentText}`}>
                      {group.label}
                    </h3>
                  </div>
                  <span class="text-[12px] text-neutral-500">
                    {count()} source{count() === 1 ? "" : "s"}
                  </span>
                </header>

                <For each={group.steps}>
                  {(entry) => (
                    <div class="border border-neutral-800 rounded-lg p-3 flex flex-col gap-3">
                      <div class="flex items-center justify-between gap-3">
                        <div class="font-semibold text-white text-[14px]">
                          {entry.step.title}
                        </div>
                        <div class="text-[11px] text-neutral-500 whitespace-nowrap">
                          {entry.sources.length} source
                          {entry.sources.length === 1 ? "" : "s"}
                        </div>
                      </div>

                      <div class="flex flex-col gap-2">
                        <For each={entry.sources}>
                          {(source) => (
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              class="group flex items-start gap-3 rounded-md px-2 py-2 hover:bg-neutral-900 transition-colors"
                            >
                              <span
                                class={`shrink-0 text-[11px] font-medium border rounded-full px-2 py-[2px] mt-[1px] ${sourceKindStyle(
                                  source.kind,
                                )}`}
                              >
                                {sourceKindLabel[source.kind ?? "article"]}
                              </span>
                              <span class="min-w-0 flex flex-col gap-[2px]">
                                <span class="text-[14px] font-semibold text-[#8AB4FF] leading-[1.35] group-hover:underline">
                                  {source.title}
                                </span>
                                <Show when={source.description}>
                                  <span class="text-[13px] text-neutral-400 leading-[1.45]">
                                    {source.description}
                                  </span>
                                </Show>
                                <span class="text-[12px] text-neutral-500 truncate">
                                  {source.url}
                                </span>
                              </span>
                            </a>
                          )}
                        </For>
                      </div>
                    </div>
                  )}
                </For>
              </section>
            )
          }}
        </For>
      </Show>
    </div>
  )
}
