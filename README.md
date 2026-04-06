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
- [ ] **Perceptron Algorithm** — binary classifier, online learning, convergence theorem (Rosenblatt)
- [ ] **Adaline (ADAptive LInear NEuron)** — Widrow-Hoff rule, continuous activation, relation to gradient descent

### 2.2 Core Unsupervised Learning

- [ ] **PCA** — eigendecomposition, variance explained, incremental/randomized SVD, reconstruction
- [ ] **K-Means** — Lloyd's algorithm, k-means++ init, MiniBatch, elbow method
- [ ] **K-Medoids (PAM)** — medoid-based clustering, robust to outliers, contrast with k-means
- [ ] **Self-Organizing Maps (SOM)** — competitive learning, topology-preserving mapping, Kohonen networks
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
- [ ] **Gaussian Discriminant Analysis (GDA)** — multivariate Gaussian, GDA model, GDA vs logistic regression, generative vs discriminative classifiers
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
- [ ] ◈ **Levenberg–Marquardt Algorithm** — nonlinear least-squares, interpolates between GD and Gauss-Newton *(curve fitting, neural network training)*
- [ ] ◈ **Quadratic Programming (QP)** — equality/inequality constrained QP, KKT systems, active set strategies, interior-point methods, logarithmic barriers *(for SVM dual, constrained optimization)*
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
- [ ] ◈ **Inference Algorithms Overview** — global/local latents, exact vs approximate inference, Laplace approximation *(Murphy Vol2 Ch.6)*
- [ ] ◈ **State-Space Inference** — Bayesian filtering/smoothing, Kalman filter, RTS smoother, EKF, UKF, assumed density filtering *(Murphy Vol2 Ch.7)*
- [ ] ◈ **Message Passing Inference** — belief propagation on trees/factor graphs, loopy BP, variable elimination, junction tree algorithm *(Murphy Vol2 Ch.8)*
- [ ] ◈ **Monte Carlo Inference** — Monte Carlo integration, rejection sampling, importance sampling, variance reduction *(Murphy Vol2 Ch.10)*
- [ ] ◈ **Sequential Monte Carlo (Particle Filtering)** — SMC basics, particle filters, RBPF, SMC samplers, particle MCMC *(Murphy Vol2 Ch.12)*
- [ ] ◈ **Bayesian Neural Networks** — priors/likelihoods/posteriors for BNNs, Laplace/VI/MCMC for BNNs, generalization in Bayesian DL *(Murphy Vol2 Ch.16)*
- [ ] ◈ **Structured Prediction** — conditional random fields (CRFs), time series forecasting with structured outputs *(Murphy Vol2 Ch.18)*
- [ ] ◈ **Beyond IID / Distribution Shift** — covariate/label/concept shift, domain adaptation, meta-learning, continual learning, adversarial examples *(Murphy Vol2 Ch.19)*
- [ ] ◈ **Energy-Based Models** — products of experts, contrastive divergence, score matching, noise contrastive estimation *(Murphy Vol2 Ch.24)*
- [ ] ◈ **Graph Learning** — stochastic block model, mixed-membership SBM, sparse PGM structure learning *(Murphy Vol2 Ch.31)*
- [ ] ◈ **Non-Parametric Bayesian Models** — Dirichlet process, Pitman-Yor, Indian buffet process, completely random measures, Lévy processes, point processes *(Murphy Vol2 Ch.32)*
- [ ] ◈ **Causality (Advanced)** — SCMs, causal DAGs, do-calculus, backdoor/frontdoor adjustment, instrumental variables, difference-in-differences, counterfactuals *(Murphy Vol2 Ch.37)*

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
- [ ] ◈ **Variational Autoencoders (advanced)** — β-VAE, hierarchical VAEs, VQ-VAE, posterior collapse, wake-sleep algorithm *(Murphy Vol2 Ch.21)*
- [ ] ◈ **Auto-regressive Generative Models** — NADE, causal CNNs (PixelCNN), transformer decoders as density estimators *(Murphy Vol2 Ch.22)*
- [ ] ◈ **Normalizing Flows (advanced)** — affine/coupling/autoregressive/residual/continuous-time flows, density estimation and inference *(Murphy Vol2 Ch.23)*
- [ ] ◈ **Denoising Diffusion Models (advanced)** — forward/reverse process, DDPM training, connections with score matching/VAEs/flows *(Murphy Vol2 Ch.25)*

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
- [ ] **Automatic Prompt Optimization** — gradient-free prompt search (AutoPrompt, APE), soft prompt tuning, prompt compression and length reduction
- [ ] **RAG (Retrieval-Augmented Generation)** — chunking strategies, vector DBs, retrieval, reranking
- [ ] **Alignment** — RLHF, reward modeling, PPO for LLMs, DPO, Constitutional AI
- [ ] **Automatic Preference Data Generation** — synthetic preference pairs, self-play feedback, AI-labeled preference data (RLAIF)
- [ ] **Step-by-step Alignment** — process reward models (training-time), step-level RLHF, outcome vs process supervision
- [ ] **Inference-time Alignment** — best-of-N, process reward models, test-time compute
- [ ] **Multimodal LLMs** — vision-language models, CLIP, BLIP-2, image tokens
- [ ] **Long Sequence Modeling** — context extension, position interpolation/extrapolation, sparse attention
- [ ] **Attention Head & Layer Sharing** — multi-query attention (MQA), grouped-query attention (GQA), cross-layer weight sharing; efficiency tradeoffs for long-context inference

### 4.4 Fine-tuning & Adaptation

- [ ] **Full Fine-tuning** — when to do it, catastrophic forgetting, data requirements
- [ ] **Parameter-Efficient Fine-tuning** — LoRA, QLoRA, LoRA config & weight merging, prefix tuning, adapters
- [ ] **Instruction Tuning** — FLAN, instruction datasets, chat templates, DPO without reward model
- [ ] **Instruction Generalization** — zero-shot cross-task transfer from instruction tuning, generalization to unseen tasks
- [ ] **Weak-to-Strong Generalization** — using weak model supervision to improve stronger models, scalable oversight
- [ ] **Fine-tuning Representation Models** — classification heads, sentence embeddings, SetFit
- [ ] **Text Embedding Models** — contrastive training, bi-encoders, cross-encoders, TSDAE domain adaptation
- [ ] **Continued Pretraining / Domain Adaptation** — MLM on domain corpus, adaptive fine-tuning
- [ ] **Dataset Engineering for LLMs** — data curation, synthetic data generation, deduplication, quality filtering

### 4.5 LLM Systems & Evaluation

- [ ] **LLM Evaluation** — benchmarks, leaderboards, LLM-as-judge, human evaluation, automated metrics
- [ ] **Conversation Memory** — conversation buffers, windowed buffers, summarization memory
- [ ] **LLM Frameworks** — LangChain (chains, ReAct), Haystack, open-source ecosystems
- [ ] **Embedding-based Text Clustering & Topic Modeling** — using sentence embeddings + clustering (e.g. BERTopic) for topic discovery; contrast with classical LDA

### 4.6 Practical Transformer Skills

- [ ] **Transformers as Feature Extractors** — frozen pretrained models, extracting representations without fine-tuning, feature-based transfer
- [ ] **Custom Model Heads** — adding classification/token-classification/regression heads on transformer base, anatomy of `AutoModel` + head classes
- [ ] **Hugging Face Hub** — model/dataset sharing, model cards, Hub API, pushing/pulling models programmatically
- [ ] **Hugging Face Accelerate** — distributed training abstraction, multi-GPU/TPU, mixed precision, `Accelerator` class
- [ ] **Challenges with Transformers** — quadratic attention cost, long-document handling, data hunger, deployment size, mitigation strategies

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
- [ ] **Search in Continuous Spaces** — gradient-based planning, sampling-based methods (RRT, PRM), trajectory optimization
- [ ] **Predictive Model Evaluation** — calibration, conformal prediction, coverage guarantees *(Murphy Vol2 Ch.13)*
- [ ] **Generalized Linear Models (Bayesian)** — Bayesian linear/logistic/probit regression, multi-level GLMs *(Murphy Vol2 Ch.14)*
- [ ] **Interpretability / Explainability** — inherently interpretable models, post-hoc methods (SHAP/LIME), transparency, evaluation of explanations *(Murphy Vol2 Ch.34)*
- [ ] **Multi-step Decision Problems** — influence diagrams, value of information, A/B testing (Bayesian), contextual bandits, MDPs *(Murphy Vol2 Ch.35)*
- [ ] **Linear Quadratic Regulation (LQR)** — finite/infinite-horizon MDPs, optimal control for linear dynamics, Riccati equations; DDP (Differential Dynamic Programming) for nonlinear systems; LQG with Gaussian noise
- [ ] **Policy Gradient / REINFORCE** — score function estimator, REINFORCE algorithm, variance reduction with baselines; foundation for modern policy optimization (PPO, actor-critic)
- [ ] **Adversarial Search Extensions** — expectimax, stochastic/nondeterministic games, limited-horizon search with eval functions
- [ ] **First-Order Logic Inference** — unification, forward chaining, backward chaining, resolution refutation, completeness
- [ ] **Classical NLP (Symbolic)** — formal grammars (CFG/PCFG), chart parsing, information extraction, semantic parsing
- [ ] **Computer Vision (Classical)** — image formation models, edge/feature detection, object recognition pipelines, 3D reconstruction
- [ ] **Perception & Sensor Models** — sensor noise, Bayesian filtering for perception, sensor fusion

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
| 4 — NLP & LLMs | 47 topics | 0/47 |
| 4 — NLP Patches ◈ | 4 patches | 0/4 |
| 5 — AI Systems | 53 topics | 0/53 |
| **Total** | | **0/250** |

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

---

## Murphy Vol1 — Machine Learning: A Probabilistic Perspective (Chapter Map)

> Kevin Murphy. Comprehensive probabilistic treatment of machine learning. Covers supervised/unsupervised learning, Bayesian inference, graphical models, approximate inference, and deep learning. A foundational reference for ML theory and practice.

### Chapter 1 — Introduction
- **1.1 Machine learning: what and why?**
  - Sections: Types of machine learning
- **1.2 Supervised learning**
  - Sections: Classification · Regression
- **1.3 Unsupervised learning**
  - Sections: Discovering clusters · Discovering latent factors · Discovering graph structure · Matrix completion
- **1.4 Some basic concepts in machine learning**
  - Sections: Parametric vs non-parametric models · K-nearest neighbors · Curse of dimensionality · Parametric models for classification and regression · Linear regression · Logistic regression · Overfitting · Model selection · No free lunch theorem

### Chapter 2 — Probability
- **2.1 Introduction**
- **2.2 A brief review of probability theory**
  - Sections: Discrete random variables · Fundamental rules · Bayes rule · Independence and conditional independence · Continuous random variables · Quantiles · Mean and variance
- **2.3 Some common discrete distributions**
  - Sections: Binomial and Bernoulli · Multinomial and multinoulli · Poisson · Empirical distribution
- **2.4 Some common continuous distributions**
  - Sections: Gaussian (normal) · Degenerate pdf · Laplace · Gamma · Beta · Pareto
- **2.5 Joint probability distributions**
  - Sections: Covariance and correlation · Multivariate Gaussian · Multivariate Student t · Dirichlet distribution
- **2.6 Transformations of random variables**
  - Sections: Linear transformations · General transformations · Central limit theorem
- **2.7 Monte Carlo approximation**
  - Sections: Change of variables via MC · Estimating π via MC integration · Accuracy of Monte Carlo approximation
- **2.8 Information theory**
  - Sections: Entropy · KL divergence · Mutual information

### Chapter 3 — Generative Models for Discrete Data
- **3.1 Introduction**
- **3.2 Bayesian concept learning**
  - Sections: Likelihood · Prior · Posterior · Posterior predictive distribution · A more complex prior
- **3.3 The beta-binomial model**
  - Sections: Likelihood · Prior · Posterior · Posterior predictive distribution
- **3.4 The Dirichlet-multinomial model**
  - Sections: Likelihood · Prior · Posterior · Posterior predictive
- **3.5 Naive Bayes classifiers**
  - Sections: Model fitting · Using the model for prediction · The log-sum-exp trick · Feature selection using mutual information · Classifying documents using bag of words

### Chapter 4 — Gaussian Models
- **4.1 Introduction**
  - Sections: Notation · Basics · MLE for an MVN · Maximum entropy derivation of the Gaussian
- **4.2 Gaussian discriminant analysis**
  - Sections: Quadratic discriminant analysis (QDA) · Linear discriminant analysis (LDA) · Two-class LDA · MLE for discriminant analysis · Strategies for preventing overfitting · Regularized LDA · Diagonal LDA · Nearest shrunken centroids classifier
- **4.3 Inference in jointly Gaussian distributions**
  - Sections: Statement of the result · Examples · Information form · Proof of the result
- **4.4 Linear Gaussian systems**
  - Sections: Statement of the result · Examples · Proof of the result
- **4.5 Digression: The Wishart distribution**
  - Sections: Inverse Wishart distribution · Visualizing the Wishart distribution
- **4.6 Inferring the parameters of an MVN**
  - Sections: Posterior distribution of μ · Posterior distribution of Σ · Posterior distribution of μ and Σ · Sensor fusion with unknown precisions

### Chapter 5 — Bayesian Statistics
- **5.1 Introduction**
- **5.2 Summarizing posterior distributions**
  - Sections: MAP estimation · Credible intervals · Inference for a difference in proportions
- **5.3 Bayesian model selection**
  - Sections: Bayesian Occam's razor · Computing the marginal likelihood (evidence) · Bayes factors · Jeffreys-Lindley paradox
- **5.4 Priors**
  - Sections: Uninformative priors · Jeffreys priors · Robust priors · Mixtures of conjugate priors
- **5.5 Hierarchical Bayes**
  - Sections: Example: modeling related cancer rates
- **5.6 Empirical Bayes**
  - Sections: Example: beta-binomial model · Example: Gaussian-Gaussian model
- **5.7 Bayesian decision theory**
  - Sections: Bayes estimators for common loss functions · The false positive vs false negative tradeoff · Other topics

### Chapter 6 — Frequentist Statistics
- **6.1 Introduction**
- **6.2 Sampling distribution of an estimator**
  - Sections: Bootstrap · Large sample theory for the MLE
- **6.3 Frequentist decision theory**
  - Sections: Bayes risk · Minimax risk · Admissible estimators
- **6.4 Desirable properties of estimators**
  - Sections: Consistent estimators · Unbiased estimators · Minimum variance estimators · The bias-variance tradeoff
- **6.5 Empirical risk minimization**
  - Sections: Regularized risk minimization · Structural risk minimization · Estimating the risk using cross validation · Upper bounding the risk using statistical learning theory · Surrogate loss functions
- **6.6 Pathologies of frequentist statistics**
  - Sections: Counter-intuitive behavior of confidence intervals · p-values considered harmful · The likelihood principle · Why isn't everyone a Bayesian?

### Chapter 7 — Linear Regression
- **7.1 Introduction**
- **7.2 Model specification**
- **7.3 Maximum likelihood estimation (least squares)**
  - Sections: Derivation of the MLE · Geometric interpretation · Convexity
- **7.4 Robust linear regression**
- **7.5 Ridge regression**
  - Sections: Basic idea · Numerically stable computation · Connection with PCA · Regularization effects of big data
- **7.6 Bayesian linear regression**
  - Sections: Computing the posterior · Computing the posterior predictive · Bayesian inference when σ² is unknown · EB for linear regression (evidence procedure)

### Chapter 8 — Logistic Regression
- **8.1 Introduction**
- **8.2 Model specification**
- **8.3 Model fitting**
  - Sections: MLE · Steepest descent · Newton's method · Iteratively reweighted least squares (IRLS) · Quasi-Newton methods · ℓ2 regularization · Multi-class logistic regression
- **8.4 Bayesian logistic regression**
  - Sections: Laplace approximation · Derivation of the BIC · Gaussian approximation for logistic regression · Approximating the posterior predictive · Residual analysis (outlier detection)
- **8.5 Online learning and stochastic optimization**
  - Sections: Online learning and regret minimization · Stochastic optimization and risk minimization · The LMS algorithm · The perceptron algorithm · A Bayesian view
- **8.6 Generative vs discriminative classifiers**
  - Sections: Pros and cons of each approach · Dealing with missing data · Fisher's linear discriminant analysis (FLDA)

### Chapter 9 — Generalized Linear Models and the Exponential Family
- **9.1 Introduction**
- **9.2 The exponential family**
  - Sections: Definition · Examples · Log partition function · MLE for the exponential family · Bayes for the exponential family · Maximum entropy derivation of the exponential family
- **9.3 Generalized linear models (GLMs)**
  - Sections: Basics · ML and MAP estimation · Bayesian inference
- **9.4 Probit regression**
  - Sections: ML/MAP estimation using gradient-based optimization · Latent variable interpretation · Ordinal probit regression · Multinomial probit models
- **9.5 Multi-task learning**
  - Sections: Hierarchical Bayes for multi-task learning · Application to personalized email spam filtering · Application to domain adaptation · Other kinds of prior
- **9.6 Generalized linear mixed models**
  - Sections: Example: semi-parametric GLMMs for medical data · Computational issues
- **9.7 Learning to rank**
  - Sections: The pointwise approach · The pairwise approach · The listwise approach · Loss functions for ranking

### Chapter 10 — Directed Graphical Models (Bayes Nets)
- **10.1 Introduction**
  - Sections: Chain rule · Conditional independence · Graphical models · Graph terminology · Directed graphical models
- **10.2 Examples**
  - Sections: Naive Bayes classifiers · Markov and hidden Markov models · Medical diagnosis · Genetic linkage analysis · Directed Gaussian graphical models
- **10.3 Inference**
- **10.4 Learning**
  - Sections: Plate notation · Learning from complete data · Learning with missing and/or latent variables
- **10.5 Conditional independence properties of DGMs**
  - Sections: d-separation and the Bayes Ball algorithm (global Markov properties) · Other Markov properties of DGMs · Markov blanket and full conditionals
- **10.6 Influence (decision) diagrams**

### Chapter 11 — Mixture Models and the EM Algorithm
- **11.1 Latent variable models**
- **11.2 Mixture models**
  - Sections: Mixtures of Gaussians · Mixture of multinoullis · Using mixture models for clustering · Mixtures of experts
- **11.3 Parameter estimation for mixture models**
  - Sections: Unidentifiability · Computing a MAP estimate is non-convex
- **11.4 The EM algorithm**
  - Sections: Basic idea · EM for GMMs · EM for mixture of experts · EM for DGMs with hidden variables · EM for the Student distribution · EM for probit regression · Theoretical basis for EM · Online EM · Other EM variants
- **11.5 Model selection for latent variable models**
  - Sections: Model selection for probabilistic models · Model selection for non-probabilistic methods
- **11.6 Fitting models with missing data**
  - Sections: EM for the MLE of an MVN with missing data

### Chapter 12 — Latent Linear Models
- **12.1 Factor analysis**
  - Sections: FA is a low rank parameterization of an MVN
- **12.2 Principal components analysis (PCA)**
- **12.3 Choosing the number of latent dimensions**
- **12.4 PCA for categorical data**
- **12.5 PCA for paired and multi-view data**
- **12.6 Independent Component Analysis (ICA)**

### Chapter 13 — Sparse Linear Models
- **13.1 Introduction**
- **13.2 Bayesian variable selection**
- **13.3 ℓ1 regularization: basics**
- **13.4 ℓ1 regularization: algorithms**
- **13.5 ℓ1 regularization: extensions**
- **13.6 Non-convex regularizers**
- **13.7 Automatic relevance determination (ARD) / sparse Bayesian learning (SBL)**
- **13.8 Sparse coding**

### Chapter 14 — Kernels
- **14.1 Introduction**
- **14.2 Kernel functions**
- **14.3 Using kernels inside GLMs**
- **14.4 The kernel trick**
- **14.5 Support vector machines (SVMs)**
- **14.6 Comparison of discriminative kernel methods**
- **14.7 Kernels for building generative models**

### Chapter 15 — Gaussian Processes
- **15.1 Introduction**
- **15.2 GPs for regression**
- **15.3 GPs meet GLMs**
- **15.4 Connection with other methods**
- **15.5 GP latent variable model**
- **15.6 Approximation methods for large datasets**

### Chapter 16 — Adaptive Basis Function Models
- **16.1 Introduction**
- **16.2 Classification and regression trees (CART)**
- **16.3 Generalized additive models**
- **16.4 Boosting**
- **16.5 Feedforward neural networks (multilayer perceptrons)**
- **16.6 Ensemble learning**
- **16.7 Experimental comparison**
- **16.8 Interpreting black-box models**

### Chapter 17 — Markov and Hidden Markov Models
- **17.1 Introduction**
- **17.2 Markov models**
- **17.3 Hidden Markov models**
- **17.4 Inference in HMMs**
- **17.5 Learning for HMMs**
- **17.6 Generalizations of HMMs**

### Chapter 18 — State Space Models
- **18.1 Introduction**
- **18.2 Applications of SSMs**
  - Sections: Robot SLAM · Online parameter learning using recursive least squares · SSM for time series forecasting
- **18.3 Inference in LG-SSM**
  - Sections: The Kalman filtering algorithm · The Kalman smoothing algorithm
- **18.4 Learning for LG-SSM**
  - Sections: Identifiability and numerical stability · Training with fully observed data · EM for LG-SSM · Subspace methods · Bayesian methods for fitting LG-SSMs
- **18.5 Approximate online inference for non-linear, non-Gaussian SSMs**
  - Sections: Extended Kalman filter (EKF) · Unscented Kalman filter (UKF) · Assumed density filtering (ADF)
- **18.6 Hybrid discrete/continuous SSMs**
  - Sections: Inference · Application: data association and multi-target tracking · Application: fault diagnosis · Application: econometric forecasting

### Chapter 19 — Undirected Graphical Models (Markov Random Fields)
- **19.1 Introduction**
- **19.2 Conditional independence properties of UGMs**
  - Sections: Key properties · An undirected alternative to d-separation · Comparing directed and undirected graphical models
- **19.3 Parameterization of MRFs**
  - Sections: The Hammersley-Clifford theorem · Representing potential functions
- **19.4 Examples of MRFs**
  - Sections: Ising model · Hopfield networks · Potts model · Gaussian MRFs · Markov logic networks
- **19.5 Learning**
  - Sections: Training maxent models using gradient methods · Training partially observed maxent models · Approximate methods for computing the MLEs of MRFs · Pseudo likelihood · Stochastic maximum likelihood · Feature induction for maxent models · Iterative proportional fitting (IPF)
- **19.6 Conditional random fields (CRFs)**
  - Sections: Chain-structured CRFs, MEMMs and the label-bias problem · Applications of CRFs · CRF training
- **19.7 Structural SVMs**
  - Sections: SSVMs: a probabilistic view · SSVMs: a non-probabilistic view · Cutting plane methods for fitting SSVMs · Online algorithms for fitting SSVMs · Latent structural SVMs

### Chapter 20 — Exact Inference for Graphical Models
- **20.1 Introduction**
- **20.2 Belief propagation for trees**
  - Sections: Serial protocol · Parallel protocol · Gaussian BP · Other BP variants
- **20.3 The variable elimination algorithm**
  - Sections: The generalized distributive law · Computational complexity of VE · A weakness of VE
- **20.4 The junction tree algorithm**
  - Sections: Creating a junction tree · Message passing on a junction tree · Computational complexity of JTA · JTA generalizations
- **20.5 Computational intractability of exact inference in the worst case**
  - Sections: Approximate inference

### Chapter 21 — Variational Inference
- **21.1 Introduction**
- **21.2 Variational inference**
  - Sections: Alternative interpretations of the variational objective · Forward or reverse KL?
- **21.3 The mean field method**
  - Sections: Derivation of the mean field update equations · Example: mean field for the Ising model
- **21.4 Structured mean field**
  - Sections: Example: factorial HMM
- **21.5 Variational Bayes**
  - Sections: Example: VB for a univariate Gaussian · Example: VB for linear regression
- **21.6 Variational Bayes EM**
  - Sections: Example: VBEM for mixtures of Gaussians
- **21.7 Variational message passing and VIBES**
- **21.8 Local variational bounds**
  - Sections: Motivating applications · Bohning's quadratic bound to the log-sum-exp function · Bounds for the sigmoid function · Other bounds and approximations to the log-sum-exp function · Variational inference based on upper bounds

### Chapter 22 — More Variational Inference
- **22.1 Introduction**
- **22.2 Loopy belief propagation: algorithmic issues**
  - Sections: A brief history · LBP on pairwise models · LBP on a factor graph · Convergence · Accuracy of LBP · Other speedup tricks for LBP
- **22.3 Loopy belief propagation: theoretical issues**
  - Sections: UGMs in exponential family form · The marginal polytope · Exact inference as a variational optimization problem · Mean field as a variational optimization problem · LBP as a variational optimization problem · Loopy BP vs mean field
- **22.4 Extensions of belief propagation**
  - Sections: Generalized belief propagation · Convex belief propagation
- **22.5 Expectation propagation**
  - Sections: EP as a variational inference problem · Optimizing the EP objective using moment matching · EP for the clutter problem · LBP is a special case of EP · Ranking players using TrueSkill · Other applications of EP
- **22.6 MAP state estimation**
  - Sections: Linear programming relaxation · Max-product belief propagation · Graphcuts · Experimental comparison of graphcuts and BP · Dual decomposition

### Chapter 23 — Monte Carlo Inference
- **23.1 Introduction**
- **23.2 Sampling from standard distributions**
  - Sections: Using the cdf · Sampling from a Gaussian (Box-Muller method)
- **23.3 Rejection sampling**
  - Sections: Basic idea · Example · Application to Bayesian statistics · Adaptive rejection sampling · Rejection sampling in high dimensions
- **23.4 Importance sampling**
  - Sections: Basic idea · Handling unnormalized distributions · Importance sampling for a DGM: likelihood weighting · Sampling importance resampling (SIR)
- **23.5 Particle filtering**
  - Sections: Sequential importance sampling · The degeneracy problem · The resampling step · The proposal distribution · Application: robot localization · Application: visual object tracking · Application: time series forecasting
- **23.6 Rao-Blackwellised particle filtering (RBPF)**
  - Sections: RBPF for switching LG-SSMs · Application: tracking a maneuvering target · Application: Fast SLAM

### Chapter 24 — Markov Chain Monte Carlo (MCMC) Inference
- **24.1 Introduction**
- **24.2 Gibbs sampling**
  - Sections: Basic idea · Example: Gibbs sampling for the Ising model · Example: Gibbs sampling for inferring the parameters of a GMM · Collapsed Gibbs sampling · Gibbs sampling for hierarchical GLMs · BUGS and JAGS · The Imputation Posterior (IP) algorithm · Blocking Gibbs sampling
- **24.3 Metropolis Hastings algorithm**
  - Sections: Basic idea · Gibbs sampling is a special case of MH · Proposal distributions · Adaptive MCMC · Initialization and mode hopping · Why MH works · Reversible jump (trans-dimensional) MCMC
- **24.4 Speed and accuracy of MCMC**
  - Sections: The burn-in phase · Mixing rates of Markov chains · Practical convergence diagnostic · Accuracy of MCMC · How many chains?
- **24.5 Auxiliary variable MCMC**
  - Sections: Auxiliary variable sampling for logistic regression · Slice sampling · Swendsen Wang · Hybrid/Hamiltonian MCMC
- **24.6 Annealing methods**
  - Sections: Simulated annealing · Annealed importance sampling · Parallel tempering
- **24.7 Approximating the marginal likelihood**
  - Sections: The candidate method · Harmonic mean estimate · Annealed importance sampling

### Chapter 25 — Clustering
- **25.1 Introduction**
  - Sections: Measuring (dis)similarity · Evaluating the output of clustering methods
- **25.2 Dirichlet process mixture models**
  - Sections: From finite to infinite mixture models · The Dirichlet process · Applying Dirichlet processes to mixture modeling · Fitting a DP mixture model
- **25.3 Affinity propagation**
- **25.4 Spectral clustering**
  - Sections: Graph Laplacian · Normalized graph Laplacian · Example
- **25.5 Hierarchical clustering**
  - Sections: Agglomerative clustering · Divisive clustering · Choosing the number of clusters · Bayesian hierarchical clustering
- **25.6 Clustering datapoints and features**
  - Sections: Biclustering · Multi-view clustering

### Chapter 26 — Graphical Model Structure Learning
- **26.1 Introduction**
- **26.2 Structure learning for knowledge discovery**
  - Sections: Relevance networks · Dependency networks
- **26.3 Learning tree structures**
  - Sections: Directed or undirected tree? · Chow-Liu algorithm for finding the ML tree structure · Finding the MAP forest · Mixtures of trees
- **26.4 Learning DAG structures**
  - Sections: Markov equivalence · Exact structural inference · Scaling up to larger graphs
- **26.5 Learning DAG structure with latent variables**
  - Sections: Approximating the marginal likelihood when we have missing data · Structural EM · Discovering hidden variables · Case study: Google's Rephil · Structural equation models
- **26.6 Learning causal DAGs**
  - Sections: Causal interpretation of DAGs · Using causal DAGs to resolve Simpson's paradox · Learning causal DAG structures
- **26.7 Learning undirected Gaussian graphical models**
  - Sections: MLE for a GGM · Graphical lasso · Bayesian inference for GGM structure · Handling non-Gaussian data using copulas
- **26.8 Learning undirected discrete graphical models**
  - Sections: Graphical lasso for MRFs/CRFs · Thin junction trees

### Chapter 27 — Latent Variable Models for Discrete Data
- **27.1 Introduction**
- **27.2 Distributed state LVMs for discrete data**
  - Sections: Mixture models · Exponential family PCA · LDA and mPCA · GaP model and non-negative matrix factorization
- **27.3 Latent Dirichlet allocation (LDA)**
  - Sections: Basics · Unsupervised discovery of topics · Quantitatively evaluating LDA as a language model · Fitting using (collapsed) Gibbs sampling · Example · Fitting using batch variational inference · Fitting using online variational inference · Determining the number of topics
- **27.4 Extensions of LDA**
  - Sections: Correlated topic model · Dynamic topic model · LDA-HMM · Supervised LDA
- **27.5 LVMs for graph-structured data**
  - Sections: Stochastic block model · Mixed membership stochastic block model · Relational topic model
- **27.6 LVMs for relational data**
  - Sections: Infinite relational model · Probabilistic matrix factorization for collaborative filtering
- **27.7 Restricted Boltzmann machines (RBMs)**
  - Sections: Varieties of RBMs · Learning RBMs · Applications of RBMs

### Chapter 28 — Deep Learning
- **28.1 Introduction**
- **28.2 Deep generative models**
  - Sections: Deep directed networks · Deep Boltzmann machines · Deep belief networks · Greedy layer-wise learning of DBNs
- **28.3 Deep neural networks**
  - Sections: Deep multi-layer perceptrons · Deep auto-encoders · Stacked denoising auto-encoders
- **28.4 Applications of deep networks**
  - Sections: Handwritten digit classification using DBNs · Data visualization and feature discovery using deep auto-encoders · Information retrieval using deep auto-encoders (semantic hashing) · Learning audio features using 1d convolutional DBNs · Learning image features using 2d convolutional DBNs
- **28.5 Discussion**

---

## Murphy Vol2 — Probabilistic ML: Advanced Topics (Chapter Map)

> Kevin Murphy. Covers advanced inference, generative models, discovery, and decision making. Complements Vol1 (introductory) with research-depth treatment.

### Part I — Fundamentals
- **Ch.2 Probability** — univariate/multivariate distributions, exponential family, FIM, Markov chains, divergence measures
  - Sections: Univariate distributions · Multivariate Gaussian · Exponential family · Fisher information matrix · Transformations of RVs · Markov chains · Divergence measures
- **Ch.3 Statistics** — conjugate priors, noninformative priors, hierarchical priors, empirical Bayes, model selection, Bayesian decision theory
  - Sections: Conjugate priors · Beyond conjugate priors · Noninformative priors · Hierarchical priors · Empirical Bayes · Model selection · Bayesian decision theory
- **Ch.4 Probabilistic Graphical Models** — Bayes nets, MRFs, factor graphs, structural causal models
  - Sections: Directed PGMs · Undirected PGMs · Comparing directed/undirected · Extensions of Bayes nets · Structural causal models
- **Ch.5 Information Theory** — KL divergence, entropy, mutual information, data compression, information bottleneck
  - Sections: KL divergence · Entropy · Mutual information · Data compression · Error-correcting codes · Information bottleneck
- **Ch.6 Optimization** — autodiff, SGD, natural gradient, mirror descent, stochastic gradients, EM, Bayesian learning rule, Bayesian optimization, optimal transport, submodular optimization
  - Sections: Automatic differentiation · SGD · Natural gradient · Mirror descent · Gradients of stochastic functions · Bound optimization/EM · Bayesian learning rule · Bayesian optimization · Optimal transport · Submodular optimization

### Part II — Inference
- **Ch.7 Inference Algorithms Overview** — common inference patterns (global/local latents), exact/approximate inference, Laplace approximation, VI, MCMC, SMC
- **Ch.8 State-Space Inference** — Kalman filter, RTS smoother, EKF, UKF, assumed density filtering, Gaussian sum filter
  - Sections: Bayesian filtering/smoothing · Discrete SSM inference · Linear-Gaussian SSM inference · Local linearization · Unscented transform · ADF
- **Ch.9 Message Passing Inference** — BP on trees, loopy BP, variable elimination, junction tree algorithm, inference as backpropagation
  - Sections: BP on trees · Loopy BP · Variable elimination · Junction tree algorithm · Inference as backpropagation
- **Ch.10 Variational Inference** — mean-field VI, fixed-form VI, more accurate posteriors, ELBO/lower bounds, expectation propagation
  - Sections: Mean field VI · Fixed-form VI · More accurate variational posteriors · Lower/upper bounds · Expectation propagation
- **Ch.11 Monte Carlo Inference** — MC integration, sampling from distributions, rejection sampling, importance sampling, variance reduction
- **Ch.12 Markov Chain Monte Carlo** — Metropolis-Hastings, Gibbs sampling, auxiliary variable MCMC, HMC, convergence, stochastic gradient MCMC, reversible jump MCMC, annealing
  - Sections: MH algorithm · Gibbs sampling · Auxiliary variable MCMC · HMC · MCMC convergence · SG-MCMC · Reversible jump MCMC · Annealing
- **Ch.13 Sequential Monte Carlo** — particle filtering, proposal distributions, Rao-Blackwellised PF, SMC samplers, particle MCMC

### Part III — Predictive Models
- **Ch.14 Predictive Models Overview** — evaluating predictive models, conformal prediction
- **Ch.15 Generalized Linear Models** — Bayesian linear regression, logistic regression, probit regression, multi-level GLMs
- **Ch.16 Deep Neural Networks** — differentiable circuits building blocks, canonical NN examples
- **Ch.17 Bayesian Neural Networks** — priors/likelihoods/posteriors for BNNs, generalization, online inference, hierarchical BNNs
  - Sections: Priors for BNNs · Likelihoods · Posteriors · Generalization in Bayesian DL · Online inference · Hierarchical BNNs
- **Ch.18 Gaussian Processes** — Mercer kernels, GP regression, GP classification, scalable GP inference, kernel learning, GPs and DNNs
  - Sections: Mercer kernels · GPs with Gaussian likelihoods · GPs with non-Gaussian likelihoods · Scaling GP inference · Learning the kernel · GPs and DNNs
- **Ch.19 Structured Prediction** — conditional random fields (CRFs), time series forecasting
- **Ch.20 Beyond IID** — distribution shift, training/test-time techniques, learning from multiple distributions, meta-learning, continual learning, adversarial examples
  - Sections: Distribution shift · Training-time techniques · Test-time techniques · Learning from multiple distributions · Meta-learning · Continual learning · Adversarial examples

### Part IV — Generative Models
- **Ch.21 Generative Models Overview** — types of generative model, goals, evaluation
- **Ch.22 Variational Autoencoders** — VAE basics, generalizations (β-VAE, IWAE), posterior collapse, hierarchical VAEs, VQ-VAE, wake-sleep
  - Sections: VAE basics · VAE generalizations · Avoiding posterior collapse · Hierarchical VAEs · VQ-VAE · Wake-sleep algorithm
- **Ch.23 Auto-regressive Models** — NADE, causal CNNs, transformer decoders as density estimators
- **Ch.24 Normalizing Flows** — affine/elementwise/coupling/autoregressive/residual/continuous-time flows; density estimation, generative modeling, inference applications
  - Sections: Constructing flows · Applications
- **Ch.25 Energy-Based Models** — products of experts, contrastive divergence, score matching (basic/denoising/sliced), noise contrastive estimation
  - Sections: Maximum likelihood training · Score matching · Noise contrastive estimation · Other methods
- **Ch.26 Denoising Diffusion Models** — model definition, training, connections with score matching/VAEs/flows
- **Ch.27 Generative Adversarial Networks** — learning by comparison, GAN variants, conditional GANs, inference with GANs, neural architectures, applications
  - Sections: Learning by comparison · GANs · Conditional GANs · Inference with GANs · Neural architectures · Applications

### Part V — Discovery
- **Ch.28 Discovery Methods Overview**
- **Ch.29 Latent Variable Models** — Gaussian/Bernoulli mixture models, factor analysis, probabilistic PCA, mixture of factor analysers, NMF, LDA, ICA, sparse coding, nonlinear ICA
  - Sections: Mixture models · Factor analysis · Mixture of factor analysers · LVMs with non-Gaussian priors · ICA
- **Ch.30 Hidden Markov Models** — parameterization, applications, Baum-Welch (EM), spectral methods, generalizations (HSMM, hierarchical HMMs, factorial HMMs, DBNs)
  - Sections: HMM parameterization · HMM applications · HMM parameter learning · HMM generalizations
- **Ch.31 State-Space Models** — linear dynamical systems, nonlinear dynamical systems, exponential family SSM, deep state space models (deep Markov, S4)
  - Sections: Linear dynamical systems · Non-linear dynamical systems · Other SSM kinds · Deep state space models
- **Ch.32 Graph Learning** — stochastic block model, mixed-membership SBM, infinite relational model, graphical model structure learning
- **Ch.33 Non-Parametric Bayesian Models** — Dirichlet process (stick-breaking, CRP), DP mixture models, Pitman-Yor, Indian buffet process, completely random measures, Lévy processes, point processes (Poisson, Hawkes, DPP)
  - Sections: Dirichlet process · Generalizations of DP · Indian buffet process · Small-variance asymptotics · Completely random measures · Lévy processes · Point processes
- **Ch.34 Representation Learning** — CLIP (contrastive language-image pretraining)
- **Ch.35 Interpretability** — inherently interpretable models, example-based methods, post-hoc explanations, transparency/visualization, evaluation of explanations
  - Sections: Methods for interpretable ML · Properties of explanations · Evaluation of interpretable ML · Discussion

### Part VI — Decision Making
- **Ch.36 Multi-step Decision Problems** — decision/influence diagrams, value of information, A/B testing (Bayesian), contextual bandits (UCB, Thompson sampling), Markov decision problems, planning (value/policy iteration)
  - Sections: Decision diagrams · A/B testing · Contextual bandits · MDPs · Planning in MDPs
- **Ch.37 Reinforcement Learning** — value-based RL (TD, Q-learning, DQN), policy-based RL (REINFORCE, actor-critic, PPO), model-based RL, off-policy learning, control as inference / max-entropy RL
  - Sections: Value-based RL · Policy-based RL · Model-based RL · Off-policy learning · Control as inference
- **Ch.38 Causality** — SCMs, causal DAGs, identification, counterfactuals, RCTs, confounder adjustment, instrumental variables, difference-in-differences, do-calculus, backdoor/frontdoor adjustment

---

## Algorithmic Aspects of ML — Chapter Map

> Ankur Moitra (MIT). Covers algorithmic and mathematical foundations of core ML methods: matrix/tensor factorization, sparse recovery, sparse coding, mixture models, and matrix completion. Lecture-notes style with rigorous proofs and exercises.

### Chapters
- **Introduction** — overview of algorithmic ML, motivation for mathematical rigor
- **Nonnegative Matrix Factorization**
  - Sections: Introduction · Algebraic Algorithms · Stability and Separability · Topic Models · Exercises
- **Tensor Decompositions: Algorithms**
  - Sections: The Rotation Problem · A Primer on Tensors · Jennrich's Algorithm · Perturbation Bounds · Exercises
- **Tensor Decompositions: Applications**
  - Sections: Phylogenetic Trees and HMMs · Community Detection · Extensions to Mixed Models · Independent Component Analysis · Exercises
- **Sparse Recovery**
  - Sections: Introduction · Incoherence and Uncertainty Principles · Pursuit Algorithms · Prony's Method · Compressed Sensing · Exercises
- **Sparse Coding**
  - Sections: Introduction · The Undercomplete Case · Gradient Descent · The Overcomplete Case · Exercises
- **Gaussian Mixture Models**
  - Sections: Introduction · Clustering-Based Algorithms · Discussion of Density Estimation · Clustering-Free Algorithms · A Univariate Algorithm · A View from Algebraic Geometry · Exercises
- **Matrix Completion**
  - Sections: Introduction · Nuclear Norm · Quantum Golfing
  - Sections: Causal formalism · Randomized control trials · Confounder adjustment · Instrumental variables · Difference in differences · Credibility checks · Do calculus

---

## Pattern Recognition and ML — Bishop (Chapter Map)

> Christopher M. Bishop. Comprehensive treatment of pattern recognition and machine learning from a Bayesian perspective. Covers probabilistic graphical models, approximate inference, kernel methods, and sequential data. Essential for ML theory depth.

### Chapter 1 — Introduction
- **1.1 Example: Polynomial Curve Fitting** — overfitting, model complexity, regularization
- **1.2 Probability Theory**
  - Sections: Probability densities · Expectations and covariances · Bayesian probabilities · The Gaussian distribution · Curve fitting re-visited · Bayesian curve fitting
- **1.3 Model Selection** — cross-validation, information criteria
- **1.4 The Curse of Dimensionality** — exponential volume, high-dimensional geometry
- **1.5 Decision Theory**
  - Sections: Minimizing the misclassification rate · Minimizing the expected loss · The reject option · Inference and decision · Loss functions for regression
- **1.6 Information Theory**
  - Sections: Relative entropy and mutual information

### Chapter 2 — Probability Distributions
- **2.1 Binary Variables**
  - Sections: The beta distribution
- **2.2 Multinomial Variables**
  - Sections: The Dirichlet distribution
- **2.3 The Gaussian Distribution**
  - Sections: Conditional Gaussian distributions · Marginal Gaussian distributions · Bayes' theorem for Gaussian variables · Maximum likelihood for the Gaussian · Sequential estimation · Bayesian inference for the Gaussian · Student's t-distribution · Periodic variables · Mixtures of Gaussians
- **2.4 The Exponential Family**
  - Sections: Maximum likelihood and sufficient statistics · Conjugate priors · Noninformative priors
- **2.5 Nonparametric Methods**
  - Sections: Kernel density estimators · Nearest-neighbour methods

### Chapter 3 — Linear Models for Regression
- **3.1 Linear Basis Function Models**
  - Sections: Maximum likelihood and least squares · Geometry of least squares · Sequential learning · Regularized least squares · Multiple outputs
- **3.2 The Bias-Variance Decomposition**
- **3.3 Bayesian Linear Regression**
  - Sections: Parameter distribution · Predictive distribution · Equivalent kernel
- **3.4 Bayesian Model Comparison**
- **3.5 The Evidence Approximation**
  - Sections: Evaluation of the evidence function · Maximizing the evidence function · Effective number of parameters
- **3.6 Limitations of Fixed Basis Functions**

### Chapter 4 — Linear Models for Classification
- **4.1 Discriminant Functions**
  - Sections: Two classes · Multiple classes · Least squares for classification · Fisher's linear discriminant · Relation to least squares · Fisher's discriminant for multiple classes · The perceptron algorithm
- **4.2 Probabilistic Generative Models**
  - Sections: Continuous inputs · Maximum likelihood solution · Discrete features · Exponential family
- **4.3 Probabilistic Discriminative Models**
  - Sections: Fixed basis functions · Logistic regression · Iterative reweighted least squares · Multiclass logistic regression · Probit regression · Canonical link functions
- **4.4 The Laplace Approximation**
  - Sections: Model comparison and BIC
- **4.5 Bayesian Logistic Regression**
  - Sections: Laplace approximation · Predictive distribution

### Chapter 5 — Neural Networks
- **5.1 Feed-forward Network Functions**
  - Sections: Weight-space symmetries
- **5.2 Network Training**
  - Sections: Parameter optimization · Local quadratic approximation · Use of gradient information · Gradient descent optimization
- **5.3 Error Backpropagation**
  - Sections: Evaluation of error-function derivatives · A simple example · Efficiency of backpropagation · The Jacobian matrix
- **5.4 The Hessian Matrix**
  - Sections: Diagonal approximation · Outer product approximation · Inverse Hessian · Finite differences · Exact evaluation of the Hessian · Fast multiplication by the Hessian
- **5.5 Regularization in Neural Networks**
  - Sections: Consistent Gaussian priors · Early stopping · Invariances · Tangent propagation · Training with transformed data · Convolutional networks · Soft weight sharing
- **5.6 Mixture Density Networks**
- **5.7 Bayesian Neural Networks**
  - Sections: Posterior parameter distribution · Hyperparameter optimization · Bayesian neural networks for classification

### Chapter 6 — Kernel Methods
- **6.1 Dual Representations**
- **6.2 Constructing Kernels**
- **6.3 Radial Basis Function Networks**
  - Sections: Nadaraya-Watson model
- **6.4 Gaussian Processes**
  - Sections: Linear regression revisited · Gaussian processes for regression · Learning the hyperparameters · Automatic relevance determination · Gaussian processes for classification · Laplace approximation · Connection to neural networks

### Chapter 7 — Sparse Kernel Machines
- **7.1 Maximum Margin Classifiers**
  - Sections: Overlapping class distributions · Relation to logistic regression · Multiclass SVMs · SVMs for regression · Computational learning theory
- **7.2 Relevance Vector Machines**
  - Sections: RVM for regression · Analysis of sparsity · RVM for classification

### Chapter 8 — Graphical Models
- **8.1 Bayesian Networks**
  - Sections: Example: Polynomial regression · Generative models · Discrete variables · Linear-Gaussian models
- **8.2 Conditional Independence**
  - Sections: Three example graphs · D-separation
- **8.3 Markov Random Fields**
  - Sections: Conditional independence properties · Factorization properties · Illustration: Image de-noising · Relation to directed graphs
