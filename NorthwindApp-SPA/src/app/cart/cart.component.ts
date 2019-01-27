import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { Order } from '../_models/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  order: Order;
  totalPrice: number;

  constructor(
    private orderService: OrderService) { }

  ngOnInit() {
    this.totalPrice = 0;
    this.order = this.orderService.getOrderInCart();
    this.order.orderDetails.map(
      o => {
        this.totalPrice += o.unitPrice * o.quantity;
      }
    );
  }
}
