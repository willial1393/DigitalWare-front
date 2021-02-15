import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockRoutingModule} from './stock-routing.module';
import {HomeStockComponent} from './pages/home-stock/home-stock.component';
import {SharedModule} from '../../shared/shared.module';
import {DxDataGridModule, DxNumberBoxModule, DxPopupModule, DxTextAreaModule, DxTextBoxModule, DxValidatorModule} from 'devextreme-angular';
import {FormProductStockComponent} from './pages/form-product-stock/form-product-stock.component';
import {HistoryStockComponent} from './pages/history-stock/history-stock.component';
import {AddUnitsStockComponent} from './pages/add-units-stock/add-units-stock.component';

@NgModule({
  declarations: [
    HomeStockComponent,
    FormProductStockComponent,
    HistoryStockComponent,
    AddUnitsStockComponent,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    SharedModule,
    DxDataGridModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxTextAreaModule,
    DxNumberBoxModule,
    DxPopupModule,
  ]
})
export class StockModule {
}
