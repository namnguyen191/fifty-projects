import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTwentyFiveRoutingModule } from './day-twenty-five-routing.module';
import { DayTwentyFiveComponent } from './day-twenty-five.component';


@NgModule({
  declarations: [
    DayTwentyFiveComponent
  ],
  imports: [
    CommonModule,
    DayTwentyFiveRoutingModule
  ]
})
export class DayTwentyFiveModule { }
