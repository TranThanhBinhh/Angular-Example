import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  openModal() {
    this.modalComponent.openModal();
  }

}
