import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaySixRoutingModule } from './day-six-routing.module';
import { DaySixComponent } from './day-six.component';


@NgModule({
  declarations: [
    DaySixComponent
  ],
  imports: [
    CommonModule,
    DaySixRoutingModule
  ]
})
export class DaySixModule { }
