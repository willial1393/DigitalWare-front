import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeDashboardComponent} from './pages/home-dashboard/home-dashboard.component';
import {LayoutDashboardComponent} from './layout-dashboard/layout-dashboard.component';
import {RouteName} from '../../shared/constants/route-name';

const routes: Routes = [
  {
    path: RouteName.DASHBOARD.ROOT,
    redirectTo: RouteName.DASHBOARD.HOME, pathMatch: 'full'
  },
  {
    path: RouteName.DASHBOARD.ROOT, component: LayoutDashboardComponent,
    children: [
      {path: RouteName.DASHBOARD.HOME, component: HomeDashboardComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
