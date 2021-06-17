import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'day-one',
    loadChildren: () =>
      import('./features/day-one/day-one.module').then((m) => m.DayOneModule),
  },
  {
    path: 'day-two',
    loadChildren: () =>
      import('./features/day-two/day-two.module').then((m) => m.DayTwoModule),
  },
  {
    path: 'day-three',
    loadChildren: () =>
      import('./features/day-three/day-three.module').then(
        (m) => m.DayThreeModule
      ),
  },
  {
    path: 'day-four',
    loadChildren: () =>
      import('./features/day-four/day-four.module').then(
        (m) => m.DayFourModule
      ),
  },
  {
    path: 'day-five',
    loadChildren: () =>
      import('./features/day-five/day-five.module').then(
        (m) => m.DayFiveModule
      ),
  },
  {
    path: 'day-six',
    loadChildren: () =>
      import('./features/day-six/day-six.module').then((m) => m.DaySixModule),
  },
  {
    path: 'day-seven',
    loadChildren: () =>
      import('./features/day-seven/day-seven.module').then(
        (m) => m.DaySevenModule
      ),
  },
  {
    path: 'day-eight',
    loadChildren: () =>
      import('./features/day-eight/day-eight.module').then(
        (m) => m.DayEightModule
      ),
  },
  {
    path: 'day-nine',
    loadChildren: () =>
      import('./features/day-nine/day-nine.module').then(
        (m) => m.DayNineModule
      ),
  },
  {
    path: 'day-ten',
    loadChildren: () =>
      import('./features/day-ten/day-ten.module').then((m) => m.DayTenModule),
  },
  {
    path: 'day-eleven',
    loadChildren: () =>
      import('./features/day-eleven/day-eleven.module').then(
        (m) => m.DayElevenModule
      ),
  },
  {
    path: 'day-twelve',
    loadChildren: () =>
      import('./features/day-twelve/day-twelve.module').then(
        (m) => m.DayTwelveModule
      ),
  },
  {
    path: 'day-thirteen',
    loadChildren: () =>
      import('./features/day-thirteen/day-thirteen.module').then(
        (m) => m.DayThirteenModule
      ),
  },
  {
    path: 'day-fourteen',
    loadChildren: () =>
      import('./features/day-fourteen/day-fourteen.module').then(
        (m) => m.DayFourteenModule
      ),
  },
  {
    path: 'day-fifteen',
    loadChildren: () =>
      import('./features/day-fifteen/day-fifteen.module').then(
        (m) => m.DayFifteenModule
      ),
  },
  { path: 'day-sixteen', loadChildren: () => import('./features/day-sixteen/day-sixteen.module').then(m => m.DaySixteenModule) },
  { path: 'day-seventeen', loadChildren: () => import('./features/day-seventeen/day-seventeen.module').then(m => m.DaySeventeenModule) },
  { path: 'day-eighteen', loadChildren: () => import('./features/day-eighteen/day-eighteen.module').then(m => m.DayEighteenModule) },
  { path: 'day-nineteen', loadChildren: () => import('./features/day-nineteen/day-nineteen.module').then(m => m.DayNineteenModule) },
  { path: 'day-twenty', loadChildren: () => import('./features/day-twenty/day-twenty.module').then(m => m.DayTwentyModule) },
  { path: 'day-twenty-one', loadChildren: () => import('./features/day-twenty-one/day-twenty-one.module').then(m => m.DayTwentyOneModule) },
  { path: 'day-twenty-two', loadChildren: () => import('./features/day-twenty-two/day-twenty-two.module').then(m => m.DayTwentyTwoModule) },
  { path: 'day-twenty-three', loadChildren: () => import('./features/day-twenty-three/day-twenty-three.module').then(m => m.DayTwentyThreeModule) },
  { path: 'day-twenty-four', loadChildren: () => import('./features/day-twenty-four/day-twenty-four.module').then(m => m.DayTwentyFourModule) },
  { path: 'day-twenty-five', loadChildren: () => import('./features/day-twenty-five/day-twenty-five.module').then(m => m.DayTwentyFiveModule) },
  { path: 'day-twenty-six', loadChildren: () => import('./features/day-twenty-six/day-twenty-six.module').then(m => m.DayTwentySixModule) },
  { path: 'day-twenty-seven', loadChildren: () => import('./features/day-twenty-seven/day-twenty-seven.module').then(m => m.DayTwentySevenModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
