import { defineTopic, s, st } from "../helpers"

// Mathematics + the branches people most often learn on their own.

export const mathematics = defineTopic({
  name: "mathematics",
  prettyName: "Mathematics",
  category: "Math",
  aliases: ["maths", "math", "algebra", "proofs", "arithmetic"],
  topicSummary:
    "Mathematics is a language for describing structure and change. The self-taught path is not a list of topics but a habit: do problems, write proofs, and keep revisiting the foundations.",
  steps: [
    st(
      "foundations",
      "beginner",
      "Foundations",
      "Arithmetic, algebra and functions, rebuilt properly. Shaky foundations make everything later feel like magic.",
      "Manipulate expressions and functions without hesitating.",
      [
        s("Khan Academy — Math", "https://www.khanacademy.org/math", "course", "Free, structured and exercise driven."),
        s("Paul's Online Math Notes", "https://tutorial.math.lamar.edu/", "docs"),
      ],
    ),
    st(
      "precalculus",
      "beginner",
      "Precalculus and trigonometry",
      "Functions, graphs, exponentials and trigonometry — the toolkit calculus assumes you have.",
      "Sketch and reason about the behaviour of common functions.",
      [
        s("Paul's Online Math Notes — Algebra & Trig", "https://tutorial.math.lamar.edu/", "docs"),
        s("Mathematics for Computer Science (MIT)", "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/", "course"),
      ],
    ),
    st(
      "proofs",
      "intermediate",
      "Proof and mathematical thinking",
      "Logic, sets, induction and contradiction. This is the difference between calculating and doing mathematics.",
      "Write a correct proof by induction and spot a broken one.",
      [
        s("Book of Proof", "https://www.people.vcu.edu/~rhammack/BookOfProof/", "book", "Free, gentle introduction to proofs."),
        s("Mathematics for Computer Science (MIT)", "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/", "course"),
      ],
    ),
    st(
      "core-branches",
      "intermediate",
      "Pick a core branch",
      "Calculus, linear algebra and probability are the three branches that unlock most technical fields. Choose one and go deep.",
      "Use one branch of mathematics fluently in another field.",
      [
        s("MIT OpenCourseWare — Mathematics", "https://ocw.mit.edu/search/?d=Mathematics", "course"),
        s("3Blue1Brown", "https://www.3blue1brown.com/", "video", "Visual intuition for hard ideas."),
      ],
    ),
    st(
      "problem-solving",
      "intermediate",
      "Problem solving",
      "Mathematics is learned by solving problems, not by reading. Structured problem sets and competition style puzzles build real fluency.",
      "Stick with a hard problem for an hour instead of looking up the answer.",
      [
        s("Art of Problem Solving", "https://artofproblemsolving.com/", "practice"),
        s("Brilliant — Math", "https://brilliant.org/courses/", "interactive"),
      ],
    ),
    st(
      "higher-math",
      "advanced",
      "Higher mathematics",
      "Real analysis, abstract algebra, topology and beyond. This is where mathematics becomes its own way of thinking.",
      "Read a graduate-level text with a pencil and follow the argument.",
      [
        s("MIT OpenCourseWare — Mathematics", "https://ocw.mit.edu/search/?d=Mathematics", "course"),
        s("The Stanford Encyclopedia of Philosophy — Mathematics", "https://plato.stanford.edu/", "article"),
      ],
    ),
  ],
})

