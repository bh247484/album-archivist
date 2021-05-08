import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums = this.albumsService.getAllAlbums();

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    console.log(this.albums)
  }

  removeAlbum(albumId: string): void {
    this.albumsService.deleteAlbum(albumId)
    // console.log(albumId)
    this.albums = this.albumsService.getAllAlbums();
  }

}
