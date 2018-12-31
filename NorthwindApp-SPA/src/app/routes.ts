import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoriesResolver } from './_resolvers/categories-resolver';
import { CategoryDetailResolver } from './_resolvers/category-detail-resolver';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            {path: 'category', component: CategoryComponent,
                resolve: {categories: CategoriesResolver}},
            {path: 'category/:id', component: CategoryDetailComponent,
                resolve: {category: CategoryDetailResolver}},
        ]
    },
    { path: 'product', component: ProductComponent },
    { path: 'orders', component: OrdersComponent },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
