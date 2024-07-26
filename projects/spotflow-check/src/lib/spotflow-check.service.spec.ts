import { TestBed } from '@angular/core/testing';

import { SpotflowCheckService } from './spotflow-check.service';

describe('SpotflowCheckService', () => {
  let service: SpotflowCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotflowCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
