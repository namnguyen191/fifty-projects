import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourtyComponent } from './day-fourty.component';

const routes: Routes = [{ path: '', component: DayFourtyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourtyRoutingModule { }
