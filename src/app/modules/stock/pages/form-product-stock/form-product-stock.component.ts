import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../../../shared/models/product';
import {ProductService} from '../../../../core/services/product.service';
import notify from 'devextreme/ui/notify';
import {RouteName} from '../../../../shared/constants/route-name';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-form-product-stock',
  templateUrl: './form-product-stock.component.html',
  styleUrls: ['./form-product-stock.component.css']
})
export class FormProductStockComponent implements OnInit, OnDestroy {
  product: Product = new Product();
  isLoading: boolean;
  asyncValidationName: any;
  isEdit: boolean;
  private subs: Subscription;

  constructor(private productService: ProductService) {
    this.isEdit = window.location.pathname.includes(RouteName.STOCK.EDIT_PRODUCT);
    this.asyncValidationName = async (params): Promise<boolean> => {
      return !(await this.productService.getByName(params.value));
    };
  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.subs = this.productService.user.subscribe(value => this.product = value);
    }
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  async save(e: Event): Promise<void> {
    e.preventDefault();
    this.isLoading = true;
    try {
      await this.productService.create(this.product);
      notify('Producto guardado', 'success');
    } catch (e) {
      notify('asdasd', 'error');
    }
    this.isLoading = false;
  }
}
