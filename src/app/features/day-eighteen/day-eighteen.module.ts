import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayEighteenRoutingModule } from './day-eighteen-routing.module';
import { DayEighteenComponent } from './day-eighteen.component';


@NgModule({
  declarations: [
    DayEighteenComponent
  ],
  imports: [
    CommonModule,
    DayEighteenRoutingModule
  ]
})
export class DayEighteenModule { }
