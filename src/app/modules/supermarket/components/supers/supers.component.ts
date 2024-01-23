import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';

@Component({
  selector: 'app-supers',
  templateUrl: './supers.component.html',
  styleUrls: ['./supers.component.scss']
})
export class SupersComponent {

  createSupermarketForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  addSupermarket() {
    this.modalComponent.openModal();
  }

  createSupermarket() {
    if(this.createSupermarketForm.valid) {
      console.log(this.createSupermarketForm.value);
      this.createSupermarketForm.reset();
    } else {
      console.log('Error');
    }
  }

}
