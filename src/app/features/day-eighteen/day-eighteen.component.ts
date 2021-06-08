import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-eighteen',
  templateUrl: './day-eighteen.component.html',
  styleUrls: ['./day-eighteen.component.scss'],
})
export class DayEighteenComponent implements OnInit {
  backgrounds = [
    'https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg',
    'https://wallpapercave.com/wp/ixmt8JQ.jpg',
    'https://wallpaperaccess.com/full/1120034.jpg',
    'https://cdn.wallpapersafari.com/28/73/TcRMwS.jpg',
    'https://wallpapercave.com/wp/wp2904877.jpg',
  ];

  activeIndex = 0;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 18');
  }

  changeSlide(direction: 'left' | 'right') {
    if (direction === 'left') {
      this.activeIndex = this.activeIndex - 1 < 0 ? 0 : this.activeIndex - 1;
    } else {
      this.activeIndex =
        this.activeIndex + 1 >= this.backgrounds.length
          ? this.backgrounds.length - 1
          : this.activeIndex + 1;
    }
  }
}
