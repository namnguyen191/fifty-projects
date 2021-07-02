import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourtyThreeComponent } from './day-fourty-three.component';

const routes: Routes = [{ path: '', component: DayFourtyThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourtyThreeRoutingModule { }
