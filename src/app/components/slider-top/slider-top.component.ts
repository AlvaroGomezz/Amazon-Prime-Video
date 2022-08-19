import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ISliders, ISliderTop } from 'src/app/interfaces/interfaces.module';

@Component({
  selector: 'app-slider-top',
  templateUrl: './slider-top.component.html',
  styleUrls: ['./slider-top.component.scss']
})
export class SliderTopComponent implements OnInit {

  numero            : number = 0
  elementosVisibles : number = 1
  @Input() slider   : ISliderTop[]  = []

  resultado : number = 0

  constructor() { }

  ngOnInit(): void {
    this.resultado = this.slider.length / this.elementosVisibles
  }
  ngOnChanges( changes : SimpleChanges ) : void {
    this.resultado = changes.slider.currentValue.length / this.elementosVisibles
  }
  aumentarNumero() : void{
    if(this.numero < this.resultado - 1 ){
      this.numero++
    }
  }
  disminuirNumero() : void{
    if(this.numero > 0){
      this.numero--
    }
  }
  ancho() : string{
    return `${100 * this.resultado }%`
  }
  translateX() : string{
    return `translateX(${-100 / this.resultado * this.numero}%)`
  }
  grid() : string{
    return `repeat(${this.slider.length}, 1fr)`
  }
  setSlide(valor : number) : void{
    this.numero = valor
  }
}
