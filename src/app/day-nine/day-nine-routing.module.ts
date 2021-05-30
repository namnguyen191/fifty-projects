import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayNineComponent } from './day-nine.component';

const routes: Routes = [{ path: '', component: DayNineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayNineRoutingModule { }
