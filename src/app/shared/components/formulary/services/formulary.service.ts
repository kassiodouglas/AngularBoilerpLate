import { DarkModeService } from './../../../services/dark-mode.service';
import { Host, inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { ControlContainer, FormArray, FormGroup } from '@angular/forms';
import { FormControlLabeled } from '../components/validation/FormControlLabeled';
import Notiflix from 'notiflix';

@Injectable()
export class FormularyService {

  constructor(
    private darkModeService:DarkModeService
  ){}

  checkFormularyErrors(form: FormGroup | FormArray, parentLabel: string = ''): string[] {
    const errors: string[] = [];

    Object.keys(form.controls).forEach((field) => {
      const control = form.get(field);

      // Se o controle for um FormGroup ou FormArray, chamamos o método recursivamente
      if (control instanceof FormGroup || control instanceof FormArray) {
        const groupLabel = parentLabel ? `${field}` : field;
        errors.push(...this.checkFormularyErrors(control, groupLabel));
      } else if (control && control.errors) {
        const controlLabel = (control as FormControlLabeled).label || field;
        const label = parentLabel ? `${controlLabel}` : controlLabel;

        Object.keys(control.errors).forEach((errorKey) => {
          const errorMessage = this.getValidationErrors(
            errorKey,
            control.errors![errorKey],
            label
          );
          errors.push(errorMessage);
        });
      }
    });

    return errors;
  }

  getValidationErrors(
    errorKey: string,
    errorValue: any,
    label: string
  ): string {
    const errorMessages: any = {
      required: `Campo '${label}' é obrigatório.`,
      email: 'Email inválido.',
      minlength: `O comprimento mínimo é ${errorValue.requiredLength} caracteres para o campo '${label}'.`,
      maxlength: `O comprimento máximo é ${errorValue.requiredLength} caracteres para o campo '${label}'.`,
      mask: `Texto deve ser como: ${errorValue.requiredMask}`,
      dateAfterNow: `Data menor que agora para o campo '${label}'.`,
      exactLength: `Necessário ${errorValue.requiredLength} caracteres. Digitado ${errorValue.actualLength} no campo '${label}'.`,
      pattern: `Caracter inválido encontrado no campo '${label}'.`,
      onlyLettersNumbers: `Somente letras e números permitidos no campo '${label}'.`,
      onlyLetters: `Somente letras são permitidos no campo '${label}'.`,
      onlNumbers: `Somente números são permitidos no campo '${label}'.`,
    };

    return errorMessages[errorKey] || `Erro: ${errorKey}: ${errorValue}`;
  }

  setLoader(selector:string) {
    Notiflix.Block.init({
      backgroundColor: this.darkModeService.isDarkMode ? 'rgba(23, 33, 54,0.9)' : 'rgba(255,255,255,0.9)',
      svgColor: this.darkModeService.isDarkMode ? '#ffffff' : '#73809c',
    });
    Notiflix.Block.dots(selector)
  }

  removeLoader(selector:string) {
    Notiflix.Block.remove(selector)
  }

  generateUniqueId(prefix: string): string {
    const uniqueId = `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    return uniqueId;
  }

}
