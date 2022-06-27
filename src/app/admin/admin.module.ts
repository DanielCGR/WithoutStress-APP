import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewActividadComponent } from './actividades/new-actividad/new-actividad.component';
import { EditActividadComponent } from './actividades/edit-actividad/edit-actividad.component';
import { ActividadListComponent } from './actividades/actividad-list/actividad-list.component';
import { UsuarioInfoComponent } from './usuarios/usuario-info/usuario-info.component';
import { ListUsuariosComponent } from './usuarios/list-usuarios/list-usuarios.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { ListViewComponent } from './actividades/shared/list-view/list-view.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NewActividadComponent,
    ActividadListComponent,
    EditActividadComponent,

    UsuarioInfoComponent,
    ListUsuariosComponent,
    EditUsuarioComponent,
    
    
    ListViewComponent,
          
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdminModule { }
