import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function exactLengthValidator(exactLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    return value.length === exactLength ? null : { exactLength: { requiredLength: exactLength, actualLength: value.length } };
  };
}
