import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-fourty-one',
  templateUrl: './day-fourty-one.component.html',
  styleUrls: ['./day-fourty-one.component.scss'],
})
export class DayFourtyOneComponent implements OnInit {
  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 41');
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (parseInt(event.key) >= 0 && parseInt(event.key)) {
      setTimeout(() => {
        const nextInput = document.getElementById('code-' + ++index);
        nextInput?.focus();
      }, 10);
    } else if (event.key === 'Backspace') {
      setTimeout(() => {
        const nextInput = document.getElementById('code-' + --index);
        console.log(nextInput);
        nextInput?.focus();
      }, 10);
    }
  }
}
