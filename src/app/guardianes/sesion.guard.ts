import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../service/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {
  
  constructor(
    private seguridadService : SeguridadService,
    private router : Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.seguridadService.obtenerSesion()){
      return true;
    }else{
      this.router.navigate(['/seguridad/login']);
      return false;
    }
  }
  
}
