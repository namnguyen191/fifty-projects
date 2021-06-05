import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFourteenRoutingModule } from './day-fourteen-routing.module';
import { DayFourteenComponent } from './day-fourteen.component';


@NgModule({
  declarations: [
    DayFourteenComponent
  ],
  imports: [
    CommonModule,
    DayFourteenRoutingModule
  ]
})
export class DayFourteenModule { }
