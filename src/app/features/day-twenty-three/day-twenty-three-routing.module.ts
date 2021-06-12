import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTwentyThreeComponent } from './day-twenty-three.component';

const routes: Routes = [{ path: '', component: DayTwentyThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTwentyThreeRoutingModule { }
