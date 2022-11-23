import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SeguridadService {

  url = environment.urlBackend;
  token = environment.tokenName;
  rolname = environment.rolName;
  sesionIniciada = new BehaviorSubject<boolean>(false);

  constructor(
    private http : HttpClient,
    
  ) { 
    this.validarSession();
  }

  login (email: string, password: string) {
    let datos = {
      "email": email,
      "password" : password
    }

    return this.http.post(this.url + '/login', datos, { headers:{'Content-Type' : 'application/json' } } );
  
  }

  crearSesion (token : string , rol : string){
    localStorage.setItem(this.token, token);
    localStorage.setItem(this.rolname, rol);
  }

  obtenerRol (id: string) {
    let ID = id;
    return this.http.get(this.url + '/usuarios/'+ ID +'/rol', { headers:{'content-type': 'application/json'  } } );
  }

  /*retornarRol(){
    return localStorage.getItem(this.rolname);
  }*/

  sesionUsuarioObservable(){
    return this.sesionIniciada.asObservable();
  }

  cerrarSesion(){
    localStorage.removeItem(this.token);
    localStorage.removeItem(this.rolname);
    this.sesionIniciada.next(false);
  }

  obtenerSesion(){
    return localStorage.getItem(this.token);
  }

  validarSession(){
    if( this.obtenerSesion() ){
      this.sesionIniciada.next(true);
    }
  }
}
