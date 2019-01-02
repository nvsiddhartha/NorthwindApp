import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/_services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  category: Category = {
    categoryId: 0,
    categoryName: '',
    description: '',
    products: null };

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit() {
  }

  add() {
    this.categoryService.addCategory(this.category)
    .subscribe(data => {
      this.alertify.success('Category Added !');
      this.router.navigate(['/category/', data.categoryId]);
    }, (err) => {
      this.alertify.error(err);
    });
  }

  cancel() {
    this.router.navigate(['/category']);
  }
}
