import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.scss'],
})
export class DayOneComponent implements OnInit, AfterViewInit {
  constructor(private elem: ElementRef<HTMLDivElement>) {}

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

  ngOnInit(): void {}
}
