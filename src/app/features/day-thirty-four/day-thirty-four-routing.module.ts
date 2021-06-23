import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirtyFourComponent } from './day-thirty-four.component';

const routes: Routes = [{ path: '', component: DayThirtyFourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirtyFourRoutingModule { }
