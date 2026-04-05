# Missing Topics — 05_NLP_and_LLMs

This file tracks topics present in the 3 NLP/LLMs books that are **not** covered in the current README.md Phase 4 section. Identified through systematic TOC comparison.

---

## From Foundations_of_LLMs.pdf

### Pretraining Objectives (7 topics)
- **Unsupervised Pre-training** — Unlabeled data pretraining; general objectives not specified in README
- **Self-supervised Pre-training** — Self-supervised learning framework for pretraining
- **Decoder-only Pre-training** — Specific pretraining objectives for GPT-style models
- **Encoder-only Pre-training** — Specific pretraining objectives for BERT-style models
- **Encoder-Decoder Pre-training** — Specific pretraining objectives for T5-style models
- **Comparison of Pre-training Tasks** — Cross-comparison of pretraining paradigms and tradeoffs
- **Automatic Preference Data Generation** — Synthetic preference data creation for alignment

### Alignment & RLHF (4 topics)
- **Inference-time Alignment** — Alignment techniques applied at inference rather than training
- **Step-by-step Alignment** — Multi-step alignment procedures
- **Better Reward Modeling** — Improvements to reward model training and architecture
- **Basics of Reinforcement Learning** — RL fundamentals; mentioned implicitly under RLHF but not standalone

### Optimization & Efficiency (3 topics)
- **Optimization from HPC Perspectives** — High-performance computing optimization techniques
- **More Efficient Models** — Techniques for model compression and efficiency
- **Shared across Heads and Layers** — Parameter sharing for efficiency

### Architecture & Scaling (3 topics)
- **Long Sequence Modeling** — Handling sequences beyond typical context windows
- **Position Extrapolation and Interpolation** — Position encoding methods that extrapolate/interpolate
- **Aligning LLMs with the World** — General alignment framing (broader than specific RLHF/DPO)

**Total from Foundations_of_LLMs:** 17 topics

---

## From Hands_On_LLMs.pdf

### Pretraining & Training (5 topics)
- **Continued Pretraining with Masked Language Modeling** — Further pretraining with MLM on domain data
- **Training Configuration** — Hyperparameter setup for training
- **Training No Reward Model** — DPO/alternative alignment without reward model
- **Preference Tuning with DPO** — Direct Preference Optimization as detailed standalone topic
- **Training a Song Embedding Model** — Specific embedding training application

### Evaluation & Metrics (5 topics)
- **Word-Level Metrics** — Character/word-level evaluation metrics (distinct from BLEU/ROUGE)
- **Benchmarks** — Model benchmarking frameworks and datasets
- **Leaderboards** — Evaluation leaderboards for comparing models
- **Automated Evaluation** — Automated evaluation metrics (e.g., LLM-as-judge)
- **Human Evaluation** — Human-in-the-loop evaluation protocols

### Prompting & Reasoning (2 topics)
- **Chains** — Chain-of-prompts, chaining in LangChain
- **ReAct in LangChain** — ReAct implementation with LangChain framework

### Tokenization & Embeddings (10 topics)
- **Tokenizer Properties** — Characteristics and properties of tokenizers
- **Word Versus Subword Versus Character Versus Byte Tokens** — Comparison of tokenization granularities
- **Comparing Trained LLM Tokenizers** — Comparative analysis of different tokenizer implementations
- **How Does the Tokenizer Break Down Text?** — Tokenization breakdown mechanics
- **Creating Contextualized Word Embeddings with Language Models** — Context-dependent embeddings
- **Embeddings for Recommendation Systems** — Embedding applications in recommender systems
- **Generating Contrastive Examples** — Synthetic contrastive pair generation
- **Positional Embeddings (RoPE)** — Rotary positional embeddings specifically
- **Supervised (embedding)** — Supervised embedding fine-tuning
- **More Efficient Attention** — Efficient attention variants

### Specialized Models & Frameworks (4 topics)
- **BERTopic** — BERTopic topic modeling framework
- **SetFit** — SetFit few-shot classification framework
- **BLIP-2** — BLIP-2 multimodal model specifics
- **OpenCLIP** — OpenCLIP multimodal model

### Memory & Conversation (3 topics)
- **Memory: Helping LLMs to Remember Conversations** — Conversation memory systems
- **Conversation Buffer** — Simple conversation history buffer
- **Windowed Conversation Buffer** — Sliding window conversation buffer
- **Conversation Summary** — Summarization-based conversation memory

### Other Important Topics (14 topics)
- **Attention Is All You Need** — Standalone transformer foundational paper/concept
- **Model Selection** — Choosing between available models
- **Using a Task-Specific Model** — Task-specific model selection and application
- **Controlled Model Output** — Controlling generation output format/constraints
- **In-Depth Evaluation** — Detailed model evaluation beyond standard metrics
- **Loss Functions** — Loss function selection and design
- **Merge Weights** — LoRA weight merging procedures
- **Model Quantization** — Quantization methods for inference efficiency
- **LoRA Configuration** — LoRA parameter configuration details
- **Templating Alignment Data** — Format and template design for alignment training
- **Other Architectural Experiments and Improvements** — Non-standard architectural innovations
- **Transformer-Based Sequential Denoising Auto-Encoder** — TSDAE architecture
- **Using TSDAE for Domain Adaptation** — TSDAE application to domain transfer
- **Responsible LLM Development and Usage** — Responsible AI in LLMs (currently in Phase 5)
- **Open Source Frameworks** — Open source LLM frameworks and ecosystems
- **Limited Resources Are All You Need** — Training with limited compute

**Total from Hands_On_LLMs:** 48 topics

---

## From NLP_with_Transformers_HuggingFace.pdf

### Transformer Architecture Details (11 topics)
- **Attention Mechanisms** — Core attention mechanisms (not just transformers)
- **Self-Attention** — Self-attention specifically
- **Feed-Forward Layer** — FFN/MLP layer in transformers
- **Layer Normalization** — Layer norm placement and variants
- **Classification Head** — Task-specific classification heads
- **Encoder Branch** — Encoder architecture specifics
- **Decoder Branch** — Decoder architecture specifics
- **Encoder-Decoder Branch** — Encoder-decoder architecture specifics
- **Transformer Tree of Life** — Taxonomy of transformer variants
- **Positional Embeddings specifics** — Beyond generic positional encoding
- **Transfer Learning in NLP** — NLP-specific transfer learning (different from general TL)

### Tokenization (5 topics)
- **Building a Tokenizer** — Building custom tokenizers
- **Training a Tokenizer** — Tokenizer training procedures
- **A Tokenizer for Python** — Language-specific tokenizer example
- **SentencePiece** — SentencePiece tokenizer specifically
- **The Tokenizer Pipeline** — Multi-step tokenization pipeline

### Text Generation Details (4 topics)
- **Greedy Search** — Greedy decoding specifically
- **Beam Search** — Beam search decoding specifically
- **Top-k and Nucleus Sampling** — Top-k and top-p sampling
- **Which Decoding Method Is Best?** — Comparison and selection

### Advanced Topics (8 topics)
- **Knowledge Distillation** — Model distillation for compression
- **Weight Pruning** — Pruning neural networks
- **Quantization details** — Detailed quantization methods
- **ONNX** — ONNX format and optimization
- **Data Augmentation** — Data augmentation techniques
- **Domain Adaptation** — Domain-specific fine-tuning
- **Cross-Lingual Transfer** — Cross-lingual transfer learning
- **Few-shot Learning with Prompts** — In-context few-shot prompting

### Specific Models & Evaluation (7 topics)
- **BART** — BART model specifically
- **PEGASUS** — PEGASUS model specifically
- **GPT-2** — GPT-2 model specifically
- **XLM-RoBERTa** — XLM-R multilingual model specifically
- **BLEU** — BLEU metric specifically
- **ROUGE** — ROUGE metric specifically
- **Summarization** — Summarization detailed coverage

### Task-Specific Details (5 topics)
- **Extractive QA** — Extractive question answering
- **Token Classification** — Token-level classification tasks
- **Custom Model for Token Classification** — Custom models for sequence tagging
- **Haystack** — Haystack QA framework

### Scaling & Future (3 topics)
- **Scaling Laws** — Detailed scaling laws for transformers
- **Challenges with Scaling** — Scaling challenges and solutions
- **Vision** — Vision transformer applications
- **Speech-to-Text** — Speech-to-text multimodal models
- **Tables** — Table understanding/processing

### Training from Scratch (3 topics)
- **Training from Scratch** — Training models from random initialization
- **Fine-Tuning a Language Model** — Continued pretraining for domain adaptation
- **Challenges of Building a Large-Scale Corpus** — Large dataset creation challenges

**Total from NLP_with_Transformers_HuggingFace:** 46 topics

---

## Summary

| Book | Total Topics | Missing | Coverage |
|------|--------------|---------|----------|
| Foundations_of_LLMs | 57 | 17 | 70% |
| Hands_On_LLMs | 176 | 48 | 73% |
| NLP_with_Transformers_HuggingFace | 155 | 46 | 70% |
| **TOTAL** | **388** | **111** | **71%** |

### Key Gaps in README Phase 4

1. **Pretraining Specifics** — Individual pretraining objectives (encoder-only, decoder-only, encoder-decoder) not broken out; comparison missing
2. **Inference & Scaling** — Position interpolation/extrapolation, long sequences, sparse/linearized attention not covered
3. **Evaluation Metrics** — Word-level metrics, BLEU, ROUGE, benchmarks, leaderboards, automated/human evaluation not detailed
4. **Text Generation Decoding** — Greedy, beam search, top-k/nucleus sampling not specified
5. **Memory & Conversation** — No coverage of conversation buffers, memory systems, windowed attention
6. **Framework Details** — LangChain, Haystack, ONNX, Hugging Face Accelerate not mentioned
7. **Advanced Alignment** — Inference-time alignment, step-by-step alignment, better reward modeling not detailed
8. **Specific Models** — BART, PEGASUS, GPT-2, XLM-R not called out individually
9. **Efficiency** — Knowledge distillation, weight pruning, quantization details for inference not in Phase 4
10. **Data Augmentation** — Synthetic data generation, TSDAE, domain adaptation not in Phase 4
11. **LLM-Specific Architecture** — RoPE positional embeddings, other recent architectural improvements not detailed

### Recommendation

Consider expanding Phase 4 with:
- A 4.5 subsection for **Advanced Architectures** (attention variants, scaling, efficiency)
- A 4.6 subsection for **Evaluation & Metrics** (benchmarks, human eval, LLM-as-judge)
- More specifics in 4.2 for individual pretraining objectives
- Framework coverage in 4.3-4.4 (LangChain, Haystack, ONNX)
