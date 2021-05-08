import { Injectable } from '@angular/core';
import { albumType, fakeAlbums } from './fakeData/fakeData';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  allAlbums: Array<albumType> = fakeAlbums
  constructor() { }

  getAllAlbums() {
    return this.allAlbums.reverse();
  }
  createAlbum(newAlbum: albumType) {
    console.log('newAlbum = ', newAlbum)
    this.allAlbums.push(newAlbum)
    console.log('allAlbums = ', this.allAlbums)
  }
  deleteAlbum(id: number) {
    this.allAlbums = this.allAlbums.filter(album => album.id === id)
  }
  updateAlbum(updatedAlbum: albumType) {
    this.allAlbums = this.allAlbums.filter(album => album.id === updatedAlbum.id)
    this.createAlbum(updatedAlbum)
  }
}
