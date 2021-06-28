import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayThirtyNineRoutingModule } from './day-thirty-nine-routing.module';
import { DayThirtyNineComponent } from './day-thirty-nine.component';


@NgModule({
  declarations: [
    DayThirtyNineComponent
  ],
  imports: [
    CommonModule,
    DayThirtyNineRoutingModule
  ]
})
export class DayThirtyNineModule { }
