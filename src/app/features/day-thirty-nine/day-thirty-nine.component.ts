import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-thirty-nine',
  templateUrl: './day-thirty-nine.component.html',
  styleUrls: ['./day-thirty-nine.component.scss'],
})
export class DayThirtyNineComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 39');
  }
}
