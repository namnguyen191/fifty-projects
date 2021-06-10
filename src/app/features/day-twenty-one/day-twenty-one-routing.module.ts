import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTwentyOneComponent } from './day-twenty-one.component';

const routes: Routes = [{ path: '', component: DayTwentyOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTwentyOneRoutingModule { }
