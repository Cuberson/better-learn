import { Show, createMemo, createSignal } from "solid-js"
import { useNavigate } from "solid-start"
import { useGlobalTopic } from "../../GlobalContext/global-topic"

export default function GuideSummary() {
  const [showSummary, setShowSummary] = createSignal(false)
  const topic = useGlobalTopic()
  const navigate = useNavigate()

  const summary = createMemo(() => topic.globalTopic.globalGuide.summary)
  const isLong = createMemo(() => summary().split(/\s+/).filter(Boolean).length > 45)

  return (
    <div class="w-full flex flex-col gap-4 text-[16px] leading-[18.78px]">
        <div class="flex justify-between items-center">
          <div class="text-neutral-500 cursor-default">v1.0</div>
          <div
            class="text-neutral-400 cursor-pointer hover:text-white transition-all"
            onClick={() => {
              const name = topic.globalTopic.name
              if (name) navigate(`/${name}/edit`)
            }}
          >
            Improve Guide
          </div>
        </div>

        <div class="bg-neutral-900 border border-neutral-800 flex flex-col gap-2 rounded-[6px] p-4 w-full">
          <div class="flex justify-between items-center">
            <div class="text-neutral-400">Summary</div>
            <Show when={isLong()}>
              <button
                type="button"
                class="text-[#8AB4FF] cursor-pointer select-none text-[14px]"
                onClick={() => setShowSummary(!showSummary())}
              >
                {showSummary() ? "Minimise" : "Expand"}
              </button>
            </Show>
          </div>
          <div
            class="text-neutral-300 font-light leading-[1.6] overflow-hidden"
            style={{
              "max-height": showSummary() ? "none" : "97px",
            }}
          >
            {summary()}
          </div>
        </div>
    </div>
  )
}
