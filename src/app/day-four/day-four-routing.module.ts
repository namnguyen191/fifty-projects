import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourComponent } from './day-four.component';

const routes: Routes = [{ path: '', component: DayFourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourRoutingModule { }
