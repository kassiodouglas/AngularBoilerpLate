import { TestBed } from '@angular/core/testing';

import { FormChangePasswordService } from './form-change-password.service';

describe('FormChangePasswordService', () => {
  let service: FormChangePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormChangePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
