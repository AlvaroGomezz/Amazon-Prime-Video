import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import { ISliders } from 'src/app/interfaces/interfaces.module';


@Component({
  selector: 'app-slider-peliculas',
  templateUrl: './slider-peliculas.component.html',
  styleUrls: ['./slider-peliculas.component.scss']
})
export class SliderPeliculasComponent implements OnInit, OnChanges {

  @HostListener('window:resize',['$event'])
  resize( $event : any  ){
    let { target }  = $event
    this.innerWidth = target.innerWidth
    this.calculoElementos()
  }

  innerWidth        : number = 0
  numero            : number = 0
  elementosVisibles : number  = 3
  @Input() title    : string  = ''
  @Input() prime    : boolean = true
  @Input() media    : boolean = false
  @Input() slider   : ISliders[]   = []

  resultado      : number = 0
  anchoRestante  : number = 0

  constructor() { }

  ngOnInit(): void {
    this.innerWidth= window.innerWidth
    this.calculoElementos()
  }
  ngOnChanges():void{
    this.innerWidth= window.innerWidth
    this.calculoElementos()
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
  grid() : string{
    return `repeat(${this.slider.length}, 1fr)`
  }
  translateX() : string{
    if(this.numero === Math.trunc(this.resultado) ){
      return `translateX(-${this.anchoRestante}%)`
    }else{
      return `translateX(${(-100 / this.resultado * this.numero) }%)`
    }
  }
  anchoLi() : string {
    return `${100 / this.slider.length}%`
  }

  calculoElementos() : void {
    if( !this.media ){
      if( this.innerWidth < 590 ){
        this.elementosVisibles = 1
      }else if( this.innerWidth > 590 && this.innerWidth < 880){
        this.elementosVisibles = 2
      }else if( this.innerWidth > 880 && this.innerWidth < 1200){
        this.elementosVisibles = 3
      }else if( this.innerWidth > 1200 && this.innerWidth < 1480){
        this.elementosVisibles = 4
      }else if( this.innerWidth > 1480 && this.innerWidth < 1770){
        this.elementosVisibles = 5
      }else if( this.innerWidth > 1770 && this.innerWidth < 2080){
        this.elementosVisibles = 6
      }else if( this.innerWidth > 2080 ){
        this.elementosVisibles = 7
      }
    }else{
      if( this.innerWidth  < 750){
        this.elementosVisibles = 2
      }else if( this.innerWidth > 750 && this.innerWidth < 1040){
        this.elementosVisibles = 3
      }else if( this.innerWidth > 1040 ){
        this.elementosVisibles = 4
      }
    }
    this.resultado = this.slider.length / this.elementosVisibles
    this.anchoRestante = 100 - (100 / this.resultado)
  }

  margin() : string{
    if(this.media){
      return `320px`
    }else{
      return `0`
    }
  }

}
