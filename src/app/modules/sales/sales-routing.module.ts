import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteName} from '../../shared/constants/route-name';
import {HomeSalesComponent} from './pages/home-sales/home-sales.component';

const routes: Routes = [
  {path: RouteName.SALES.HOME, component: HomeSalesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {
}
