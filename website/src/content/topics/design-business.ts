import { defineTopic, s, st } from "../helpers"

// Design, product and business: skills that are learned by making and shipping.

export const uiUxDesign = defineTopic({
  name: "ui-ux-design",
  prettyName: "UI/UX Design",
  category: "Design & Business",
  aliases: ["ux", "ui", "product design", "usability", "interaction design"],
  topicSummary:
    "UI/UX design is deciding what a product does and how it feels to use. Research tells you what people need, interaction design shapes the flow, and visual design makes it understandable.",
  steps: [
    st(
      "principles",
      "beginner",
      "Design principles",
      "Hierarchy, contrast, alignment, spacing and the heuristics that make interfaces predictable.",
      "Critique an interface and name concrete problems.",
      [
        s("Laws of UX", "https://lawsofux.com/", "interactive"),
        s("Nielsen Norman Group — Articles", "https://www.nngroup.com/articles/", "article", "The most reliable UX writing on the web."),
      ],
    ),
    st(
      "research",
      "beginner",
      "Understanding users",
      "Interviews, jobs to be done and usability testing on a budget.",
      "Run five user interviews and extract a real insight.",
      [
        s("Nielsen Norman Group — UX Research", "https://www.nngroup.com/articles/", "article"),
        s("Interaction Design Foundation", "https://www.interaction-design.org/literature", "course"),
      ],
    ),
    st(
      "interaction",
      "intermediate",
      "Interaction design",
      "Flows, states, error handling and edge cases. Good UX is mostly the unhappy paths.",
      "Design a complete flow including empty and error states.",
      [
        s("Refactoring UI", "https://www.refactoringui.com/", "book"),
        s("Material Design 3", "https://m3.material.io/", "docs"),
      ],
    ),
    st(
      "visual",
      "intermediate",
      "Visual design",
      "Typography, colour, layout and design systems that scale.",
      "Build a small design system with type and colour tokens.",
      [
        s("Practical Typography", "https://practicaltypography.com/", "book"),
        s("Material Design 3 — Foundations", "https://m3.material.io/", "docs"),
      ],
    ),
    st(
      "tools",
      "intermediate",
      "Tools and handoff",
      "Figma, components, prototypes and working with engineers without losing intent.",
      "Prototype an interactive flow and hand it off cleanly.",
      [
        s("Figma — Best Practices", "https://www.figma.com/best-practices/", "docs"),
        s("Design Systems (Smashing)", "https://www.smashingmagazine.com/category/design-systems/", "article"),
      ],
    ),
    st(
      "specialising",
      "advanced",
      "Specialising",
      "Accessibility, complex products, research operations or design leadership — pick a direction and go deep.",
      "Lead the design of a product area end to end.",
      [
        s("Web Accessibility Initiative", "https://www.w3.org/WAI/", "docs"),
        s("Interaction Design Foundation — Courses", "https://www.interaction-design.org/courses", "course"),
      ],
    ),
  ],
})

export const graphicDesign = defineTopic({
  name: "graphic-design",
  prettyName: "Graphic Design",
  category: "Design & Business",
  aliases: ["design", "typography", "branding", "layout"],
  topicSummary:
    "Graphic design is visual communication: choosing type, colour and composition so a message lands. Taste is built by studying good work and making a lot of bad work first.",
  steps: [
    st(
      "fundamentals",
      "beginner",
      "Fundamentals",
      "Contrast, repetition, alignment and proximity — the four principles behind most layout decisions.",
      "Redesign a bad poster and explain every change.",
      [
        s("Smashing Magazine", "https://www.smashingmagazine.com/", "article"),
        s("Canva — Design School", "https://www.canva.com/designschool/", "course"),
      ],
    ),
    st(
      "typography",
      "beginner",
      "Typography",
      "Type anatomy, pairing, spacing and hierarchy. Typography is most of graphic design.",
      "Set a paragraph of text that reads beautifully.",
      [
        s("Practical Typography", "https://practicaltypography.com/", "book"),
        s("Google Fonts — Knowledge", "https://fonts.google.com/knowledge", "article"),
      ],
    ),
    st(
      "colour",
      "intermediate",
      "Colour",
      "Colour theory, contrast and accessibility, and building a palette that works in the real world.",
      "Create a palette that passes contrast checks.",
      [
        s("Canva — Colour Theory", "https://www.canva.com/colors/color-wheel/", "interactive"),
        s("WebAIM — Contrast Checker", "https://webaim.org/resources/contrastchecker/", "interactive"),
      ],
    ),
    st(
      "tools",
      "intermediate",
      "Tools and workflow",
      "Vector and raster tools, non-destructive editing and preparing files for print or screen.",
      "Produce print-ready artwork at the correct resolution and colour space.",
      [
        s("Figma — Learn", "https://www.figma.com/resource-library/", "article"),
        s("Adobe — Learn", "https://helpx.adobe.com/learn.html", "course"),
      ],
    ),
    st(
      "branding",
      "intermediate",
      "Branding",
      "Identity systems, logos in context and guidelines that keep a brand consistent.",
      "Deliver a small brand identity with usage rules.",
      [
        s("Brand New", "https://www.underconsideration.com/brandnew/", "article"),
        s("Behance", "https://www.behance.net/", "interactive"),
      ],
    ),
    st(
      "studio-practice",
      "advanced",
      "Studio practice",
      "Briefs, critique, client work and building a portfolio that shows how you think.",
      "Complete a self-directed brief and present the process.",
      [
        s("Design Week", "https://www.designweek.co.uk/", "article"),
        s("It's Nice That", "https://www.itsnicethat.com/", "article"),
      ],
    ),
  ],
})

export const productManagement = defineTopic({
  name: "product-management",
  prettyName: "Product Management",
  category: "Design & Business",
  aliases: ["pm", "product", "roadmapping", "discovery"],
  topicSummary:
    "Product management is deciding what to build and why, then helping a team ship it. It is a judgement job: user research, prioritisation and clear communication.",
  steps: [
    st(
      "role",
      "beginner",
      "What the job is",
      "Product managers own outcomes, not tasks. Understand the role before the frameworks.",
      "Explain the difference between a feature and an outcome.",
      [
        s("SVPG — Articles", "https://www.svpg.com/articles/", "article", "Marty Cagan on product teams."),
        s("Lenny's Newsletter", "https://www.lennysnewsletter.com/", "article"),
      ],
    ),
    st(
      "discovery",
      "beginner",
      "Discovery",
      "Talk to users, find real problems and validate before building.",
      "Run a discovery cycle that kills or sharpens an idea.",
      [
        s("The Mom Test (summary)", "https://www.momtestbook.com/", "book"),
        s("Reforge — Blog", "https://www.reforge.com/blog", "article"),
      ],
    ),
    st(
      "prioritisation",
      "intermediate",
      "Prioritisation",
      "Impact, effort, risk and the honest version of a roadmap.",
      "Defend a prioritisation decision with evidence.",
      [
        s("Mind the Product", "https://www.mindtheproduct.com/", "article"),
        s("SVPG — Product Discovery", "https://www.svpg.com/articles/", "article"),
      ],
    ),
    st(
      "delivery",
      "intermediate",
      "Delivery with a team",
      "Specs, scoping, trade-offs and unblocking engineers and designers.",
      "Get a feature from idea to shipped without scope creep.",
      [
        s("Lenny's Newsletter — Execution", "https://www.lennysnewsletter.com/", "article"),
        s("Shape Up (Basecamp)", "https://basecamp.com/shapeup", "book", "Free book on scoping and cycles."),
      ],
    ),
    st(
      "metrics",
      "intermediate",
      "Measurement",
      "Metrics that matter, funnels, cohorts and avoiding vanity numbers.",
      "Define the metric that would tell you a launch worked.",
      [
        s("Reforge — Metrics", "https://www.reforge.com/blog", "article"),
        s("Amplitude — Product Analytics", "https://amplitude.com/blog", "article"),
      ],
    ),
    st(
      "strategy",
      "advanced",
      "Strategy and leadership",
      "Positioning, market choice and building a product organisation.",
      "Write a product strategy someone could disagree with.",
      [
        s("Good Strategy Bad Strategy", "https://www.goodreads.com/book/show/11721966-good-strategy-bad-strategy", "book"),
        s("SVPG — Product Strategy", "https://www.svpg.com/articles/", "article"),
      ],
    ),
  ],
})

