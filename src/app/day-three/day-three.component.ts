import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.scss'],
})
export class DayThreeComponent implements OnInit {
  navState: 'open' | 'close' = 'close';

  constructor(private readonly titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day Threee');
  }

  onOpenClick() {
    this.navState = 'open';
  }

  onCloseClick() {
    this.navState = 'close';
  }
}
