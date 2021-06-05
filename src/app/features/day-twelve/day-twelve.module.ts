import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTwelveRoutingModule } from './day-twelve-routing.module';
import { DayTwelveComponent } from './day-twelve.component';


@NgModule({
  declarations: [
    DayTwelveComponent
  ],
  imports: [
    CommonModule,
    DayTwelveRoutingModule
  ]
})
export class DayTwelveModule { }
