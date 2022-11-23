import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '../models/usuarioModelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  url: string = environment.urlBackend + '/usuarios';  
  token : string | null = '';

  constructor(
    private http: HttpClient,
    private seguridadService : SeguridadService ) { 
      this.token = seguridadService.obtenerSesion(); 
  }

  crearUsuario( usuario : UsuarioModel) : Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(this.url, usuario, { headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  obtenerTodo() : Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(this.url, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  eliminar(id : string){
    return this.http.delete(this.url + '/' + id, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  obtener(id : string) : Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(this.url + '/' + id, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  actualizar(usuario : UsuarioModel){
    return this.http.put(this.url + '/' + usuario.id, usuario, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }
}
