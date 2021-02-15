import {Component, OnInit} from '@angular/core';
import notify from 'devextreme/ui/notify';
import {RouteName} from '../../../../shared/constants/route-name';
import {ProductService} from '../../../../core/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-units-stock',
  templateUrl: './add-units-stock.component.html',
  styleUrls: ['./add-units-stock.component.css']
})
export class AddUnitsStockComponent implements OnInit {

  isLoading: boolean;
  units: number;
  unitPrice: number;
  productId: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.queryParams.id;
  }

  async saveUnits(e: Event): Promise<void> {
    e.preventDefault();
    this.isLoading = true;
    try {
      await this.productService.addUnits({
        productId: this.productId,
        units: this.units,
        unitPrice: this.unitPrice
      });
      notify('Unidades de producto registradas', 'success');
      await this.router.navigate([RouteName.STOCK.HOME_ROOT]);
    } catch (e) {
      notify(e.message, 'error');
    }
    this.isLoading = false;
  }

}
