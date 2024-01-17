import uuid
from tkinter import Image
from typing import List, Type

from sqlalchemy.orm import Session
from . import models, schemas


async def convert_image(image_file):
    random_name = str(uuid.uuid4())
    image = Image.open(image_file)


def create_user(db: Session, user: schemas.UserBase):
    db_entry = models.User(**user.model_dump())
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry


def get_all_users(db: Session, skip: int, limit: int) -> List[Type[schemas.UserBase]]:
    return db.query(models.User).offset(skip).limit(limit).all()
