import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirteenComponent } from './day-thirteen.component';

const routes: Routes = [{ path: '', component: DayThirteenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirteenRoutingModule { }
