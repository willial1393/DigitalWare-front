import {Component} from '@angular/core';
import {Customer} from '../../../../shared/models/customer';
import {CustomerService} from '../../../../core/services/customer.service';
import {Router} from '@angular/router';
import notify from 'devextreme/ui/notify';
import {RouteName} from '../../../../shared/constants/route-name';
import {CustomerInvoice} from '../../../../shared/models/customer-invoice';
import {CustomerInvoiceService} from '../../../../core/services/customer-invoice.service';
import {Product} from '../../../../shared/models/product';
import {CustomerInvoiceConcept} from '../../../../shared/models/customer-invoice-concept';
import {ProductService} from '../../../../core/services/product.service';
import {StockService} from '../../../../core/services/stock.service';
import {Stock} from '../../../../shared/models/stock';

@Component({
  selector: 'app-form-sales',
  templateUrl: './form-sales.component.html',
  styleUrls: ['./form-sales.component.css']
})
export class FormSalesComponent {

  customerInvoice: CustomerInvoice;
  isLoading: boolean;
  getCustomerByDocument: any;
  customerDocument: number;
  customer: Customer;
  concepts: CustomerInvoiceConcept[];
  concept: CustomerInvoiceConcept;
  products: Product[];
  popupVisible: boolean;
  productName: string;
  product: Product;
  popupVisibleDelete: boolean;
  units: number;
  priceUnit: number;
  total: number;
  stock: Stock;
  consecutive = 0;


  constructor(private customerService: CustomerService,
              private customerInvoiceService: CustomerInvoiceService,
              private productService: ProductService,
              private stockService: StockService,
              private router: Router) {
    this.customer = new Customer();
    this.stock = new Stock();
    this.products = [];
    this.concepts = [];
    this.customerInvoice = new CustomerInvoice();
    this.getCustomerByDocument = async (params): Promise<boolean> => {
      this.customer = await this.customerService.getByDocument(params.value);
      return !!this.customer;
    };
  }

  async save(e: Event): Promise<void> {
    e.preventDefault();
    this.isLoading = true;
    try {
      this.customerInvoice.customerId = this.customer.id;
      this.customerInvoice.concepts = this.concepts;
      await this.customerInvoiceService.create(this.customerInvoice);
      notify('Factura de venta creada', 'success');
      await this.router.navigate([RouteName.SALES.HOME_ROOT]);
    } catch (e) {
      notify(e.message, 'error');
    }
    this.isLoading = false;
  }

  onSelect(concept: CustomerInvoiceConcept): void {
    this.concept = concept;
    this.popupVisibleDelete = true;
  }

  updateProducts(e: any): void {
    this.productService.getByNameContain(e.value).then(value => {
      this.products = value;
      this.product = value.filter(value1 => value1.name === this.productName)[0];
      if (this.product) {
        this.stockService.getByProductId(this.product.id).then(value1 => {
          this.priceUnit = value1.unitPrice;
          if (!value1.unitPrice || value1.totalQuantity <= 0) {
            notify('Este producto no tiene unidades disponibles', 'error');
          }
        });
      }
    });
  }

  addProduct(): void {
    if (this.stock.totalQuantity - this.units < 5) {
      notify('No hay suficientes unidades', 'error');
      return;
    }
    if (!this.product) {
      notify('Selecciona un producto', 'error');
      return;
    }
    if (this.units <= 0) {
      notify('Ingresa una cantidad', 'error');
      return;
    }
    const c = new CustomerInvoiceConcept();
    c.id = this.consecutive;
    c.productId = this.product.id;
    c.product = this.product;
    c.customerInvoiceId = this.customer.id;
    c.quantity = this.units;
    c.unitPrice = this.priceUnit;
    c.total = this.units * this.priceUnit;
    this.concepts.push(c);
    this.consecutive++;
    this.product = null;
    this.units = null;
    this.priceUnit = null;
    this.total = null;
    this.productName = null;
    this.popupVisible = false;
    this.customerInvoice.total = this.concepts.reduce((previousValue, currentValue) => previousValue + currentValue.total, 0);
  }

  removeProduct(conceptId: number): void {
    this.concepts = this.concepts.filter(value => value.id !== conceptId);
  }
}
