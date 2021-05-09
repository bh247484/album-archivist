import { Component, Input, OnInit } from '@angular/core';
import { albumType } from '../fakeData/fakeData';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() album: albumType;

  constructor() { }

  ngOnInit(): void { }

}
