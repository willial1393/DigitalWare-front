import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteName} from '../../shared/constants/route-name';
import {HomeCustomerComponent} from './pages/home-customer/home-customer.component';

const routes: Routes = [
  {path: RouteName.CUSTOMER.HOME, component: HomeCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
