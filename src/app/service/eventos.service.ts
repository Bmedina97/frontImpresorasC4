import { EventEmitter, Injectable } from '@angular/core';
import { MenuModelo } from '../models/MenuModelo';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  listadoMenusEvent = new EventEmitter<MenuModelo[]>();
  controlSessionEvent = new EventEmitter<boolean>(false);
  constructor() { }
}

