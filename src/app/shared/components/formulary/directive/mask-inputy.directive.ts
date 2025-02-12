import { Directive, Input, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[maskInputy]',
  standalone: false,
})
export class MaskInputyDirective {
  @Input('maskInputy') maskType!: 'money' | 'cpf' | 'cnpj';

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: InputEvent) {
    const input = this.el.nativeElement;
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não for número

    let maxLength = 0;
    switch (this.maskType) {
      case 'cpf':
        maxLength = 11;
        break;
      case 'cnpj':
        maxLength = 14;
        break;
      case 'money':
        maxLength = 12; // Ajuste conforme necessário
        break;
    }

    value = value.substring(0, maxLength);

    if (this.maskType === 'cpf' && value.length > 0) {
      value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
    }

    if (this.maskType === 'cnpj' && value.length > 0) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    }

    if (this.maskType === 'money' && value.length > 0) {
      value = value.replace(/^(\d{1,3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3,$4');
    }

    input.value = value; // Aplica a máscara ao valor no input
  }
}
