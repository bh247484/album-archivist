import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums = this.albumsService.getAllAlbums();
  loading: Boolean = true;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.albums = this.albumsService.getAllAlbums();
    }, 750)
  }

  removeAlbum(albumId: string): void {
    this.albumsService.deleteAlbum(albumId)
    this.albums = this.albumsService.getAllAlbums();
  }

}
