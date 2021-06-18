import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-twenty-nine',
  templateUrl: './day-twenty-nine.component.html',
  styleUrls: ['./day-twenty-nine.component.scss'],
})
export class DayTwentyNineComponent implements OnInit {
  like: number = 0;

  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 29');
  }

  private clickTime: number = 0;
  showHeart(event: MouseEvent) {
    const divEle = event.target as HTMLDivElement;

    const currentTime = new Date().getTime();
    if (this.clickTime === 0) {
      this.clickTime = currentTime;
    } else {
      if (currentTime - this.clickTime < 800) {
        const heartIcon = this.renderer.createElement('i');
        this.renderer.addClass(heartIcon, 'fas');
        this.renderer.addClass(heartIcon, 'fa-heart');
        this.renderer.setStyle(heartIcon, 'top', event.offsetY + 'px');
        this.renderer.setStyle(heartIcon, 'left', event.offsetX + 'px');
        this.renderer.appendChild(divEle, heartIcon);
        this.like++;

        setTimeout(() => {
          this.renderer.removeChild(divEle, heartIcon);
        }, 600);

        this.clickTime = 0;
      } else {
        this.clickTime = 0;
      }
    }
  }
}
