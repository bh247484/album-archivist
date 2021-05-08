import { Injectable } from '@angular/core';
import { albumType, fakeAlbums } from './fakeData/fakeData';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  allAlbums: Array<albumType> = fakeAlbums
  constructor() { }

  getAllAlbums() {
    return this.allAlbums;
  }
  createAlbum(newAlbum: albumType) {
    this.allAlbums.push(newAlbum)
  }
  deleteAlbum(id: number) {
    this.allAlbums = this.allAlbums.filter(album => album.id === id)
  }
  updateAlbum(updatedAlbum: albumType) {
    this.allAlbums = this.allAlbums.filter(album => album.id === updatedAlbum.id)
    this.createAlbum(updatedAlbum)
  }
}
