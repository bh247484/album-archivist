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

    this.album = this.albumsService.getAlbum(albumId)
  }

}
