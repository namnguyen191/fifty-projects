import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayNineRoutingModule } from './day-nine-routing.module';
import { DayNineComponent } from './day-nine.component';


@NgModule({
  declarations: [
    DayNineComponent
  ],
  imports: [
    CommonModule,
    DayNineRoutingModule
  ]
})
export class DayNineModule { }
