import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderTopComponent } from './slider-top/slider-top.component';
import { SliderPeliculasComponent } from './slider-peliculas/slider-peliculas.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { SliderTopCardComponent } from './slider-top-card/slider-top-card.component';
import { SliderPeliculasCardComponent } from './slider-peliculas-card/slider-peliculas-card.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SliderTopComponent,
    SliderPeliculasComponent,
    FooterComponent,
    SliderTopCardComponent,
    SliderPeliculasCardComponent,
    BuscadorComponent
  ],
  exports : [
    HeaderComponent,
    SliderTopComponent,
    SliderPeliculasComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
