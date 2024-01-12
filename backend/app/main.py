from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import Annotated, List
from sqlalchemy.orm import Session

import models, schemas, crud
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@app.post("/users/", response_model=schemas.UserModel)
async def create_user(user: schemas.UserBase, db: db_dependency):
    return crud.create_user(db, user)


@app.get("/users/", response_model=List[schemas.UserModel])
async def read_users(db: db_dependency, skip: int = 0, limit: int = 100):
    return crud.get_all_users(db, skip=skip, limit=limit)