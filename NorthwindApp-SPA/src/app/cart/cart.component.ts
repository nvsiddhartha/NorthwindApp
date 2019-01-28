import { Component, OnInit } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { Order } from '../_models/order';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order: Order;
  totalPrice: number;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.totalPrice = 0;
    this.order = this.orderService.getOrderInCart();
    this.order.orderDetails.map(o => {
      this.totalPrice += o.unitPrice * o.quantity;
    });
  }

  add() {
    this.orderService.addOrder().subscribe(
      data => {
        console.log(data);
        this.orderService.clearCart();
        this.alertify.success('Order Added !');
        this.router.navigate(['/orders/', data.orderId]);
      },
      err => {
        this.alertify.error(err);
      }
    );
  }
}
