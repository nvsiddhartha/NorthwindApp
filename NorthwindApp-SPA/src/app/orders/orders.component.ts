import { Component, OnInit } from '@angular/core';
import { Pagination } from '../_models/pagination';
import { Order } from '../_models/order';
import { OrderService } from '../_services/order.service';
import { AlertifyService } from '../_services/alertify.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  pagination: Pagination;
  orderParams: any = {};
  orders: Order[];
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(
    private orderService: OrderService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-default',
      dateInputFormat: 'MM/DD/YYYY'
    };
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 5,
      totalItems: 0,
      totalPages: 0
    };
    this.getOrders();
  }

  pageChanged(event: PageChangedEvent): void {
    this.pagination.currentPage = event.page;
    this.pagination.itemsPerPage = event.itemsPerPage;
    this.getOrders();
  }

  loadOrders() {
    this.getOrders();
  }

  reset() {
    this.orderParams = {};
    this.getOrders();
  }

  getOrders() {
    this.orderParams.orderDate = new DatePipe('en-US').transform(this.orderParams.orderDate, 'MM/dd/yyyy');
    this.orderService.getOrders(this.pagination.currentPage, this.pagination.itemsPerPage, this.orderParams)
    .subscribe(
      data => {
        this.orders = data.result;
        this.pagination = data.pagination;
      },
      err => {
        this.alertify.error(err);
      });
  }
}
