import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImpresoraModel } from '../models/ImpresoraModelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ImpresoraService {
  url: string = environment.urlBackend + '/impresoras';  
  token : string | null = '';

  constructor(
    private http: HttpClient,
    private seguridadService : SeguridadService ) { 
      this.token = seguridadService.obtenerSesion(); 
  }

  crearimpresora( impresora : ImpresoraModel) : Observable<ImpresoraModel>{
    return this.http.post<ImpresoraModel>(this.url, impresora, { headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  obtenerTodo() : Observable<ImpresoraModel[]> {
    return this.http.get<ImpresoraModel[]>(this.url, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  eliminar(id : string){
    return this.http.delete(this.url + '/' + id, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  obtener(id : string) : Observable<ImpresoraModel> {
    return this.http.get<ImpresoraModel>(this.url + '/' + id, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  actualizar(impresora : ImpresoraModel){
    return this.http.put(this.url + '/' + impresora.id, impresora, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }
}
