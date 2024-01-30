import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SupermarketsService } from './supermarkets.service';
import { environment } from 'src/environments/environment';

describe('SupermarketsService', () => {
  let service: SupermarketsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SupermarketsService]
    });
    service = TestBed.inject(SupermarketsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
