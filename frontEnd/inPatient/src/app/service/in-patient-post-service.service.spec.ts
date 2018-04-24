import { TestBed, inject } from '@angular/core/testing';

import { InPatientPostServiceService } from './in-patient-post-service.service';

describe('InPatientPostServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InPatientPostServiceService]
    });
  });

  it('should be created', inject([InPatientPostServiceService], (service: InPatientPostServiceService) => {
    expect(service).toBeTruthy();
  }));
});
