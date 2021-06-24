import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirtyFiveComponent } from './day-thirty-five.component';

const routes: Routes = [{ path: '', component: DayThirtyFiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirtyFiveRoutingModule { }
