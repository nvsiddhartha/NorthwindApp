import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoriesResolver } from './_resolvers/categories-resolver';
import { CategoryDetailResolver } from './_resolvers/category-detail-resolver';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            {path: 'category', component: CategoryComponent,
                resolve: {categories: CategoriesResolver}},
            {path: 'category/new', component: CategoryAddComponent},
            {path: 'category/:id', component: CategoryDetailComponent,
                resolve: {category: CategoryDetailResolver}},
            {path: 'category/edit/:id', component: CategoryEditComponent,
                resolve: {category: CategoryDetailResolver}},
        ]
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'product', component: ProductComponent },
            { path: 'product/new', component: ProductAddComponent },
            { path: 'product/:id', component: ProductEditComponent },
        ]
    },
    // { path: 'product', component: ProductComponent },
    { path: 'orders', component: OrdersComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
