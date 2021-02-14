import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SalesRoutingModule} from './sales-routing.module';
import {HomeSalesComponent} from './pages/home-sales/home-sales.component';


@NgModule({
  declarations: [HomeSalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule {
}
