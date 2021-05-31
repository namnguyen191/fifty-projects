import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayElevenRoutingModule } from './day-eleven-routing.module';
import { DayElevenComponent } from './day-eleven.component';


@NgModule({
  declarations: [
    DayElevenComponent
  ],
  imports: [
    CommonModule,
    DayElevenRoutingModule
  ]
})
export class DayElevenModule { }
