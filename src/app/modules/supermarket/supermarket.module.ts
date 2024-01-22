import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupermarketRoutingModule } from './supermarket-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SupersComponent } from './components/supers/supers.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
    SupersComponent
  ],
  imports: [
    CommonModule,
    SupermarketRoutingModule,
    UtilsModule,
    HttpClientModule
  ],
  exports: [
    ProductsComponent,
    CategoriesComponent,
    SupersComponent
  ]
})
export class SupermarketModule { }
