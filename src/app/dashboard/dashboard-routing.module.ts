import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SupersComponent } from '../modules/supermarket/components/supers/supers.component';
import { ProductsComponent } from '../modules/supermarket/components/products/products.component';
import { CategoriesComponent } from '../modules/supermarket/components/categories/categories.component';


const routes: Routes = [{ path: '', component: DashboardComponent, children: [
  { path: 'supermarkets', component: SupersComponent, outlet: 'dashboard' },
  { path: 'categories', component: CategoriesComponent, outlet: 'dashboard' },
  { path: 'products', component: ProductsComponent, outlet: 'dashboard' },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
