import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTwentyEightComponent } from './day-twenty-eight.component';

const routes: Routes = [{ path: '', component: DayTwentyEightComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTwentyEightRoutingModule { }
