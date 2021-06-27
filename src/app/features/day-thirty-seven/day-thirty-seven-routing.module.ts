import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirtySevenComponent } from './day-thirty-seven.component';

const routes: Routes = [{ path: '', component: DayThirtySevenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirtySevenRoutingModule { }
