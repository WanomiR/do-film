from pydantic import BaseModel


class UserBase(BaseModel):
    firstName: str
    lastName: str | None = None
    nickname: str | None = None
    email: str
    password: str


class UserModel(UserBase):
    id: int

    class Config:
        from_attributes = True
