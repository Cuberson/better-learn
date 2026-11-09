import { defineTopic, p, s, st } from "../helpers"

// Making things: the web, security, games, blockchains and physical objects.

export const webDevelopment = defineTopic({
  name: "web-development",
  prettyName: "Web Development",
  category: "Programming",
  aliases: ["html", "css", "frontend", "backend", "webdev", "fullstack"],
  topicSummary:
    "Web development is HTML, CSS and JavaScript plus the HTTP protocol underneath. Learn to build something real fast, then fill in the parts that start to hurt.",
  steps: [
    st(
      "html-css",
      "beginner",
      "HTML and CSS",
      "Semantic markup and layout. You should be able to turn a design into a page with no framework.",
      "Build a responsive page from a screenshot without copying code.",
      [
        s("MDN — HTML", "https://developer.mozilla.org/en-US/docs/Learn/HTML", "docs"),
        s("web.dev — Learn CSS", "https://web.dev/learn/css", "course"),
      ],
    ),
    st(
      "javascript-basics",
      "beginner",
      "JavaScript for the browser",
      "The language and the DOM, enough to make a page respond to a person.",
      "Build an interactive component from scratch.",
      [
        s("MDN — JavaScript", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript", "docs"),
        s("javascript.info", "https://javascript.info/", "interactive"),
      ],
    ),
    st(
      "http",
      "intermediate",
      "How the web works",
      "HTTP, DNS, cookies, CORS and caching. Most confusing bugs are actually protocol misunderstandings.",
      "Debug a request end to end in the browser dev tools.",
      [
        s("MDN — HTTP", "https://developer.mozilla.org/en-US/docs/Web/HTTP", "docs"),
        s("web.dev — Learn Performance", "https://web.dev/learn/performance", "course"),
      ],
    ),
    st(
      "frameworks",
      "intermediate",
      "Frameworks and state",
      "Components, routing and data fetching with a modern framework.",
      "Build a multi-page app with authentication and server data.",
      [
        s("React — Learn", "https://react.dev/learn", "docs"),
        s("Next.js — Learn", "https://nextjs.org/learn", "course"),
      ],
    ),
    st(
      "backend",
      "intermediate",
      "Backend and databases",
      "Servers, APIs and persistence. Every app eventually needs to remember something.",
      "Build an API with a real database behind it.",
      [
        s("Full Stack Open", "https://fullstackopen.com/en/", "course"),
        s("PostgreSQL Tutorial", "https://www.postgresql.org/docs/current/tutorial.html", "docs"),
      ],
    ),
    st(
      "production",
      "advanced",
      "Shipping and scaling",
      "Deployment, monitoring, accessibility and security basics. The gap between a demo and a product.",
      "Run a site in production and know when it breaks.",
      [
        s("web.dev — Learn Accessibility", "https://web.dev/learn/accessibility", "course"),
        s("OWASP Top Ten", "https://owasp.org/www-project-top-ten/", "docs"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Static personal site", "Hand-written HTML and CSS, responsive, deployed to a real URL."),
      p("Interactive widget", "A calculator or countdown built with plain JavaScript and the DOM."),
    ],
    intermediate: [
      p("Full-stack app", "Frontend, API and database with accounts, deployed end to end."),
      p("Explain the request", "Document every hop from typing a URL to pixels, with a diagram."),
    ],
    advanced: [
      p("Ship and measure", "Add caching, a CDN, monitoring and a load test to your app."),
      p("Scale a bottleneck", "Push your app to 10k requests per minute and write down what broke first."),
    ],
  },

})

export const cybersecurity = defineTopic({
  name: "cybersecurity",
  prettyName: "Cybersecurity",
  category: "Programming",
  aliases: ["security", "hacking", "pentesting", "infosec", "ctf"],
  topicSummary:
    "Security is the study of how systems fail when someone actively wants them to. Start with how computers and networks work, then learn how attackers think — ethically and legally.",
  steps: [
    st(
      "foundations",
      "beginner",
      "Computer and network foundations",
      "Operating systems, TCP/IP, DNS and the command line. You cannot attack or defend what you do not understand.",
      "Explain what happens when you type a URL into a browser.",
      [
        s("TryHackMe — Pre Security", "https://tryhackme.com/path/outline/presecurity", "course", "Beginner path with hands-on rooms."),
        s("The Missing Semester (MIT)", "https://missing.csail.mit.edu/", "course"),
      ],
    ),
    st(
      "web-security",
      "beginner",
      "Web security",
      "Injection, XSS, broken authentication and the OWASP Top Ten. Web apps are the most common target.",
      "Find and fix a vulnerability in a deliberately broken app.",
      [
        s("PortSwigger Web Security Academy", "https://portswigger.net/web-security", "course", "Free labs, the best practical security resource."),
        s("OWASP Top Ten", "https://owasp.org/www-project-top-ten/", "docs"),
      ],
    ),
    st(
      "cryptography",
      "intermediate",
      "Cryptography",
      "Hashing, symmetric and public key encryption, TLS and the mistakes that break them.",
      "Explain why HTTPS is secure and where it is not.",
      [
        s("Crypto101", "https://www.crypto101.io/", "book", "Free introduction to cryptography."),
        s("Cryptography", "https://en.wikipedia.org/wiki/Cryptography", "article"),
      ],
    ),
    st(
      "offensive",
      "intermediate",
      "Offensive security",
      "Reconnaissance, exploitation and privilege escalation in legal practice environments.",
      "Complete a beginner CTF challenge without a walkthrough.",
      [
        s("Hack The Box Academy", "https://academy.hackthebox.com/", "course"),
        s("TryHackMe — Jr Penetration Tester", "https://tryhackme.com/path/outline/jrpenetrationtester", "course"),
      ],
    ),
    st(
      "defensive",
      "intermediate",
      "Defensive security",
      "Logging, detection, incident response and hardening systems before they are attacked.",
      "Set up detection for a known attack technique.",
      [
        s("Blue Team Labs Online", "https://blueteamlabs.online/", "practice"),
        s("CISA — Best Practices", "https://www.cisa.gov/topics/cyber-threats-and-advisories", "docs"),
      ],
    ),
    st(
      "career",
      "advanced",
      "Specialising",
      "Application security, cloud security and red teaming each have their own depth and certifications.",
      "Choose a specialism and produce work that shows you can do it.",
      [
        s("SANS — Reading Room", "https://www.sans.org/white-papers/", "paper"),
        s("Awesome Pentest", "https://github.com/enaqx/awesome-pentest", "docs"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Build a lab network", "Two virtual machines, a capture and a written reading of the traffic."),
      p("Break your own app", "Find and fix XSS, SQL injection and CSRF in something you wrote."),
    ],
    intermediate: [
      p("Beginner CTF track", "Finish a full beginner track and write up every challenge."),
      p("Crypto exercises", "Work through the Crypto101 exercises and use AES-GCM correctly in code."),
    ],
    advanced: [
      p("Write a detection rule", "Write a detection for a real attack and test it against collected logs."),
      p("Responsible disclosure", "Find a bug in a bug-bounty target and write the report."),
    ],
  },

})

export const gameDevelopment = defineTopic({
  name: "game-development",
  prettyName: "Game Development",
  category: "Programming",
  aliases: ["gamedev", "unity", "godot", "game design", "games"],
  topicSummary:
    "Game development combines programming, design and art into a loop of building and playtesting. Start extremely small: one mechanic, one level, finished and shipped.",
  steps: [
    st(
      "engine",
      "beginner",
      "Pick an engine",
      "Choose Godot or Unity and learn the editor, scene model and how a game loop works.",
      "Build and export a playable scene.",
      [
        s("Godot — Getting Started", "https://docs.godotengine.org/en/stable/getting_started/introduction/index.html", "docs", "Free and open source."),
        s("Unity Learn", "https://learn.unity.com/", "course"),
      ],
    ),
    st(
      "first-game",
      "beginner",
      "Your first tiny game",
      "Input, collisions, scoring and a game over screen. A finished small game teaches more than a large unfinished one.",
      "Finish and share a complete small game.",
      [
        s("Godot — Your First 2D Game", "https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html", "docs"),
        s("Game loop", "https://en.wikipedia.org/wiki/Game_loop", "article"),
      ],
    ),
    st(
      "game-design",
      "intermediate",
      "Game design",
      "Core loops, pacing, difficulty curves and feedback. Design is what makes mechanics feel good.",
      "Iterate on your game based on playtest feedback.",
      [
        s("The Art of Game Design (lenses)", "https://www.schellgames.com/art-of-game-design", "book"),
        s("Game Developer", "https://www.gamedeveloper.com/", "article"),
      ],
    ),
    st(
      "math-and-graphics",
      "intermediate",
      "Math and graphics",
      "Vectors, transformations, cameras and shaders — enough to make things move correctly.",
      "Write a custom shader or implement a camera controller.",
      [
        s("Learn OpenGL", "https://learnopengl.com/", "course"),
        s("Red Blob Games", "https://www.redblobgames.com/", "interactive", "Interactive explanations of game algorithms."),
      ],
    ),
    st(
      "production",
      "intermediate",
      "Finishing and shipping",
      "Builds, store pages, playtesting and version control for binary assets.",
      "Publish a game to itch.io and get real players.",
      [
        s("itch.io — Developer Guide", "https://itch.io/docs/creators/", "docs"),
        s("Game Programming Patterns", "https://gameprogrammingpatterns.com/", "book"),
      ],
    ),
    st(
      "engine-internals",
      "advanced",
      "Engine internals",
      "Entity component systems, rendering pipelines and multiplayer netcode.",
      "Explain the architecture of a game engine you use.",
      [
        s("Game Engine Architecture", "https://www.gameenginebook.com/", "book"),
        s("Game engine", "https://en.wikipedia.org/wiki/Game_engine", "article"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Pong clone", "A complete Pong with score, sound and restart."),
      p("Game jam entry", "Ship something small for a 48 hour jam against a theme."),
    ],
    intermediate: [
      p("Platformer vertical slice", "One level with physics, camera, enemies and menus."),
      p("Shader toy set", "Recreate three effects as shaders in your engine."),
    ],
    advanced: [
      p("Small engine", "Write a 2D engine loop with an entity system and profiling."),
      p("Netcode prototype", "Add rollback or client-side prediction to a two player game."),
    ],
  },

})

export const blockchain = defineTopic({
  name: "blockchain",
  prettyName: "Blockchain",
  category: "Programming",
  aliases: ["crypto", "ethereum", "bitcoin", "web3", "smart contracts"],
  topicSummary:
    "Blockchains are replicated state machines with economic incentives. Learn the cryptography and consensus first, then write smart contracts — and be careful, they handle real money.",
  steps: [
    st(
      "foundations",
      "beginner",
      "How blockchains work",
      "Hash functions, Merkle trees, signatures and the idea of an immutable ledger.",
      "Explain why a block cannot be changed after the fact.",
      [
        s("Bitcoin whitepaper", "https://bitcoin.org/bitcoin.pdf", "paper", "Nine pages that started it."),
        s("Ethereum — Learn", "https://ethereum.org/en/learn/", "docs"),
      ],
    ),
    st(
      "bitcoin-ethereum",
      "beginner",
      "Bitcoin and Ethereum",
      "Two different designs: digital gold and a general purpose computer. Know the trade-offs.",
      "Describe the difference between a UTXO and an account model.",
      [
        s("Mastering Ethereum", "https://github.com/ethereumbook/ethereumbook", "book", "Free, comprehensive and honest."),
        s("Ethereum — Developers", "https://ethereum.org/en/developers/docs/", "docs"),
      ],
    ),
    st(
      "solidity",
      "intermediate",
      "Smart contracts",
      "Solidity, the EVM and how to write contracts that do one thing correctly.",
      "Write, test and deploy a simple contract on a testnet.",
      [
        s("CryptoZombies", "https://cryptozombies.io/", "interactive"),
        s("Solidity — Documentation", "https://docs.soliditylang.org/", "docs"),
      ],
    ),
    st(
      "security",
      "intermediate",
      "Smart contract security",
      "Reentrancy, overflow, oracle manipulation and the audit mindset. Contracts are adversarial environments.",
      "Spot the classic vulnerability in a contract and fix it.",
      [
        s("Ethernaut", "https://ethernaut.openzeppelin.com/", "practice", "Learn by breaking contracts."),
        s("OpenZeppelin — Contracts", "https://docs.openzeppelin.com/contracts/", "docs"),
      ],
    ),
    st(
      "defi-and-nfts",
      "intermediate",
      "Applications",
      "Tokens, DeFi primitives and NFTs — what is genuinely new versus what is a database with extra steps.",
      "Build a small token or NFT project end to end.",
      [
        s("Ethereum — Tutorials", "https://ethereum.org/en/developers/tutorials/", "docs"),
        s("Alchemy — Docs", "https://docs.alchemy.com/", "docs"),
      ],
    ),
    st(
      "research",
      "advanced",
      "Consensus and scaling",
      "Proof of stake, rollups, sharding and the open research problems in scaling.",
      "Read a consensus paper and explain its security assumptions.",
      [
        s("Ethereum — Scaling", "https://ethereum.org/en/developers/docs/scaling/", "docs"),
        s("arXiv — Cryptography and Security", "https://arxiv.org/list/cs.CR/recent", "paper"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Decode a block", "Pick a real block and decode its transactions by hand."),
      p("Testnet wallet", "Create a wallet, send a test transaction and verify it on an explorer."),
    ],
    intermediate: [
      p("Deploy a contract", "Write, test and deploy an ERC-20 or a small NFT on a testnet."),
      p("Break a contract", "Complete Ethernaut and write the exploit for each level."),
    ],
    advanced: [
      p("Consensus simulation", "Simulate a proof-of-work and proof-of-stake chain and show the cost of an attack."),
      p("Bridge or rollup study", "Compare two scaling designs and write the trade-offs with numbers."),
    ],
  },

})

export const threeDPrinting = defineTopic({
  name: "3d-printing",
  prettyName: "3D Printing",
  category: "Making",
  aliases: ["3d printing", "fdm", "additive manufacturing", "cad", "3d printer"],
  topicSummary:
    "3D printing turns a digital model into a physical object, one thin layer at a time. You need three skills: modelling, slicing and maintaining the machine.",
  steps: [
    st(
      "basics",
      "beginner",
      "How 3D printing works",
      "FDM versus resin, materials, and what a printer actually does with a file.",
      "Explain what your printer will do with a model you download.",
      [
        s("All3DP — Beginner's Guide", "https://all3dp.com/1/beginners-guide-to-3d-printing-3d-printing-basics/", "article"),
        s("3D printing", "https://en.wikipedia.org/wiki/3D_printing", "article"),
      ],
    ),
    st(
      "first-print",
      "beginner",
      "Your first prints",
      "Bed levelling, filament loading, temperatures and your first calibration test.",
      "Print a calibration cube that comes out dimensionally accurate.",
      [
        s("Printables — Models", "https://www.printables.com/", "practice", "Free models, many with print profiles."),
        s("Prusa Knowledge Base", "https://help.prusa3d.com/", "docs"),
      ],
    ),
    st(
      "slicing",
      "intermediate",
      "Slicing and settings",
      "Layer height, infill, supports, temperatures and speed. Slicing is where print quality is won or lost.",
      "Tune a profile for a specific material and purpose.",
      [
        s("All3DP — Slicer Settings", "https://all3dp.com/2/cura-settings-guide/", "article"),
        s("PrusaSlicer — Documentation", "https://help.prusa3d.com/category/prusaslicer_177/", "docs"),
      ],
    ),
    st(
      "cad",
      "intermediate",
      "Modelling your own parts",
      "Parametric CAD lets you design a part that actually fits what you measured.",
      "Design and print a functional part that solves a real problem.",
      [
        s("FreeCAD — Wiki", "https://wiki.freecad.org/", "docs"),
        s("Fusion 360 — Learning", "https://www.autodesk.com/learn/ondemand/product/fusion-360", "course"),
      ],
    ),
    st(
      "materials",
      "intermediate",
      "Materials and finishing",
      "PLA, PETG, TPU, ABS and post-processing. Material choice decides whether a part survives use.",
      "Pick the right material for a load-bearing or outdoor part.",
      [
        s("All3DP — Filament Guide", "https://all3dp.com/1/3d-printer-filament-types-3d-printing-3d-filament/", "article"),
        s("3D printing filament", "https://en.wikipedia.org/wiki/3D_printing_filament", "article"),
      ],
    ),
    st(
      "advanced",
      "advanced",
      "Machines, upgrades and production",
      "Printer maintenance, tuning, upgrades and small-batch manufacturing.",
      "Diagnose a mechanical failure and print reliably at scale.",
      [
        s("3D printing processes", "https://en.wikipedia.org/wiki/3D_printing_processes", "article"),
        s("3D Printing Industry", "https://3dprintingindustry.com/", "article"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Calibration set", "Print a calibration cube, a benchy and a tolerance test and log the results."),
      p("A part you actually need", "Design and print something useful for your desk or your bike."),
    ],
    intermediate: [
      p("Two-part enclosure", "Model an enclosure with screw bosses and print both halves so they fit."),
      p("Material comparison", "Print the same part in three materials and compare strength and finish."),
    ],
    advanced: [
      p("Small production run", "Print 20 identical parts with consistent quality and cost them out."),
      p("Printer rebuild", "Upgrade or rebuild a printer and document the accuracy before and after."),
    ],
  },

})
