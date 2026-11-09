import { defineTopic, p, s, st } from "../helpers"

// Programming languages + the tools every programmer ends up needing.
// Every step lists the sources used both by the guide and by the roadmap.

export const javascript = defineTopic({
  name: "javascript",
  prettyName: "JavaScript",
  category: "Programming",
  aliases: ["js", "ecmascript", "frontend", "browser", "web"],
  topicSummary:
    "JavaScript is the language of the web, and thanks to Node.js it now runs servers, CLIs and desktop apps too. Learning it well means understanding the language itself, the browser APIs around it and the async model that ties everything together.",
  steps: [
    st(
      "language-basics",
      "beginner",
      "Language basics",
      "Values, variables, types, functions, objects and arrays. This is the vocabulary every later step builds on, so write a lot of small programs here.",
      "Read and write short programs that transform data and print results.",
      [
        s(
          "MDN — JavaScript Guide",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          "docs",
          "The reference you will keep coming back to.",
        ),
        s(
          "javascript.info — The Modern JavaScript Tutorial",
          "https://javascript.info/",
          "interactive",
          "Best paced text-first course on the language.",
        ),
      ],
    ),
    st(
      "the-dom",
      "beginner",
      "The DOM and the browser",
      "Learn how JavaScript talks to a page: selecting elements, handling events and reacting to user input.",
      "Build an interactive page without a framework.",
      [
        s(
          "MDN — Learn Web Development",
          "https://developer.mozilla.org/en-US/docs/Learn",
          "course",
        ),
        s(
          "javascript.info — Document",
          "https://javascript.info/document",
          "docs",
        ),
      ],
    ),
    st(
      "async",
      "intermediate",
      "Async JavaScript",
      "Callback hell, promises and async/await. Almost every real application is async, so this step is where the language starts to feel useful.",
      "Fetch data from an API and handle loading, success and failure states.",
      [
        s(
          "javascript.info — Promises and async/await",
          "https://javascript.info/async",
          "docs",
        ),
        s(
          "MDN — Asynchronous JavaScript",
          "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous",
          "docs",
        ),
      ],
    ),
    st(
      "modules-and-tooling",
      "intermediate",
      "Modules, packages and tooling",
      "Split code into modules, install packages with npm and bundle an app. Tooling is where most beginner frustration comes from, so take it slowly.",
      "Set up a small project with dependencies, a dev server and a build step.",
      [
        s(
          "Eloquent JavaScript (4th edition)",
          "https://eloquentjavascript.net/",
          "book",
          "Free online book with exercises after every chapter.",
        ),
        s(
          "MDN — JavaScript modules",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
          "docs",
        ),
        s("npm — Documentation", "https://docs.npmjs.com/", "docs"),
      ],
    ),
    st(
      "build-an-app",
      "intermediate",
      "Build a real application",
      "Apply everything above to a full stack app: routing, forms, API calls, state and deployment.",
      "Ship a small full stack app that other people can use.",
      [
        s(
          "Full Stack Open",
          "https://fullstackopen.com/en/",
          "course",
          "Free university course on modern JavaScript application development.",
        ),
        s(
          "MDN — Web APIs",
          "https://developer.mozilla.org/en-US/docs/Web/API",
          "docs",
        ),
      ],
    ),
    st(
      "internals",
      "advanced",
      "How JavaScript actually runs",
      "Engines, the event loop, memory and the parts of the spec that explain the odd behaviour you have been working around.",
      "Reason about performance and surprising async behaviour instead of guessing.",
      [
        s(
          "You Don't Know JS Yet",
          "https://github.com/getify/You-Dont-Know-JS",
          "book",
          "Deep dives into scope, types, closures and async.",
        ),
        s(
          "V8 — JavaScript engine blog",
          "https://v8.dev/blog",
          "article",
        ),
        s(
          "MDN — The event loop",
          "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop",
          "docs",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Interactive to-do page", "Add, complete and delete tasks with plain DOM APIs and localStorage. Proves you can select elements, handle events and keep state in the page."),
      p("Quiz game", "Ten questions, a score and an end screen. Proves functions, arrays and objects working together."),
    ],
    intermediate: [
      p("Weather dashboard", "Fetch a public weather API, show loading and error states and cache the last result. Proves async JavaScript and modules."),
      p("Bundled habit tracker", "Split a small app into ES modules, bundle it and ship a production build. Proves the tooling around the language."),
    ],
    advanced: [
      p("Promise from scratch", "Implement a Promise with then/catch/finally and a microtask queue. Proves you understand the event loop."),
      p("Profile a slow page", "Find a real bottleneck with the profiler, fix it and write down the before/after numbers."),
    ],
  },

})

export const typescript = defineTopic({
  name: "typescript",
  prettyName: "TypeScript",
  category: "Programming",
  aliases: ["ts", "typed javascript", "types"],
  topicSummary:
    "TypeScript adds a type system on top of JavaScript. It catches mistakes before you run the code and makes big codebases navigable — but only if you learn to model data with types rather than sprinkle annotations everywhere.",
  steps: [
    st(
      "first-types",
      "beginner",
      "Your first types",
      "Primitives, arrays, objects and functions. Enough to annotate an existing JavaScript file and see the editor help you.",
      "Convert a small JavaScript file to TypeScript and fix the errors it surfaces.",
      [
        s(
          "TypeScript Handbook — The Basics",
          "https://www.typescriptlang.org/docs/handbook/2/basic-types.html",
          "docs",
        ),
        s(
          "TypeScript Playground",
          "https://www.typescriptlang.org/play",
          "interactive",
          "Experiment with types without installing anything.",
        ),
      ],
    ),
    st(
      "everyday-types",
      "beginner",
      "Everyday types",
      "Union types, optional properties, literal types and type narrowing — the 20% of the type system used in 80% of files.",
      "Model the shape of API responses and component props confidently.",
      [
        s(
          "TypeScript Handbook — Everyday Types",
          "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
          "docs",
        ),
        s(
          "TypeScript Handbook — Narrowing",
          "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
          "docs",
        ),
      ],
    ),
    st(
      "generics",
      "intermediate",
      "Generics and reusable types",
      "Generic functions, constraints and inference. This is the step that turns types into a design tool instead of a chore.",
      "Write reusable utilities that keep their types across calls.",
      [
        s(
          "TypeScript Handbook — Generics",
          "https://www.typescriptlang.org/docs/handbook/2/generics.html",
          "docs",
        ),
        s(
          "Type-Level TypeScript",
          "https://type-level-typescript.com/",
          "course",
        ),
      ],
    ),
    st(
      "real-projects",
      "intermediate",
      "Types in real projects",
      "tsconfig, strict mode, declaration files and third party types. Most TypeScript pain in real projects lives here.",
      "Configure a strict TypeScript project and type an untyped library.",
      [
        s("TypeScript — tsconfig reference", "https://www.typescriptlang.org/tsconfig", "docs"),
        s("Total TypeScript", "https://www.totaltypescript.com/", "course"),
        s(
          "TypeScript Handbook — Modules",
          "https://www.typescriptlang.org/docs/handbook/2/modules.html",
          "docs",
        ),
      ],
    ),
    st(
      "type-challenges",
      "intermediate",
      "Practise the type system",
      "Small puzzles that force you to actually use conditional types, mapped types and inference.",
      "Solve type puzzles without reaching for `any`.",
      [
        s(
          "Type Challenges",
          "https://github.com/type-challenges/type-challenges",
          "practice",
        ),
        s(
          "TypeScript Handbook — Types from Types",
          "https://www.typescriptlang.org/docs/handbook/2/types-from-types.html",
          "docs",
        ),
      ],
    ),
    st(
      "library-types",
      "advanced",
      "Authoring types for libraries",
      "Declaration files, module augmentation, variance and the tricks library authors use to make APIs feel native.",
      "Ship a typed package other TypeScript projects can consume safely.",
      [
        s(
          "TypeScript — Publishing declaration files",
          "https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html",
          "docs",
        ),
        s(
          "TypeScript — Declaration files",
          "https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html",
          "docs",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Type a helper library", "Give five small utility functions real signatures and fix everything the compiler complains about."),
      p("Convert a JavaScript file", "Take an old JS file and type it fully without falling back to any. Proves unions, narrowing and optional fields."),
    ],
    intermediate: [
      p("Typed API client", "A client whose request, response and error types are inferred from the endpoint you call."),
      p("Strict mode migration", "Turn on strict mode in a small project and fix every error honestly instead of casting it away."),
    ],
    advanced: [
      p("Publish a typed package", "Ship a tiny package with declaration files, generics and a type-level test suite."),
      p("Type-challenge set", "Solve ten type challenges and write one paragraph on why each solution works."),
    ],
  },

})

export const python = defineTopic({
  name: "python",
  prettyName: "Python",
  category: "Programming",
  aliases: ["py", "scripting", "pandas", "django"],
  topicSummary:
    "Python is the default language for scripting, data work and machine learning. The syntax is friendly; the real learning is in the standard library, packaging and the idioms that make Python code readable.",
  steps: [
    st(
      "basics",
      "beginner",
      "Syntax and small scripts",
      "Variables, conditionals, loops, functions and running a script from the terminal.",
      "Write scripts that automate a repetitive task on your machine.",
      [
        s(
          "The Python Tutorial",
          "https://docs.python.org/3/tutorial/",
          "docs",
          "Official, well written and keeps improving.",
        ),
        s(
          "Automate the Boring Stuff with Python",
          "https://automatetheboringstuff.com/",
          "book",
          "Free book built around practical automation.",
        ),
      ],
    ),
    st(
      "data-structures",
      "beginner",
      "Data structures and idioms",
      "Lists, dicts, sets, comprehensions, slicing and unpacking — the parts of Python you use every day.",
      "Transform collections of data with short, readable code.",
      [
        s("Real Python", "https://realpython.com/", "article", "Huge library of practical tutorials."),
        s(
          "The Python Tutorial — Data Structures",
          "https://docs.python.org/3/tutorial/datastructures.html",
          "docs",
        ),
      ],
    ),
    st(
      "modules-classes",
      "intermediate",
      "Modules, classes and errors",
      "Split code into modules, write classes, and handle failures with exceptions instead of silent `None`s.",
      "Structure a multi-file project with clear responsibilities.",
      [
        s(
          "The Python Tutorial — Classes",
          "https://docs.python.org/3/tutorial/classes.html",
          "docs",
        ),
        s(
          "The Python Tutorial — Errors and Exceptions",
          "https://docs.python.org/3/tutorial/errors.html",
          "docs",
        ),
      ],
    ),
    st(
      "environment",
      "intermediate",
      "Environments and packaging",
      "Virtual environments, dependency pinning and packaging projects so they run on someone else's machine.",
      "Create a reproducible environment and install your own package.",
      [
        s(
          "Python — Virtual Environments",
          "https://docs.python.org/3/tutorial/venv.html",
          "docs",
        ),
        s(
          "Python Packaging User Guide",
          "https://packaging.python.org/en/latest/tutorials/packaging-projects/",
          "docs",
        ),
      ],
    ),
    st(
      "real-work",
      "intermediate",
      "Data, web and automation",
      "Pick a direction: pandas for data, FastAPI for services or scripting for system work. This is where Python starts paying off.",
      "Build a small tool or API that solves a problem you actually have.",
      [
        s("FastAPI Tutorial", "https://fastapi.tiangolo.com/tutorial/", "docs"),
        s("Pandas — User Guide", "https://pandas.pydata.org/docs/user_guide/index.html", "docs"),
        s("The Hitchhiker's Guide to Python", "https://docs.python-guide.org/", "book"),
      ],
    ),
    st(
      "internals",
      "advanced",
      "Under the hood",
      "The GIL, memory model, CPython bytecode and performance work. Useful once you hit a wall with plain Python.",
      "Explain why a Python program is slow and measure fixes instead of guessing.",
      [
        s(
          "CPython Developer's Guide",
          "https://devguide.python.org/",
          "docs",
        ),
        s(
          "Python — Howto documents",
          "https://docs.python.org/3/howto/index.html",
          "docs",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Command-line to-do", "A script that adds, lists and completes to-dos stored in a JSON file, driven by arguments."),
      p("Word frequency report", "Read a text file and print the most common words as an aligned table."),
    ],
    intermediate: [
      p("Personal web scraper", "Scrape a site into a CSV with requests and BeautifulSoup, wrapped in a small package with error handling."),
      p("Expense tracking API", "Three endpoints, validation and tests for a small FastAPI service backed by SQLite."),
    ],
    advanced: [
      p("Speed up a hot loop", "Rewrite a slow function as a compiled extension and show the benchmark before and after."),
      p("Package with CI", "Publish a package with tests, type hints and a GitHub Actions workflow that runs on every push."),
    ],
  },

})

export const rust = defineTopic({
  name: "rust",
  prettyName: "Rust",
  category: "Programming",
  aliases: ["rustlang", "systems programming", "cargo"],
  topicSummary:
    "Rust gives you C-like performance without a garbage collector, using ownership and borrowing to make memory bugs a compile error. The learning curve is real, but the tooling and error messages are the best in class.",
  steps: [
    st(
      "getting-started",
      "beginner",
      "Getting started with Cargo",
      "Install Rust, create a project with cargo, and learn variables, functions and control flow.",
      "Build and run a small command line program from scratch.",
      [
        s("The Rust Book", "https://doc.rust-lang.org/book/", "book", "Read it cover to cover, it is the official path."),
        s("Rust by Example", "https://doc.rust-lang.org/rust-by-example/", "interactive"),
      ],
    ),
    st(
      "ownership",
      "beginner",
      "Ownership and borrowing",
      "The core idea of Rust: who owns a value, when it is dropped, and why borrowing keeps data safe.",
      "Fix borrow checker errors by changing your data design, not by cloning.",
      [
        s(
          "The Rust Book — Understanding Ownership",
          "https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html",
          "book",
        ),
        s("Rustlings", "https://github.com/rust-lang/rustlings", "practice", "Small exercises that teach the compiler."),
      ],
    ),
    st(
      "structs-enums-errors",
      "beginner",
      "Structs, enums and errors",
      "Model data with structs and enums, then handle failure with `Option` and `Result` instead of exceptions.",
      "Write idiomatic functions that return `Result` and are pleasant to call.",
      [
        s(
          "The Rust Book — Enums and Pattern Matching",
          "https://doc.rust-lang.org/book/ch06-00-enums.html",
          "book",
        ),
        s(
          "The Rust Book — Error Handling",
          "https://doc.rust-lang.org/book/ch09-00-error-handling.html",
          "book",
        ),
      ],
    ),
    st(
      "traits-generics",
      "intermediate",
      "Traits, generics and lifetimes",
      "Abstraction in Rust: trait bounds, generic code and the lifetime annotations that keep references honest.",
      "Write reusable library code that works across types.",
      [
        s(
          "The Rust Book — Generic Types, Traits and Lifetimes",
          "https://doc.rust-lang.org/book/ch10-00-generics.html",
          "book",
        ),
        s(
          "The Rust Book — Smart Pointers",
          "https://doc.rust-lang.org/book/ch15-00-smart-pointers.html",
          "book",
        ),
      ],
    ),
    st(
      "real-project",
      "intermediate",
      "Tests and a real crate",
      "Unit tests, integration tests, crates.io and project layout. Time to build something you will keep using.",
      "Publish or share a tested crate.",
      [
        s(
          "The Rust Book — Writing Automated Tests",
          "https://doc.rust-lang.org/book/ch11-00-testing.html",
          "book",
        ),
        s("The Cargo Book", "https://doc.rust-lang.org/cargo/", "docs"),
        s("Tokio Tutorial", "https://tokio.rs/tokio/tutorial", "docs", "Async Rust in practice."),
      ],
    ),
    st(
      "advanced-rust",
      "advanced",
      "Unsafe, macros and internals",
      "When ownership is not enough: `unsafe`, interior mutability, macros and the details of the memory model.",
      "Read and contribute to production Rust codebases.",
      [
        s("The Rustonomicon", "https://doc.rust-lang.org/nomicon/", "book"),
        s(
          "The Rust Book — Advanced Features",
          "https://doc.rust-lang.org/book/ch19-00-advanced-features.html",
          "book",
        ),
        s("Learn Rust With Entirely Too Many Linked Lists", "https://rust-unofficial.github.io/too-many-lists/", "book"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("CLI text stats", "Read a file and report lines, words and characters. Proves ownership and Cargo basics."),
      p("Inventory program", "Model items with structs and enums and handle a missing item without panicking."),
    ],
    intermediate: [
      p("Generic CSV parser", "Parse rows into any type that implements your trait. Proves traits, generics and lifetimes."),
      p("Tested library crate", "Publish a small crate with unit tests, integration tests and doc comments."),
    ],
    advanced: [
      p("Safe wrapper over C", "Wrap a C function in a documented safe API. Proves unsafe and FFI discipline."),
      p("Declarative macro", "Write a macro that removes the boilerplate from your earlier crate."),
    ],
  },

})

export const go = defineTopic({
  name: "go",
  prettyName: "Go",
  category: "Programming",
  aliases: ["golang", "backend", "services"],
  topicSummary:
    "Go is a small language designed for readable, maintainable services. It has a tiny feature set, excellent tooling and the simplest concurrency model of any mainstream language.",
  steps: [
    st(
      "tour",
      "beginner",
      "The Go tour",
      "Packages, variables, functions, loops, structs and interfaces. The language is small enough to learn in a week.",
      "Read and write basic Go programs.",
      [
        s("A Tour of Go", "https://go.dev/tour/", "interactive"),
        s("Go — Getting Started", "https://go.dev/doc/tutorial/getting-started", "docs"),
      ],
    ),
    st(
      "idioms",
      "beginner",
      "Go idioms",
      "How Go code is actually written: short declarations, error returns, interfaces and small packages.",
      "Write code that a Go reviewer would not immediately rewrite.",
      [
        s("Effective Go", "https://go.dev/doc/effective_go", "docs"),
        s("Learn Go with Tests", "https://github.com/quii/learn-go-with-tests", "book"),
      ],
    ),
    st(
      "concurrency",
      "intermediate",
      "Goroutines and channels",
      "Go's concurrency primitives and the patterns that keep them from turning into a tangle.",
      "Run work in parallel and coordinate it safely.",
      [
        s("A Tour of Go — Concurrency", "https://go.dev/tour/concurrency/1", "interactive"),
        s("Go Concurrency Patterns (talk)", "https://go.dev/talks/2012/concurrency.slide", "video"),
      ],
    ),
    st(
      "standard-library",
      "intermediate",
      "The standard library",
      "`net/http`, `encoding/json`, `context`, `io` — Go ships with batteries that cover most services.",
      "Build an HTTP service using only the standard library.",
      [
        s("Go Standard Library", "https://pkg.go.dev/std", "docs"),
        s(
          "Go — Developing a RESTful API",
          "https://go.dev/doc/tutorial/web-service-gin",
          "docs",
        ),
      ],
    ),
    st(
      "services",
      "intermediate",
      "Services, databases and testing",
      "Connect a database, structure a project, and write tests that run in CI.",
      "Ship a tested Go service with a database behind it.",
      [
        s("Go — Accessing a relational database", "https://go.dev/doc/database/", "docs"),
        s("Go Blog", "https://go.dev/blog/", "article"),
      ],
    ),
    st(
      "internals",
      "advanced",
      "Runtime and performance",
      "The scheduler, garbage collector and profiling tools. Understand what your program does at runtime.",
      "Profile a Go service and remove its actual bottleneck.",
      [
        s("Go Diagnostics", "https://go.dev/doc/diagnostics", "docs"),
        s("Go Blog — Profiling", "https://go.dev/blog/pprof", "article"),
        s("Ardan Labs training", "https://github.com/ardanlabs/gotraining", "course"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("CLI file tool", "A tool that searches or renames files with flags. Proves packages, errors and the standard library."),
      p("Link checker", "Check the status of a list of URLs and report failures with proper error wrapping."),
    ],
    intermediate: [
      p("Worker pool", "Process 10k jobs with a fixed number of goroutines, a context timeout and graceful shutdown."),
      p("Tested JSON API", "A small REST service backed by SQLite with table-driven tests."),
    ],
    advanced: [
      p("Benchmark and profile", "Profile a service with pprof, fix the allocation that dominates and prove it with benchmarks."),
      p("Scheduler visualiser", "Instrument goroutines to show how work moves between Ps and Ms in the runtime."),
    ],
  },

})

export const react = defineTopic({
  name: "react",
  prettyName: "React",
  category: "Programming",
  aliases: ["reactjs", "jsx", "hooks", "frontend"],
  topicSummary:
    "React is a UI library built around components that return what the screen should look like. The modern docs teach it as a mental model rather than an API list, which is exactly how it should be learned.",
  steps: [
    st(
      "thinking-in-components",
      "beginner",
      "Thinking in components",
      "Break a design into components, pass data with props and render lists. Nothing about state yet.",
      "Turn a static design into a component tree.",
      [
        s("React — Describing the UI", "https://react.dev/learn/describing-the-ui", "docs"),
        s("React — Quick Start", "https://react.dev/learn", "docs"),
      ],
    ),
    st(
      "state",
      "beginner",
      "State and events",
      "State, event handlers and controlled inputs. This is where components start to feel alive.",
      "Build an interactive form or small game.",
      [
        s("React — Adding Interactivity", "https://react.dev/learn/adding-interactivity", "docs"),
        s("React — Tic-Tac-Toe tutorial", "https://react.dev/learn/tutorial-tic-tac-toe", "interactive"),
      ],
    ),
    st(
      "effects",
      "intermediate",
      "Effects and escape hatches",
      "When to use an effect, when not to, and how refs let you step outside React.",
      "Synchronise a component with a browser API or external system correctly.",
      [
        s("React — Synchronizing with Effects", "https://react.dev/learn/synchronizing-with-effects", "docs"),
        s("React — You Might Not Need an Effect", "https://react.dev/learn/you-might-not-need-an-effect", "docs"),
      ],
    ),
    st(
      "data-and-routing",
      "intermediate",
      "Data fetching and routing",
      "Load data, cache it and move between pages. Most real apps spend most of their code here.",
      "Build a multi-page app that fetches and caches server data.",
      [
        s("TanStack Query", "https://tanstack.com/query/latest/docs/framework/react/overview", "docs"),
        s("React Router Tutorial", "https://reactrouter.com/en/main/start/tutorial", "course"),
      ],
    ),
    st(
      "production-app",
      "intermediate",
      "Build a production app",
      "Project structure, forms, styling, testing and deployment — the things tutorials skip.",
      "Ship and maintain a React app users depend on.",
      [
        s("Next.js Learn", "https://nextjs.org/learn", "course"),
        s("React — Managing State", "https://react.dev/learn/managing-state", "docs"),
      ],
    ),
    st(
      "how-react-works",
      "advanced",
      "How React really works",
      "Rendering, reconciliation, re-renders and performance. Understand the engine so you stop cargo-culting `useMemo`.",
      "Diagnose unnecessary re-renders and fix them deliberately.",
      [
        s("React — Render and Commit", "https://react.dev/learn/render-and-commit", "docs"),
        s("React — Reference", "https://react.dev/reference/react", "docs"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Filterable list", "A searchable list with local state and controlled inputs."),
      p("Multi-step form", "A signup flow with per-step validation and a summary screen."),
    ],
    intermediate: [
      p("Data-backed app with routing", "Three routes, fetched data and honest loading and error UI."),
      p("Optimistic updates", "A list where edits appear instantly and roll back when the request fails."),
    ],
    advanced: [
      p("Mini hooks runtime", "Implement useState and useEffect yourself and re-render a small app with it."),
      p("Fix a re-render storm", "Find one, fix it and show the before/after render counts."),
    ],
  },

})

export const sql = defineTopic({
  name: "sql",
  prettyName: "SQL",
  category: "Programming",
  aliases: ["databases", "postgres", "postgresql", "queries", "data"],
  topicSummary:
    "SQL is how you talk to relational databases, and relational databases still run most of the world's software. Learn to think in sets, then in indexes.",
  steps: [
    st(
      "select",
      "beginner",
      "SELECT and filtering",
      "Query a table, filter rows, sort results and count things. Start with a real database, not a diagram.",
      "Answer questions about a dataset with a single query.",
      [
        s("SQLBolt", "https://sqlbolt.com/", "interactive", "Learn SQL in the browser with exercises."),
        s("PostgreSQL Tutorial", "https://www.postgresql.org/docs/current/tutorial.html", "docs"),
      ],
    ),
    st(
      "joins",
      "beginner",
      "Joins and aggregation",
      "Relational data lives in many tables. Joins and `GROUP BY` are how you put it back together.",
      "Join several tables and summarise the result per group.",
      [
        s("SQLBolt — Joins", "https://sqlbolt.com/lesson/select_queries_with_joins", "interactive"),
        s("PG Exercises", "https://pgexercises.com/", "practice", "Progressively harder exercises on a real schema."),
      ],
    ),
    st(
      "schema-design",
      "intermediate",
      "Designing a schema",
      "Tables, keys, constraints and normalisation. A good schema makes the queries obvious.",
      "Design tables for a new feature without duplicating data.",
      [
        s("PostgreSQL — Data Definition", "https://www.postgresql.org/docs/current/ddl.html", "docs"),
        s("PostgreSQL — Constraints", "https://www.postgresql.org/docs/current/ddl-constraints.html", "docs"),
      ],
    ),
    st(
      "indexes",
      "intermediate",
      "Indexes and query plans",
      "Why some queries are instant and others hang. Read `EXPLAIN`, add the right index and stop guessing.",
      "Speed up a slow query and explain why the fix worked.",
      [
        s("Use The Index, Luke", "https://use-the-index-luke.com/", "book", "The best free resource on SQL performance."),
        s("PostgreSQL — Performance Tips", "https://www.postgresql.org/docs/current/performance-tips.html", "docs"),
      ],
    ),
    st(
      "analytics",
      "intermediate",
      "Analytical SQL",
      "Window functions, CTEs and recursive queries — the tools behind every dashboard.",
      "Write a report query with running totals and rankings.",
      [
        s("PostgreSQL — Window Functions", "https://www.postgresql.org/docs/current/tutorial-window.html", "docs"),
        s("Mode SQL Tutorial", "https://mode.com/sql-tutorial/", "course"),
      ],
    ),
    st(
      "internals",
      "advanced",
      "How databases store data",
      "Pages, MVCC, transactions and isolation levels. Knowing this explains most production surprises.",
      "Reason about concurrency and locking in a real application.",
      [
        s("PostgreSQL — Concurrency Control", "https://www.postgresql.org/docs/current/mvcc.html", "docs"),
        s("PostgreSQL — Index Types", "https://www.postgresql.org/docs/current/indexes-types.html", "docs"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Answer ten questions", "Query a public dataset to answer ten business questions with SELECT, WHERE and ORDER BY."),
      p("Monthly sales report", "Aggregate orders per month and per customer with GROUP BY and HAVING."),
    ],
    intermediate: [
      p("Design a schema", "Model a small product with normalisation, constraints and foreign keys, then seed it."),
      p("Speed up a slow query", "Take a query that takes seconds, add the right index and show the plan before and after."),
    ],
    advanced: [
      p("Tiny storage engine", "Build a B-tree backed key/value store in a language you know. Proves how databases store data."),
      p("Window function report", "Build a retention or ranking report on a large public dataset and optimise it."),
    ],
  },

})

export const algorithms = defineTopic({
  name: "algorithms",
  prettyName: "Algorithms & Data Structures",
  category: "Programming",
  aliases: ["algorithms", "data structures", "dsa", "leetcode", "interview"],
  topicSummary:
    "Algorithms are the vocabulary of problem solving. You learn a handful of structures, the cost of each operation, and the patterns that show up again and again in real systems and interviews.",
  steps: [
    st(
      "basics",
      "beginner",
      "Complexity and basic structures",
      "Big-O, arrays, linked lists, stacks and queues. Understand the cost of what you already use every day.",
      "Estimate how an approach scales before writing it.",
      [
        s(
          "MIT 6.006 — Introduction to Algorithms",
          "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
          "course",
        ),
        s("Algorithms, 4th Edition (Princeton)", "https://algs4.cs.princeton.edu/home/", "book"),
      ],
    ),
    st(
      "structures",
      "beginner",
      "Trees, heaps and hash tables",
      "The structures that power databases, schedulers and caches. Visualise them before you implement them.",
      "Pick the right data structure for a problem and justify it.",
      [
        s(
          "Data Structure Visualizations",
          "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
          "interactive",
        ),
        s(
          "Introduction to Algorithms (CLRS)",
          "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/",
          "book",
        ),
      ],
    ),
    st(
      "graph-algorithms",
      "intermediate",
      "Sorting, searching and graphs",
      "Binary search, sorting, BFS/DFS, shortest paths and dynamic programming patterns.",
      "Recognise which classic technique a new problem maps onto.",
      [
        s("CP-Algorithms", "https://cp-algorithms.com/", "docs"),
        s("Breadth-first search", "https://en.wikipedia.org/wiki/Breadth-first_search", "article"),
      ],
    ),
    st(
      "practice",
      "intermediate",
      "Structured practice",
      "Deliberate practice on curated problem sets beats grinding random questions.",
      "Solve medium problems consistently within a time limit.",
      [
        s("NeetCode Roadmap", "https://neetcode.io/roadmap", "practice", "Ordered problem list by pattern."),
        s("LeetCode Explore", "https://leetcode.com/explore/", "practice"),
      ],
    ),
    st(
      "design",
      "advanced",
      "Algorithm design techniques",
      "Divide and conquer, greedy proofs, amortised analysis and NP-completeness — the ideas behind the patterns.",
      "Prove that a solution is correct and know when it cannot be fast.",
      [
        s("Dynamic programming", "https://en.wikipedia.org/wiki/Dynamic_programming", "article"),
        s("Greedy algorithm", "https://en.wikipedia.org/wiki/Greedy_algorithm", "article"),
      ],
    ),
    st(
      "competition",
      "advanced",
      "Competitive programming",
      "If you want speed under pressure, competitive programming is the fastest feedback loop there is.",
      "Compete in a rated contest without freezing.",
      [
        s("Codeforces", "https://codeforces.com/", "practice"),
        s("Competitive Programmer's Handbook", "https://cses.fi/book/book.pdf", "book"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Implement the core structures", "Dynamic array, linked list, stack and queue, each with tests."),
      p("Hash map from scratch", "Build a hash table with resizing and collision handling, then compare with the standard one."),
    ],
    intermediate: [
      p("Path finder", "BFS, DFS and Dijkstra on a real grid, drawn to the screen."),
      p("Thirty problems by pattern", "Work through 30 ordered problems, writing the pattern down before the solution."),
    ],
    advanced: [
      p("Dynamic programming set", "Solve ten DP problems, writing the recurrence before any code."),
      p("Virtual contest", "Complete a full timed contest and write up every problem you could not solve."),
    ],
  },

})

export const linux = defineTopic({
  name: "linux",
  prettyName: "Linux",
  category: "Programming",
  aliases: ["unix", "shell", "bash", "command line", "sysadmin"],
  topicSummary:
    "Linux runs the servers most software is deployed to, and the command line is the fastest interface to a computer. Learn the shell first, then the system itself.",
  steps: [
    st(
      "shell-basics",
      "beginner",
      "The shell",
      "Navigate the filesystem, read files and pipe commands together. Ten commands cover most daily work.",
      "Move around and inspect a machine from a terminal.",
      [
        s("Linux Journey", "https://linuxjourney.com/", "course", "Short lessons with quizzes."),
        s(
          "The Linux Command Line for Beginners",
          "https://ubuntu.com/tutorials/command-line-for-beginners",
          "course",
        ),
      ],
    ),
    st(
      "system",
      "beginner",
      "Users, permissions and processes",
      "Ownership, `chmod`, `sudo`, process management and logs. This is how you understand what a machine is doing.",
      "Find and fix a permission problem or a runaway process.",
      [
        s("Introduction to Linux (TLDP)", "https://tldp.org/LDP/intro-linux/html/index.html", "book"),
        s("Linux kernel", "https://en.wikipedia.org/wiki/Linux_kernel", "article"),
      ],
    ),
    st(
      "scripting",
      "intermediate",
      "Shell scripting",
      "Variables, loops, conditionals and error handling in bash, plus the productivity tricks that save hours.",
      "Automate a repetitive multi-step task with a script.",
      [
        s("Advanced Bash-Scripting Guide", "https://tldp.org/LDP/abs/html/", "book"),
        s("Shell script", "https://en.wikipedia.org/wiki/Shell_script", "article"),
      ],
    ),
    st(
      "dev-environment",
      "intermediate",
      "A real development environment",
      "Dotfiles, editors, tmux, ssh and package managers. Set up a machine you enjoy using.",
      "Recreate your whole environment on a fresh machine in minutes.",
      [
        s("The Missing Semester — Tooling", "https://missing.csail.mit.edu/", "course"),
        s("Unix shell", "https://en.wikipedia.org/wiki/Unix_shell", "article"),
      ],
    ),
    st(
      "servers",
      "intermediate",
      "Servers and services",
      "systemd units, logs, ssh keys, firewalls and deploying an app to a real box.",
      "Deploy and keep a service running on a Linux server.",
      [
        s("systemd Documentation", "https://www.freedesktop.org/wiki/Software/systemd/", "docs"),
        s("DigitalOcean Tutorials", "https://www.digitalocean.com/community/tutorials", "article"),
      ],
    ),
    st(
      "kernel",
      "advanced",
      "The kernel",
      "Syscalls, the scheduler, filesystems and kernel modules. For when the abstraction leaks.",
      "Diagnose deep system behaviour with the right tools.",
      [
        s("The Linux Kernel Documentation", "https://www.kernel.org/doc/html/latest/", "docs"),
        s("Linux source code", "https://github.com/torvalds/linux", "docs"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Terminal-only day", "Do a full day of work without leaving the shell: files, search, processes, permissions."),
      p("Permission repair", "Break a directory tree's permissions on purpose, then fix it with chmod, chown and ACLs."),
    ],
    intermediate: [
      p("Idempotent backup script", "A script that can run twice safely, with cron, logging and error handling."),
      p("Host a service", "Run an app behind a reverse proxy with systemd, logs and a firewall."),
    ],
    advanced: [
      p("Trace a program", "Use strace and perf to explain exactly what a binary does when it starts."),
      p("Load a kernel module", "Build, load and unload a trivial module and read the output in dmesg."),
    ],
  },

})

export const git = defineTopic({
  name: "git",
  prettyName: "Git",
  category: "Programming",
  aliases: ["version control", "github", "branching"],
  topicSummary:
    "Git records snapshots of your work and lets many people change the same project without stepping on each other. Most people memorise a handful of commands — learning the model underneath makes it calm.",
  steps: [
    st(
      "basics",
      "beginner",
      "Commits and history",
      "Repositories, staging, commits and diffs. Everything else in Git is built on these four ideas.",
      "Track a project's changes and read its history.",
      [
        s("Pro Git (free book)", "https://git-scm.com/book/en/v2", "book", "The official book, chapters 1–3 are enough to start."),
        s("Learn Git Branching", "https://learngitbranching.js.org/", "interactive"),
      ],
    ),
    st(
      "branching",
      "beginner",
      "Branching and merging",
      "Branches are cheap pointers, not copies. Learning that removes most Git anxiety.",
      "Work on a feature in a branch and merge it back.",
      [
        s(
          "Pro Git — Git Branching",
          "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",
          "book",
        ),
        s("Git — Basic branching and merging", "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging", "book"),
      ],
    ),
    st(
      "collaboration",
      "intermediate",
      "Collaboration",
      "Remotes, pull requests, rebasing and resolving conflicts on a shared project.",
      "Contribute to a team repository without breaking `main`.",
      [
        s("GitHub Flow", "https://docs.github.com/en/get-started/using-github/github-flow", "docs"),
        s(
          "Pro Git — Distributed Workflows",
          "https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows",
          "book",
        ),
      ],
    ),
    st(
      "fixing-mistakes",
      "intermediate",
      "Fixing mistakes",
      "Reset, revert, reflog and interactive rebase — how to undo almost anything safely.",
      "Recover from a bad merge or a commit on the wrong branch.",
      [
        s("Oh Shit, Git!?!", "https://ohshitgit.com/", "article"),
        s(
          "Pro Git — Rewriting History",
          "https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History",
          "book",
        ),
      ],
    ),
    st(
      "workflows",
      "intermediate",
      "Team workflows and automation",
      "Trunk based development, release tagging and CI pipelines that keep a codebase healthy.",
      "Set up a repository that a team can work in for years.",
      [
        s("GitHub Actions Documentation", "https://docs.github.com/en/actions", "docs"),
        s("Pro Git — Customising Git", "https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration", "book"),
      ],
    ),
    st(
      "internals",
      "advanced",
      "Git internals",
      "Blobs, trees, commits and the object database. Once you see this, the commands become obvious.",
      "Explain exactly what a commit is and repair a corrupted repository.",
      [
        s(
          "Pro Git — Git Internals",
          "https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain",
          "book",
        ),
        s("Git reference manual", "https://git-scm.com/docs", "docs"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Build an honest history", "Take a messy folder and commit it as ten meaningful commits."),
      p("Branch and merge", "Create a feature branch, merge it and resolve a real conflict."),
    ],
    intermediate: [
      p("Collaborate on a pull request", "Open a PR in a real repository and address review comments with amend and rebase."),
      p("Recover lost work", "Delete a commit, drop a branch, then recover both with the reflog."),
    ],
    advanced: [
      p("Rebuild a commit by hand", "Inspect blobs, trees and commits with cat-file and create a commit without git commit."),
      p("Hooks that protect you", "Add pre-commit hooks that run tests and block secrets."),
    ],
  },

})
