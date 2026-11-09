// Headless smoke test for the website.
//
//   npm i --no-save jsdom
//   npx vite build --config smoke/vite.smoke.config.ts
//   node smoke/run.mjs /physics
//
// It mounts the real app inside jsdom, clicks through the search and the
// roadmap and fails on any thrown error or unhandled rejection.
import { JSDOM } from "jsdom"
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"

const dist = new URL("./dist/", import.meta.url)
const distPath = (file) => fileURLToPath(new URL(file, dist))

const path = process.argv[2] ?? "/"
const url = `http://localhost:3000${path}`

const dom = new JSDOM(
  "<!doctype html><html><body><div id='app'></div></body></html>",
  { url, pretendToBeVisual: true },
)
const { window } = dom

const copy = [
  "window",
  "document",
  "navigator",
  "location",
  "history",
  "localStorage",
  "sessionStorage",
  "customElements",
  "Node",
  "NodeList",
  "Element",
  "HTMLElement",
  "SVGElement",
  "HTMLCanvasElement",
  "HTMLInputElement",
  "HTMLButtonElement",
  "Event",
  "CustomEvent",
  "KeyboardEvent",
  "MouseEvent",
  "FocusEvent",
  "DOMRect",
  "getComputedStyle",
  "requestAnimationFrame",
  "cancelAnimationFrame",
  "MutationObserver",
  "DocumentFragment",
  "Text",
  "Comment",
]

for (const key of copy) {
  if (window[key] === undefined) continue
  try {
    globalThis[key] = window[key]
  } catch {
    // some globals (navigator) are getter only on newer node versions
    Object.defineProperty(globalThis, key, {
      value: window[key],
      configurable: true,
      writable: true,
    })
  }
}

globalThis.self = window

class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}
window.ResizeObserver = NoopObserver
window.IntersectionObserver = NoopObserver
globalThis.ResizeObserver = NoopObserver
globalThis.IntersectionObserver = NoopObserver

// jsdom has no canvas implementation, the landing page draws a force graph
// counts the drawing calls so the smoke test can prove the background really
// strokes lines between the topic words
const drawStats = { lineTo: 0, moveTo: 0, stroke: 0 }
const fakeContext = new Proxy(
  {},
  {
    get: (target, property) => {
      if (property in target) return target[property]
      const name = String(property)
      return () => {
        if (name in drawStats) drawStats[name]++
        return { width: 0 }
      }
    },
    set: () => true,
  },
)

// jsdom reports a 0x0 canvas, and the graph skips drawing at that size
for (const property of ["clientWidth", "clientHeight"])
  Object.defineProperty(window.HTMLCanvasElement.prototype, property, {
    get: () => (property === "clientWidth" ? 1200 : 800),
  })
window.HTMLCanvasElement.prototype.getContext = () => fakeContext

