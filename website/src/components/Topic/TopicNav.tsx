import { Show, createSignal, onMount } from "solid-js"
import { A, useNavigate } from "solid-start"
import { useUser } from "../../GlobalContext/user"
import Icon from "../Icon"
import Search from "../Search"
import { safeQuery, type TopicsQueryResult } from "../../../lib/api"
import { useMobius } from "../../root"
import { useGlobalState } from "../../GlobalContext/global"
import {
  buildTopicSearchItems,
  topicHref,
  type TopicSearchItem,
} from "../../lib/search"

export default function TopicNav() {
  const [showInput, setShowInput] = createSignal(false)
  const navigate = useNavigate()
  const user = useUser()
  const mobius = useMobius()
  const global = useGlobalState()

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

  const openTopic = (topic: TopicSearchItem) => {
    setShowInput(false)
    navigate(topicHref(topic.name))
  }

  return (
    <>
      <style>
        {`
    #NavMenu {
      display: block;
    }
    #NavButtons {
      display: none;
    }
    @media (min-width: 700px) {
      #NavMenu {
        display: none;
      }
      #NavButtons {
        display: flex;
      }
    }
      `}
      </style>
      <div class="flex flex-col">
        <div class="h-[80px] w-full p-4 flex items-center justify-between gap-4 border-b border-neutral-800">
          <div class="flex gap-4 h-full items-center min-w-0 flex-1">
            <div
              class="w-[40px] h-[40px] rounded-full shrink-0 cursor-pointer overflow-hidden"
              onClick={() => {
                navigate("/")
              }}
            >
              <img src="/logo.jpg" alt="Learn Anything" />
            </div>

            <div
              onClick={() => setShowInput(true)}
              class={`relative rounded-[4px] h-full flex items-center font-light border w-full max-w-[500px] min-w-0 transition-all ${
                showInput()
                  ? "bg-white border-white"
                  : "bg-white border-white text-[#696969] hover:border-neutral-300"
              }`}
              style={{ "min-height": "44px" }}
            >
              <Show
                when={showInput()}
                fallback={
                  <div class="p-[6px] px-3 cursor-text select-none flex items-center gap-2">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="5"
                        stroke="currentColor"
                        stroke-width="1.6"
                      />
                      <path
                        d="M11 11l3.5 3.5"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      />
                    </svg>
                    Search Topic
                  </div>
                }
              >
                <Search
                  variant="night"
                  autofocus
                  placeholder="Search Topic"
                  searchResults={searchItems()}
                  onSelect={openTopic}
                />
              </Show>
            </div>
          </div>

          <div id="NavMenu" class="shrink-0">
            <button
              type="button"
              class="text-neutral-400 hover:text-white text-sm font-medium"
              onClick={() => setShowInput(true)}
            >
              Search
            </button>
          </div>

          <div id="NavButtons" class="flex items-center justify-center gap-4 shrink-0">
            <Show
              when={!user.user.signedIn}
              fallback={
                <A
                  class="cursor-pointer"
                  style={{
                    color: "white",
                  }}
                  href={`/@${user.user.username}`}
                >
                  <Icon name="UserProfile" />
                </A>
              }
            >
              <A class="text-white font-medium" href="/auth">
                Sign In
              </A>
              <A
                href="/auth"
                class="bg-white hover:scale-[1.05] leading-[23.48px] w-fit text-black h-[39px] flex items-center justify-center font-medium text-[17px] px-4 p-2 rounded-full cursor-pointer"
              >
                Sign Up
              </A>
            </Show>
          </div>
        </div>
      </div>
    </>
  )
}
