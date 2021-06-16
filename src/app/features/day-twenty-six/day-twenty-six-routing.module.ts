import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayTwentySixComponent } from './day-twenty-six.component';

const routes: Routes = [{ path: '', component: DayTwentySixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTwentySixRoutingModule { }
