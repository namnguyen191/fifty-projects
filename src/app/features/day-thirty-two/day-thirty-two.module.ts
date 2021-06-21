import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayThirtyTwoRoutingModule } from './day-thirty-two-routing.module';
import { DayThirtyTwoComponent } from './day-thirty-two.component';


@NgModule({
  declarations: [
    DayThirtyTwoComponent
  ],
  imports: [
    CommonModule,
    DayThirtyTwoRoutingModule
  ]
})
export class DayThirtyTwoModule { }
