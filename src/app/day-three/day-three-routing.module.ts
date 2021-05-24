import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThreeComponent } from './day-three.component';

const routes: Routes = [{ path: '', component: DayThreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThreeRoutingModule { }
