import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirtyTwoComponent } from './day-thirty-two.component';

const routes: Routes = [{ path: '', component: DayThirtyTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirtyTwoRoutingModule { }
