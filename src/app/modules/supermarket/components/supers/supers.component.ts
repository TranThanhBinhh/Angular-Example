import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/utils/components/modal/modal.component';
import { SupermarketsService } from '../../services/supermarkets.service';
import { Supermarket } from '../../interfaces/supermarket';
import { NotifyService } from 'src/app/utils/services/notify.service';

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

  constructor(private services: SupermarketsService, private notifyService: NotifyService) { }
  
  ngOnInit() {
    this.getSupermarkets();
  }
  
  addSupermarket() {
    this.modalComponent.openModal();
  }


  getSupermarkets() {
    this.services.getSupermarkets().subscribe( (resp) => {
      this.supermarkets = resp.data;
    }, (error) => {
      console.error(error);
    })
  }

  createSupermarket() {
    const supermarketName = this.createSupermarketForm.value.name;    
    if (supermarketName && this.createSupermarketForm.valid) {
      this.services.postSupermarket(supermarketName).subscribe(
        (resp) => {
          console.log(resp);
          this.getSupermarkets();
          this.modalComponent.closeModal();
          this.notifyService.notify(resp.message);
        },
        (error) => {
          console.error(error);
        }
      );
      this.createSupermarketForm.reset();
    } else {
      console.log('Error: invalid form');
    }
  }

  deleteSupermarket(id: number) {
    this.services.deleteSupermarket(id).subscribe( (resp) => {
      console.log(resp);
      this.getSupermarkets();
    }, (error) => {
      console.error(error);
    })
  }

}
