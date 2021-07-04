import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-fourty-four',
  templateUrl: './day-fourty-four.component.html',
  styleUrls: ['./day-fourty-four.component.scss'],
})
export class DayFourtyFourComponent implements OnInit {
  rangeValue = 0;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 44');
  }

  onChange(event: Event) {
    const slider = event.target as HTMLInputElement;

    this.rangeValue = parseInt(slider.value);
  }
}
