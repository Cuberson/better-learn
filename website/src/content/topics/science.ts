import { defineTopic, p, s, st } from "../helpers"

// Natural sciences: the classics plus the two that explain the modern world.

export const physics = defineTopic({
  name: "physics",
  prettyName: "Physics",
  category: "Science",
  aliases: ["mechanics", "relativity", "forces", "phys"],
  topicSummary:
    "Physics is the study of how matter and energy behave. Start with classical mechanics, because everything later — waves, thermodynamics, relativity, quantum theory — assumes you can reason about forces and motion.",
  steps: [
    st(
      "mechanics",
      "beginner",
      "Classical mechanics",
      "Motion, forces, energy and momentum. This is the foundation of every other physics topic.",
      "Solve standard problems about objects moving under forces.",
      [
        s("MIT 8.01 — Classical Mechanics", "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/", "course", "Walter Lewin's lectures are famously good."),
        s("Khan Academy — Physics", "https://www.khanacademy.org/science/physics", "course"),
        s(
          "Newton's laws of motion",
          "https://en.wikipedia.org/wiki/Newton's_laws_of_motion",
          "article",
          "Background reading on Newton's laws of motion for this step.",
        ),
        s(
          "PhET — interactive simulations",
          "https://phet.colorado.edu/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "waves-and-thermo",
      "beginner",
      "Waves, electricity and thermodynamics",
      "Oscillations, circuits, heat and entropy — the parts of physics you meet every day.",
      "Explain everyday phenomena with the right conservation law.",
      [
        s("The Feynman Lectures, Volume I", "https://www.feynmanlectures.caltech.edu/I_toc.html", "book", "Free online, still unmatched for insight."),
        s("OpenStax — College Physics", "https://openstax.org/details/books/college-physics-2e", "book"),
        s(
          "Second law of thermodynamics",
          "https://en.wikipedia.org/wiki/Second_law_of_thermodynamics",
          "article",
          "Background reading on Second law of thermodynamics for this step.",
        ),
        s(
          "arXiv — preprints",
          "https://arxiv.org/",
          "paper",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "problem-solving",
      "intermediate",
      "Problem solving",
      "Physics is learned through problems. Work through a set weekly and do not skip the ones you find ugly.",
      "Set up a problem from scratch without a template.",
      [
        s("The Physics Classroom", "https://www.physicsclassroom.com/", "course"),
        s("Classical mechanics", "https://en.wikipedia.org/wiki/Classical_mechanics", "article"),
        s(
          "Dimensional analysis",
          "https://en.wikipedia.org/wiki/Dimensional_analysis",
          "article",
          "Background reading on Dimensional analysis for this step.",
        ),
        s(
          "Science News",
          "https://www.sciencenews.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "electromagnetism",
      "intermediate",
      "Electromagnetism",
      "Electric and magnetic fields, Maxwell's equations and how light falls out of them.",
      "Explain induction, fields and electromagnetic waves.",
      [
        s("MIT 8.02 — Electricity and Magnetism", "https://ocw.mit.edu/courses/8-02sc-physics-ii-electricity-and-magnetism-fall-2010/", "course"),
        s("HyperPhysics", "http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html", "article"),
        s(
          "Maxwell's equations",
          "https://en.wikipedia.org/wiki/Maxwell's_equations",
          "article",
          "Background reading on Maxwell's equations for this step.",
        ),
        s(
          "Nature — News",
          "https://www.nature.com/news",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "relativity",
      "advanced",
      "Special and general relativity",
      "Spacetime, time dilation and gravity as geometry. Worth learning from the original argument, not the summary.",
      "Compute time dilation and explain why GPS needs relativity.",
      [
        s("The Feynman Lectures, Volume II", "https://www.feynmanlectures.caltech.edu/II_toc.html", "book"),
        s("MIT OpenCourseWare — Relativity", "https://ocw.mit.edu/search/?q=relativity", "course"),
        s(
          "Spacetime",
          "https://en.wikipedia.org/wiki/Spacetime",
          "article",
          "Background reading on Spacetime for this step.",
        ),
        s(
          "BioInteractive",
          "https://www.biointeractive.org/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "modern-physics",
      "advanced",
      "Modern physics",
      "Quantum mechanics, statistical mechanics and the open problems at the frontier.",
      "Read a modern physics paper's introduction and follow it.",
      [
        s("Theoretical Minimum (Susskind)", "https://theoreticalminimum.com/", "course"),
        s("The Feynman Lectures, Volume III", "https://www.feynmanlectures.caltech.edu/III_toc.html", "book"),
        s(
          "Standard Model",
          "https://en.wikipedia.org/wiki/Standard_Model",
          "article",
          "Background reading on Standard Model for this step.",
        ),
        s(
          "Quanta Magazine",
          "https://www.quantamagazine.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Measure g at home", "Measure gravity with household objects and estimate the uncertainty."),
      p("Sixty mechanics problems", "A full textbook chapter's problems, every one attempted."),
      p("Pendulum measurement", "Time a hundred swings and extract g with error bars."),
    ],
    intermediate: [
      p("Simulate a system", "A pendulum, orbit or circuit simulation that matches the theory."),
      p("Electromagnetism experiment", "Build a coil, measure the field and compare with the formula."),
      p("Circuit lab", "Build three circuits and measure voltage and current."),
    ],
    advanced: [
      p("Relativity exercise set", "Lorentz transformations, time dilation and the twin paradox worked through."),
      p("Read a paper", "Take a modern physics paper and write a summary a physicist would accept."),
      p("Numerical orbit", "Integrate a two body orbit and check conservation laws."),
    ],
  },
})

export const quantumMechanics = defineTopic({
  name: "quantum-mechanics",
  prettyName: "Quantum Mechanics",
  category: "Science",
  aliases: ["quantum physics", "quantum", "qubits", "qft"],
  topicSummary:
    "Quantum mechanics describes matter at scales where waves and particles are the same thing. The mathematics is linear algebra plus complex numbers; the difficulty is abandoning intuition that was never true at that scale.",
  steps: [
    st(
      "why-quantum",
      "beginner",
      "Why quantum mechanics exists",
      "Blackbody radiation, the photoelectric effect and the double slit experiment — the observations that broke classical physics.",
      "Explain the evidence that forced quantum theory.",
      [
        s("The Feynman Lectures — Quantum Behaviour", "https://www.feynmanlectures.caltech.edu/III_01.html", "book", "Chapter III-1 needs no prerequisites."),
        s("Khan Academy — Quantum Physics", "https://www.khanacademy.org/science/physics/quantum-physics", "course"),
        s(
          "Black-body radiation",
          "https://en.wikipedia.org/wiki/Black-body_radiation",
          "article",
          "Background reading on Black-body radiation for this step.",
        ),
        s(
          "PhET — interactive simulations",
          "https://phet.colorado.edu/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "math-foundations",
      "beginner",
      "The mathematics",
      "Complex numbers, vector spaces and operators. Quantum mechanics is linear algebra in physics clothes.",
      "Represent a state as a vector and an observable as an operator.",
      [
        s("Quantum Country", "https://quantum.country/", "interactive", "Spaced-repetition essays from Andy Matuschak and Michael Nielsen."),
        s("Linear Algebra — MIT 18.06", "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", "course"),
        s(
          "Hilbert space",
          "https://en.wikipedia.org/wiki/Hilbert_space",
          "article",
          "Background reading on Hilbert space for this step.",
        ),
        s(
          "arXiv — preprints",
          "https://arxiv.org/",
          "paper",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "schrodinger",
      "intermediate",
      "Wave functions and the Schrödinger equation",
      "Superposition, probability amplitudes and the equation that governs how states evolve.",
      "Solve the particle in a box and interpret the result.",
      [
        s("MIT 8.04 — Quantum Physics I", "https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/", "course"),
        s("The Feynman Lectures, Volume III", "https://www.feynmanlectures.caltech.edu/III_toc.html", "book"),
        s(
          "Schrödinger equation",
          "https://en.wikipedia.org/wiki/Schrödinger_equation",
          "article",
          "Background reading on Schrödinger equation for this step.",
        ),
        s(
          "OpenStax — Science",
          "https://openstax.org/subjects/science",
          "book",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "atoms",
      "intermediate",
      "Atoms and angular momentum",
      "Orbitals, spin, the hydrogen atom and why the periodic table has the shape it does.",
      "Explain atomic structure using quantum numbers.",
      [
        s("Hydrogen atom", "https://en.wikipedia.org/wiki/Hydrogen_atom", "article"),
        s("HyperPhysics — Quantum", "http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html", "article"),
        s(
          "Quantum number",
          "https://en.wikipedia.org/wiki/Quantum_number",
          "article",
          "Background reading on Quantum number for this step.",
        ),
        s(
          "Science News",
          "https://www.sciencenews.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "interpretation",
      "advanced",
      "Interpretation and entanglement",
      "Measurement, entanglement, Bell's theorem and the still-unsettled question of what the formalism means.",
      "Discuss interpretations without repeating pop-science myths.",
      [
        s("Stanford Encyclopedia of Philosophy — Quantum Mechanics", "https://plato.stanford.edu/entries/qm/", "article"),
        s("The Theoretical Minimum — Courses", "https://theoreticalminimum.com/", "course"),
        s(
          "Copenhagen interpretation",
          "https://en.wikipedia.org/wiki/Copenhagen_interpretation",
          "article",
          "Background reading on Copenhagen interpretation for this step.",
        ),
        s(
          "MIT OpenCourseWare",
          "https://ocw.mit.edu/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "quantum-computing",
      "advanced",
      "Quantum computing",
      "Qubits, gates, entanglement and the algorithms that offer real speedups.",
      "Read a quantum algorithm's circuit diagram and know what it computes.",
      [
        s("Quantum Country — Quantum Computing", "https://quantum.country/qcvc", "interactive"),
        s("Qiskit Textbook", "https://qiskit.org/learn/", "course"),
        s(
          "Quantum circuit",
          "https://en.wikipedia.org/wiki/Quantum_circuit",
          "article",
          "Background reading on Quantum circuit for this step.",
        ),
        s(
          "Nature — News",
          "https://www.nature.com/news",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Explain double slit", "Explain the experiment with the maths, no hand waving allowed."),
      p("Operator warm-up", "Thirty complex vector and operator exercises."),
      p("Wave packet plot", "Plot a Gaussian packet evolving in time."),
    ],
    intermediate: [
      p("Infinite well", "Solve the particle in a box and plot the states."),
      p("Hydrogen orbitals", "Plot hydrogen orbitals numerically and explain the quantum numbers."),
      p("Perturbation exercises", "Ten first order perturbation problems."),
    ],
    advanced: [
      p("Bell inequality", "Compute a Bell violation for a simple state by hand."),
      p("Quantum circuit", "Build, run and interpret a small circuit on a simulator."),
      p("Entanglement circuit", "Build a Bell state circuit and measure the correlations."),
    ],
  },
})

export const chemistry = defineTopic({
  name: "chemistry",
  prettyName: "Chemistry",
  category: "Science",
  aliases: ["atoms", "molecules", "organic chemistry", "chem"],
  topicSummary:
    "Chemistry connects the mathematics of physics to the messiness of biology: how atoms bond, how reactions happen and how energy drives them.",
  steps: [
    st(
      "atoms",
      "beginner",
      "Atoms and the periodic table",
      "Electron configuration and periodic trends explain almost all of chemistry's rules of thumb.",
      "Predict which elements react and how.",
      [
        s("OpenStax — Chemistry 2e", "https://openstax.org/details/books/chemistry-2e", "book", "Free, complete textbook."),
        s("Khan Academy — Chemistry", "https://www.khanacademy.org/science/chemistry", "course"),
        s(
          "Periodic table",
          "https://en.wikipedia.org/wiki/Periodic_table",
          "article",
          "Background reading on Periodic table for this step.",
        ),
        s(
          "PhET — interactive simulations",
          "https://phet.colorado.edu/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "bonding",
      "beginner",
      "Bonding and molecular shape",
      "Covalent and ionic bonds, Lewis structures and VSEPR — why molecules look the way they do.",
      "Draw a valid structure and predict a molecule's geometry.",
      [
        s("VSEPR theory", "https://en.wikipedia.org/wiki/VSEPR_theory", "article"),
        s("Chemical bond", "https://en.wikipedia.org/wiki/Chemical_bond", "article"),
        s(
          "Molecular geometry",
          "https://en.wikipedia.org/wiki/Molecular_geometry",
          "article",
          "Background reading on Molecular geometry for this step.",
        ),
        s(
          "HyperPhysics",
          "http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "stoichiometry",
      "intermediate",
      "Reactions and stoichiometry",
      "Balancing reactions, moles, limiting reagents and yields. The quantitative core of the subject.",
      "Calculate how much product a reaction will produce.",
      [
        s("Stoichiometry", "https://en.wikipedia.org/wiki/Stoichiometry", "article"),
        s("Limiting reagent", "https://en.wikipedia.org/wiki/Limiting_reagent", "article"),
        s(
          "Mole (unit)",
          "https://en.wikipedia.org/wiki/Mole_(unit)",
          "article",
          "Background reading on Mole (unit) for this step.",
        ),
        s(
          "arXiv — preprints",
          "https://arxiv.org/",
          "paper",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "thermo-kinetics",
      "intermediate",
      "Thermodynamics and kinetics",
      "Enthalpy, entropy and free energy decide whether a reaction can happen; kinetics decides how fast.",
      "Predict whether a reaction is spontaneous and roughly how fast.",
      [
        s("LibreTexts — Chemistry", "https://chem.libretexts.org/", "docs"),
        s("Chemical thermodynamics", "https://en.wikipedia.org/wiki/Chemical_thermodynamics", "article"),
        s(
          "Chemical kinetics",
          "https://en.wikipedia.org/wiki/Chemical_kinetics",
          "article",
          "Background reading on Chemical kinetics for this step.",
        ),
        s(
          "Science News",
          "https://www.sciencenews.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "organic",
      "intermediate",
      "Organic chemistry",
      "Carbon chemistry: functional groups, reaction mechanisms and the molecules of life.",
      "Recognise a functional group and predict its reactivity.",
      [
        s("Master Organic Chemistry", "https://www.masterorganicchemistry.com/", "article"),
        s("Khan Academy — Organic Chemistry", "https://www.khanacademy.org/science/organic-chemistry", "course"),
        s(
          "Organic chemistry",
          "https://en.wikipedia.org/wiki/Organic_chemistry",
          "article",
          "Background reading on Organic chemistry for this step.",
        ),
        s(
          "MIT OpenCourseWare",
          "https://ocw.mit.edu/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "lab-and-research",
      "advanced",
      "Laboratory and research frontiers",
      "Analytical techniques, spectroscopy and the current research literature.",
      "Read a chemistry paper's methods section and understand the technique.",
      [
        s("Chemistry World", "https://www.chemistryworld.com/", "article"),
        s("Nature Chemistry", "https://www.nature.com/nchem/", "paper"),
        s(
          "Nuclear magnetic resonance",
          "https://en.wikipedia.org/wiki/Nuclear_magnetic_resonance",
          "article",
          "Background reading on Nuclear magnetic resonance for this step.",
        ),
        s(
          "Nature — News",
          "https://www.nature.com/news",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Periodic trends explainer", "Explain ten trends from electron configuration alone."),
      p("Twenty molecules", "Name and build twenty molecules with the correct geometry."),
      p("Balancing equations", "Balance fifty equations without a solver."),
    ],
    intermediate: [
      p("Stoichiometry experiment", "Calculate a yield, then run the reaction and compare."),
      p("Titration", "Perform a titration and compute the concentration with an error estimate."),
      p("Kinetics fit", "Fit a rate law to a public dataset."),
    ],
    advanced: [
      p("Mechanism set", "Draw five organic mechanisms step by step with curly arrows."),
      p("Paper presentation", "Read a recent paper in your area and present it to someone."),
      p("Computational chemistry", "Optimise a small molecule with free software."),
    ],
  },
})

export const biology = defineTopic({
  name: "biology",
  prettyName: "Biology",
  category: "Science",
  aliases: ["genetics", "cells", "evolution", "bio"],
  topicSummary:
    "Biology is the study of living systems, from molecules to ecosystems. The unifying ideas are evolution, the central dogma of molecular biology and the fact that everything is a network.",
  steps: [
    st(
      "cells",
      "beginner",
      "Cells and molecules of life",
      "Proteins, DNA, membranes and the cell as a machine. Learn the vocabulary before the mechanisms.",
      "Describe what a cell is made of and what each part does.",
      [
        s("OpenStax — Biology 2e", "https://openstax.org/details/books/biology-2e", "book", "Free and comprehensive."),
        s("Khan Academy — Biology", "https://www.khanacademy.org/science/biology", "course"),
        s(
          "Cell (biology)",
          "https://en.wikipedia.org/wiki/Cell_(biology)",
          "article",
          "Background reading on Cell (biology) for this step.",
        ),
        s(
          "PhET — interactive simulations",
          "https://phet.colorado.edu/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "genetics",
      "beginner",
      "Genetics",
      "DNA, transcription, translation and inheritance. This is the machinery that makes life copy itself.",
      "Explain how a gene becomes a trait.",
      [
        s("Genetics", "https://en.wikipedia.org/wiki/Genetics", "article"),
        s("Nature Scitable — Genetics", "https://www.nature.com/scitable/", "article"),
        s(
          "Mendelian inheritance",
          "https://en.wikipedia.org/wiki/Mendelian_inheritance",
          "article",
          "Background reading on Mendelian inheritance for this step.",
        ),
        s(
          "HyperPhysics",
          "http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "evolution",
      "intermediate",
      "Evolution",
      "Selection, drift and speciation — the organising theory of all biology.",
      "Explain a biological feature in evolutionary terms.",
      [
        s("HHMI BioInteractive", "https://www.biointeractive.org/", "course", "Free films and classroom resources."),
        s("Evolution", "https://en.wikipedia.org/wiki/Evolution", "article"),
        s(
          "Natural selection",
          "https://en.wikipedia.org/wiki/Natural_selection",
          "article",
          "Background reading on Natural selection for this step.",
        ),
        s(
          "arXiv — preprints",
          "https://arxiv.org/",
          "paper",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "physiology",
      "intermediate",
      "Physiology and systems",
      "How tissues, organs and systems keep an organism alive and in balance.",
      "Reason about how a body responds to a change.",
      [
        s("OpenStax — Anatomy and Physiology", "https://openstax.org/details/books/anatomy-and-physiology-2e", "book"),
        s("Physiology", "https://en.wikipedia.org/wiki/Physiology", "article"),
        s(
          "Homeostasis",
          "https://en.wikipedia.org/wiki/Homeostasis",
          "article",
          "Background reading on Homeostasis for this step.",
        ),
        s(
          "Science News",
          "https://www.sciencenews.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "molecular-biology",
      "intermediate",
      "Molecular biology and genomics",
      "Gene regulation, sequencing and CRISPR. This is where modern biology is actually done.",
      "Understand a sequencing dataset at a high level.",
      [
        s("NCBI Bookshelf", "https://www.ncbi.nlm.nih.gov/books/", "book"),
        s("Molecular biology", "https://en.wikipedia.org/wiki/Molecular_biology", "article"),
        s(
          "DNA replication",
          "https://en.wikipedia.org/wiki/DNA_replication",
          "article",
          "Background reading on DNA replication for this step.",
        ),
        s(
          "MIT OpenCourseWare",
          "https://ocw.mit.edu/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "research",
      "advanced",
      "Reading the literature",
      "Ecology, systems biology and the current research frontier. Biology papers are dense; learn the conventions.",
      "Read a research paper and summarise its claim and evidence.",
      [
        s("Nature", "https://www.nature.com/", "paper"),
        s("bioRxiv", "https://www.biorxiv.org/", "paper", "Preprints, the newest work in biology."),
        s(
          "Peer review",
          "https://en.wikipedia.org/wiki/Peer_review",
          "article",
          "Background reading on Peer review for this step.",
        ),
        s(
          "Quanta Magazine",
          "https://www.quantamagazine.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Cell from memory", "Draw a cell and label every organelle with its job."),
      p("Genetics crosses", "Twenty Punnett square problems including linked traits."),
      p("Lab notebook", "Keep one for a month of small home experiments."),
    ],
    intermediate: [
      p("Genome exploration", "Find a gene in a public genome browser and explain what it does."),
      p("Physiology data", "Analyse a public physiology dataset and report the pattern."),
      p("PCR explainer", "Design a protocol and explain every ingredient."),
    ],
    advanced: [
      p("Present a paper", "Present a recent research paper with the methods you would question."),
      p("Reproduce an analysis", "Re-run the analysis of an open dataset from a published paper."),
      p("CRISPR case study", "Read one paper deeply and write the ethical analysis."),
    ],
  },
})

export const astronomy = defineTopic({
  name: "astronomy",
  prettyName: "Astronomy",
  category: "Science",
  aliases: ["space", "cosmology", "astrophysics", "planets", "stars"],
  topicSummary:
    "Astronomy studies everything beyond the Earth: planets, stars, galaxies and the universe itself. It is one of the few sciences where careful observation with the naked eye still teaches you something real.",
  steps: [
    st(
      "sky",
      "beginner",
      "The night sky",
      "Constellations, the celestial sphere and how the sky changes through the year. Learn by going outside.",
      "Find five constellations and two planets without an app.",
      [
        s("Stellarium", "https://stellarium.org/", "interactive", "Free planetarium software."),
        s("NASA — Skywatching", "https://science.nasa.gov/skywatching/", "docs"),
        s(
          "Celestial sphere",
          "https://en.wikipedia.org/wiki/Celestial_sphere",
          "article",
          "Background reading on Celestial sphere for this step.",
        ),
        s(
          "PhET — interactive simulations",
          "https://phet.colorado.edu/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "solar-system",
      "beginner",
      "The solar system",
      "Planets, orbits, moons and how the solar system formed.",
      "Explain why planets orbit the way they do.",
      [
        s("OpenStax — Astronomy 2e", "https://openstax.org/details/books/astronomy-2e", "book", "Free college-level textbook."),
        s("NASA — Solar System", "https://science.nasa.gov/solar-system/", "docs"),
        s(
          "Formation and evolution of the Solar System",
          "https://en.wikipedia.org/wiki/Formation_and_evolution_of_the_Solar_System",
          "article",
          "Background reading on Formation and evolution of the Solar System for this step.",
        ),
        s(
          "HyperPhysics",
          "http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "stars",
      "intermediate",
      "Stars and stellar evolution",
      "How stars fuse elements, why they die in different ways, and what that means for the elements in your body.",
      "Trace the life cycle of a star of a given mass.",
      [
        s("Stellar evolution", "https://en.wikipedia.org/wiki/Stellar_evolution", "article"),
        s("Khan Academy — Cosmology and Astronomy", "https://www.khanacademy.org/science/cosmology-and-astronomy", "course"),
        s(
          "Main sequence",
          "https://en.wikipedia.org/wiki/Main_sequence",
          "article",
          "Background reading on Main sequence for this step.",
        ),
        s(
          "Science News",
          "https://www.sciencenews.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "galaxies",
      "intermediate",
      "Galaxies and cosmology",
      "Galaxy formation, dark matter, expansion and the Big Bang.",
      "Explain the evidence for dark matter and cosmic expansion.",
      [
        s("NASA — Universe", "https://science.nasa.gov/universe/", "docs"),
        s("ESA — Space Science", "https://www.esa.int/Science_Exploration/Space_Science", "docs"),
        s(
          "Milky Way",
          "https://en.wikipedia.org/wiki/Milky_Way",
          "article",
          "Background reading on Milky Way for this step.",
        ),
        s(
          "MIT OpenCourseWare",
          "https://ocw.mit.edu/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "observation",
      "intermediate",
      "Observing and imaging",
      "Telescopes, astrophotography and citizen science — how amateurs still contribute real data.",
      "Capture a usable image of the Moon or a planet.",
      [
        s("Sky & Telescope", "https://skyandtelescope.org/", "article"),
        s("NASA — Citizen Science", "https://science.nasa.gov/citizen-science/", "practice"),
        s(
          "Astrophotography",
          "https://en.wikipedia.org/wiki/Astrophotography",
          "article",
          "Background reading on Astrophotography for this step.",
        ),
        s(
          "Nature — News",
          "https://www.nature.com/news",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "astrophysics",
      "advanced",
      "Astrophysics",
      "Radiative processes, relativity and the physics used in modern research.",
      "Read an astrophysics preprint and follow the argument.",
      [
        s("arXiv — Astrophysics", "https://arxiv.org/list/astro-ph/recent", "paper"),
        s("NASA ADS", "https://ui.adsabs.harvard.edu/", "docs", "Search every astronomy paper ever published."),
        s(
          "Astrophysics",
          "https://en.wikipedia.org/wiki/Astrophysics",
          "article",
          "Background reading on Astrophysics for this step.",
        ),
        s(
          "BioInteractive",
          "https://www.biointeractive.org/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Star hop", "Find ten objects with binoculars using only a star chart."),
      p("Scale model", "Build a scale model of the solar system and explain the distances."),
      p("Moon diary", "Photograph the moon daily for a month and log its phases."),
    ],
    intermediate: [
      p("Observing log", "A month of observations with sketches and conditions."),
      p("Deep sky image", "Take and stack a photo of a nebula or galaxy."),
      p("Meteor count", "Count meteors during a shower and submit to a citizen science project."),
    ],
    advanced: [
      p("Analyse telescope data", "Take public data and extract a light curve or a spectrum."),
      p("Exoplanet transit", "Detect a transit in public data and estimate the planet's size."),
      p("Stellar spectrum", "Identify the lines in a public spectrum."),
    ],
  },
})

export const neuroscience = defineTopic({
  name: "neuroscience",
  prettyName: "Neuroscience",
  category: "Science",
  aliases: ["brain", "neurons", "cognition", "neuro"],
  topicSummary:
    "Neuroscience explains how neurons produce perception, memory and behaviour. It sits between biology, psychology and computation, and it is full of open questions.",
  steps: [
    st(
      "neurons",
      "beginner",
      "Neurons and synapses",
      "Membranes, action potentials and synaptic transmission — the hardware of the brain.",
      "Explain how a signal travels from one neuron to the next.",
      [
        s("BrainFacts", "https://www.brainfacts.org/", "article", "Short vetted explainers from the Society for Neuroscience."),
        s("Neuron", "https://en.wikipedia.org/wiki/Neuron", "article"),
        s(
          "Action potential",
          "https://en.wikipedia.org/wiki/Action_potential",
          "article",
          "Background reading on Action potential for this step.",
        ),
        s(
          "PhET — interactive simulations",
          "https://phet.colorado.edu/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "anatomy",
      "beginner",
      "Brain anatomy",
      "The major regions and what they do, plus the wiring that connects them.",
      "Point at a brain region and say what it is for.",
      [
        s("Neuroscience Online", "https://nba.uth.tmc.edu/neuroscience/", "book"),
        s("Neuroscientifically Challenged", "https://neuroscientificallychallenged.com/", "article"),
        s(
          "Cerebral cortex",
          "https://en.wikipedia.org/wiki/Cerebral_cortex",
          "article",
          "Background reading on Cerebral cortex for this step.",
        ),
        s(
          "HyperPhysics",
          "http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "systems",
      "intermediate",
      "Sensory and motor systems",
      "How the retina, cochlea and cortex turn physical energy into perception and action.",
      "Trace a signal from a sense organ to a cortical area.",
      [
        s("MIT 9.13 — The Human Brain", "https://ocw.mit.edu/courses/9-13-the-human-brain-spring-2019/", "course"),
        s("NCBI — Neuroscience (Purves)", "https://www.ncbi.nlm.nih.gov/books/NBK10799/", "book"),
        s(
          "Sensory nervous system",
          "https://en.wikipedia.org/wiki/Sensory_nervous_system",
          "article",
          "Background reading on Sensory nervous system for this step.",
        ),
        s(
          "arXiv — preprints",
          "https://arxiv.org/",
          "paper",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "memory",
      "intermediate",
      "Learning and memory",
      "Plasticity, hippocampus and consolidation. How experience physically changes the brain.",
      "Explain what happens in the brain while you learn a new skill.",
      [
        s("Neuroplasticity", "https://en.wikipedia.org/wiki/Neuroplasticity", "article"),
        s("Memory", "https://en.wikipedia.org/wiki/Memory", "article"),
        s(
          "Hippocampus",
          "https://en.wikipedia.org/wiki/Hippocampus",
          "article",
          "Background reading on Hippocampus for this step.",
        ),
        s(
          "OpenStax — Science",
          "https://openstax.org/subjects/science",
          "book",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "methods",
      "intermediate",
      "Methods of neuroscience",
      "fMRI, EEG, electrophysiology and optogenetics — what each technique can and cannot show.",
      "Critique a brain imaging headline.",
      [
        s("Electroencephalography", "https://en.wikipedia.org/wiki/Electroencephalography", "article"),
        s("Nature Neuroscience", "https://www.nature.com/neuro/", "paper"),
        s(
          "Functional magnetic resonance imaging",
          "https://en.wikipedia.org/wiki/Functional_magnetic_resonance_imaging",
          "article",
          "Background reading on Functional magnetic resonance imaging for this step.",
        ),
        s(
          "Science News",
          "https://www.sciencenews.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "computational",
      "advanced",
      "Computational neuroscience",
      "Neural coding, network models and the bridge to machine learning.",
      "Read a computational model of a neural circuit.",
      [
        s("Theoretical Neuroscience (Dayan & Abbott)", "https://mitpress.mit.edu/9780262541855/theoretical-neuroscience/", "book"),
        s("Neuromatch Academy", "https://compneuro.neuromatch.io/", "course", "Free computational neuroscience course."),
        s(
          "Computational neuroscience",
          "https://en.wikipedia.org/wiki/Computational_neuroscience",
          "article",
          "Background reading on Computational neuroscience for this step.",
        ),
        s(
          "Khan Academy — Science",
          "https://www.khanacademy.org/science",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Neuron explainer", "Explain resting and action potentials with the equations behind them."),
      p("Brain atlas", "Learn thirty structures and what each one does."),
      p("Dissection study", "Watch a full dissection and label structures as they appear."),
    ],
    intermediate: [
      p("Analyse EEG data", "Take a public EEG dataset and find an effect in it."),
      p("Methods comparison", "Compare fMRI, EEG and single cell recording on what they can and cannot show."),
      p("Reaction time experiment", "Run one on friends and analyse the data."),
    ],
    advanced: [
      p("Hodgkin-Huxley model", "Implement it and reproduce a spike."),
      p("Network model", "Build a small spiking network and study one emergent behaviour."),
      p("Connectome analysis", "Analyse a small public connectome."),
    ],
  },
})
