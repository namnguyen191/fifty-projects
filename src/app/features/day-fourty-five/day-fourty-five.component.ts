import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-fourty-five',
  templateUrl: './day-fourty-five.component.html',
  styleUrls: ['./day-fourty-five.component.scss'],
})
export class DayFourtyFiveComponent implements OnInit {
  visible = false;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 45');
  }
}
