import { DarkModeService } from '../../../../services/dark-mode.service';
import { FormularyService } from '../../services/formulary.service';
import { Component, EventEmitter, Host, Input, OnInit, Optional, Output, SimpleChanges, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormControlLabeled } from '../validation/FormControlLabeled';

@Component({
  selector: 'switchy',
  standalone: false,
  templateUrl: './switchy.component.html',
})
export class SwitchyComponent implements OnInit {
  @Input({ required: true }) label!: string;
  type: string = 'checkbox';
  @Input() tooltip: string = '';
  @Input({ required: true }) controlName!: string;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() debug: boolean = false;
  @Output() onChecked: EventEmitter<boolean> = new EventEmitter();

  id!: string;
  loaderId!: string;
  hasErrors: boolean = false;
  initialType: string = 'text';

  classInput = `
    disabled:cursor-not-allowed
    disabled:opacity-50
    peer
    appearance-none
    w-11
    h-5
    bg-slate-100
    dark:bg-slate-700
    rounded-full
    checked:bg-green-400
    dark:checked:dark:bg-green-400
    cursor-pointer
    transition-colors
    duration-300
    `;

  classLabel = `
    disabled:cursor-not-allowed
    disabled:opacity-50
    transition-colors
    truncate ...
    cursor-pointer
    max-w-[calc(100%-5px)]
    rounded-md
    absolute
    md:text-sm
    text-gray-500
    dark:text-gray-400
    duration-300
    transform
    -translate-y-4
    scale-85
    top-8
    left-12
    z-10
    origin-[0]
    px-2
    peer-focus:px-2
    peer-focus:text-blue-600
    peer-focus:dark:text-blue-500
    peer-placeholder-shown:scale-100
    peer-placeholder-shown:-translate-y-1/2
    peer-placeholder-shown:top-1/2
    peer-focus:top-2
    peer-focus:scale-95
    peer-focus:-translate-y-4
    rtl:peer-focus:translate-x-1/4
    rtl:peer-focus:left-auto
    start-16
    `;

  classLabelCheckbox = `
    disabled:cursor-not-allowed
    disabled:opacity-50
    absolute
    top-0
    left-0
    w-5
    h-5
    bg-slate-50
    dark:bg-slate-600
    rounded-full
    border
    border-slate-300
    dark:border-red-800
    shadow-sm
    transition-transform
    duration-300
    peer-checked:translate-x-6
    peer-checked:border-slate-800
    dark:peer-checked:border-red-300
    cursor-pointer
    `;

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

    if(this.control.value === '' || this.control.value === undefined || this.control.value === null) this.value = false;

    observable.subscribe((newValue) => {
      if (this.value === newValue) return;
      this.value = newValue ?? false;
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

  toggleChecked(){
    this.value = !this.value;
    this.onChecked.emit(this.value)
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
    return this.control?.value ?? false;
  }

  get valueMasked() {
    return null;
  }

}
