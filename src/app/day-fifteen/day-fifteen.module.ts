import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFifteenRoutingModule } from './day-fifteen-routing.module';
import { DayFifteenComponent } from './day-fifteen.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DayFifteenComponent],
  imports: [CommonModule, SharedModule, DayFifteenRoutingModule],
})
export class DayFifteenModule {}
