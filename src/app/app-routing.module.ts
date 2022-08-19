import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CanalesComponent } from './pages/canales/canales.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MiEspacioComponent } from './pages/mi-espacio/mi-espacio.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

const routes: Routes = [
  {path : '', component : InicioComponent},
  {path : 'pelicula/:nombre', component : PeliculaComponent},
  {path : 'canales', component : CanalesComponent},
  {path : 'mi-espacio', component : MiEspacioComponent},
  {path : 'tienda', component : TiendaComponent},
  {path : '**', component : InicioComponent},
];

const config : ExtraOptions = {
  scrollPositionRestoration : 'enabled',
  onSameUrlNavigation :  'reload',
  urlUpdateStrategy : 'eager'
}

@NgModule({
imports: [RouterModule.forRoot(routes , config)],
exports: [RouterModule]
})
export class AppRoutingModule { }
