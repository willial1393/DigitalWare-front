import {Component} from '@angular/core';
import {Router} from '@angular/router';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import {RouteName} from '../../../../shared/constants/route-name';
import {Customer} from '../../../../shared/models/customer';
import {CustomerService} from '../../../../core/services/customer.service';

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent {

  dataSource: any;
  url: string;

  constructor(private router: Router,
              private customerService: CustomerService) {
    this.url = customerService.url;

    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: this.url,
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = {withCredentials: true};
      }
    });
  }

  onSelect(customer: Customer): void {
    this.router.navigate([
      RouteName.CUSTOMER.ROOT,
      RouteName.CUSTOMER.CUSTOMER
    ], {queryParams: {id: customer.id}});
  }

  createCustomer(): void {
    this.router.navigate([
      RouteName.CUSTOMER.ROOT,
      RouteName.CUSTOMER.CUSTOMER
    ]);
  }

}
