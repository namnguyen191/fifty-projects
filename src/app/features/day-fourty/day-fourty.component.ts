import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-fourty',
  templateUrl: './day-fourty.component.html',
  styleUrls: ['./day-fourty.component.scss'],
})
export class DayFourtyComponent implements OnInit {
  grid: any[][] = new Array(4).fill(new Array(4).fill(0));

  constructor(private titleService: Title) {
    console.log(this.grid);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 40');
  }
}