export const marketing = defineTopic({
  name: "marketing",
  prettyName: "Marketing",
  category: "Design & Business",
  aliases: ["seo", "growth", "advertising", "content marketing", "branding"],
  topicSummary:
    "Marketing is getting the right people to notice, understand and want what you made. It is part psychology, part distribution and a lot of iteration on small experiments.",
  steps: [
    st(
      "foundations",
      "beginner",
      "Marketing foundations",
      "Audiences, positioning, offers and the funnel. Understand who you are talking to before choosing channels.",
      "Write a one page positioning statement.",
      [
        s("Seth Godin's Blog", "https://seths.blog/", "article"),
        s("HubSpot — Marketing", "https://blog.hubspot.com/marketing", "article"),
      ],
    ),
    st(
      "content",
      "beginner",
      "Content and copywriting",
      "Writing that people actually read, and the structure of a landing page that converts.",
      "Write a landing page with a clear promise and proof.",
      [
        s("Copyblogger", "https://copyblogger.com/", "article"),
        s("CXL — Blog", "https://cxl.com/blog/", "article"),
      ],
    ),
    st(
      "seo",
      "intermediate",
      "Search and distribution",
      "How search engines rank pages, and how to earn attention on the channels your audience uses.",
      "Publish a page that ranks for a specific query.",
      [
        s("Moz — Beginner's Guide to SEO", "https://moz.com/beginners-guide-to-seo", "book"),
        s("Ahrefs Blog", "https://ahrefs.com/blog/", "article"),
      ],
    ),
    st(
      "analytics",
      "intermediate",
      "Measurement",
      "Attribution, cohorts, experiments and the metrics that tell you whether marketing worked.",
      "Set up tracking that answers a real business question.",
      [
        s("CXL — Analytics", "https://cxl.com/blog/", "article"),
        s("Google Analytics — Academy", "https://skillshop.withgoogle.com/", "course"),
      ],
    ),
    st(
      "experiments",
      "intermediate",
      "Growth experiments",
      "Small, fast tests across channels rather than one big campaign bet.",
      "Run a growth experiment and report the result honestly.",
      [
        s("Reforge — Growth", "https://www.reforge.com/blog", "article"),
        s("Growth Hackers", "https://growthhackers.com/", "article"),
      ],
    ),
    st(
      "brand",
      "advanced",
      "Brand and long-term marketing",
      "Brand equity, category design and marketing that compounds instead of renting attention.",
      "Build a brand strategy that outlives a single campaign.",
      [
        s("Seth Godin — Blog", "https://seths.blog/", "article"),
        s("HubSpot — Branding", "https://blog.hubspot.com/marketing/branding", "article"),
      ],
    ),
  ],
})

export const entrepreneurship = defineTopic({
  name: "entrepreneurship",
  prettyName: "Entrepreneurship",
  category: "Design & Business",
  aliases: ["startups", "business", "founder", "indie hacking", "saas"],
  topicSummary:
    "Entrepreneurship is finding a problem people will pay to have solved, then building and selling the solution before you run out of time or money.",
  steps: [
    st(
      "ideas",
      "beginner",
      "Finding a real problem",
      "Talk to people, notice friction and avoid building something nobody wants.",
      "Write down ten problems you personally have and rank them.",
      [
        s("Paul Graham — Essays", "https://paulgraham.com/articles.html", "article"),
        s("Y Combinator — Startup School", "https://www.startupschool.org/", "course", "Free and practical."),
      ],
    ),
    st(
      "validation",
      "beginner",
      "Validating",
      "Pre-sales, landing pages and conversations that test demand before writing code.",
      "Get a stranger to pay or pre-commit to your idea.",
      [
        s("The Mom Test", "https://www.momtestbook.com/", "book"),
        s("Indie Hackers", "https://www.indiehackers.com/", "article"),
      ],
    ),
    st(
      "build",
      "intermediate",
      "Building the first version",
      "Ship the smallest thing that solves the problem, and resist building infrastructure.",
      "Launch a usable product in weeks, not months.",
      [
        s("Y Combinator — Library", "https://www.ycombinator.com/library", "video"),
        s("Stripe — Atlas Guides", "https://stripe.com/guides", "docs"),
      ],
    ),
    st(
      "customers",
      "intermediate",
      "Getting customers",
      "Do things that do not scale, then find a channel that does.",
      "Acquire your first ten paying customers.",
      [
        s("Y Combinator — Library", "https://www.ycombinator.com/library", "video"),
        s("Paul Graham — Do Things That Don't Scale", "https://paulgraham.com/ds.html", "article"),
      ],
    ),
    st(
      "money",
      "intermediate",
      "Money and metrics",
      "Pricing, unit economics, runway and whether to raise capital at all.",
      "Build a simple financial model for your business.",
      [
        s("Stripe — Guides", "https://stripe.com/guides", "docs"),
        s("a16z — Startup Resources", "https://a16z.com/", "article"),
      ],
    ),
    st(
      "company",
      "advanced",
      "Building a company",
      "Hiring, culture, delegation and the transition from founder to manager.",
      "Hire your first person and onboard them well.",
      [
        s("Y Combinator — Library", "https://www.ycombinator.com/library", "video"),
        s("Paul Graham — Essays", "https://paulgraham.com/articles.html", "article"),
      ],
    ),
  ],
})

