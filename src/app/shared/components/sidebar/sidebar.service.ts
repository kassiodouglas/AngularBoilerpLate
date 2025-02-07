import { inject, Injectable } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar.component';

@Injectable()
export class SidebarService {

  private offcanvasService = inject(NgbOffcanvas);

  constructor() { }

  open() {
		const offcanvasRef = this.offcanvasService.open(SidebarComponent, {
      panelClass: 'w-screen max-w-[300px] bg-slate-50 md:rounded-lg md:m-2 md:shadow-md dark:bg-slate-800 dark:text-slate-50'
    });
		offcanvasRef.componentInstance.name = 'World';
  }

}
