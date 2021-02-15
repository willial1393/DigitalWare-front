import {Injectable} from '@angular/core';
import {Product} from '../../shared/models/product';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public readonly url = environment.endpoint + '/product';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  getById(id: number): Promise<Product> {
    return this.http.get(this.url + '/' + id)
      .toPromise() as Promise<Product>;
  }

  getByName(name: string): Promise<Product> {
    return this.http.get(this.url + '/name/' + name)
      .toPromise() as Promise<Product>;
  }

  getByNameContain(name: string): Promise<Product[]> {
    return this.http.get(this.url + '/nameContain/' + name)
      .toPromise() as Promise<Product[]>;
  }

  create(product: Product): Promise<Product> {
    return this.http.post(this.url, product, {headers: this.headers})
      .toPromise() as Promise<Product>;
  }

  update(product: Product): Promise<Product> {
    return this.http.put(this.url, product, {headers: this.headers})
      .toPromise() as Promise<Product>;
  }

  addUnits(data: { productId: number, units: number, unitPrice: number }): Promise<boolean> {
    return this.http.post(this.url + '/units', data, {headers: this.headers})
      .toPromise() as Promise<boolean>;
  }
}
