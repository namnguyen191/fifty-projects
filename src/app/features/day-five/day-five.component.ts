import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { timer } from 'rxjs';

@Component({
  selector: 'app-day-five',
  templateUrl: './day-five.component.html',
  styleUrls: ['./day-five.component.scss'],
})
export class DayFiveComponent implements OnInit, AfterViewInit {
  load: number = 0;

  constructor(private readonly titleService: Title) {}

  ngAfterViewInit(): void {
    const source = timer(1000, 30);
    const subscribe = source.subscribe((val) => {
      this.load = val;
      if (this.load > 99) subscribe.unsubscribe();
    });
  }

  scale(
    number: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 5');
  }
}
