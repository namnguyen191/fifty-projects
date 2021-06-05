import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-eleven',
  templateUrl: './day-eleven.component.html',
  styleUrls: ['./day-eleven.component.scss'],
})
export class DayElevenComponent implements OnInit {
  eventKey: string = 'a';
  eventKeyCode: string = '65';
  eventCode: string = 'KeyA';

  constructor(private readonly titleService: Title) {}

  @HostListener('window:keydown', ['$event'])
  onResize(event: KeyboardEvent) {
    this.eventKey = event.key;
    this.eventKeyCode = event.keyCode.toString();
    this.eventCode = event.code;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 11');
  }
}
