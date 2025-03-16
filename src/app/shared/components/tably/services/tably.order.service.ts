import { TablyRowConfig } from './../models/tably-row-config';
import { Injectable } from '@angular/core';
import { TablyHeaderConfig } from '../models/tably-header-config';

@Injectable({
  providedIn: 'root',
})
export class TablyOrderService {

  constructor(){}

  sort(col: TablyHeaderConfig, header:TablyHeaderConfig[], rows:TablyRowConfig[], rowsOriginal:TablyRowConfig[]) {
    const field = col.field;
    const direction = col.direction;

    header.forEach(hcol=>{
      if(hcol.field != col.field){
        hcol.direction = "";
        hcol.order = false;
      }
    })

    if (col.direction === "") {
      return [...rowsOriginal];
    }

    return rows.sort((a, b) => {
      let valA = 0; let valB = 0;
      if(direction == 'ASC'){valA = -1; valB = 1;}
      else if(direction == 'DESC'){valA = 1; valB = -1;}

      if (a[field] < b[field]) {
        return valA;
      }
      if (a[field] > b[field]) {
        return valB;
      }
      return 0;

    });
  }

  orderBy(col:TablyHeaderConfig){
    let direction = "";
    let order = false;

    switch(col.direction){
      case "": direction = 'ASC';  order = false; break;
      case "ASC": direction = 'DESC';  order = true; break;
      case "DESC": direction = ''; order = true; break;
    }

    return {direction, order};
  }

}
