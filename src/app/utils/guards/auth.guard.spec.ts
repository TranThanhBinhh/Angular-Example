import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';

import { authGuard } from './auth.guard';

xdescribe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

});
