import {Component} from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import {Router} from '@angular/router';
import {RouteName} from '../../../../shared/constants/route-name';
import {StockService} from '../../../../core/services/stock.service';
import {Stock} from '../../../../shared/models/stock';

@Component({
  selector: 'app-home-stock',
  templateUrl: './home-stock.component.html',
  styleUrls: ['./home-stock.component.css']
})
export class HomeStockComponent {
  dataSource: any;
  url: string;
  popupVisible: boolean;
  stock: Stock;

  constructor(private router: Router,
              private stockService: StockService) {
    this.url = stockService.url;

    this.dataSource = AspNetData.createStore({
      key: 'productId',
      loadUrl: this.url,
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = {withCredentials: true};
      }
    });
  }

  onSelect(stock: Stock): void {
    this.popupVisible = true;
    this.stock = stock;
  }

  editProduct(): void {
    this.popupVisible = false;
    this.router.navigate([
      RouteName.STOCK.ROOT,
      RouteName.STOCK.PRODUCT
    ], {queryParams: {id: this.stock.productId}});
  }

  addUnits(): void {
    this.popupVisible = false;
    this.router.navigate([
      RouteName.STOCK.ROOT,
      RouteName.STOCK.ADD_UNITS
    ], {queryParams: {id: this.stock.productId}});
  }

  createProduct(): void {
    this.router.navigate([
      RouteName.STOCK.ROOT,
      RouteName.STOCK.PRODUCT
    ]);
  }

  goToHistory(): void {
    this.router.navigate([
      RouteName.STOCK.ROOT,
      RouteName.STOCK.HISTORY
    ]);
  }
}
