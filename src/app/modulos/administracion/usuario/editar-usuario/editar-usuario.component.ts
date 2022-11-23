import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/usuarioModelo';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements  OnInit{
  usuario : UsuarioModel;
  public formEditUser: FormGroup;
  titulo = 'Formulario de actualización';
  id : string;

  constructor(
    private fb : FormBuilder, 
    private router : Router , 
    private activatedRoute : ActivatedRoute,
    private usuarioService : UsuarioService
    ) 

    {      
     
    this.formEditUser = fb.group({
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
    this.id = this.activatedRoute.snapshot.params["id"];  
    
    this.usuarioService.obtener(this.id).subscribe( data => {
      this.formEditUser.controls["nombre"].setValue(data.nombre);
      this.formEditUser.controls["apellidos"].setValue(data.apellidos);
      this.formEditUser.controls["cedula"].setValue(data.cedula);
      this.formEditUser.controls["genero"].setValue(data.genero);
      this.formEditUser.controls["telefono"].setValue(data.telefono);
      this.formEditUser.controls["email"].setValue(data.email);
      this.formEditUser.controls["estudios"].setValue(data.nivelEstudios);
      this.formEditUser.controls["nombreUsuario"].setValue(data.nombre_usuario);
      this.formEditUser.controls["password"].setValue(data.password);  
      this.formEditUser.controls["rol"].setValue(data.rolId);    
    });

  }

  actualizar(){
    
    let usuario = new UsuarioModel();

    usuario.id = this.id;
    usuario.nombre = this.formEditUser.controls["nombre"].value;
    usuario.apellidos = this.formEditUser.controls["apellidos"].value;
    usuario.cedula = this.formEditUser.controls["cedula"].value;
    usuario.genero = parseInt(this.formEditUser.controls["genero"].value);
    usuario.telefono = this.formEditUser.controls["telefono"].value;
    usuario.email = this.formEditUser.controls["email"].value;
    usuario.nivelEstudios = parseInt(this.formEditUser.controls["estudios"].value);
    usuario.nombre_usuario = this.formEditUser.controls["nombreUsuario"].value;
    usuario.password = this.formEditUser.controls["password"].value;
    usuario.rolId = this.formEditUser.controls["rol"].value;

    this.usuarioService.actualizar(usuario).subscribe( data => {
      alert("Se actualizo el usuario");
      this.router.navigate(['/administracion/buscar-usuario']);
    }, error => {
      alert("La persona no existe");
    })

  }

}

