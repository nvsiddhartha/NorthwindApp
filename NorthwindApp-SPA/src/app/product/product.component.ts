import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { ProductService } from '../_services/product.service';
import { AlertifyService } from '../_services/alertify.service';
import { Pagination } from '../_models/pagination';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Category } from '../_models/category';
import { CategoryService } from '../_services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  pagination: Pagination;
  productParams: any = {};
  categories: Category[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private alertify: AlertifyService) {}

  ngOnInit() {
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 5,
      totalItems: 0,
      totalPages: 0
    };
    this.getProducts();
    this.getCategories();
  }

  loadProducts() {
    this.getProducts();
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(
        (data) => {
          this.categories = data;
        },
        (err) => {
          this.alertify.error(err);
        }
      );
  }

  reset() {
    this.productParams = {};
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts(this.pagination.currentPage, this.pagination.itemsPerPage, this.productParams)
      .subscribe(
        data => {
          this.products = data.result;
          this.pagination = data.pagination;
        },
        err => {
          this.alertify.error(err);
        });
  }

  pageChanged(event: PageChangedEvent): void {
    this.pagination.currentPage = event.page;
    this.pagination.itemsPerPage = event.itemsPerPage;
    this.getProducts();
  }
}
