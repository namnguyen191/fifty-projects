import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-twenty-four',
  templateUrl: './day-twenty-four.component.html',
  styleUrls: ['./day-twenty-four.component.scss'],
})
export class DayTwentyFourComponent implements OnInit, AfterViewInit {
  imgSrc?: string;
  cardTitle?: string;
  cardExcerpt?: string;
  authorImgSrc?: string;
  authorName?: string;
  date?: string;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 24');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.imgSrc =
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80';
      this.cardTitle = 'Lorem ipsum dolor sit amet.';
      this.cardExcerpt =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, reiciendis?';
      this.authorImgSrc = 'https://randomuser.me/api/portraits/men/45.jpg';
      this.authorName = 'John Doe';
      this.date = 'Oct 08, 2020';
    }, 5000);
  }
}
