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
const fakeContext = new Proxy(
  {},
  {
    get: (target, property) => {
      if (property in target) return target[property]
      return () => ({ width: 0 })
    },
    set: () => true,
  },
)
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
  report("nav search background", background(document.querySelector('[role="listbox"]')))
  report("nav search first result", normalise(option))
  option.click()
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
