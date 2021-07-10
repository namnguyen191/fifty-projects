import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFourtyNineRoutingModule } from './day-fourty-nine-routing.module';
import { DayFourtyNineComponent } from './day-fourty-nine.component';


@NgModule({
  declarations: [
    DayFourtyNineComponent
  ],
  imports: [
    CommonModule,
    DayFourtyNineRoutingModule
  ]
})
export class DayFourtyNineModule { }
