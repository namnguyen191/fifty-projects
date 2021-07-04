import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFourtyFiveRoutingModule } from './day-fourty-five-routing.module';
import { DayFourtyFiveComponent } from './day-fourty-five.component';


@NgModule({
  declarations: [
    DayFourtyFiveComponent
  ],
  imports: [
    CommonModule,
    DayFourtyFiveRoutingModule
  ]
})
export class DayFourtyFiveModule { }
