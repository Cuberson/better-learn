import { mount, StartClient } from "solid-start/entry-client"

// mounts the app exactly like src/entry-client.tsx does
export function mountApp(element: HTMLElement) {
  return mount(() => <StartClient />, element as unknown as Document)
}
