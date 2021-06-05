import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.scss'],
})
export class DayOneComponent implements OnInit, AfterViewInit {
  constructor(
    private readonly elem: ElementRef<HTMLDivElement>,
    private readonly titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day One');
  }

  ngAfterViewInit(): void {
    const panels = this.elem.nativeElement.querySelectorAll('.panel');

    panels.forEach((panel) => {
      panel.addEventListener('click', () => this.toggleActive(panel));
    });
  }

  private toggleActive(clickedPanel: Element) {
    const panels = this.elem.nativeElement.querySelectorAll('.panel');
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });

    clickedPanel.classList.toggle('active');
  }
}
