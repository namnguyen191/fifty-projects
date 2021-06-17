import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayTwentySevenRoutingModule } from './day-twenty-seven-routing.module';
import { DayTwentySevenComponent } from './day-twenty-seven.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DayTwentySevenComponent],
  imports: [CommonModule, DayTwentySevenRoutingModule, SharedModule],
})
export class DayTwentySevenModule {}
