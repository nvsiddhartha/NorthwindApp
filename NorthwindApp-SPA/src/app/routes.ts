import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'product', component: ProductComponent },
    { path: 'orders', component: OrdersComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
