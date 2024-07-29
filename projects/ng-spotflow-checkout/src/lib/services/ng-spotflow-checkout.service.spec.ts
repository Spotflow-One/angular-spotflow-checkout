import { TestBed } from '@angular/core/testing';

import { NgSpotflowCheckoutService } from './ng-spotflow-checkout.service';

describe('NgSpotflowCheckoutService', () => {
  let service: NgSpotflowCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSpotflowCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
