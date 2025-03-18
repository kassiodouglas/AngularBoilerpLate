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

  constructor(
    public formChangePasswordService:FormChangePasswordService,
    public darkModeService:DarkModeService,
    public meService:MeService,
  ){
    this.formChangePasswordService.createForm();
  }

  toggleTheme(){
    this.darkModeService.toggleDarkMode();
  }

}
