import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaySeventeenRoutingModule } from './day-seventeen-routing.module';
import { DaySeventeenComponent } from './day-seventeen.component';


@NgModule({
  declarations: [
    DaySeventeenComponent
  ],
  imports: [
    CommonModule,
    DaySeventeenRoutingModule
  ]
})
export class DaySeventeenModule { }
