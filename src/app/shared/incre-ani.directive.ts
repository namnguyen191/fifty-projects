import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { interval } from 'rxjs';
import { finalize, takeWhile, tap } from 'rxjs/operators';

@Directive({
  selector: '[appIncreAni]',
})
export class IncreAniDirective implements OnInit {
  constructor(
    private el: ElementRef<HTMLDivElement>,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    const targetValue = parseInt(this.el.nativeElement.innerHTML);
    const duration = 5000; // 5s
    const inter = 50; // .2s
    const increVal = Math.floor((targetValue / duration) * inter);

    let currentValue = 0;
    interval(inter)
      .pipe(
        takeWhile(() => currentValue < targetValue),
        tap(() => {
          console.log(currentValue);

          currentValue += increVal;
          this.renderer.setProperty(
            this.el.nativeElement,
            'innerHTML',
            currentValue.toString()
          );
          // this.el.nativeElement.innerHTML = currentValue.toString();
        }),
        finalize(() => {
          this.renderer.setProperty(
            this.el.nativeElement,
            'innerHTML',
            targetValue.toString()
          );
          // this.el.nativeElement.innerHTML = targetValue.toString();
        })
      )
      .subscribe();
  }
}
