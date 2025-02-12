import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControlLabeled } from '../../../../shared/components/formulary/components/validation/FormControlLabeled';

@Component({
  selector: 'app-test-formulary',
  standalone: false,
  templateUrl: './test-formulary.component.html',
  styleUrl: './test-formulary.component.scss'
})
export class TestFormularyComponent implements OnInit {

  form!: FormGroup;

  loadingStates: Record<string, boolean> = {
    input: false,
    inputPassword:false,
    select: false,
    textarea: false,
    datepicker: false,
    signature: false,
    switch:false,
    inputMaskedCpf:false,
  };

  disabledStates: Record<string, boolean> = {
    input: false,
    inputPassword:false,
    select: false,
    textarea: false,
    datepicker: false,
    signature: false,
    datetimepicker: false,
    switch:false,
    inputMaskedCpf:false,
  };

  debugStates: Record<string, boolean> = {
    input: false,
    inputPassword:false,
    select: false,
    textarea: false,
    datepicker: false,
    signature: false,
    datetimepicker: false,
    switch:false,
    inputMaskedCpf:false,
  };

  selectyOptions = Array.from({ length: 5000 }, (_, i) => ({
    value: {value: i + 1, name:'MARIA'},
    label: `Opção ${i + 1}`,
    optionLabel: `Opção ${i + 1}  <br> <small class='opacity-80 text-green-600'>sub x${i}</small>`,
  }));

  swtichyLabelBase = 'Tem Estepe?'
  swtichyLabel = 'Tem Estepe?'

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      input: new FormControlLabeled('Input Label', '', [Validators.required]),
      inputPassword: new FormControlLabeled('Input Password Label', '', [Validators.required]),
      select: new FormControlLabeled('select Label', '', [Validators.required]),
      textarea: new FormControlLabeled('textarea Label', '', [Validators.required]),
      datepicker: new FormControlLabeled('datepicker Label', '', [Validators.required]),
      datetimepicker: new FormControlLabeled('datetimepicker Label', '', [Validators.required]),
      signature: new FormControlLabeled('Signature Label', '', [Validators.required]),
      switch: new FormControlLabeled('Switch Label', '', []),
      inputMaskedCpf: new FormControlLabeled('Input Masked CPF', '', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  submitForm(){}

  toggleLoading(field: keyof typeof this.loadingStates) {
    this.loadingStates[field] = !this.loadingStates[field];
  }

  toggleDisabled(field: keyof typeof this.disabledStates) {
    this.disabledStates[field] = !this.disabledStates[field];
  }

  toggleDebug(field: keyof typeof this.debugStates) {
    this.debugStates[field] = !this.debugStates[field];
  }

  changeLabelSwith(e:boolean){
    this.swtichyLabel = e ? this.swtichyLabelBase + ' SIM!' : this.swtichyLabelBase + ' NÃO!';
  }


}
