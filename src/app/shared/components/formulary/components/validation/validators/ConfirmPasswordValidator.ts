import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(passwordField: string, labelOtherField:String): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control.parent;
    if (!formGroup) {
      return null;
    }

    const password = formGroup.get(passwordField)?.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { confirmPasswordValidator: true };
  };
}
