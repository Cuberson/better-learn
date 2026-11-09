// Types for the learning content that powers search, the sources page and
// the roadmap.
//
// A topic is an ordered list of small steps. Each step is one box on the
// roadmap and owns the sources you explore to complete it. Because both the
// sources page and the roadmap read from the same `steps`, a roadmap can never
// drift away from the sources it was built from.

export type Stage = "beginner" | "intermediate" | "advanced"

export type SourceKind =
  | "course"
  | "book"
  | "video"
  | "article"
  | "docs"
  | "practice"
  | "interactive"
  | "paper"

/** A link you can learn from. */
export type Source = {
  title: string
  url: string
  kind?: SourceKind
  author?: string
  year?: number
  /** one line on why this source is worth your time */
  description?: string
}

/**
 * Something to build after a stage is finished. Projects are how a roadmap
 * step turns into skill: they are deliberately small enough to finish.
 */
export type Project = {
  title: string
  /** what you build and what it proves you have learned */
  description: string
}

/** One box on the roadmap. */
export type Step = {
  /** unique inside the topic, used as a stable key */
  id: string
  title: string
  stage: Stage
  /** shown when the box is opened, explains what this step is about */
  summary: string
  /** what you can do once this step is done */
  outcome?: string
  /**
   * Introduction shown at the top of the opened step. Written for you when a
   * step does not provide one, so the roadmap never opens an empty box.
   */
  intro?: string
  /** first concrete actions. Written for you from the sources when missing. */
  getStarted?: string[]
  /** practice tasks. Written for you from the sources when missing. */
  exercises?: string[]
  sources: Source[]
}

export type TopicGuide = {
  /** url friendly unique name, i.e. `machine-learning` */
  name: string
  prettyName: string
  category: string
  /** extra words that should find this topic in search (js, ml, ...) */
  aliases?: string[]
  topicSummary: string
  steps: Step[]
  /** projects to build after finishing each stage */
  projects?: Partial<Record<Stage, Project[]>>
}

export const stages: Stage[] = ["beginner", "intermediate", "advanced"]

export const stageMeta: Record<
  Stage,
  {
    label: string
    /** short description of what this zone means */
    description: string
    /** classes are written out in full so tailwind can see them */
    accentText: string
    accentBg: string
    accentBorder: string
    dot: string
    nodeHover: string
  }
> = {
  beginner: {
    label: "Beginner",
    description: "Start here. No prior knowledge of the topic is assumed.",
    accentText: "text-emerald-300",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/30",
    dot: "bg-emerald-400",
    nodeHover: "hover:border-emerald-400/70",
  },
  intermediate: {
    label: "Intermediate",
    description: "You know the basics and can build real things with guidance.",
    accentText: "text-amber-300",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/30",
    dot: "bg-amber-400",
    nodeHover: "hover:border-amber-400/70",
  },
  advanced: {
    label: "Advanced",
    description: "Deep, specialised material. Expect to move slowly here.",
    accentText: "text-violet-300",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/30",
    dot: "bg-violet-400",
    nodeHover: "hover:border-violet-400/70",
  },
}

export const sourceKindLabel: Record<SourceKind, string> = {
  course: "Course",
  book: "Book",
  video: "Video",
  article: "Article",
  docs: "Docs",
  practice: "Practice",
  interactive: "Interactive",
  paper: "Paper",
}
