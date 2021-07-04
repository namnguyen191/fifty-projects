import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourtyFourComponent } from './day-fourty-four.component';

const routes: Routes = [{ path: '', component: DayFourtyFourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourtyFourRoutingModule { }
