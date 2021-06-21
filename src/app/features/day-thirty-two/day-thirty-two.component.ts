import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-thirty-two',
  templateUrl: './day-thirty-two.component.html',
  styleUrls: ['./day-thirty-two.component.scss'],
})
export class DayThirtyTwoComponent implements OnInit {
  @ViewChild('good') goodRef?: ElementRef<HTMLInputElement>;
  @ViewChild('cheap') cheapRef?: ElementRef<HTMLInputElement>;
  @ViewChild('fast') fastRef?: ElementRef<HTMLInputElement>;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 32');
  }

  onToggle(event: Event) {
    const toggleButton = event.target as HTMLInputElement;

    if (
      this.goodRef?.nativeElement.checked &&
      this.cheapRef?.nativeElement.checked &&
      this.fastRef?.nativeElement.checked
    ) {
      if (toggleButton === this.goodRef?.nativeElement) {
        this.fastRef.nativeElement.checked = false;
      }
      if (toggleButton === this.cheapRef?.nativeElement) {
        this.goodRef.nativeElement.checked = false;
      }
      if (toggleButton === this.fastRef?.nativeElement) {
        this.cheapRef.nativeElement.checked = false;
      }
    }
  }
}
