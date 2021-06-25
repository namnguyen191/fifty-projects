import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayThirtySixRoutingModule } from './day-thirty-six-routing.module';
import { DayThirtySixComponent } from './day-thirty-six.component';


@NgModule({
  declarations: [
    DayThirtySixComponent
  ],
  imports: [
    CommonModule,
    DayThirtySixRoutingModule
  ]
})
export class DayThirtySixModule { }
