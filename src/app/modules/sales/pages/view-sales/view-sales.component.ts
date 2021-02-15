import {Component, OnInit} from '@angular/core';
import {CustomerInvoice} from '../../../../shared/models/customer-invoice';
import {CustomerService} from '../../../../core/services/customer.service';
import {CustomerInvoiceService} from '../../../../core/services/customer-invoice.service';
import {ProductService} from '../../../../core/services/product.service';
import {StockService} from '../../../../core/services/stock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RouteName} from '../../../../shared/constants/route-name';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})
export class ViewSalesComponent implements OnInit {


  customerInvoice: CustomerInvoice;
  invoiceId: number;


  constructor(private customerService: CustomerService,
              private customerInvoiceService: CustomerInvoiceService,
              private productService: ProductService,
              private stockService: StockService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.invoiceId = activatedRoute.snapshot.queryParams.id;
    this.customerInvoice = new CustomerInvoice();
  }

  ngOnInit(): void {
    this.customerInvoiceService.getById(this.invoiceId).then(value => this.customerInvoice = value);
  }

  goToBack(): void {
    this.router.navigate([
      RouteName.SALES.HOME_ROOT
    ]);
  }
}
