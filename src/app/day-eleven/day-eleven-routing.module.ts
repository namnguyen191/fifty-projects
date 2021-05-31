import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayElevenComponent } from './day-eleven.component';

const routes: Routes = [{ path: '', component: DayElevenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayElevenRoutingModule { }
