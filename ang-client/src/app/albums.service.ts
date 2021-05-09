import { Injectable } from '@angular/core';
import { albumType, fakeAlbums } from './fakeData/fakeData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  allAlbums: Array<albumType>;

  constructor(private http: HttpClient) {
    this.http.get<albumType[]>('http://localhost:8000/all_albums')
      .toPromise()
      .then(data => this.allAlbums = data)
  }

  getAllAlbums() {
    if (this.allAlbums) {
      return this.allAlbums;
    } else {
      return null
    }
  }
  getAlbum(id: string) {
    return this.allAlbums.find(album => album.id === id)
  }
  createAlbum(newAlbum: albumType) {
    this.allAlbums.unshift(newAlbum)
    this.http.post('http://localhost:8000/albums', JSON.stringify(newAlbum))
      .toPromise()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  deleteAlbum(id: string) {
    this.allAlbums = this.allAlbums.filter(album => album.id !== id)
    this.http.delete(`http://localhost:8000/album/${id}`)
      .toPromise()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  updateAlbum(updatedAlbum: albumType) {
    this.allAlbums = this.allAlbums.filter(album => album.id !== updatedAlbum.id)
    this.createAlbum(updatedAlbum)
    this.http.patch(`http://localhost:8000/patch_album/${updatedAlbum.id}`, JSON.stringify(updatedAlbum))
      .toPromise()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
}
