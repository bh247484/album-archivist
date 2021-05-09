from typing import List

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

import crud, models, schemas
from database import SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [ "http://localhost:4200" ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency, deals with db access lifecycle
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/albums", response_model=schemas.Album)
def create_album(album: schemas.Album, db: Session = Depends(get_db)):
    return crud.create_album(db=db, album=album)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/all_albums", response_model=List[schemas.Album])
def all_albums(db: Session = Depends(get_db)):
    return crud.get_all_albums()

@app.get("/album/{album_id}", response_model=schemas.Album)
def single_album(album_id: str, db: Session = Depends(get_db)):
    db_album = crud.get_album(db, id=album_id)
    if db_album is None:
        raise HTTPException(status_code=404, detail="Album not found")
    return db_album

@app.patch("/patch_album/{album_id}", response_model=schemas.Album)
def patch_album(updates: schemas.Album, album_id: str, db: Session = Depends(get_db)):
    crud.update_album(db=db, id=album_id, updates=updates)

@app.delete("/album/{album_id}", response_model=schemas.Album)
def delete_album(album_id: str, db: Session = Depends(get_db)):
    crud.remove_album(db=db, id=album_id)