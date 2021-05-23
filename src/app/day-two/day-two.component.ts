import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.scss'],
})
export class DayTwoComponent implements OnInit {
  circles: string[] = ['1', '2', '3', '4'];
  activeCircles: string[] = ['1'];

  constructor(private readonly titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day Two');
  }

  nextClick(circle: string) {
    this.activeCircles.push(circle);
  }

  onPrevClick() {
    this.activeCircles.pop();
  }
}
