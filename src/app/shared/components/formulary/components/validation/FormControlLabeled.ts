import { FormControl } from "@angular/forms";

export class FormControlLabeled extends FormControl {
  label: string;

  constructor(label: string, formState: any, validatorOrOpts?: any, asyncValidator?: any) {
    super(formState, validatorOrOpts, asyncValidator);
    this.label = label;
  }
}
