import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayOneComponent } from './day-one/day-one.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'day-one',
    loadChildren: () =>
      import('./day-one/day-one.module').then((m) => m.DayOneModule),
  },
  {
    path: 'day-two',
    loadChildren: () =>
      import('./day-two/day-two.module').then((m) => m.DayTwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
