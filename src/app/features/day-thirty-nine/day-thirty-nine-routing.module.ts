import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirtyNineComponent } from './day-thirty-nine.component';

const routes: Routes = [{ path: '', component: DayThirtyNineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirtyNineRoutingModule { }
