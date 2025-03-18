import { NotifyService } from './../../../shared/services/notiflix/notify.service';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlLabeled } from '../../../shared/components/formulary/components/validation/FormControlLabeled';
import { confirmPasswordValidator } from '../../../shared/components/formulary/components/validation/validators/ConfirmPasswordValidator';
import { BlockService } from '../../../shared/services/notiflix/block.service';

@Injectable({
  providedIn: 'root'
})
export class FormChangePasswordService {

  formMe!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private notifyService:NotifyService,
    private blockService:BlockService,
  ) {}

  createForm(): void{
    this.formMe = this.fb.group({
      current: new FormControlLabeled('Senha atual','',[Validators.required, Validators.minLength(5)]),
      new: new FormControlLabeled('Nova senha','',[Validators.required, Validators.minLength(5)]),
      confirm: new FormControlLabeled('Confirmação da nova senha','',[Validators.required, Validators.minLength(5), confirmPasswordValidator('new', 'Nova senha')]),
    })
  }

  submit(){
    this.blockService.block('#formChangePasswordServiceBtnSubmit');

    setTimeout(()=>{
      this.blockService.unblock('#formChangePasswordServiceBtnSubmit');
      this.notifyService.success('Formulário enviado!');
    },3000);
  }

  get valid(): boolean{
    return this.formMe.valid;
  }
}
