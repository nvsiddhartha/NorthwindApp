import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../_models/category';
import { CategoryService } from '../_services/category.service';
import { AlertifyService } from '../_services/alertify.service';
import { Product } from '../_models/product';
import { OrderService } from '../_services/order.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {

  categories: Category[];
  products: Product[];
  categoryId: number;

  constructor(
    private categoryService: CategoryService,
    private orderService: OrderService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  ngOnDestroy() {
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(
      data => {
        this.categories = data;
      },
      err => {
        this.alertify.error(err);
      }
    );
  }

  getProducts() {
    this.categoryService.getProductsByCategory(this.categoryId).subscribe(
      data => {
        this.products = data;
      },
      err => {
        this.alertify.error(err);
      }
    );
  }

  addToCart($event) {
    this.orderService.addToCart($event);
    this.alertify.success('Item added to cart');
  }
}
