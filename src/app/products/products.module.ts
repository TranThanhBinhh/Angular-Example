import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { UtilsModule } from '../utils/utils.module';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    UtilsModule
  ], 
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
