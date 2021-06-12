import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTwentyThreeRoutingModule } from './day-twenty-three-routing.module';
import { DayTwentyThreeComponent } from './day-twenty-three.component';


@NgModule({
  declarations: [
    DayTwentyThreeComponent
  ],
  imports: [
    CommonModule,
    DayTwentyThreeRoutingModule
  ]
})
export class DayTwentyThreeModule { }
