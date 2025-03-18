import { TestBed } from '@angular/core/testing';

import { FormResetPasswordService } from './form-reset-password.service';

describe('FormResetPasswordService', () => {
  let service: FormResetPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormResetPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
