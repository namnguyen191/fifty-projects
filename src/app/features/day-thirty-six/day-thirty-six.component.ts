import { state, style, trigger } from '@angular/animations';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-thirty-six',
  templateUrl: './day-thirty-six.component.html',
  styleUrls: ['./day-thirty-six.component.scss'],
})
export class DayThirtySixComponent implements OnInit {
  readonly DEFAULT_COLOR = '#aaa';
  readonly NUM_OF_SQUARES = 546;

  squaresNum: string[] = new Array(this.NUM_OF_SQUARES).fill(
    this.DEFAULT_COLOR
  );

  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 36');
  }

  changeColor(event: MouseEvent) {
    const square: HTMLDivElement = event.target as HTMLDivElement;

    var randomColor: string =
      '#' + Math.floor(Math.random() * 16777215).toString(16);

    this.renderer.setStyle(square, 'background-color', randomColor);
  }

  returnToOriginalColor(event: MouseEvent) {
    const square: HTMLDivElement = event.target as HTMLDivElement;

    setTimeout(() => {
      this.renderer.setStyle(square, 'background-color', this.DEFAULT_COLOR);
    }, 1000);
  }
}
