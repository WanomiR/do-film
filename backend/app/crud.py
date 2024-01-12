from typing import List, Type

from sqlalchemy.orm import Session
import models, schemas


def create_user(db: Session, user: schemas.UserBase):
    db_entry = models.User(**user.model_dump())
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry


def get_all_users(db: Session, skip: int, limit: int) -> List[Type[schemas.UserBase]]:
    return db.query(models.User).offset(skip).limit(limit).all()

