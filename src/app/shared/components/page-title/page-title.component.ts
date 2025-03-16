import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  standalone: false,

  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {

  @Input({required:true}) title!:string;
  @Input() text!:string;

}
