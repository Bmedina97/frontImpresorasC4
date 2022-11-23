import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarImpresoraComponent } from './impresora/buscar-impresora/buscar-impresora.component';
import { CrearImpresoraComponent } from './impresora/crear-impresora/crear-impresora.component';
import { EditarImpresoraComponent } from './impresora/editar-impresora/editar-impresora.component';
import { EliminarImpresoraComponent } from './impresora/eliminar-impresora/eliminar-impresora.component';
import { BuscarRevisionComponent } from './revision/buscar-revision/buscar-revision.component';
import { CrearRevisionComponent } from './revision/crear-revision/crear-revision.component';
import { EditarRevisionComponent } from './revision/editar-revision/editar-revision.component';
import { EliminarRevisionComponent } from './revision/eliminar-revision/eliminar-revision.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  { path: 'crear-usuario', component: CrearUsuarioComponent},
  { path: 'editar-usuario/:id', component: EditarUsuarioComponent},
  { path: 'eliminar-usuario', component: EliminarUsuarioComponent},
  { path: 'buscar-usuario', component: BuscarUsuarioComponent},
  { path: 'crear-impresora', component: CrearImpresoraComponent},
  { path: 'editar-impresora', component: EditarImpresoraComponent},
  { path: 'eliminar-impresora', component: EliminarImpresoraComponent},
  { path: 'buscar-impresora', component: BuscarImpresoraComponent},
  { path: 'crear-revision', component: CrearRevisionComponent},
  { path: 'editar-revision', component: EditarRevisionComponent},
  { path: 'eliminar-revision', component: EliminarRevisionComponent},
  { path: 'buscar-revision', component: BuscarRevisionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
