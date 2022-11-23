import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './plantilla/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './plantilla/page-not-found/page-not-found.component';
import { IndexComponent } from './plantilla/index/index.component';


const routes: Routes = [
  { path: 'inicio', component: IndexComponent },
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'Home', component : HomeComponent},
  { path: 'seguridad', loadChildren : () => import("./modulos/seguridad/seguridad.module").then( x => x.SeguridadModule )},
  { path: 'administracion', loadChildren : () => import("./modulos/administracion/administracion.module").then( x => x.AdministracionModule ) },
  { path: '**', component : PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],  
  exports: [RouterModule], 
  declarations: []
})
export class AppRoutingModule { }
