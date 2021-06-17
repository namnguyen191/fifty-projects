import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTwentySevenComponent } from './day-twenty-seven.component';

const routes: Routes = [{ path: '', component: DayTwentySevenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTwentySevenRoutingModule { }
