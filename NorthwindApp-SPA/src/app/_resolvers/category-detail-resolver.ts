import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../_models/category';
import { CategoryService } from '../_services/category.service';

@Injectable()
export class CategoryDetailResolver implements Resolve<Category> {
    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Category> {
        return this.categoryService.getCategory(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/category']);
                return of(null);
            })
        );
    }
}
