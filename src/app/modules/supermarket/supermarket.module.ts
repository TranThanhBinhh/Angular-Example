import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupermarketRoutingModule } from './supermarket-routing.module';
import { SupermarketComponent } from './supermarket.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SupersComponent } from './components/supers/supers.component';
import { UtilsModule } from 'src/app/utils/utils.module';


@NgModule({
  declarations: [
    SupermarketComponent,
    ProductsComponent,
    CategoriesComponent,
    SupersComponent
  ],
  imports: [
    CommonModule,
    SupermarketRoutingModule,
    UtilsModule
  ],
  exports: [
    ProductsComponent,
    CategoriesComponent,
    SupersComponent
  ]
})
export class SupermarketModule { }
