import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTwentyTwoComponent } from './day-twenty-two.component';

const routes: Routes = [{ path: '', component: DayTwentyTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTwentyTwoRoutingModule { }
