import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTwentyFiveComponent } from './day-twenty-five.component';

const routes: Routes = [{ path: '', component: DayTwentyFiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTwentyFiveRoutingModule { }
