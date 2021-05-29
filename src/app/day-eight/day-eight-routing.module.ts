import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayEightComponent } from './day-eight.component';

const routes: Routes = [{ path: '', component: DayEightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayEightRoutingModule { }
