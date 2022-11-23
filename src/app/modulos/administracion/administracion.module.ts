import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearImpresoraComponent } from './impresora/crear-impresora/crear-impresora.component';
import { EditarImpresoraComponent } from './impresora/editar-impresora/editar-impresora.component';
import { EliminarImpresoraComponent } from './impresora/eliminar-impresora/eliminar-impresora.component';
import { BuscarImpresoraComponent } from './impresora/buscar-impresora/buscar-impresora.component';
import { BuscarRevisionComponent } from './revision/buscar-revision/buscar-revision.component';
import { CrearRevisionComponent } from './revision/crear-revision/crear-revision.component';
import { EditarRevisionComponent } from './revision/editar-revision/editar-revision.component';
import { EliminarRevisionComponent } from './revision/eliminar-revision/eliminar-revision.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearImpresoraComponent,
    EditarImpresoraComponent,
    EliminarImpresoraComponent,
    BuscarImpresoraComponent,
    BuscarRevisionComponent,
    CrearRevisionComponent,
    EditarRevisionComponent,
    EliminarRevisionComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
