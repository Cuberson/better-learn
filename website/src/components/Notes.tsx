import { For } from "solid-js"

type Note = {
  content: string
}

interface Props {
  notes: Note[]
}

export default function Notes(props: Props) {
  return (
    <div>
      <For each={props.notes}>{(note) => <div>{note.content}</div>}</For>
    </div>
  )
}
