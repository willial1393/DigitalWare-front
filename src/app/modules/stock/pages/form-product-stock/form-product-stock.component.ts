import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../shared/models/product';
import {ProductService} from '../../../../core/services/product.service';
import notify from 'devextreme/ui/notify';
import {RouteName} from '../../../../shared/constants/route-name';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-product-stock',
  templateUrl: './form-product-stock.component.html',
  styleUrls: ['./form-product-stock.component.css']
})
export class FormProductStockComponent implements OnInit {
  product: Product;
  isLoading: boolean;
  asyncValidationName: any;
  productId: number;
  productName: string;

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.product = new Product();
    this.asyncValidationName = async (params): Promise<boolean> => {
      if (this.productName === params.value) {
        return true;
      }
      return !(await this.productService.getByName(params.value));
    };
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.queryParams.id;
    if (this.productId) {
      this.isLoading = true;
      this.productService.getById(this.productId).then(value => {
        this.product = value;
        this.productName = value.name;
        this.isLoading = false;
      }).catch(reason => {
        notify(reason.message, 'error');
        this.isLoading = false;
      });
    }
  }

  async save(e: Event): Promise<void> {
    e.preventDefault();
    this.isLoading = true;
    try {
      if (this.productId) {
        await this.productService.update(this.product);
        notify('Producto actualizado', 'success');
      } else {
        await this.productService.create(this.product);
        notify('Producto creado', 'success');
      }
      await this.router.navigate([RouteName.STOCK.HOME_ROOT]);
    } catch (e) {
      notify(e.message, 'error');
    }
    this.isLoading = false;
  }
}
