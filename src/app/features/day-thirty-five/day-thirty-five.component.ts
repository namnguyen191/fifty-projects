import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-thirty-five',
  templateUrl: './day-thirty-five.component.html',
  styleUrls: ['./day-thirty-five.component.scss'],
})
export class DayThirtyFiveComponent implements OnInit, AfterViewInit {
  @ViewChild('gallery') galleryRef?: ElementRef<HTMLDivElement>;

  images = [
    {
      url: 'https://images.unsplash.com/photo-1599560324079-af5f94f2c37e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
      alt: 'Image 1',
      state: 'void',
    },
    {
      url: 'https://images.unsplash.com/photo-1576643389950-64434aa6c7db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80',
      alt: 'Image 2',
      state: 'void',
    },
    {
      url: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      alt: 'Image 3',
      state: 'void',
    },
    {
      url: 'https://images.unsplash.com/photo-1432889490240-84df33d47091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
      alt: 'Image 4',
      state: 'void',
    },
  ];

  currentIndex = 0;

  inv: any;

  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 35');
  }

  ngAfterViewInit(): void {
    this.inv = setInterval(() => {
      this.changeSlide('next', false);
    }, 2000);
  }

  changeSlide(direction: 'next' | 'prev', resetInterval: Boolean = true) {
    if (direction === 'next') {
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
    } else {
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.images.length - 1;
      }
    }

    if (resetInterval) {
      clearInterval(this.inv);
      this.inv = setInterval(() => {
        this.changeSlide('next');
      }, 2000);
    }
  }
}
