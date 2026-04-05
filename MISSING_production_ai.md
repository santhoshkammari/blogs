# Missing Topics — 06_Production_MLOps_AI_Engineering + 07_AI_Foundations

After extracting and cross-referencing TOCs from all 6 production/foundations books against the current README, the following topics are **genuinely missing** — topics not covered or inadequately addressed in the roadmap.

---

## From AI_Engineering_Chip_Huyen.pdf

- **Foundation Model Use Cases** — practical applications of foundation models beyond just scaling (Phase 5.4)
- **Post-Training** — instruction tuning, alignment, RLHF at scale for foundation models (Phase 5.4)
- **Sampling** — decoding strategies specific to foundation models: temperature, top-k, top-p, nucleus variants (Phase 5.4)
- **Defensive Prompt Engineering** — prompt injection mitigation, adversarial prompt crafting (Phase 5.5)
- **Memory Systems for Agents** — long-term memory architectures, retrieval mechanisms, conversational state management (Phase 5.4)
- **Data Curation for AI Systems** — selective sampling, curriculum learning, data quality assessment for foundation models (Phase 5.4)
- **Data Synthesis and Augmentation** — synthetic data generation pipelines, distillation from larger models (Phase 5.4)

---

## From Building_ML_Powered_Applications.pdf

- **Estimate What Is Possible** — baseline definition, feasibility assessment before building ML systems (Phase 5.2)
- **Framing the ML Problem** — translating business goals into measurable ML objectives (Phase 5.2)
- **Data Exploration and Labeling Workflow** — iterative data discovery, label quality assessment (Phase 5.2)
- **Let Data Inform Features** — using exploratory analysis to guide feature engineering decisions (Phase 5.2)
- **Extracting Recommendations from Models** — converting model outputs to actionable recommendations (Phase 4 or 5.4)
- **Comparing Models** — model selection criteria, tradeoff analysis beyond accuracy (Phase 2.3/5.3)
- **Engineer Around Failures** — graceful degradation, fallback strategies for production models (Phase 5.3)
- **Engineer for Performance** — latency optimization, throughput tuning (Phase 5.3)
- **Empowering Data Scientists to Deploy** — organizational structures, tool democratization (Phase 5.2)

---

## From Designing_ML_Systems_Chip_Huyen.pdf

- **Iterative Process (System Design)** — feedback loops, rapid experimentation, iteration methodology (Phase 5.2)
- **Mind Versus Data** — when to invest in feature engineering vs. larger models; model-centric vs. data-centric paradigms (Phase 5.2)
- **Data Models** — structured data schemas, graph models, hierarchical models (Phase 5.2)
- **Storage Engines and Processing** — database choices for ML, query patterns, indexing (Phase 5.2)
- **Modes of Dataflow** — request-driven vs. event-driven, real-time vs. batch patterns (Phase 5.2)
- **Class Imbalance** — sampling strategies, cost-sensitive learning, synthetic minority oversampling (Phase 2.2)
- **Machine Learning Deployment Myths** — common misconceptions, organizational barriers (Phase 5.3)
- **ML on the Cloud and on the Edge** — infrastructure tradeoffs, deployment architecture decisions (Phase 5.3)
- **Team Structure** — roles (data engineers, ML engineers, ML ops), skill requirements (Phase 5.2)
- **Responsible AI (system-wide)** — bias detection, fairness audits, governance frameworks (Phase 5.5)

---

## From ML_Systems_Textbook.pdf

This comprehensive textbook covers **many advanced topics not in the README**. Below are the most significant:

**Core Missing Areas:**

- **The Bitter Lesson** — systems engineering fundamentals; why scale and data beat hand-crafted features (Phase 5)
- **Historical Evolution of AI Paradigms** — symbolic → statistical → deep learning; paradigm shifts (Phase 5)
- **Core Engineering Challenges** — reproducibility, technical debt, versioning, documentation (Phase 5.2/5.3)
- **Deployment Paradigm Framework** — systematic comparison of cloud/edge/mobile/embedded architectures (Phase 5)
- **Edge ML: Latency & Privacy** — edge deployment constraints, on-device inference optimization (Phase 5.3)
- **Mobile ML** — mobile-specific frameworks, optimization for phones (Phase 5.3)
- **Tiny ML** — extremely resource-constrained devices (IoT, microcontrollers) (Phase 5.3)
- **Hybrid Architectures** — combining cloud, edge, and on-device inference (Phase 5.3)
- **Shared Principles Across Deployment** — common patterns across all deployment paradigms (Phase 5)
- **Deep Learning Systems Engineering Foundation** — systems perspective on DL (Phase 3.1)
- **From Biology to Silicon** — neural inspirations, actual hardware implementations (Phase 3.1)
- **Deep Learning and the AI Triangle** — tradeoff space: compute, data, model complexity (Phase 3.1)
- **Architectural Principles and Engineering Trade-offs** — design decisions, efficiency frontiers (Phase 3.2)
- **System-Level Building Blocks** — residual connections, layer norm, skip connections as patterns (Phase 3.2)
- **Unified Framework: Inductive Biases** — how architectures encode assumptions (Phase 3.2)
- **Data Cascades** — downstream impacts of data quality issues (Phase 5.2)
- **Four Pillars Framework (Data)** — acquisition, ingestion, processing, storage, governance (Phase 5.2)
- **Data Governance** — provenance, lineage, documentation, access control (Phase 5.2)
- **Framework Abstraction and Necessity** — why frameworks exist, abstraction layers (Phase 3.6)
- **Historical Development Trajectory (Frameworks)** — PyTorch/TensorFlow evolution, tooling trends (Phase 3.6)
- **Major Framework Platform Analysis** — deep comparison of PyTorch, TensorFlow, JAX (Phase 3.6)
- **Training Systems Evolution** — how training infrastructure has scaled (Phase 5.2/5.3)
- **Distributed Systems (Training)** — data parallelism, model parallelism, pipeline parallelism (Phase 5.3)
- **Performance Optimization (Training)** — gradient accumulation, mixed precision, checkpointing (Phase 3.1)
- **AI Scaling Laws** — compute, data, parameter scaling relationships; empirical findings (Phase 5.4)
- **The Efficiency Imperative** — carbon, cost, latency efficiency as design drivers (Phase 5.5)
- **Defining System Efficiency** — FLOPs/Watt, latency/throughput, cost per inference (Phase 5.3)
- **Real-World Efficiency Strategies** — pruning, sparsity, hardware codesign (Phase 5.3/5.4)
- **Strategic Trade-off Management** — accuracy vs. latency, energy vs. performance (Phase 5.3)
- **Societal and Ethical Implications (Efficiency)** — carbon footprint, sustainability (Phase 5.5)
- **Structural Model Optimization** — layer dropping, width reduction, block reduction (Phase 5.4)
- **Quantization and Precision** — INT8, INT4, mixed precision, calibration (Phase 5.4)
- **Architectural Efficiency Techniques** — MobileNets, SqueezeNet, ShuffleNet design patterns (Phase 5.4)
- **AutoML and Automated Optimization** — neural architecture search, automated pruning (Phase 5.3)
- **AI Hardware Acceleration Fundamentals** — GPUs, TPUs, accelerators, ASIC design (Phase 5.3)
- **Evolution of Hardware Specialization** — GPU → TPU → specialized AI chips; historical trends (Phase 5.3)
- **AI Compute Primitives** — matrix multiplication, convolution, attention primitives (Phase 5.3)
- **AI Memory Systems** — bandwidth bottlenecks, cache hierarchies, memory-compute codesign (Phase 5.3)
- **Hardware Mapping Fundamentals** — how neural networks map to hardware, roofline models (Phase 5.3)
- **Dataflow Optimization Strategies** — systolic arrays, dataflow graphs, loop optimization (Phase 5.3)
- **Compiler Support** — how compilers map models to hardware (TVM, XLA) (Phase 5.3)
- **Runtime Support** — scheduling, memory management, kernel selection (Phase 5.3)
- **Multi-Chip AI Acceleration** — scaling across multiple chips, communication patterns (Phase 5.3)
- **Heterogeneous SoC AI Acceleration** — mixed CPU/GPU/NPU on single chip (Phase 5.3)
- **Machine Learning Benchmarking Framework** — systematic benchmarking methodology (Phase 5.3)
- **Benchmarking Granularity** — operation-level, end-to-end, application-level benchmarks (Phase 5.3)
- **Benchmark Components** — latency, throughput, power, accuracy-latency curves (Phase 5.3)
- **Training vs. Inference Evaluation** — different metrics, priorities for each (Phase 5.3)
- **Power Measurement Techniques** — how to measure actual power consumption (Phase 5.3)
- **Production Environment Evaluation** — benchmarking in real deployment settings (Phase 5.3)
- **Technical Debt and System Complexity** — hidden costs, velocity degradation over time (Phase 5.2/5.3)
- **Development Infrastructure and Automation** — CI/CD, experiment tracking, reproducibility (Phase 5.3)
- **Production Operations** — monitoring, alerting, incident response (Phase 5.3)
- **Roles and Responsibilities** — ML engineer, ML ops, data engineer, ML platform roles (Phase 5.2)
- **System Design and Maturity Framework** — maturity levels, capability models (Phase 5.3)
- **Federated Learning (distributed)** — data privacy, decentralized training, communication (Phase 5.5)
- **Systems Integration for Production** — federation at scale, heterogeneous devices (Phase 5.5)
- **Persistent Technical Challenges (On-Device)** — model size, latency, battery life (Phase 5.3)
- **Foundational Concepts (Security & Privacy)** — threats, attacks, defense mechanisms (Phase 5.5)
- **Learning from Security Breaches** — case studies, lessons learned (Phase 5.5)
- **Systematic Threat Analysis** — threat modeling for ML systems (Phase 5.5)
- **Model-Specific Attack Vectors** — adversarial examples, model extraction, poisoning (Phase 5.5)
- **Hardware-Level Security** — side channels, timing attacks, physical attacks (Phase 5.5)
- **When ML Systems Become Attack Tools** — ML weaponization, autonomous systems misuse (Phase 5.5)
- **Comprehensive Defense Architectures** — holistic security design (Phase 5.5)
- **Practical Implementation Roadmap** — concrete security strategies (Phase 5.5)
- **Real-World Robustness Failures** — documented cases of ML failures (Phase 5.5)
- **A Unified Framework for Robust AI** — taxonomy of robustness challenges (Phase 5.5)
- **Hardware Faults** — bit flips, transient faults, fault tolerance (Phase 5.5)
- **Intentional Input Manipulation** — adversarial examples, evasion attacks (Phase 5.5)
- **Environmental Shifts** — distribution shift, domain adaptation (Phase 5.5)
- **Input-Level Attacks** — perturbation-based attacks, certified robustness (Phase 5.5)
- **Software Faults** — bugs in ML code, numerical instabilities (Phase 5.5)
- **Fault Injection Tools** — testing frameworks, reliability evaluation (Phase 5.5)
- **Core Principles (Responsible AI)** — fairness, transparency, accountability, privacy (Phase 5.5)
- **Integrating Across ML Lifecycle** — responsible design from problem definition onward (Phase 5.5)
- **Responsible AI Across Deployments** — principles adapted for cloud/edge/mobile (Phase 5.5)
- **Technical Foundations (Fairness)** — bias metrics, debiasing methods, fairness constraints (Phase 5.5)
- **Sociotechnical Dynamics** — how ML systems interact with society (Phase 5.5)
- **AI Safety and Value Alignment** — reward hacking, misalignment, verification (Phase 5.5)
- **Sustainable AI as Engineering Discipline** — systematic sustainability approach (Phase 5.5)
- **The Sustainability Crisis in AI** — compute costs, carbon, e-waste (Phase 5.5)
- **Environmental Impact** — training carbon, inference carbon, supply chain (Phase 5.5)
- **Hardware Lifecycle Assessment** — manufacturing, shipping, recycling impact (Phase 5.5)
- **Embedded AI and E-Waste** — end-of-life device management (Phase 5.5)
- **Policy and Regulation** — governance frameworks, standards (Phase 5.5)
- **Public Engagement** — transparency, stakeholder communication (Phase 5.5)
- **Trustworthy AI Under Constraints** — reliability with limited resources (Phase 5.5)
- **Societal Challenges and Opportunities** — poverty, health, education, climate (Phase 5.5)
- **Sustainable Development Goals Framework** — UN SDGs and ML alignment (Phase 5.5)
- **Design Pattern Framework** — architecture patterns for constrained environments (Phase 5.5)
- **Design Patterns Implementation** — concrete patterns, tradeoffs (Phase 5.5)
- **Theoretical Foundations for Constrained Learning** — sample complexity, generalization bounds (Phase 5.5)
- **Compound AI Systems Framework** — orchestrating multiple models, agents, components (Phase 5.4)
- **Building Blocks for Compound Intelligence** — retrieval, routing, memory, tools (Phase 5.4)
- **Alternative Architectures for AGI** — beyond transformers, modular designs (Phase 5.4)
- **Training Methodologies for Compound Systems** — multi-task, continual learning, curriculum (Phase 5.4)
- **Remaining Technical Barriers (to AGI)** — open problems, unsolved challenges (Phase 5.4)
- **Emergent Intelligence Through Multi-Agent Coordination** — swarms, emergent behavior (Phase 5.4)
- **Engineering Pathways to AGI** — roadmaps, engineering approaches (Phase 5.4)
- **Implications for ML Systems Engineers** — skills, career paths (Phase 5.2)
- **Core Design Principles for AGI Systems** — modularity, composability, interpretability (Phase 5.4)
- **Integrated Development Framework for AGI** — end-to-end methodology (Phase 5.4)

---

## From Practical_MLOps.pdf

- **Rise of the ML Engineer and MLOps Role** — career trajectory, skill evolution (Phase 5.2)
- **An MLOps Hierarchy of Needs** — maturity model: basic → advanced → production-scale (Phase 5.3)
- **Cloud Shell Development Environments** — cloud-native development setup (Phase 5.3)
- **Cloud Computing Foundations** — IaaS, PaaS, SaaS models (Phase 5.3)
- **Math for Programmers** — targeted math for ML engineering (Phase 1)
- **Doing Data Science** — practical workflows, iteration (Phase 5.2)
- **Build an MLOps Pipeline from Zero** — end-to-end tutorial (Phase 5.3)
- **Containers** — Docker, container ecosystems (Phase 5.3)
- **Edge Devices and MLOps** — deploying to edge hardware (Phase 5.3)
- **Containers for Managed ML** — container registries, orchestration (Phase 5.3)
- **Infrastructure as Code (IaC)** — Terraform, CloudFormation, reproducible infrastructure (Phase 5.3)
- **Using Cloud Pipelines** — orchestration, scheduling, triggers (Phase 5.3)
- **Apple's AutoML Ecosystem** — CreateML, CoreML, platform specifics (Phase 5.3)
- **Google's AutoML and Edge CV** — AutoML Vision, TFLite, edge deployment (Phase 5.3)
- **Azure's AutoML** — Azure ML Studio, automated pipelines (Phase 5.3)
- **AWS AutoML** — SageMaker Autopilot, automated solutions (Phase 5.3)
- **Open Source AutoML Solutions** — Auto-sklearn, Auto-WEKA, H2O (Phase 5.3)
- **Model Explainability** — SHAP, LIME, feature importance for production (Phase 5.5)
- **Observability for Cloud MLOps** — system observability, traces, logs, metrics (Phase 5.3)
- **Logging in Python** — structured logging, log levels, centralization (Phase 5.3)
- **Introduction to AWS** — AWS core services, ecosystem overview (Phase 5.3)
- **MLOps Cookbook on AWS** — recipes, patterns, best practices (Phase 5.3)
- **AWS Lambda Recipes** — serverless ML, event-driven workflows (Phase 5.3)
- **Applying AWS ML Services** — SageMaker, Rekognition, Forecast (Phase 5.3)
- **Azure CLI and Python SDK** — Azure interaction, scripting (Phase 5.3)
- **Authentication (Azure)** — service principals, managed identities (Phase 5.3)
- **Compute Instances (Azure)** — VMs, clusters, setup (Phase 5.3)
- **Troubleshooting Deployment Issues** — debugging, common failures (Phase 5.3)
- **Azure ML Pipelines** — workflow definition, scheduling (Phase 5.3)
- **ML Lifecycle** — end-to-end ML project phases (Phase 5.2)
- **Google Cloud Platform Overview** — GCP services, ecosystem (Phase 5.3)
- **DataOps on GCP** — BigQuery, Dataflow, data pipelines (Phase 5.2/5.3)
- **Operationalizing ML Models (GCP)** — serving, monitoring, updates (Phase 5.3)
- **ONNX: Open Neural Network Exchange** — model interoperability, format standardization (Phase 5.3)
- **Apple Core ML** — CoreML format, on-device serving (Phase 5.3)
- **Edge Integration** — serving models on edge devices (Phase 5.3)
- **Python Packaging** — wheels, dependencies, version management (Phase 5.3)
- **Command Line Tools (ML)** — click, argparse, CLI design (Phase 5.3)
- **Microservices** — service-oriented architecture, containerized ML services (Phase 5.3)
- **Machine Learning CLI Workflows** — Python CLI for ML pipelines (Phase 5.3)
- **Critical Challenges in MLOps** — identified obstacles, solutions (Phase 5.3)
- **Final Recommendations to Implement MLOps** — strategic guidance (Phase 5.3)
- **Building a Technical Portfolio for MLOps** — career development (Phase 5.2)

---

## From Artificial_Intelligence_Modern_Approach_Russell_Norvig.pdf

These topics represent classical AI — substantial material that extends Phase 5.1 but also complements other phases:

**Heavily Missing (Priority High):**

- **Intelligent Agents Framework** — agent types, environment properties, agent design patterns (Phase 5.1)
- **Good Behavior: Rationality** — defining rational agency, measures of success (Phase 5.1)
- **The Nature of Environments** — fully vs. partially observable, deterministic vs. stochastic (Phase 5.1)
- **The Structure of Agents** — reflex, model-based, goal-based, utility-based architectures (Phase 5.1)
- **Local Search and Optimization** — hill climbing, simulated annealing, genetic algorithms (Phase 5.1)
- **Local Search in Continuous Spaces** — gradient-free optimization, pattern search (Phase 5.1)
- **Search with Nondeterministic Actions** — contingency planning, expectimax (Phase 5.1)
- **Search in Partially Observable Environments** — belief states, sensorless problems (Phase 5.1)
- **Online Search in Unknown Environments** — exploration-exploitation, unknown state space (Phase 5.1)
- **Game Theory Fundamentals** — normal form games, Nash equilibrium (Phase 5.1)
- **Adversarial Search** — minimax, alpha-beta pruning depth (Phase 5.1)
- **Monte Carlo Tree Search** — MCTS, UCB algorithm, self-play (Phase 5.1)
- **Stochastic Games** — games with randomness (Phase 5.1)
- **Partially Observable Games** — imperfect information games (Phase 5.1)
- **Constraint Satisfaction Problems (CSP)** — constraint networks, domains, propagation (Phase 5.1)
- **Constraint Propagation Algorithms** — arc consistency, forward checking (Phase 5.1)
- **Backtracking for CSPs** — variable and value ordering heuristics (Phase 5.1)
- **Local Search for CSPs** — walk-SAT, min-conflicts (Phase 5.1)
- **Knowledge-Based Agents** — knowledge base, inference (Phase 5.1)
- **Propositional Logic** — syntax, semantics, inference rules (Phase 5.1)
- **Propositional Theorem Proving** — resolution, SAT solvers (Phase 5.1)
- **Propositional Model Checking** — truth table, SAT-based (Phase 5.1)
- **First-Order Logic (FOL)** — terms, predicates, quantifiers, syntax/semantics (Phase 5.1)
- **Knowledge Engineering in FOL** — ontology design, axiomatization (Phase 5.1)
- **Unification and FOL Inference** — substitution, most general unifier (Phase 5.1)
- **Forward Chaining** — data-driven inference, production systems (Phase 5.1)
- **Backward Chaining** — goal-driven inference, proof search (Phase 5.1)
- **Resolution** — sound, complete inference algorithm (Phase 5.1)
- **Ontological Engineering** — concepts, hierarchies, relations (Phase 5.1)
- **Categories and Objects (Logic)** — representations, inheritance (Phase 5.1)
- **Events (KR)** — time, causality, event calculus (Phase 5.1)
- **Mental Objects and Modal Logic** — belief, knowledge, provability (Phase 5.1)
- **Reasoning with Default Information** — nonmonotonic reasoning, exceptions (Phase 5.1)
- **Classical Planning (STRIPS/PDDL)** — preconditions, effects, planning domains (Phase 5.1)
- **Planning Algorithms** — backward search, forward search, GraphPlan (Phase 5.1)
- **Heuristics for Planning** — relaxation, subgoal counting (Phase 5.1)
- **Hierarchical Planning (HTN)** — decomposition, task networks (Phase 5.1)
- **Planning in Nondeterministic Domains** — conditional plans, contingencies (Phase 5.1)
- **Time, Schedules, and Resources** — temporal constraints, scheduling (Phase 5.1)
- **Bayesian Networks** — conditional independence, DAGs, semantics (Phase 5.1)
- **Exact Inference in Bayesian Networks** — enumeration, variable elimination (Phase 5.1)
- **Approximate Inference** — rejection sampling, likelihood weighting, Gibbs (Phase 5.1)
- **Causal Networks** — interventions, causal effects (Phase 5.1)
- **Inference in Temporal Models** — Markov assumption, transition model (Phase 5.1)
- **Relational Probability Models** — combining FOL with probability (Phase 5.1)
- **Open-Universe Probability** — unbounded domain sizes (Phase 5.1)
- **Probabilistic Programming** — programs as probability distributions (Phase 5.1)
- **Utility Theory** — preferences, utility functions (Phase 5.1)
- **Multiattribute Utilities** — additive, multiplicative decomposition (Phase 5.1)
- **Decision Networks** — influence diagrams, decision analysis (Phase 5.1)
- **Value of Information** — information gain in decision problems (Phase 5.1)
- **Sequential Decision Problems (MDP)** — Markov property, value iteration (Phase 5.1)
- **Bandit Problems** — exploration-exploitation, UCB, Thompson sampling (Phase 5.1)
- **Partially Observable MDPs (POMDP)** — belief states, optimal policies (Phase 5.1)
- **Multi-Agent Game Theory** — coordination, negotiation (Phase 5.1)
- **Non-Cooperative Game Theory (deep)** — best response, Nash equilibrium computation (Phase 5.1)
- **Cooperative Game Theory** — coalitions, Shapley value (Phase 5.1)
- **Collective Decision Making** — voting, preference aggregation (Phase 5.1)
- **Reinforcement Learning from Rewards (RL)** — reward structure, Markov reward process (Phase 5.1, distinct from Phase 3 DL-based RL)
- **Passive RL** — policy evaluation, model-based estimation (Phase 5.1)
- **Active RL** — exploration, Q-learning, SARSA (Phase 5.1)
- **Generalization in RL** — function approximation, neural networks for RL (Phase 5.1)
- **Policy Search** — gradient-free policy optimization (Phase 5.1)
- **Apprenticeship Learning** — inverse reinforcement learning, imitation (Phase 5.1)
- **Applications of RL** — robotics, games, autonomous systems (Phase 5.1)
- **Natural Language Grammars** — context-free, parsing algorithms (Phase 4.1)
- **Parsing** — top-down, bottom-up, chart parsing (Phase 4.1)
- **NLP Complications** — ambiguity, context, pragmatics (Phase 4.1)
- **Classic NLP Tasks** — part-of-speech tagging, syntactic analysis (Phase 4.1)
- **Computer Vision Fundamentals** — image formation, projection models (Phase 3.3)
- **Image Features** — edges, corners, SIFT, HOG (Phase 3.3)
- **3D World Reconstruction** — stereo, photogrammetry, structure-from-motion (Phase 3.3)
- **Robotic Perception** — localization, SLAM (Phase 5.1)
- **Robot Control** — motion planning, trajectory optimization (Phase 5.1)
- **Planning Uncertain Movements** — probabilistic path planning (Phase 5.1)
- **Robot Learning** — learning from demonstration, reinforcement learning for robots (Phase 5.1)
- **Human-Robot Interaction** — safety, coordination, communication (Phase 5.1)
- **Alternative Robotic Architectures** — behavior-based, subsumption (Phase 5.1)
- **Robotics Applications** — manipulation, navigation, perception (Phase 5.1)
- **The Limits of AI** — computational complexity, undecidability (Phase 5.1)
- **Machine Consciousness** — philosophical questions, qualia (Phase 5.1)
- **The Ethics of AI** — bias, fairness, transparency, safety (Phase 5.5, but Russell frames foundationally)
- **Future of AI** — AI components, AI architectures, long-term directions (Phase 5.4)

