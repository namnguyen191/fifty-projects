import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayFourtySixComponent } from './day-fourty-six.component';

const routes: Routes = [{ path: '', component: DayFourtySixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayFourtySixRoutingModule { }
