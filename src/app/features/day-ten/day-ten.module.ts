import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTenRoutingModule } from './day-ten-routing.module';
import { DayTenComponent } from './day-ten.component';

@NgModule({
  declarations: [DayTenComponent],
  imports: [CommonModule, DayTenRoutingModule],
})
export class DayTenModule {}
