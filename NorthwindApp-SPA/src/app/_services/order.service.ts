import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../_models/product';
import { Observable } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';
import { Order } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.apiUrl + 'order';

  constructor(private http: HttpClient) {}

  getOrders(page?, itemsPerPage?, orderParams?): Observable<PaginatedResult<Order[]>> {
    const paginatedResult: PaginatedResult<Order[]> = new PaginatedResult<Order[]>();
    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }

    if (orderParams != null) {
      if (orderParams.orderDate != null) {
        params = params.append('orderDate', orderParams.orderDate);
      }
      if (orderParams.employeeId != null) {
        params = params.append('employeeId', orderParams.employeeId);
      }
      if (orderParams.customerId != null) {
        params = params.append('customerId', orderParams.customerId);
      }
    }

    return this.http
      .get<Order[]>(this.baseUrl, { observe: 'response', params })
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
}
