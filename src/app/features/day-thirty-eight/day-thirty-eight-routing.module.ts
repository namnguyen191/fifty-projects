import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirtyEightComponent } from './day-thirty-eight.component';

const routes: Routes = [{ path: '', component: DayThirtyEightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirtyEightRoutingModule { }
