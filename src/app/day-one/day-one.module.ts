import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayOneComponent } from './day-one.component';
import { DayOneRoutingModule } from './day-one-routing.module';

@NgModule({
  declarations: [DayOneComponent],
  imports: [CommonModule, DayOneRoutingModule],
})
export class DayOneModule {}
