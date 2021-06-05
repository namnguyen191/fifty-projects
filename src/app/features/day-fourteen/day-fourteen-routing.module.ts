import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourteenComponent } from './day-fourteen.component';

const routes: Routes = [{ path: '', component: DayFourteenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourteenRoutingModule { }
