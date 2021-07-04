import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourtyFiveComponent } from './day-fourty-five.component';

const routes: Routes = [{ path: '', component: DayFourtyFiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourtyFiveRoutingModule { }
