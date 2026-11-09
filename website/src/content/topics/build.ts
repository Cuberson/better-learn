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
        s(
          "Cascading Style Sheets",
          "https://en.wikipedia.org/wiki/Cascading_Style_Sheets",
          "article",
          "Background reading on Cascading Style Sheets for this step.",
        ),
        s(
          "Exercism — practice exercises",
          "https://exercism.org/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Event (computing)",
          "https://en.wikipedia.org/wiki/Event_(computing)",
          "article",
          "Background reading on Event (computing) for this step.",
        ),
        s(
          "Codewars — coding katas",
          "https://www.codewars.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "HTTP",
          "https://en.wikipedia.org/wiki/HTTP",
          "article",
          "Background reading on HTTP for this step.",
        ),
        s(
          "Advent of Code",
          "https://adventofcode.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Web framework",
          "https://en.wikipedia.org/wiki/Web_framework",
          "article",
          "Background reading on Web framework for this step.",
        ),
        s(
          "The Odin Project",
          "https://www.theodinproject.com/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Representational state transfer",
          "https://en.wikipedia.org/wiki/Representational_state_transfer",
          "article",
          "Background reading on Representational state transfer for this step.",
        ),
        s(
          "freeCodeCamp — curriculum",
          "https://www.freecodecamp.org/learn/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Content delivery network",
          "https://en.wikipedia.org/wiki/Content_delivery_network",
          "article",
          "Background reading on Content delivery network for this step.",
        ),
        s(
          "DevDocs — offline API docs",
          "https://devdocs.io/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Static personal site", "Hand-written HTML and CSS, responsive, deployed to a real URL."),
      p("Interactive widget", "A calculator or countdown built with plain JavaScript and the DOM."),
      p("Responsive gallery", "A grid gallery with lazy loading and keyboard access."),
    ],
    intermediate: [
      p("Full-stack app", "Frontend, API and database with accounts, deployed end to end."),
      p("Explain the request", "Document every hop from typing a URL to pixels, with a diagram."),
      p("Add auth and sessions", "Cookie sessions, a password reset flow and protected routes."),
    ],
    advanced: [
      p("Ship and measure", "Add caching, a CDN, monitoring and a load test to your app."),
      p("Scale a bottleneck", "Push your app to 10k requests per minute and write down what broke first."),
      p("Offline first app", "Service worker, cache strategies and background sync."),
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
        s(
          "OSI model",
          "https://en.wikipedia.org/wiki/OSI_model",
          "article",
          "Background reading on OSI model for this step.",
        ),
        s(
          "Exercism — practice exercises",
          "https://exercism.org/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Cross-site scripting",
          "https://en.wikipedia.org/wiki/Cross-site_scripting",
          "article",
          "Background reading on Cross-site scripting for this step.",
        ),
        s(
          "Codewars — coding katas",
          "https://www.codewars.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Public-key cryptography",
          "https://en.wikipedia.org/wiki/Public-key_cryptography",
          "article",
          "Background reading on Public-key cryptography for this step.",
        ),
        s(
          "Advent of Code",
          "https://adventofcode.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Penetration test",
          "https://en.wikipedia.org/wiki/Penetration_test",
          "article",
          "Background reading on Penetration test for this step.",
        ),
        s(
          "The Odin Project",
          "https://www.theodinproject.com/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Intrusion detection system",
          "https://en.wikipedia.org/wiki/Intrusion_detection_system",
          "article",
          "Background reading on Intrusion detection system for this step.",
        ),
        s(
          "freeCodeCamp — curriculum",
          "https://www.freecodecamp.org/learn/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Vulnerability (computing)",
          "https://en.wikipedia.org/wiki/Vulnerability_(computing)",
          "article",
          "Background reading on Vulnerability (computing) for this step.",
        ),
        s(
          "DevDocs — offline API docs",
          "https://devdocs.io/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Build a lab network", "Two virtual machines, a capture and a written reading of the traffic."),
      p("Break your own app", "Find and fix XSS, SQL injection and CSRF in something you wrote."),
      p("Cracking lab", "Crack a hash list from a CTF inside your own lab and write the report."),
    ],
    intermediate: [
      p("Beginner CTF track", "Finish a full beginner track and write up every challenge."),
      p("Crypto exercises", "Work through the Crypto101 exercises and use AES-GCM correctly in code."),
      p("Port scanner", "Write one, then explain how a defender would detect it."),
    ],
    advanced: [
      p("Write a detection rule", "Write a detection for a real attack and test it against collected logs."),
      p("Responsible disclosure", "Find a bug in a bug-bounty target and write the report."),
      p("Threat model a product", "A full STRIDE model with mitigations for an app you use."),
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
        s(
          "Unity (game engine)",
          "https://en.wikipedia.org/wiki/Unity_(game_engine)",
          "article",
          "Background reading on Unity (game engine) for this step.",
        ),
        s(
          "Exercism — practice exercises",
          "https://exercism.org/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Game programming",
          "https://en.wikipedia.org/wiki/Game_programming",
          "article",
          "Background reading on Game programming for this step.",
        ),
        s(
          "Codewars — coding katas",
          "https://www.codewars.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Level design",
          "https://en.wikipedia.org/wiki/Level_design",
          "article",
          "Background reading on Level design for this step.",
        ),
        s(
          "Advent of Code",
          "https://adventofcode.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "3D computer graphics",
          "https://en.wikipedia.org/wiki/3D_computer_graphics",
          "article",
          "Background reading on 3D computer graphics for this step.",
        ),
        s(
          "The Odin Project",
          "https://www.theodinproject.com/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Video game development",
          "https://en.wikipedia.org/wiki/Video_game_development",
          "article",
          "Background reading on Video game development for this step.",
        ),
        s(
          "freeCodeCamp — curriculum",
          "https://www.freecodecamp.org/learn/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Entity component system",
          "https://en.wikipedia.org/wiki/Entity_component_system",
          "article",
          "Background reading on Entity component system for this step.",
        ),
        s(
          "DevDocs — offline API docs",
          "https://devdocs.io/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Pong clone", "A complete Pong with score, sound and restart."),
      p("Game jam entry", "Ship something small for a 48 hour jam against a theme."),
      p("First 3D scene", "A walking demo in Godot or Unity with a working camera."),
    ],
    intermediate: [
      p("Platformer vertical slice", "One level with physics, camera, enemies and menus."),
      p("Shader toy set", "Recreate three effects as shaders in your engine."),
      p("Save games and settings", "Add slots, options and key remapping."),
    ],
    advanced: [
      p("Small engine", "Write a 2D engine loop with an entity system and profiling."),
      p("Netcode prototype", "Add rollback or client-side prediction to a two player game."),
      p("Publish a game", "Ship something small to itch.io with a store page."),
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
        s(
          "Merkle tree",
          "https://en.wikipedia.org/wiki/Merkle_tree",
          "article",
          "Background reading on Merkle tree for this step.",
        ),
        s(
          "Exercism — practice exercises",
          "https://exercism.org/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Ethereum",
          "https://en.wikipedia.org/wiki/Ethereum",
          "article",
          "Background reading on Ethereum for this step.",
        ),
        s(
          "Codewars — coding katas",
          "https://www.codewars.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Solidity",
          "https://en.wikipedia.org/wiki/Solidity",
          "article",
          "Background reading on Solidity for this step.",
        ),
        s(
          "Advent of Code",
          "https://adventofcode.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Smart contract",
          "https://en.wikipedia.org/wiki/Smart_contract",
          "article",
          "Background reading on Smart contract for this step.",
        ),
        s(
          "The Odin Project",
          "https://www.theodinproject.com/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Decentralized finance",
          "https://en.wikipedia.org/wiki/Decentralized_finance",
          "article",
          "Background reading on Decentralized finance for this step.",
        ),
        s(
          "freeCodeCamp — curriculum",
          "https://www.freecodecamp.org/learn/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Proof of stake",
          "https://en.wikipedia.org/wiki/Proof_of_stake",
          "article",
          "Background reading on Proof of stake for this step.",
        ),
        s(
          "DevDocs — offline API docs",
          "https://devdocs.io/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Decode a block", "Pick a real block and decode its transactions by hand."),
      p("Testnet wallet", "Create a wallet, send a test transaction and verify it on an explorer."),
      p("Toy blockchain", "A hash chain in a hundred lines, then break it."),
    ],
    intermediate: [
      p("Deploy a contract", "Write, test and deploy an ERC-20 or a small NFT on a testnet."),
      p("Break a contract", "Complete Ethernaut and write the exploit for each level."),
      p("Gas golf", "Optimise a contract and measure the savings per call."),
    ],
    advanced: [
      p("Consensus simulation", "Simulate a proof-of-work and proof-of-stake chain and show the cost of an attack."),
      p("Bridge or rollup study", "Compare two scaling designs and write the trade-offs with numbers."),
      p("MEV trace", "Follow a sandwich attack through a block explorer."),
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
        s(
          "Fused deposition modeling",
          "https://en.wikipedia.org/wiki/Fused_deposition_modeling",
          "article",
          "Background reading on Fused deposition modeling for this step.",
        ),
        s(
          "Instructables",
          "https://www.instructables.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Thingiverse",
          "https://www.thingiverse.com/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "G-code",
          "https://en.wikipedia.org/wiki/G-code",
          "article",
          "Background reading on G-code for this step.",
        ),
        s(
          "Prusa — blog",
          "https://blog.prusa3d.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Computer-aided design",
          "https://en.wikipedia.org/wiki/Computer-aided_design",
          "article",
          "Background reading on Computer-aided design for this step.",
        ),
        s(
          "Adafruit — Learn",
          "https://learn.adafruit.com/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Polylactic acid",
          "https://en.wikipedia.org/wiki/Polylactic_acid",
          "article",
          "Background reading on Polylactic acid for this step.",
        ),
        s(
          "Hackaday",
          "https://hackaday.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Selective laser sintering",
          "https://en.wikipedia.org/wiki/Selective_laser_sintering",
          "article",
          "Background reading on Selective laser sintering for this step.",
        ),
        s(
          "Make: Magazine",
          "https://makezine.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Calibration set", "Print a calibration cube, a benchy and a tolerance test and log the results."),
      p("A part you actually need", "Design and print something useful for your desk or your bike."),
      p("Name plate", "Model text in a plate and print it cleanly."),
    ],
    intermediate: [
      p("Two-part enclosure", "Model an enclosure with screw bosses and print both halves so they fit."),
      p("Material comparison", "Print the same part in three materials and compare strength and finish."),
      p("Print in place hinge", "Design a joint that comes off the bed assembled."),
    ],
    advanced: [
      p("Small production run", "Print 20 identical parts with consistent quality and cost them out."),
      p("Printer rebuild", "Upgrade or rebuild a printer and document the accuracy before and after."),
      p("Commission a part", "Take a real request and deliver a finished, measured part."),
    ],
  },
})
