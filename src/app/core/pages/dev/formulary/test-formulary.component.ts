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
  };

  selectyOptions = [
    {value:"value1", label:"Opção 1"},
    {value:"value2", label:"Opção 2"},
    {value:"value3", label:"Opção 3"},
    {value:"value4", label:"Opção 4"},
    {value:"value5", label:"Opção 5"},
  ];

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


}
