import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourtyNineComponent } from './day-fourty-nine.component';

const routes: Routes = [{ path: '', component: DayFourtyNineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourtyNineRoutingModule { }
