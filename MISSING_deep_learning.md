# Missing Topics — 04_Deep_Learning

## From Deep_Learning_Goodfellow_Bengio_Courville.pdf

- **Tangent Distance, Tangent Prop, and Manifold Tangent Classifier** — specialized regularization technique using tangent spaces of data manifold — Phase 3
- **Approximate Second-Order Methods** — Newton, quasi-Newton (BFGS, L-BFGS), natural gradient — Phase 3
- **Optimization Strategies and Meta-Algorithms** — learning rate schedules, curriculum learning, other meta-level optimization improvements — Phase 3
- **Variants of the Basic Convolution Function** — dilated convolutions, grouped convolutions, depthwise-separable convolutions — Phase 3
- **Structured Outputs** — techniques for structured output prediction with CNNs (segmentation, parsing) — Phase 3
- **Efficient Convolution Algorithms** — Winograd convolutions, Fast Fourier Transform convolution — Phase 3
- **Random or Unsupervised Features** — learning discriminative features without labels (random projections, autoencoders) — Phase 3
- **Neuroscientific Basis for Convolutional Networks** — biological inspiration and connections to visual cortex — Phase 3
- **Bidirectional RNNs** — forward-backward passes for sequence processing, when to use — Phase 3
- **Encoder-Decoder Sequence-to-Sequence Architectures** — seq2seq for machine translation, summarization (overlaps Phase 4) — Phase 3/4
- **Recursive Neural Networks** — tree-structured recursive networks for hierarchical data — Phase 3
- **Echo State Networks** — reservoir computing approach to RNNs — Phase 3
- **Leaky Units and Other Strategies for Multiple Time Scales** — handling variable temporal scales in RNNs — Phase 3
- **Optimization for Long-Term Dependencies** — specific optimization techniques for training LSTMs/GRUs — Phase 3
- **Explicit Memory** — Neural Turing Machines, memory networks, attention-based memory — Phase 3
- **Practical Methodology (Chapter 11)** — comprehensive training best practices: metrics, baseline models, hyperparameter selection, debugging — Phase 3
- **Slow Feature Analysis** — unsupervised learning principle of slowly-varying features — Phase 3
- **Learning Manifolds with Autoencoders** — geometric interpretation of autoencoder latent spaces — Phase 3
- **Contractive Autoencoders** — regularized autoencoders with Jacobian penalty on hidden units — Phase 3
- **Greedy Layer-Wise Unsupervised Pretraining** — training deep networks layer-by-layer with DBNs/DBMs — Phase 3
- **Semi-Supervised Disentangling of Causal Factors** — learning interpretable, independent factors of variation — Phase 3

## From GANs_in_Action.pdf

- **Training and Common Challenges in GANs (Ch 5)** — mode collapse, discriminator overfitting, convergence issues, instability fixes — Phase 3
- **Conditional GAN (cGAN)** — class-conditional image generation, label conditioning — Phase 3
- **Semi-Supervised GAN** — leveraging unlabeled data in GAN framework — Phase 3
- **Practical Applications of GANs (Ch 11)** — style transfer, super-resolution, image inpainting, domain adaptation, data augmentation — Phase 3

## Advanced Theoretical Topics (Goodfellow Chapters 16–20, recommended Phase 3 patches)

- **Confronting the Partition Function (Chapter 18)** — techniques for training energy-based models and unnormalized distributions — Phase 3 ◈
- **The Log-Likelihood Gradient** — computing gradients for intractable likelihoods — Phase 3 ◈
- **Stochastic Maximum Likelihood and Contrastive Divergence** — training methods for RBMs — Phase 3 ◈
- **Pseudolikelihood** — surrogate objective for intractable distributions — Phase 3 ◈
- **Score Matching and Ratio Matching** — alternative training objectives for energy-based models — Phase 3 ◈
- **Denoising Score Matching** — connection between denoising autoencoders and score matching — Phase 3 ◈
- **Noise-Contrastive Estimation** — scalable training for unnormalized models — Phase 3 ◈

---

## Summary

**Total missing: 34 topics**

- From Goodfellow: 21 topics (core DL techniques and theory)
- From GANs in Action: 4 topics (GAN-specific challenges and applications)
- Advanced theory (Chapters 16–20): 7 topics (Phase 3 patches, optional advanced)

**Recommendation:** Chapters 11, 5, and 18 of Goodfellow are the most impactful for practitioners. Chapters 16–20 are valuable but more theoretical/research-oriented and fit as Phase 3 patches.
