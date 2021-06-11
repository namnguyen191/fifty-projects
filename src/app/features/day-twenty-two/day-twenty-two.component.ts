import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-day-twenty-two',
  templateUrl: './day-twenty-two.component.html',
  styleUrls: ['./day-twenty-two.component.scss'],
})
export class DayTwentyTwoComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') cvs?: ElementRef<HTMLCanvasElement>;
  ctx?: CanvasRenderingContext2D;
  size: number = 20;
  color: string = '#ff0000';
  isPressed: boolean = false;
  x?: number;
  y?: number;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Fifty Projects - Day 22');
  }

  ngAfterViewInit(): void {
    this.ctx = this.cvs?.nativeElement.getContext('2d') ?? undefined;
  }

  onMouseUp() {
    this.isPressed = false;
    this.x = undefined;
    this.y = undefined;
  }

  onMouseDown(e: MouseEvent) {
    this.isPressed = true;
    this.x = e.offsetX;
    this.y = e.offsetY;
  }

  onMouseMove(e: MouseEvent) {
    const canvas = e.target as HTMLCanvasElement;

    if (this.isPressed) {
      const x2 = e.offsetX;
      const y2 = e.offsetY;

      this.drawCircle(x2, y2);
      this.drawLine(this.x ?? 0, this.y ?? 0, x2, y2);

      this.x = x2;
      this.y = y2;
    }
  }

  onChangeColor(e: Event) {
    const picker = e.target as HTMLInputElement;

    this.color = picker.value;
  }

  clearCanvas() {
    if (this.cvs) {
      this.ctx?.clearRect(
        0,
        0,
        this.cvs.nativeElement.width,
        this.cvs.nativeElement.height
      );
    }
  }

  drawCircle(x: number, y: number) {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.arc(x, y, this.size, 0, Math.PI * 2);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    } else {
      console.log('Error');
    }
  }

  drawLine(x1: number, y1: number, x2: number, y2: number) {
    if (this.ctx) {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = this.size * 2;
      this.ctx.stroke();
    } else {
      console.log('Error');
    }
  }
}
