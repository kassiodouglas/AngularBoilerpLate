import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateAfterNowValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const currentValue = control.value;
    if (currentValue) {
      const currentDate = new Date(currentValue);
      const now = new Date();

      if (currentDate <= now) {
        return { dateAfterNow: true };
      }
    }
    return null;
  };
}