export const personalFinance = defineTopic({
  name: "personal-finance",
  prettyName: "Personal Finance",
  category: "Design & Business",
  aliases: ["finance", "investing", "money", "budgeting", "stocks"],
  topicSummary:
    "Personal finance is a small number of decisions repeated for decades: spend less than you earn, build a buffer, invest boringly and avoid expensive mistakes.",
  steps: [
    st(
      "basics",
      "beginner",
      "Money basics",
      "Budgeting, emergency funds and understanding where your money goes.",
      "Track a month of spending and set a realistic budget.",
      [
        s("Bogleheads Wiki", "https://www.bogleheads.org/wiki/Main_Page", "docs", "Practical, low-nonsense investing wiki."),
        s("Investopedia", "https://www.investopedia.com/", "article"),
      ],
    ),
    st(
      "debt-and-credit",
      "beginner",
      "Debt and credit",
      "Interest rates, credit scores and which debt to pay first.",
      "Order your debts by effective interest rate.",
      [
        s("Investor.gov — Introduction to Investing", "https://www.investor.gov/introduction-investing", "docs"),
        s("Khan Academy — Personal Finance", "https://www.khanacademy.org/college-careers-more/personal-finance", "course"),
      ],
    ),
    st(
      "investing",
      "intermediate",
      "Investing",
      "Index funds, diversification, fees and the cost of trying to beat the market.",
      "Build a simple diversified portfolio and explain the fees.",
      [
        s("Bogleheads — Investment Philosophy", "https://www.bogleheads.org/wiki/Bogleheads%C2%AE_investment_philosophy", "docs"),
        s("Investor.gov", "https://www.investor.gov/introduction-investing", "docs"),
      ],
    ),
    st(
      "tax-and-retirement",
      "intermediate",
      "Tax and retirement",
      "Tax-advantaged accounts, contribution limits and the compounding maths of starting early.",
      "Work out how much you need to save monthly for retirement.",
      [
        s("Bogleheads — Retirement", "https://www.bogleheads.org/wiki/Retirement_planning_start-up", "docs"),
        s("OpenStax — Principles of Finance", "https://openstax.org/details/books/principles-finance", "book"),
      ],
    ),
    st(
      "risk",
      "intermediate",
      "Risk and insurance",
      "Insurance that is worth buying, and the risks you should actually worry about.",
      "Identify which risks you are uninsured for.",
      [
        s("Investopedia — Risk", "https://www.investopedia.com/terms/r/risk.asp", "article"),
        s("Bogleheads — Insurance", "https://www.bogleheads.org/wiki/Insurance", "docs"),
      ],
    ),
    st(
      "advanced",
      "advanced",
      "Advanced financial planning",
      "Tax optimisation, estate planning and the behavioural mistakes that cost the most.",
      "Make a financial plan you could defend to an adviser.",
      [
        s("Bogleheads — Advanced Topics", "https://www.bogleheads.org/wiki/Category:Advanced_Topics", "docs"),
        s("OpenStax — Principles of Finance", "https://openstax.org/details/books/principles-finance", "book"),
      ],
    ),
  ],
})

