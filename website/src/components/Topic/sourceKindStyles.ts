import type { SourceKind } from "../../content/types"

// Tailwind classes are written in full here so they are never purged.
const styles: Record<SourceKind, string> = {
  course: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  book: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  video: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  article: "bg-neutral-500/15 text-neutral-300 border-neutral-500/30",
  docs: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  practice: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  interactive: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  paper: "bg-slate-500/15 text-slate-300 border-slate-500/30",
}

export function sourceKindStyle(kind?: SourceKind): string {
  if (!kind) return styles.article
  return styles[kind] ?? styles.article
}
