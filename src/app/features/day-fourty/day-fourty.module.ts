import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFourtyRoutingModule } from './day-fourty-routing.module';
import { DayFourtyComponent } from './day-fourty.component';


@NgModule({
  declarations: [
    DayFourtyComponent
  ],
  imports: [
    CommonModule,
    DayFourtyRoutingModule
  ]
})
export class DayFourtyModule { }
