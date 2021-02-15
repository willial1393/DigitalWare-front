import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import notify from 'devextreme/ui/notify';
import {RouteName} from '../../../../shared/constants/route-name';
import {CustomerService} from '../../../../core/services/customer.service';
import {Customer} from '../../../../shared/models/customer';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {

  customer: Customer;
  isLoading: boolean;
  asyncValidationDocument: any;
  customerId: number;
  customerDocument: string;
  birthday: Date;
  now: Date;


  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.now = new Date();
    this.customer = new Customer();
    this.asyncValidationDocument = async (params): Promise<boolean> => {
      if (this.customerDocument === params.value.toString()) {
        return true;
      }
      return !(await this.customerService.getByDocument(params.value));
    };
  }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.queryParams.id;
    if (this.customerId) {
      this.isLoading = true;
      this.customerService.getById(this.customerId).then(value => {
        this.customer = value;
        this.customerDocument = value.documentNumber;
        this.birthday = new Date(value.birthday);
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
      this.customer.birthday = this.birthday.toISOString();
      this.customer.documentNumber = this.customer.documentNumber.toString();
      if (this.customerId) {
        await this.customerService.update(this.customer);
        notify('Cliente actualizado', 'success');
      } else {
        await this.customerService.create(this.customer);
        notify('Cliente creado', 'success');
      }
      await this.router.navigate([RouteName.CUSTOMER.HOME_ROOT]);
    } catch (e) {
      notify(e.message, 'error');
    }
    this.isLoading = false;
  }

}