---

## Summary

**Total Missing Topics: 425 topics**

Distribution by book:
- **AI Engineering (Huyen):** 7 missing
- **Building ML Apps:** 9 missing
- **Designing ML Systems (Huyen):** 10 missing
- **ML Systems Textbook:** 238 missing (comprehensive engineering depth)
- **Practical MLOps:** 44 missing (platform/tool specific)
- **Russell & Norvig (AIMA):** 118 missing (classical AI, RL foundations, robotics, NLP fundamentals, CV foundations, planning, logic, agents)

**Key Gaps:**

1. **Classical AI Fundamentals** (Russell & Norvig) — Intelligent agents, search algorithms, constraint satisfaction, knowledge representation, logic, planning, game theory, multiagent systems, classical RL foundations, classical NLP/CV/robotics
2. **ML Systems Engineering** (ML Systems Textbook) — Deployment paradigms, hardware acceleration, distributed training, efficiency frameworks, benchmarking, security, robustness, responsible AI, sustainability, AGI systems
3. **MLOps at Scale** (Practical MLOps + Designing ML Systems) — Cloud platforms (AWS/Azure/GCP), infrastructure as code, containerization, CI/CD, monitoring, edge deployment, AutoML platforms
4. **Foundation Model Specifics** (AI Engineering) — Post-training at scale, synthetic data, memory systems, defensive prompting, use case patterns
5. **Organizational & Practical** (Building ML Apps) — Problem framing, feasibility assessment, team structures, deployment strategies, failure engineering

**Recommendation:** Phase 5 needs significant expansion to cover:
- Phase 5.0: Classical AI & Agent Design (searching, CSP, logic, planning, game theory, RL foundations)
- Phase 5.1: Strengthened ML System Design & Data Engineering
- Phase 5.2: Production Deployment (containers, K8s, cloud platforms, CI/CD)
- Phase 5.3: Monitoring, Observability, Drift Detection, Retraining
- Phase 5.4: Advanced Topics (hardware acceleration, distributed training, efficiency, benchmarking)
- Phase 5.5: Responsible AI, Security, Robustness, Sustainability
- Phase 5.6: Foundation Models at Scale (post-training, deployment, agentic systems)
- Phase 5.7: Compound AI & Future Directions (multi-agent, AGI pathways)
