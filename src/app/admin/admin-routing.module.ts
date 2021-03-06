import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadListComponent } from './actividades/actividad-list/actividad-list.component';
import { EditActividadComponent } from './actividades/edit-actividad/edit-actividad.component';
import { NewActividadComponent } from './actividades/new-actividad/new-actividad.component';
import { LayoutComponent } from './layout/layout.component';
import { ListUsuariosComponent } from './usuarios/list-usuarios/list-usuarios.component';
import { UsuarioInfoComponent } from './usuarios/usuario-info/usuario-info.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'actividades',
        component:ActividadListComponent,
      },
      {
        path:'actividades/nuevo',
        component:NewActividadComponent,
      },
      {
        path:'actividades/:id/editar',
        component:EditActividadComponent,
      },
      {
        path:'usuarios',
        component:ListUsuariosComponent
      },
      {
        path:'usuario',
        component:UsuarioInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }