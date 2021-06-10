import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTwentyComponent } from './day-twenty.component';

const routes: Routes = [{ path: '', component: DayTwentyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTwentyRoutingModule { }
