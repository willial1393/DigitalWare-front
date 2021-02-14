import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteName} from '../../shared/constants/route-name';
import {HomeStockComponent} from './pages/home-stock/home-stock.component';

const routes: Routes = [
  {path: RouteName.STOCK.HOME, component: HomeStockComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule {
}
