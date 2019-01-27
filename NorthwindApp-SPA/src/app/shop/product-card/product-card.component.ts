import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { OrderDetail } from 'src/app/_models/order';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCartEvent = new EventEmitter<OrderDetail>();

  orderDetail: OrderDetail;

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.orderDetail = {
      productId: this.product.productId,
      discount: 0,
      productName: this.product.productName,
      orderId: 0,
      quantity: 1,
      unitPrice: this.product.unitPrice
    };

    this.addToCartEvent.emit(this.orderDetail);
  }
}
