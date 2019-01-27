import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  noOfItems: string;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.subscription = this.orderService.cartData.subscribe(
      (order) => {
        let ct = 0;
        order.orderDetails.map(
          o => {
            ct += o.quantity;
          }
        );
        this.noOfItems = ct.toString();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
