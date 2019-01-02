import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/category';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category;
  categoryForm: FormGroup;

  constructor(
    private http: HttpClient,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private fb: FormBuilder) { }

    ngOnInit() {
      this.route.data.subscribe(data => {
        this.category = data['category'];
        this.createCategoryForm();
      });
    }

    createCategoryForm() {
      this.categoryForm = this.fb.group({
        categoryId: [this.category.categoryId, Validators.required],
        categoryName: [this.category.categoryName, [Validators.required, Validators.maxLength(15)]],
        description: [this.category.description, Validators.required],
      });
    }

    edit() {
      this.categoryService.editCategory(this.category.categoryId, this.categoryForm.value)
        .subscribe(data => {
          this.alertify.success('Category Edited !');
          this.router.navigate(['/category/', data.categoryId]);
        }, (err) => {
          this.alertify.error(err);
        });
    }

    cancel() {
      this.router.navigate(['/category/', this.category.categoryId]);
    }
}
