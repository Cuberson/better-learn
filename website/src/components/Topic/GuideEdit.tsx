import { For, Show, createMemo, onMount } from "solid-js"
import { useParams } from "solid-start"
import { useEditGuide } from "../../GlobalContext/edit-guide"
import { useMobius } from "../../root"
import { safeQuery } from "../../../lib/api"
import { getTopicGuide } from "../../content"
import { sourcesByStage } from "../../lib/roadmap"

export default function GuideSummaryEdit() {
  const editedGuide = useEditGuide()
  const mobius = useMobius()
  const params = useParams()
  const guide = createMemo(() => getTopicGuide(params.topic))

  // the editor starts from the bundled guide of the topic (its sources)
  // instead of a hard coded topic
  onMount(() => {
    const current = guide()
    if (!current || editedGuide.guide.sections.length > 0) return

    editedGuide.set({
      summary: current.topicSummary,
      sections: sourcesByStage(current).map((group, index) => ({
        order: index,
        title: group.label,
        ordered: true,
        summary: undefined,
        links: group.steps.flatMap(({ step, sources }) =>
          sources.map((source) => ({
            title: source.title,
            url: source.url,
            author: source.author,
            year: source.year,
          })),
        ),
      })),
    })
  })

  // createEffect(() => {
  //   const editableDiv = document.getElementById("GuideSummary")!

  //   editableDiv.addEventListener("click", () => {
  //     editableDiv.setAttribute("contenteditable", "true")
  //     editableDiv.focus()
  //   })
  //   createShortcut(["ENTER"], () => {
  //     let summary = document.getElementById("GuideSummary")!.innerHTML
  //   })
  // })

  // createEffect(() => {
  //   editedGuide.globalTopic.globalGuide.sections.map((section, index) => {
  //     const editableDiv = document.getElementById(`${section.title}${index}`)!

  //     editableDiv.addEventListener("click", () => {
  //       editableDiv.setAttribute("contenteditable", "true")
  //       editableDiv.focus()
  //     })
  //     createShortcut(["ENTER"], () => {
  //       let sectionTitle = document.getElementById(
  //         `${section.title}${index}`,
  //       )!.innerHTML
  //     })
  //   })
  // })

  return (
    <>
      <style>{`
    #GuideSummaryExpanded {
      height: 100%;
    }
    #GuideSummaryMinimised {
      height: 97px
    }
  `}</style>
      <div class="w-full flex flex-col gap-4 text-[16px] leading-[18.78px]">
        <div class="flex justify-between items-center ">
          <div
            class="border border-neutral-700 p-[8px] px-[10px] rounded-[4px] text-neutral-300 font-light hover:bg-neutral-800 cursor-pointer transition-all"
            onClick={() => { }}
          >
            Cancel
          </div>
          <div onClick={() => {
            console.log("run")
            console.log(editedGuide.guide.sections)
            editedGuide.guide.sections.map(section => {
              section.links.map((link, index) => {
                console.log(`${section.title}-link-title-${index}`, "id")
                console.log(document.getElementById(`${section.title}-link-title-${index}`), "link title")
              })
            })
          }} class="bg-blue-600 text-white border-blue-600 border px-[10px] p-[8px] rounded-[4px] font-light cursor-pointer hover:bg-blue-500">
            Submit Changes
          </div>
        </div>
        <div
          class="bg-neutral-900 border border-neutral-800 flex flex-col gap-2 rounded-[6px] p-4 w-full"
        >
          <div class="flex justify-between items-center">
            <div class="text-neutral-400 ">Summary</div>
            <div
              class="text-[#8AB4FF] cursor-pointer select-none"
              onClick={() => {
              }}
            >
            </div>
          </div>
          <Show
            when={editedGuide.guide.summary.length > 0}
            fallback={
              <div
                class="text-neutral-400 font-light overflow-hidden text-ellipsis outline-none"
                id="GuideSummary"
                onClick={() => {
                }}
              >
                Add summary
              </div>
            }
          >
            <div
              class="text-neutral-400 font-light overflow-hidden text-ellipsis outline-none"
              id="GuideSummary"
              onClick={() => {
              }}
            >
              {editedGuide.guide.summary}
            </div>
          </Show>
        </div>
        <div
          class="bg-blue-600 text-white p-3 rounded-[6px] flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-all"
          onClick={() => {
            editedGuide.addSection({
              order: 0,
              title: "hello",
              ordered: true,
              links: [],
            })
            console.log(editedGuide.guide.sections, "sections")
          }}
        >
          Add section
        </div>
        <For each={editedGuide.guide.sections}>
          {(section, index) => {
            return (
              <div class="border border-neutral-800 rounded-lg flex flex-col gap-4 p-4">
                <Show
                  when={section.title.length > 0}
                  fallback={
                    <div
                      class="text-neutral-400 font-light overflow-hidden text-ellipsis outline-none"
                      id={`${section.title}${index()}`}
                      onClick={() => { }}
                    >
                      Add section title
                    </div>
                  }
                >
                  <div
                    class="text-neutral-400 font-light overflow-hidden text-ellipsis outline-none"
                    id={`${section.title}${index()}`}
                    onClick={() => { }}
                  >
                    {section.title}
                  </div>
                </Show>
                <div class="flex flex-col">
                  <For each={section.links}>
                    {(link, index) => {
                      let linkTitleId = `${section.title}-link-title-${index}`
                      let linkUrlId = `${section.title}-link-url-${index}`
                      return (
                        <div class="flex items-center gap-6 justify-between border-b border-slate-400 border-opacity-30 p-2">
                          <div class="w-full  h-full flex justify-between items-center">
                            <div class="w-fit gap-1 flex flex-col">
                              <div class="font-bold text-[#8AB4FF]">
                                <input
                                  class="border border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 rounded-[6px] px-2 py-1"
                                  id={linkTitleId}
                                  type="text"
                                  placeholder="Title"
                                  value={link.title}
                                />
                              </div>
                              <div class="flex w-full">
                                <Show when={link?.year}>
                                  <div class="font-light text-[12px] text-neutral-400 border-r border-[#CCCCCC] px-2">
                                    {link?.year}
                                  </div>
                                </Show>
                                <Show when={link?.author}>
                                  <div class="font-light text-[12px] text-neutral-400 border-r border-[#CCCCCC] px-2">
                                    {link?.author}
                                  </div>
                                </Show>
                                <div class="font-light w-full text-[12px] text-neutral-400">
                                  <input
                                    class="border border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 rounded-[6px] px-2 py-1 w-full"
                                    type="text"
                                    id={linkUrlId}
                                    placeholder="URL"
                                    value={link.title}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="flex gap-5 text-[14px] opacity-50">
                              <div
                                onClick={async () => {
                                  const input = document.getElementById(linkUrlId) as HTMLInputElement | null
                                  const linkUrl = input?.value
                                  if (!linkUrl) return

                                  const res = await safeQuery(async () => {
                                    return mobius.query({
                                      checkForGlobalLink: {
                                        where: {
                                          linkUrl,
                                        },
                                        select: {
                                          url: true,
                                          title: true,
                                        },
                                      },
                                    })
                                  })
                                  console.log(res, "res")
                                }}
                                class="cursor-pointer"
                              >
                                Check URL
                              </div>
                              <div class="cursor-pointer">Sort</div>
                              <div class="cursor-pointer">Delete</div>
                            </div>
                          </div>
                        </div>
                      )
                    }}
                  </For>
                </div>
                <div class="w-full justify-end flex">
                  <div
                    class="bg-blue-600 text-white text-[14px] p-2 px-4 rounded-[6px] flex justify-center items-center cursor-pointer hover:bg-blue-500 transition-all"
                    onClick={() => {
                      editedGuide.addLinkToSection(0, {
                        title: "",
                        url: "",
                      })
                      console.log(section.links, "links")
                    }}
                  >
                    Add link
                  </div>
                </div>
              </div>
            )
          }}
        </For>
      </div>
    </>
  )
}
