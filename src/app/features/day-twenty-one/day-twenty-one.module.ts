import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTwentyOneRoutingModule } from './day-twenty-one-routing.module';
import { DayTwentyOneComponent } from './day-twenty-one.component';


@NgModule({
  declarations: [
    DayTwentyOneComponent
  ],
  imports: [
    CommonModule,
    DayTwentyOneRoutingModule
  ]
})
export class DayTwentyOneModule { }
