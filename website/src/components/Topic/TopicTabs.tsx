import { For } from "solid-js"
import { useLocation, useNavigate, useParams } from "solid-start"
import { useGlobalTopic } from "../../GlobalContext/global-topic"

type Page = "Global Guide" | "Roadmap" | "Links" | "Notes"

const tabs: Page[] = ["Global Guide", "Roadmap", "Links", "Notes"]

// The tab bar shared by the topic page and the guide edit page.
export default function TopicTabs() {
  const topic = useGlobalTopic()
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  const isEditRoute = () => location.pathname.replace(/\/$/, "").endsWith("/edit")

  const select = (page: Page) => {
    topic.setShowPage(page)
    // the edit page is a separate route, so going to any tab leaves it
    if (isEditRoute()) {
      navigate(`/${params.topic ?? topic.globalTopic.name}`)
    }
  }

  return (
    <div
      id="InfoOptions"
      class="w-full flex gap-6 sm:gap-8 text-base sm:text-lg font-light overflow-x-auto whitespace-nowrap"
      style={{ padding: "24px 40px 0 40px" }}
    >
      <For each={tabs}>
        {(page) => {
          const isActive = () => topic.globalTopic.showPage === page

          return (
            <button
              type="button"
              onClick={() => select(page)}
              aria-current={isActive() ? "page" : undefined}
              class={`pb-1 border-b-2 transition-colors ${
                isActive()
                  ? "border-white text-white font-normal"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              {page}
            </button>
          )
        }}
      </For>
    </div>
  )
}
