import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../_models/category';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl + 'category';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.baseUrl + '/' + id );
  }

  addCategory(model: Category): Observable<any> {
    return this.http.post<Category>(this.baseUrl + '/add', model);
  }

  editCategory(id: number, model: Category): Observable<any> {
    return this.http.post<Category>(this.baseUrl + '/' + id, model);
  }
}
