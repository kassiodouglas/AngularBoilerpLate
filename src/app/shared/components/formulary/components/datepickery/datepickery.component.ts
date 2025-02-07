import { DarkModeService } from '../../../../services/dark-mode.service';
import { FormularyService } from '../../services/formulary.service';
import { Component, EventEmitter, Host, Input, Optional, Output, SimpleChanges, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormControlLabeled } from '../validation/FormControlLabeled';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import moment from 'moment';

@Component({
  selector: 'datepickery',
  standalone: false,
  templateUrl: './datepickery.component.html',
})
export class DatepickeryComponent {
  @Input({ required: true }) label!: string;
  @Input() type: string = 'text';
  @Input() tooltip: string = '';
  @Input({ required: true }) controlName!: string;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() debug: boolean = false;
  @Input() time: boolean = false;
  @Input() timePeriodMin = 60;


  id!: string;
  loaderId!: string;
  hasErrors: boolean = false;

  classInput = "dark:hover:border-blue-400 hover:border-blue-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 bg-slate-50 dark:bg-slate-800 block px-2.5 pb-2.5 pt-2 w-full md:text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  classLabel = "truncate ... max-w-[calc(100%-5px)] rounded-md absolute md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] dark:bg-slate-800 bg-slate-50 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-95 peer-focus:-translate-y-4  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1";

  selectedDateTime: any = null;
  @Output() dateTimeChange = new EventEmitter<string>();

  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();
  daysInMonth: number[] = this.getDaysInMonth(this.currentYear, this.currentMonth);
  valueInput: string = '';
  readonly = true;
  times: any[] = [];
  timeSelected: string | null = null;
  dateSelected: string | null = null;

  constructor(
    public formularyService: FormularyService,
    private darkModeService: DarkModeService,
    private modalService: NgbModal,
    @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer,
  ) { }

  ngOnInit() {
    this.setId();
    this.observeSetValue();
    this.initTimes();
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
    if (this.disabled) this.control.disable();
    else this.control.enable();
  }

  observeSetValue() {
    if (!this.control) return;

    this.observeDisabled();

    const format = !this.time ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm:ss';
    const formatBr = !this.time ? 'DD/MM/YYYY' : 'DD/MM/YYYY HH:mm:ss';

    this.control.valueChanges.subscribe((newValue) => {
      const formattedValue = moment(newValue, format, true).isValid()
        ? moment(newValue).format(formatBr)
        : '';


      if (this.value !== formattedValue) {
        this.value = newValue;
        this.valueInput = moment(newValue).format(formatBr);
      }
    });
  }

  formatDate(year: number, month: number): string {
    const months = [
      "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL",
      "MAIO", "JUNHO", "JULHO", "AGOSTO",
      "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
    ];

    const monthName = months[month];

    return `${monthName}/${year}`;
  }

  cleanValue() {
    this.selectedDateTime = '';
    this.value = null;
    this.valueInput = '';
    this.timeSelected = '';
    this.dateSelected = '';
    this.control.reset();
  }

  setTouched() {
    this.control.markAsTouched();
    this.hasErrors = this.control.errors ? true : false;
  }

  setToday() {
    this.dateSelected = moment().format('YYYY-MM-DD');
    this.setDateTime();
  }

  setDateTime() {

    this.selectedDateTime = this.time ? `${this.dateSelected} ${this.timeSelected}` : this.dateSelected;
    const format = this.time ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    const formatBr = this.time ? 'DD/MM/YYYY HH:mm:ss' : 'DD/MM/YYYY';

    const newValue = moment(this.selectedDateTime).format(format);

    if (this.value !== newValue) {
      this.value = newValue;
      this.valueInput = moment(newValue).format(formatBr);
    }
  }

  private getDaysInMonth(year: number, month: number): number[] {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  changeMonth(delta: number) {
    this.currentMonth += delta;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.daysInMonth = this.getDaysInMonth(this.currentYear, this.currentMonth);
  }

  openModal(content: any) {
    const size = this.time ? 'lg' : 'md';
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: size });

    if (this.control.valid) {
      const values = this.control.value.split(' ');

      if (values[0])
        this.dateSelected = values[0]
      else {
        this.dateSelected = moment().format('YYYY-MM-DD');
      }
      if (this.time)
        this.timeSelected = values[1].substring(0, 5);

      console.log(this.timeSelected)
      this.setDateTime();
    }
  }

  initTimes() {

    if (!this.time) return;

    let times = [];
    let startTime = new Date();
    startTime.setHours(0, 0, 0, 0);

    const repeat = 24 * 60 / this.timePeriodMin;

    for (let i = 0; i < repeat; i++) {
      let hours = startTime.getHours().toString().padStart(2, '0');
      let minutes = startTime.getMinutes().toString().padStart(2, '0');
      let timeString = `${hours}:${minutes}`;

      times.push(timeString);
      startTime.setMinutes(startTime.getMinutes() + this.timePeriodMin);
    }

    this.times = times;
  }

  selectDate(date: string) {
    this.dateSelected = date;
    if (this.time && (this.timeSelected == '' || !this.timeSelected))
      this.timeSelected = '00:00';

    this.setDateTime();
  }

  selectTime(time: string) {
    this.timeSelected = time;
    if ((this.dateSelected == '' || !this.dateSelected))
      this.dateSelected = moment().format('YYYY-MM-DD');
    this.setDateTime();
  }

  get formGroup() {
    return this.controlContainer?.control as FormGroup ?? null;
  }

  get control() {
    return this.formGroup.get(this.controlName) as FormControlLabeled;
  }

  set value(value: any) {
    if (moment(value, 'DD/MM/YYYY', true).isValid()) {
      const isoDate = moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD');

      if (this.control.value !== isoDate) {
        this.control.setValue(isoDate, { emitEvent: false });
      }
    } else {
      if (this.control.value !== value) {
        this.control.setValue(value, { emitEvent: false });
      }
    }
  }

  get value() {
    return this.control?.value ?? '';
  }

  get valueMasked() {
    return null;
  }

  get selectedDay(): number {
    return this.selectedDateTime ? Number(moment(this.selectedDateTime).format('D')) : Number(moment().format('D'));
  }


}
