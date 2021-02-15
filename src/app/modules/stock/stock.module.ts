import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockRoutingModule} from './stock-routing.module';
import {HomeStockComponent} from './pages/home-stock/home-stock.component';
import {SharedModule} from '../../shared/shared.module';
import {DxDataGridModule, DxTextAreaModule, DxTextBoxModule, DxValidatorModule} from 'devextreme-angular';
import {FormProductStockComponent} from './pages/form-product-stock/form-product-stock.component';

@NgModule({
  declarations: [
    HomeStockComponent,
    FormProductStockComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxTextAreaModule,
  ]
})
export class StockModule {
}
