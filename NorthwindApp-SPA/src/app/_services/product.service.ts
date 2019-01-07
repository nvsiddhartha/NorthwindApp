import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../_models/product';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiUrl + 'product';

  constructor(private http: HttpClient) { }

  getProducts(page?, itemsPerPage?, productParams?): Observable<PaginatedResult<Product[]>> {
    const paginatedResult: PaginatedResult<Product[]> = new PaginatedResult<Product[]>();
    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (productParams != null) {
      if (productParams.productName != null) {
        params = params.append('productName', productParams.productName);
      }
      if (productParams.categoryId != null) {
        params = params.append('categoryId', productParams.categoryId);
      }
    }

    return this.http.get<Product[]>(this.baseUrl, { observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        })
      );
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
