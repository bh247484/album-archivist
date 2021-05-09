from pydantic import BaseModel

class Album(BaseModel):
    id: str
    artist: str
    cover: str
    genre: str
    title: str
    year: int

    # Allows for dot notation data access
    class Config:
        orm_mode = True

# class AlbumCreate(AlbumBase):
#     pass

# # For reading/returning, once id is known
# class Album(AlbumBase):
#     id: str

#     # Allows for dot notation data access
#     class Config:
#       orm_mode = True