import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-fourteen',
  templateUrl: './day-fourteen.component.html',
  styleUrls: ['./day-fourteen.component.scss'],
})
export class DayFourteenComponent implements OnInit {
  constructor(private readonly titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 14');
  }
}
