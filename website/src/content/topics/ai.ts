import { defineTopic, p, s, st } from "../helpers"

// Machine learning and everything built on top of it.

export const machineLearning = defineTopic({
  name: "machine-learning",
  prettyName: "Machine Learning",
  category: "AI & Data",
  aliases: ["ml", "ai", "artificial intelligence", "scikit-learn", "models"],
  topicSummary:
    "Machine learning is fitting models to data so they generalise to new data. Start with the classical methods on small datasets — they teach the concepts that deep learning later scales up.",
  steps: [
    st(
      "foundations",
      "beginner",
      "Foundations",
      "What learning from data means: features, labels, loss, training and generalisation. No code needed yet.",
      "Explain overfitting and why a test set exists.",
      [
        s("Google — Machine Learning Crash Course", "https://developers.google.com/machine-learning/crash-course", "course", "Short, practical, free."),
        s("Kaggle — Intro to Machine Learning", "https://www.kaggle.com/learn/intro-to-machine-learning", "interactive"),
      ],
    ),
    st(
      "first-models",
      "beginner",
      "Your first models",
      "Linear and logistic regression, decision trees and nearest neighbours using scikit-learn.",
      "Train, evaluate and compare three models on a real dataset.",
      [
        s("scikit-learn — User Guide", "https://scikit-learn.org/stable/user_guide.html", "docs"),
        s("An Introduction to Statistical Learning", "https://www.statlearning.com/", "book", "Free and rigorous, with labs in R and Python."),
      ],
    ),
    st(
      "evaluation",
      "intermediate",
      "Evaluation and data quality",
      "Cross validation, metrics, leakage and class imbalance. Most ML failures are evaluation failures.",
      "Design an evaluation that would catch a model fooling itself.",
      [
        s("scikit-learn — Model Evaluation", "https://scikit-learn.org/stable/model_selection.html", "docs"),
        s("Kaggle — Intermediate Machine Learning", "https://www.kaggle.com/learn/intermediate-machine-learning", "interactive"),
      ],
    ),
    st(
      "feature-engineering",
      "intermediate",
      "Features and pipelines",
      "Preprocessing, encoding, feature selection and reproducibility with pipelines.",
      "Build a reproducible training pipeline from raw data to predictions.",
      [
        s("scikit-learn — Preprocessing", "https://scikit-learn.org/stable/modules/preprocessing.html", "docs"),
        s("Kaggle — Feature Engineering", "https://www.kaggle.com/learn/feature-engineering", "interactive"),
      ],
    ),
    st(
      "ml-in-practice",
      "intermediate",
      "Machine learning in production",
      "Serving models, monitoring drift and knowing when a model should not be shipped.",
      "Deploy a small model behind an API and monitor it.",
      [
        s("Google — Rules of Machine Learning", "https://developers.google.com/machine-learning/guides/rules-of-ml", "article"),
        s("Coursera — Machine Learning Specialization", "https://www.coursera.org/specializations/machine-learning-introduction", "course"),
      ],
    ),
    st(
      "theory",
      "advanced",
      "Theory and mathematics",
      "Bias–variance decomposition, regularisation, probabilistic foundations and statistical learning theory.",
      "Read a learning theory result and know what it claims.",
      [
        s("Mathematics for Machine Learning", "https://mml-book.github.io/", "book"),
        s("The Elements of Statistical Learning", "https://hastie.su.domains/ElemStatLearn/", "book"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("First classifier", "Train on a tabular dataset and report accuracy, confusion matrix and what it gets wrong."),
      p("Linear regression from scratch", "Implement gradient descent and compare with scikit-learn."),
    ],
    intermediate: [
      p("End-to-end pipeline", "Clean, engineer features, validate and explain a model to a non-expert."),
      p("Deployed model", "Serve a model behind an API with logging and a drift check."),
    ],
    advanced: [
      p("Reproduce a result", "Reproduce a small result from a paper and report where you differed."),
      p("Theory notebook", "Derive the bias-variance trade-off and check it with experiments."),
    ],
  },

})

export const deepLearning = defineTopic({
  name: "deep-learning",
  prettyName: "Deep Learning",
  category: "AI & Data",
  aliases: ["neural networks", "pytorch", "tensorflow", "nn"],
  topicSummary:
    "Deep learning is machine learning with large, layered function approximators trained by gradient descent. It is surprisingly little theory and a lot of careful engineering.",
  steps: [
    st(
      "neural-nets",
      "beginner",
      "Neural networks from scratch",
      "Perceptrons, activation functions, forward and backward propagation. Build one by hand before using a framework.",
      "Implement a small network with only NumPy and get it to learn XOR.",
      [
        s("Neural Networks and Deep Learning (Nielsen)", "http://neuralnetworksanddeeplearning.com/", "book", "Free, explains backprop clearly."),
        s("3Blue1Brown — Neural Networks", "https://www.3blue1brown.com/topics/neural-networks", "video"),
      ],
    ),
    st(
      "pytorch",
      "beginner",
      "A deep learning framework",
      "Tensors, autograd and the training loop. Pick one framework and become fluent in it.",
      "Train a small model on your own dataset.",
      [
        s("PyTorch — Learn the Basics", "https://pytorch.org/tutorials/beginner/basics/intro.html", "docs"),
        s("Dive into Deep Learning (D2L)", "https://d2l.ai/", "book", "Free, interactive and broad."),
      ],
    ),
    st(
      "training",
      "intermediate",
      "Training that actually works",
      "Learning rate schedules, regularisation, normalisation, batching and debugging a loss curve.",
      "Diagnose why a model is not training and fix it.",
      [
        s("Deep Learning Book", "https://www.deeplearningbook.org/", "book", "The reference text for the field."),
        s("Andrej Karpathy — Neural Networks: Zero to Hero", "https://karpathy.ai/zero-to-hero.html", "video", "Build everything from scratch, line by line."),
      ],
    ),
    st(
      "architectures",
      "intermediate",
      "Architectures",
      "Convolutional networks, recurrent networks, attention and transformers — and when each is appropriate.",
      "Pick an architecture for a new problem and explain the trade-off.",
      [
        s("Convolutional neural network", "https://en.wikipedia.org/wiki/Convolutional_neural_network", "article"),
        s("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "article"),
      ],
    ),
    st(
      "engineering",
      "intermediate",
      "Practical engineering",
      "GPUs, data loaders, experiment tracking and reproducibility. Deep learning is mostly infrastructure.",
      "Run reproducible experiments across multiple runs.",
      [
        s("Weights & Biases — Guides", "https://wandb.ai/site/guides", "docs"),
        s("PyTorch — Recipes", "https://pytorch.org/tutorials/recipes/recipes_index.html", "docs"),
      ],
    ),
    st(
      "research",
      "advanced",
      "Reading and reproducing papers",
      "Papers with code, benchmarks and the habit of reimplementing results to understand them.",
      "Reimplement a small paper's core idea from its description.",
      [
        s("Papers with Code", "https://paperswithcode.com/", "docs"),
        s("fast.ai — Practical Deep Learning", "https://course.fast.ai/", "course"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("MLP from scratch", "Forward and backward passes in NumPy, then train it."),
      p("MNIST in PyTorch", "Reach 98% and explain every line of the training loop."),
    ],
    intermediate: [
      p("Transfer learning", "Fine-tune a pretrained model on your own small dataset."),
      p("Training toolkit", "Add schedulers, augmentation and experiment tracking to your loop."),
    ],
    advanced: [
      p("Reproduce a paper", "Pick a paper with code and reproduce its main table."),
      p("Attention from scratch", "Implement multi-head attention and train a tiny transformer."),
    ],
  },

})

export const largeLanguageModels = defineTopic({
  name: "large-language-models",
  prettyName: "Large Language Models",
  category: "AI & Data",
  aliases: ["llm", "gpt", "transformers", "prompting", "generative ai"],
  topicSummary:
    "Large language models are transformer networks trained to predict the next token, which turns out to be enough for translation, coding and reasoning-like behaviour. Learn the architecture, then the practical craft of getting them to do useful work.",
  steps: [
    st(
      "how-they-work",
      "beginner",
      "How LLMs work",
      "Tokens, embeddings, attention and next-token prediction. One good mental model saves months of confusion.",
      "Explain why an LLM sometimes makes things up.",
      [
        s("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "article"),
        s("Attention Is All You Need", "https://arxiv.org/abs/1706.03762", "paper", "The original transformer paper."),
      ],
    ),
    st(
      "prompting",
      "beginner",
      "Prompting well",
      "Clear instructions, examples, decomposition and structured output. Prompting is engineering, not magic words.",
      "Write prompts that reliably produce structured, correct output.",
      [
        s("Prompt Engineering Guide", "https://www.promptingguide.ai/", "docs"),
        s("Anthropic — Prompt Engineering", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", "docs"),
      ],
    ),
    st(
      "building",
      "intermediate",
      "Building with an API",
      "Chat completions, tool use, streaming and cost/latency trade-offs in a real application.",
      "Ship a small application that uses an LLM API safely.",
      [
        s("OpenAI — API documentation", "https://platform.openai.com/docs/", "docs"),
        s("Hugging Face — LLM Course", "https://huggingface.co/learn/llm-course/chapter1/1", "course"),
      ],
    ),
    st(
      "rag-and-agents",
      "intermediate",
      "Retrieval and agents",
      "Embeddings, vector search, retrieval augmented generation and tool-using agents.",
      "Build a RAG system that answers questions about your own documents.",
      [
        s("Lilian Weng — LLM Powered Autonomous Agents", "https://lilianweng.github.io/posts/2023-06-23-agent/", "article"),
        s("LangChain — Documentation", "https://python.langchain.com/docs/get_started/introduction", "docs"),
      ],
    ),
    st(
      "training",
      "advanced",
      "Training and fine-tuning",
      "Pretraining, supervised fine-tuning, LoRA and preference optimisation.",
      "Fine-tune a small open model on a custom dataset.",
      [
        s("Hugging Face — Transformers Course", "https://huggingface.co/learn/llm-course", "course"),
        s("nanoGPT", "https://github.com/karpathy/nanoGPT", "practice", "Train a small GPT from scratch."),
      ],
    ),
    st(
      "frontier",
      "advanced",
      "The research frontier",
      "Scaling laws, evaluation, alignment and the open questions nobody has settled.",
      "Follow the field's debates with enough context to form your own view.",
      [
        s("arXiv — Computation and Language", "https://arxiv.org/list/cs.CL/recent", "paper"),
        s("Anthropic — Research", "https://www.anthropic.com/research", "article"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Prompt library", "Twenty prompts with a rubric so you can tell which ones are actually better."),
      p("Explain the stack", "Explain tokens, embeddings and attention to someone with no background."),
    ],
    intermediate: [
      p("Notes assistant", "A retrieval assistant over your own notes that cites its sources."),
      p("Evaluation harness", "A test set and a score for three prompts or models."),
    ],
    advanced: [
      p("Fine-tune a small model", "Fine-tune on a task and measure the improvement against the base model."),
      p("Reproduce an experiment", "Reproduce a small experiment from an LLM paper and report the gaps."),
    ],
  },

})

export const naturalLanguageProcessing = defineTopic({
  name: "natural-language-processing",
  prettyName: "Natural Language Processing",
  category: "AI & Data",
  aliases: ["nlp", "text", "language models", "linguistics ai"],
  topicSummary:
    "NLP is getting computers to work with human language: classification, extraction, translation and generation. Modern NLP is mostly neural, but the classical baselines still tell you whether a problem is real.",
  steps: [
    st(
      "text-basics",
      "beginner",
      "Working with text",
      "Tokenisation, normalisation, regular expressions and bag-of-words baselines.",
      "Build a text classifier with a solid baseline.",
      [
        s("NLTK Book", "https://www.nltk.org/book/", "book", "Free classic, teaches the fundamentals properly."),
        s("spaCy — Usage", "https://spacy.io/usage", "docs"),
      ],
    ),
    st(
      "embeddings",
      "beginner",
      "Vectors for words",
      "Word and sentence embeddings, similarity and semantic search.",
      "Find similar documents using embeddings.",
      [
        s("Hugging Face — NLP Course", "https://huggingface.co/learn/llm-course", "course"),
        s("spaCy — Embeddings", "https://spacy.io/usage/embeddings-transformers", "docs"),
      ],
    ),
    st(
      "neural-nlp",
      "intermediate",
      "Neural NLP",
      "Sequence models, attention and fine-tuning pretrained transformers for your task.",
      "Fine-tune a transformer for classification or extraction.",
      [
        s("Stanford CS224N", "https://web.stanford.edu/class/cs224n/", "course", "The standard university course on NLP."),
        s("Hugging Face — Transformers", "https://huggingface.co/docs/transformers/index", "docs"),
      ],
    ),
    st(
      "tasks",
      "intermediate",
      "Real NLP tasks",
      "Named entity recognition, summarisation, translation and question answering with modern tooling.",
      "Pick the right model and metric for a real product task.",
      [
        s("Named-entity recognition", "https://en.wikipedia.org/wiki/Named-entity_recognition", "article"),
        s("Hugging Face — Tasks", "https://huggingface.co/tasks", "docs"),
      ],
    ),
    st(
      "evaluation",
      "intermediate",
      "Evaluation",
      "Precision, recall, F1, BLEU, ROUGE and human evaluation. Language tasks are easy to measure badly.",
      "Design an evaluation for a task without a single right answer.",
      [
        s("BLEU", "https://en.wikipedia.org/wiki/BLEU", "article"),
        s("Hugging Face — Evaluate", "https://huggingface.co/docs/evaluate/index", "docs"),
      ],
    ),
    st(
      "research",
      "advanced",
      "Research in NLP",
      "Benchmarks, low-resource languages and the current state of the art.",
      "Read ACL papers and place a result in context.",
      [
        s("ACL Anthology", "https://aclanthology.org/", "paper"),
        s("arXiv — Computation and Language", "https://arxiv.org/list/cs.CL/recent", "paper"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Text pipeline", "Tokenise, clean and analyse a corpus you care about."),
      p("Embedding exploration", "Train word vectors and inspect what ends up next to what."),
    ],
    intermediate: [
      p("Classification model", "Fine-tune a transformer for a task with your own labelled data."),
      p("Evaluation harness", "Build a held-out evaluation with an error analysis section."),
    ],
    advanced: [
      p("Reproduce an NLP result", "Reproduce a published result and analyse the failures."),
      p("Tokenizer study", "Compare three tokenizers on a domain corpus and measure the damage."),
    ],
  },

})

export const computerVision = defineTopic({
  name: "computer-vision",
  prettyName: "Computer Vision",
  category: "AI & Data",
  aliases: ["cv", "images", "opencv", "image recognition", "cnn"],
  topicSummary:
    "Computer vision teaches machines to extract meaning from images and video. Convolutional networks and transformers handle most of it now, but the classical geometry still explains why.",
  steps: [
    st(
      "images",
      "beginner",
      "Images as data",
      "Pixels, colour spaces, filtering and edges. OpenCV makes the fundamentals concrete.",
      "Load, transform and filter an image in code.",
      [
        s("OpenCV — Python Tutorials", "https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html", "docs"),
        s("Kaggle — Computer Vision", "https://www.kaggle.com/learn/computer-vision", "interactive"),
      ],
    ),
    st(
      "classical",
      "beginner",
      "Classical computer vision",
      "Features, keypoints, matching and camera geometry — still used everywhere in production pipelines.",
      "Match features between two images and estimate a transform.",
      [
        s("OpenCV — Feature Detection", "https://docs.opencv.org/4.x/db/d27/tutorial_py_table_of_contents_feature2d.html", "docs"),
        s("Szeliski — Computer Vision", "https://szeliski.org/Book/", "book", "Free draft of the standard textbook."),
      ],
    ),
    st(
      "cnns",
      "intermediate",
      "Convolutional networks",
      "Convolutions, pooling and transfer learning for image classification.",
      "Fine-tune a pretrained CNN on your own images.",
      [
        s("Stanford CS231n", "https://cs231n.github.io/", "course", "Course notes everyone learns vision from."),
        s("PyTorch — Transfer Learning", "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html", "docs"),
      ],
    ),
    st(
      "detection",
      "intermediate",
      "Detection and segmentation",
      "Bounding boxes, segmentation masks and the models that produce them.",
      "Run a detector on a video and count objects over time.",
      [
        s("PyTorch — TorchVision Models", "https://pytorch.org/vision/stable/models.html", "docs"),
        s("Ultralytics — YOLO Docs", "https://docs.ultralytics.com/", "docs"),
      ],
    ),
    st(
      "generative",
      "intermediate",
      "Generative vision",
      "Diffusion models, image generation and multimodal models that connect text and images.",
      "Explain how a diffusion model turns noise into an image.",
      [
        s("Hugging Face — Diffusion Course", "https://huggingface.co/learn/diffusion-course/unit0/introduction", "course"),
        s("Lilian Weng — Diffusion Models", "https://lilianweng.github.io/posts/2021-07-11-diffusion-models/", "article"),
      ],
    ),
    st(
      "research",
      "advanced",
      "Research frontiers",
      "3D reconstruction, video understanding and how generative images are evaluated.",
      "Reproduce a vision paper's key result on a small dataset.",
      [
        s("arXiv — Computer Vision", "https://arxiv.org/list/cs.CV/recent", "paper"),
        s("Papers with Code — Computer Vision", "https://paperswithcode.com/area/computer-vision", "docs"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Filters by hand", "Implement convolution, blur and edge detection without a library."),
      p("Small image classifier", "Train a CNN on a dataset you collected yourself."),
    ],
    intermediate: [
      p("Object detector", "Fine-tune YOLO on a custom dataset and evaluate it."),
      p("Segmentation", "Segment a real image set and score it with IoU."),
    ],
    advanced: [
      p("Reproduce a vision paper", "Reproduce a result and report the numbers honestly."),
      p("Deploy on the edge", "Run a model on a phone or a small board at a usable frame rate."),
    ],
  },

})

export const reinforcementLearning = defineTopic({
  name: "reinforcement-learning",
  prettyName: "Reinforcement Learning",
  category: "AI & Data",
  aliases: ["rl", "agents", "gym", "reward"],
  topicSummary:
    "Reinforcement learning is learning to act from reward. Instead of labelled examples you get a score, which makes the problem harder and the results, when they work, remarkable.",
  steps: [
    st(
      "foundations",
      "beginner",
      "The RL problem",
      "Agents, environments, states, actions and rewards — the formal setup behind every algorithm.",
      "Describe a problem as a Markov decision process.",
      [
        s("Spinning Up in Deep RL", "https://spinningup.openai.com/en/latest/", "course", "Clear, code-first introduction."),
        s("Hugging Face — Deep RL Course", "https://huggingface.co/learn/deep-rl-course/unit0/introduction", "course"),
      ],
    ),
    st(
      "bandits",
      "beginner",
      "Bandits and value",
      "Multi-armed bandits, policies and value functions. The smallest setting that teaches the core idea.",
      "Implement exploration strategies for a simple decision problem.",
      [
        s("Sutton & Barto — Reinforcement Learning", "http://incompleteideas.net/book/the-book-2nd.html", "book", "The free canonical textbook."),
        s("Multi-armed bandit", "https://en.wikipedia.org/wiki/Multi-armed_bandit", "article"),
      ],
    ),
    st(
      "tabular",
      "intermediate",
      "Dynamic programming and Q-learning",
      "Policy and value iteration, temporal difference learning and Q-learning in a grid world.",
      "Train an agent to solve a small maze from scratch.",
      [
        s("Q-learning", "https://en.wikipedia.org/wiki/Q-learning", "article"),
        s("Markov decision process", "https://en.wikipedia.org/wiki/Markov_decision_process", "article"),
      ],
    ),
    st(
      "deep-rl",
      "intermediate",
      "Deep reinforcement learning",
      "DQN, policy gradients, actor-critic and the tricks that make training stable.",
      "Get a deep RL agent training without diverging.",
      [
        s("Spinning Up — Algorithms", "https://spinningup.openai.com/en/latest/algorithms/index.html", "docs"),
        s("David Silver — RL Course", "https://www.davidsilver.uk/teaching/", "course"),
      ],
    ),
    st(
      "practice",
      "intermediate",
      "Solve an environment",
      "Pick an environment, set up logging and iterate. RL is a debugging discipline more than a theory discipline.",
      "Beat a baseline score on a standard environment.",
      [
        s("Gymnasium — Environments", "https://gymnasium.farama.org/", "practice"),
        s("Stable-Baselines3", "https://stable-baselines3.readthedocs.io/en/master/", "docs"),
      ],
    ),
    st(
      "research",
      "advanced",
      "Research and LLM agents",
      "Offline RL, model-based methods and RLHF, the technique behind aligned language models.",
      "Read an RL paper's algorithm section and reproduce the core loop.",
      [
        s("arXiv — Machine Learning", "https://arxiv.org/list/cs.LG/recent", "paper"),
        s("Reinforcement learning", "https://en.wikipedia.org/wiki/Reinforcement_learning", "article"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Multi-armed bandit", "Compare epsilon-greedy with UCB on a simulated bandit."),
      p("Gridworld value iteration", "Implement it and draw the policy it finds."),
    ],
    intermediate: [
      p("DQN on CartPole", "Train it and plot the learning curve with the seeds you used."),
      p("Solve one environment", "Pick an environment, tune it and document every change."),
    ],
    advanced: [
      p("Tool-using agent", "Build an LLM agent with tools and an evaluation suite."),
      p("Reproduce an RL paper", "Reproduce a result and write down what did not transfer."),
    ],
  },

})

export const dataScience = defineTopic({
  name: "data-science",
  prettyName: "Data Science",
  category: "AI & Data",
  aliases: ["data analysis", "pandas", "analytics", "jupyter", "datascience"],
  topicSummary:
    "Data science is the practical craft of answering questions with data: cleaning it, exploring it, modelling it and communicating what you found without overclaiming.",
  steps: [
    st(
      "tooling",
      "beginner",
      "Python and notebooks",
      "Python fundamentals, Jupyter and the workflow of an analysis you can rerun.",
      "Produce a clean notebook that loads and explores a dataset.",
      [
        s("Kaggle — Python", "https://www.kaggle.com/learn/python", "interactive"),
        s("Jupyter — Documentation", "https://docs.jupyter.org/en/latest/", "docs"),
      ],
    ),
    st(
      "pandas",
      "beginner",
      "Data wrangling",
      "Load, clean, join and reshape tabular data — usually 80% of the work.",
      "Turn a messy CSV into an analysis-ready table.",
      [
        s("Pandas — User Guide", "https://pandas.pydata.org/docs/user_guide/index.html", "docs"),
        s("Python Data Science Handbook", "https://jakevdp.github.io/PythonDataScienceHandbook/", "book", "Free online."),
      ],
    ),
    st(
      "exploration",
      "intermediate",
      "Exploratory analysis",
      "Descriptive statistics, distributions and plots that reveal what the data actually looks like.",
      "Find and explain an unexpected pattern in a dataset.",
      [
        s("Kaggle — Data Visualization", "https://www.kaggle.com/learn/data-visualization", "interactive"),
        s("Exploratory data analysis", "https://en.wikipedia.org/wiki/Exploratory_data_analysis", "article"),
      ],
    ),
    st(
      "modelling",
      "intermediate",
      "Modelling and prediction",
      "Train, validate and interpret models to answer a question rather than to chase a leaderboard.",
      "Build a model and communicate its uncertainty honestly.",
      [
        s("An Introduction to Statistical Learning", "https://www.statlearning.com/", "book"),
        s("Kaggle — Machine Learning", "https://www.kaggle.com/learn/intro-to-machine-learning", "interactive"),
      ],
    ),
    st(
      "sql-and-scale",
      "intermediate",
      "SQL and bigger data",
      "Most company data lives in a warehouse behind SQL. Learn to query it before reaching for a dataframe.",
      "Answer a business question directly from a warehouse.",
      [
        s("Mode SQL Tutorial", "https://mode.com/sql-tutorial/", "course"),
        s("SQLBolt", "https://sqlbolt.com/", "interactive"),
      ],
    ),
    st(
      "communication",
      "advanced",
      "Communicating results",
      "Dashboards, reports, causal language and the ethics of presenting data you did not collect.",
      "Present a finding to a non-technical audience without misleading them.",
      [
        s("Storytelling with Data", "https://www.storytellingwithdata.com/", "article"),
        s("Kaggle — Data Cleaning", "https://www.kaggle.com/learn/data-cleaning", "interactive"),
      ],
    ),
  ],
  projects: {
    beginner: [
      p("Clean a messy CSV", "Turn a dirty dataset into a tidy one with a documented, re-runnable script."),
      p("Notebook report", "A notebook that answers three questions with plots and a summary."),
    ],
    intermediate: [
      p("EDA project", "Explore a public dataset nobody has explained to you and write up the findings."),
      p("Model from SQL", "Pull the data with SQL, then build and validate a model on it."),
    ],
    advanced: [
      p("Decision memo", "Turn an analysis into a five slide memo a stakeholder can act on."),
      p("Reproducible pipeline", "Package an analysis so someone else can rerun it from raw data."),
    ],
  },

})
