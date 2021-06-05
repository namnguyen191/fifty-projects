import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaySixComponent } from './day-six.component';

const routes: Routes = [{ path: '', component: DaySixComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaySixRoutingModule { }
