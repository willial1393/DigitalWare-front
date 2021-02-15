import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockRoutingModule} from './stock-routing.module';
import {HomeStockComponent} from './pages/home-stock/home-stock.component';
import {SharedModule} from '../../shared/shared.module';
import {DxDataGridModule} from 'devextreme-angular';

@NgModule({
  declarations: [HomeStockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    SharedModule,
    DxDataGridModule,
  ]
})
export class StockModule {
}
