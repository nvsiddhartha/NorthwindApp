import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/_models/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order;

  constructor(
    private orderService: OrderService,
    private alertify: AlertifyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.GetOrder(+this.route.snapshot.params['id']);
  }

  GetOrder(id: number) {
    this.orderService.getOrder(id)
    .subscribe(
      (data) => {
        this.order = data;
      },
      (err) => {
        this.alertify.error(err);
      }
    );
  }

  Cancel() {
    this.router.navigate(['/orders']);
  }
}
