import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControlLabeled } from '../../../shared/components/formulary/components/validation/FormControlLabeled';

@Injectable({
  providedIn: 'root'
})
export class FormChangePasswordService {

  constructor(private fb:FormBuilder) { }

  createForm(){
    return this.fb.group({
      current: new FormControlLabeled('Senha atual','',Validators.required),
      new: new FormControlLabeled('Nova senha','',Validators.required),
      confirm: new FormControlLabeled('Confirmação da nova senha','',Validators.required),
    })
  }
}
