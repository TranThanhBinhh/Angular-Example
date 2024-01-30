import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent]
    });
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show modal when openModal is called', () => {
    component.openModal();
    fixture.detectChanges();
    const modalElement: HTMLElement = fixture.nativeElement.querySelector('.modal');
    expect(modalElement).toBeTruthy();
  });

  it('should close modal when closeModal is called', () => {
    component.openModal();
    fixture.detectChanges();
    
    component.closeModal();
    fixture.detectChanges();

    const modalElement: HTMLElement = fixture.nativeElement.querySelector('.modal');
    expect(modalElement).toBeFalsy();
  });

});
