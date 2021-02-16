import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from '../_services/order.service';
import { Observable, Subscription } from 'rxjs';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  @select() order$;
  subscription: Subscription;
  noOfItems: string;

  get noOfItems$(): Observable<number> {
    return this.orderService.noOfItems$;
  }

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
