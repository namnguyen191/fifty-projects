import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTwentyFourComponent } from './day-twenty-four.component';

const routes: Routes = [{ path: '', component: DayTwentyFourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTwentyFourRoutingModule { }
