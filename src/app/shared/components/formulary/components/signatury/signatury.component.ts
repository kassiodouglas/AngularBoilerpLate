import { Component, Host, Input, Optional, SimpleChanges, SkipSelf, ChangeDetectorRef, HostListener, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { FormularyService } from '../../services/formulary.service';
import { FormControlLabeled } from '../validation/FormControlLabeled';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'signatury',
  standalone: false,
  templateUrl: './signatury.component.html',
})
export class SignaturyComponent implements OnInit {
  @Input({ required: true }) label!: string;
  @Input() type: string = 'text';
  @Input() tooltip: string = '';
  @Input({ required: true }) controlName!: string;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() debug: boolean = false;

  id!: string;
  loaderId!: string;
  hasErrors: boolean = false;

  classInput = "text-center group border-dashed rounded-lg min-h-[20px] max-h-[40px] relative w-full flex justify-between items-center dark:hover:border-blue-400  hover:border-blue-500 cursor-default disabled:cursor-not-allowed disabled:opacity-50 bg-slate-50 dark:bg-slate-800 block px-2.5 pb-2.5 pt-2 w-full md:text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  classLabel = "truncate ... max-w-[calc(100%-5px)] rounded-md absolute md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] dark:bg-slate-800 bg-slate-50 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-95 peer-focus:-translate-y-4  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1";

  // classLabel = "truncate ... max-w-[calc(100%-5px)] rounded-md absolute md:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-85 top-2 z-10 origin-[0] dark:bg-slate-800 bg-slate-50 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-95 peer-focus:-translate-y-4  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1";

  signatureCanvas!: HTMLCanvasElement;
  signaturePad: any;

  constructor(
    public formularyService: FormularyService,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    @Optional() @Host() @SkipSelf() private controlContainer: ControlContainer,
  ) { }

  ngOnInit() {
    this.setId();
    this.observeSetValue();
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
  }

  setId() {
    this.id = this.formularyService.generateUniqueId('SIGNATURY');
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

  openModal(content: any) {
    const modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'fullscreen' });

    setTimeout(() => {
      this.startCanvas();
    }, 100);
  }

  startCanvas() {
    this.signatureCanvas = document.querySelector('#signatureCanvas') as HTMLCanvasElement;

    this.signaturePad = new SignaturePad(this.signatureCanvas);
    if (!this.signatureCanvas) {
      console.error("Canvas não encontrado!");
      return;
    }


    this.resizeCanvas();

    this.controlDraw();

  }

  resizeCanvas() {
    if (this.signatureCanvas) {
      const canvas = this.signatureCanvas;
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(ratio, ratio);
      }
      this.signaturePad.clear();

      if (this.control.valid) {
        this.signaturePad.fromDataURL(this.control.value);
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.resizeCanvas();
  }

  clearSignature() {
    this.signaturePad.clear();
    this.control.reset();
  }

  saveSignature() {
    const canvas = this.signatureCanvas;
    const signatureData = canvas.toDataURL('image/png');

    this.value = signatureData;

    if (this.signaturePad.isEmpty()) {
      console.error('No signature to confirm.');
      return;
    }

    this.modalService.dismissAll();
  }

  controlDraw() {
    if (this.control.valid) {
      this.signaturePad.fromDataURL(this.control.value);
      this.resizeCanvas();
    }
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

  get signed() {
    return this.signaturePad ? !this.signaturePad.isEmpty() : false;
  }


}
