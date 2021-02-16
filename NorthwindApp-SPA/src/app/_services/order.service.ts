import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../_models/product';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';
import { Order, OrderDetail } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.apiUrl + 'order';

  private _cartDataSource = new BehaviorSubject<Order>(this.initializeOrder());
  cartData = this._cartDataSource.asObservable();

  private _noOfItems$ = new BehaviorSubject<number>(this.getNoOfItemsInCart());
  get noOfItems$(): Observable<number> {
    return this._noOfItems$.asObservable();
  }

  private order: Order;
  private noOfItems: number;

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

  getOrder(id): Observable<Order> {
    return this.http.get<Order>(this.baseUrl + '/' + id );
  }

  addOrder(): Observable<any> {
    this.order.customerId = 'VINET';
    this.order.orderDate = new Date();
    return this.http.post<Order>(this.baseUrl + '/add', this.order);
  }

  initializeOrder(): Order {
    if (sessionStorage.getItem('cart') == null) {
      this.order = {
        customerId: '',
        orderId: 0,
        employeeId: null,
        customer: null,
        employee: null,
        freight: null,
        orderDate: null,
        orderDetails: [],
        requiredDate: null,
        shipAddress: null,
        shipCity: null,
        shipCountry: null,
        shipPostalCode: null,
        shipRegion: null,
        shipVia: null,
        shippedDate: null
      };
    } else {
      this.order = JSON.parse(sessionStorage.getItem('cart'));
    }

    return this.order;
  }

  getNoOfItemsInCart(): number {
    if (sessionStorage.getItem('cart') == null) {
      return 0;
    } else {
      this.order = JSON.parse(sessionStorage.getItem('cart'));
      let ct = 0;
        this.order.orderDetails.map(
          o => {
            ct += o.quantity;
          }
        );
        return ct;
    }
  }

  addToCart(item: OrderDetail) {
    // push item
    let itemExists = false;
    this.order.orderDetails.map(
      detail => {
        if (detail.productId === item.productId) {
          itemExists = true;
          detail.quantity++;
        }
      }
    );
    if (!itemExists) {
      this.order.orderDetails.push(item);
    }

    // update sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(this.order));
    // notify suscribers
    this._cartDataSource.next(this.order);
    this._noOfItems$.next(this.getNoOfItemsInCart());
  }

  getOrderInCart(): Order {
    return this.order;
  }

  clearCart() {
    if (sessionStorage.getItem('cart') != null) {
      sessionStorage.removeItem('cart');
    }
    this.initializeOrder();
    // notify suscribers
    this._cartDataSource.next(this.order);

    this._noOfItems$.next(0);
  }
}
