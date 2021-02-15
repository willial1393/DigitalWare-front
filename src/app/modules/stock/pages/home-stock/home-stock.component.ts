import {Component} from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import {Router} from '@angular/router';
import {RouteName} from '../../../../shared/constants/route-name';
import {ProductService} from '../../../../core/services/product.service';
import {Product} from '../../../../shared/models/product';

@Component({
  selector: 'app-home-stock',
  templateUrl: './home-stock.component.html',
  styleUrls: ['./home-stock.component.css']
})
export class HomeStockComponent {
  customersData: any;
  shippersData: any;
  dataSource: any;
  url: string;


  constructor(private router: Router,
              private productService: ProductService) {
    this.url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';

    this.dataSource = AspNetData.createStore({
      key: 'OrderID',
      loadUrl: this.url + '/Orders',
      insertUrl: this.url + '/InsertOrder',
      updateUrl: this.url + '/UpdateOrder',
      deleteUrl: this.url + '/DeleteOrder',
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = {withCredentials: true};
      }
    });

    this.customersData = AspNetData.createStore({
      key: 'Value',
      loadUrl: this.url + '/CustomersLookup',
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = {withCredentials: true};
      }
    });

    this.shippersData = AspNetData.createStore({
      key: 'Value',
      loadUrl: this.url + '/ShippersLookup',
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = {withCredentials: true};
      }
    });
  }

  onSelect(product: Product): void {
    this.productService.notifyChangeProduct(product);
    this.router.navigate([
      RouteName.STOCK.ROOT,
      RouteName.STOCK.EDIT_PRODUCT
    ]);
  }

  addProduct(): void {
    this.router.navigate([
      RouteName.STOCK.ROOT,
      RouteName.STOCK.ADD_PRODUCT
    ]);
  }
}
