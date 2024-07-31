import { TestBed } from '@angular/core/testing';

import { SpotflowAngularCheckoutService } from './spotflow-angular-checkout.service';

describe('SpotflowAngularCheckoutService', () => {
  let service: SpotflowAngularCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotflowAngularCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
