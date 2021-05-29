import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-eight',
  templateUrl: './day-eight.component.html',
  styleUrls: ['./day-eight.component.scss'],
})
export class DayEightComponent implements OnInit {
  emailString = 'Email';
  passwordString = 'Password';

  constructor(private readonly titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 8');
  }
}
