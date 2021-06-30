import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFourtyOneRoutingModule } from './day-fourty-one-routing.module';
import { DayFourtyOneComponent } from './day-fourty-one.component';


@NgModule({
  declarations: [
    DayFourtyOneComponent
  ],
  imports: [
    CommonModule,
    DayFourtyOneRoutingModule
  ]
})
export class DayFourtyOneModule { }
