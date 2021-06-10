import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-twenty-one',
  templateUrl: './day-twenty-one.component.html',
  styleUrls: ['./day-twenty-one.component.scss'],
})
export class DayTwentyOneComponent implements OnInit {
  boxes: { active: boolean; hover: boolean; hold: boolean }[] = [
    { active: true, hover: false, hold: false },
    { active: false, hover: false, hold: false },
    { active: false, hover: false, hold: false },
    { active: false, hover: false, hold: false },
    { active: false, hover: false, hold: false },
  ];

  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 21');
  }

  dragStart(e: Event, i: number) {
    this.boxes[i].hold = true;

    const div = e.target as HTMLDivElement;

    // Prevent the element from going invisible immidiately after click
    setTimeout(() => {
      this.renderer.addClass(div, 'invisible');
    }, 0);
  }

  dragEnd(e: Event, i: number) {
    const div = e.target as HTMLDivElement;
    this.renderer.removeClass(div, 'invisible');
    this.boxes[i].active = false;
  }

  dragOver(e: Event) {
    e.preventDefault();
  }

  dragEnter(e: Event, i: number) {
    e.preventDefault();

    this.boxes[i].hover = true;
  }

  dragLeave(e: Event, i: number) {
    this.boxes[i].hover = false;
  }

  dragDrop(e: Event, i: number) {
    this.boxes[i].active = true;
    this.boxes[i].hover = false;
  }
}
