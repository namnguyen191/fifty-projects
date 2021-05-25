import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFourRoutingModule } from './day-four-routing.module';
import { DayFourComponent } from './day-four.component';


@NgModule({
  declarations: [
    DayFourComponent
  ],
  imports: [
    CommonModule,
    DayFourRoutingModule
  ]
})
export class DayFourModule { }
