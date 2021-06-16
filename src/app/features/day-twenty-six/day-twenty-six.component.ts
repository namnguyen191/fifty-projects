import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-twenty-six',
  templateUrl: './day-twenty-six.component.html',
  styleUrls: ['./day-twenty-six.component.scss'],
})
export class DayTwentySixComponent implements OnInit, AfterViewInit {
  menuItem: {
    headLine: string;
    text: string;
    themeColor: string;
    imgUrl: string;
  }[] = [
    {
      headLine: 'Nature flower',
      text: 'all in pink',
      themeColor: '#fd3555',
      imgUrl:
        'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=da4ca7a78004349f1b63f257e50e4360&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80',
    },
    {
      headLine: 'Bluuue Sky',
      text: "with it's mountains",
      themeColor: '#2a86ba',
      imgUrl:
        'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
    },
    {
      headLine: 'Lonely castle',
      text: 'in the wilderness',
      themeColor: '#252e33',
      imgUrl:
        'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=90ed8055f06493290dad8da9584a13f7&amp;auto=format&amp;fit=crop&amp;w=715&amp;q=80',
    },
    {
      headLine: 'Flying eagle',
      text: 'in the sunset',
      themeColor: '#ffb866',
      imgUrl:
        'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=e27f6661df21ed17ab5355b28af8df4e&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80',
    },
  ];

  activeSlideIndex = 0;

  interval: any;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 26');
  }

  ngAfterViewInit(): void {
    this.interval = setInterval(() => {
      this.changeSlide('auto');
    }, 5000);
  }

  changeSlide(direc: 'up' | 'down' | 'auto') {
    if (direc !== 'auto') {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.changeSlide('up');
      }, 5000);
    }

    if (direc === 'up') {
      this.activeSlideIndex++;
      if (this.activeSlideIndex > this.menuItem.length - 1) {
        this.activeSlideIndex = 0;
      }
    } else {
      this.activeSlideIndex--;
      if (this.activeSlideIndex < 0) {
        this.activeSlideIndex = this.menuItem.length - 1;
      }
    }
  }
}
