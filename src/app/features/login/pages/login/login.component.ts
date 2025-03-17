import { Component } from '@angular/core';
import { FormControlLabeled } from '../../../../shared/components/formulary/components/validation/FormControlLabeled';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DarkModeService } from '../../../../shared/services/dark-mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form:FormGroup;

  constructor(
    private fb:FormBuilder,
    private darkModeService:DarkModeService,
    private router:Router,
  ){
    this.form = this.initializeForm();
  }

  // cria os campos do formulario
  initializeForm(){
    return this.fb.group({
      login:new FormControlLabeled("Login ou Email", null, [Validators.required]),
      password:new FormControlLabeled("Senha", null, [Validators.required, Validators.minLength(5)]),
    })
  }

  // faz a submissão dos dados do formulário
  submitForm(){
    this.router.navigate(['/'])
  }

  get logoPath(){
    const path = "images/logos";
    return this.darkModeService.isDarkMode
      ? `${path}/litwo_color_theme_dark.svg`
      : `${path}/litwo_color_theme_white.svg`
  }


}