const errors = []
window.addEventListener("error", (event) => errors.push(String(event.message)))
window.addEventListener("unhandledrejection", (event) =>
  errors.push(String(event.reason)),
)
const originalError = console.error
console.error = (...args) => {
  const text = args.map(String).join(" ")
  if (!text.includes("Not implemented") && !text.includes("Could not parse CSS"))
    errors.push(text)
  originalError(...args)
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const { mountApp } = await import(distPath("app.js"))

mountApp(document.getElementById("app"))
await wait(120)

const text = () => {
  const clone = document.body.cloneNode(true)
  clone.querySelectorAll("style, script").forEach((element) => element.remove())
  return clone.textContent.replace(/\s+/g, " ").trim()
}
const normalise = (element) => element.textContent.replace(/\s+/g, " ").trim()

const button = (label) =>
  [...document.querySelectorAll("button, a")].find(
    (element) =>
      normalise(element) === label ||
      normalise(element).startsWith(`${label} `) ||
      normalise(element).startsWith(label),
  )

function click(label) {
  const element = button(label)
  if (!element) throw new Error(`could not find a control labelled "${label}"`)
  element.click()
  return element
}

const report = (label, value) => console.log(`${label}: ${value}`)

// load the real stylesheet so computed colours can be checked
try {
  const css = readFileSync(distPath("style.css"), "utf8")
  const style = document.createElement("style")
  style.textContent = css
  document.head.appendChild(style)
} catch {
  console.log("warning: no built stylesheet found")
}

report("url", url)
report("rendered", text().slice(0, 160))

const background = (element) =>
  element ? window.getComputedStyle(element).backgroundColor : "missing"

report("html background", background(document.documentElement))
if (path !== "" && path !== "/") {
  const page = document.querySelector(".w-screen.h-full")
  report("page background", `${page?.className.slice(0, 24)} -> ${background(page)}`)
  report("title text colour", (() => {
    const title = [...document.querySelectorAll("div")].find(
      (element) => element.className.includes("text-[20px]") && element.className.includes("font-bold"),
    )
    return title ? window.getComputedStyle(title).color : "missing"
  })())
}

if (path === "/" || path === "") {
  const input = document.querySelector('input[role="combobox"]')
  if (!input) throw new Error("landing page has no search input")

  report("landing search background", background(input))

  const canvas = document.querySelector("canvas")
  if (!canvas) throw new Error("landing background has no canvas")
  report("landing canvas", `${window.getComputedStyle(canvas).cursor || "default"} cursor`)

  // the background is locked: wheel and drag events must be ignored
  for (const type of ["wheel", "pointerdown", "pointermove", "pointerup", "touchstart"])
    canvas.dispatchEvent(new window.Event(type, { bubbles: true }))
  await wait(60)
  report("background lines drawn", JSON.stringify(drawStats))
  if (drawStats.lineTo < 100)
    throw new Error(`the background drew only ${drawStats.lineTo} line segments`)
  report("canvas after gestures", `${window.getComputedStyle(canvas).cursor || "default"} cursor, still at ${window.location.pathname || "/"}`)
  if (!document.querySelector("canvas")) throw new Error("background canvas disappeared after gestures")


  input.value = "pyhton"
  input.dispatchEvent(new window.Event("input", { bubbles: true }))
  await wait(60)
  report("typo search", text().slice(0, 220))

  input.value = "machine learning"
  input.dispatchEvent(new window.Event("input", { bubbles: true }))
  await wait(60)
  report("search", text().slice(0, 220))
  click("Machine Learning")
  await wait(60)
  report("after click", window.location.pathname + " " + text().slice(0, 100))
} else if (path.includes("cooking")) {
  report("unknown topic page", text().slice(0, 300))
  if (!text().includes("could not find")) throw new Error("no empty state for unknown topic")
} else if (path.includes("/edit")) {
  report("edit page", text().slice(0, 200))
  const input = document.querySelector("input")
  report(
    "editor input",
    input ? `${background(input)} on ${window.getComputedStyle(input).color}` : "missing",
  )
} else if (!button("Roadmap")) {
  // topic pages without content (unknown topic, edit page, auth page)
  report("page", text().slice(0, 240))
} else {
  // topic page: the roadmap tab has to build the roadmap from the sources
  click("Roadmap")
  await wait(80)
  const boxes = [...document.querySelectorAll("button[aria-label^='Open step']")]
  report("roadmap boxes", boxes.length)
  report("roadmap card background", background(boxes[0]))
  if (boxes.length === 0) throw new Error("roadmap rendered no steps")

  boxes[0].click()
  await wait(80)
  const dialog = document.querySelector('[role="dialog"]')
  if (!dialog) throw new Error("clicking a roadmap step did not open it")
  report("step dialog", dialog.textContent.replace(/\s+/g, " ").slice(0, 120))
  report("dialog background", background(dialog))

  // every opened box has to introduce the step, get the reader started and
  // hand over projects for the stage
  for (const section of ["introduction", "get-started", "practice", "projects"]) {
    const el = dialog.querySelector(`[data-section='${section}']`)
    if (!el) throw new Error(`step dialog is missing the ${section} section`)
    report(`${section} section`, el.textContent.replace(/\s+/g, " ").slice(0, 90))
  }
  const actions = dialog.querySelectorAll("[data-section='get-started'] ol li").length
  const exercises = dialog.querySelectorAll("[data-exercise]").length
  report("practice exercises", exercises)
  if (exercises < 3) throw new Error("practice lists fewer than three exercises")
  const projects = dialog.querySelectorAll("[data-project]").length
  report("get started actions", actions)
  report("stage projects", projects)
  if (actions < 3) throw new Error("get started lists fewer than three actions")
  if (projects < 2) throw new Error("stage has fewer than two projects")

  // keyboard navigation through the roadmap
  document.dispatchEvent(
    new window.KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
  )
  await wait(60)
  const nextDialog = document.querySelector('[role="dialog"]')
  report("step 2 after arrow key", nextDialog.textContent.replace(/\s+/g, " ").slice(0, 90))
  if (!nextDialog.textContent.includes("step 2 of")) {
    throw new Error("arrow key did not move to the next step")
  }

  const sourceLink = nextDialog.querySelector("a[target='_blank']")
  if (!sourceLink) throw new Error("step dialog has no source links")
  report("source link", sourceLink.getAttribute("rel") + " " + sourceLink.href.slice(0, 60))

  const close = nextDialog.querySelector('button[aria-label="Close step"]')
  close.click()
  await wait(60)
  if (document.querySelector('[role="dialog"]')) {
    throw new Error("step dialog did not close")
  }

  click("Links")
  await wait(80)
  report("sources tab", text().slice(0, 200))

  click("Global Guide")
  await wait(80)
  report("guide tab", text().slice(0, 200))

  // navigating to another topic from the top bar search
  const trigger = [...document.querySelectorAll("div")]
    .filter((element) => element.textContent.trim() === "Search Topic")
    .pop()
  trigger.click()
  await wait(60)
  const navInput = document.querySelector('input[role="combobox"]')
  if (!navInput) throw new Error("top bar search did not open")
  navInput.value = "chemistry"
  navInput.dispatchEvent(new window.Event("input", { bubbles: true }))
  await wait(60)

  const option = document.querySelector('[role="option"]')
  if (!option) throw new Error("top bar search returned no results")
  report(
    "topic search bar",
    `${background(navInput)} on ${window.getComputedStyle(navInput).color}, panel ${background(
      document.querySelector('[role="listbox"]'),
    )}`,
  )
  report("nav search first result", normalise(option))

  const openSearch = async () => {
    const triggerElement = [...document.querySelectorAll("div")]
      .filter((element) => element.textContent.trim() === "Search Topic")
      .pop()
    if (!triggerElement) throw new Error("search trigger missing")
    triggerElement.click()
    await wait(160)
    const field = document.querySelector('input[role="combobox"]')
    if (!field) throw new Error("search did not open")
    return field
  }

  const closeSearch = document.querySelector('button[aria-label="Close search"]')
  if (!closeSearch) throw new Error("topic search has no close button")
  closeSearch.click()
  await wait(80)
  if (document.querySelector('input[role="combobox"]'))
    throw new Error("close button left the search input behind")
  report("search closed", "X button removed the search bar")

  // one Escape closes the list, a second one closes the search itself
  let field = await openSearch()
  field.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }))
  await wait(60)
  if (!document.querySelector('input[role="combobox"]'))
    throw new Error("a single Escape closed the whole search")
  field.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }))
  await wait(80)
  if (document.querySelector('input[role="combobox"]'))
    throw new Error("Escape did not close the search bar")
  report("escape closes search", "second Escape removed the search bar")

  // typing after closing the list reopens it instead of staying empty
  field = await openSearch()
  field.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }))
  await wait(50)
  field.value = "chemistry"
  field.dispatchEvent(new window.Event("input", { bubbles: true }))
  await wait(60)
  if (!document.querySelector('[role="listbox"]'))
    throw new Error("typing did not reopen the result list")
  report("typing reopens list", "list came back after Escape")

  await wait(60)
  const freshOption = document.querySelector('[role="option"]')
  if (!freshOption) throw new Error("reopened search returned no results")
  freshOption.click()
  await wait(80)

  report("navigated", window.location.pathname)
  report("navigated page", text().slice(0, 700))
  const box = document.querySelector('[role="listbox"]')
  if (box) {
    const input = box.parentElement?.querySelector("input")
    report("open panel input", JSON.stringify({ placeholder: input?.placeholder, value: input?.value, focused: document.activeElement === input }))
    report("panel ancestors", [...(function*(){ let el = box; while (el && el !== document.body) { yield el.tagName + "." + String(el.className).slice(0,60); el = el.parentElement } })()].join(" < "))
  }
  report(
    "leftover widgets",
    JSON.stringify({
      comboboxes: document.querySelectorAll('input[role="combobox"]').length,
      options: document.querySelectorAll('[role="option"]').length,
      listboxes: document.querySelectorAll('[role="listbox"]').length,
      navInRoot: document.querySelectorAll(".h-\\[80px\\]").length,
    }),
  )
  if (!text().includes("Chemistry")) throw new Error("topic did not change")
}

if (errors.length > 0) {
  console.log("ERRORS:")
  for (const error of errors) console.log(" -", error)
  process.exit(1)
}

console.log("OK — no runtime errors")
