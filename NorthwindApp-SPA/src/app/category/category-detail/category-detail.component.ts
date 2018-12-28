import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category: Category;

  constructor(
    private http: HttpClient,
    private alertify: AlertifyService,
    private categoryService: CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    this.categoryService.getCategory(+this.route.snapshot.params['id']).subscribe(
      (category: Category) => {
        this.category = category;
      }, error => {
        this.alertify.error(error);
      }
    );
  }
}
