import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TablyService {

  constructor(){}

  openedMenuActons:Map<any, boolean> = new Map();

}
