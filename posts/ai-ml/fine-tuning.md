# Fine Tuning Guide

Fine-tuning adapts a pre-trained model to a specific task with far less data and compute than training from scratch.

## When to fine-tune

- You have domain-specific language (legal, medical, code)
- You need a specific output format consistently
- Base model behavior doesn't match your use case

## LoRA — the efficient way

```python
from peft import LoraConfig, get_peft_model

config = LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj", "v_proj"])
model = get_peft_model(base_model, config)
```

> LoRA adds trainable rank-decomposition matrices, keeping most weights frozen.

## Tips

- Start with a small learning rate (`1e-4` or lower)
- Use gradient checkpointing to save VRAM
- Always eval on a held-out set — overfitting is sneaky
