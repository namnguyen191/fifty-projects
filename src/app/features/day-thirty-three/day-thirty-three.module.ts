import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayThirtyThreeRoutingModule } from './day-thirty-three-routing.module';
import { DayThirtyThreeComponent } from './day-thirty-three.component';


@NgModule({
  declarations: [
    DayThirtyThreeComponent
  ],
  imports: [
    CommonModule,
    DayThirtyThreeRoutingModule
  ]
})
export class DayThirtyThreeModule { }
