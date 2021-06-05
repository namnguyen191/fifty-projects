import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-four',
  templateUrl: './day-four.component.html',
  styleUrls: ['./day-four.component.scss'],
})
export class DayFourComponent implements OnInit {
  searchActive: boolean = false;

  constructor(private readonly titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects -  Day Four');
  }
}
