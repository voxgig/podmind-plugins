import { TestBed } from '@angular/core/testing';

import { PodwAngularService } from './podw-angular.service';

describe('PodwAngularService', () => {
  let service: PodwAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodwAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
