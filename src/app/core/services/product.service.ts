import {Injectable} from '@angular/core';
import {Product} from '../../shared/models/product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataSource = new BehaviorSubject<Product>(new Product());
  user = this.dataSource.asObservable();

  constructor() {
  }

  notifyChangeProduct(product: Product): void {
    this.dataSource.next(product);
  }

  getByName(name: string): Promise<Product> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    });
  }

  create(product: Product): Promise<Product> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    });
  }
}
