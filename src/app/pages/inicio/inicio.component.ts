import { Component, OnInit } from '@angular/core';
import { ISliders, ISliders1, ISliderTop, ISliderTop1 } from 'src/app/interfaces/interfaces.module';
import { DatosService } from 'src/app/services/datos.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  sliderTop : ISliderTop[] = []
  sliderPeliculas : any[] = []

  constructor(
    private datosService : DatosService
  ){}

  ngOnInit(){
    this.datosService.getSliderTop().subscribe((data : ISliderTop1) => {
      this.sliderTop = data.data
    })
    this.datosService.getSliderOriginals().subscribe((data : ISliders1) => { 
      this.sliderPeliculas.push(data.data)
      this.datosService.getSliderSeries().subscribe((data : ISliders1) => {
        this.sliderPeliculas.push(data.data)
        this.datosService.getSliderPeliculas().subscribe((data : ISliders1) => {
          this.sliderPeliculas.push(data.data)
          this.datosService.getSliderDescubrir().subscribe((data : ISliders1) => {
            this.sliderPeliculas.push(data.data)
            this.datosService.getSliderImdb().subscribe((data : ISliders1) => {
              this.sliderPeliculas.push(data.data)
            })
          })
        })
      })
    })
  }

}