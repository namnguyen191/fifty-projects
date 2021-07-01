import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFourtyTwoRoutingModule } from './day-fourty-two-routing.module';
import { DayFourtyTwoComponent } from './day-fourty-two.component';


@NgModule({
  declarations: [
    DayFourtyTwoComponent
  ],
  imports: [
    CommonModule,
    DayFourtyTwoRoutingModule
  ]
})
export class DayFourtyTwoModule { }
