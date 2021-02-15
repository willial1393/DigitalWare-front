import {Injectable} from '@angular/core';
import {Stock} from '../../shared/models/stock';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  url = environment.endpoint + '/stock';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  get(): Stock[] {
    return [];
  }

  getById(id: number): Promise<Stock> {
    return this.http.get(this.url + '/' + id)
      .toPromise() as Promise<Stock>;
  }
}
