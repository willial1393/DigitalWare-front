import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteName} from '../../shared/constants/route-name';
import {HomeCustomerComponent} from './pages/home-customer/home-customer.component';
import {FormCustomerComponent} from './pages/form-customer/form-customer.component';

const routes: Routes = [
  {path: RouteName.CUSTOMER.HOME, component: HomeCustomerComponent},
  {path: RouteName.CUSTOMER.CUSTOMER, component: FormCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
