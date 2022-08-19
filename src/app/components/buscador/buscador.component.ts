import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IData } from 'src/app/interfaces/interfaces.module';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  nombre     : string  = ''
  activo    : boolean = false
  peliculas : any = []

  constructor( 
    private datosService : DatosService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.datosService.getPeliculas().subscribe((data : IData) => this.peliculas = data.data)
  }
  setActivo( valor : boolean ) : void{
    this.activo = valor
  }
  navegar( url : string ) : void {
    this.router.navigate( ['pelicula' , url ])
    this.activo = false 
  }

}