export const economics = defineTopic({
  name: "economics",
  prettyName: "Economics",
  category: "Design & Business",
  aliases: ["microeconomics", "macroeconomics", "markets", "economy"],
  topicSummary:
    "Economics studies how people and institutions allocate scarce resources. It gives you a set of models for thinking about incentives, trade-offs and unintended consequences.",
  steps: [
    st(
      "thinking-like-economist",
      "beginner",
      "Thinking like an economist",
      "Opportunity cost, marginal thinking, incentives and the idea that models are tools, not truth.",
      "Explain a daily decision in terms of incentives and opportunity cost.",
      [
        s("The Economy (CORE Econ)", "https://www.core-econ.org/the-economy/", "book", "Free, modern introduction to economics."),
        s("Marginal Revolution University", "https://mru.org/", "course", "Free videos by two working economists."),
      ],
    ),
    st(
      "microeconomics",
      "beginner",
      "Microeconomics",
      "Supply, demand, elasticity and market structures.",
      "Predict the effect of a price change on quantity demanded.",
      [
        s("OpenStax — Principles of Economics", "https://openstax.org/details/books/principles-economics-3e", "book"),
        s("Khan Academy — Economics", "https://www.khanacademy.org/economics-finance-domain", "course"),
      ],
    ),
    st(
      "markets-and-policy",
      "intermediate",
      "Markets and policy",
      "Externalities, public goods, taxes and market failures — when markets work and when they do not.",
      "Argue for or against a specific policy intervention.",
      [
        s("The Economy (CORE Econ)", "https://www.core-econ.org/the-economy/", "book"),
        s("Marginal Revolution University — Micro", "https://mru.org/", "course"),
      ],
    ),
    st(
      "macro",
      "intermediate",
      "Macroeconomics",
      "Growth, inflation, unemployment and the central banking tools that respond to them.",
      "Read a central bank statement and understand the decisions.",
      [
        s("OpenStax — Principles of Economics", "https://openstax.org/details/books/principles-economics-3e", "book"),
        s("Khan Academy — Macroeconomics", "https://www.khanacademy.org/economics-finance-domain", "course"),
      ],
    ),
    st(
      "data",
      "intermediate",
      "Economics with data",
      "Where data comes from, causal identification and the difference between correlation and cause.",
      "Read an applied economics paper and follow its identification strategy.",
      [
        s("Our World in Data", "https://ourworldindata.org/", "docs"),
        s("Marginal Revolution University — Data", "https://mru.org/", "course"),
      ],
    ),
    st(
      "history-of-thought",
      "advanced",
      "History of economic thought",
      "From Smith to Keynes to behavioural economics — the arguments behind today's models.",
      "Place a present-day debate in its intellectual history.",
      [
        s("Stanford Encyclopedia of Philosophy — Economics", "https://plato.stanford.edu/entries/economics/", "article"),
        s("The Economist", "https://www.economist.com/", "article"),
      ],
    ),
  ],
})

export const writing = defineTopic({
  name: "writing",
  prettyName: "Writing",
  category: "Design & Business",
  aliases: ["essays", "copywriting", "grammar", "nonfiction", "style"],
  topicSummary:
    "Writing is thinking made visible. Clear writing comes from editing: write a rough draft quickly, then cut everything that does not carry meaning.",
  steps: [
    st(
      "clarity",
      "beginner",
      "Clarity",
      "Sentences that can only be understood one way, and paragraphs that each do one job.",
      "Rewrite a paragraph until it loses a third of its words without losing meaning.",
      [
        s("Plain Language Guidelines", "https://www.plainlanguage.gov/guidelines/", "docs"),
        s("Purdue OWL", "https://owl.purdue.edu/owl/purdue_owl.html", "docs"),
      ],
    ),
    st(
      "grammar",
      "beginner",
      "Grammar and style",
      "The rules that matter and the ones you can break on purpose.",
      "Edit your own work for correctness without gutting your voice.",
      [
        s("The Elements of Style", "https://www.gutenberg.org/ebooks/37134", "book", "Classic, short and opinionated."),
        s("Grammar Girl", "https://www.quickanddirtytips.com/grammar-girl", "article"),
      ],
    ),
    st(
      "structure",
      "intermediate",
      "Structure",
      "Outlines, arguments and the shape of an essay that holds attention.",
      "Outline a piece before writing it and keep the draft on track.",
      [
        s("Purdue OWL — Writing Process", "https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html", "docs"),
        s("Writing Excuses", "https://writingexcuses.com/", "video", "Short weekly craft podcast."),
      ],
    ),
    st(
      "audience",
      "intermediate",
      "Writing for an audience",
      "Tone, examples, jargon and meeting a reader where they are.",
      "Adapt the same idea for two very different audiences.",
      [
        s("Copyblogger", "https://copyblogger.com/", "article"),
        s("Plain Language Guidelines", "https://www.plainlanguage.gov/guidelines/", "docs"),
      ],
    ),
    st(
      "editing",
      "intermediate",
      "Editing",
      "Cutting, reordering and reading out loud. The draft is not the writing; the edit is.",
      "Take a first draft to a publishable second draft.",
      [
        s("Purdue OWL — Editing", "https://owl.purdue.edu/owl/general_writing/the_writing_process/index.html", "docs"),
        s("Hemingway Editor", "https://hemingwayapp.com/", "interactive"),
      ],
    ),
    st(
      "long-form",
      "advanced",
      "Long-form work",
      "Research, structure and revision for books, reports and long essays.",
      "Plan and finish a piece longer than ten thousand words.",
      [
        s("Writing Excuses", "https://writingexcuses.com/", "video"),
        s("The Chicago Manual of Style", "https://www.chicagomanualofstyle.org/home.html", "docs"),
      ],
    ),
  ],
})
