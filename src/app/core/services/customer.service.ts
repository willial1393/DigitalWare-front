import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Customer} from '../../shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public readonly url = environment.endpoint + '/customer';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  getById(id: number): Promise<Customer> {
    return this.http.get(this.url + '/' + id)
      .toPromise() as Promise<Customer>;
  }

  getByDocument(document: string): Promise<Customer> {
    return this.http.get(this.url + '/document/' + document)
      .toPromise() as Promise<Customer>;
  }

  create(customer: Customer): Promise<Customer> {
    return this.http.post(this.url, customer, {headers: this.headers})
      .toPromise() as Promise<Customer>;
  }

  update(customer: Customer): Promise<Customer> {
    return this.http.put(this.url, customer, {headers: this.headers})
      .toPromise() as Promise<Customer>;
  }
}
