import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuarioModelo';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent  implements OnInit {

  public formCreateUser: FormGroup;
  usuario : UsuarioModel;
  listadoGenero: any[];

  constructor(
    private fb : FormBuilder, 
    private router : Router , 
    private usuarioService : UsuarioService
    ) 

    {      
     
    this.formCreateUser = fb.group({
      nombre: ['', [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(100) ] ],
      apellidos: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)] ],
      cedula: ['', [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(100) ] ],
      genero: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(13)] ],
      email: ['', [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(100) ] ],
      estudios: ['', [Validators.required]],
      nombreUsuario: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(100) ] ],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)] ],
      rol: ['', [Validators.required]]
      });
  }
  
  ngOnInit(): void {
    
    this.listadoGenero = [ 
      { "value" : 0, "text" : "Femenino" },
      { "value" : 1, "text" : "Masculino" },
      { "value" : 2, "text" : "No definido" } ];
  }


  registrar(){
   

    let usuario = new UsuarioModel();

    usuario.nombre = this.formCreateUser.controls["nombre"].value;
    usuario.apellidos = this.formCreateUser.controls["apellidos"].value;
    usuario.cedula = this.formCreateUser.controls["cedula"].value;
    usuario.genero = parseInt(this.formCreateUser.controls["genero"].value);
    usuario.telefono = this.formCreateUser.controls["telefono"].value;
    usuario.email = this.formCreateUser.controls["email"].value;
    usuario.nivelEstudios = parseInt(this.formCreateUser.controls["estudios"].value);
    usuario.nombre_usuario = this.formCreateUser.controls["nombreUsuario"].value;
    usuario.password = this.formCreateUser.controls["password"].value;
    usuario.rolId = this.formCreateUser.controls["rol"].value;
    
    console.log(usuario);

    this.usuarioService.crearUsuario(usuario).subscribe( response =>{
       console.log(response);
       alert("Se inserto el usuario");      
       this.limpiarFormulario();
       this.router.navigate(['usuario/buscar-usuario']);
      }, error => {
        alert("No se logro insertar el usuario");
      })    
  }

  limpiarFormulario(){
    this.formCreateUser.reset();
  }
  
}
