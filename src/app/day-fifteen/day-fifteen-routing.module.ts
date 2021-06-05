import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFifteenComponent } from './day-fifteen.component';

const routes: Routes = [{ path: '', component: DayFifteenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFifteenRoutingModule { }
