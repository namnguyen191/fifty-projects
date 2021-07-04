import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFourtyFourRoutingModule } from './day-fourty-four-routing.module';
import { DayFourtyFourComponent } from './day-fourty-four.component';


@NgModule({
  declarations: [
    DayFourtyFourComponent
  ],
  imports: [
    CommonModule,
    DayFourtyFourRoutingModule
  ]
})
export class DayFourtyFourModule { }
