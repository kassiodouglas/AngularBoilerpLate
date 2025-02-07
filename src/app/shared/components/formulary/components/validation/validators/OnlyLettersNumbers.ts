import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function onlyLettersNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const alphanumericPattern = /^[\p{L}\p{M}0-9 ]+$/u;

    const isValid = alphanumericPattern.test(value);

    return isValid ? null : { onlyLettersNumbers: true };
  };
}
