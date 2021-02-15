import {Component} from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

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


  constructor() {
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

  onSelect(value: any): void {
    console.log(value);
  }
}
