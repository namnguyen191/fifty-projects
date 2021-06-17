import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-twenty-seven',
  templateUrl: './day-twenty-seven.component.html',
  styleUrls: ['./day-twenty-seven.component.scss'],
})
export class DayTwentySevenComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 27');
  }
}
