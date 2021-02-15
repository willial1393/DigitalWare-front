import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {HomeCustomerComponent} from './pages/home-customer/home-customer.component';
import {
  DxDataGridModule,
  DxDateBoxModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxTextAreaModule,
  DxTextBoxModule,
  DxValidatorModule
} from 'devextreme-angular';
import {SharedModule} from '../../shared/shared.module';
import {FormCustomerComponent} from './pages/form-customer/form-customer.component';


@NgModule({
  declarations: [HomeCustomerComponent, FormCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DxPopupModule,
    SharedModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxTextAreaModule,
    DxDateBoxModule,
    DxNumberBoxModule
  ]
})
export class CustomerModule {
}
