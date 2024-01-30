import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open and close the modal', (done) => {
    // Subscribe to the modalOpen$ observable
    service.modalOpen$.subscribe((isOpen) => {
      if (isOpen) {
        // Expectations when the modal is opened
        expect(isOpen).toBe(true);
        // Trigger the close modal method after a short delay (simulating a modal closing action)
        setTimeout(() => {
          service.closeModal();
        }, 500);
      } else {
        // Expectations when the modal is closed
        expect(isOpen).toBe(false);
        done(); // Call done to indicate that the asynchronous operation is complete
      }
    });
    // Trigger the open modal method
    service.openModal();
  });

});
