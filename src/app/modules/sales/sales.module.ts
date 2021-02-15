import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SalesRoutingModule} from './sales-routing.module';
import {HomeSalesComponent} from './pages/home-sales/home-sales.component';
import {FormSalesComponent} from './pages/form-sales/form-sales.component';
import {ViewSalesComponent} from './pages/view-sales/view-sales.component';
import {
  DxAutocompleteModule,
  DxDataGridModule,
  DxNumberBoxModule,
  DxPopupModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxValidatorModule
} from 'devextreme-angular';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [HomeSalesComponent, FormSalesComponent, ViewSalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    DxValidatorModule,
    DxNumberBoxModule,
    DxTextBoxModule,
    SharedModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxPopupModule,
    DxAutocompleteModule
  ]
})
export class SalesModule {
}
