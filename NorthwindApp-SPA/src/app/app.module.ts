import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { CategoryService } from './_services/category.service';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';

@NgModule({
   declarations: [
      AppComponent,
      CategoryComponent,
      NavComponent,
      ProductComponent,
      OrdersComponent,
      HomeComponent,
      CategoryDetailComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      ErrorInterceptorProvider,
      AlertifyService,
      CategoryService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
