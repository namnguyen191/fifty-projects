import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourtySevenComponent } from './day-fourty-seven.component';

const routes: Routes = [{ path: '', component: DayFourtySevenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourtySevenRoutingModule { }
