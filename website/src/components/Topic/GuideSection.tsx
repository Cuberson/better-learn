import { For, Show } from "solid-js"
import { sourceKindLabel } from "../../content/types"
import type { Link } from "../../GlobalContext/global-topic"
import { sourceKindStyle } from "./sourceKindStyles"

type Props = {
  title: string
  links: Link[]
  summary?: string
}

export default function GuideSection(props: Props) {
  return (
    <div class="flex flex-col gap-4 leading-[18.78px] border border-neutral-800 rounded-lg p-3">
      <div class="flex flex-col gap-1">
        <div class="text-white font-bold">{props.title}</div>
        <Show when={props.summary}>
          <div class="text-[12px] text-neutral-400">{props.summary}</div>
        </Show>
      </div>

      <div class="flex flex-col gap-2">
        <For each={props.links}>
          {(link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-start gap-3 rounded-md px-2 py-2 hover:bg-neutral-900 transition-colors"
            >
              <span
                class={`shrink-0 text-[11px] font-medium border rounded-full px-2 py-[2px] mt-[1px] ${sourceKindStyle(
                  link.kind,
                )}`}
              >
                {sourceKindLabel[link.kind ?? "article"]}
              </span>

              <span class="min-w-0 w-full flex flex-col gap-[2px]">
                <span class="font-bold text-[#8AB4FF] leading-[1.35] group-hover:underline">
                  {link.title}
                </span>
                <Show when={link.description}>
                  <span class="text-[13px] text-neutral-400 leading-[1.45]">
                    {link.description}
                  </span>
                </Show>
                <span class="flex items-center gap-2 text-[12px] text-neutral-500">
                  <Show when={link.stepTitle}>
                    <span class="whitespace-nowrap">{link.stepTitle}</span>
                    <span class="text-neutral-700">·</span>
                  </Show>
                  <span class="truncate">{link.url}</span>
                </span>
              </span>

              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                class="shrink-0 mt-1 text-neutral-600 group-hover:text-[#8AB4FF]"
                aria-hidden="true"
              >
                <path
                  d="M4 1h7v7M11 1L1 11"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          )}
        </For>
      </div>
    </div>
  )
}
