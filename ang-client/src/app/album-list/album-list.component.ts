import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { albumType } from '../fakeData/fakeData';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Array<albumType> | null;
  loading: Boolean = true;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    if (this.albumsService.getAllAlbums()) {
      this.albums = this.albumsService.getAllAlbums()
      this.loading = false;
    } else {
      this.albumsService.loadEvent.subscribe((message) => {
        console.log(message)
        this.albums = this.albumsService.getAllAlbums();
        this.loading = false;
      })
    }
  }

  removeAlbum(albumId: string): void {
    this.albumsService.deleteAlbum(albumId)
    this.albums = this.albumsService.getAllAlbums();
  }

}
