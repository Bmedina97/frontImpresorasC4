import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toArray } from 'rxjs';
import { MenuModelo } from 'src/app/models/MenuModelo';
import { EventosService } from 'src/app/service/eventos.service';
import { SeguridadService } from 'src/app/service/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {

  public formulario: FormGroup;
  public rol : string;

  constructor(
    private fb : FormBuilder, 
    private seguridadService : SeguridadService, 
    private router : Router, 
    private eventosService : EventosService       
    
    ) { 

    this.formulario = fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(7), Validators.maxLength(100) ] ],
      password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(50)] ]
    });

  }

  login(){
    
    let email = this.formulario.controls["email"].value;
    let password = this.formulario.controls["password"].value;

    this.seguridadService.login(email, password).subscribe(respuesta =>{
      let datos = Object.values(respuesta);
      let idUsuario = datos[0];

      let token = datos[1];
    
      this.seguridadService.obtenerRol(idUsuario.id).subscribe(serviceRol =>{
        let consumoRol = Object.values(serviceRol);
        this.rol = consumoRol[1];
        console.log(this.rol);     
        
        this.seguridadService.crearSesion(token, this.rol);
        this.generarMenus( this.rol );
        //this.generarMenus( this.seguridadService.retornarRol() || "" );
        this.router.navigate(['/plantilla/index']); 
        this.eventosService.controlSessionEvent.emit(true); 


      }, error => {
        switch(error.status){
          case 401:
              alert("Usuario o password no son validos");
              break;
          case 402:
              alert("No tiene permiso");
              break;
          default:
              alert("Error no conocido123");
        }
      });  



    }, error => {
      switch(error.status){
        case 401:
            alert("Usuario o password no son validos");
            break;
        case 402:
            alert("No tiene permiso");
            break;
        default:
            alert("Error no conocido");
      }
    });
  }


  generarMenus( rol : string){


    let menus = new Array<MenuModelo>();
    let rolCorrecto = rol.toString();

    switch(rolCorrecto){
      case 'Super':
        menus.push( { "nombre" : "Gestión usuarios", "path" : "/administracion/buscar-usuario" } );
        menus.push( { "nombre" : "Gestión impresoras", "path" : "/administracion/crear-impresora" } );
        menus.push( { "nombre" : "Gestión revisiones", "path" : "/pedidos/realizar-pedido" } );
        menus.push( { "nombre" : "Cerrar sesión", "path" : "/seguridad/cerrar" } );
        break;
      case 'Tecnico':
          menus.push( { "nombre" : "Gestión impresoras", "path" : "/administracion/crear-impresora" } );
          menus.push( { "nombre" : "Gestión clientes", "path" : "/administracion/clientes" } );
          menus.push( { "nombre" : "Cerrar sesión", "path" : "/seguridad/cerrar" } );
          break;
      default :
        break;
    }

    this.eventosService.listadoMenusEvent.emit(menus);
       
  }
  

}
