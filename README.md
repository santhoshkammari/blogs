# Learning Roadmap: ML → DL → AI

> **Strategy:** Linear progression — ML → DL → AI. Patches (marked with ◈) are studied **on-demand** when the main track needs them, not upfront. Topics are the **union** across 25 books — no duplicates.

**Books covered:** 01_Beginner · 02_Core_ML_Practical · 03_ML_Theory_Math · 04_Deep_Learning · 05_NLP_and_LLMs · 06_Production_MLOps_AI_Engineering · 07_AI_Foundations

---

## Phase 1 — Mathematics & Prerequisites

> These underpin everything. Study before or alongside Phase 2.

- [ ] **Linear Algebra** — vectors, matrices, eigendecomposition, SVD
- [ ] **Analytic Geometry** — norms, distances, projections
- [ ] **Matrix Decompositions** — LU, QR, Cholesky, SVD
- [ ] **Vector Calculus** — gradients, Jacobians, Hessians, chain rule
- [ ] **Probability & Distributions** — Bayes theorem, common distributions, expectations
- [ ] **Information Theory** — entropy, KL divergence, mutual information
- [ ] **Statistics** — hypothesis testing, MLE, MAP, confidence intervals
- [ ] **Continuous Optimization** — convexity, gradient descent, Lagrange multipliers, KKT conditions
- [ ] **Transformations of Random Variables** — change of variables, Jacobian formula
- [ ] **Autodiff / Automatic Differentiation** — forward-mode, reverse-mode, computational graph mechanics

---

## Phase 2 — Machine Learning

### 2.1 Core Supervised Learning

- [ ] **Linear Regression (OLS)** — closed-form, SVD, multicollinearity, complexity
- [ ] **Polynomial Regression** — basis expansion, overfitting with degree, when to use
- [ ] **Regularized Regression** — Ridge (L2), Lasso (L1), Elastic-Net; coordinate descent; L1 vs L2 geometry
- [ ] **Logistic Regression** — binary/multinomial, solvers, probability calibration
- [ ] **Support Vector Machines** — max-margin, soft-margin (C), kernel trick, primal/dual, KKT
- [ ] **Kernel Methods** — RBF, polynomial, linear, sigmoid; what kernels compute
- [ ] **Decision Trees** — CART, ID3/C4.5, impurity (Gini/Entropy), pruning, feature importance
- [ ] **Gradient Boosted Trees** — HistGBT (modern), GBT (classic), shrinkage, subsampling, loss functions
- [ ] **Random Forests** — bagging + feature randomness, OOB error, ExtraTrees
- [ ] **AdaBoost** — adaptive weighting, relation to gradient boosting
- [ ] **Stacking & Voting Ensembles** — meta-learning, soft/hard voting

### 2.2 Core Unsupervised Learning

- [ ] **PCA** — eigendecomposition, variance explained, incremental/randomized SVD, reconstruction
- [ ] **K-Means** — Lloyd's algorithm, k-means++ init, MiniBatch, elbow method
- [ ] **DBSCAN** — density-based, eps/min_samples, arbitrary shapes
- [ ] **HDBSCAN** — hierarchical DBSCAN, auto cluster detection
- [ ] **Hierarchical Clustering** — agglomerative, ward/complete/average linkage, dendrograms
- [ ] **t-SNE** — perplexity, crowding problem, visualization use only
- [ ] **Clustering Metrics** — silhouette, calinski-harabasz, davies-bouldin, adjusted rand index
- [ ] **Class Imbalance** — SMOTE, cost-sensitive learning, over/undersampling strategies

### 2.3 Model Evaluation & Selection

- [ ] **Cross-Validation** — k-fold, stratified k-fold, time-series split, group k-fold, leave-one-out
- [ ] **Nested Cross-Validation** — algorithm selection with unbiased outer loop
- [ ] **Bootstrap Resampling** — bootstrap confidence intervals, out-of-bag error estimation
- [ ] **Classification Metrics** — accuracy, precision, recall, F1, ROC-AUC, PR-AUC, confusion matrix, log loss
- [ ] **Regression Metrics** — MSE, RMSE, MAE, R², MAPE, median AE
- [ ] **Hyperparameter Tuning** — GridSearch, RandomizedSearch, Successive Halving
- [ ] **Bias–Variance Tradeoff** — learning curves, validation curves, underfitting/overfitting
- [ ] **Common Pitfalls** — data leakage, inconsistent preprocessing, randomness control
- [ ] **Model Interpretability** — SHAP, LIME, permutation importance, partial dependence plots

### 2.4 Data Engineering & Preprocessing

- [ ] **Exploratory Data Analysis (EDA)** — distributions, correlations, visualizations, statistical summaries
- [ ] **Pipelines** — sklearn Pipeline, ColumnTransformer, preventing leakage
- [ ] **Scaling & Normalization** — StandardScaler, MinMax, RobustScaler
- [ ] **Categorical Encoding** — OneHot, Ordinal, Target encoding
- [ ] **Missing Value Imputation** — mean/median, IterativeImputer, KNN imputer
- [ ] **Feature Selection** — variance filter, univariate (chi2, f_classif), RFE, SelectFromModel
- [ ] **Feature Extraction** — TF-IDF, CountVectorizer, feature hashing
- [ ] **Dimensionality Reduction** — PCA (from 2.2), truncated SVD/LSA

### 2.5 Probabilistic & Generative ML

- [ ] **Naive Bayes** — Gaussian, Multinomial, Bernoulli; independence assumption
- [ ] **Gaussian Mixture Models** — EM algorithm, soft clustering, BIC/AIC for k
- [ ] **Bayesian Statistics** — priors, posteriors, MAP vs MLE, conjugate priors
- [ ] **Frequentist Statistics** — confidence intervals, hypothesis testing, p-values

### 2.6 Advanced Supervised

- [ ] **SGD & Online Learning** — loss functions, learning rate schedules, sparse data
- [ ] **KNN** — brute/KD-Tree/Ball Tree, curse of dimensionality, regression variant
- [ ] **Probability Calibration** — Platt scaling, isotonic regression, reliability diagrams
- [ ] **Multiclass / Multilabel** — OvR, OvO, multilabel classification strategies
- [ ] **Outlier Detection** — Isolation Forest, LOF, One-Class SVM, Elliptic Envelope

---

### On-Demand Patches — ML ◈

> Open only when the parent topic demands it.

- [ ] ◈ **Covariance Estimation** — empirical, Ledoit-Wolf shrinkage, Graphical Lasso *(for GMMs, portfolio)*
- [ ] ◈ **LDA / QDA** — discriminant analysis, shared/separate covariance *(for generative classifiers)*
- [ ] ◈ **Kernel Ridge Regression** — kernel + ridge combo *(after SVM + PCA)*
- [ ] ◈ **Gaussian Processes** — GP regression/classification, kernel design *(for uncertainty quantification)*
- [ ] ◈ **GLMs** — Poisson, Gamma, Tweedie regression *(for count / skewed targets)*
- [ ] ◈ **Quantile Regression** — prediction intervals, pinball loss *(when uncertainty matters)*
- [ ] ◈ **Robust Regression** — RANSAC, Huber, Theil-Sen *(when outliers are severe)*
- [ ] ◈ **ICA** — blind source separation, FastICA *(for signal/audio processing)*
- [ ] ◈ **NMF** — non-negative factorization, parts-based repr *(for text/image topics)*
- [ ] ◈ **LDA (topic modeling)** — Latent Dirichlet Allocation, document-topic *(for NLP applications)*
- [ ] ◈ **Spectral Clustering** — graph Laplacian, non-convex shapes *(when k-means/DBSCAN fail)*
- [ ] ◈ **Semi-supervised Learning** — self-training, label propagation *(scarce labels)*
- [ ] ◈ **Learning Theory** — PAC learning, VC dimension, Rademacher complexity, generalization bounds
- [ ] ◈ **Sparse Recovery / Compressed Sensing** — LASSO theory, OMP, RIP *(signal processing)*
- [ ] ◈ **Tensor Decompositions** — CP/Tucker, tensor train *(multimodal data)*
- [ ] ◈ **Matrix Completion** — nuclear norm minimization, low-rank recovery *(recommender systems)*
- [ ] ◈ **Graphical Models** — Bayesian networks, MRFs, d-separation, belief propagation
- [ ] ◈ **Variational Inference** — ELBO, mean-field, VI vs MCMC
- [ ] ◈ **MCMC / Sampling** — Metropolis-Hastings, Gibbs, HMC, slice sampling
- [ ] ◈ **Hidden Markov Models** — forward-backward, Viterbi *(sequential data)*
- [ ] ◈ **Recommender Systems** — collaborative filtering, matrix factorization *(specific use case)*
- [ ] ◈ **Multi-task Learning** — shared representations, task-specific parameters
- [ ] ◈ **Normalizing Flows** — invertible transformations, generative models via bijections
- [ ] ◈ **Auto-regressive Models** — sequential factorization, PixelCNN/WaveNet-style *(generative)*
- [ ] ◈ **Quasi-Newton Methods** — BFGS, L-BFGS *(second-order optimization)*
- [ ] ◈ **Distribution Shift / Beyond IID** — covariate shift, concept drift, non-IID assumptions
- [ ] ◈ **Generalized Additive Models (GAM)** — sum of smooth functions, nonparametric regression
- [ ] ◈ **Learning to Rank** — pairwise/listwise losses, IR applications
- [ ] ◈ **Multi-armed Bandits** — UCB, Thompson sampling, exploration-exploitation
- [ ] ◈ **Factor Analysis** — latent factor model, contrast with PCA, oblique/orthogonal rotations
- [ ] ◈ **Probit Regression** — alternative to logistic for binary classification, Gaussian link
- [ ] ◈ **Sparse Coding / Dictionary Learning** — overcomplete bases, pursuit algorithms
- [ ] ◈ **Community Detection** — graph clustering, modularity, spectral graph partitioning
- [ ] ◈ **Laplace Approximation** — Gaussian approximation to posterior, evidence approximation
- [ ] ◈ **Dirichlet Process Mixtures** — infinite mixture models, nonparametric Bayesian clustering
- [ ] ◈ **Overparameterized Models Theory** — double descent, implicit regularization, benign overfitting
- [ ] ◈ **Simpson's Paradox & Causal Reasoning** — confounders, correlation vs causation, causal inference basics

---

## Phase 3 — Deep Learning

### 3.1 Foundations

- [ ] **Neural Network Basics** — forward pass, activations (ReLU/sigmoid/tanh/GELU), universal approximation
- [ ] **Backpropagation** — chain rule, computational graphs, vanishing/exploding gradients
- [ ] **Loss Functions** — cross-entropy, MSE, BCE, focal loss, contrastive loss
- [ ] **Optimizers** — SGD+momentum, RMSProp, Adam, AdamW; learning rate schedules (cosine, warmup)
- [ ] **Regularization** — L1/L2 weight decay, dropout, early stopping
- [ ] **Normalization** — batch norm, layer norm, group norm; when to use which
- [ ] **Weight Initialization** — Xavier, He, orthogonal
- [ ] **Training Deep Networks** — gradient clipping, mixed precision (fp16/bf16), checkpointing
- [ ] **Practical Training Methodology** — metrics selection, baselines, hyperparameter search, debugging

### 3.2 Architectures

