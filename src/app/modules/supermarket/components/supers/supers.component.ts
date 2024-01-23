import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';
import { SupermarketsService } from '../../services/supermarkets.service';
import { Supermarket } from '../../interfaces/supermarket';

@Component({
  selector: 'app-supers',
  templateUrl: './supers.component.html',
  styleUrls: ['./supers.component.scss']
})
export class SupersComponent implements OnInit {

  createSupermarketForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  supermarkets: Array<Supermarket> = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(private services: SupermarketsService) { }
  
  ngOnInit() {
    this.getSupermarkets();
  }

  getSupermarkets() {
    this.services.getSupermarkets().subscribe( (resp) => {
      this.supermarkets = resp.data;
    }, (error) => {
      console.error(error);
    })
  }

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

  deleteSupermarket(id: number) {
    console.log('Supermarket deleted: ', id);
  }

}
