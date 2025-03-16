import { TablyRowConfig } from './../../models/tably-row-config';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges, ViewChild } from '@angular/core';
import { TablyHeaderConfig } from '../../models/tably-header-config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlLabeled } from '../../../formulary/components/validation/FormControlLabeled';
import { TablySearchService } from '../../services/tably.search.service';
import { TablyOrderService } from '../../services/tably.order.service';
import { ScreenService } from '../../../../services/screen.service';

@Component({
  selector: 'tably',
  standalone: false,

  templateUrl: './tably.component.html',
  styleUrl: './tably.component.scss'
})
export class TablyComponent implements OnInit, OnChanges {

  @Input() debug = false;
  @Input() selectRows = false; // possibilita selecionar as linhas

  @Input({required:true}) header!:TablyHeaderConfig[]
  @Input({required:true}) rows!:TablyRowConfig[]

  @Output() onRowEdit:EventEmitter<TablyRowConfig> = new EventEmitter();
  @Output() onRowBlock:EventEmitter<TablyRowConfig> = new EventEmitter();
  @Output() onRowExport:EventEmitter<TablyRowConfig> = new EventEmitter();
  @Output() onSelectedRowsBlock:EventEmitter<TablyRowConfig[]> = new EventEmitter();
  @Output() onSelectedRowsExport:EventEmitter<TablyRowConfig[]> = new EventEmitter();

  rowsOriginal!:TablyRowConfig[]

  checked = false;

  interactedCheckbox = false;

  sortDirection:string = '';

  formSearch:FormGroup;

  screenSize!:string;

  constructor(
    private tablyOrderService:TablyOrderService,
    private tablySearchService:TablySearchService,
    private fb:FormBuilder,
    private screenService:ScreenService,
  ){
    this.formSearch = this.createFormSearch();

    this.screenService.screenSize$.subscribe(size => this.screenSize = size);
  }

  ngOnInit() {
    this.initiateHeaderCols();
  }

  ngOnChanges(changes: SimpleChanges){
    const current = changes['rows']?.currentValue as TablyRowConfig[];
    if (current){
      this.rows = [...current.map((row:TablyRowConfig, index:number) => ({ ...row, checked: this.checked, index: index }))];
      this.rowsOriginal = [...this.rows];
    }
  }

  initiateHeaderCols(){
    this.header = [...this.header.map((col:TablyHeaderConfig) => ({ ...col, order: false, direction:""}))];
  }

  createFormSearch(){
    return this.fb.group({
      search: new FormControlLabeled("Pesquisa",""),
    });
  }

  checkRow(event:boolean, row:any){
    row = event;

    this.checked = this.rows.every(item => item.checked);

    setTimeout(() => {
      this.interactedCheckbox = this.rows.some(item => item.checked);
    }, 500);

  }

  onCheckboxChange(event:Event){
    this.checked = !this.checked;

    setTimeout(() => {
      this.interactedCheckbox = this.checked ? true : false;
    }, 500);

    this.rows = [...this.rows.map(row => ({ ...row, checked: this.checked }))];
  }

  submitSearchForm(){
    this.checked = false;
    this.interactedCheckbox = false;
    this.rows = [...this.tablySearchService.search(this.formSearch.value, this.header, this.rowsOriginal)];
  }

  cleanSearch(){
    this.resetRows();
    this.formSearch.get('search')?.reset();
    this.checked = false;
    this.interactedCheckbox = false;
  }

  sort(col: TablyHeaderConfig) {
    this.rows = [...this.tablyOrderService.sort(col, this.header, this.rows, this.rowsOriginal)];
  }

  orderBy(col:TablyHeaderConfig){
    ({ direction: col.direction, order: col.order } = this.tablyOrderService.orderBy(col));
    this.sort(col);
  }

  resetRows(){
    this.rows = [...this.rowsOriginal];
  }

  emitRowEdit(row:TablyRowConfig){
    this.onRowEdit.emit(row);
  }

  emitRowBlock(row:TablyRowConfig){
    this.onRowBlock.emit(row);
  }

  emitRowExport(row:TablyRowConfig){
    this.onRowExport.emit(row);
  }

  emitSelectedRowsBlock(){
    this.onSelectedRowsBlock.emit( this.selectedRows);
  }

  emitSelectedRowsExport(){
    this.onSelectedRowsExport.emit( this.selectedRows);
  }

  get selectedRows(){
    return  this.rows.filter(row => row.checked);
  }

  get headerCols():number {
    return this.header.length;
  }

  get headerGridColsClass():string {
    return "grid-cols-" + this.headerCols
  }

  get headerGridColsPanClass():string {
    return "col-span-" + this.headerCols
  }

  get totalSelected(){
    return this.rows.filter(item => item.checked).length ?? null;
  }

}
