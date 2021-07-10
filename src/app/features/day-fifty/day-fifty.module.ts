import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFiftyRoutingModule } from './day-fifty-routing.module';
import { DayFiftyComponent } from './day-fifty.component';


@NgModule({
  declarations: [
    DayFiftyComponent
  ],
  imports: [
    CommonModule,
    DayFiftyRoutingModule
  ]
})
export class DayFiftyModule { }
