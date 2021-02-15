import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteName} from '../../shared/constants/route-name';
import {HomeSalesComponent} from './pages/home-sales/home-sales.component';
import {FormSalesComponent} from './pages/form-sales/form-sales.component';
import {ViewSalesComponent} from './pages/view-sales/view-sales.component';

const routes: Routes = [
  {path: RouteName.SALES.HOME, component: HomeSalesComponent},
  {path: RouteName.SALES.FORM, component: FormSalesComponent},
  {path: RouteName.SALES.VIEW, component: ViewSalesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {
}
