import type { Project, Source, Stage, Step, TopicGuide } from "../content/types"
import { sourceKindLabel, stageMeta, stages } from "../content/types"

export type RoadmapNode = {
  /** 1 based position of the step on the whole roadmap */
  number: number
  step: Step
  stage: Stage
  isFirst: boolean
  isLast: boolean
  sourceCount: number
  /** orientation text shown at the top of the opened step */
  introduction: string[]
  /** concrete first actions, one per list item */
  getStarted: string[]
  /** hands on practice for this step */
  exercises: string[]
  /** projects to build once the stage this step belongs to is finished */
  projects: Project[]
}

export type RoadmapZone = {
  stage: Stage
  label: string
  description: string
  nodes: RoadmapNode[]
  sourceCount: number
}

export type Roadmap = {
  topic: TopicGuide
  zones: RoadmapZone[]
  /** every node in the order you should follow them */
  nodes: RoadmapNode[]
  stepCount: number
  sourceCount: number
}

/**
 * Groups steps into the three zones, keeping the order the steps were written
 * in inside each zone. A step with an unknown stage would still be visible
 * (appended last) instead of silently disappearing.
 */
export function groupStepsByStage(steps: Step[]): { stage: Stage; steps: Step[] }[] {
  const order = [...stages, "unknown" as Stage]

  return order
    .map((stage) => ({
      stage,
      steps: steps.filter((step) => (step.stage ?? "unknown") === stage),
    }))
    .filter((group) => group.steps.length > 0)
}


/** Beginner -> "beginner", so sentences read naturally. */
function stageWord(stage: Stage): string {
  return (stageMeta[stage] ?? stageMeta.beginner).label.toLowerCase()
}

function lowerFirst(text: string): string {
  if (!text) return text
  return text[0]!.toLowerCase() + text.slice(1)
}

/** Strips the trailing full stop so a sentence can end in a "." of our own. */
function withoutStop(text: string): string {
  return text.trim().replace(/\.$/, "")
}

// How to approach each level. This is what makes the roadmap advice feel like
// it was written for the step you are on instead of a generic "good luck".
const stageAdvice: Record<Stage, string> = {
  beginner:
    "Do the small exercises even when they look obvious — this is the level where habits are made, and every later box stands on it.",
  intermediate:
    "Build something small with what you learn here before moving on. At this level knowledge only sticks once you have used it.",
  advanced:
    "Expect to re-read and to get stuck for a while; that is normal here. Follow the sources to the end and prefer depth over speed.",
}

/**
 * The introduction of a step: where it sits in the roadmap, what it covers and
 * how to approach the level. A step can override this with its own `intro`.
 */
export function buildIntroduction(
  topic: TopicGuide,
  node: RoadmapNode,
  previous: RoadmapNode | undefined,
): string[] {
  if (node.step.intro) return [node.step.intro]

  const paragraphs: string[] = []

  if (node.isFirst) {
    paragraphs.push(
      `This is where ${topic.prettyName} starts. Nothing before it is assumed, so the first step is simply to get the material in front of you and try it yourself.`,
    )
  } else if (previous) {
    paragraphs.push(
      `You are picking up from “${previous.step.title}”. If that box still feels shaky, go back one step before starting this one.`,
    )
  } else {
    paragraphs.push(`Step ${node.number} of the roadmap.`)
  }

  paragraphs.push(withoutStop(node.step.summary) + ".")
  paragraphs.push(
    `You are in the ${stageWord(node.stage)} stage. ${stageAdvice[node.stage] ?? stageAdvice.beginner}`,
  )

  return paragraphs
}


/**
 * One opening move per kind of source: you do not "read once" a forty hour
 * course, and you do not "work through the exercises" of a reference manual.
 */
function firstActionFor(source: Source): string {
  switch (source.kind) {
    case "course":
      return `Start ${source.title} and finish only its first lesson or two today — the rest of the course is there for later steps.`
    case "book":
      return `Read the first chapter of ${source.title} and write one sentence about what it covered.`
    case "video":
      return `Watch ${source.title} with something to take notes on, pausing to try each thing as it is shown.`
    case "practice":
    case "interactive":
      return `Open ${source.title} and do the first few exercises, even if you have to look things up.`
    case "docs":
      return `Skim ${source.title} for the shape of it, then read the section this step is about properly.`
    case "paper":
      return `Read the abstract and the introduction of ${source.title}, then the figures. Papers are not meant to be read front to back on the first pass.`
    default:
      return `Read ${source.title} once without stopping to take notes, then go back to the parts that did not click.`
  }
}

/**
 * The checklist that gets someone moving in the first ten minutes: which
 * source to open first, which one to follow it with, and the proof that the
 * step is done. A step can provide its own `getStarted` list instead.
 */
