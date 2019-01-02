import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../_models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl + 'product';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/' + id );
  }

  addProduct(model: Product): Observable<any> {
    return this.http.post<Product>(this.baseUrl + '/add', model);
  }

  editProduct(id: number, model: Product): Observable<any> {
    return this.http.post<Product>(this.baseUrl + '/' + id, model);
  }
}
