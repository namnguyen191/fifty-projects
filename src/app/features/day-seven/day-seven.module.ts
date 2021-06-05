import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaySevenRoutingModule } from './day-seven-routing.module';
import { DaySevenComponent } from './day-seven.component';


@NgModule({
  declarations: [
    DaySevenComponent
  ],
  imports: [
    CommonModule,
    DaySevenRoutingModule
  ]
})
export class DaySevenModule { }
