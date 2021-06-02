import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface FAQ {
  title: string;
  text: string;
  active: boolean;
}

@Component({
  selector: 'app-day-twelve',
  templateUrl: './day-twelve.component.html',
  styleUrls: ['./day-twelve.component.scss'],
})
export class DayTwelveComponent implements OnInit {
  faqArrays: FAQ[] = [
    {
      title: 'What do you call someone with no body and no nose?',
      text: 'Nobody knows',
      active: false,
    },
    {
      title: "What's the object-oriented way to become wealthy",
      text: 'Inheritance',
      active: false,
    },
    {
      title: 'How many tickles does it take to tickle an octopus?',
      text: 'Ten tickles',
      active: false,
    },
    {
      title: 'What is 1 + 1?',
      text: 'Depends on who you are asking',
      active: false,
    },
    {
      title:
        'We put "smoking kills" labels on cigarret products, should we do the same with acohol?',
      text: 'Why put "smoking kills" labels on alcohol?',
      active: false,
    },
  ];

  constructor(private readonly titleSerivce: Title) {}

  ngOnInit(): void {
    this.titleSerivce.setTitle('Fifty Projects - Day 12');
  }
}
