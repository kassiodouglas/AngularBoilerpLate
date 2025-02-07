import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function onlyLettersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const alphanumericPattern = /^[\p{L}\p{M} ]+$/u;

    const isValid = alphanumericPattern.test(value);

    return isValid ? null : { onlyLetters: true };
  };
}
