import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayEightRoutingModule } from './day-eight-routing.module';
import { DayEightComponent } from './day-eight.component';


@NgModule({
  declarations: [
    DayEightComponent
  ],
  imports: [
    CommonModule,
    DayEightRoutingModule
  ]
})
export class DayEightModule { }
