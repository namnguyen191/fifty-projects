import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTwentyNineComponent } from './day-twenty-nine.component';

const routes: Routes = [{ path: '', component: DayTwentyNineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTwentyNineRoutingModule { }
