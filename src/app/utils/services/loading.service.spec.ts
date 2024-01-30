import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show and hide loader correctly', () => {
    // Subscribe to the isLoading$ observable
    let isLoading: boolean | undefined;
    const subscription = service.isLoading$.subscribe((value) => {
      isLoading = value;
    });
    // Trigger the showLoader method
    service.showLoader();
    // Expectations when the loader is shown
    expect(isLoading).toBe(true);
    // Trigger the hideLoader method
    service.hideLoader();
    // Expectations when the loader is hidden
    expect(isLoading).toBe(false);
    // Unsubscribe to prevent memory leaks
    subscription.unsubscribe();
  });

});
