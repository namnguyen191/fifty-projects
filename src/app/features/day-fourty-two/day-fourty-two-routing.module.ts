import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourtyTwoComponent } from './day-fourty-two.component';

const routes: Routes = [{ path: '', component: DayFourtyTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourtyTwoRoutingModule { }
