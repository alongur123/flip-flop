/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComplainService } from './complain.service';

describe('Service: Complain', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplainService]
    });
  });

  it('should ...', inject([ComplainService], (service: ComplainService) => {
    expect(service).toBeTruthy();
  }));
});
