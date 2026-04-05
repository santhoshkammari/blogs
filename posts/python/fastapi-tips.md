# FastAPI Tips

FastAPI is the best Python web framework for building APIs — fast to write, fast to run.

## Dependency injection

```python
from fastapi import FastAPI, Depends

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/items")
async def list_items(db=Depends(get_db)):
    return db.query(Item).all()
```

## Background tasks

```python
from fastapi import BackgroundTasks

@app.post("/send-email")
async def send(bg: BackgroundTasks, email: str):
    bg.add_task(send_email_fn, email)
    return {"status": "queued"}
```

## Useful patterns

| Pattern | Use case |
|---|---|
| `Depends()` | DB sessions, auth, config |
| `BackgroundTasks` | Fire-and-forget jobs |
| `lifespan` | Startup/shutdown events |
| `HTTPException` | Clean error responses |

## Tip: use Pydantic v2

FastAPI 0.100+ ships with Pydantic v2 by default — `model_validate`, `model_dump` replace old `parse_obj`/`dict()`.
