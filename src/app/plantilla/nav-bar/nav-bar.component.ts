import { ThisReceiver } from '@angular/compiler';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MenuModelo } from 'src/app/models/MenuModelo';
import { EventosService } from 'src/app/service/eventos.service';
import { SeguridadService } from 'src/app/service/seguridad.service';
import { observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit{
  
  menus : string = "";
  listadoMenus = new Array<MenuModelo>();
  sesionIniciada = false;

  constructor(private seguridadService : SeguridadService,
    private eventosService : EventosService){}

    ngOnInit(): void { 
      
      this.seguridadService.sesionUsuarioObservable().subscribe( data => {
        this.sesionIniciada = data; 
        console.log(this.sesionIniciada); 
      })
      
      this.eventosService.listadoMenusEvent.subscribe( menus => {
        this.listadoMenus = menus;
        console.log(menus);
      })

      this.eventosService.controlSessionEvent.subscribe( data =>{
        this.sesionIniciada = data;
        console.log(this.sesionIniciada);
      })


    }

}
