import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-twenty-three',
  templateUrl: './day-twenty-three.component.html',
  styleUrls: ['./day-twenty-three.component.scss'],
})
export class DayTwentyThreeComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 23');
  }
}
