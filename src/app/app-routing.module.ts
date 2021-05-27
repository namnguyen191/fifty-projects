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
  { path: 'day-three', loadChildren: () => import('./day-three/day-three.module').then(m => m.DayThreeModule) },
  { path: 'day-four', loadChildren: () => import('./day-four/day-four.module').then(m => m.DayFourModule) },
  { path: 'day-five', loadChildren: () => import('./day-five/day-five.module').then(m => m.DayFiveModule) },
  { path: 'day-six', loadChildren: () => import('./day-six/day-six.module').then(m => m.DaySixModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
