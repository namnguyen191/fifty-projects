import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayThirtyFiveRoutingModule } from './day-thirty-five-routing.module';
import { DayThirtyFiveComponent } from './day-thirty-five.component';


@NgModule({
  declarations: [
    DayThirtyFiveComponent
  ],
  imports: [
    CommonModule,
    DayThirtyFiveRoutingModule
  ]
})
export class DayThirtyFiveModule { }
