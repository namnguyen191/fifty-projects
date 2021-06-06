import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaySixteenRoutingModule } from './day-sixteen-routing.module';
import { DaySixteenComponent } from './day-sixteen.component';


@NgModule({
  declarations: [
    DaySixteenComponent
  ],
  imports: [
    CommonModule,
    DaySixteenRoutingModule
  ]
})
export class DaySixteenModule { }
