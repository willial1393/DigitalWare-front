import {Component} from '@angular/core';
import {Router} from '@angular/router';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import {RouteName} from '../../../../shared/constants/route-name';
import {CustomerInvoice} from '../../../../shared/models/customer-invoice';
import {CustomerInvoiceService} from '../../../../core/services/customer-invoice.service';

@Component({
  selector: 'app-home-sales',
  templateUrl: './home-sales.component.html',
  styleUrls: ['./home-sales.component.css']
})
export class HomeSalesComponent {

  dataSource: any;
  url: string;

  constructor(private router: Router,
              private customerInvoiceService: CustomerInvoiceService) {
    this.url = customerInvoiceService.url;

    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: this.url,
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = {withCredentials: true};
      }
    });
  }

  onSelect(customerInvoice: CustomerInvoice): void {
    this.router.navigate([
      RouteName.SALES.ROOT,
      RouteName.SALES.VIEW
    ], {queryParams: {id: customerInvoice.id}});
  }

  createInvoice(): void {
    this.router.navigate([
      RouteName.SALES.ROOT,
      RouteName.SALES.FORM
    ]);
  }
}
