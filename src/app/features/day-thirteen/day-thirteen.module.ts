import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayThirteenRoutingModule } from './day-thirteen-routing.module';
import { DayThirteenComponent } from './day-thirteen.component';


@NgModule({
  declarations: [
    DayThirteenComponent
  ],
  imports: [
    CommonModule,
    DayThirteenRoutingModule
  ]
})
export class DayThirteenModule { }
