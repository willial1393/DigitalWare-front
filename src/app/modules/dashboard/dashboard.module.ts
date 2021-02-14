import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {HomeDashboardComponent} from './pages/home-dashboard/home-dashboard.component';
import {DxButtonModule} from 'devextreme-angular';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    HomeDashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DxButtonModule,
    SharedModule,
  ]
})
export class DashboardModule {
}
