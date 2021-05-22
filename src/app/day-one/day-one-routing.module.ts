import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayOneComponent } from './day-one.component';

const routes: Routes = [
  {
    path: '',
    component: DayOneComponent,
    data: {
      breadcrumb: 'Day One',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayOneRoutingModule {}
