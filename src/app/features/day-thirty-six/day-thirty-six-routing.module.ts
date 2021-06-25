import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayThirtySixComponent } from './day-thirty-six.component';

const routes: Routes = [{ path: '', component: DayThirtySixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayThirtySixRoutingModule { }
