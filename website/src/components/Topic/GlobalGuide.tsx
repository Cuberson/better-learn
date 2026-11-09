import { For, Show } from "solid-js"
import { useGlobalTopic } from "../../GlobalContext/global-topic"
import GuideSection from "./GuideSection"
import GuideSummary from "./GuideSummary"

export default function GlobalGuide() {
  const topic = useGlobalTopic()

  return (
    <>
      <GuideSummary />

      <Show when={topic.globalTopic.globalGuide.sections.length === 0}>
        <div class="border border-dashed border-neutral-700 rounded-xl p-8 text-center text-neutral-400">
          <div class="font-semibold text-white pb-1">
            No sources for this topic yet
          </div>
          This topic is in the database but its guide has not been written. Try
          searching for a related topic — the roadmap is generated from the
          sources of a topic.
        </div>
      </Show>

      <For each={topic.globalTopic.globalGuide.sections}>
        {(section) => {
          return (
            <GuideSection
              title={section.title}
              links={section.links}
              summary={section.summary}
            />
          )
        }}
      </For>

      <Show when={topic.globalTopic.globalGuide.sections.length > 0}>
        <button
          type="button"
          onClick={() => topic.setShowPage("Roadmap")}
          class="w-full flex items-center justify-between gap-3 border border-[#3B5CCC] text-[#8AB4FF] hover:bg-[#3B5CCC] hover:text-white transition-colors rounded-lg px-4 py-3 font-semibold text-[15px]"
        >
          <span class="flex flex-col items-start gap-[2px] text-left">
            <span>Follow this as a roadmap</span>
            <span class="text-[12px] font-normal opacity-80">
              {topic.globalTopic.globalGuide.sections.reduce(
                (total, section) => total + section.links.length,
                0,
              )}{" "}
              sources turned into a step by step path
            </span>
          </span>
          <span aria-hidden="true">→</span>
        </button>
      </Show>
    </>
  )
}
