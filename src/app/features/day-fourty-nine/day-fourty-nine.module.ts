import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayFourtyNineRoutingModule } from './day-fourty-nine-routing.module';
import { DayFourtyNineComponent } from './day-fourty-nine.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DayFourtyNineComponent],
  imports: [CommonModule, DayFourtyNineRoutingModule, SharedModule],
})
export class DayFourtyNineModule {}
