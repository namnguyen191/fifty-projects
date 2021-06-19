import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-thirty',
  templateUrl: './day-thirty.component.html',
  styleUrls: ['./day-thirty.component.scss'],
})
export class DayThirtyComponent implements OnInit, AfterViewInit {
  @ViewChild('text') textEleRef?: ElementRef<HTMLHeadingElement>;

  text = 'We love programming!';
  index = 1;
  speedLevel = 1;

  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 30');
  }

  ngAfterViewInit(): void {
    this.writeText();
  }

  writeText() {
    const textEle = this.textEleRef?.nativeElement;

    this.renderer.setProperty(
      textEle,
      'innerText',
      this.text.slice(0, this.index)
    );

    this.index++;

    if (this.index > this.text.length) {
      this.index = 1;
    }

    setTimeout(() => {
      this.writeText();
    }, 1000 / this.speedLevel);
  }
}
