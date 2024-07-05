from sqlalchemy import Column, ForeignKey, Integer, String
from database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50))


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    image_URL = Column(String)
    category = Column(String(30))
    description = Column(String(200))
    user_id = Column(Integer, ForeignKey("users.id"))
