import { Component, OnInit } from '@angular/core';
import { albumType } from '../fakeData/fakeData';
import { AlbumsService } from '../albums.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-album-form',
  templateUrl: './new-album-form.component.html',
  styleUrls: ['./new-album-form.component.css']
})
export class NewAlbumFormComponent implements OnInit {
  model: albumType = {
    id: uuidv4(),
    artist: '',
    cover: '',
    genre: '',
    title: '',
    year: undefined,
  }
  constructor(private albumsService: AlbumsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(event: any): void {
    event.preventDefault();
    this.albumsService.createAlbum(this.model)
    this.router.navigate(['/'])
  }

}
