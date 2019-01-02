import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private alertify: AlertifyService) {}

  ngOnInit() {
    this.GetProducts();
  }

  GetProducts() {
    this.productService.getProducts()
    .subscribe(
      data => {
        this.products = data;
      },
      err => {
        this.alertify.error(err);
      });
  }
}
