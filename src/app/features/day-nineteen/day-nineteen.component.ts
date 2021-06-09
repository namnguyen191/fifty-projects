import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-day-nineteen',
  templateUrl: './day-nineteen.component.html',
  styleUrls: ['./day-nineteen.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DayNineteenComponent implements OnInit, AfterViewInit {
  @ViewChild('needleHour') needleHour: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('needleMinute') needleMinute:
    | ElementRef<HTMLDivElement>
    | undefined;
  @ViewChild('needleSecond') needleSecond:
    | ElementRef<HTMLDivElement>
    | undefined;

  mode: 'light' | 'dark' = 'light';

  today: Date;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.today = new Date();
  }

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 19');
  }

  ngAfterViewInit(): void {
    interval(1000)
      .pipe(
        tap(() => {
          this.today = new Date();
          this.renderer.setStyle(
            this.needleHour?.nativeElement,
            'transform',
            `translate(-50%, -100%) rotate(${this.calculateNeedleDeg(
              'hour',
              this.today
            )}deg)`
          );
          this.renderer.setStyle(
            this.needleMinute?.nativeElement,
            'transform',
            `translate(-50%, -100%) rotate(${this.calculateNeedleDeg(
              'minute',
              this.today
            )}deg)`
          );
          this.renderer.setStyle(
            this.needleSecond?.nativeElement,
            'transform',
            `translate(-50%, -100%) rotate(${this.calculateNeedleDeg(
              'second',
              this.today
            )}deg)`
          );
        })
      )
      .subscribe();
  }

  calculateNeedleDeg(type: 'hour' | 'minute' | 'second', date: Date) {
    let deg = 0;
    const degForEachHour = 360 / 12;
    const degForEachMinute = 360 / 60;
    const degForEachSecond = 360 / 60;
    if (type === 'hour') {
      deg = date.getHours() * degForEachHour;
      deg += (date.getMinutes() * degForEachHour) / 60;
      return deg;
    }
    if (type === 'minute') {
      deg = date.getMinutes() * degForEachMinute;
      deg += (date.getSeconds() * degForEachMinute) / 60;
      return deg;
    }
    if (type === 'second') {
      deg = date.getSeconds() * degForEachSecond;
      return deg;
    }

    return -1;
  }

  changeMode() {
    if (this.mode === 'light') {
      this.mode = 'dark';
    } else {
      this.mode = 'light';
    }
  }
}
