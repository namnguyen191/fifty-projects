import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

export type HoldState = 'hold' | 'leave';

@Directive({
  selector: '[appHoldable]',
})
export class HoldableDirective {
  @Output() holdTime: EventEmitter<number> = new EventEmitter();
  @Output() holdState: EventEmitter<HoldState> = new EventEmitter();
  /**
   * Provide the interval precision that you want to track (in ms). Default value is 100
   */
  @Input() appHoldableTimingPrecision: number = 100;

  holdStateSubject: Subject<HoldState> = new Subject();
  leaveStateSubject$: Observable<boolean> = this.holdStateSubject
    .asObservable()
    .pipe(
      filter((s) => s === 'leave'),
      map(() => true)
    );

  constructor() {}

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onRelease() {
    this.holdStateSubject.next('leave');
    this.holdState.emit('leave');
  }

  @HostListener('mousedown')
  onHold() {
    this.holdStateSubject.next('hold');
    this.holdState.emit('hold');

    interval(this.appHoldableTimingPrecision)
      .pipe(
        takeUntil(this.leaveStateSubject$),
        tap((n) =>
          this.holdTime.emit((n + 1) * this.appHoldableTimingPrecision)
        )
      )
      .subscribe();
  }
}
