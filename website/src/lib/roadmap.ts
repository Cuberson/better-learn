import type { Source, Stage, Step, TopicGuide } from "../content/types"
import { stageMeta, stages } from "../content/types"

export type RoadmapNode = {
  /** 1 based position of the step on the whole roadmap */
  number: number
  step: Step
  stage: Stage
  isFirst: boolean
  isLast: boolean
  sourceCount: number
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
