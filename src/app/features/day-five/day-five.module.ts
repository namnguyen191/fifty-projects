import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFiveRoutingModule } from './day-five-routing.module';
import { DayFiveComponent } from './day-five.component';


@NgModule({
  declarations: [
    DayFiveComponent
  ],
  imports: [
    CommonModule,
    DayFiveRoutingModule
  ]
})
export class DayFiveModule { }
