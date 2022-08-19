import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IData, ISliders } from 'src/app/interfaces/interfaces.module';

import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  nombre   : string = ''
  pelicula : IData = {}
  otrosClientes : ISliders[] = []
  
  constructor(
    private datosService : DatosService,
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ( {nombre} ) => {
      this.datosService.getPeliculasByNombre(nombre).subscribe((data : any) => this.pelicula = data.data[0])
      this.datosService.getSliderDescubrir().subscribe((data : any) =>  this.otrosClientes = data.data.slides)
    } )  
  }

  videoAutoplay : boolean = false 
  videoSound    : boolean = false

  activarVideo() : void {
    this.videoAutoplay = true
  }
  desactivarVideo() : void {
    this.videoAutoplay = false
  }
  activarVideoSound() : void {
    this.videoSound = true
  }
  desactivarVideoSound() : void {
    this.videoSound = false
  }

}
