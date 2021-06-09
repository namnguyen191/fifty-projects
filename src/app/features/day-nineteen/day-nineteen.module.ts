import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayNineteenRoutingModule } from './day-nineteen-routing.module';
import { DayNineteenComponent } from './day-nineteen.component';


@NgModule({
  declarations: [
    DayNineteenComponent
  ],
  imports: [
    CommonModule,
    DayNineteenRoutingModule
  ]
})
export class DayNineteenModule { }
