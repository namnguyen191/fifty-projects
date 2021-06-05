import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-day-fifteen',
  templateUrl: './day-fifteen.component.html',
  styleUrls: ['./day-fifteen.component.scss'],
})
export class DayFifteenComponent implements OnInit {
  constructor(private readonly titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 15');
  }
}
