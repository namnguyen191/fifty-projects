import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Cup {
  filled: boolean;
}

@Component({
  selector: 'app-day-sixteen',
  templateUrl: './day-sixteen.component.html',
  styleUrls: ['./day-sixteen.component.scss'],
})
export class DaySixteenComponent implements OnInit {
  cups: Cup[] = [
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
  ];

  goal = 2;

  constructor(private readonly titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 16');
  }

  calculateRemain() {
    const remain =
      this.goal - this.cups.filter((cup) => cup.filled).length * 0.25;
    return remain;
  }

  calculatePercentage() {
    const percentage =
      ((this.cups.filter((cup) => cup.filled).length * 0.25) / this.goal) * 100;

    return percentage;
  }

  highlightCups(cupIndex: number) {
    if (!this.cups[cupIndex].filled) {
      for (let i = 0; i <= cupIndex; i++) {
        this.cups[i].filled = true;
      }
    } else {
      for (let i = this.cups.length - 1; i >= cupIndex; i--) {
        this.cups[i].filled = false;
      }
    }
  }
}
