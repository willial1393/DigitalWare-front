import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockRoutingModule} from './stock-routing.module';
import {HomeStockComponent} from './pages/home-stock/home-stock.component';

@NgModule({
  declarations: [HomeStockComponent],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule {
}
