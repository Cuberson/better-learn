import clsx from "clsx"
import { useGlobalTopic } from "../../GlobalContext/global-topic"
import Icon from "../Icon"

const statusButton =
  "px-[10px] p-[6px] pl-[4.5px] active:scale-[1.03] cursor-pointer text-neutral-400 flex items-center justify-center gap-1 text-[16px] leading-[18.78px] border-neutral-700 border rounded-[6px] hover:bg-blue-600 hover:text-white transition-all"

export default function TitlePill() {
  const topic = useGlobalTopic()

  return (
    <div
      class="w-full flex items-center justify-between gap-3 rounded-[8px] border border-neutral-800 bg-neutral-900"
      style={{ padding: "8px 16px 8px 16px" }}
    >
      <div class="font-bold text-[20px] text-white truncate">
        {topic.globalTopic.prettyName}
      </div>
      <div class="flex items-center justify-center gap-4">
        {/* TODO: should come from server */}
        <div
          onClick={() => {
            // topic.setLearningStatus("to learn")
          }}
          class={clsx(
            statusButton,
            topic.globalTopic.userLearningStatus === "to learn" &&
              "bg-blue-600 text-white border-transparent",
          )}
        >
          <Icon name="Learn" />
          <div class="hidden sm:block">To Learn</div>
        </div>
        <div
          onClick={() => {
            topic.setUserLearningStatus("learning")
          }}
          class={clsx(
            statusButton,
            topic.globalTopic.userLearningStatus === "learning" &&
              "bg-blue-600 text-white border-transparent",
          )}
        >
          <Icon name="Learn" />
          <div class="hidden sm:block">Learning</div>
        </div>
        <div
          onClick={() => {
            topic.setUserLearningStatus("learned")
          }}
          class={clsx(
            statusButton,
            topic.globalTopic.userLearningStatus === "learned" &&
              "bg-blue-600 text-white border-transparent",
          )}
        >
          <Icon name="Learn" />
          <div class="hidden sm:block">Learned</div>
        </div>
      </div>
    </div>
  )
}
