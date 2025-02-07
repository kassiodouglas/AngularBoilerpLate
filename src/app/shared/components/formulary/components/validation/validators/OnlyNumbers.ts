import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function onlyNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const alphanumericPattern = /^[0-9 ]*$/;

    const isValid = alphanumericPattern.test(value);

    return isValid ? null : { onlyNumbers: true };
  };
}
