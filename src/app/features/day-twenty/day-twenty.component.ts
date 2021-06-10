import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-twenty',
  templateUrl: './day-twenty.component.html',
  styleUrls: ['./day-twenty.component.scss'],
})
export class DayTwentyComponent implements OnInit {
  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 20');
  }

  ripple(e: MouseEvent) {
    const clickedButton = e.target as HTMLButtonElement;

    const clickPosX = e.offsetX;
    const clickPosY = e.offsetY;

    const rippleSpan = this.renderer.createElement('span');
    this.renderer.addClass(rippleSpan, 'circle');
    this.renderer.setStyle(rippleSpan, 'top', `${clickPosY}px`);
    this.renderer.setStyle(rippleSpan, 'left', `${clickPosX}px`);

    this.renderer.appendChild(clickedButton, rippleSpan);

    // Remove all the appended span
    setTimeout(() => {
      this.renderer.removeChild(clickedButton, rippleSpan);
    }, 500);
  }
}