export const calculus = defineTopic({
  name: "calculus",
  prettyName: "Calculus",
  category: "Math",
  aliases: ["derivatives", "integrals", "limits", "analysis"],
  topicSummary:
    "Calculus studies change. Derivatives describe how fast something changes, integrals add up infinitely many small pieces, and the two turn out to be inverse operations.",
  steps: [
    st(
      "intuition",
      "beginner",
      "Build intuition",
      "Watch what calculus is about geometrically before touching a formula. The visual picture makes the algebra feel inevitable.",
      "Explain what a derivative and an integral mean in your own words.",
      [
        s("3Blue1Brown — Essence of Calculus", "https://www.3blue1brown.com/topics/calculus", "video"),
        s("Khan Academy — Calculus", "https://www.khanacademy.org/math/calculus-1", "course"),
      ],
    ),
    st(
      "limits",
      "beginner",
      "Limits and continuity",
      "The formal idea underneath everything: what a function approaches, not what it equals.",
      "Compute limits and identify where a function breaks.",
      [
        s("Paul's Online Math Notes — Limits", "https://tutorial.math.lamar.edu/Classes/CalcI/LimitsIntro.aspx", "docs"),
        s("MIT 18.01 — Single Variable Calculus", "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/", "course"),
      ],
    ),
    st(
      "derivatives",
      "beginner",
      "Derivatives",
      "Rules of differentiation, the chain rule and optimisation. Differentiate until it is mechanical.",
      "Differentiate any standard function and find its extrema.",
      [
        s("Paul's Online Math Notes — Derivatives", "https://tutorial.math.lamar.edu/Classes/CalcI/DerivativeIntro.aspx", "docs"),
        s("MIT 18.01 — Lecture notes", "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/", "course"),
      ],
    ),
    st(
      "integrals",
      "intermediate",
      "Integration",
      "Riemann sums, the fundamental theorem, substitution and integration by parts.",
      "Set up and evaluate an integral for an area or accumulated quantity.",
      [
        s("Paul's Online Math Notes — Integrals", "https://tutorial.math.lamar.edu/Classes/CalcI/IntegralsIntro.aspx", "docs"),
        s("Khan Academy — Integrals", "https://www.khanacademy.org/math/integral-calculus", "course"),
      ],
    ),
    st(
      "applications",
      "intermediate",
      "Applications",
      "Physics, optimisation, differential equations and series — where calculus stops being an exercise.",
      "Model a real problem with a derivative or integral.",
      [
        s("MIT 18.01 — Applications", "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/", "course"),
        s("OpenStax — Calculus Volume 1", "https://openstax.org/details/books/calculus-volume-1", "book"),
      ],
    ),
    st(
      "multivariable",
      "advanced",
      "Multivariable calculus",
      "Partial derivatives, gradients, multiple integrals and vector fields — the calculus of machine learning and physics.",
      "Take a gradient and explain what it points towards.",
      [
        s("MIT 18.02 — Multivariable Calculus", "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/", "course"),
        s("OpenStax — Calculus Volume 3", "https://openstax.org/details/books/calculus-volume-3", "book"),
      ],
    ),
  ],
})

