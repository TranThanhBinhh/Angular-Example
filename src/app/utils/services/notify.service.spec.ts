import { TestBed } from '@angular/core/testing';

import { NotifyService } from './notify.service';

describe('NotifyService', () => {
  let service: NotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotifyService]
    });
    service = TestBed.inject(NotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should notify with the correct message and styleClass', (done) => {
    const testMessage = 'Test Message';
    const testStyleClass = 'success';
    // Subscribe to the notifications
    service.notify$.subscribe((notification) => {
      // Expectations
      expect(notification).toBeTruthy();
      expect(notification.message).toBe(testMessage);
      expect(notification.styleClass).toBe(testStyleClass);
      done();  // Call done to indicate that the asynchronous operation is complete
    });
    // Trigger the notify method
    service.notify(testMessage, testStyleClass);
  });

});
