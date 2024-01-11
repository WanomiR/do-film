from pydantic import BaseModel


class UserBase(BaseModel):
    first_name: str
    last_name: str | None
    nickname: str | None
    email: str
    password: str


class UserModel(UserBase):
    id: int

    class Config:
        orm_mode = True
