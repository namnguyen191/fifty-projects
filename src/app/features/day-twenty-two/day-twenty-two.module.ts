import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTwentyTwoRoutingModule } from './day-twenty-two-routing.module';
import { DayTwentyTwoComponent } from './day-twenty-two.component';


@NgModule({
  declarations: [
    DayTwentyTwoComponent
  ],
  imports: [
    CommonModule,
    DayTwentyTwoRoutingModule
  ]
})
export class DayTwentyTwoModule { }
