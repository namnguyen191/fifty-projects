import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayNineteenComponent } from './day-nineteen.component';

const routes: Routes = [{ path: '', component: DayNineteenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayNineteenRoutingModule { }
