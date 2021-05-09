from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from database import Base

class Album(Base):
    __tablename__ = "albums"

    id = Column(String, primary_key=True, index=True)
    artist = Column(String, index=True)
    cover = Column(String, index=True)
    genre = Column(String, index=True)
    title = Column(String, index=True)
    year = Column(Integer, index=True)