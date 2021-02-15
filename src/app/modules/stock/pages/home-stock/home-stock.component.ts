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
  dataSource: any;
  url: string;


  constructor(private router: Router,
              private productService: ProductService) {
    this.url = productService.url;

    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: this.url,
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = {withCredentials: true};
      }
    });
  }

  onSelect(product: Product): void {
    this.router.navigate([
      RouteName.STOCK.ROOT,
      RouteName.STOCK.PRODUCT
    ], {queryParams: {id: product.id}});
  }

  addProduct(): void {
    this.router.navigate([
      RouteName.STOCK.ROOT,
      RouteName.STOCK.PRODUCT
    ]);
  }
}
