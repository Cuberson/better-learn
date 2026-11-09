import { Show, createEffect, createMemo } from "solid-js"
import { useParams } from "solid-start"
import Card from "../../components/Topic/Card"
import GuideEdit from "../../components/Topic/GuideEdit"
import TitlePill from "../../components/Topic/TitlePill"
import TopicNav from "../../components/Topic/TopicNav"
import TopicTabs from "../../components/Topic/TopicTabs"
import { useGlobalTopic } from "../../GlobalContext/global-topic"
import { getTopicGuide } from "../../content"

export default function EditGuide() {
  const topic = useGlobalTopic()
  const params = useParams()
  const guide = createMemo(() => getTopicGuide(params.topic))

  createEffect(() => {
    const current = guide()
    if (current && topic.globalTopic.name !== current.name) {
      topic.setTopicFromGuide(current)
    }
  })

  return (
    <>
      <style>{`
        #InfoSidebar {
          display: none;
        }
        #InfoMain {
          width: 100%;
        }
        #InfoOptions {
          display: flex;
        }

      @media (min-width: 700px) {
        #InfoSidebar {
          display: flex;
        }
        #InfoMain {
          width: 65%;
        }
      }
      `}</style>
      <div class="w-screen h-full text-white bg-neutral-950">
        <TopicNav />
        <div class="w-full" style={{ padding: "24px 24px 0 24px" }}>
          <TitlePill />
        </div>
        <TopicTabs />
        <div class="h-fit w-full flex justify-center">
          <div
            id="InfoMain"
            class="h-full min-h-screen flex gap-6 flex-col"
            style={{ padding: "24px 40px 24px 40px" }}
          >
            <GuideEdit />
          </div>
          {/* add this when we have the data from server for who is learning the topic..  */}
          <div
            id="InfoSidebar"
            class="h-full w-[35%] flex flex-col gap-6 overflow-auto"
            style={{ padding: "24px 40px 24px 0px" }}
          >
            <div class="flex flex-col w-full gap-2 font-light text-[#6B6B70]"></div>
            <div id="Cards" class="flex flex-col gap-2">
              <Show when={true}>
                <Card name="Learners" />
              </Show>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
