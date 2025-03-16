import { TablyService } from './../../services/tably.service';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { TablyRowConfig } from '../../models/tably-row-config';
import { DatePipe } from '@angular/common';
import { TablyHeaderConfig } from '../../models/tably-header-config';
import { CnpjPipe } from '../../../../pipes/cnpj.pipe';
import { CpfPipe } from '../../../../pipes/cpf.pipe';

@Component({
  selector: 'tably-row',
  standalone: false,

  templateUrl: './tably-row.component.html',
  styleUrl: './tably-row.component.scss'
})
export class TablyRowComponent implements OnChanges {

  @Input() selectRows = false; // possibilita selecionar as linhas

  @Input({ required: true }) header!: TablyHeaderConfig[];
  @Input({ required: true }) row!: TablyRowConfig;
  @Input({ required: true }) headerGridColsClass!: string;
  @Input({ required: true }) screenSize!: string;

  @Output() onChecked: EventEmitter<boolean> = new EventEmitter();
  @Output() onEdit: EventEmitter<TablyRowConfig> = new EventEmitter();
  @Output() onBlock: EventEmitter<TablyRowConfig> = new EventEmitter();
  @Output() onExport: EventEmitter<TablyRowConfig> = new EventEmitter();

  @ViewChild('menuAction', { static: false }) menuAction!: ElementRef;

  constructor(
    private datePipe:DatePipe,
    public tablyService:TablyService,
    public cnpjPipe:CnpjPipe,
    public cpfPipe:CpfPipe,
  ){}

  ngOnChanges(changes: SimpleChanges) {
    if(changes['row']?.currentValue)
      this.row = changes['row'].currentValue;
  }

  onCheckboxChange(event: Event) {
    this.row.checked = !this.row.checked;
    this.onChecked.emit(this.row.checked);
  }

  label(row:any, col:TablyHeaderConfig){

    const type = this.header.filter(hcol => hcol.field === col.field)[0].type;

    let data = null;
    switch(type){
      case 'string': data = row[col.field]; break;
      case 'date': data = this.datePipe.transform(row[col.field],"dd/MM/YYYY"); break;
      case 'datetime': data = this.datePipe.transform(row[col.field],"dd/MM/YYYY HH:mm"); break;
      case 'array': data = row[col.field]; break;
      case 'number': data = Number(row[col.field]); break;
      case 'boolean': data = Boolean(row[col.field]); break;
      case 'cnpj': data = this.cnpjPipe.transform(row[col.field]); break;
      case 'cpf': data = this.cpfPipe.transform(row[col.field]); break;
    }

    return data;
  }

  toogleMenuActions(event:MouseEvent){
    this.tablyService.openedMenuActons.clear();
    this.tablyService.openedMenuActons.set(this.row.index, true)

    setTimeout(() => {
      const menu = this.menuAction.nativeElement;

      if (menu) {

        const menuWidth = menu.offsetWidth;
        const menuHeight = menu.offsetHeight;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let menuLeft = mouseX - menuWidth - 10;
        let menuTop = mouseY;

        if (menuLeft + menuWidth > windowWidth) {
          menuLeft = mouseX + 10;
        }

        if (menuTop + menuHeight > windowHeight) {
          menuTop = mouseY - menuHeight - 10;
        }

        menu.style.left = `${menuLeft}px`;
        menu.style.top = `${menuTop}px`;
      }
    }, 10);
  }

  @HostListener('document:click', ['$event'])
  fecharMenu(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.relative')) {
      this.tablyService.openedMenuActons.clear();
    }
  }

  onClickEdit(row:TablyRowConfig){
    this.onEdit.emit(row);
  }

  onClickBlock(row:TablyRowConfig){
    this.onBlock.emit(row);
  }

  onClickExport(row:TablyRowConfig){
    this.onExport.emit(row);
  }

  get openedMenuActions():boolean {
    return this.tablyService.openedMenuActons.get(this.row.index) ?? false
  }

}
