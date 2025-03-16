import { Component, ElementRef, Host, Input, OnChanges, OnInit, Optional, QueryList, SimpleChanges, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormularyService } from '../../services/formulary.service';
import { FormControlLabeled } from '../validation/FormControlLabeled';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'selecty',
  standalone: false,
  templateUrl: './selecty.component.html',
})
export class SelectyComponent implements OnInit, OnChanges {
  @Input({ required: true }) label!: string;
  @Input() type: string = 'text';
  @Input({ required: true }) controlName!: string;
  @Input() tooltip: string = '';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() debug: boolean = false;
  @Input() options: Array<{value:any, optionLabel:string, label:string}> = [];

  @ViewChild('optionsList', { static: false }) optionsList!: CdkVirtualScrollViewport;
  @ViewChildren('optionItem') optionItems!: QueryList<ElementRef>;

  id!: string;
  loaderId!: string;
  hasErrors: boolean = false;

  searchQuery: string = ''; // Variável para armazenar a pesquisa
  filteredOptions: Array<{ value: any, optionLabel:string, label: string }> = []; // Variável para armazenar as opções filtradas
  showOptions: boolean = false; // Controla a visibilidade da lista de opções
  activeIndex: number = -1;

  classInput = "focus:border-2 focus:border-purple-500 dark:hover:border-blue-400 hover:border-blue-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 bg-slate-50 dark:bg-slate-800 block px-2.5 pb-2.5 pt-2 w-full md:text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  classLabel = "truncate ... max-w-[calc(100%-5px)] rounded-md absolute md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] dark:bg-slate-800 bg-slate-50 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-95 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1";

  constructor(
    private formularyService: FormularyService,
    @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer,
  ) { }

  ngOnInit() {
    this.setId();
    this.observeSetValue();
    this.filteredOptions = [...this.options]; // Inicializa com todas as opções

    if(this.value)
      this.searchQuery = this.value.label;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.loaderId) {
      if (changes['loading']) {
        if (changes['loading'].currentValue) {
          this.setLoader();
        } else {
          this.removeLoader();
        }
      }

      if (changes['disabled']) {
        this.observeDisabled();
      }
    }

    // Atualiza as opções filtradas ao mudar as opções
    if (changes['options']) {
      this.filteredOptions = [...this.options];
    }
  }

  filterOptions() {
    if (this.searchQuery.trim() === '') {
      this.filteredOptions = [...this.options];
    } else {
      this.filteredOptions = this.options.filter(option =>
        option.label.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    this.activeIndex = -1;
  }


  hideOptions() {
    this.setTouched();
    setTimeout(() => {
      this.showOptions = false;
      this.activeIndex = -1;
    }, 500);
  }

  setId() {
    this.id = this.formularyService.generateUniqueId('SELECTY');
    this.loaderId = 'loader-' + this.id;
  }

  setLoader() {
    this.formularyService.setLoader(`#${this.loaderId}`);
  }

  removeLoader() {
    this.formularyService.removeLoader(`#${this.loaderId}`);
  }

  observeDisabled() {
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
    this.control.markAsTouched();
    this.hasErrors = this.control.errors ? true : false;
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.filteredOptions.length === 0) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (this.activeIndex < this.filteredOptions.length - 1) {
          this.activeIndex++;
          this.adjustScroll();
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this.activeIndex > 0) {
          this.activeIndex--;
          this.adjustScroll();
        }
        break;

      case 'Enter':
        event.preventDefault();
        if (this.activeIndex >= 0) {
          this.selectOption(this.filteredOptions[this.activeIndex]);
        }
        break;
    }
  }

  adjustScroll() {
    if (!this.optionsList || this.activeIndex < 0) return;
    this.optionsList.scrollToIndex(this.activeIndex, 'smooth');
  }

  removeSelect(){
    this.control.reset();
    this.searchQuery = '';
    this.activeIndex = -1;
  }

  selectOption(option: { value: any, label: string }) {
    this.value = option;
    this.searchQuery = option.label;
    this.showOptions = false;
    this.activeIndex = -1;
    this.setTouched();

    this.filteredOptions = [...this.options];
  }

  get formGroup() {
    return this.controlContainer?.control as FormGroup ?? null;
  }

  get control() {
    return this.formGroup.get(this.controlName) as FormControlLabeled;
  }

  set value(value: any) {
    this.control.setValue(value);
  }

  get value() {
    return this.control?.value ?? null;
  }
}
