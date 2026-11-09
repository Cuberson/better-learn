import { defineTopic, p, s, st } from "../helpers"

// Humanities, arts and communication — the topics that make you a more
// interesting person more than they make you employable.

export const psychology = defineTopic({
  name: "psychology",
  prettyName: "Psychology",
  category: "Humanities",
  aliases: ["mind", "behaviour", "behavior", "cognitive science", "psych"],
  topicSummary:
    "Psychology studies behaviour and the mind with the methods of science. It is a field with real findings and a replication crisis, so learn to read studies critically.",
  steps: [
    st(
      "foundations",
      "beginner",
      "Foundations",
      "The main perspectives and the methods psychologists use to study the mind.",
      "Describe how a psychologist would test a claim about behaviour.",
      [
        s("OpenStax — Psychology 2e", "https://openstax.org/details/books/psychology-2e", "book", "Free, well structured textbook."),
        s("Psychology", "https://en.wikipedia.org/wiki/Psychology", "article"),
        s(
          "History of psychology",
          "https://en.wikipedia.org/wiki/History_of_psychology",
          "article",
          "Background reading on History of psychology for this step.",
        ),
        s(
          "PubMed",
          "https://pubmed.ncbi.nlm.nih.gov/",
          "paper",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "biological",
      "beginner",
      "Biological psychology",
      "Neurons, hormones and the biological machinery behind behaviour and emotion.",
      "Explain a behaviour in terms of its biological mechanism.",
      [
        s("Noba Project", "https://nobaproject.com/", "book"),
        s("Behavioral neuroscience", "https://en.wikipedia.org/wiki/Behavioral_neuroscience", "article"),
        s(
          "Neurotransmitter",
          "https://en.wikipedia.org/wiki/Neurotransmitter",
          "article",
          "Background reading on Neurotransmitter for this step.",
        ),
        s(
          "Crash Course — Psychology",
          "https://www.youtube.com/@crashcourse",
          "video",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "cognitive",
      "intermediate",
      "Cognitive psychology",
      "Memory, attention, perception and decision making — and how reliably they fail.",
      "Predict which cognitive biases a real decision is exposed to.",
      [
        s("Khan Academy — Psychology", "https://www.khanacademy.org/test-prep/mcat/behavior", "course"),
        s("Cognitive psychology", "https://en.wikipedia.org/wiki/Cognitive_psychology", "article"),
        s(
          "Working memory",
          "https://en.wikipedia.org/wiki/Working_memory",
          "article",
          "Background reading on Working memory for this step.",
        ),
        s(
          "Psychology Today",
          "https://www.psychologytoday.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "social",
      "intermediate",
      "Social psychology",
      "Conformity, persuasion, groups and the situations that shape behaviour.",
      "Recognise a social influence effect in the wild.",
      [
        s("Social psychology", "https://en.wikipedia.org/wiki/Social_psychology", "article"),
        s("Simply Psychology", "https://www.simplypsychology.org/", "article"),
        s(
          "Cognitive dissonance",
          "https://en.wikipedia.org/wiki/Cognitive_dissonance",
          "article",
          "Background reading on Cognitive dissonance for this step.",
        ),
        s(
          "Open Textbook Library",
          "https://open.umn.edu/",
          "book",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "research-literacy",
      "intermediate",
      "Research literacy",
      "Replication, effect sizes, preregistration and how to read a study without being fooled.",
      "Critique a psychology headline and find the paper behind it.",
      [
        s("Replication crisis", "https://en.wikipedia.org/wiki/Replication_crisis", "article"),
        s("Retraction Watch", "https://retractionwatch.com/", "article"),
        s(
          "Effect size",
          "https://en.wikipedia.org/wiki/Effect_size",
          "article",
          "Background reading on Effect size for this step.",
        ),
      ],
    ),
    st(
      "applied",
      "advanced",
      "Applied psychology",
      "Clinical, organisational and developmental psychology, and where the evidence is thin.",
      "Tell the difference between a well-supported therapy and a trend.",
      [
        s("APA — Topics", "https://www.apa.org/topics", "docs"),
        s("Applied psychology", "https://en.wikipedia.org/wiki/Applied_psychology", "article"),
        s(
          "Cognitive behavioral therapy",
          "https://en.wikipedia.org/wiki/Cognitive_behavioral_therapy",
          "article",
          "Background reading on Cognitive behavioral therapy for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Five classic studies", "Summarise five classic studies and the criticism each one earned."),
      p("Bias journal", "Track your own biases for a week and write what surprised you."),
      p("Stroop experiment", "Run it on five friends and report the results."),
    ],
    intermediate: [
      p("Replication check", "Pick a famous effect and read its replication attempts."),
      p("Run a small study", "Design and run a survey experiment with a pre-registered hypothesis."),
      p("Interview study", "Five interviews coded into themes."),
    ],
    advanced: [
      p("Behaviour change design", "Design an intervention with a measurable outcome and a control."),
      p("Meta-analysis reading", "Read a meta-analysis and explain what it does and does not prove."),
      p("Pre-register a study", "Write and register a complete study plan."),
    ],
  },
})

export const philosophy = defineTopic({
  name: "philosophy",
  prettyName: "Philosophy",
  category: "Humanities",
  aliases: ["ethics", "logic", "metaphysics", "epistemology", "thinking"],
  topicSummary:
    "Philosophy is the discipline of asking questions that do not have settled answers and arguing about them carefully. Learning it mostly changes how you think, not what you know.",
  steps: [
    st(
      "what-it-is",
      "beginner",
      "What philosophy is",
      "The main branches and the style of argument philosophy uses.",
      "Tell a philosophical question apart from an empirical one.",
      [
        s("Stanford Encyclopedia of Philosophy", "https://plato.stanford.edu/", "docs", "The reference work for philosophy."),
        s("Philosophy", "https://en.wikipedia.org/wiki/Philosophy", "article"),
        s(
          "Metaphysics",
          "https://en.wikipedia.org/wiki/Metaphysics",
          "article",
          "Background reading on Metaphysics for this step.",
        ),
        s(
          "Philosophy Now",
          "https://philosophynow.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "logic",
      "beginner",
      "Logic and argument",
      "Validity, soundness, fallacies and how to take an argument apart.",
      "Formalise an argument and find its weakest premise.",
      [
        s("Internet Encyclopedia of Philosophy", "https://iep.utm.edu/", "docs"),
        s("Philosophy Basics", "https://www.philosophybasics.com/", "article"),
        s(
          "Propositional calculus",
          "https://en.wikipedia.org/wiki/Propositional_calculus",
          "article",
          "Background reading on Propositional calculus for this step.",
        ),
        s(
          "TED — talks",
          "https://www.ted.com/talks",
          "video",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "ethics",
      "intermediate",
      "Ethics",
      "Consequentialism, deontology and virtue ethics, plus applied dilemmas.",
      "Apply two ethical frameworks to the same case and compare conclusions.",
      [
        s("Stanford Encyclopedia of Philosophy — Ethics", "https://plato.stanford.edu/entries/ethics-virtue/", "article"),
        s("OpenStax — Introduction to Philosophy", "https://openstax.org/details/books/introduction-philosophy", "book"),
        s(
          "Utilitarianism",
          "https://en.wikipedia.org/wiki/Utilitarianism",
          "article",
          "Background reading on Utilitarianism for this step.",
        ),
        s(
          "LibriVox — audiobooks",
          "https://librivox.org/",
          "book",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "epistemology",
      "intermediate",
      "Knowledge and mind",
      "What knowledge is, what justification means, and the puzzle of consciousness.",
      "Explain the difference between knowing and believing something true.",
      [
        s("Stanford Encyclopedia of Philosophy — Epistemology", "https://plato.stanford.edu/entries/epistemology/", "article"),
        s("PhilPapers", "https://philpapers.org/", "docs"),
        s(
          "Epistemology",
          "https://en.wikipedia.org/wiki/Epistemology",
          "article",
          "Background reading on Epistemology for this step.",
        ),
        s(
          "Google Arts & Culture",
          "https://artsandculture.google.com/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "reading-primary",
      "intermediate",
      "Reading primary texts",
      "Plato, Descartes, Hume and Kant are readable with the right guide. Read the original, not the summary.",
      "Read a philosophical text and reconstruct its central argument.",
      [
        s("Project Gutenberg — Philosophy", "https://www.gutenberg.org/ebooks/bookshelf/93", "book"),
        s("Socratic method", "https://en.wikipedia.org/wiki/Socratic_method", "article"),
        s(
          "Allegory of the Cave",
          "https://en.wikipedia.org/wiki/Allegory_of_the_Cave",
          "article",
          "Background reading on Allegory of the Cave for this step.",
        ),
      ],
    ),
    st(
      "contemporary",
      "advanced",
      "Contemporary philosophy",
      "Political philosophy, philosophy of science and the live debates in journals.",
      "Follow a contemporary debate and take a defensible position.",
      [
        s("Philosophy of mind", "https://en.wikipedia.org/wiki/Philosophy_of_mind", "article"),
        s("Analytic philosophy", "https://en.wikipedia.org/wiki/Analytic_philosophy", "article"),
        s(
          "Phenomenology (philosophy)",
          "https://en.wikipedia.org/wiki/Phenomenology_(philosophy)",
          "article",
          "Background reading on Phenomenology (philosophy) for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Argument maps", "Reconstruct three arguments in premise and conclusion form."),
      p("Fallacy hunt", "Find ten fallacies in real opinion pieces and explain them."),
      p("Counterexample practice", "Break three arguments with counterexamples you invent."),
    ],
    intermediate: [
      p("Ethics essay", "Argue a position on a dilemma and answer the strongest objection."),
      p("Read a dialogue", "Read a Platonic dialogue alongside a commentary."),
      p("Argue the other side", "Take the opposite position of your ethics essay and defend it."),
    ],
    advanced: [
      p("Respond to a paper", "Write a response to a contemporary journal article."),
      p("Original argument", "Make a small original argument and defend it against yourself."),
      p("Teach a seminar", "Run a thirty minute discussion on a text you chose."),
    ],
  },
})

export const history = defineTopic({
  name: "history",
  prettyName: "History",
  category: "Humanities",
  aliases: ["world history", "civilisation", "civilization", "past"],
  topicSummary:
    "History is not a list of dates but an argument about evidence. Learn a narrative spine first, then how historians actually work with sources.",
  steps: [
    st(
      "big-picture",
      "beginner",
      "The big picture",
      "A rough timeline of human history so new facts have somewhere to attach.",
      "Place any event on a timeline and say what came before it.",
      [
        s("Khan Academy — World History", "https://www.khanacademy.org/humanities/world-history", "course"),
        s("Crash Course", "https://www.youtube.com/@crashcourse", "video", "Fast, entertaining overview series."),
        s(
          "World history (field)",
          "https://en.wikipedia.org/wiki/World_history_(field)",
          "article",
          "Background reading on World history (field) for this step.",
        ),
        s(
          "Library of Congress",
          "https://www.loc.gov/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "sources",
      "beginner",
      "Working with sources",
      "Primary versus secondary sources, bias and how historians build an argument.",
      "Read a primary source and question who wrote it and why.",
      [
        s("Purdue OWL — Research", "https://owl.purdue.edu/owl/research_and_citation/conducting_research/index.html", "docs"),
        s("Internet History Sourcebooks", "https://sourcebooks.fordham.edu/", "docs"),
        s(
          "Primary source",
          "https://en.wikipedia.org/wiki/Primary_source",
          "article",
          "Background reading on Primary source for this step.",
        ),
        s(
          "Our World in Data",
          "https://ourworldindata.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "period-in-depth",
      "intermediate",
      "Pick a period",
      "Go deep on one period or region. Depth teaches how history is actually written.",
      "Explain a period's causes and consequences in your own words.",
      [
        s("OpenStax — World History", "https://openstax.org/details/books/world-history-volume-1", "book"),
        s("Secondary source", "https://en.wikipedia.org/wiki/Secondary_source", "article"),
        s(
          "Middle Ages",
          "https://en.wikipedia.org/wiki/Middle_Ages",
          "article",
          "Background reading on Middle Ages for this step.",
        ),
        s(
          "BBC History",
          "https://www.bbc.co.uk/history",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "historiography",
      "intermediate",
      "Historiography",
      "How interpretations of the past change over time, and why historians disagree.",
      "Compare two historians' accounts of the same event.",
      [
        s("Internet Encyclopedia of Philosophy", "https://iep.utm.edu/", "docs"),
        s("The American Historical Review", "https://academic.oup.com/ahr", "paper"),
        s(
          "Annales school",
          "https://en.wikipedia.org/wiki/Annales_school",
          "article",
          "Background reading on Annales school for this step.",
        ),
        s(
          "Wikisource",
          "https://en.wikisource.org/",
          "book",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "argument",
      "intermediate",
      "Making an argument",
      "Thesis, evidence and counter-argument — the craft of a history essay.",
      "Write a short essay that argues rather than narrates.",
      [
        s("Purdue OWL — Argument", "https://owl.purdue.edu/owl/general_writing/academic_writing/index.html", "docs"),
        s("Historiography", "https://en.wikipedia.org/wiki/Historiography", "article"),
        s(
          "Historical method",
          "https://en.wikipedia.org/wiki/Historical_method",
          "article",
          "Background reading on Historical method for this step.",
        ),
      ],
    ),
    st(
      "research",
      "advanced",
      "Research",
      "Archives, digital humanities and reading academic history.",
      "Trace a claim to its primary evidence.",
      [
        s("Internet Archive", "https://archive.org/", "docs"),
        s("JSTOR", "https://www.jstor.org/", "paper"),
        s(
          "Archive",
          "https://en.wikipedia.org/wiki/Archive",
          "article",
          "Background reading on Archive for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Century timeline", "Build a timeline from memory, then correct it against sources."),
      p("Source triangulation", "Three primary sources on one event and what each leaves out."),
      p("Local history", "Research one building or street near you from primary sources."),
    ],
    intermediate: [
      p("Period deep dive", "Read three books on one period and compare their claims."),
      p("Argument essay", "Answer a historical question with evidence and a counter-argument."),
      p("Book review", "Review a history book and place it in its historiography."),
    ],
    advanced: [
      p("Archival paper", "Use a database or archive and write a paper with a bibliography."),
      p("Historiography review", "Compare how two schools of historians treat the same event."),
      p("Public history", "Write a walking tour or exhibit text with citations."),
    ],
  },
})

export const musicTheory = defineTopic({
  name: "music-theory",
  prettyName: "Music Theory",
  category: "Humanities",
  aliases: ["music", "harmony", "composition", "theory"],
  topicSummary:
    "Music theory names the patterns composers already use. It does not make you musical by itself — you have to hear the ideas, so pair every concept with listening and playing.",
  steps: [
    st(
      "notes-and-rhythm",
      "beginner",
      "Notes, intervals and rhythm",
      "The staff, intervals, scales and counting. The alphabet of music.",
      "Read a simple melody and clap its rhythm correctly.",
      [
        s("musictheory.net", "https://www.musictheory.net/", "interactive", "Free interactive lessons and exercises."),
        s("Interval (music)", "https://en.wikipedia.org/wiki/Interval_(music)", "article"),
        s(
          "Time signature",
          "https://en.wikipedia.org/wiki/Time_signature",
          "article",
          "Background reading on Time signature for this step.",
        ),
        s(
          "IMSLP — public domain scores",
          "https://imslp.org/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "scales",
      "beginner",
      "Scales and keys",
      "Major and minor scales, key signatures and the circle of fifths.",
      "Work out the key of a song by ear and by signature.",
      [
        s("LightNote — Music Theory", "https://www.lightnote.co/", "interactive"),
        s("musictheory.net — Lessons", "https://www.musictheory.net/lessons", "interactive"),
        s(
          "Major scale",
          "https://en.wikipedia.org/wiki/Major_scale",
          "article",
          "Background reading on Major scale for this step.",
        ),
        s(
          "Ear training — 8notes",
          "https://www.8notes.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "harmony",
      "intermediate",
      "Chords and harmony",
      "Triads, chord progressions and functional harmony — why some changes feel like home.",
      "Write a chord progression and explain its function.",
      [
        s("Open Music Theory", "https://openmusictheory.github.io/", "book"),
        s("Hooktheory", "https://www.hooktheory.com/", "interactive"),
        s(
          "Chord progression",
          "https://en.wikipedia.org/wiki/Chord_progression",
          "article",
          "Background reading on Chord progression for this step.",
        ),
        s(
          "MuseScore",
          "https://musescore.org/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "ear-training",
      "intermediate",
      "Ear training",
      "Intervals, chords and progressions by ear. This is the step most people skip and later regret.",
      "Identify common chord progressions by listening.",
      [
        s("teoria", "https://www.teoria.com/", "interactive"),
        s("musictheory.net — Exercises", "https://www.musictheory.net/exercises", "practice"),
        s(
          "Ear training",
          "https://en.wikipedia.org/wiki/Ear_training",
          "article",
          "Background reading on Ear training for this step.",
        ),
        s(
          "Open Textbook Library",
          "https://open.umn.edu/",
          "book",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "composition",
      "intermediate",
      "Composition",
      "Melody, form, voicing and arranging your own ideas.",
      "Finish a short original piece and get feedback on it.",
      [
        s("Musical form", "https://en.wikipedia.org/wiki/Musical_form", "article"),
        s("Ableton — Learning Music", "https://learningmusic.ableton.com/", "interactive"),
        s(
          "Motif (music)",
          "https://en.wikipedia.org/wiki/Motif_(music)",
          "article",
          "Background reading on Motif (music) for this step.",
        ),
      ],
    ),
    st(
      "advanced",
      "advanced",
      "Advanced theory",
      "Counterpoint, chromatic harmony, jazz theory and 20th century techniques.",
      "Analyse a complex piece and explain what it is doing.",
      [
        s("Counterpoint", "https://en.wikipedia.org/wiki/Counterpoint", "article"),
        s("Music theory", "https://en.wikipedia.org/wiki/Music_theory", "article"),
        s(
          "Modulation (music)",
          "https://en.wikipedia.org/wiki/Modulation_(music)",
          "article",
          "Background reading on Modulation (music) for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Interval trainer", "Identify intervals by ear until you hit 90%."),
      p("Transcribe a melody", "Take a simple melody by ear and write it down in notation."),
      p("Rhythm drills", "Clap and notate ten rhythms, then write your own."),
    ],
    intermediate: [
      p("Four part harmony", "Harmonise a melody with correct voice leading."),
      p("Thirty-two bar piece", "Write a piece and label every chord in it."),
      p("Reharmonise a standard", "Take a jazz standard and change its harmony three ways."),
    ],
    advanced: [
      p("Movement analysis", "Write a harmonic analysis of a classical movement."),
      p("Compose in a form", "Write a piece in sonata or fugue form and analyse your own choices."),
      p("Orchestrate", "Arrange your own piece for four instruments."),
    ],
  },
})

export const photography = defineTopic({
  name: "photography",
  prettyName: "Photography",
  category: "Humanities",
  aliases: ["camera", "photos", "composition", "lighting", "photo"],
  topicSummary:
    "Photography is about light and decisions. Learn the exposure triangle, then composition, then spend thousands of frames figuring out what you actually want to say.",
  steps: [
    st(
      "exposure",
      "beginner",
      "Exposure",
      "Aperture, shutter speed and ISO, and how they trade off against each other.",
      "Expose the same scene three different ways on purpose.",
      [
        s("Cambridge in Colour", "https://www.cambridgeincolour.com/", "article", "Technical explanations that actually make sense."),
        s("Digital Photography School", "https://digital-photography-school.com/", "article"),
        s(
          "Exposure (photography)",
          "https://en.wikipedia.org/wiki/Exposure_(photography)",
          "article",
          "Background reading on Exposure (photography) for this step.",
        ),
        s(
          "DPReview",
          "https://www.dpreview.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "composition",
      "beginner",
      "Composition",
      "Framing, light, lines and timing. Most of a good photo is decided before you press the button.",
      "Take ten deliberate compositions of one subject.",
      [
        s("Photography Life", "https://photographylife.com/", "article"),
        s("Cambridge in Colour — Composition", "https://www.cambridgeincolour.com/techniques/composition.htm", "article"),
        s(
          "Rule of thirds",
          "https://en.wikipedia.org/wiki/Rule_of_thirds",
          "article",
          "Background reading on Rule of thirds for this step.",
        ),
        s(
          "PetaPixel",
          "https://petapixel.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "light",
      "intermediate",
      "Light",
      "Natural light, direction, quality and how to read a scene before shooting.",
      "Predict how a subject will look at different times of day.",
      [
        s("Photographic lighting", "https://en.wikipedia.org/wiki/Photographic_lighting", "article"),
        s("Strobist", "https://strobist.blogspot.com/", "article", "Classic free course on lighting."),
        s(
          "Golden hour (photography)",
          "https://en.wikipedia.org/wiki/Golden_hour_(photography)",
          "article",
          "Background reading on Golden hour (photography) for this step.",
        ),
        s(
          "Fstoppers",
          "https://fstoppers.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "editing",
      "intermediate",
      "Editing",
      "Raw files, colour and contrast — and how much editing is honest.",
      "Develop a consistent edit style across a set of photos.",
      [
        s("Cambridge in Colour — Post Processing", "https://www.cambridgeincolour.com/techniques.htm", "article"),
        s("Image editing", "https://en.wikipedia.org/wiki/Image_editing", "article"),
        s(
          "Raw image format",
          "https://en.wikipedia.org/wiki/Raw_image_format",
          "article",
          "Background reading on Raw image format for this step.",
        ),
        s(
          "Flickr — critique groups",
          "https://www.flickr.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "projects",
      "intermediate",
      "Working on projects",
      "Series, sequencing and telling a story with more than one image.",
      "Finish a ten photo series with a clear theme.",
      [
        s("LensCulture", "https://www.lensculture.com/", "interactive"),
        s("Magnum Photos", "https://www.magnumphotos.com/", "interactive"),
        s(
          "Photo essay",
          "https://en.wikipedia.org/wiki/Photo_essay",
          "article",
          "Background reading on Photo essay for this step.",
        ),
        s(
          "500px",
          "https://500px.com/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "professional",
      "advanced",
      "Professional practice",
      "Clients, contracts, pricing and building a portfolio that gets work.",
      "Shoot a paid assignment end to end.",
      [
        s("Stock photography", "https://en.wikipedia.org/wiki/Stock_photography", "article"),
        s("Photo shoot", "https://en.wikipedia.org/wiki/Photo_shoot", "article"),
        s(
          "Copyright",
          "https://en.wikipedia.org/wiki/Copyright",
          "article",
          "Background reading on Copyright for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Exposure drill", "Shoot the same scene at nine exposure combinations and compare."),
      p("Composition series", "Ten photos, each exploring one compositional idea."),
      p("One lens week", "Shoot a full week at a single focal length."),
    ],
    intermediate: [
      p("Photo essay", "One subject, twelve images, sequenced to tell a story."),
      p("Consistent edit", "Develop an edit and apply it to a full set without drifting."),
      p("Portrait session", "Light and direct one portrait session start to finish."),
    ],
    advanced: [
      p("Client shoot", "Plan, shoot and deliver a real shoot on a deadline."),
      p("Printed portfolio", "Print twelve images and sequence them into a book."),
      p("Exhibition proposal", "Write and mock up a small exhibition of your work."),
    ],
  },
})

export const spanish = defineTopic({
  name: "spanish",
  prettyName: "Spanish",
  category: "Languages",
  aliases: ["español", "language learning", "castellano", "learn spanish"],
  topicSummary:
    "Learning Spanish is mostly input and speaking. Grammar helps, but a few hundred hours of comprehensible listening and regular conversation will do more than any textbook.",
  steps: [
    st(
      "pronunciation",
      "beginner",
      "Pronunciation and first words",
      "The sounds, the alphabet and the phrases you need in the first week.",
      "Introduce yourself and pronounce the tricky sounds correctly.",
      [
        s("SpanishDict", "https://www.spanishdict.com/", "docs", "Dictionary plus conjugation tables."),
        s("StudySpanish", "https://studyspanish.com/", "course"),
        s(
          "Spanish phonology",
          "https://en.wikipedia.org/wiki/Spanish_phonology",
          "article",
          "Background reading on Spanish phonology for this step.",
        ),
        s(
          "Duolingo",
          "https://www.duolingo.com/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "core-grammar",
      "beginner",
      "Core grammar",
      "Present tense, articles, gender and the most useful verb patterns.",
      "Hold a simple conversation about your day.",
      [
        s("StudySpanish — Grammar", "https://studyspanish.com/grammar", "course"),
        s("Spanish grammar", "https://en.wikipedia.org/wiki/Spanish_grammar", "article"),
        s(
          "Grammatical gender",
          "https://en.wikipedia.org/wiki/Grammatical_gender",
          "article",
          "Background reading on Grammatical gender for this step.",
        ),
        s(
          "Anki — spaced repetition",
          "https://apps.ankiweb.net/",
          "practice",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "input",
      "intermediate",
      "Comprehensible input",
      "Watch and listen to content just above your level, every day. This is the engine of acquisition.",
      "Understand a simple podcast episode without subtitles.",
      [
        s("Dreaming Spanish", "https://www.dreamingspanish.com/", "video"),
        s("Radio Ambulante", "https://radioambulante.org/", "video", "Great intermediate listening once you are ready."),
        s(
          "Input hypothesis",
          "https://en.wikipedia.org/wiki/Input_hypothesis",
          "article",
          "Background reading on Input hypothesis for this step.",
        ),
        s(
          "Forvo — pronunciation",
          "https://forvo.com/",
          "interactive",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "speaking",
      "intermediate",
      "Speaking",
      "Conversation practice, corrections and getting comfortable being wrong.",
      "Have a thirty minute conversation with a native speaker.",
      [
        s("italki", "https://www.italki.com/", "practice"),
        s("Language Transfer — Spanish", "https://www.languagetransfer.org/", "video"),
        s(
          "Second-language acquisition",
          "https://en.wikipedia.org/wiki/Second-language_acquisition",
          "article",
          "Background reading on Second-language acquisition for this step.",
        ),
        s(
          "Wiktionary",
          "https://en.wiktionary.org/",
          "docs",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "past-and-moods",
      "intermediate",
      "Past tenses and the subjunctive",
      "The grammar that separates a tourist from a speaker. Learn it in context, not in tables.",
      "Tell a story about the past using two past tenses correctly.",
      [
        s("SpanishDict — Conjugation", "https://www.spanishdict.com/conjugation", "docs"),
        s("Spanish conjugation", "https://en.wikipedia.org/wiki/Spanish_conjugation", "article"),
        s(
          "Subjunctive mood",
          "https://en.wikipedia.org/wiki/Subjunctive_mood",
          "article",
          "Background reading on Subjunctive mood for this step.",
        ),
      ],
    ),
    st(
      "fluency",
      "advanced",
      "Towards fluency",
      "Reading literature, regional variation and the long tail of vocabulary.",
      "Read a short story in Spanish and discuss it.",
      [
        s("Instituto Cervantes", "https://www.cervantes.es/default.htm", "docs"),
        s("Language immersion", "https://en.wikipedia.org/wiki/Language_immersion", "article"),
        s(
          "Language proficiency",
          "https://en.wikipedia.org/wiki/Language_proficiency",
          "article",
          "Background reading on Language proficiency for this step.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("One minute introduction", "Record a spoken self-introduction and compare with a native speaker."),
      p("Core deck", "Build a 500 word core vocabulary deck and use it daily for a month."),
      p("Daily journal", "Five sentences a day in Spanish for a month."),
    ],
    intermediate: [
      p("Input log", "Twenty hours of comprehensible input with a log of what you understood."),
      p("Speaking practice", "Three thirty minute conversations with a tutor, recorded."),
      p("Tandem exchange", "A weekly exchange with a native speaker, recorded."),
    ],
    advanced: [
      p("Read a novel", "Read a Spanish novel and summarise it in Spanish."),
      p("Write and get corrected", "Write ten short texts and have a native speaker correct them."),
      p("Subtitles off", "Finish a series season with Spanish subtitles, then without."),
    ],
  },
})

export const publicSpeaking = defineTopic({
  name: "public-speaking",
  prettyName: "Public Speaking",
  category: "Humanities",
  aliases: ["presenting", "talks", "speech", "communication", "speaking"],
  topicSummary:
    "Speaking in public is a skill you can rehearse. Structure the talk, practise it out loud and get used to the physical nerves — confidence is a by-product, not a prerequisite.",
  steps: [
    st(
      "structure",
      "beginner",
      "Structure",
      "A clear through-line, a strong opening and a landing that says something.",
      "Write a three minute talk with one clear point.",
      [
        s("Speaking.io", "https://speaking.io/", "docs", "Practical advice on technical talks."),
        s("Rhetoric", "https://en.wikipedia.org/wiki/Rhetoric", "article"),
        s(
          "Three-act structure",
          "https://en.wikipedia.org/wiki/Three-act_structure",
          "article",
          "Background reading on Three-act structure for this step.",
        ),
        s(
          "Six Minutes — speaking skills",
          "https://sixminutes.dlugan.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "practice",
      "beginner",
      "Practice out loud",
      "Rehearsing aloud is the only thing that reliably reduces nerves.",
      "Deliver the same talk five times, each time improving one thing.",
      [
        s("Toastmasters", "https://www.toastmasters.org/", "course"),
        s("Public speaking", "https://en.wikipedia.org/wiki/Public_speaking", "article"),
        s(
          "Crash Course — Communication",
          "https://www.youtube.com/@crashcourse",
          "video",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "slides",
      "intermediate",
      "Visuals",
      "Slides that support a talk instead of competing with it.",
      "Cut your slide count in half without losing content.",
      [
        s("Presentation Zen", "https://www.presentationzen.com/", "article"),
        s("Presentation slide", "https://en.wikipedia.org/wiki/Presentation_slide", "article"),
        s(
          "Slide show",
          "https://en.wikipedia.org/wiki/Slide_show",
          "article",
          "Background reading on Slide show for this step.",
        ),
        s(
          "Duarte — presentation resources",
          "https://www.duarte.com/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "presence",
      "intermediate",
      "Voice and presence",
      "Pace, pauses, eye contact and managing the physical symptoms of nerves.",
      "Control your speaking pace through a whole talk.",
      [
        s("TED — Talks", "https://www.ted.com/talks", "video"),
        s("Toastmasters — Resources", "https://www.toastmasters.org/resources", "docs"),
        s(
          "Body language",
          "https://en.wikipedia.org/wiki/Body_language",
          "article",
          "Background reading on Body language for this step.",
        ),
        s(
          "Coursera — public speaking",
          "https://www.coursera.org/",
          "course",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "questions",
      "intermediate",
      "Questions and handling the room",
      "Q&A, hecklers, technical failure and the unexpected.",
      "Handle a difficult question without losing your thread.",
      [
        s("Impromptu speaking", "https://en.wikipedia.org/wiki/Impromptu_speaking", "article"),
        s("TED (conference)", "https://en.wikipedia.org/wiki/TED_(conference)", "article"),
        s(
          "Active listening",
          "https://en.wikipedia.org/wiki/Active_listening",
          "article",
          "Background reading on Active listening for this step.",
        ),
        s(
          "National Communication Association",
          "https://www.natcom.org/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
    st(
      "advanced",
      "advanced",
      "Keynotes and storytelling",
      "Long-form talks, humour, narrative and speaking as a career.",
      "Give a talk someone remembers a week later.",
      [
        s("Storytelling", "https://en.wikipedia.org/wiki/Storytelling", "article"),
        s("Presentation", "https://en.wikipedia.org/wiki/Presentation", "article"),
        s(
          "Dale Carnegie — speaking tips",
          "https://www.dalecarnegie.com/",
          "article",
          "Extra source for this step — practise here, or keep it as a reference.",
        ),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Three minute talk", "Write and deliver a three minute talk to one person."),
      p("Daily recording", "Record one minute a day for two weeks and review each one."),
      p("Read aloud", "Record a page a day, working on pace and pauses."),
    ],
    intermediate: [
      p("One idea per slide", "Build a deck where every slide makes exactly one point."),
      p("Hard questions on camera", "Answer five difficult questions on video and watch yourself."),
      p("Impromptu drills", "Answer a random question in sixty seconds, daily."),
    ],
    advanced: [
      p("Twenty minute keynote", "Deliver a keynote at a meetup or a company event."),
      p("Tell a story", "Build a talk around one personal story with a technical point."),
      p("Coach someone", "Help a colleague prepare a talk and give structured feedback."),
    ],
  },
})
