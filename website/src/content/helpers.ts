import type {
  Project,
  Source,
  SourceKind,
  Stage,
  Step,
  TopicGuide,
} from "./types"

// Small helpers so the topic files stay readable. They are intentionally
// positional and terse, one topic should be skimmable in a single screen.
//
//   s(title, url, kind?, description?)        -> one source
//   st(id, stage, title, summary, outcome, sources) -> one roadmap step
//   p(title, description)                    -> one stage project

/** A source you can learn from. */
export function s(
  title: string,
  url: string,
  kind: SourceKind = "article",
  description?: string,
): Source {
  return { title, url, kind, description }
}

/** A single box on the roadmap, with the sources to explore for it. */
export function st(
  id: string,
  stage: Stage,
  title: string,
  summary: string,
  outcome: string,
  sources: Source[],
): Step {
  return { id, stage, title, summary, outcome, sources }
}

/** A project to build once a stage is finished. */
export function p(title: string, description: string): Project {
  return { title, description }
}

/** Only used to get nice autocompletion + typing errors in the topic files. */
export function defineTopic(topic: TopicGuide): TopicGuide {
  return topic
}
