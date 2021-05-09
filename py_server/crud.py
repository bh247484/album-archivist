from sqlalchemy.orm import Session

import models, schemas

def get_album(db: Session, id: str):
    return db.query(models.Album).filter(models.Album.id == id).first()

def get_all_albums(db: Session):
    return db.query(models.Album).all()

def create_album(db: Session, album: schemas.Album):
    db_album = models.Album(**album.dict())
    db.add(db_album)
    db.commit()
    db.refresh(db_album)
    return db_album

def update_album(db: Session, id: str, updates):
    db_album = db.query(models.Album).filter(models.Album.id == id).update(dict(updates))
    db.commit()
    return db_album

def remove_album(db: Session, id: str):
    db.query(models.Album).filter_by(id=id).delete()
    db.commit()