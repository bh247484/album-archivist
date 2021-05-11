import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { albumType } from '../fakeData/fakeData';

@Component({
  selector: 'app-show-album',
  templateUrl: './show-album.component.html',
  styleUrls: ['./show-album.component.css']
})
export class ShowAlbumComponent implements OnInit {
  album: any;
  constructor(private albumsService: AlbumsService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumId = String(routeParams.get('albumId'));

    if (this.albumsService.getAllAlbums()) {
      this.album = this.albumsService.getAlbum(albumId)
    } else {
      this.albumsService.loadEvent.subscribe((message) => {
        console.log(message)
        this.album = this.albumsService.getAlbum(albumId)
      })
    }
  }

}
