import { Show } from "solid-js"

type Link = {
  title: string
  url: string
  year?: string
  type?: string
  author?: string
  time?: string
  relatedLinks?: Link[]
}

type Props = {
  name: string
  links?: Link[]
}

// Sidebar card on a topic page. Learner data comes from the server, so until
// that query exists the card shows an honest empty state instead of crashing
// on data that is not there.
export default function Card(props: Props) {
  return (
    <div
      class="w-full relative flex flex-col gap-2 border border-neutral-800 rounded-[4px] overflow-auto"
      style={{
        "max-height": "280px",
      }}
    >
      <div class="flex items-center">
        <div class="font-semibold p-2 px-2 pl-4 text-white">{props.name}</div>
        <div class="px-1 mt-[0.8px] p-[1px] h-fit text-[12px] font-light bg-neutral-800 text-neutral-300 flex items-center justify-center rounded-full w-fit">
          0
        </div>
      </div>

      <Show
        when={props.links && props.links.length > 0}
        fallback={
          <div class="px-4 pb-4 text-[13px] font-light text-neutral-400">
            Nobody has been recorded here yet. Sign in and mark this topic as
            learning to be the first.
          </div>
        }
      >
        <div class="flex flex-col">
          {props.links?.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 text-[13px] text-neutral-300 font-light hover:bg-neutral-900 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </Show>
    </div>
  )
}
