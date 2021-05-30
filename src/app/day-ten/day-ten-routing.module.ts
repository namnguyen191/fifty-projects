import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTenComponent } from './day-ten.component';

const routes: Routes = [{ path: '', component: DayTenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTenRoutingModule { }
