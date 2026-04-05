# Intro to LLMs

Large Language Models (LLMs) are neural networks trained on massive text corpora to predict the next token.

## How they work

1. **Tokenization** — text is split into tokens (subwords)
2. **Transformer layers** — self-attention + feed-forward blocks
3. **Next-token prediction** — trained to minimize cross-entropy loss

## Key concepts

| Term | Meaning |
|---|---|
| Context window | Max tokens the model sees at once |
| Temperature | Controls randomness of output |
| Top-p sampling | Nucleus sampling for diversity |

## Code example

```python
from transformers import pipeline

gen = pipeline("text-generation", model="gpt2")
out = gen("Once upon a time", max_new_tokens=50)
print(out[0]["generated_text"])
```

## Why they matter

LLMs have fundamentally changed how we interact with software — from search to code generation to reasoning tasks.
