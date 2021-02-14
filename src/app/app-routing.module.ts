import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from './core/pages/page404/page404.component';
import {RouteName} from './shared/constants/route-name';

const routes: Routes = [
  {
    path: RouteName.DASHBOARD.ROOT,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path: RouteName.APP.PAGE404, component: Page404Component},
  {path: '**', redirectTo: RouteName.APP.PAGE404, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
