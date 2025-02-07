import { Component, Input } from '@angular/core';
import { FormControlLabeled } from '../validation/FormControlLabeled';

@Component({
  selector: 'debugy',
  standalone: false,
  templateUrl: './debugy.component.html',
})
export class DebugyComponent {

  @Input() debug = false;
  @Input() label!:string;
  @Input() control!:FormControlLabeled|null;
  @Input() loading!:boolean;

}
