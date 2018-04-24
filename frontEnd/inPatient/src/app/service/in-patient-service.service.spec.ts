import { TestBed, inject } from '@angular/core/testing';

import { InPatientServiceService } from './in-patient-service.service';

describe('InPatientServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InPatientServiceService]
    });
  });

  it('should be created', inject([InPatientServiceService], (service: InPatientServiceService) => {
    expect(service).toBeTruthy();
  }));
});
