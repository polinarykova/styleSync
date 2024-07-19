from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)


class ItemBase(BaseModel):
    image_url: str
    category: str
    description: str
    user_id: int


class UserBase(BaseModel):
    username: str
    items: List[ItemBase]


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@app.post("/addItem/")
async def add_item(item: ItemBase, db: db_dependency):
    db_item = models.Item(
        category=item.category,
        description=item.description,
        image_URL=item.image_url,
        user_id=item.user_id,
    )
    db.add(db_item)
    db.commit()
    db.refresh(db_item)


@app.get("/getItems/{id}/{category}")
async def get_items(id: int, category: str, db: db_dependency):
    return (
        db.query(models.Item)
        .filter(models.Item.user_id == id, models.Item.category == category)
        .all()
    )


@app.post("/addUser/")
async def add_user(user: UserBase, db: db_dependency):
    db_user = models.User(username=user.username)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
