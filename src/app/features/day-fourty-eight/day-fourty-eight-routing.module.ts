import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourtyEightComponent } from './day-fourty-eight.component';

const routes: Routes = [{ path: '', component: DayFourtyEightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourtyEightRoutingModule { }
