import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTwentyNineRoutingModule } from './day-twenty-nine-routing.module';
import { DayTwentyNineComponent } from './day-twenty-nine.component';


@NgModule({
  declarations: [
    DayTwentyNineComponent
  ],
  imports: [
    CommonModule,
    DayTwentyNineRoutingModule
  ]
})
export class DayTwentyNineModule { }
