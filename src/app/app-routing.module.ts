import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from './core/pages/page404/page404.component';
import {RouteName} from './shared/constants/route-name';

const routes: Routes = [
  {
    path: RouteName.APP.PAGE404,
    component: Page404Component
  },
  {
    path: RouteName.DASHBOARD.ROOT,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: RouteName.SALES.ROOT,
    loadChildren: () => import('./modules/sales/sales.module').then(m => m.SalesModule)
  },
  {
    path: RouteName.STOCK.ROOT,
    loadChildren: () => import('./modules/stock/stock.module').then(m => m.StockModule)
  },
  {
    path: RouteName.CUSTOMER.ROOT,
    loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: '**',
    redirectTo: RouteName.APP.PAGE404, pathMatch: 'full'
  }
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
