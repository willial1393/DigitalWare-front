import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {LayoutDashboardComponent} from './layout-dashboard/layout-dashboard.component';
import {HomeDashboardComponent} from './home-dashboard/home-dashboard.component';


@NgModule({
  declarations: [
    LayoutDashboardComponent,
    HomeDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
