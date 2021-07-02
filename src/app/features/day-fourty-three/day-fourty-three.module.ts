import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFourtyThreeRoutingModule } from './day-fourty-three-routing.module';
import { DayFourtyThreeComponent } from './day-fourty-three.component';


@NgModule({
  declarations: [
    DayFourtyThreeComponent
  ],
  imports: [
    CommonModule,
    DayFourtyThreeRoutingModule
  ]
})
export class DayFourtyThreeModule { }