export const linearAlgebra = defineTopic({
  name: "linear-algebra",
  prettyName: "Linear Algebra",
  category: "Math",
  aliases: ["matrices", "vectors", "eigenvalues", "linear"],
  topicSummary:
    "Linear algebra is the mathematics of vectors and the transformations between them. It is the language of graphics, machine learning, quantum mechanics and optimisation.",
  steps: [
    st(
      "vectors",
      "beginner",
      "Vectors and spaces",
      "Vectors as arrows and as lists of numbers, addition, scaling and spans.",
      "Reason geometrically about combinations of vectors.",
      [
        s("3Blue1Brown — Essence of Linear Algebra", "https://www.3blue1brown.com/topics/linear-algebra", "video", "The best visual introduction that exists."),
        s("Immersive Linear Algebra", "https://immersivemath.com/ila/index.html", "interactive"),
      ],
    ),
    st(
      "matrices",
      "beginner",
      "Matrices as transformations",
      "Matrix multiplication is composition of transformations. Once that clicks, the algebra is bookkeeping.",
      "See a matrix as a function, not a grid of numbers.",
      [
        s("MIT 18.06 — Linear Algebra", "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", "course", "Gilbert Strang's classic lectures."),
        s("Interactive Linear Algebra (Georgia Tech)", "https://textbooks.math.gatech.edu/ila/", "book"),
      ],
    ),
    st(
      "systems",
      "intermediate",
      "Solving systems",
      "Gaussian elimination, inverses and rank — the mechanics behind most numerical software.",
      "Solve a linear system by hand and know when it has no solution.",
      [
        s("Interactive Linear Algebra — Systems", "https://textbooks.math.gatech.edu/ila/", "book"),
        s("MIT 18.06 — Lectures", "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", "video"),
      ],
    ),
    st(
      "eigen",
      "intermediate",
      "Eigenvalues and eigenvectors",
      "Directions a transformation only stretches. The idea behind PCA, stability analysis and search rankings.",
      "Compute eigenvalues for a small matrix and interpret them.",
      [
        s("3Blue1Brown — Eigenvectors", "https://www.3blue1brown.com/topics/linear-algebra", "video"),
        s("MIT 18.06 — Eigenvalues", "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", "course"),
      ],
    ),
    st(
      "applications",
      "intermediate",
      "Applied linear algebra",
      "Least squares, projections, singular value decomposition and numerical stability.",
      "Use an SVD or least squares fit in code and explain the result.",
      [
        s("Mathematics for Machine Learning", "https://mml-book.github.io/", "book"),
        s("Linear Algebra (Strang, MIT)", "https://math.mit.edu/~gs/linearalgebra/", "book"),
      ],
    ),
    st(
      "abstract",
      "advanced",
      "Abstract linear algebra",
      "Fields, general vector spaces, dual spaces and spectral theory — linear algebra without coordinates.",
      "Prove a statement about vector spaces from the axioms.",
      [
        s("MIT 18.06 — Linear Algebra", "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", "course"),
        s("Book of Proof", "https://www.people.vcu.edu/~rhammack/BookOfProof/", "book"),
      ],
    ),
  ],
})

export const probability = defineTopic({
  name: "probability",
  prettyName: "Probability",
  category: "Math",
  aliases: ["chance", "random variables", "bayes", "stochastic"],
  topicSummary:
    "Probability is reasoning under uncertainty. Counting, random variables and conditional probability are the core, and Bayes' theorem is the idea that reshapes how you think.",
  steps: [
    st(
      "intuition",
      "beginner",
      "Probability intuition",
      "Sample spaces, events and the three axioms. Start with dice and coins and build sentences, not symbols.",
      "Compute the probability of simple combined events.",
      [
        s("Seeing Theory", "https://seeing-theory.brown.edu/", "interactive", "Beautiful visual explanations."),
        s("Khan Academy — Probability", "https://www.khanacademy.org/math/statistics-probability", "course"),
      ],
    ),
    st(
      "counting",
      "beginner",
      "Counting and combinatorics",
      "Permutations, combinations and inclusion–exclusion. Most probability mistakes are counting mistakes.",
      "Count outcomes correctly in a non-trivial problem.",
      [
        s("Introduction to Probability (Blitzstein)", "https://projects.iq.harvard.edu/stat110", "course", "Harvard Stat 110, free lectures."),
        s("Probability Course", "https://www.probabilitycourse.com/", "book"),
      ],
    ),
    st(
      "random-variables",
      "intermediate",
      "Random variables",
      "Distributions, expectation and variance. Learn the handful of distributions that describe real data.",
      "Choose an appropriate distribution for a real situation.",
      [
        s("Harvard Stat 110 — Lectures", "https://projects.iq.harvard.edu/stat110", "video"),
        s("MIT 6.041 — Probabilistic Systems Analysis", "https://ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/", "course"),
      ],
    ),
    st(
      "conditional",
      "intermediate",
      "Conditional probability and Bayes",
      "Updating beliefs with evidence. This is the most useful single idea in probability.",
      "Apply Bayes' theorem to a real diagnostic or filtering problem.",
      [
        s("Seeing Theory — Conditional Probability", "https://seeing-theory.brown.edu/", "interactive"),
        s("Probability Course — Conditional Probability", "https://www.probabilitycourse.com/", "book"),
      ],
    ),
    st(
      "limit-theorems",
      "advanced",
      "Limit theorems",
      "The law of large numbers and the central limit theorem explain why statistics works at all.",
      "Explain why sample means become normal.",
      [
        s("MIT 6.041 — Limit Theorems", "https://ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/", "course"),
        s("Probability Course", "https://www.probabilitycourse.com/", "book"),
      ],
    ),
    st(
      "stochastic",
      "advanced",
      "Stochastic processes",
      "Random walks, Markov chains and Poisson processes — probability that evolves over time.",
      "Model a queue or random walk and compute its long run behaviour.",
      [
        s("Introduction to Probability, Statistics and Random Processes", "https://www.probabilitycourse.com/", "book"),
        s("MIT 6.041 — Course notes", "https://ocw.mit.edu/courses/6-041sc-probabilistic-systems-analysis-and-applied-probability-fall-2013/", "course"),
      ],
    ),
  ],
})

