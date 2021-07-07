import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-day-fourty-seven',
  templateUrl: './day-fourty-seven.component.html',
  styleUrls: ['./day-fourty-seven.component.scss'],
})
export class DayFourtySevenComponent implements OnInit, AfterViewInit {
  testimonials: Testimonial[] = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti praesentium vitae explicabo excepturi cupiditate eaque pariatur sit ab! Veniam culpa pariatur saepe laudantium amet qui expedita, impedit quibusdam. Pariatur ipsa voluptate neque animi quo nihil rem vel repellat quas, culpa facere laudantium, qui iusto consectetur ratione labore, aperiam maiores esse?',
      name: 'John Doe',
      role: 'CEO',
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis maiores itaque illum dolorem quos nesciunt blanditiis corrupti praesentium numquam ea tenetur, commodi nulla dolore. Nam laborum ratione, cupiditate ad minus culpa perferendis vitae aperiam voluptas perspiciatis fugiat, neque magni iste. Amet asperiores quia qui quis illo ut quos est nam.',
      name: 'Jane Holy',
      role: 'CFO',
    },
    {
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor accusamus sunt enim minima reiciendis incidunt et? Magni ipsam eligendi necessitatibus eaque alias amet tenetur. Est esse corrupti tempore! Accusamus, est quos. Sit explicabo quo maxime! Accusantium assumenda ipsa, id sit quia rem dolores fuga minus debitis. Corrupti itaque illum eos!',
      name: 'Bat Man',
      role: 'Rich',
    },
  ];

  currentIndex = 0;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 47');
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      if (this.currentIndex === this.testimonials.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }, 10000);
  }
}
