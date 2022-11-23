import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';


const routes: Routes = [
  { path: 'cerrar', component : CerrarSesionComponent },
  { path: 'acceso', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
