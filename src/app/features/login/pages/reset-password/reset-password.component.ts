import { FormResetPasswordService } from './../../services/form-reset-password.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'page-reset-password',
  standalone: false,

  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  formResetPassword:FormGroup;

  constructor(
    public formResetPasswordService:FormResetPasswordService
  ){
    this.formResetPassword = this.formResetPasswordService.createForm();
  }

}
