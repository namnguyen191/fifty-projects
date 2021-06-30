import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourtyOneComponent } from './day-fourty-one.component';

const routes: Routes = [{ path: '', component: DayFourtyOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourtyOneRoutingModule { }
