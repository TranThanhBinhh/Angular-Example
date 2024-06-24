import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UtilsModule } from 'src/app/utils/utils.module';
import { SupersComponent } from './components/supers/supers.component';
import { SupermarketRoutingModule } from './supermarket-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    SupersComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SupermarketRoutingModule,
    UtilsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductsComponent,
    CategoriesComponent,
    SupersComponent
  ]
})
export class SupermarketModule { }
