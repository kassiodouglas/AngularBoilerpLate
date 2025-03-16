import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TablyHeaderConfig } from '../models/tably-header-config';
import { TablyRowConfig } from '../models/tably-row-config';

@Injectable({
  providedIn: 'root',
})
export class TablySearchService {

  constructor() { }

  search(form: { search: string }, header: TablyHeaderConfig[], rows: TablyRowConfig[]): TablyRowConfig[] {
    const searchText = form.search;

    return rows.filter(row =>
      header.some(header =>
        row[header.field]?.toString().toLowerCase().includes(searchText.toLowerCase()) && header.searcheable
      )
    );
  }

}




