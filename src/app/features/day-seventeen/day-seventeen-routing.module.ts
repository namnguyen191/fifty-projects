import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaySeventeenComponent } from './day-seventeen.component';

const routes: Routes = [{ path: '', component: DaySeventeenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaySeventeenRoutingModule { }
