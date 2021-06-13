import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTwentyFourRoutingModule } from './day-twenty-four-routing.module';
import { DayTwentyFourComponent } from './day-twenty-four.component';


@NgModule({
  declarations: [
    DayTwentyFourComponent
  ],
  imports: [
    CommonModule,
    DayTwentyFourRoutingModule
  ]
})
export class DayTwentyFourModule { }
