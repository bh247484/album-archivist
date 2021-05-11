import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-album-form',
  templateUrl: './update-album-form.component.html',
  styleUrls: ['./update-album-form.component.css']
})
export class UpdateAlbumFormComponent implements OnInit {
  album: any;
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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

  onSubmit(event: any): void {
    event.preventDefault();
    this.albumsService.updateAlbum(this.album)
    this.router.navigate(['/'])
  }

}
