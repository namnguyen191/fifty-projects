import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTwoRoutingModule } from './day-two-routing.module';
import { DayTwoComponent } from './day-two.component';


@NgModule({
  declarations: [
    DayTwoComponent
  ],
  imports: [
    CommonModule,
    DayTwoRoutingModule
  ]
})
export class DayTwoModule { }
