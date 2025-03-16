import { Component, Input } from '@angular/core';

@Component({
  selector: 'breadcumb',
  standalone:false,
  templateUrl: './breadcumb.component.html',
  styleUrl: './breadcumb.component.scss'
})
export class BreadcumbComponent {

  @Input({required:true}) breadcumbs!:any[];

}
