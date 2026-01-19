from fastapi import FastAPI
from app.db.session import Base, engine
from app.routes import predictions, auth

app = FastAPI(title="ML Project Backend MVP")

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

app.include_router(auth.router, tags=["auth"])
app.include_router(predictions.router, prefix="/predict", tags=["predict"])
