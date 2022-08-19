import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { CanalesComponent } from './canales/canales.component';
import { MiEspacioComponent } from './mi-espacio/mi-espacio.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    InicioComponent,
    TiendaComponent,
    CanalesComponent,
    MiEspacioComponent,
    PeliculaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
