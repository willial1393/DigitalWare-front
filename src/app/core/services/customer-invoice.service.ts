import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CustomerInvoice} from '../../shared/models/customer-invoice';

@Injectable({
  providedIn: 'root'
})
export class CustomerInvoiceService {
  public readonly url = environment.endpoint + '/customerInvoice';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  getById(id: number): Promise<CustomerInvoice> {
    return this.http.get(this.url + '/' + id)
      .toPromise() as Promise<CustomerInvoice>;
  }

  create(customerInvoice: CustomerInvoice): Promise<CustomerInvoice> {
    return this.http.post(this.url, customerInvoice, {headers: this.headers})
      .toPromise() as Promise<CustomerInvoice>;
  }

  update(customerInvoice: CustomerInvoice): Promise<CustomerInvoice> {
    return this.http.put(this.url, customerInvoice, {headers: this.headers})
      .toPromise() as Promise<CustomerInvoice>;
  }
}
