import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {LayoutDashboardComponent} from './layout-dashboard/layout-dashboard.component';
import {HomeDashboardComponent} from './pages/home-dashboard/home-dashboard.component';
import {DxContextMenuModule, DxDrawerModule, DxListModule, DxRadioGroupModule, DxToolbarModule} from 'devextreme-angular';


@NgModule({
  declarations: [
    LayoutDashboardComponent,
    HomeDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DxContextMenuModule,
    DxRadioGroupModule,
    DxListModule,
    DxDrawerModule,
    DxToolbarModule
  ]
})
export class DashboardModule {
}
