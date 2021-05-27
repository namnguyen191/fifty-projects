import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-six',
  templateUrl: './day-six.component.html',
  styleUrls: ['./day-six.component.scss'],
})
export class DaySixComponent implements OnInit {
  constructor(
    private readonly titleService: Title,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 6');
  }

  @HostListener('window:scroll', ['$event'])
  windowScrolled($event: Event) {
    this.checkBoxes();
  }

  private checkBoxes() {
    const triggerBottom = window.innerHeight * 0.8;

    const boxes: HTMLDivElement[] = Array.from(
      this.document.querySelectorAll('.box')
    );

    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    });
  }
}
