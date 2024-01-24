import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';
import { Product } from '../../interfaces/product';
import { NotifyService } from 'src/app/utils/services/notify.service';
import { ProductsService } from '../../services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(private services: ProductsService, private notifyService: NotifyService) { }
  
  ngOnInit() {
    this.getProducts();
  }

  addProduct() {
    this.modalComponent.openModal();
  }


  getProducts() {
    this.services.getProducts().subscribe( (resp) => {
      console.log(resp);
    }, (error) => {
      console.error(error);
    })
  }

  createProduct() {

  }
  
  deleteProduct(id: number) {
    this.services.deleteProduct(id).subscribe( (resp) => {
      console.log(resp);
      this.getProducts();
      this.notifyService.notify(resp.message, 'success');
    }, (error) => {
      console.error(error);
    })
  }

}
