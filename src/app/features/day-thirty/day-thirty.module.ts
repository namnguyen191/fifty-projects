import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayThirtyRoutingModule } from './day-thirty-routing.module';
import { DayThirtyComponent } from './day-thirty.component';


@NgModule({
  declarations: [
    DayThirtyComponent
  ],
  imports: [
    CommonModule,
    DayThirtyRoutingModule
  ]
})
export class DayThirtyModule { }
