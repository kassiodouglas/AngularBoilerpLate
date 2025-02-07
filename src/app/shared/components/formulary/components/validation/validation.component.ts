import { Component, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { FormControlLabeled } from './FormControlLabeled';
import { FormularyService } from '../../services/formulary.service';

@Component({
  selector: 'validation',
  standalone: false,
  templateUrl: './validation.component.html',
})
export class ValidationComponent {
  @Input() formGroup!:FormGroup|null;
  @Input() control!:FormControlLabeled|null;

  constructor(private formularyService: FormularyService) {}

  getErrors(errors: ValidationErrors, control: FormControlLabeled): string[] {
    if (!errors) {
      return [];
    }

    return Object.keys(errors).map((key) =>
      this.formularyService.getValidationErrors(
        key,
        errors[key],
        control.label || key
      )
    );
  }
}
