# Async Patterns in Python

Python's `asyncio` enables concurrent I/O without threads.

## Basic pattern

```python
import asyncio
import httpx

async def fetch(url: str) -> str:
    async with httpx.AsyncClient() as client:
        r = await client.get(url)
        return r.text

async def main():
    results = await asyncio.gather(
        fetch("https://example.com"),
        fetch("https://example.org"),
    )
    print(results)

asyncio.run(main())
```

## Key rules

1. `await` only works inside `async def`
2. Use `asyncio.gather()` for parallel tasks
3. CPU-bound work → use `ProcessPoolExecutor`, not async
4. Never call blocking functions in async context

## Semaphore for rate limiting

```python
sem = asyncio.Semaphore(10)  # max 10 concurrent

async def bounded_fetch(url):
    async with sem:
        return await fetch(url)
```
