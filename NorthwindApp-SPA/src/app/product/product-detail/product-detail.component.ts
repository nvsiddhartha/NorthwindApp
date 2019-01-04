import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';
import { SupplierService } from 'src/app/_services/supplier.service';
import { Supplier } from 'src/app/_models/supplier';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  @Input() isNew: boolean;
  @Output() cancelEvent = new EventEmitter<string>();
  productForm: FormGroup;
  categories: Category[];
  suppliers: Supplier[];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createProductForm();
    this.getCategories();
    this.getSuppliers();
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

  getSuppliers() {
    this.supplierService.getSuppliers()
      .subscribe(
        (data) => {
          this.suppliers = data;
        },
        (err) => {
          this.alertify.error(err);
        }
      );
  }

  createProductForm() {
    this.productForm = this.fb.group({
      productId: [{ value: this.product.productId, disabled: true }],
      categoryId: [this.product.categoryId, Validators.required],
      productName: [this.product.productName, Validators.required],
      unitPrice: [this.product.unitPrice],
      supplierId: [this.product.supplierId],
      quantityPerUnit: [this.product.quantityPerUnit],
      unitsInStock: [this.product.unitsInStock],
      unitsOnOrder: [this.product.unitsOnOrder],
      reorderLevel: [this.product.reorderLevel],
      discontinued: [this.product.discontinued]
    });
  }

  submit() {
    console.log(this.isNew);
    console.log(this.productForm.getRawValue());

    if (this.isNew) {
      this.productService.addProduct(this.productForm.getRawValue())
        .subscribe(data => {
          this.alertify.success('Product Added !');
          this.router.navigate(['/product/', data.productId]);
        }, (err) => {
          this.alertify.error(err);
        });
    } else {
      this.productService.editProduct(this.product.productId, this.productForm.getRawValue())
        .subscribe(data => {
          this.alertify.success('Product Edited !');
          this.router.navigate(['/product/', data.productId]);
        }, (err) => {
          this.alertify.error(err);
        });
    }
  }

  cancel() {
    this.cancelEvent.emit('Cancelled ...');
  }
}
