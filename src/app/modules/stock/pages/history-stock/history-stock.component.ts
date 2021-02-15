import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {StockService} from '../../../../core/services/stock.service';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import {RouteName} from '../../../../shared/constants/route-name';

@Component({
  selector: 'app-history-stock',
  templateUrl: './history-stock.component.html',
  styleUrls: ['./history-stock.component.css']
})
export class HistoryStockComponent {

  dataSource: any;
  url: string;

  constructor(private router: Router,
              private stockService: StockService) {
    this.url = stockService.urlHistory;

    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: this.url,
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = {withCredentials: true};
      }
    });
  }

  goToStock(): void {
    this.router.navigate([
      RouteName.STOCK.HOME_ROOT
    ]);
  }
}
