import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaySixteenComponent } from './day-sixteen.component';

const routes: Routes = [{ path: '', component: DaySixteenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaySixteenRoutingModule { }
