# Missing Topics — 03_ML_Theory_Math

## From Algorithmic_Aspects_of_ML.pdf
- **Community Detection** — graph clustering via tensor methods, Phase 2 ◈
- **Matrix Completion** — nuclear norm minimization, low-rank recovery, Phase 2 ◈
- **Sparse Coding** — dictionary learning, overcomplete bases, Phase 2 ◈
- **Phylogenetic Trees** — applications of tensor decomposition to evolutionary inference, Phase 2 ◈

## From Andrew_NG_CS229_Lecture_Notes.pdf
*(No structured TOC available; content largely overlaps with covered supervised/unsupervised topics)*

## From Learning_Theory_Foundations_and_Algorithms.pdf
- **Local Averaging Methods** — kernel-based averaging, weighted neighbor methods (distinct from KNN), Phase 2 ◈
- **Multi-armed Bandits** — MAB algorithms, exploration-exploitation in learning theory context, Phase 2 ◈
- **Overparameterized Models** — theory of why overparametrized networks generalize, implicit regularization, Phase 3 ◈
- **Complexity Lower Bounds** — information-theoretic and computational lower bounds for learning, Phase 2 ◈

## From Mathematics_for_ML.pdf
*(All major topics are covered in Phase 1)*

## From ML_Lecture_Notes_Textbook.pdf
- **Perceptron Algorithm** — historical linear classifier, convergence conditions, Phase 2 ◈
- **Adaline (ADAptive LInear NEuron)** — early single-layer neural model with gradient descent, Phase 2 ◈
- **Newton's Method** — second-order optimization for ML (non-stochastic), Phase 1 or 2 ◈
- **Quasi-Newton Methods** — BFGS, L-BFGS, limited-memory variants, Phase 1 or 2 ◈
- **Levenberg-Marquardt Algorithm** — nonlinear least-squares optimization, Phase 1 ◈
- **Self-Organizing Maps (SOM)** — unsupervised neural network for manifold learning, Phase 2 ◈
- **Text Mining** — eigenvalue methods, vector space models in data mining context, Phase 4 or Phase 2 ◈
- **Eigenvalue Methods in Data Mining** — spectral decomposition applications, Phase 2 ◈
- **Quadratic Programming (QP)** — equality/inequality constraints, KKT systems, Phase 1 or 2 ◈
- **Interior-point Methods** — barrier methods, logarithmic barriers for constrained optimization, Phase 1 ◈
- **Active Set Strategies** — QP solvers with constraint activation, Phase 1 ◈

## From ML_Probabilistic_Perspective_Murphy_Vol1.pdf
- **Transformations of Random Variables** — change of variables formula, Jacobian, Phase 1
- **Beta-Binomial Model** — conjugate prior example, Bayesian inference, Phase 2 ◈
- **Dirichlet-Multinomial Model** — Dirichlet as conjugate prior, multinomial likelihood, Phase 2 ◈
- **Wishart Distribution** — prior for covariance matrices, Phase 1 or 2 ◈
- **Linear Gaussian Systems** — Kalman filter setup, conditional Gaussians, Phase 2 ◈
- **Probit Regression** — alternative to logistic for binary classification, Phase 2 ◈
- **Multi-task Learning** — shared representations, task-specific parameters, Phase 2 ◈
- **Generalized Linear Mixed Models (GLMMs)** — random effects, hierarchical GLMs, Phase 2 ◈
- **Learning to Rank** — pairwise/listwise losses for ranking problems, Phase 2 ◈
- **Factor Analysis** — latent factor model, contrast with PCA, Phase 2 ◈
- **PCA for Categorical Data** — mixed-type dimensionality reduction, Phase 2 ◈
- **PCA for Paired/Multi-view Data** — cross-modal PCA, canonical correlation, Phase 2 ◈
- **Automatic Relevance Determination (ARD)** — automatic sparsity via hierarchical priors, Phase 2 ◈
- **Comparison of Discriminative Kernel Methods** — SVM vs KRR vs GP performance, Phase 2 ◈
- **Generalized Additive Models (GAM)** — nonparametric regression via sum of smooth functions, Phase 2 ◈
- **Interpreting Black-box Models** — LIME, SHAP, model explanation techniques, Phase 5 or Phase 2 ◈
- **Generalizations of HMMs** — hierarchical HMMs, semi-Markov models, Phase 2 ◈
- **Structural SVMs** — structured output prediction via SVMs, Phase 2 ◈
- **Computational Intractability of Inference** — NP-hardness of graphical model inference, Phase 2 ◈
- **Loopy Belief Propagation** — approximate inference on graphs with cycles, Phase 2 ◈
- **Dirichlet Process Mixture Models** — infinite mixture models, nonparametric clustering, Phase 2 ◈
- **Affinity Propagation** — message-passing clustering algorithm, Phase 2 ◈
- **Latent Variable Models for Discrete Data** — general framework, exponential family LVMs, Phase 2 ◈
- **Distributed State LVMs** — RBMs, energy-based approaches, Phase 3 ◈
- **Extensions of LDA** — hierarchical LDA, dynamic topic models, Phase 4 ◈
- **LVMs for Graph-Structured Data** — latent variable models on graphs, Phase 2 ◈
- **LVMs for Relational Data** — tensor/relational LVMs, Phase 2 ◈

## From Pattern_Recognition_and_ML_Bishop.pdf
- **Evidence Approximation** — marginal likelihood optimization, hyperparameter tuning in Bayes, Phase 1 or 2 ◈
- **Laplace Approximation** — Gaussian approximation to posterior, Bayesian inference, Phase 1 ◈
- **Mixture Density Networks** — neural networks predicting mixture components, Phase 3 ◈
- **Relevance Vector Machines (RVM)** — Bayesian sparse kernel method, automatic relevance, Phase 2 ◈
- **Variational Linear Regression** — Bayesian linear regression via variational inference, Phase 2 ◈
- **Slice Sampling** — MCMC method, adaptive step size sampling, Phase 2 ◈
- **Estimating the Partition Function** — normalization constant estimation in graphical models, Phase 2 ◈
- **Conditional Mixture Models** — mixture-of-experts with gating networks, Phase 2 ◈
- **Calculus of Variations** — functional derivatives, variational methods foundation, Phase 1 ◈

## From Probabilistic_ML_Advanced_Topics_Murphy_Vol2.pdf
- **Sequential Monte Carlo (SMC) Inference** — particle filters, importance weighting over time, Phase 2 ◈
- **Auto-regressive Models** — sequential factorization, PixelCNN, WaveNet-style models, Phase 3 or 4 ◈
- **Normalizing Flows** — invertible transformations, generative models via bijections, Phase 3 ◈
- **Beyond IID Assumption** — distribution shift, non-iid data, covariate shift, Phase 2 or 5 ◈
- **Non-parametric Bayesian Models** — general framework, Dirichlet processes, Gaussian processes prior, Phase 2 ◈

---

## Summary

**Total missing from README:** 75 topics

**Distribution by phase:**
- Phase 1 (Math): 7 topics
- Phase 2 (ML Core + Patches): 57 topics
- Phase 3 (DL + Patches): 4 topics
- Phase 4 (NLP & LLMs): 2 topics
- Phase 5 (AI Systems): 1 topic

**Key observations:**
1. **Optimization methods** (Newton, Quasi-Newton, interior-point, QP) — important but only sketched in Phase 1
2. **Advanced probabilistic models** (Dirichlet processes, RVMs, GLMMs, ARD) — rich theory not in main track
3. **Modern topics** (normalizing flows, auto-regressive models, SMC) — generative ML gap
4. **Theory gaps** — computational complexity, intractability, evidence approximation, Laplace approximation
5. **Graphical models extensions** — loopy BP, structural SVMs, LVMs for complex data
6. **Interpretability** — model explanation techniques (LIME/SHAP) missing from Phase 5
7. **Data assumptions** — beyond IID, distribution shift not explicitly covered

**Recommendation:** Most missing topics are correctly placed as On-Demand Patches (◈). Only a few should graduate to main track (e.g., Newton/Quasi-Newton methods for Phase 1 optimization).
