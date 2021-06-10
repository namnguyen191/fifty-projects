import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTwentyRoutingModule } from './day-twenty-routing.module';
import { DayTwentyComponent } from './day-twenty.component';


@NgModule({
  declarations: [
    DayTwentyComponent
  ],
  imports: [
    CommonModule,
    DayTwentyRoutingModule
  ]
})
export class DayTwentyModule { }
