import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';
import { Product } from '../../interfaces/product';
import { NotifyService } from 'src/app/utils/services/notify.service';
import { ProductsService } from '../../services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { SupermarketsService } from '../../services/supermarkets.service';
import { Category } from '../../interfaces/category';
import { Supermarket } from '../../interfaces/supermarket';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  createProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    unit: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    supermarket: new FormControl('', [Validators.required]),
  });
  products: Array<Product> = [];
  categories: Array<Category> = [];
  supermarkets: Array<Supermarket> = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(
    private services: ProductsService, 
    private notifyService: NotifyService,
    private categoryServices: CategoriesService,
    private supermarketServices: SupermarketsService,
  ) { }
  
  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.getSupermarkets();
  }

  addProduct() {
    this.modalComponent.openModal();
  }


  getCategories() {
    this.categoryServices.getCategories().subscribe( (resp) => {
      this.categories = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }
  
  getSupermarkets() {
    this.supermarketServices.getSupermarkets().subscribe( (resp) => {
      this.supermarkets = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  getProducts() {
    this.services.getProducts().subscribe( (resp) => {
      this.products = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  createProduct() {

  }
  
  deleteProduct(id: number) {
    this.services.deleteProduct(id).subscribe( (resp) => {
      this.getProducts();
      this.notifyService.notify(resp.message, 'success');
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

}