- [ ] **CNNs** — convolution, pooling, stride, receptive field, VGG/ResNet/EfficientNet
- [ ] **CNN Variants** — dilated, grouped, depthwise-separable convolutions
- [ ] **Skip Connections & ResNets** — residual learning, why it works
- [ ] **RNNs** — vanilla RNN, BPTT, vanishing gradient problem
- [ ] **LSTMs & GRUs** — gates, cell state, sequence modeling
- [ ] **Bidirectional RNNs** — forward-backward passes, when to use
- [ ] **Attention Mechanism** — scaled dot-product attention, self-attention, cross-attention
- [ ] **Transformers** — multi-head attention, positional encoding, encoder-decoder, layer norm placement
- [ ] **Embeddings** — word2vec, GloVe, positional embeddings, learned token embeddings
- [ ] **Seq2Seq & Encoder-Decoder** — sequence-to-sequence for translation/summarization
- [ ] **Time Series Modeling** — ARMA/ARIMA baselines, RNN/LSTM forecasting, multi-step prediction

### 3.3 Computer Vision

- [ ] **Image Classification** — CNN pipeline, transfer learning, ImageNet pretrained models
- [ ] **Object Detection** — YOLO, R-CNN family, anchor boxes, IoU, NMS
- [ ] **Semantic & Instance Segmentation** — FCN, U-Net, Mask R-CNN, pixel-wise labeling
- [ ] **Vision Transformers (ViT)** — patch embeddings, self-attention on images, ViT vs CNN
- [ ] **Face Detection & Recognition** — FaceNet, ArcFace, triplet loss
- [ ] **Data Augmentation** — flipping, cropping, color jitter, mixup, cutout

### 3.4 Generative Models

- [ ] **Autoencoders** — encoder-decoder, bottleneck, denoising AE
- [ ] **Variational Autoencoders (VAE)** — reparameterization trick, ELBO, latent space
- [ ] **GANs** — generator/discriminator, minimax loss, training instability, mode collapse
- [ ] **Advanced GANs** — progressive growing, conditional GAN (cGAN), CycleGAN, semi-supervised GAN
- [ ] **Diffusion Models** — DDPM, score matching, denoising schedule

### 3.5 Representation & Transfer Learning

- [ ] **Transfer Learning** — pretrain → finetune, feature extraction vs full finetune
- [ ] **Self-supervised Learning** — contrastive learning, SimCLR, BYOL, masked autoencoders
- [ ] **Knowledge Distillation** — teacher-student, soft labels, compression
- [ ] **Weight Pruning & Sparsity** — magnitude pruning, structured pruning

### 3.6 Frameworks & Practice

- [ ] **PyTorch Core** — tensors, autograd, `nn.Module`, `DataLoader`, `Dataset`
- [ ] **Training Loop** — train/val/test split, optimizer step, scheduler, checkpointing
- [ ] **Custom Layers & Losses**
- [ ] **TensorFlow / Keras** — Sequential/Functional API, `model.fit`, callbacks
- [ ] **JAX Basics** — functional transforms, `jit`, `grad`, `vmap` *(optional alternative)*

---

### On-Demand Patches — DL ◈

- [ ] ◈ **Adversarial Examples** — FGSM, PGD attacks, adversarial training, certified robustness
- [ ] ◈ **Structured Probabilistic Models** — energy-based models, Boltzmann machines, RBMs
- [ ] ◈ **Monte Carlo Methods in DL** — dropout as Bayes, MC sampling, uncertainty estimation
- [ ] ◈ **Reinforcement Learning Basics** — MDPs, value iteration, policy gradient *(robotics/games)*
- [ ] ◈ **Deep RL** — DQN, PPO, actor-critic, MCTS *(when RL needed)*
- [ ] ◈ **Recursive Neural Networks** — tree-structured networks for hierarchical data
- [ ] ◈ **Neural Turing Machines / Memory Networks** — external memory, attention-based memory
- [ ] ◈ **Score Matching & Noise-Contrastive Estimation** — training unnormalized generative models
- [ ] ◈ **Mixture Density Networks** — neural networks predicting mixture parameters
- [ ] ◈ **StyleGAN** — style-based generator, adaptive instance normalization, progressive training
- [ ] ◈ **Contractive Autoencoders** — Jacobian penalty regularization, local invariance
- [ ] ◈ **Greedy Layer-wise Pretraining** — DBN/DBM layer-by-layer unsupervised init
- [ ] ◈ **1D CNN / WaveNet** — dilated causal convolutions for sequences and audio
- [ ] ◈ **Echo State Networks** — reservoir computing, fixed random recurrent weights

---

## Phase 4 — NLP & LLMs

### 4.1 NLP Foundations

- [ ] **Text Preprocessing** — tokenization, stemming, lemmatization, stopwords
- [ ] **Text Representations** — bag-of-words, TF-IDF, n-grams
- [ ] **Word Embeddings** — word2vec (skip-gram/CBOW), GloVe, FastText
- [ ] **Sequence Models for NLP** — RNN/LSTM language models (from Phase 3)
- [ ] **Named Entity Recognition (NER)** — sequence labeling, CRF heads, token classification
- [ ] **Text Classification** — fine-tuning pretrained models, evaluation
- [ ] **Evaluation Metrics** — BLEU, ROUGE, METEOR, word-level metrics, perplexity

### 4.2 Transformers & Pretrained Models

- [ ] **Transformer Architecture (deep)** — self-attention, FFN, layer norm; encoder vs decoder vs encoder-decoder
- [ ] **Tokenization** — BPE, WordPiece, SentencePiece, vocabulary design, building/training tokenizers
- [ ] **Pretraining Objectives** — MLM/encoder-only (BERT), CLM/decoder-only (GPT), span masking/encoder-decoder (T5); comparison
- [ ] **Multilingual NLP** — mBERT, XLM-R, cross-lingual transfer
- [ ] **Summarization** — abstractive vs extractive, BART, PEGASUS, ROUGE
- [ ] **Question Answering** — extractive QA, span prediction, SQuAD
- [ ] **Text Generation Decoding** — greedy, beam search, top-k, top-p (nucleus) sampling
- [ ] **HuggingFace Ecosystem** — `transformers`, `datasets`, `evaluate`, `peft`, `trl`, `accelerate`

### 4.3 LLMs

- [ ] **LLM Fundamentals** — scaling laws, emergent abilities, context window, temperature
- [ ] **Tokens & Embeddings** — token IDs, embedding layers, RoPE and other positional encoding variants
- [ ] **Prompt Engineering** — zero-shot, few-shot, chain-of-thought, system prompts
- [ ] **Advanced Prompting** — ReAct, self-consistency, tree-of-thought
- [ ] **RAG (Retrieval-Augmented Generation)** — chunking strategies, vector DBs, retrieval, reranking
- [ ] **Alignment** — RLHF, reward modeling, PPO for LLMs, DPO, Constitutional AI
- [ ] **Inference-time Alignment** — best-of-N, process reward models, test-time compute
- [ ] **Multimodal LLMs** — vision-language models, CLIP, BLIP-2, image tokens
- [ ] **Long Sequence Modeling** — context extension, position interpolation/extrapolation, sparse attention

### 4.4 Fine-tuning & Adaptation

- [ ] **Full Fine-tuning** — when to do it, catastrophic forgetting, data requirements
- [ ] **Parameter-Efficient Fine-tuning** — LoRA, QLoRA, LoRA config & weight merging, prefix tuning, adapters
- [ ] **Instruction Tuning** — FLAN, instruction datasets, chat templates, DPO without reward model
- [ ] **Fine-tuning Representation Models** — classification heads, sentence embeddings, SetFit
- [ ] **Text Embedding Models** — contrastive training, bi-encoders, cross-encoders, TSDAE domain adaptation
- [ ] **Continued Pretraining / Domain Adaptation** — MLM on domain corpus, adaptive fine-tuning
- [ ] **Dataset Engineering for LLMs** — data curation, synthetic data generation, deduplication, quality filtering

### 4.5 LLM Systems & Evaluation

- [ ] **LLM Evaluation** — benchmarks, leaderboards, LLM-as-judge, human evaluation, automated metrics
- [ ] **Conversation Memory** — conversation buffers, windowed buffers, summarization memory
- [ ] **LLM Frameworks** — LangChain (chains, ReAct), Haystack, open-source ecosystems

---

### On-Demand Patches — NLP ◈

- [ ] ◈ **Classical NLP Parsing** — CFG, chart parsing, POS tagging, syntactic analysis
- [ ] ◈ **Speech-to-Text** — ASR models, wav2vec, Whisper *(multimodal)*
- [ ] ◈ **Responsible LLM Development** — safety, bias, toxicity, hallucination, guardrails
- [ ] ◈ **Training LLMs from Scratch** — data pipeline, tokenizer training, corpus challenges

---

## Phase 5 — AI Systems & Production

### 5.1 Classical AI Foundations

- [ ] **Intelligent Agents** — agent types, rationality, environment properties (PEAS), agent architectures
- [ ] **Search Algorithms** — BFS/DFS, A*, heuristics, admissibility; adversarial search (minimax, alpha-beta)
- [ ] **Local Search & Optimization** — hill climbing, simulated annealing, genetic algorithms
- [ ] **Monte Carlo Tree Search (MCTS)** — UCB, self-play, planning under uncertainty
- [ ] **Constraint Satisfaction (CSP)** — arc consistency, backtracking, forward checking, min-conflicts
- [ ] **Knowledge Representation & Logic** — propositional logic, FOL, theorem proving, resolution
- [ ] **Automated Planning** — STRIPS, PDDL, GraphPlan, HTN (hierarchical)
- [ ] **Probabilistic Reasoning** — Bayesian networks, exact/approximate inference, causal networks
- [ ] **Probabilistic Reasoning over Time** — HMMs, Kalman filters, particle filters
- [ ] **Probabilistic Programming** — programs as distributions, inference engines
- [ ] **Decision Theory** — utility functions, decision networks, value of information
- [ ] **Reinforcement Learning (Classical)** — MDPs, value/policy iteration, Q-learning, SARSA
- [ ] **Bandit Problems** — UCB, Thompson sampling, exploration-exploitation
- [ ] **POMDPs** — partial observability, belief states, planning under uncertainty
- [ ] **Multiagent Decision Making** — game theory, Nash equilibria, cooperative game theory, auctions
- [ ] **Robotics** — perception, SLAM, motion planning, robot learning

### 5.2 ML System Design

- [ ] **Problem Framing** — translating business goals to ML objectives, feasibility assessment, mind vs data
- [ ] **Data Engineering for ML** — collection, labeling, DVC versioning, data models, storage engines
- [ ] **SQL & Databases** — relational queries, joins, aggregations, indexes; NoSQL tradeoffs
- [ ] **Graph Analysis / Network Analysis** — PageRank, centrality metrics, community detection, graph algorithms
- [ ] **Data Governance** — provenance, lineage, documentation, access control, data cascades
- [ ] **Feature Engineering at Scale** — feature stores, online vs offline features
- [ ] **Training Infrastructure** — distributed training (data/model/pipeline parallel), GPU clusters
- [ ] **Experiment Tracking** — MLflow, W&B, reproducibility, technical debt management
- [ ] **Model Versioning** — model registry, lineage, team structures and roles

### 5.3 MLOps & Deployment

- [ ] **Model Deployment** — REST APIs, FastAPI serving, batch vs real-time, modes of dataflow
- [ ] **Containers & Orchestration** — Docker, Kubernetes, container registries
- [ ] **Infrastructure as Code** — Terraform, CloudFormation, cloud-native environments
- [ ] **CI/CD for ML** — automated retraining pipelines, testing ML code, MLOps hierarchy of needs
- [ ] **Model Monitoring** — data drift, concept drift, performance degradation, observability (logs/metrics/traces)
- [ ] **AutoML** — hyperparameter optimization, NAS, Auto-sklearn, SageMaker Autopilot
- [ ] **Cloud ML Platforms** — AWS SageMaker, Azure ML, GCP Vertex AI (pipelines, serving, AutoML)
- [ ] **Edge & Mobile Deployment** — TFLite, CoreML, ONNX, TinyML, latency/battery tradeoffs
- [ ] **Model Persistence & Interoperability** — joblib, ONNX, serialization, version compatibility
- [ ] **Microservices & Serverless** — service-oriented architecture, AWS Lambda for ML

### 5.4 AI Engineering (Foundation Models)

- [ ] **Foundation Model Architecture** — understanding GPT/BERT/T5/LLaMA internals, post-training
- [ ] **AI Scaling Laws** — compute/data/parameter scaling relationships, emergent abilities
- [ ] **Evaluation Methodology** — benchmarks, human evaluation, LLM-as-judge, A/B testing
- [ ] **Inference Optimization** — KV cache, speculative decoding, flash attention, batching strategies
- [ ] **Quantization** — INT8, INT4, GPTQ, AWQ, GGUF; calibration, accuracy-latency tradeoffs
- [ ] **Model Serving** — vLLM, TGI, Triton; throughput vs latency, dynamic batching
- [ ] **RAG Systems (advanced)** — hybrid search, HyDE, parent-child chunking, eval pipelines
- [ ] **Agents & Tool Use** — function calling, agentic loops, planning, memory systems
- [ ] **Multi-Agent Systems** — orchestration, emergent coordination, compound AI systems
- [ ] **AI Engineering Architecture** — user feedback loops, guardrails, defensive prompt engineering
- [ ] **Hardware Acceleration** — GPUs, TPUs, AI accelerators; memory bandwidth, roofline model
- [ ] **AI Compilers & Runtimes** — TVM, XLA, kernel selection, compiler mapping to hardware

### 5.5 Responsible AI

- [ ] **AI Ethics & Fairness** — bias metrics, debiasing, fairness constraints, sociotechnical dynamics
- [ ] **AI Safety & Value Alignment** — reward hacking, misalignment, AI safety research, policy/regulation
- [ ] **Security & Adversarial Robustness** — prompt injection, model extraction, poisoning, threat modeling
- [ ] **Privacy in ML** — differential privacy, federated learning, PII handling, hardware security
- [ ] **Sustainable AI** — compute carbon, efficiency imperatives, hardware lifecycle, energy measurement
- [ ] **Model Explainability in Production** — SHAP, LIME, feature importance for deployed models

---

## Progress Tracker

| Phase | Topic | Done |
|-------|-------|------|
| 1 — Math | 10 topics | 0/10 |
| 2 — ML Core | 45 topics | 0/45 |
| 2 — ML Patches ◈ | 37 patches | 0/37 |
| 3 — Deep Learning | 40 topics | 0/40 |
| 3 — DL Patches ◈ | 14 patches | 0/14 |
| 4 — NLP & LLMs | 34 topics | 0/34 |
| 4 — NLP Patches ◈ | 4 patches | 0/4 |
| 5 — AI Systems | 53 topics | 0/53 |
| **Total** | | **0/237** |

---

## Book Reference Map

| Phase | Key Books |
|-------|-----------|
| Math | Mathematics for ML · Murphy Vol1 · Bishop PRML |
| ML Core | Hands-On ML (Géron) · ML with PyTorch (Raschka) · Andrew NG CS229 · Murphy Vol1 |
| ML Theory | Learning Theory · Algorithmic Aspects of ML · Bishop PRML · Murphy Vol2 |
| Deep Learning | Deep Learning (Goodfellow) · Hands-On ML Part II · ML with PyTorch Part II |
| Generative | GANs in Action · Deep Learning Ch. 16–20 |
| NLP & LLMs | NLP with Transformers · Hands-On LLMs · Foundations of LLMs |
| AI Foundations | AI: A Modern Approach (Russell & Norvig) |
| Production | Designing ML Systems · AI Engineering · Practical MLOps · Building ML Apps · ML Systems |
