import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-nine',
  templateUrl: './day-nine.component.html',
  styleUrls: ['./day-nine.component.scss'],
})
export class DayNineComponent implements OnInit {
  curSrc: string = '';
  @ViewChild('player') audioEleRef: ElementRef<HTMLAudioElement> | undefined;

  playList = [
    {
      src: 'demon-trigger.mp3',
      title: 'Demon Trigger',
    },
    {
      src: 'nanana.mp3',
      title: 'Na Na Na',
    },
  ];

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 9');
  }

  setSrcAndPlay(src: string) {
    if (this.audioEleRef) {
      this.audioEleRef.nativeElement.src = '/assets/audio/' + src;
      this.audioEleRef.nativeElement.play();
    } else {
      console.log('Error getting the audio element');
    }
  }
}
