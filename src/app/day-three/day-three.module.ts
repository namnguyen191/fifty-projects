import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayThreeRoutingModule } from './day-three-routing.module';
import { DayThreeComponent } from './day-three.component';


@NgModule({
  declarations: [
    DayThreeComponent
  ],
  imports: [
    CommonModule,
    DayThreeRoutingModule
  ]
})
export class DayThreeModule { }
