import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirtyOneComponent } from './day-thirty-one.component';

const routes: Routes = [{ path: '', component: DayThirtyOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirtyOneRoutingModule { }
