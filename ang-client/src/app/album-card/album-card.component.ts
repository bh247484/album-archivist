import { Component, Input, OnInit } from '@angular/core';
import { albumType } from '../fakeData/fakeData';
import { HttpClient } from '@angular/common/http';
import * as Tone from 'tone';
import { getScale } from './albumCardUtils';
import { ImageData } from './imageData';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {
  @Input() album: albumType;
  imageData: ImageData;
  limiter = new Tone.Limiter(-15).toDestination();
  delay = new Tone.FeedbackDelay("8n", 0.1).connect(this.limiter);
  vibe = new Tone.Vibrato(2, 0.3).connect(this.delay)
  chorus = new Tone.Chorus(5, 2.0, 0.7).connect(this.vibe);
  synth = new Tone.MonoSynth({
    envelope: {
      attack: 0.01,
      release: 0.8
    },
    oscillator: { type: 'triangle' },
    portamento: 0.05,
    filter: { frequency: 400 },
    filterEnvelope: {
      attack: 0.001,
      decay: 0.7,
      sustain: 0.1,
      release: 0.8,
      baseFrequency: 400,
      octaves: 2
    }
  }).connect(this.chorus);
  seq_notes: any;
  seq: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (this.album) this.generateSoundSig();
  }

  playSound(): void {
    this.seq.stop(Tone.now())
    this.seq.start(Tone.now())
    console.log('Sequence Triggered')
  }

  generateSoundSig(): void {
    this.http.post<ImageData>('http://localhost:8000/image_data', JSON.stringify({ url: this.album.cover }))
      .subscribe((data) => {
        console.log(`${this.album.title}'s ImgData: `, data);
        this.imageData = data;

        // Convert root note and rgb data into scale
        const scale = getScale(this.imageData.key, this.imageData.rgb_means)

        // Assign notes/rhuthm to sequence
        let sequence: Array<any> = [];
        this.imageData.rhythm.forEach((trigger, i) => {
          if (i == 15) {
            sequence.push(scale[0])
          } else if (trigger) {
            sequence.push(scale[i % scale.length])
          } else if (!trigger) {
            sequence.push(null)
          }
        })

        // Instantiate Sequence
        this.seq_notes = sequence;
        this.seq = new Tone.Sequence((time, note) => {
          this.synth.triggerAttackRelease(note, "16n", time);
        }, this.seq_notes);
        this.seq.loop = false;
        // this.seq.debug = true;

        // Osc and Effect modifiers
        const [hue, sat, brightness] = this.imageData.hsv_means

        if (hue % 3 == 0) {
          this.synth.oscillator.type = "square8"
        } else if (hue % 2 == 0) {
          this.synth.oscillator.type = "triangle"
        } else {
          this.synth.oscillator.type = "sawtooth"
        }
        if (sat > 100) this.delay.set({ wet: 0.70 })
        if (brightness > 100) this.synth.filterEnvelope.octaves = 3
      })
  }
}
