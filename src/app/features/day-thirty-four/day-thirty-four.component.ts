import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-thirty-four',
  templateUrl: './day-thirty-four.component.html',
  styleUrls: ['./day-thirty-four.component.scss'],
})
export class DayThirtyFourComponent implements OnInit {
  nums: number[] = [4, 3, 2, 1, 0];
  activeInIndex: number = 0;
  activeOutIndex: number = -1;

  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 34');
  }

  runAnimation(event: AnimationEvent) {
    if (event.animationName === 'goIn') {
      this.activeOutIndex++;
    }
    if (event.animationName === 'goOut') {
      this.activeInIndex++;
    }
  }

  reset() {
    this.activeInIndex = 0;
    this.activeOutIndex = -1;
  }
}
