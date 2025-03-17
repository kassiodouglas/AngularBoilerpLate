import { DarkModeService } from './../../../../shared/services/dark-mode.service';
import { FormChangePasswordService } from '../../services/form-change-password.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MeService } from '../../services/me.service';

@Component({
  selector: 'page-me',
  standalone:false,
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent {

  formMe:FormGroup;

  constructor(
    private formChangePasswordService:FormChangePasswordService,
    public darkModeService:DarkModeService,
    public meService:MeService,
  ){
    this.formMe = this.formChangePasswordService.createForm();
  }

  toggleTheme(){
    this.darkModeService.toggleDarkMode();
  }

}
