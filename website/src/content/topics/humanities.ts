import { defineTopic, s, st } from "../helpers"

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
        s("Noba Project", "https://nobaproject.com/", "book", "Free modular psychology textbook written by experts."),
      ],
    ),
    st(
      "biological",
      "beginner",
      "Biological psychology",
      "Neurons, hormones and the biological machinery behind behaviour and emotion.",
      "Explain a behaviour in terms of its biological mechanism.",
      [
        s("Noba Project — Biological Basis", "https://nobaproject.com/", "book"),
        s("Simply Psychology", "https://www.simplypsychology.org/", "article"),
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
        s("Noba Project", "https://nobaproject.com/", "book"),
      ],
    ),
    st(
      "social",
      "intermediate",
      "Social psychology",
      "Conformity, persuasion, groups and the situations that shape behaviour.",
      "Recognise a social influence effect in the wild.",
      [
        s("OpenStax — Psychology 2e", "https://openstax.org/details/books/psychology-2e", "book"),
        s("Simply Psychology — Social", "https://www.simplypsychology.org/", "article"),
      ],
    ),
    st(
      "research-literacy",
      "intermediate",
      "Research literacy",
      "Replication, effect sizes, preregistration and how to read a study without being fooled.",
      "Critique a psychology headline and find the paper behind it.",
      [
        s("Noba Project — Research Methods", "https://nobaproject.com/", "book"),
        s("Retraction Watch", "https://retractionwatch.com/", "article"),
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
        s("OpenStax — Psychology 2e", "https://openstax.org/details/books/psychology-2e", "book"),
      ],
    ),
  ],
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
        s("OpenStax — Introduction to Philosophy", "https://openstax.org/details/books/introduction-philosophy", "book"),
      ],
    ),
    st(
      "logic",
      "beginner",
      "Logic and argument",
      "Validity, soundness, fallacies and how to take an argument apart.",
      "Formalise an argument and find its weakest premise.",
      [
        s("Internet Encyclopedia of Philosophy — Logic", "https://iep.utm.edu/", "docs"),
        s("Philosophy Basics", "https://www.philosophybasics.com/", "article"),
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
        s("OpenStax — Ethics", "https://openstax.org/details/books/introduction-philosophy", "book"),
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
        s("Internet Encyclopedia of Philosophy", "https://iep.utm.edu/", "docs"),
      ],
    ),
    st(
      "contemporary",
      "advanced",
      "Contemporary philosophy",
      "Political philosophy, philosophy of science and the live debates in journals.",
      "Follow a contemporary debate and take a defensible position.",
      [
        s("PhilPapers", "https://philpapers.org/", "paper"),
        s("Stanford Encyclopedia of Philosophy", "https://plato.stanford.edu/", "docs"),
      ],
    ),
  ],
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
        s("Crash Course — World History", "https://www.youtube.com/@crashcourse", "video", "Fast, entertaining overview series."),
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
        s("JSTOR", "https://www.jstor.org/", "paper"),
      ],
    ),
    st(
      "historiography",
      "intermediate",
      "Historiography",
      "How interpretations of the past change over time, and why historians disagree.",
      "Compare two historians' accounts of the same event.",
      [
        s("Internet Encyclopedia of Philosophy — History", "https://iep.utm.edu/", "docs"),
        s("The American Historical Review", "https://academic.oup.com/ahr", "paper"),
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
        s("Crash Course — Historical Thinking", "https://www.youtube.com/@crashcourse", "video"),
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
        s("JSTOR — Open Community Collections", "https://www.jstor.org/", "paper"),
      ],
    ),
  ],
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
        s("Open Music Theory", "https://openmusictheory.github.io/", "book", "Free, modern textbook."),
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
      ],
    ),
    st(
      "harmony",
      "intermediate",
      "Chords and harmony",
      "Triads, chord progressions and functional harmony — why some changes feel like home.",
      "Write a chord progression and explain its function.",
      [
        s("Open Music Theory — Harmony", "https://openmusictheory.github.io/", "book"),
        s("Hooktheory", "https://www.hooktheory.com/", "interactive"),
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
      ],
    ),
    st(
      "composition",
      "intermediate",
      "Composition",
      "Melody, form, voicing and arranging your own ideas.",
      "Finish a short original piece and get feedback on it.",
      [
        s("Open Music Theory — Form", "https://openmusictheory.github.io/", "book"),
        s("Ableton — Learning Music", "https://learningmusic.ableton.com/", "interactive"),
      ],
    ),
    st(
      "advanced",
      "advanced",
      "Advanced theory",
      "Counterpoint, chromatic harmony, jazz theory and 20th century techniques.",
      "Analyse a complex piece and explain what it is doing.",
      [
        s("Open Music Theory", "https://openmusictheory.github.io/", "book"),
        s("musictheory.net", "https://www.musictheory.net/", "interactive"),
      ],
    ),
  ],
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
      ],
    ),
    st(
      "light",
      "intermediate",
      "Light",
      "Natural light, direction, quality and how to read a scene before shooting.",
      "Predict how a subject will look at different times of day.",
      [
        s("Photography Life — Lighting", "https://photographylife.com/", "article"),
        s("Strobist", "https://strobist.blogspot.com/", "article", "Classic free course on lighting."),
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
        s("Digital Photography School — Editing", "https://digital-photography-school.com/", "article"),
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
      ],
    ),
    st(
      "professional",
      "advanced",
      "Professional practice",
      "Clients, contracts, pricing and building a portfolio that gets work.",
      "Shoot a paid assignment end to end.",
      [
        s("Photography Life — Business", "https://photographylife.com/", "article"),
        s("LensCulture — Advice", "https://www.lensculture.com/", "article"),
      ],
    ),
  ],
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
        s("Language Transfer — Spanish", "https://www.languagetransfer.org/", "video", "Free audio course that builds understanding fast."),
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
        s("Language Transfer", "https://www.languagetransfer.org/", "video"),
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
        s("StudySpanish — Subjunctive", "https://studyspanish.com/grammar", "course"),
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
        s("Radio Ambulante", "https://radioambulante.org/", "video"),
      ],
    ),
  ],
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
        s("TED — Ideas", "https://www.ted.com/talks", "video"),
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
        s("Speaking.io — Delivery", "https://speaking.io/", "docs"),
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
        s("Speaking.io — Slides", "https://speaking.io/", "docs"),
      ],
    ),
    st(
      "presence",
      "intermediate",
      "Voice and presence",
      "Pace, pauses, eye contact and managing the physical symptoms of nerves.",
      "Control your speaking pace through a whole talk.",
      [
        s("TED — Masterclass", "https://www.ted.com/talks", "video"),
        s("Toastmasters — Resources", "https://www.toastmasters.org/resources", "docs"),
      ],
    ),
    st(
      "questions",
      "intermediate",
      "Questions and handling the room",
      "Q&A, hecklers, technical failure and the unexpected.",
      "Handle a difficult question without losing your thread.",
      [
        s("Speaking.io — Q&A", "https://speaking.io/", "docs"),
        s("TED — Talks", "https://www.ted.com/talks", "video"),
      ],
    ),
    st(
      "advanced",
      "advanced",
      "Keynotes and storytelling",
      "Long-form talks, humour, narrative and speaking as a career.",
      "Give a talk someone remembers a week later.",
      [
        s("TED — Masterclass", "https://www.ted.com/talks", "video"),
        s("Presentation Zen", "https://www.presentationzen.com/", "article"),
      ],
    ),
  ],
})
