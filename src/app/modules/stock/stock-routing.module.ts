import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteName} from '../../shared/constants/route-name';
import {HomeStockComponent} from './pages/home-stock/home-stock.component';
import {FormProductStockComponent} from './pages/form-product-stock/form-product-stock.component';
import {HistoryStockComponent} from './pages/history-stock/history-stock.component';
import {AddUnitsStockComponent} from './pages/add-units-stock/add-units-stock.component';

const routes: Routes = [
  {path: RouteName.STOCK.HOME, component: HomeStockComponent},
  {path: RouteName.STOCK.PRODUCT, component: FormProductStockComponent},
  {path: RouteName.STOCK.HISTORY, component: HistoryStockComponent},
  {path: RouteName.STOCK.ADD_UNITS, component: AddUnitsStockComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {
}
