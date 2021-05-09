import { v4 as uuidv4 } from 'uuid';

export type albumType = {
  id: string,
  artist: string,
  cover: string,
  genre: string,
  title: string,
  year: number | undefined
}

export const fakeAlbums: Array<albumType> = [
  {
    id: uuidv4(),
    artist: 'Stevie Wonder',
    cover: 'https://img.discogs.com/u1Khi3avXQBxqW9Za_2RPsIFtyo=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-174477-1314480305.jpeg.jpg',
    genre: 'Soul',
    title: 'Talking Book',
    year: 1972
  },
  {
    id: uuidv4(),
    artist: 'Stevie Wonder',
    cover: 'https://img.discogs.com/hKYhhcE5coVNKLjcNPi9QMTZti4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13286331-1551400916-4169.jpeg.jpg',
    genre: 'Soul',
    title: 'Innervisions',
    year: 1973
  },
]