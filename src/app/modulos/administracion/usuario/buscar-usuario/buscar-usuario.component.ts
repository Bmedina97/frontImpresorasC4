import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuarioModelo';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.scss']
})
export class BuscarUsuarioComponent implements OnInit {
  titulo = 'Listado de Usuarios';
  listadoUsuarios = new Array<UsuarioModel>();

  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService) {

  }

  ngOnInit(): void {

    this.usuarioService.obtenerTodo().subscribe(data => {
      this.listadoUsuarios = data;
    })
  }

  eliminar(id : string){
    
    if( confirm("¿Desea eliminar la persona?") ){
      
      this.usuarioService.eliminar(id).subscribe( result =>{
        alert("Se elimino la persona");
       
        this.listadoUsuarios = this.listadoUsuarios.filter( x => !x.id.includes(id) );

      }, error => {
        alert("No se logro eliminar la persona");
      })

    }else{
      alert("No se va a eliminar el usuario")
    }

  }
}
