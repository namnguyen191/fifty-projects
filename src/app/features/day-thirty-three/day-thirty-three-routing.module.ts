import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirtyThreeComponent } from './day-thirty-three.component';

const routes: Routes = [{ path: '', component: DayThirtyThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirtyThreeRoutingModule { }
