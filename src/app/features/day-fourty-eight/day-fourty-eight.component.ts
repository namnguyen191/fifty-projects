import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-fourty-eight',
  templateUrl: './day-fourty-eight.component.html',
  styleUrls: ['./day-fourty-eight.component.scss'],
})
export class DayFourtyEightComponent implements OnInit {
  readonly UNSPLASH_URL = 'https://source.unsplash.com/random/';

  rows = 10;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 48');
  }

  getRandomSize() {
    return `${this.getRandomNum()}x${this.getRandomNum()}`;
  }

  private getRandomNum() {
    return Math.floor(Math.random() * 300) + 10;
  }
}
