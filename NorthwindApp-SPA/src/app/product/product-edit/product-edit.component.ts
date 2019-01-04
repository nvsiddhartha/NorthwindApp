import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private alertify: AlertifyService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.GetProduct(+this.route.snapshot.params['id']);
  }

  GetProduct(id: number) {
    this.productService.getProduct(id)
    .subscribe(
      (data) => {
        this.product = data;
      },
      (err) => {
        this.alertify.error(err);
      }
    );
  }

  cancel($event: string) {
    this.router.navigate(['/product']);
  }
}
