import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async enableAudio(): Promise<void> {
    await Tone.start()
    Tone.Transport.start();
  }
}
