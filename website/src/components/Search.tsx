import { For, Show, createMemo, createSignal, onCleanup, onMount } from "solid-js"
import { createTopicSearch, searchTopics, type TopicSearchItem } from "../lib/search"

type Props = {
  placeholder: string
  /** all topics that can be searched over */
  searchResults: TopicSearchItem[]
  /** called when a topic is picked with the mouse or the keyboard */
  onSelect: (topic: TopicSearchItem) => void
  autofocus?: boolean
  /**
   * `dark` is the big white search on the black landing page,
   * `night` is the white search inside the black top bar of a topic page,
   * `light` is the plain search used outside the dark pages.
   *
   * Both dark variants are white boxes with black text: on a black page the
   * white field is the thing that says "type here", so it stays white.
   */
  variant?: "dark" | "night" | "light"
  inputClass?: string
  panelClass?: string
  onQueryChange?: (query: string) => void
}

// Fuzzy, keyboard friendly topic search. Used by the landing page and by the
// top bar of a topic page so both searches always behave the same way.
export default function Search(props: Props) {
  const [query, setQuery] = createSignal("")
  const [open, setOpen] = createSignal(false)
  const [selected, setSelected] = createSignal(0)

  let wrapper: HTMLDivElement | undefined
  let input: HTMLInputElement | undefined

  const fuse = createMemo(() => createTopicSearch(props.searchResults))
  const results = createMemo(() => searchTopics(fuse(), props.searchResults, query()))

  // clamp instead of storing state, so the list changing can never point the
  // selection at a row that does not exist anymore
  const activeIndex = () => {
    const list = results()
    if (list.length === 0) return 0
    return Math.min(Math.max(selected(), 0), list.length - 1)
  }

  const updateQuery = (value: string) => {
    setQuery(value)
    setSelected(0)
    props.onQueryChange?.(value)
  }

  const choose = (topic: TopicSearchItem) => {
    setOpen(false)
    setQuery(topic.prettyName)
    props.onSelect(topic)
  }

  const onKeyDown = (event: KeyboardEvent) => {
    const list = results()

    if (event.key === "ArrowDown") {
      event.preventDefault()
      setOpen(true)
      if (list.length > 0) setSelected((activeIndex() + 1) % list.length)
      return
    }

    if (event.key === "ArrowUp") {
      event.preventDefault()
      setOpen(true)
      if (list.length > 0) {
        setSelected((activeIndex() - 1 + list.length) % list.length)
      }
      return
    }

    if (event.key === "Enter") {
      event.preventDefault()
      const topic = list[activeIndex()]
      if (topic) choose(topic)
      return
    }

    if (event.key === "Escape") {
      setOpen(false)
    }
  }

  onMount(() => {
    if (props.autofocus) input?.focus()

    const onPointerDown = (event: PointerEvent) => {
      if (!wrapper) return
      const target = event.target as Node | null
      if (target && !wrapper.contains(target)) setOpen(false)
    }

    document.addEventListener("pointerdown", onPointerDown)
    onCleanup(() => document.removeEventListener("pointerdown", onPointerDown))
  })

  const theme = () => props.variant ?? "dark"

  const defaultInputClass = () => {
    if (theme() === "night") {
      return "w-full bg-white text-black placeholder:text-neutral-500 text-[14px] font-light outline-none px-3 py-[9px] rounded-[4px]"
    }
    if (theme() === "light") {
      return "w-full bg-transparent text-black font-light outline-none"
    }
    return "w-full rounded-lg text-lg font-semibold py-2 px-4 outline-none text-black bg-white"
  }

  const defaultPanelClass = () => {
    const base =
      "absolute top-full left-0 mt-2 w-full max-h-[320px] overflow-auto rounded-lg z-50 p-2 flex flex-col gap-1"

    return `${base} bg-white text-black border border-[#EAEAEA] shadow-2xl`
  }

  const activeBackground = () => "rgb(237 237 237)"

  return (
    // clicks inside the search (opening a result, focusing the input) should
    // never reach a parent that also reacts to clicks
    <div
      ref={wrapper}
      class="relative w-full"
      onClick={(event) => event.stopPropagation()}
    >
      <input
        ref={(element) => (input = element)}
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={open()}
        aria-controls="topic-search-results"
        aria-label={props.placeholder}
        placeholder={props.placeholder}
        value={query()}
        class={props.inputClass ?? defaultInputClass()}
        style={{ height: theme() === "dark" ? "52px" : undefined }}
        onInput={(event) => updateQuery(event.currentTarget.value)}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
      />

      <Show when={open() && (results().length > 0 || query().trim() !== "")}>
        <div
          id="topic-search-results"
          role="listbox"
          class={props.panelClass ?? defaultPanelClass()}
        >
          <Show
            when={results().length > 0}
            fallback={
              <div class="px-4 py-3 text-sm text-[#696969]">
                No topic matches “{query()}”. Try “physics”, “rust” or “cooking”.
              </div>
            }
          >
            <For each={results()}>
              {(topic, index) => (
                <button
                  type="button"
                  role="option"
                  aria-selected={index() === activeIndex()}
                  onClick={() => choose(topic)}
                  onMouseEnter={() => setSelected(index())}
                  class="w-full text-left px-4 py-2 rounded-lg flex items-center justify-between gap-3 transition-colors text-black"
                  style={{
                    "background-color":
                      index() === activeIndex() ? activeBackground() : "transparent",
                  }}
                >
                  <span class="flex items-center gap-2 min-w-0">
                    <span class="font-semibold truncate">{topic.prettyName}</span>
                    <Show when={topic.category}>
                      <span class="text-[11px] font-medium rounded-full px-2 py-[1px] whitespace-nowrap border text-[#696969] border-[#DDDDDD]">
                        {topic.category}
                      </span>
                    </Show>
                  </span>
                  <Show
                    when={topic.sourceCount !== undefined}
                    fallback={
                      <span class="text-[12px] whitespace-nowrap text-[#9A9A9A]">
                        open topic
                      </span>
                    }
                  >
                    <span class="text-[12px] whitespace-nowrap text-[#696969]">
                      {topic.sourceCount} sources
                    </span>
                  </Show>
                </button>
              )}
            </For>
          </Show>
        </div>
      </Show>
    </div>
  )
}
