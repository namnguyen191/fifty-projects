import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.scss'],
})
export class DayThreeComponent implements OnInit {
  navState: 'open' | 'close' = 'close';

  constructor() {}

  ngOnInit(): void {}

  onOpenClick() {
    this.navState = 'open';
  }

  onCloseClick() {
    this.navState = 'close';
  }
}
