import { defineTopic, p, s, st } from "../helpers"

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
        s(
          "User-centered design",
          "https://en.wikipedia.org/wiki/User-centered_design",
          "article",
          "Background reading on User-centered design for this step.",
        ),
        s(
          "Mobbin — interface patterns",
          "https://mobbin.com/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "research",
      "beginner",
      "Understanding users",
      "Interviews, jobs to be done and usability testing on a budget.",
      "Run five user interviews and extract a real insight.",
      [
        s("Usability", "https://en.wikipedia.org/wiki/Usability", "article"),
        s("Interaction Design Foundation", "https://www.interaction-design.org/literature", "course"),
        s(
          "Persona (user experience)",
          "https://en.wikipedia.org/wiki/Persona_(user_experience)",
          "article",
          "Background reading on Persona (user experience) for this step.",
        ),
        s(
          "UX Collective",
          "https://uxdesign.cc/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Interaction design",
          "https://en.wikipedia.org/wiki/Interaction_design",
          "article",
          "Background reading on Interaction design for this step.",
        ),
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
        s("Color theory", "https://en.wikipedia.org/wiki/Color_theory", "article"),
        s(
          "Visual hierarchy",
          "https://en.wikipedia.org/wiki/Visual_hierarchy",
          "article",
          "Background reading on Visual hierarchy for this step.",
        ),
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
        s(
          "Figma",
          "https://en.wikipedia.org/wiki/Figma",
          "article",
          "Background reading on Figma for this step.",
        ),
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
        s(
          "User experience design",
          "https://en.wikipedia.org/wiki/User_experience_design",
          "article",
          "Background reading on User experience design for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Redesign one screen", "Pick an app you use, redesign a single screen and write down every reason."),
      p("Five person usability test", "Test your redesign with five people and record what breaks."),
      p("Wireframe a flow", "Ten low fidelity screens for one flow before any styling."),
    ],
    intermediate: [
      p("Clickable prototype", "Prototype a three screen flow including empty, loading and error states."),
      p("Small design system", "Build tokens and five components with the states they need."),
      p("Fix a painful form", "Take a bad form and cut its completion time in half."),
    ],
    advanced: [
      p("Published case study", "Take a product problem end to end and publish the process and the result."),
      p("Accessibility audit", "Audit a real product against WCAG and fix the worst issues."),
      p("Run a design critique", "Structure and lead a critique of someone else's work."),
    ],
  },
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
        s(
          "Graphic design",
          "https://en.wikipedia.org/wiki/Graphic_design",
          "article",
          "Background reading on Graphic design for this step.",
        ),
        s(
          "Dribbble",
          "https://dribbble.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Typography",
          "https://en.wikipedia.org/wiki/Typography",
          "article",
          "Background reading on Typography for this step.",
        ),
        s(
          "Fonts In Use",
          "https://fontsinuse.com/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Color theory",
          "https://en.wikipedia.org/wiki/Color_theory",
          "article",
          "Background reading on Color theory for this step.",
        ),
        s(
          "Typewolf",
          "https://www.typewolf.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Adobe Illustrator",
          "https://en.wikipedia.org/wiki/Adobe_Illustrator",
          "article",
          "Background reading on Adobe Illustrator for this step.",
        ),
        s(
          "Principles — design principles",
          "https://principles.design/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Brand management",
          "https://en.wikipedia.org/wiki/Brand_management",
          "article",
          "Background reading on Brand management for this step.",
        ),
        s(
          "Coolors — palette tool",
          "https://coolors.co/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Design studio",
          "https://en.wikipedia.org/wiki/Design_studio",
          "article",
          "Background reading on Design studio for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Type-only poster", "One poster using only type, three weights and a strict grid."),
      p("Layout study", "Redesign a magazine spread on a twelve column grid."),
      p("Palette exercise", "Six different palettes applied to the same layout."),
    ],
    intermediate: [
      p("Brand kit", "Logo, palette, type and rules for a fictional business."),
      p("Poster series", "Three posters that share a system but not a layout."),
      p("Editorial spread", "A four page spread with a strict grid and real copy."),
    ],
    advanced: [
      p("Real client brief", "Take a brief from a real person through revisions to delivery."),
      p("Portfolio book", "Edit your best work into a coherent printed portfolio."),
      p("Album artwork", "Cover plus a rollout across three formats."),
    ],
  },
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
        s("Product manager", "https://en.wikipedia.org/wiki/Product_manager", "article"),
        s(
          "Product Talk",
          "https://www.producttalk.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Design thinking",
          "https://en.wikipedia.org/wiki/Design_thinking",
          "article",
          "Background reading on Design thinking for this step.",
        ),
        s(
          "Nielsen Norman Group — UX research",
          "https://www.nngroup.com/articles/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s("Product management", "https://en.wikipedia.org/wiki/Product_management", "article"),
        s(
          "Kano model",
          "https://en.wikipedia.org/wiki/Kano_model",
          "article",
          "Background reading on Kano model for this step.",
        ),
        s(
          "ProductPlan — glossary",
          "https://www.productplan.com/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "delivery",
      "intermediate",
      "Delivery with a team",
      "Specs, scoping, trade-offs and unblocking engineers and designers.",
      "Get a feature from idea to shipped without scope creep.",
      [
        s("Lenny's Newsletter", "https://www.lennysnewsletter.com/", "article"),
        s("Shape Up (Basecamp)", "https://basecamp.com/shapeup", "book", "Free book on scoping and cycles."),
        s(
          "Agile software development",
          "https://en.wikipedia.org/wiki/Agile_software_development",
          "article",
          "Background reading on Agile software development for this step.",
        ),
        s(
          "Atlassian — Agile coach",
          "https://www.atlassian.com/agile",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "metrics",
      "intermediate",
      "Measurement",
      "Metrics that matter, funnels, cohorts and avoiding vanity numbers.",
      "Define the metric that would tell you a launch worked.",
      [
        s("Performance indicator", "https://en.wikipedia.org/wiki/Performance_indicator", "article"),
        s("Amplitude — Blog", "https://amplitude.com/blog", "article"),
        s(
          "Net Promoter",
          "https://en.wikipedia.org/wiki/Net_Promoter",
          "article",
          "Background reading on Net Promoter for this step.",
        ),
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
        s("Product strategy", "https://en.wikipedia.org/wiki/Product_strategy", "article"),
        s(
          "Business strategy",
          "https://en.wikipedia.org/wiki/Business_strategy",
          "article",
          "Background reading on Business strategy for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Five discovery interviews", "Interview five users about one problem and write the patterns."),
      p("One page spec", "Problem, users, success metric, non-goals and risks on a single page."),
      p("Support ticket analysis", "Read fifty tickets and cluster them into themes."),
    ],
    intermediate: [
      p("Prioritised backlog", "Turn a messy backlog into a ranked roadmap with a written rationale."),
      p("Ship a small feature", "Take a feature from idea to release and measure what changed."),
      p("Facilitate a retro", "Run it and land one process change."),
    ],
    advanced: [
      p("Strategy memo", "Write the strategy for a product: market, wedge, moat and the next three bets."),
      p("Pricing change", "Design and run a pricing change with the metric and the rollback plan."),
      p("Org design", "Write the team structure that would ship your strategy."),
    ],
  },
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
        s(
          "Marketing",
          "https://en.wikipedia.org/wiki/Marketing",
          "article",
          "Background reading on Marketing for this step.",
        ),
        s(
          "HubSpot Academy",
          "https://academy.hubspot.com/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Copywriting",
          "https://en.wikipedia.org/wiki/Copywriting",
          "article",
          "Background reading on Copywriting for this step.",
        ),
        s(
          "Marketing Examples",
          "https://marketingexamples.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Search engine optimization",
          "https://en.wikipedia.org/wiki/Search_engine_optimization",
          "article",
          "Background reading on Search engine optimization for this step.",
        ),
        s(
          "Google — Analytics Academy",
          "https://analytics.google.com/analytics/academy/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "analytics",
      "intermediate",
      "Measurement",
      "Attribution, cohorts, experiments and the metrics that tell you whether marketing worked.",
      "Set up tracking that answers a real business question.",
      [
        s("Web analytics", "https://en.wikipedia.org/wiki/Web_analytics", "article"),
        s("Google Skillshop — Analytics courses", "https://skillshop.withgoogle.com/", "course"),
        s(
          "Conversion rate optimization",
          "https://en.wikipedia.org/wiki/Conversion_rate_optimization",
          "article",
          "Background reading on Conversion rate optimization for this step.",
        ),
        s(
          "Mailchimp — resources",
          "https://mailchimp.com/resources/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Growth hacking",
          "https://en.wikipedia.org/wiki/Growth_hacking",
          "article",
          "Background reading on Growth hacking for this step.",
        ),
      ],
    ),
    st(
      "brand",
      "advanced",
      "Brand and long-term marketing",
      "Brand equity, category design and marketing that compounds instead of renting attention.",
      "Build a brand strategy that outlives a single campaign.",
      [
        s("Brand", "https://en.wikipedia.org/wiki/Brand", "article"),
        s("HubSpot — Branding", "https://blog.hubspot.com/marketing/branding", "article"),
        s(
          "Brand equity",
          "https://en.wikipedia.org/wiki/Brand_equity",
          "article",
          "Background reading on Brand equity for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Positioning statement", "Write positioning and the landing page headline for a real product."),
      p("Ten headlines", "Rewrite one product's hero copy ten ways and pick a winner with reasons."),
      p("Customer interview", "Five interviews, then a messaging rewrite built on them."),
    ],
    intermediate: [
      p("One growth experiment", "Full experiment plan: hypothesis, metric, sample and decision rule."),
      p("Rank for a long tail query", "Write and publish a page for a real query and track it for a month."),
      p("Onboarding emails", "Write a five email sequence and measure opens."),
    ],
    advanced: [
      p("Brand system", "Build the brand guide and the twelve month plan behind it."),
      p("Attribution model", "Reconstruct how you would measure marketing spend without perfect tracking."),
      p("Crisis comms plan", "Write the response plan for a public incident."),
    ],
  },
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
        s(
          "Market research",
          "https://en.wikipedia.org/wiki/Market_research",
          "article",
          "Background reading on Market research for this step.",
        ),
        s(
          "First Round Review",
          "https://review.firstround.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "A/B testing",
          "https://en.wikipedia.org/wiki/A/B_testing",
          "article",
          "Background reading on A/B testing for this step.",
        ),
        s(
          "Sequoia — company writing",
          "https://www.sequoiacap.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s("Minimum viable product", "https://en.wikipedia.org/wiki/Minimum_viable_product", "article"),
        s(
          "Product development",
          "https://en.wikipedia.org/wiki/Product_development",
          "article",
          "Background reading on Product development for this step.",
        ),
        s(
          "Harvard Business Review",
          "https://hbr.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "customers",
      "intermediate",
      "Getting customers",
      "Do things that do not scale, then find a channel that does.",
      "Acquire your first ten paying customers.",
      [
        s("Customer development", "https://en.wikipedia.org/wiki/Customer_development", "article"),
        s("Paul Graham — Do Things That Don't Scale", "https://paulgraham.com/ds.html", "article"),
        s(
          "Customer relationship management",
          "https://en.wikipedia.org/wiki/Customer_relationship_management",
          "article",
          "Background reading on Customer relationship management for this step.",
        ),
        s(
          "SBA — business guide",
          "https://www.sba.gov/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s("Andreessen Horowitz — Essays", "https://a16z.com/", "article"),
        s(
          "Business model",
          "https://en.wikipedia.org/wiki/Business_model",
          "article",
          "Background reading on Business model for this step.",
        ),
      ],
    ),
    st(
      "company",
      "advanced",
      "Building a company",
      "Hiring, culture, delegation and the transition from founder to manager.",
      "Hire your first person and onboard them well.",
      [
        s("Venture capital", "https://en.wikipedia.org/wiki/Venture_capital", "article"),
        s("Startup company", "https://en.wikipedia.org/wiki/Startup_company", "article"),
        s(
          "Organizational structure",
          "https://en.wikipedia.org/wiki/Organizational_structure",
          "article",
          "Background reading on Organizational structure for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Fifteen problem interviews", "Talk to fifteen potential users and write down what repeats."),
      p("Demand test", "A one page offer and twenty cold emails to see if anyone replies."),
      p("Competitor teardown", "Use five competitors as a customer and write down the gaps."),
    ],
    intermediate: [
      p("Ship an MVP", "Launch the smallest version that solves the problem and get three paying users."),
      p("Unit economics", "Model price, costs and churn and find the number that has to be true."),
      p("Sell it", "Ten cold calls and one written proposal."),
    ],
    advanced: [
      p("Twelve month operating plan", "Hiring, spend and milestones tied to a metric you will report on."),
      p("Raise or bootstrap memo", "Write the honest case for both paths with the risk of each."),
      p("First hire", "Write the role, the interview plan and the first thirty days."),
    ],
  },
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
        s(
          "Compound interest",
          "https://en.wikipedia.org/wiki/Compound_interest",
          "article",
          "Background reading on Compound interest for this step.",
        ),
        s(
          "Consumer Financial Protection Bureau",
          "https://www.consumerfinance.gov/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "debt-and-credit",
      "beginner",
      "Debt and credit",
      "Interest rates, credit scores and which debt to pay first.",
      "Order your debts by effective interest rate.",
      [
        s("Credit card debt", "https://en.wikipedia.org/wiki/Credit_card_debt", "article"),
        s("Khan Academy — Personal Finance", "https://www.khanacademy.org/college-careers-more/personal-finance", "course"),
        s(
          "Interest rate",
          "https://en.wikipedia.org/wiki/Interest_rate",
          "article",
          "Background reading on Interest rate for this step.",
        ),
        s(
          "Mr. Money Mustache",
          "https://www.mrmoneymustache.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s("Investor.gov — Introduction to Investing", "https://www.investor.gov/introduction-investing", "docs"),
        s(
          "Diversification (finance)",
          "https://en.wikipedia.org/wiki/Diversification_(finance)",
          "article",
          "Background reading on Diversification (finance) for this step.",
        ),
        s(
          "Morningstar — fund research",
          "https://www.morningstar.com/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Pension",
          "https://en.wikipedia.org/wiki/Pension",
          "article",
          "Background reading on Pension for this step.",
        ),
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
        s(
          "Insurance",
          "https://en.wikipedia.org/wiki/Insurance",
          "article",
          "Background reading on Insurance for this step.",
        ),
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
        s("Financial plan", "https://en.wikipedia.org/wiki/Financial_plan", "article"),
        s(
          "Asset allocation",
          "https://en.wikipedia.org/wiki/Asset_allocation",
          "article",
          "Background reading on Asset allocation for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Budget and net worth", "Track one month of spending and compute your net worth."),
      p("Debt plan", "List every debt, compare avalanche with snowball and pick one."),
      p("Subscription audit", "Find every recurring charge and compute the yearly cost."),
    ],
    intermediate: [
      p("Simple portfolio", "Build a boring index portfolio and write down the reasoning behind the split."),
      p("Tax checklist", "Reconstruct last year's taxes and list what to change this year."),
      p("Emergency fund plan", "Size it, choose where it lives and how fast to build it."),
    ],
    advanced: [
      p("Ten year plan", "Write a plan with three scenarios, insurance needs and a withdrawal rule."),
      p("Fee audit", "Audit every fee you pay and quantify what each one costs over 20 years."),
      p("Withdrawal model", "Simulate retirement withdrawals across three scenarios."),
    ],
  },
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
        s(
          "Opportunity cost",
          "https://en.wikipedia.org/wiki/Opportunity_cost",
          "article",
          "Background reading on Opportunity cost for this step.",
        ),
        s(
          "Investopedia",
          "https://www.investopedia.com/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Elasticity (economics)",
          "https://en.wikipedia.org/wiki/Elasticity_(economics)",
          "article",
          "Background reading on Elasticity (economics) for this step.",
        ),
        s(
          "FRED — economic data",
          "https://fred.stlouisfed.org/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "markets-and-policy",
      "intermediate",
      "Markets and policy",
      "Externalities, public goods, taxes and market failures — when markets work and when they do not.",
      "Argue for or against a specific policy intervention.",
      [
        s("Supply and demand", "https://en.wikipedia.org/wiki/Supply_and_demand", "article"),
        s("Microeconomics", "https://en.wikipedia.org/wiki/Microeconomics", "article"),
        s(
          "Externality",
          "https://en.wikipedia.org/wiki/Externality",
          "article",
          "Background reading on Externality for this step.",
        ),
        s(
          "NBER — working papers",
          "https://www.nber.org/",
          "paper",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "macro",
      "intermediate",
      "Macroeconomics",
      "Growth, inflation, unemployment and the central banking tools that respond to them.",
      "Read a central bank statement and understand the decisions.",
      [
        s("Macroeconomics", "https://en.wikipedia.org/wiki/Macroeconomics", "article"),
        s("Business cycle", "https://en.wikipedia.org/wiki/Business_cycle", "article"),
        s(
          "Gross domestic product",
          "https://en.wikipedia.org/wiki/Gross_domestic_product",
          "article",
          "Background reading on Gross domestic product for this step.",
        ),
        s(
          "IMF — Data",
          "https://www.imf.org/en/Data",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s("Econometrics", "https://en.wikipedia.org/wiki/Econometrics", "article"),
        s(
          "Time series",
          "https://en.wikipedia.org/wiki/Time_series",
          "article",
          "Background reading on Time series for this step.",
        ),
        s(
          "Economics Help",
          "https://www.economicshelp.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "History of economic thought",
          "https://en.wikipedia.org/wiki/History_of_economic_thought",
          "article",
          "Background reading on History of economic thought for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Opportunity cost diary", "Log a week of decisions with the alternative you gave up."),
      p("Explain one price", "Explain the price of a product you know well with supply and demand."),
      p("Personal inflation basket", "Build your own basket and compute your inflation rate."),
    ],
    intermediate: [
      p("Data brief", "Download one series from the World Bank or FRED and explain the shape of it."),
      p("Policy memo", "Argue for one policy change with evidence and answer the counter-argument."),
      p("Elasticity estimate", "Estimate price elasticity from public data."),
    ],
    advanced: [
      p("Where the schools disagree", "Summarise Smith, Marx and Keynes and where they actually differ."),
      p("Market design exercise", "Design an auction or matching market and simulate its outcomes."),
      p("Replicate a regression", "Reproduce the main regression from a published paper."),
    ],
  },
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
        s(
          "Plain language",
          "https://en.wikipedia.org/wiki/Plain_language",
          "article",
          "Background reading on Plain language for this step.",
        ),
        s(
          "The Punctuation Guide",
          "https://www.thepunctuationguide.com/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s(
          "Style guide",
          "https://en.wikipedia.org/wiki/Style_guide",
          "article",
          "Background reading on Style guide for this step.",
        ),
        s(
          "Merriam-Webster",
          "https://www.merriam-webster.com/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s("Narrative structure", "https://en.wikipedia.org/wiki/Narrative_structure", "article"),
        s(
          "Paragraph",
          "https://en.wikipedia.org/wiki/Paragraph",
          "article",
          "Background reading on Paragraph for this step.",
        ),
        s(
          "Daily Writing Tips",
          "https://www.dailywritingtips.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
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
        s("Technical writing", "https://en.wikipedia.org/wiki/Technical_writing", "article"),
        s(
          "Audience",
          "https://en.wikipedia.org/wiki/Audience",
          "article",
          "Background reading on Audience for this step.",
        ),
      ],
    ),
    st(
      "editing",
      "intermediate",
      "Editing",
      "Cutting, reordering and reading out loud. The draft is not the writing; the edit is.",
      "Take a first draft to a publishable second draft.",
      [
        s("Copy editing", "https://en.wikipedia.org/wiki/Copy_editing", "article"),
        s("Hemingway Editor", "https://hemingwayapp.com/", "interactive"),
        s(
          "Proofreading",
          "https://en.wikipedia.org/wiki/Proofreading",
          "article",
          "Background reading on Proofreading for this step.",
        ),
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
        s(
          "Narrative",
          "https://en.wikipedia.org/wiki/Narrative",
          "article",
          "Background reading on Narrative for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Rewrite for clarity", "Take a confusing paragraph and cut it in half without losing meaning."),
      p("Style drills", "Rewrite the same ten sentences in three different voices."),
      p("Copywork", "Copy a writer you admire by hand and note what you notice."),
    ],
    intermediate: [
      p("Explainer essay", "800 words that teach a beginner something you already know."),
      p("Edit someone else", "Edit another person's draft and annotate the reasoning."),
      p("Newsletter run", "Write and publish four issues on one theme."),
    ],
    advanced: [
      p("Long-form piece", "A 5000 word researched piece with sources and a real point of view."),
      p("Write every day for a month", "Thirty short pieces and an honest review of what improved."),
      p("Structural edit", "Cut a piece by thirty percent without losing the argument."),
    ],
  },
})
