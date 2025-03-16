import { DarkModeService } from './../../../../services/dark-mode.service';
import { FormularyService } from '../../services/formulary.service';
import { Component, Host, Input, OnInit, Optional, SimpleChanges, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormControlLabeled } from '../validation/FormControlLabeled';

@Component({
  selector: 'inputy',
  standalone: false,
  templateUrl: './inputy.component.html',
})
export class InputyComponent implements OnInit {
  @Input({ required: true }) label!: string;
  @Input() type: string = 'text';
  @Input() tooltip: string = '';
  @Input({ required: true }) controlName!: string;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() debug: boolean = false;
  @Input() maskInputy!: 'money' | 'cpf' | 'cnpj' | 'phone' | 'rg' | 'date' | 'datetime' | 'cep' | 'credit-card' | 'time'| 'percent'|'ip';

  id!: string;
  loaderId!: string;
  hasErrors: boolean = false;
  initialType: string = 'text';
  prefix: string = '';
  suffix: string = '';
  thousandSeparator:string = ''

  classInput = `
    focus:border-2 focus:border-purple-500
    disabled:cursor-not-allowed
    disabled:opacity-50
    px-2.5
    pb-2.5
    pt-2
    w-full
    md:text-sm
    text-gray-900
    rounded-lg
    border-1
    border-gray-300
    hover:border-blue-500
    appearance-none
    peer
    bg-slate-50
    cursor-default
    block
    dark:text-white
    dark:border-gray-600
    dark:focus:border-blue-500
    dark:bg-slate-800
    dark:hover:border-blue-400
    focus:outline-none
    focus:ring-0
    focus:border-blue-600
    `;
  classLabel = "truncate ... max-w-[calc(100%-5px)] rounded-md absolute md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] dark:bg-slate-800 bg-slate-50 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-95 peer-focus:-translate-y-4  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1";

  constructor(
    public formularyService: FormularyService,
    private darkModeService: DarkModeService,
    @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer,
  ) { }

  ngOnInit() {
    this.setId();
    this.observeSetValue();

    this.initialType = this.type;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.loaderId) {
      if (changes['loading']) {
        if (changes['loading'].currentValue) {
          this.setLoader()
        } else {
          this.removeLoader();
        }
      }

      if (changes['disabled']) {
        this.observeDisabled();
      }

    }
  }

  setId() {
    this.id = this.formularyService.generateUniqueId('INPUTY');
    this.loaderId = 'loader-' + this.id;
  }

  setLoader() {
    this.formularyService.setLoader(`#${this.loaderId}`);
  }

  removeLoader() {
    this.formularyService.removeLoader(`#${this.loaderId}`);
  }

  observeDisabled() {
    if (!this.control || !this.formGroup) return;
    if (this.disabled) this.control.disable();
    else this.control.enable();
  }

  observeSetValue() {
    if (!this.control) return;

    this.observeDisabled();

    let observable = this.control.valueChanges;

    observable.subscribe((newValue) => {
      if (this.value === newValue) return;
      this.value = newValue;
    });
  }

  setTouched() {
    if (!this.control) return;
    this.control.markAsTouched();
    this.hasErrors = this.control.errors ? true : false;
  }

  toogleShowPassword() {
    this.type = this.type === 'password' ? 'text' : 'password';
  }

  get formGroup() {
    return this.controlContainer?.control as FormGroup ?? null;
  }

  get control() {
    if (!this.formGroup) return null;
    return this.formGroup.get(this.controlName) as FormControlLabeled;
  }

  set value(value: any) {
    if (!this.control) return;
    this.control.setValue(value);
  }

  get value() {
    return this.control?.value ?? null;
  }

  get mask(): string {
    switch (this.maskInputy) {
      case 'cpf':
        return '000.000.000-00';
      case 'cnpj':
        return '00.000.000/0000-00';
      case 'money':
        this.prefix = 'R$ ';
        this.thousandSeparator = ''
        return 'separator.2';
      case 'phone':
        return '(00) 0000 0000||(00) 00000 0000';
      case 'rg':
        return '00.000.000-0';
      case 'date':
        return '00/00/0000';
      case 'datetime':
        return '00/00/0000 00:00';
      case 'cep':
        return '00000-000';
      case 'credit-card':
        return '0000 0000 0000 0000';
      case 'time':
        return '00:00:00';
      case 'percent':
        this.suffix = '%'
        return 'separator.2';
      case 'ip':
        return '000.000.000.000';
      default:
        return '';
    }
  }

}