export function buildGetStarted(node: RoadmapNode): string[] {
  if (node.step.getStarted && node.step.getStarted.length > 0) {
    return node.step.getStarted
  }

  const actions: string[] = []
  const [primary, secondary] = node.step.sources

  if (primary) {
    actions.push(firstActionFor(primary))
  }

  if (secondary) {
    actions.push(`Follow it with ${secondary.title} for a second angle on the same ideas.`)
  }

  actions.push(
    "Sum up what you just learned in three sentences, out loud — the gaps you hear tell you what to re-read.",
  )

  if (node.step.outcome) {
    actions.push(
      `Do it for real: ${lowerFirst(withoutStop(node.step.outcome))}. Open the next box when you can do that without looking it up.`,
    )
  }

  return actions
}


/**
 * Practice for a step. Roads are learned by doing, so every step gets a set of
 * drills built from its own sources: a hands on task, a recall test and
 * something to build on top of it.
 */
export function buildExercises(node: RoadmapNode): string[] {
  if (node.step.exercises && node.step.exercises.length > 0) {
    return node.step.exercises
  }

  const exercises: string[] = []
  const practice = node.step.sources.filter(
    (source) => source.kind === "practice" || source.kind === "interactive",
  )
  const primary = node.step.sources[0]

  if (practice[0]) {
    exercises.push(
      `Do every exercise inside ${practice[0].title}. Mark the ones you could not finish and redo them a day later.`,
    )
  } else if (primary) {
    exercises.push(
      `Put ${primary.title} away and rebuild its main example from memory. Open it again and note every difference. 20 minutes.`,
    )
  }

  exercises.push(
    `Without looking at anything, write down the three ideas that matter most about ${node.step.title.toLowerCase()}. Then check what you missed — that list is your revision plan.`,
  )

  if (node.step.outcome) {
    exercises.push(
      `Do this for real, on something you care about rather than the example: ${lowerFirst(withoutStop(node.step.outcome))}.`,
    )
  }

  exercises.push(
    `Teach it back: explain ${node.step.title.toLowerCase()} out loud in three minutes to somebody who does not know it, and answer their questions.`,
  )

  return exercises
}

/** Projects of a stage, or an empty list when the topic has none yet. */
export function stageProjects(topic: TopicGuide, stage: Stage): Project[] {
  return topic.projects?.[stage] ?? []
}

/**
 * Turns a topic's sources into the roadmap you follow.
 *
 * The roadmap is not separate data: it is the topic's ordered steps grouped
 * into beginner / intermediate / advanced zones. Each box keeps the sources it
 * was built from, so opening a box always shows the material for that step.
 */
export function buildRoadmap(topic: TopicGuide): Roadmap {
  const nodes: RoadmapNode[] = []

  const zones: RoadmapZone[] = groupStepsByStage(topic.steps).map((group) => {
    const meta = stageMeta[group.stage] ?? stageMeta.beginner

    const zoneNodes: RoadmapNode[] = group.steps.map((step) => {
      const node: RoadmapNode = {
        number: nodes.length + 1,
        step,
        stage: step.stage,
        isFirst: false,
        isLast: false,
        sourceCount: step.sources.length,
        introduction: [],
        getStarted: [],
        exercises: [],
        projects: [],
      }
      nodes.push(node)
      return node
    })

    return {
      stage: group.stage,
      label: meta.label,
      description: meta.description,
      nodes: zoneNodes,
      sourceCount: zoneNodes.reduce((total, node) => total + node.sourceCount, 0),
    }
  })

  nodes.forEach((node, index) => {
    node.isFirst = index === 0
    node.isLast = index === nodes.length - 1
    node.introduction = buildIntroduction(topic, node, nodes[index - 1])
    node.getStarted = buildGetStarted(node)
    node.exercises = buildExercises(node)
    node.projects = stageProjects(topic, node.stage)
  })

  return {
    topic,
    zones,
    nodes,
    stepCount: nodes.length,
    sourceCount: nodes.reduce((total, node) => total + node.sourceCount, 0),
  }
}

/** Sources grouped by zone, used by the sources page. */
export function sourcesByStage(
  topic: TopicGuide,
): { stage: Stage; label: string; steps: { step: Step; sources: Source[] }[] }[] {
  return groupStepsByStage(topic.steps).map((group) => ({
    stage: group.stage,
    label: (stageMeta[group.stage] ?? stageMeta.beginner).label,
    steps: group.steps.map((step) => ({ step, sources: step.sources })),
  }))
}

/** One line description used in lists and search results. */
export function roadmapSummary(roadmap: Roadmap): string {
  const steps = `${roadmap.stepCount} step${roadmap.stepCount === 1 ? "" : "s"}`
  const sources = `${roadmap.sourceCount} source${
    roadmap.sourceCount === 1 ? "" : "s"
  }`
  return `${steps} · ${sources} · ${roadmap.zones.length} levels`
}
