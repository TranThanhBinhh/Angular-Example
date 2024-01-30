import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NotifyComponent } from './notify.component';
import { NotifyService } from '../../services/notify.service';

describe('NotifyComponent', () => {
  let component: NotifyComponent;
  let fixture: ComponentFixture<NotifyComponent>;
  let notifyService: NotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotifyComponent],
      providers: [NotifyService]
    });
    fixture = TestBed.createComponent(NotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    notifyService = TestBed.inject(NotifyService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display notification message and class on notification', fakeAsync(() => {
    const testMessage = 'Test Message';
    const testStyleClass = 'success';
    notifyService.notify(testMessage, testStyleClass);
    // Trigger change detection
    fixture.detectChanges();
    // Expectations
    expect(component.message).toBe(testMessage);
    expect(component.notifyClass).toBe(testStyleClass);
    // Wait for the timeout to complete
    tick(3000);
    // Trigger change detection again
    fixture.detectChanges();
    // Expectations after timeout
    expect(component.message).toBe('');
    expect(component.notifyClass).toBe('');
  }));

});
