import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModelo } from 'src/app/models/MenuModelo';
import { EventosService } from 'src/app/service/eventos.service';
import { SeguridadService } from 'src/app/service/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.scss']
})
export class CerrarSesionComponent {

  constructor(private seguridadService : SeguridadService,
    private eventosService : EventosService,    
    private router : Router
    ) { }

  ngOnInit(): void {
    
    //let menus = new Array<MenuModelo>();
    
   // menus.push( { "nombre" : "Cerrar sesión", "path" : "/seguridad/cerrar" } );

    this.seguridadService.cerrarSesion();
    this.eventosService.controlSessionEvent.emit(false);
    this.router.navigate(['seguridad/acceso']);
  }
       


}
