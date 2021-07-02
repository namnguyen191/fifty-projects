import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-fourty-three',
  templateUrl: './day-fourty-three.component.html',
  styleUrls: ['./day-fourty-three.component.scss'],
})
export class DayFourtyThreeComponent implements OnInit {
  ratings = [
    {
      icon: 'https://image.flaticon.com/icons/svg/187/187150.svg',
      value: 'Unhappy',
    },
    {
      icon: 'https://image.flaticon.com/icons/svg/187/187136.svg',
      value: 'Neutral',
    },
    {
      icon: 'https://image.flaticon.com/icons/svg/187/187133.svg',
      value: 'Satisfied',
    },
  ];

  selectedIndex = 2;

  submitted = false;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 43');
  }
}
