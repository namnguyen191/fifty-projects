import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayThirtyOneRoutingModule } from './day-thirty-one-routing.module';
import { DayThirtyOneComponent } from './day-thirty-one.component';


@NgModule({
  declarations: [
    DayThirtyOneComponent
  ],
  imports: [
    CommonModule,
    DayThirtyOneRoutingModule
  ]
})
export class DayThirtyOneModule { }
