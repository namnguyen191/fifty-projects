import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-twenty-five',
  templateUrl: './day-twenty-five.component.html',
  styleUrls: ['./day-twenty-five.component.scss'],
})
export class DayTwentyFiveComponent implements OnInit {
  @ViewChild('nav') navbar: ElementRef<HTMLDivElement> | undefined;

  @HostListener('window:scroll', ['$event'])
  onResize() {
    if (!this.navbar) {
      throw new Error('Something went wrong getting the navbar from template');
    }

    if (window.scrollY > this.navbar.nativeElement.offsetHeight + 150) {
      this.renderer.addClass(this.navbar.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.navbar.nativeElement, 'active');
    }
  }

  constructor(private titleService: Title, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 25');
  }
}