export const statistics = defineTopic({
  name: "statistics",
  prettyName: "Statistics",
  category: "Math",
  aliases: ["data analysis", "hypothesis testing", "regression", "stats"],
  topicSummary:
    "Statistics turns data into decisions. It is less about formulas than about asking what a dataset can and cannot tell you, and about not fooling yourself.",
  steps: [
    st(
      "describing-data",
      "beginner",
      "Describing data",
      "Distributions, means, medians, spread and outliers. The first step is always to look at the data.",
      "Summarise a dataset and spot a misleading chart.",
      [
        s("OpenIntro Statistics", "https://www.openintro.org/book/os/", "book", "Free textbook used in universities."),
        s("Khan Academy — Statistics", "https://www.khanacademy.org/math/statistics-probability", "course"),
      ],
    ),
    st(
      "sampling",
      "beginner",
      "Sampling and study design",
      "Bias, randomness and what a sample can represent. Most bad conclusions are design errors.",
      "Critique the methodology behind a headline statistic.",
      [
        s("StatQuest", "https://statquest.org/", "video", "Clear short explanations of every statistical concept."),
        s("OpenIntro Statistics", "https://www.openintro.org/book/os/", "book"),
      ],
    ),
    st(
      "inference",
      "intermediate",
      "Inference and hypothesis testing",
      "Confidence intervals, p-values and the reasoning behind them — including how often they are misused.",
      "Interpret a confidence interval correctly and question a p-value.",
      [
        s("OpenIntro Statistics — Inference", "https://www.openintro.org/book/os/", "book"),
        s("Penn State STAT 500", "https://online.stat.psu.edu/stat500/", "course"),
      ],
    ),
    st(
      "regression",
      "intermediate",
      "Regression",
      "Linear models, least squares and what a coefficient means once you control for other variables.",
      "Fit and interpret a regression model on real data.",
      [
        s("An Introduction to Statistical Learning", "https://www.statlearning.com/", "book", "Free book, the standard on applied modelling."),
        s("StatQuest — Regression", "https://statquest.org/", "video"),
      ],
    ),
    st(
      "experiments",
      "intermediate",
      "Experiments and causal thinking",
      "A/B tests, power and confounding. Knowing causal inference is what separates analysis from guessing.",
      "Design an experiment and compute the sample size it needs.",
      [
        s("Penn State STAT 500", "https://online.stat.psu.edu/stat500/", "course"),
        s("Seeing Theory — Regression", "https://seeing-theory.brown.edu/", "interactive"),
      ],
    ),
    st(
      "bayesian",
      "advanced",
      "Bayesian statistics",
      "Priors, posteriors and probabilistic programming. A different, often more natural way to reason.",
      "Fit a simple Bayesian model and explain its posterior.",
      [
        s("Statistical Rethinking (lectures)", "https://xcelab.net/rm/statistical-rethinking/", "course"),
        s("Bayesian Methods for Hackers", "https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers", "book"),
      ],
    ),
  ],
})
