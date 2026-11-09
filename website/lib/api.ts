/**
 * The website works without the GraphQL server (the topics, sources and
 * roadmaps are bundled), but when the server is configured we prefer the data
 * it returns. These helpers keep a missing or failing server from breaking a
 * page.
 */
export function databaseConfigured(): boolean {
  const url = import.meta.env.VITE_GRAFBASE_API_URL
  return typeof url === "string" && url.trim().length > 0
}

/** Runs a query only if a server is configured, never throws. */
export async function safeQuery<T>(
  run: () => Promise<T>,
): Promise<T | null> {
  if (!databaseConfigured()) return null

  try {
    return await run()
  } catch (error) {
    console.warn("[learn-anything] server query failed", error)
    return null
  }
}

export type TopicsQueryResult = {
  data?: {
    publicGetGlobalTopics?: { name: string; prettyName: string }[]
  }
}

export type TopicQueryResult = {
  data?: {
    getGlobalTopic?: { prettyName: string; topicSummary: string }
    publicGetGlobalTopic?: { prettyName: string; topicSummary: string }
  }
}
