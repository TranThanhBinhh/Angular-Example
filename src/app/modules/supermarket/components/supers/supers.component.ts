import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Supermarket } from '../../interfaces/supermarket';
import { NotifyService } from 'src/app/utils/services/notify.service';
import { SupermarketsService } from '../../services/supermarkets.service';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';


@Component({
  selector: 'app-supers',
  templateUrl: './supers.component.html',
  styleUrls: ['./supers.component.scss']
})
export class SupersComponent implements OnInit {

  createSupermarketForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  updateSupermarketForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  supermarkets: Array<Supermarket> = [];
  isNew: boolean = false;
  isUpdate: boolean = false;
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(private services: SupermarketsService, private notifyService: NotifyService) { }
  
  ngOnInit() {
    this.getSupermarkets();
  }
  
  addSupermarket() {
    this.isNew = true;
    this.modalComponent.openModal();
  }

  editSupermarket(id: number) {
    this.isUpdate = true;
    this.modalComponent.openModal();
  }

  closeModal() {
    this.isNew = false;
    this.isUpdate = false;
  }


  getSupermarkets() {
    this.services.getSupermarkets().subscribe( (resp) => {
      this.supermarkets = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  createSupermarket() {
    const supermarketName = this.createSupermarketForm.value.name;    
    if (supermarketName && this.createSupermarketForm.valid) {
      this.services.postSupermarket(supermarketName).subscribe(
        (resp) => {
          this.getSupermarkets();
          this.modalComponent.closeModal();
          this.isNew = false;
          this.notifyService.notify(resp.message, 'success');
        },
        (error) => {
          this.notifyService.notify(error.message, 'error');
          console.error(error);
        }
      );
      this.createSupermarketForm.reset();
    } else {
      this.notifyService.notify('Empty fields.', 'error');
    }
  }

  updateSupermarket() {
    
  }

  deleteSupermarket(id: number) {
    this.services.deleteSupermarket(id).subscribe( (resp) => {
      this.getSupermarkets();
      this.notifyService.notify(resp.message, 'success');
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

}
