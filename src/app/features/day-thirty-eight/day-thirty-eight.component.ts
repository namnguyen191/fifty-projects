import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-thirty-eight',
  templateUrl: './day-thirty-eight.component.html',
  styleUrls: ['./day-thirty-eight.component.scss'],
})
export class DayThirtyEightComponent implements OnInit {
  activeItem: 'home' | 'blog' | 'about' | 'work' = 'home';

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 38');
  }
}