- **8.4 Inference in Graphical Models**
  - Sections: Inference on a chain · Trees · Factor graphs · The sum-product algorithm · The max-sum algorithm · Exact inference in general graphs · Loopy belief propagation · Learning the graph structure

### Chapter 9 — Mixture Models and EM
- **9.1 K-means Clustering**
  - Sections: Image segmentation and compression
- **9.2 Mixtures of Gaussians**
  - Sections: Maximum likelihood · EM for Gaussian mixtures
- **9.3 An Alternative View of EM**
  - Sections: Gaussian mixtures revisited · Relation to K-means · Mixtures of Bernoulli distributions · EM for Bayesian linear regression
- **9.4 The EM Algorithm in General**

### Chapter 10 — Approximate Inference
- **10.1 Variational Inference**
  - Sections: Factorized distributions · Properties of factorized approximations · Example: The univariate Gaussian · Model comparison
- **10.2 Illustration: Variational Mixture of Gaussians**
  - Sections: Variational distribution · Variational lower bound · Predictive density · Determining the number of components · Induced factorizations
- **10.3 Variational Linear Regression**
  - Sections: Variational distribution · Predictive distribution · Lower bound
- **10.4 Exponential Family Distributions**
  - Sections: Variational message passing
- **10.5 Local Variational Methods**
- **10.6 Variational Logistic Regression**
  - Sections: Variational posterior distribution · Optimizing the variational parameters · Inference of hyperparameters
- **10.7 Expectation Propagation**
  - Sections: Example: The clutter problem · Expectation propagation on graphs

### Chapter 11 — Sampling Methods
- **11.1 Basic Sampling Algorithms**
  - Sections: Standard distributions · Rejection sampling · Adaptive rejection sampling · Importance sampling · Sampling-importance-resampling · Sampling and the EM algorithm
- **11.2 Markov Chain Monte Carlo**
  - Sections: Markov chains · The Metropolis-Hastings algorithm
- **11.3 Gibbs Sampling**
- **11.4 Slice Sampling**
- **11.5 The Hybrid Monte Carlo Algorithm**
  - Sections: Dynamical systems · Hybrid Monte Carlo
- **11.6 Estimating the Partition Function**

### Chapter 12 — Continuous Latent Variables
- **12.1 Principal Component Analysis**
  - Sections: Maximum variance formulation · Minimum-error formulation · Applications of PCA · PCA for high-dimensional data
- **12.2 Probabilistic PCA**
  - Sections: Maximum likelihood PCA · EM algorithm for PCA · Bayesian PCA · Factor analysis
- **12.3 Kernel PCA**
- **12.4 Nonlinear Latent Variable Models**
  - Sections: Independent component analysis · Autoassociative neural networks · Modelling nonlinear manifolds

### Chapter 13 — Sequential Data
- **13.1 Markov Models**
- **13.2 Hidden Markov Models**
  - Sections: Maximum likelihood for the HMM · The forward-backward algorithm · The sum-product algorithm for the HMM · Scaling factors · The Viterbi algorithm · Extensions of the hidden Markov model
- **13.3 Linear Dynamical Systems**
  - Sections: Inference in LDS · Learning in LDS · Extensions of LDS · Particle filters

### Chapter 14 — Combining Models
- **14.1 Bayesian Model Averaging**
- **14.2 Committees**
- **14.3 Boosting**
  - Sections: Minimizing exponential error · Error functions for boosting
- **14.4 Tree-based Models**
- **14.5 Conditional Mixture Models**
  - Sections: Mixtures of linear regression models · Mixtures of logistic models · Mixtures of experts

### Appendices
- **Appendix A** — Data Sets
- **Appendix B** — Probability Distributions
- **Appendix C** — Properties of Matrices
- **Appendix D** — Calculus of Variations
- **Appendix E** — Lagrange Multipliers

---

## Mathematics for Machine Learning — Deisenroth, Faisal, Ong (Chapter Map)

> Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong. Bridges mathematical foundations and their application to core ML algorithms. Covers linear algebra, analytic geometry, matrix decompositions, vector calculus, probability, and optimization — then applies them to regression, PCA, density estimation, and SVMs.

### Part I — Mathematical Foundations

#### Chapter 1 — Introduction and Motivation
- **1.1 Finding Words for Intuitions**
- **1.2 Two Ways to Read This Book**
- **1.3 Exercises and Feedback**

#### Chapter 2 — Linear Algebra
- **2.1 Systems of Linear Equations**
- **2.2 Matrices**
- **2.3 Solving Systems of Linear Equations**
- **2.4 Vector Spaces**
- **2.5 Linear Independence**
- **2.6 Basis and Rank**
- **2.7 Linear Mappings**
- **2.8 Affine Spaces**
- **2.9 Further Reading**

#### Chapter 3 — Analytic Geometry
- **3.1 Norms**
- **3.2 Inner Products**
- **3.3 Lengths and Distances**
- **3.4 Angles and Orthogonality**
- **3.5 Orthonormal Basis**
- **3.6 Orthogonal Complement**
- **3.7 Inner Product of Functions**
- **3.8 Orthogonal Projections**
- **3.9 Rotations**
- **3.10 Further Reading**

#### Chapter 4 — Matrix Decompositions
- **4.1 Determinant and Trace**
- **4.2 Eigenvalues and Eigenvectors**
- **4.3 Cholesky Decomposition**
- **4.4 Eigendecomposition and Diagonalization**
- **4.5 Singular Value Decomposition**
- **4.6 Matrix Approximation**
- **4.7 Matrix Phylogeny**
- **4.8 Further Reading**

#### Chapter 5 — Vector Calculus
- **5.1 Differentiation of Univariate Functions**
- **5.2 Partial Differentiation and Gradients**
- **5.3 Gradients of Vector-Valued Functions**
- **5.4 Gradients of Matrices**
- **5.5 Useful Identities for Computing Gradients**
- **5.6 Backpropagation and Automatic Differentiation**
- **5.7 Higher-Order Derivatives**
- **5.8 Linearization and Multivariate Taylor Series**
- **5.9 Further Reading**

#### Chapter 6 — Probability and Distributions
- **6.1 Construction of a Probability Space**
- **6.2 Discrete and Continuous Probabilities**
- **6.3 Sum Rule, Product Rule, and Bayes' Theorem**
- **6.4 Summary Statistics and Independence**
- **6.5 Gaussian Distribution**
- **6.6 Conjugacy and the Exponential Family**
- **6.7 Change of Variables/Inverse Transform**
- **6.8 Further Reading**

#### Chapter 7 — Continuous Optimization
- **7.1 Optimization Using Gradient Descent**
- **7.2 Constrained Optimization and Lagrange Multipliers**
- **7.3 Convex Optimization**
- **7.4 Further Reading**

### Part II — Central Machine Learning Problems

#### Chapter 8 — When Models Meet Data
- **8.1 Data, Models, and Learning**
- **8.2 Empirical Risk Minimization**
- **8.3 Parameter Estimation**
- **8.4 Probabilistic Modeling and Inference**
- **8.5 Directed Graphical Models**
- **8.6 Model Selection**

#### Chapter 9 — Linear Regression
- **9.1 Problem Formulation**
- **9.2 Parameter Estimation**
- **9.3 Bayesian Linear Regression**
- **9.4 Maximum Likelihood as Orthogonal Projection**
- **9.5 Further Reading**

#### Chapter 10 — Dimensionality Reduction with Principal Component Analysis
- **10.1 Problem Setting**
- **10.2 Maximum Variance Perspective**
- **10.3 Projection Perspective**
- **10.4 Eigenvector Computation and Low-Rank Approximations**
- **10.5 PCA in High Dimensions**
- **10.6 Key Steps of PCA in Practice**
- **10.7 Latent Variable Perspective**
- **10.8 Further Reading**

#### Chapter 11 — Density Estimation with Gaussian Mixture Models
- **11.1 Gaussian Mixture Model**
- **11.2 Parameter Learning via Maximum Likelihood**
- **11.3 EM Algorithm**
- **11.4 Latent-Variable Perspective**
- **11.5 Further Reading**

#### Chapter 12 — Classification with Support Vector Machines
- **12.1 Separating Hyperplanes**
- **12.2 Primal Support Vector Machine**
- **12.3 Dual Support Vector Machine**
- **12.4 Kernels**
- **12.5 Numerical Solution**
- **12.6 Further Reading**

---

## Learning Theory: Foundations and Algorithms — Mohri, Rostamizadeh, Talwalkar (Chapter Map)

> Mehryar Mohri, Afshin Rostamizadeh, Ameet Talwalkar. Rigorous mathematical treatment of statistical learning theory. Covers PAC learning, Rademacher complexity, generalization bounds, optimization for ML, local averaging, kernel methods, sparse methods, neural networks, ensemble learning, online learning, bandits, overparameterized models, structured prediction, probabilistic methods, and lower bounds.

### Preface

### Part I — Preliminaries

#### Chapter 1 — Mathematical Preliminaries
- **1.1 Linear Algebra and Differentiable Calculus**
  - Sections: Minimization of Quadratic Forms · Inverting a 2×2 Matrix · Inverting Matrices Defined by Blocks, Matrix Inversion Lemma · Eigenvalue and Singular Value Decomposition · Differential Calculus
- **1.2 Concentration Inequalities**
  - Sections: Hoeffding's Inequality · McDiarmid's Inequality · Bernstein's Inequality · Expectation of the Maximum · Estimation of Expectations through Quadrature · Concentration Inequalities for Random Matrices

#### Chapter 2 — Introduction to Supervised Learning
- **2.1 From Training Data to Predictions**
- **2.2 Decision Theory**
  - Sections: Supervised Learning Problems and Loss Functions · Risks · Bayes Risk and Bayes Predictor
- **2.3 Learning from Data**
  - Sections: Local Averaging · Empirical Risk Minimization
- **2.4 Statistical Learning Theory**
  - Sections: Measures of Performance · Notions of Consistency over Classes of Problems
- **2.5 "No Free Lunch" Theorems**
- **2.6 Quest for Adaptivity**
- **2.7 Beyond Supervised Learning**
- **2.8 Summary–Book Outline**

#### Chapter 3 — Linear Least-Squares Regression
- **3.1 Introduction**
- **3.2 Least-Squares Framework**
- **3.3 Ordinary Least-Squares Estimator**
  - Sections: Closed-Form Solution · Geometric Interpretation · Numerical Resolution
- **3.4 Statistical Analysis of Ordinary Least-Squares**
- **3.5 Fixed Design Setting**
  - Sections: Statistical Properties of the OLS Estimator · Experiments
- **3.6 Ridge Least-Squares Regression**
- **3.7 Lower Bound**
- **3.8 Random Design Analysis**
  - Sections: Gaussian Designs · General Designs
- **3.9 Principal Component Analysis**
- **3.10 Conclusion**

### Part II — Generalization Bounds for Learning Algorithms

#### Chapter 4 — Empirical Risk Minimization
- **4.1 Convexification of the Risk**
  - Sections: Convex Surrogates · Geometric Interpretation of the SVM · Conditional φ-risk and Classification Calibration · Relation between Risk and φ-risk
- **4.2 Risk Minimization Decomposition**
- **4.3 Approximation Error**
- **4.4 Estimation Error**
  - Sections: Application of McDiarmid's Inequality · Easy Case I: Quadratic Functions · Easy Case II: Finite Number of Models · Beyond Finitely Many Models through Covering Numbers
- **4.5 Rademacher Complexity**
  - Sections: Symmetrization · Lipschitz-Continuous Losses · Ball-Constrained Linear Predictions · Putting Things Together (Linear Predictions) · From Constrained to Regularized Estimation · Extensions and Improvements
- **4.6 Model Selection**
  - Sections: Structural Risk Minimization · Selection Based on Validation Set
- **4.7 Relation with Asymptotic Statistics**
- **4.8 Summary**

#### Chapter 5 — Optimization for Machine Learning
- **5.1 Optimization in Machine Learning**
- **5.2 Gradient Descent**
  - Sections: Simplest Analysis: Ordinary Least-Squares · Convex Functions and Their Properties · Analysis of GD for Strongly Convex and Smooth Functions · Analysis of GD for Convex and Smooth Functions · Beyond Gradient Descent · Nonconvex Objective Functions
- **5.3 Gradient Methods on Nonsmooth Problems**
- **5.4 Stochastic Gradient Descent**
  - Sections: Strongly Convex Problems · Adaptive Methods · Bias-Variance Trade-offs for Least-Squares · Variance Reduction
- **5.5 Conclusion**

#### Chapter 6 — Local Averaging Methods
- **6.1 Introduction**
- **6.2 Local Averaging Methods**
  - Sections: Linear Estimators · Partition Estimators · Nearest-Neighbors · Nadaraya-Watson Estimator (Kernel Regression)
- **6.3 Generic Simplest Consistency Analysis**
  - Sections: Fixed Partition · k-nearest Neighbor · Kernel Regression (Nadaraya-Watson)
- **6.4 Universal Consistency**
- **6.5 Adaptivity**
- **6.6 Conclusion**

#### Chapter 7 — Kernel Methods
- **7.1 Introduction**
- **7.2 Representer Theorem**
- **7.3 Kernels**
  - Sections: Linear and Polynomial Kernels · Translation-Invariant Kernels on [0,1] · Translation-Invariant Kernels on Rd · Beyond Vectorial Input Spaces
- **7.4 Algorithms**
  - Sections: Representer Theorem · Column Sampling · Random Features · Dual Algorithms · Stochastic Gradient Descent · Kernelization of Linear Algorithms
- **7.5 Generalization Guarantees–Lipschitz-continuous Losses**
  - Sections: Risk Decomposition · Approximation Error for Translation-Invariant Kernels on Rd
- **7.6 Theoretical Analysis of Ridge Regression**
  - Sections: Kernel Ridge Regression as a Linear Estimator · Bias and Variance Decomposition · Relating Empirical and Population Covariance Operators · Analysis for Well-Specified Problems · Analysis beyond Well-Specified Problems · Balancing Bias and Variance
- **7.7 Experiments**
- **7.8 Conclusion**

#### Chapter 8 — Sparse Methods
- **8.1 Introduction**
  - Sections: Dedicated Proof Technique for Constrained Least-Squares · Probabilistic and Combinatorial Lemmas
- **8.2 Variable Selection by the ℓ0-penalty**
  - Sections: Assuming That k Is Known · Sparsity-Adaptive Estimation (Unknown k)
- **8.3 Variable Selection by ℓ1-regularization**
  - Sections: Intuition and Algorithms · Slow Rates–Random Design · Slow Rates–Fixed Design (Square Loss) · Fast Rates–Fixed Design · Zoo of Conditions · Fast Rates–Random Design
- **8.4 Experiments**
- **8.5 Extensions**
- **8.6 Conclusion**

#### Chapter 9 — Neural Networks
- **9.1 Introduction**
- **9.2 Single Hidden-Layer Neural Network**
  - Sections: Optimization · Rectified Linear Units and Homogeneity · Estimation Error
- **9.3 Approximation Properties**
  - Sections: Universal Approximation Property in One Dimension · Infinitely Many Neurons and the Variation Norm · Variation Norm in One Dimension · Variation Norm in an Arbitrary Dimension · Precise Approximation Properties · From the Variation Norm to a Finite Number of Neurons
- **9.4 Generalization Performance for Neural Networks**
- **9.5 Relationship with Kernel Methods**
  - Sections: From a Banach Space F1 to a Hilbert Space F2 · Kernel Function · Upper Bound on RKHS Norm
- **9.6 Experiments**
- **9.7 Extensions**
- **9.8 Conclusion**

### Part III — Special Topics

#### Chapter 10 — Ensemble Learning
- **10.1 Averaging/Bagging**
  - Sections: Independent Datasets · Bagging
- **10.2 Random Projections and Averaging**
  - Sections: Gaussian Sketching · Random Projections
- **10.3 Boosting**
  - Sections: Problem Setup · Incremental Learning · Matching Pursuit · Adaboost · Greedy Algorithm Based on Gradient Boosting · Convergence of Expected Risk · Experiments
- **10.4 Conclusion**

#### Chapter 11 — From Online Learning to Bandits
- **11.1 First-Order Online Convex Optimization**
  - Sections: Convex Case · Strongly Convex Case · Online Mirror Descent · Lower Bounds
- **11.2 Zeroth-Order Convex Optimization**
  - Sections: Smooth Stochastic Gradient Descent · Stochastic Smoothing · Extensions
- **11.3 Multiarmed Bandits**
  - Sections: Need for an Exploration-Exploitation Trade-off · "Explore-Then-Commit" · Optimism in the Face of Uncertainty · Adversarial Bandits
- **11.4 Conclusion**

#### Chapter 12 — Overparameterized Models
- **12.1 Implicit Bias of Gradient Descent**
  - Sections: Least-Squares Regression · Separable Classification · Beyond Convex Problems · Remarks on Implicit Bias
- **12.2 Double Descent**
  - Sections: The Double Descent Phenomenon · Empirical Evidence · Linear Regression with Gaussian Inputs · Linear Regression with Gaussian Projections
- **12.3 Global Convergence of Gradient Descent**
  - Sections: Mean Field Limits · From Linear Networks to Positive-Definite Matrices · Global Convergence for Positive-Definite Matrices · Special Cases
- **12.4 Lazy Regime and Neural Tangent Kernels**
- **12.5 Conclusion**

#### Chapter 13 — Structured Prediction
- **13.1 Multicategory Classification**
  - Sections: Extension of Classical Convex Surrogates · Generalization Bound I: Stochastic Gradient Descent · Generalization Bound II: Rademacher Complexities
- **13.2 General Setup and Examples**
  - Sections: Examples · Structure Encoding Loss Functions
- **13.3 Surrogate Methods**
  - Sections: Score Functions and Decoding Step · Fisher Consistency and Calibration Functions · Main Surrogate Frameworks
- **13.4 Smooth/Quadratic Surrogates**
  - Sections: Quadratic Surrogate · Theoretical Guarantees · Linear Estimators and Decoding Steps · Smooth Surrogates
- **13.5 Max-Margin Formulations**
  - Sections: Structured Support Vector Machines · Max-Min Formulations
- **13.6 Generalization Bounds**
- **13.7 Experiments**
  - Sections: Robust Regression · Ranking
- **13.8 Conclusion**

#### Chapter 14 — Probabilistic Methods
- **14.1 From Empirical Risks to Log-Likelihoods**
  - Sections: Conditional Likelihoods · Classical Priors · Sparse Priors · On the Relationship between MAP and MMSE
- **14.2 Discriminative versus Generative Models**
  - Sections: Linear Discriminant Analysis and Softmax Regression · Naive Bayes · Maximum Likelihood Estimations
- **14.3 Bayesian Inference**
  - Sections: Computational Handling of Posterior Distributions · Model Selection through Marginal Likelihood
- **14.4 PAC-Bayesian Analysis**
  - Sections: Setup · Uniformly Bounded Loss Functions
- **14.5 Conclusion**

#### Chapter 15 — Lower Bounds
- **15.1 Statistical Lower Bounds**
  - Sections: Minimax Lower Bounds · Reduction to a Hypothesis Test · Review of Information Theory · Lower Bound on Hypothesis Testing Based on Information Theory · Examples · Minimax Lower Bounds through Bayesian Analysis
- **15.2 Optimization Lower Bounds**
  - Sections: Convex Optimization · Nonconvex Optimization
- **15.3 Lower Bounds for Stochastic Gradient Descent**
- **15.4 Conclusion**

#### Chapter 16 — Conclusion

---

## Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow — Aurélien Géron (Chapter Map)

> Aurélien Géron. Practical, hands-on guide to machine learning and deep learning using Python's most popular libraries. Covers the full ML workflow from data preparation to model deployment, including classical ML with Scikit-Learn, deep learning with Keras and TensorFlow, CNNs, RNNs, NLP, autoencoders, GANs, diffusion models, reinforcement learning, and large-scale training.

### Preface
- The Machine Learning Tsunami
- Machine Learning in Your Projects
- Objective and Approach
- Code Examples
- Prerequisites
- Roadmap
- Changes Between the First and the Second Edition
- Changes Between the Second and the Third Edition
- Other Resources

### Part I — The Fundamentals of Machine Learning

#### Chapter 1 — The Machine Learning Landscape
- **What Is Machine Learning?**
- **Why Use Machine Learning?**
- **Examples of Applications**
- **Types of Machine Learning Systems**
  - Training Supervision
    - Supervised learning
    - Unsupervised learning
    - Semi-supervised learning
    - Self-supervised learning
    - Reinforcement learning
  - Batch Versus Online Learning
    - Batch learning
    - Online learning
  - Instance-Based Versus Model-Based Learning
    - Instance-based learning
    - Model-based learning and a typical machine learning workflow
- **Main Challenges of Machine Learning**
  - Insufficient Quantity of Training Data
  - Nonrepresentative Training Data
  - Poor-Quality Data
  - Irrelevant Features
  - Overfitting the Training Data
  - Underfitting the Training Data
  - Stepping Back
- **Testing and Validating**
  - Hyperparameter Tuning and Model Selection
  - Data Mismatch
- **Exercises**

#### Chapter 2 — End-to-End Machine Learning Project
- **Working with Real Data**
- **Look at the Big Picture**
  - Frame the Problem
  - Select a Performance Measure
  - Check the Assumptions
- **Get the Data**
  - Running the Code Examples Using Google Colab
  - Saving Your Code Changes and Your Data
  - The Power and Danger of Interactivity
  - Book Code Versus Notebook Code
  - Download the Data
  - Take a Quick Look at the Data Structure
  - Create a Test Set
- **Explore and Visualize the Data to Gain Insights**
  - Visualizing Geographical Data
  - Look for Correlations
  - Experiment with Attribute Combinations
- **Prepare the Data for Machine Learning Algorithms**
  - Clean the Data
  - Handling Text and Categorical Attributes
  - Feature Scaling and Transformation
  - Custom Transformers
  - Transformation Pipelines
- **Select and Train a Model**
  - Train and Evaluate on the Training Set
  - Better Evaluation Using Cross-Validation
- **Fine-Tune Your Model**
  - Grid Search
  - Randomized Search
  - Ensemble Methods
  - Analyzing the Best Models and Their Errors
  - Evaluate Your System on the Test Set
- **Launch, Monitor, and Maintain Your System**
- **Try It Out!**
- **Exercises**

#### Chapter 3 — Classification
- **MNIST**
- **Training a Binary Classifier**
- **Performance Measures**
  - Measuring Accuracy Using Cross-Validation
  - Confusion Matrices
  - Precision and Recall
  - The Precision/Recall Trade-off
  - The ROC Curve
- **Multiclass Classification**
- **Error Analysis**
- **Multilabel Classification**
- **Multioutput Classification**
- **Exercises**

#### Chapter 4 — Training Models
- **Linear Regression**
  - The Normal Equation
  - Computational Complexity
- **Gradient Descent**
  - Batch Gradient Descent
  - Stochastic Gradient Descent
  - Mini-Batch Gradient Descent
- **Polynomial Regression**
- **Learning Curves**
- **Regularized Linear Models**
  - Ridge Regression
  - Lasso Regression
  - Elastic Net Regression
  - Early Stopping
- **Logistic Regression**
  - Estimating Probabilities
  - Training and Cost Function
  - Decision Boundaries
  - Softmax Regression
- **Exercises**

#### Chapter 5 — Support Vector Machines
- **Linear SVM Classification**
  - Soft Margin Classification
- **Nonlinear SVM Classification**
  - Polynomial Kernel
  - Similarity Features
  - Gaussian RBF Kernel
  - SVM Classes and Computational Complexity
- **SVM Regression**
- **Under the Hood of Linear SVM Classifiers**
- **The Dual Problem**
  - Kernelized SVMs
- **Exercises**

#### Chapter 6 — Decision Trees
- **Training and Visualizing a Decision Tree**
- **Making Predictions**
- **Estimating Class Probabilities**
- **The CART Training Algorithm**
- **Computational Complexity**
- **Gini Impurity or Entropy?**
- **Regularization Hyperparameters**
- **Regression**
- **Sensitivity to Axis Orientation**
- **Decision Trees Have a High Variance**
- **Exercises**

#### Chapter 7 — Ensemble Learning and Random Forests
- **Voting Classifiers**
- **Bagging and Pasting**
  - Bagging and Pasting in Scikit-Learn
  - Out-of-Bag Evaluation
  - Random Patches and Random Subspaces
- **Random Forests**
  - Extra-Trees
  - Feature Importance
- **Boosting**
  - AdaBoost
  - Gradient Boosting
  - Histogram-Based Gradient Boosting
- **Stacking**
- **Exercises**

#### Chapter 8 — Dimensionality Reduction
- **The Curse of Dimensionality**
- **Main Approaches for Dimensionality Reduction**
  - Projection
  - Manifold Learning
- **PCA**
  - Preserving the Variance
  - Principal Components
  - Projecting Down to d Dimensions
  - Using Scikit-Learn
  - Explained Variance Ratio
  - Choosing the Right Number of Dimensions
  - PCA for Compression
  - Randomized PCA
  - Incremental PCA
- **Random Projection**
- **LLE**
- **Other Dimensionality Reduction Techniques**
- **Exercises**

#### Chapter 9 — Unsupervised Learning Techniques
- **Clustering Algorithms: k-means and DBSCAN**
  - k-means
    - The k-means algorithm
    - Centroid initialization methods
    - Accelerated k-means and mini-batch k-means
    - Finding the optimal number of clusters
  - Limits of k-means
  - Using Clustering for Image Segmentation
  - Using Clustering for Semi-Supervised Learning
  - DBSCAN
  - Other Clustering Algorithms
- **Gaussian Mixtures**
  - Using Gaussian Mixtures for Anomaly Detection
  - Selecting the Number of Clusters
  - Bayesian Gaussian Mixture Models
  - Other Algorithms for Anomaly and Novelty Detection
- **Exercises**

### Part II — Neural Networks and Deep Learning

#### Chapter 10 — Introduction to Artificial Neural Networks with Keras
- **From Biological to Artificial Neurons**
  - Biological Neurons
  - Logical Computations with Neurons
  - The Perceptron
  - The Multilayer Perceptron and Backpropagation
  - Regression MLPs
  - Classification MLPs
- **Implementing MLPs with Keras**
  - Building an Image Classifier Using the Sequential API
    - Using Keras to load the dataset
    - Creating the model using the sequential API
    - Compiling the model
    - Training and evaluating the model
    - Using the model to make predictions
  - Building a Regression MLP Using the Sequential API
  - Building Complex Models Using the Functional API
  - Using the Subclassing API to Build Dynamic Models
  - Saving and Restoring a Model
  - Using Callbacks
  - Using TensorBoard for Visualization
- **Fine-Tuning Neural Network Hyperparameters**
  - Number of Hidden Layers
  - Number of Neurons per Hidden Layer
  - Learning Rate, Batch Size, and Other Hyperparameters
- **Exercises**

#### Chapter 11 — Training Deep Neural Networks
- **The Vanishing/Exploding Gradients Problems**
  - Glorot and He Initialization
  - Better Activation Functions
    - Leaky ReLU
    - ELU and SELU
    - GELU, Swish, and Mish
  - Batch Normalization
    - Implementing batch normalization with Keras
  - Gradient Clipping
- **Reusing Pretrained Layers**
  - Transfer Learning with Keras
  - Unsupervised Pretraining
  - Pretraining on an Auxiliary Task
- **Faster Optimizers**
  - Momentum
  - Nesterov Accelerated Gradient
  - AdaGrad
  - RMSProp
  - Adam
  - AdaMax
  - Nadam
  - AdamW
- **Learning Rate Scheduling**
- **Avoiding Overfitting Through Regularization**
  - ℓ1 and ℓ2 Regularization
  - Dropout
  - Monte Carlo (MC) Dropout
  - Max-Norm Regularization
- **Summary and Practical Guidelines**
- **Exercises**

#### Chapter 12 — Custom Models and Training with TensorFlow
- **A Quick Tour of TensorFlow**
- **Using TensorFlow like NumPy**
  - Tensors and Operations
  - Tensors and NumPy
  - Type Conversions
  - Variables
  - Other Data Structures
- **Customizing Models and Training Algorithms**
  - Custom Loss Functions
  - Saving and Loading Models That Contain Custom Components
  - Custom Activation Functions, Initializers, Regularizers, and Constraints
  - Custom Metrics
  - Custom Layers
  - Custom Models
  - Losses and Metrics Based on Model Internals
  - Computing Gradients Using Autodiff
  - Custom Training Loops
- **TensorFlow Functions and Graphs**
  - AutoGraph and Tracing
  - TF Function Rules
- **Exercises**

#### Chapter 13 — Loading and Preprocessing Data with TensorFlow
- **The tf.data API**
  - Chaining Transformations
  - Shuffling the Data
  - Interleaving Lines from Multiple Files
  - Preprocessing the Data
  - Putting Everything Together
  - Prefetching
  - Using the Dataset with Keras
- **The TFRecord Format**
  - Compressed TFRecord Files
  - A Brief Introduction to Protocol Buffers
  - TensorFlow Protobufs
  - Loading and Parsing Examples
  - Handling Lists of Lists Using the SequenceExample Protobuf
- **Keras Preprocessing Layers**
  - The Normalization Layer
  - The Discretization Layer
  - The CategoryEncoding Layer
  - The StringLookup Layer
  - The Hashing Layer
  - Encoding Categorical Features Using Embeddings
  - Text Preprocessing
  - Using Pretrained Language Model Components
  - Image Preprocessing Layers
- **The TensorFlow Datasets Project**
- **Exercises**

#### Chapter 14 — Deep Computer Vision Using Convolutional Neural Networks
- **The Architecture of the Visual Cortex**
- **Convolutional Layers**
  - Filters
  - Stacking Multiple Feature Maps
  - Implementing Convolutional Layers with Keras
  - Memory Requirements
- **Pooling Layers**
- **Implementing Pooling Layers with Keras**
- **CNN Architectures**
  - LeNet-5
  - AlexNet
  - GoogLeNet
  - VGGNet
  - ResNet
  - Xception
  - SENet
  - Other Noteworthy Architectures
  - Choosing the Right CNN Architecture
- **Implementing a ResNet-34 CNN Using Keras**
- **Using Pretrained Models from Keras**
- **Pretrained Models for Transfer Learning**
- **Classification and Localization**
- **Object Detection**
  - Fully Convolutional Networks
  - You Only Look Once
- **Object Tracking**
- **Semantic Segmentation**
- **Exercises**

#### Chapter 15 — Processing Sequences Using RNNs and CNNs
- **Recurrent Neurons and Layers**
  - Memory Cells
  - Input and Output Sequences
- **Training RNNs**
- **Forecasting a Time Series**
  - The ARMA Model Family
  - Preparing the Data for Machine Learning Models
  - Forecasting Using a Linear Model
  - Forecasting Using a Simple RNN
  - Forecasting Using a Deep RNN
  - Forecasting Multivariate Time Series
  - Forecasting Several Time Steps Ahead
  - Forecasting Using a Sequence-to-Sequence Model
- **Handling Long Sequences**
  - Fighting the Unstable Gradients Problem
  - Tackling the Short-Term Memory Problem
    - LSTM cells
    - GRU cells
    - Using 1D convolutional layers to process sequences
    - WaveNet
- **Exercises**

#### Chapter 16 — Natural Language Processing with RNNs and Attention
- **Generating Shakespearean Text Using a Character RNN**
  - Creating the Training Dataset
  - Building and Training the Char-RNN Model
  - Generating Fake Shakespearean Text
  - Stateful RNN
- **Sentiment Analysis**
  - Masking
  - Reusing Pretrained Embeddings and Language Models
- **An Encoder–Decoder Network for Neural Machine Translation**
  - Bidirectional RNNs
  - Beam Search
- **Attention Mechanisms**
  - Attention Is All You Need: The Original Transformer Architecture
    - Positional encodings
    - Multi-head attention
- **An Avalanche of Transformer Models**
- **Vision Transformers**
- **Hugging Face's Transformers Library**
- **Exercises**

#### Chapter 17 — Autoencoders, GANs, and Diffusion Models
- **Efficient Data Representations**
- **Performing PCA with an Undercomplete Linear Autoencoder**
- **Stacked Autoencoders**
  - Implementing a Stacked Autoencoder Using Keras
  - Visualizing the Reconstructions
  - Visualizing the Fashion MNIST Dataset
  - Unsupervised Pretraining Using Stacked Autoencoders
  - Tying Weights
  - Training One Autoencoder at a Time
- **Convolutional Autoencoders**
- **Denoising Autoencoders**
- **Sparse Autoencoders**
- **Variational Autoencoders**
- **Generating Fashion MNIST Images**
- **Generative Adversarial Networks**
  - The Difficulties of Training GANs
  - Deep Convolutional GANs
  - Progressive Growing of GANs
  - StyleGANs
- **Diffusion Models**
- **Exercises**

#### Chapter 18 — Reinforcement Learning
- **Learning to Optimize Rewards**
- **Policy Search**
- **Introduction to OpenAI Gym**
- **Neural Network Policies**
- **Evaluating Actions: The Credit Assignment Problem**
- **Policy Gradients**
- **Markov Decision Processes**
- **Temporal Difference Learning**
- **Q-Learning**
  - Exploration Policies
  - Approximate Q-Learning and Deep Q-Learning
- **Implementing Deep Q-Learning**
- **Deep Q-Learning Variants**
  - Fixed Q-value Targets
  - Double DQN
  - Prioritized Experience Replay
  - Dueling DQN
- **Overview of Some Popular RL Algorithms**
- **Exercises**

#### Chapter 19 — Training and Deploying TensorFlow Models at Scale
- **Serving a TensorFlow Model**
  - Using TensorFlow Serving
    - Exporting SavedModels
    - Installing and starting TensorFlow Serving
    - Querying TF Serving through the REST API
    - Querying TF Serving through the gRPC API
    - Deploying a new model version
  - Creating a Prediction Service on Vertex AI
  - Running Batch Prediction Jobs on Vertex AI
- **Deploying a Model to a Mobile or Embedded Device**
- **Running a Model in a Web Page**
- **Using GPUs to Speed Up Computations**
  - Getting Your Own GPU
  - Managing the GPU RAM
  - Placing Operations and Variables on Devices
  - Parallel Execution Across Multiple Devices
- **Training Models Across Multiple Devices**
  - Model Parallelism
  - Data Parallelism
    - Data parallelism using the mirrored strategy
    - Data parallelism with centralized parameters
    - Bandwidth saturation
  - Training at Scale Using the Distribution Strategies API
  - Training a Model on a TensorFlow Cluster
  - Running Large Training Jobs on Vertex AI
  - Hyperparameter Tuning on Vertex AI
- **Exercises**

### Appendix A — Machine Learning Project Checklist
- Frame the Problem and Look at the Big Picture
- Get the Data
- Explore the Data
- Prepare the Data
- Shortlist Promising Models
- Fine-Tune the System
- Present Your Solution
- Launch!

### Appendix B — Autodiff
- Manual Differentiation
- Finite Difference Approximation
- Forward-Mode Autodiff
- Reverse-Mode Autodiff

### Appendix C — Special Data Structures
- Strings
- Ragged Tensors
- Sparse Tensors
- Tensor Arrays
- Sets
- Queues

### Appendix D — TensorFlow Graphs
- TF Functions and Concrete Functions
- Exploring Function Definitions and Graphs
- A Closer Look at Tracing
- Using AutoGraph to Capture Control Flow
- Handling Variables and Other Resources in TF Functions
- Using TF Functions with Keras (or Not)

---

## Data Science from Scratch — Joel Grus (Chapter Map)

> Joel Grus. Practical introduction to data science and machine learning built entirely from scratch in Python. Covers the full data science stack — statistics, probability, linear algebra, machine learning algorithms, NLP, network analysis, databases, and distributed computing — by implementing everything from first principles without relying on third-party ML libraries.

### Preface to the Second Edition
- Conventions Used in This Book
- Using Code Examples
- O'Reilly Online Learning
- How to Contact Us
- Acknowledgments

### Preface to the First Edition
- Data Science
- From Scratch

### Chapter 1 — Introduction
- The Ascendance of Data
- What Is Data Science?
- Motivating Hypothetical: DataSciencester
  - Finding Key Connectors
  - Data Scientists You May Know
  - Salaries and Experience
  - Paid Accounts
  - Topics of Interest
  - Onward

### Chapter 2 — A Crash Course in Python
- The Zen of Python
- Getting Python
- Virtual Environments
- Whitespace Formatting
- Modules
- Functions
- Strings
- Exceptions
- Lists
- Tuples
- Dictionaries
  - defaultdict
- Counters
- Sets
- Control Flow
- Truthiness
- Sorting
- List Comprehensions
- Automated Testing and assert
- Object-Oriented Programming
- Iterables and Generators
- Randomness
- Regular Expressions
- Functional Programming
- zip and Argument Unpacking
- args and kwargs
- Type Annotations
  - How to Write Type Annotations
- Welcome to DataSciencester!
- For Further Exploration

### Chapter 3 — Visualizing Data
- matplotlib
- Bar Charts
- Line Charts
- Scatterplots
- For Further Exploration

### Chapter 4 — Linear Algebra
- Vectors
- Matrices
- For Further Exploration

### Chapter 5 — Statistics
- Describing a Single Set of Data
  - Central Tendencies
  - Dispersion
- Correlation
- Simpson's Paradox
- Some Other Correlational Caveats
- Correlation and Causation
- For Further Exploration

### Chapter 6 — Probability
- Dependence and Independence
- Conditional Probability
- Bayes's Theorem
- Random Variables
- Continuous Distributions
- The Normal Distribution
- The Central Limit Theorem
- For Further Exploration

### Chapter 7 — Hypothesis and Inference
- Statistical Hypothesis Testing
- Example: Flipping a Coin
- p-Values
- Confidence Intervals
- p-Hacking
- Example: Running an A/B Test
- Bayesian Inference
- For Further Exploration

### Chapter 8 — Gradient Descent
- The Idea Behind Gradient Descent
- Estimating the Gradient
- Using the Gradient
- Choosing the Right Step Size
- Using Gradient Descent to Fit Models
- Minibatch and Stochastic Gradient Descent
- For Further Exploration

### Chapter 9 — Getting Data
- stdin and stdout
- Reading Files
  - The Basics of Text Files
  - Delimited Files
- Scraping the Web
  - HTML and the Parsing Thereof
  - Example: Keeping Tabs on Congress
- Using APIs
  - JSON and XML
  - Using an Unauthenticated API
  - Finding APIs
- Example: Using the Twitter APIs
  - Getting Credentials
- For Further Exploration

### Chapter 10 — Working with Data
- Exploring Your Data
  - Exploring One-Dimensional Data
  - Two Dimensions
  - Many Dimensions
- Using NamedTuples
- Dataclasses
- Cleaning and Munging
- Manipulating Data
- Rescaling
- An Aside: tqdm
- Dimensionality Reduction
- For Further Exploration

### Chapter 11 — Machine Learning
- Modeling
- What Is Machine Learning?
- Overfitting and Underfitting
- Correctness
- The Bias-Variance Tradeoff
- Feature Extraction and Selection
- For Further Exploration

### Chapter 12 — k-Nearest Neighbors
- The Model
- Example: The Iris Dataset
- The Curse of Dimensionality
- For Further Exploration

### Chapter 13 — Naive Bayes
- A Really Dumb Spam Filter
- A More Sophisticated Spam Filter
- Implementation
- Testing Our Model
- Using Our Model
- For Further Exploration

### Chapter 14 — Simple Linear Regression
- The Model
- Using Gradient Descent
- Maximum Likelihood Estimation
- For Further Exploration

### Chapter 15 — Multiple Regression
- The Model
- Further Assumptions of the Least Squares Model
- Fitting the Model
- Interpreting the Model
- Goodness of Fit
- Digression: The Bootstrap
- Standard Errors of Regression Coefficients
- Regularization
- For Further Exploration

### Chapter 16 — Logistic Regression
- The Problem
- The Logistic Function
- Applying the Model
- Goodness of Fit
- Support Vector Machines
- For Further Investigation

### Chapter 17 — Decision Trees
- What Is a Decision Tree?
- Entropy
- The Entropy of a Partition
- Creating a Decision Tree
- Putting It All Together
- Random Forests
- For Further Exploration

### Chapter 18 — Neural Networks
- Perceptrons
- Feed-Forward Neural Networks
- Backpropagation
- Example: Fizz Buzz
- For Further Exploration

### Chapter 19 — Deep Learning
- The Tensor
- The Layer Abstraction
- The Linear Layer
- Neural Networks as a Sequence of Layers
- Loss and Optimization
- Example: XOR Revisited
- Other Activation Functions
- Example: FizzBuzz Revisited
- Softmaxes and Cross-Entropy
- Dropout
- Example: MNIST
- Saving and Loading Models
- For Further Exploration

### Chapter 20 — Clustering
- The Idea
- The Model
- Example: Meetups
- Choosing k
- Example: Clustering Colors
- Bottom-Up Hierarchical Clustering
- For Further Exploration

### Chapter 21 — Natural Language Processing
- Word Clouds
- n-Gram Language Models
- Grammars
- An Aside: Gibbs Sampling
- Topic Modeling
- Word Vectors
- Recurrent Neural Networks
- Example: Using a Character-Level RNN
- For Further Exploration

### Chapter 22 — Network Analysis
- Betweenness Centrality
- Eigenvector Centrality
  - Matrix Multiplication
  - Centrality
- Directed Graphs and PageRank
- For Further Exploration

### Chapter 23 — Recommender Systems
- Manual Curation
- Recommending What's Popular
- User-Based Collaborative Filtering
- Item-Based Collaborative Filtering
- Matrix Factorization
- For Further Exploration

### Chapter 24 — Databases and SQL
- CREATE TABLE and INSERT
- UPDATE
- DELETE
- SELECT
- GROUP BY
- ORDER BY
- JOIN
- Subqueries
- Indexes
- Query Optimization
- NoSQL
- For Further Exploration

### Chapter 25 — MapReduce
- Example: Word Count
- Why MapReduce?
- MapReduce More Generally
- Example: Analyzing Status Updates
- Example: Matrix Multiplication
- An Aside: Combiners
- For Further Exploration

### Chapter 26 — Data Ethics
- What Is Data Ethics?
- No, Really, What Is Data Ethics?
- Should I Care About Data Ethics?
- Building Bad Data Products
- Trading Off Accuracy and Fairness
- Collaboration
- Interpretability
- Recommendations
- Biased Data
- Data Protection
- In Summary
- For Further Exploration

### Chapter 27 — Go Forth and Do Data Science
- IPython
- Mathematics
- Not from Scratch
  - NumPy
  - pandas
  - scikit-learn
  - Visualization
  - R
  - Deep Learning
- Find Data
- Do Data Science
  - Hacker News
  - Fire Trucks
  - T-Shirts
  - Tweets on a Globe
  - And You?

---

## Applied ML and AI for Engineers — Jeff Prosise (Chapter Map)

> Jeff Prosise. Practical, hands-on guide to applied machine learning and AI for software engineers. Covers classical ML with Scikit-Learn, deep learning with Keras and TensorFlow, computer vision (CNNs, face detection/recognition, object detection), NLP with RNNs, Transformers, and BERT, plus operationalizing models and leveraging Azure Cognitive Services.

### Part I: Machine Learning with Scikit-Learn

- **Chapter 1: Machine Learning**
  - What Is Machine Learning?
    - Machine Learning Versus Artificial Intelligence
    - Supervised Versus Unsupervised Learning
  - Unsupervised Learning with k-Means Clustering
    - Applying k-Means Clustering to Customer Data
    - Segmenting Customers Using More Than Two Dimensions
  - Supervised Learning
    - k-Nearest Neighbors
    - Using k-Nearest Neighbors to Classify Flowers
  - Summary

- **Chapter 2: Regression Models**
  - Linear Regression
  - Decision Trees
  - Random Forests
  - Gradient-Boosting Machines
  - Support Vector Machines
  - Accuracy Measures for Regression Models
  - Using Regression to Predict Taxi Fares
  - Summary

- **Chapter 3: Classification Models**
  - Logistic Regression
  - Accuracy Measures for Classification Models
  - Categorical Data
  - Binary Classification
    - Classifying Passengers Who Sailed on the Titanic
    - Detecting Credit Card Fraud
  - Multiclass Classification
  - Building a Digit Recognition Model
  - Summary

- **Chapter 4: Text Classification**
  - Preparing Text for Classification
  - Sentiment Analysis
  - Naive Bayes
  - Spam Filtering
  - Recommender Systems
    - Cosine Similarity
    - Building a Movie Recommendation System
  - Summary

- **Chapter 5: Support Vector Machines**
  - How Support Vector Machines Work
    - Kernels
    - Kernel Tricks
  - Hyperparameter Tuning
  - Data Normalization
  - Pipelining
  - Using SVMs for Facial Recognition
  - Summary

- **Chapter 6: Principal Component Analysis**
  - Understanding Principal Component Analysis
  - Filtering Noise
  - Anonymizing Data
  - Visualizing High-Dimensional Data
  - Anomaly Detection
    - Using PCA to Detect Credit Card Fraud
    - Using PCA to Predict Bearing Failure
    - Multivariate Anomaly Detection
  - Summary

- **Chapter 7: Operationalizing Machine Learning Models**
  - Consuming a Python Model from a Python Client
  - Versioning Pickle Files
  - Consuming a Python Model from a C# Client
  - Containerizing a Machine Learning Model
  - Using ONNX to Bridge the Language Gap
  - Building ML Models in C# with ML.NET
    - Sentiment Analysis with ML.NET
    - Saving and Loading ML.NET Models
  - Adding Machine Learning Capabilities to Excel
  - Summary

### Part II: Deep Learning with Keras and TensorFlow

- **Chapter 8: Deep Learning**
  - Understanding Neural Networks
  - Training Neural Networks
  - Summary

- **Chapter 9: Neural Networks**
  - Building Neural Networks with Keras and TensorFlow
    - Sizing a Neural Network
    - Using a Neural Network to Predict Taxi Fares
  - Binary Classification with Neural Networks
    - Making Predictions
    - Training a Neural Network to Detect Credit Card Fraud
  - Multiclass Classification with Neural Networks
  - Training a Neural Network to Recognize Faces
  - Dropout
  - Saving and Loading Models
  - Keras Callbacks
  - Summary

- **Chapter 10: Image Classification with Convolutional Neural Networks**
  - Understanding CNNs
    - Using Keras and TensorFlow to Build CNNs
    - Training a CNN to Recognize Arctic Wildlife
  - Pretrained CNNs
  - Using ResNet50V2 to Classify Images
  - Transfer Learning
  - Using Transfer Learning to Identify Arctic Wildlife
  - Data Augmentation
    - Image Augmentation with ImageDataGenerator
    - Image Augmentation with Augmentation Layers
    - Applying Image Augmentation to Arctic Wildlife
  - Global Pooling
  - Audio Classification with CNNs
  - Summary

- **Chapter 11: Face Detection and Recognition**
  - Face Detection
    - Face Detection with Viola-Jones
    - Using the OpenCV Implementation of Viola-Jones
    - Face Detection with Convolutional Neural Networks
    - Extracting Faces from Photos
  - Facial Recognition
    - Applying Transfer Learning to Facial Recognition
    - Boosting Transfer Learning with Task-Specific Weights
    - ArcFace
  - Putting It All Together: Detecting and Recognizing Faces in Photos
  - Handling Unknown Faces: Closed-Set Versus Open-Set Classification
  - Summary

- **Chapter 12: Object Detection**
  - R-CNNs
  - Mask R-CNN
  - YOLO
  - YOLOv3 and Keras
  - Custom Object Detection
    - Training a Custom Object Detection Model with the Custom Vision Service
    - Using the Exported Model
  - Summary

- **Chapter 13: Natural Language Processing**
  - Text Preparation
  - Word Embeddings
  - Text Classification
    - Automating Text Vectorization
    - Using TextVectorization in a Sentiment Analysis Model
    - Factoring Word Order into Predictions
    - Recurrent Neural Networks (RNNs)
    - Using Pretrained Models to Classify Text
  - Neural Machine Translation
    - LSTM Encoder-Decoders
    - Transformer Encoder-Decoders
    - Building a Transformer-Based NMT Model
    - Using Pretrained Models to Translate Text
  - Bidirectional Encoder Representations from Transformers (BERT)
    - Building a BERT-Based Question Answering System
    - Fine-Tuning BERT to Perform Sentiment Analysis
  - Summary

- **Chapter 14: Azure Cognitive Services**
  - Introducing Azure Cognitive Services
    - Keys and Endpoints
    - Calling Azure Cognitive Services APIs
    - Azure Cognitive Services Containers
  - The Computer Vision Service
  - The Language Service
  - The Translator Service
  - The Speech Service
  - Putting It All Together: Contoso Travel
  - Summary

---

## GANs in Action — Jakub Langr & Vladimir Bok (Chapter Map)

> Jakub Langr and Vladimir Bok. Practical guide to Generative Adversarial Networks using Keras and TensorFlow. Covers GAN theory, training challenges, and advanced architectures including DCGAN, Progressive GAN, Semi-Supervised GAN, Conditional GAN, and CycleGAN, with real-world applications in medicine and fashion.

### Part 1 — Introduction to GANs and Generative Modeling

#### Chapter 1 — Introduction to GANs
- **1.1 What are Generative Adversarial Networks?**
- **1.2 How do GANs work?**
- **1.3 GANs in action**
  - 1.3.1 GAN training
  - 1.3.2 Reaching equilibrium
- **1.4 Why study GANs?**
- Summary

#### Chapter 2 — Intro to Generative Modeling with Autoencoders
- **2.1 Introduction to generative modeling**
- **2.2 How do autoencoders function on a high level?**
- **2.3 What are autoencoders to GANs?**
- **2.4 What is an autoencoder made of?**
- **2.5 Usage of autoencoders**
- **2.6 Unsupervised learning**
  - 2.6.1 New take on an old idea
  - 2.6.2 Generation using an autoencoder
  - 2.6.3 Variational autoencoder
- **2.7 Code is life**
- **2.8 Why did we try a GAN?**
- Summary

#### Chapter 3 — Your First GAN: Generating Handwritten Digits
- **3.1 Foundations of GANs: Adversarial training**
  - 3.1.1 Cost functions
  - 3.1.2 Training process
- **3.2 The Generator and the Discriminator**
  - 3.2.1 Conflicting objectives
  - 3.2.2 Confusion matrix
- **3.3 GAN training algorithm**
- **3.4 Tutorial: Generating handwritten digits**
  - 3.4.1 Importing modules and specifying model input dimensions
  - 3.4.2 Implementing the Generator
  - 3.4.3 Implementing the Discriminator
  - 3.4.4 Building the model
  - 3.4.5 Training
  - 3.4.6 Outputting sample images
  - 3.4.7 Running the model
  - 3.4.8 Inspecting the results
- **3.5 Conclusion**
- Summary

#### Chapter 4 — Deep Convolutional GAN
- **4.1 Convolutional neural networks**
  - 4.1.1 Convolutional filters
  - 4.1.2 Parameter sharing
  - 4.1.3 ConvNets visualized
- **4.2 Brief history of the DCGAN**
- **4.3 Batch normalization**
  - 4.3.1 Understanding normalization
  - 4.3.2 Computing batch normalization
- **4.4 Tutorial: Generating handwritten digits with DCGAN**
  - 4.4.1 Importing modules and specifying model input dimensions
  - 4.4.2 Implementing the Generator
  - 4.4.3 Implementing the Discriminator
  - 4.4.4 Building and running the DCGAN
  - 4.4.5 Model output
- **4.5 Conclusion**
- Summary

### Part 2 — Advanced Topics in GANs

#### Chapter 5 — Training and Common Challenges: GANing for Success
- **5.1 Evaluation**
  - 5.1.1 Evaluation framework
  - 5.1.2 Inception score
  - 5.1.3 Fréchet inception distance
- **5.2 Training challenges**
  - 5.2.1 Adding network depth
  - 5.2.2 Game setups
  - 5.2.3 Min-Max GAN
  - 5.2.4 Non-Saturating GAN
  - 5.2.5 When to stop training
  - 5.2.6 Wasserstein GAN
- **5.3 Summary of game setups**
- **5.4 Training hacks**
  - 5.4.1 Normalizations of inputs
  - 5.4.2 Batch normalization
  - 5.4.3 Gradient penalties
  - 5.4.4 Train the Discriminator more
  - 5.4.5 Avoid sparse gradients
  - 5.4.6 Soft and noisy labels
- Summary

#### Chapter 6 — Progressing with GANs
- **6.1 Latent space interpolation**
- **6.2 They grow up so fast**
  - 6.2.1 Progressive growing and smoothing of higher-resolution layers
  - 6.2.2 Example implementation
  - 6.2.3 Mini-batch standard deviation
  - 6.2.4 Equalized learning rate
  - 6.2.5 Pixel-wise feature normalization in the generator
- **6.3 Summary of key innovations**
- **6.4 TensorFlow Hub and hands-on**
- **6.5 Practical applications**
- Summary

#### Chapter 7 — Semi-Supervised GAN
- **7.1 Introducing the Semi-Supervised GAN**
  - 7.1.1 What is a Semi-Supervised GAN?
  - 7.1.2 Architecture
  - 7.1.3 Training process
  - 7.1.4 Training objective
- **7.2 Tutorial: Implementing a Semi-Supervised GAN**
  - 7.2.1 Architecture diagram
  - 7.2.2 Implementation
  - 7.2.3 Setup
  - 7.2.4 The dataset
  - 7.2.5 The Generator
  - 7.2.6 The Discriminator
  - 7.2.7 Building the model
  - 7.2.8 Training
- **7.3 Comparison to a fully supervised classifier**
- **7.4 Conclusion**
- Summary

#### Chapter 8 — Conditional GAN
- **8.1 Motivation**
- **8.2 What is Conditional GAN?**
  - 8.2.1 CGAN Generator
  - 8.2.2 CGAN Discriminator
  - 8.2.3 Summary table
  - 8.2.4 Architecture diagram
- **8.3 Tutorial: Implementing a Conditional GAN**
  - 8.3.1 Implementation
  - 8.3.2 Setup
  - 8.3.3 CGAN Generator
  - 8.3.4 CGAN Discriminator
  - 8.3.5 Building the model
  - 8.3.6 Training
  - 8.3.7 Outputting sample images
  - 8.3.8 Training the model
  - 8.3.9 Inspecting the output: Targeted data generation
- **8.4 Conclusion**
- Summary

#### Chapter 9 — CycleGAN
- **9.1 Image-to-image translation**
- **9.2 Cycle-consistency loss: There and back a GAN**
- **9.3 Adversarial loss**
- **9.4 Identity loss**
- **9.5 Architecture**
  - 9.5.1 CycleGAN architecture: building the network
  - 9.5.2 Generator architecture
  - 9.5.3 Discriminator architecture
- **9.6 Object-oriented design of GANs**
- **9.7 Tutorial: CycleGAN**
  - 9.7.1 Building the network
  - 9.7.2 Building the Generator
  - 9.7.3 Building the Discriminator
  - 9.7.4 Training the CycleGAN
  - 9.7.5 Running CycleGAN
- **9.8 Expansions, augmentations, and applications**
  - 9.8.1 Augmented CycleGAN
  - 9.8.2 Applications
- Summary

### Part 3 — Where to Go from Here

#### Chapter 10 — Adversarial Examples
- **10.1 Context of adversarial examples**
- **10.2 Lies, damned lies, and distributions**
- **10.3 Use and abuse of training**
- **10.4 Signal and the noise**
- **10.5 Not all hope is lost**
- **10.6 Adversaries to GANs**
- **10.7 Conclusion**
- Summary

#### Chapter 11 — Practical Applications of GANs
- **11.1 GANs in medicine**
  - 11.1.1 Using GANs to improve diagnostic accuracy
  - 11.1.2 Methodology
  - 11.1.3 Results
- **11.2 GANs in fashion**
  - 11.2.1 Using GANs to design fashion
  - 11.2.2 Methodology
  - 11.2.3 Creating new items matching individual preferences
  - 11.2.4 Adjusting existing items to better match individual preferences
- **11.3 Conclusion**
- Summary

#### Chapter 12 — Looking Ahead
- **12.1 Ethics**
- **12.2 GAN innovations**
  - 12.2.1 Relativistic GAN
  - 12.2.2 Self-Attention GAN
  - 12.2.3 BigGAN
- **12.3 Further reading**
- **12.4 Looking back and closing thoughts**
- Summary

---

## Deep Learning — Ian Goodfellow, Yoshua Bengio & Aaron Courville (Chapter Map)

> Ian Goodfellow, Yoshua Bengio, and Aaron Courville. The authoritative deep learning textbook covering mathematical foundations through advanced topics. Spans linear algebra, probability, optimization, and modern deep learning architectures, with Part III devoted to cutting-edge research areas including attention, memory networks, generative models, and deep reinforcement learning.

### Part I — Applied Math and Machine Learning Basics

#### Chapter 1 — Introduction
- **1.1 Who Should Read This Book?**
- **1.2 Historical Trends in Deep Learning**

#### Chapter 2 — Linear Algebra
- **2.1 Scalars, Vectors, Matrices and Tensors**
- **2.2 Multiplying Matrices and Vectors**
- **2.3 Identity and Inverse Matrices**
- **2.4 Linear Dependence and Span**
- **2.5 Norms**
- **2.6 Special Kinds of Matrices and Vectors**
- **2.7 Eigendecomposition**
- **2.8 Singular Value Decomposition**
- **2.9 The Moore-Penrose Pseudoinverse**
- **2.10 The Trace Operator**
- **2.11 The Determinant**
- **2.12 Example: Principal Components Analysis**

#### Chapter 3 — Probability and Information Theory
- **3.1 Why Probability?**
- **3.2 Random Variables**
- **3.3 Probability Distributions**
- **3.4 Marginal Probability**
- **3.5 Conditional Probability**
- **3.6 The Chain Rule of Conditional Probabilities**
- **3.7 Independence and Conditional Independence**
- **3.8 Expectation, Variance and Covariance**
- **3.9 Common Probability Distributions**
- **3.10 Useful Properties of Common Functions**
- **3.11 Bayes' Rule**
- **3.12 Technical Details of Continuous Variables**
- **3.13 Information Theory**
- **3.14 Structured Probabilistic Models**

#### Chapter 4 — Numerical Computation
- **4.1 Overflow and Underflow**
- **4.2 Poor Conditioning**
- **4.3 Gradient-Based Optimization**
- **4.4 Constrained Optimization**
- **4.5 Example: Linear Least Squares**

#### Chapter 5 — Machine Learning Basics
- **5.1 Learning Algorithms**
- **5.2 Capacity, Overfitting and Underfitting**
- **5.3 Hyperparameters and Validation Sets**
- **5.4 Estimators, Bias and Variance**
- **5.5 Maximum Likelihood Estimation**
- **5.6 Bayesian Statistics**
- **5.7 Supervised Learning Algorithms**
- **5.8 Unsupervised Learning Algorithms**
- **5.9 Stochastic Gradient Descent**
- **5.10 Building a Machine Learning Algorithm**
- **5.11 Challenges Motivating Deep Learning**

### Part II — Modern Practical Deep Networks

#### Chapter 6 — Deep Feedforward Networks
- **6.1 Example: Learning XOR**
- **6.2 Gradient-Based Learning**
- **6.3 Hidden Units**
- **6.4 Architecture Design**
- **6.5 Back-Propagation and Other Differentiation Algorithms**
- **6.6 Historical Notes**

#### Chapter 7 — Regularization for Deep Learning
- **7.1 Parameter Norm Penalties**
- **7.2 Norm Penalties as Constrained Optimization**
- **7.3 Regularization and Under-Constrained Problems**
- **7.4 Dataset Augmentation**
- **7.5 Noise Robustness**
- **7.6 Semi-Supervised Learning**
- **7.7 Multi-Task Learning**
- **7.8 Early Stopping**
- **7.9 Parameter Tying and Parameter Sharing**
- **7.10 Sparse Representations**
- **7.11 Bagging and Other Ensemble Methods**
- **7.12 Dropout**
- **7.13 Adversarial Training**
- **7.14 Tangent Distance, Tangent Prop and Manifold Tangent Classifier**

#### Chapter 8 — Optimization for Training Deep Models
- **8.1 How Learning Differs from Pure Optimization**
- **8.2 Challenges in Neural Network Optimization**
- **8.3 Basic Algorithms**
- **8.4 Parameter Initialization Strategies**
- **8.5 Algorithms with Adaptive Learning Rates**
- **8.6 Approximate Second-Order Methods**
- **8.7 Optimization Strategies and Meta-Algorithms**

#### Chapter 9 — Convolutional Networks
- **9.1 The Convolution Operation**
- **9.2 Motivation**
- **9.3 Pooling**
- **9.4 Convolution and Pooling as an Infinitely Strong Prior**
- **9.5 Variants of the Basic Convolution Function**
- **9.6 Structured Outputs**
- **9.7 Data Types**
- **9.8 Efficient Convolution Algorithms**
- **9.9 Random or Unsupervised Features**
- **9.10 The Neuroscientific Basis for Convolutional Networks**
- **9.11 Convolutional Networks and the History of Deep Learning**

#### Chapter 10 — Sequence Modeling: Recurrent and Recursive Nets
- **10.1 Unfolding Computational Graphs**
- **10.2 Recurrent Neural Networks**
- **10.3 Bidirectional RNNs**
- **10.4 Encoder-Decoder Sequence-to-Sequence Architectures**
- **10.5 Deep Recurrent Networks**
- **10.6 Recursive Neural Networks**
- **10.7 The Challenge of Long-Term Dependencies**
- **10.8 Echo State Networks**
- **10.9 Leaky Units and Other Strategies for Multiple Time Scales**
- **10.10 The Long Short-Term Memory and Other Gated RNNs**
- **10.11 Optimization for Long-Term Dependencies**
- **10.12 Explicit Memory**

#### Chapter 11 — Practical Methodology
- **11.1 Performance Metrics**
- **11.2 Default Baseline Models**
- **11.3 Determining Whether to Gather More Data**
- **11.4 Selecting Hyperparameters**
- **11.5 Debugging Strategies**
- **11.6 Example: Multi-Digit Number Recognition**

#### Chapter 12 — Applications
- **12.1 Large-Scale Deep Learning**
- **12.2 Computer Vision**
- **12.3 Speech Recognition**
- **12.4 Natural Language Processing**
- **12.5 Other Applications**

### Part III — Deep Learning Research

#### Chapter 13 — Linear Factor Models
- **13.1 Probabilistic PCA and Factor Analysis**
- **13.2 Independent Component Analysis (ICA)**
- **13.3 Slow Feature Analysis**
- **13.4 Sparse Coding**
- **13.5 Manifold Interpretation of PCA**

#### Chapter 14 — Autoencoders
- **14.1 Undercomplete Autoencoders**
- **14.2 Regularized Autoencoders**
- **14.3 Representational Power, Layer Size and Depth**
- **14.4 Stochastic Encoders and Decoders**
- **14.5 Denoising Autoencoders**
- **14.6 Learning Manifolds with Autoencoders**
- **14.7 Contractive Autoencoders**
- **14.8 Predictive Sparse Decomposition**
- **14.9 Applications of Autoencoders**

#### Chapter 15 — Representation Learning
- **15.1 Greedy Layer-Wise Unsupervised Pretraining**
- **15.2 Transfer Learning and Domain Adaptation**
- **15.3 Semi-Supervised Disentangling of Causal Factors**
- **15.4 Distributed Representation**
- **15.5 Exponential Gains from Depth**
- **15.6 Providing Clues to Discover Underlying Causes**

#### Chapter 16 — Structured Probabilistic Models for Deep Learning
- **16.1 The Challenge of Unstructured Modeling**
- **16.2 Using Graphs to Describe Model Structure**
- **16.3 Sampling from Graphical Models**
- **16.4 Advantages of Structured Probabilistic Models**
- **16.5 Learning about Dependencies**
- **16.6 Inference and Approximate Inference**
- **16.7 The Deep Learning Approach to Structured Probabilistic Models**

#### Chapter 17 — Monte Carlo Methods
- **17.1 Sampling and Monte Carlo Estimators**
- **17.2 Importance Sampling**
- **17.3 Markov Chain Monte Carlo Methods**
- **17.4 Gibbs Sampling**
- **17.5 The Challenge of Mixing between Separated Modes**

#### Chapter 18 — Confronting the Partition Function
- **18.1 The Log-Likelihood Gradient**
- **18.2 Stochastic Maximum Likelihood and Contrastive Divergence**
- **18.3 Pseudolikelihood**
- **18.4 Score Matching and Ratio Matching**
- **18.5 Denoising Score Matching**
- **18.6 Noise-Contrastive Estimation**
- **18.7 Estimating the Partition Function**

#### Chapter 19 — Approximate Inference
- **19.1 Inference as Optimization**
- **19.2 Expectation Maximization**
- **19.3 MAP Inference and Sparse Coding**
- **19.4 Variational Inference and Learning**
- **19.5 Learned Approximate Inference**

#### Chapter 20 — Deep Generative Models
- **20.1 Boltzmann Machines**
- **20.2 Restricted Boltzmann Machines**
- **20.3 Deep Belief Networks**
- **20.4 Deep Boltzmann Machines**
- **20.5 Boltzmann Machines for Real-Valued Data**
- **20.6 Convolutional Boltzmann Machines**
- **20.7 Boltzmann Machines for Structured or Sequential Outputs**
- **20.8 Other Boltzmann Machines**
- **20.9 Back-Propagation through Random Operations**
- **20.10 Directed Generative Nets**
- **20.11 Drawing Samples from Autoencoders**
- **20.12 Generative Stochastic Networks**
- **20.13 Other Generation Schemes**
- **20.14 Evaluating Generative Models**
- **20.15 Conclusion**

---

### References

---

## Designing ML Systems — Chip Huyen (Chapter Map)

> Chip Huyen. Practical guide to designing and deploying production machine learning systems. Covers the full ML lifecycle — from data engineering and feature engineering to model development, deployment, monitoring, continual learning, and MLOps infrastructure. Emphasizes real-world trade-offs and system thinking for ML engineers.

### Preface
- **Who This Book Is For**
- **What This Book Is Not**
- **Navigating This Book**
- **GitHub Repository and Community**
- **Conventions Used in This Book**
- **Using Code Examples**
- **O'Reilly Online Learning**
- **How to Contact Us**
- **Acknowledgments**

### Chapter 1 — Overview of Machine Learning Systems
- **1.1 When to Use Machine Learning**
  - Sections: Machine Learning Use Cases
- **1.2 Understanding Machine Learning Systems**
  - Sections: Machine Learning in Research Versus in Production · Machine Learning Systems Versus Traditional Software
- **Summary**

### Chapter 2 — Introduction to Machine Learning Systems Design
- **2.1 Business and ML Objectives**
- **2.2 Requirements for ML Systems**
  - Sections: Reliability · Scalability · Maintainability · Adaptability
- **2.3 Iterative Process**
- **2.4 Framing ML Problems**
  - Sections: Types of ML Tasks · Objective Functions
- **2.5 Mind Versus Data**
- **Summary**

### Chapter 3 — Data Engineering Fundamentals
- **3.1 Data Sources**
- **3.2 Data Formats**
  - Sections: JSON · Row-Major Versus Column-Major Format · Text Versus Binary Format
- **3.3 Data Models**
  - Sections: Relational Model · NoSQL · Structured Versus Unstructured Data
- **3.4 Data Storage Engines and Processing**
  - Sections: Transactional and Analytical Processing · ETL: Extract, Transform, and Load
- **3.5 Modes of Dataflow**
  - Sections: Data Passing Through Databases · Data Passing Through Services · Data Passing Through Real-Time Transport
- **3.6 Batch Processing Versus Stream Processing**
- **Summary**

### Chapter 4 — Training Data
- **4.1 Sampling**
  - Sections: Nonprobability Sampling · Simple Random Sampling · Stratified Sampling · Weighted Sampling · Reservoir Sampling · Importance Sampling
- **4.2 Labeling**
  - Sections: Hand Labels · Natural Labels · Handling the Lack of Labels
- **4.3 Class Imbalance**
  - Sections: Challenges of Class Imbalance · Handling Class Imbalance
- **4.4 Data Augmentation**
  - Sections: Simple Label-Preserving Transformations · Perturbation · Data Synthesis
- **Summary**

### Chapter 5 — Feature Engineering
- **5.1 Learned Features Versus Engineered Features**
- **5.2 Common Feature Engineering Operations**
  - Sections: Handling Missing Values · Scaling · Discretization · Encoding Categorical Features · Feature Crossing · Discrete and Continuous Positional Embeddings
- **5.3 Data Leakage**
  - Sections: Common Causes for Data Leakage · Detecting Data Leakage
- **5.4 Engineering Good Features**
  - Sections: Feature Importance · Feature Generalization
- **Summary**

### Chapter 6 — Model Development and Offline Evaluation
- **6.1 Model Development and Training**
  - Sections: Evaluating ML Models · Ensembles · Experiment Tracking and Versioning · Distributed Training · AutoML
- **6.2 Model Offline Evaluation**
  - Sections: Baselines · Evaluation Methods
- **Summary**

### Chapter 7 — Model Deployment and Prediction Service
- **7.1 Machine Learning Deployment Myths**
  - Sections: Myth 1: You Only Deploy One or Two ML Models at a Time · Myth 2: If We Don't Do Anything, Model Performance Remains the Same · Myth 3: You Won't Need to Update Your Models as Much · Myth 4: Most ML Engineers Don't Need to Worry About Scale
- **7.2 Batch Prediction Versus Online Prediction**
  - Sections: From Batch Prediction to Online Prediction · Unifying Batch Pipeline and Streaming Pipeline
- **7.3 Model Compression**
  - Sections: Low-Rank Factorization · Knowledge Distillation · Pruning · Quantization
- **7.4 ML on the Cloud and on the Edge**
  - Sections: Compiling and Optimizing Models for Edge Devices · ML in Browsers
- **Summary**

### Chapter 8 — Data Distribution Shifts and Monitoring
- **8.1 Causes of ML System Failures**
  - Sections: Software System Failures · ML-Specific Failures
- **8.2 Data Distribution Shifts**
  - Sections: Types of Data Distribution Shifts · General Data Distribution Shifts · Detecting Data Distribution Shifts · Addressing Data Distribution Shifts
- **8.3 Monitoring and Observability**
  - Sections: ML-Specific Metrics · Monitoring Toolbox · Observability
- **Summary**

### Chapter 9 — Continual Learning and Test in Production
- **9.1 Continual Learning**
  - Sections: Stateless Retraining Versus Stateful Training · Why Continual Learning? · Continual Learning Challenges · Four Stages of Continual Learning · How Often to Update Your Models
- **9.2 Test in Production**
  - Sections: Shadow Deployment · A/B Testing · Canary Release · Interleaving Experiments · Bandits
- **Summary**

### Chapter 10 — Infrastructure and Tooling for MLOps
- **10.1 Storage and Compute**
  - Sections: Public Cloud Versus Private Data Centers
- **10.2 Development Environment**
  - Sections: Dev Environment Setup · Standardizing Dev Environments · From Dev to Prod: Containers
- **10.3 Resource Management**
  - Sections: Cron, Schedulers, and Orchestrators · Data Science Workflow Management
- **10.4 ML Platform**
  - Sections: Model Deployment · Model Store · Feature Store
- **10.5 Build Versus Buy**
- **Summary**

### Chapter 11 — The Human Side of Machine Learning
- **11.1 User Experience**
  - Sections: Ensuring User Experience Consistency · Combatting "Mostly Correct" Predictions · Smooth Failing
- **11.2 Team Structure**
  - Sections: Cross-functional Teams Collaboration · End-to-End Data Scientists
- **11.3 Responsible AI**
  - Sections: Irresponsible AI: Case Studies · A Framework for Responsible AI
- **Summary**

### Epilogue

---

## Building ML-Powered Applications — Emmanuel Ameisen (Chapter Map)

> Emmanuel Ameisen. Practical guide to building machine learning applications end-to-end — from framing a product goal as an ML problem, through building pipelines, iterating on models, to deploying and monitoring in production. Uses an ML-assisted writing editor as a running case study throughout.

### Preface
- **The Goal of Using Machine Learning Powered Applications**
  - Sections: Use ML to Build Practical Applications · Additional Resources
- **Practical ML**
  - Sections: What This Book Covers · Prerequisites · Our Case Study: ML–Assisted Writing · The ML Process
- **Conventions Used in This Book**
- **Using Code Examples**
- **O'Reilly Online Learning**
- **How to Contact Us**
- **Acknowledgments**

### Part I — Find the Correct ML Approach

### Chapter 1 — From Product Goal to ML Framing
- **Estimate What Is Possible**
  - Sections: Models · Data
- **Framing the ML Editor**
  - Sections: Trying to Do It All with ML: An End-to-End Framework · The Simplest Approach: Being the Algorithm · Middle Ground: Learning from Our Experience
- **Monica Rogati: How to Choose and Prioritize ML Projects**
- **Conclusion**

### Chapter 2 — Create a Plan
- **Measuring Success**
  - Sections: Business Performance · Model Performance · Freshness and Distribution Shift · Speed
- **Estimate Scope and Challenges**
  - Sections: Leverage Domain Expertise · Stand on the Shoulders of Giants
- **ML Editor Planning**
  - Sections: Initial Plan for an Editor · Always Start with a Simple Model
- **To Make Regular Progress: Start Simple**
  - Sections: Start with a Simple Pipeline · Pipeline for the ML Editor
- **Conclusion**

### Part II — Build a Working Pipeline

### Chapter 3 — Build Your First End-to-End Pipeline
- **The Simplest Scaffolding**
- **Prototype of an ML Editor**
  - Sections: Parse and Clean Data · Tokenizing Text · Generating Features
- **Test Your Workflow**
  - Sections: User Experience · Modeling Results
- **ML Editor Prototype Evaluation**
  - Sections: Model · User Experience
- **Conclusion**

### Chapter 4 — Acquire an Initial Dataset
- **Iterate on Datasets**
  - Sections: Do Data Science
- **Explore Your First Dataset**
  - Sections: Be Efficient, Start Small · Insights Versus Products · A Data Quality Rubric
- **Label to Find Data Trends**
  - Sections: Summary Statistics · Explore and Label Efficiently · Be the Algorithm · Data Trends
- **Let Data Inform Features and Models**
  - Sections: Build Features Out of Patterns · ML Editor Features
- **Robert Munro: How Do You Find, Label, and Leverage Data?**
- **Conclusion**

### Part III — Iterate on Models

### Chapter 5 — Train and Evaluate Your Model
- **The Simplest Appropriate Model**
  - Sections: Simple Models · From Patterns to Models · Split Your Dataset · ML Editor Data Split · Judge Performance
- **Evaluate Your Model: Look Beyond Accuracy**
  - Sections: Contrast Data and Predictions · Confusion Matrix · ROC Curve · Calibration Curve · Dimensionality Reduction for Errors · The Top-k Method · Other Models
- **Evaluate Feature Importance**
  - Sections: Directly from a Classifier · Black-Box Explainers
- **Conclusion**

### Chapter 6 — Debug Your ML Problems
- **Software Best Practices**
  - Sections: ML-Specific Best Practices
- **Debug Wiring: Visualizing and Testing**
  - Sections: Start with One Example · Test Your ML Code
- **Debug Training: Make Your Model Learn**
  - Sections: Task Difficulty · Optimization Problems
- **Debug Generalization: Make Your Model Useful**
  - Sections: Data Leakage · Overfitting · Consider the Task at Hand
- **Conclusion**

### Chapter 7 — Using Classifiers for Writing Recommendations
- **Extracting Recommendations from Models**
  - Sections: What Can We Achieve Without a Model? · Extracting Global Feature Importance · Using a Model's Score · Extracting Local Feature Importance
- **Comparing Models**
  - Sections: Version 1: The Report Card · Version 2: More Powerful, More Unclear · Version 3: Understandable Recommendations
- **Generating Editing Recommendations**
- **Conclusion**

### Part IV — Deploy and Monitor

### Chapter 8 — Considerations When Deploying Models
- **Data Concerns**
  - Sections: Data Ownership · Data Bias · Systemic Bias
- **Modeling Concerns**
  - Sections: Feedback Loops · Inclusive Model Performance · Considering Context · Adversaries · Abuse Concerns and Dual-Use
- **Chris Harland: Shipping Experiments**
- **Conclusion**

### Chapter 9 — Choose Your Deployment Option
- **Server-Side Deployment**
  - Sections: Streaming Application or API · Batch Predictions
- **Client-Side Deployment**
  - Sections: On Device · Browser Side
- **Federated Learning: A Hybrid Approach**
- **Conclusion**

### Chapter 10 — Build Safeguards for Models
- **Engineer Around Failures**
  - Sections: Input and Output Checks · Model Failure Fallbacks
- **Engineer for Performance**
  - Sections: Scale to Multiple Users · Model and Data Life Cycle Management · Data Processing and DAGs
- **Ask for Feedback**
- **Chris Moody: Empowering Data Scientists to Deploy Models**
- **Conclusion**

### Chapter 11 — Monitor and Update Models
- **Monitoring Saves Lives**
  - Sections: Monitoring to Inform Refresh Rate · Monitor to Detect Abuse
- **Choose What to Monitor**
  - Sections: Performance Metrics · Business Metrics
- **CI/CD for ML**
  - Sections: A/B Testing and Experimentation · Other Approaches
- **Conclusion**

### Index
