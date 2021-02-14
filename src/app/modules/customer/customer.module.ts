import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {HomeCustomerComponent} from './pages/home-customer/home-customer.component';


@NgModule({
  declarations: [HomeCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule {
}
