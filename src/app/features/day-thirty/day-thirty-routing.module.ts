import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirtyComponent } from './day-thirty.component';

const routes: Routes = [{ path: '', component: DayThirtyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirtyRoutingModule { }
