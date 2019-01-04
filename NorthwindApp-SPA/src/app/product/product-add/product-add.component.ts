import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = {
    productId: 0,
    productName: null,
    categoryId: null,
    unitPrice: null,
    supplierId: null,
    quantityPerUnit: null,
    unitsInStock: null,
    unitsOnOrder: null,
    reorderLevel: null,
    discontinued: false,
    categoryName: null,
    supplierName: null
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel($event: string) {
    this.router.navigate(['/product']);
  }

}
