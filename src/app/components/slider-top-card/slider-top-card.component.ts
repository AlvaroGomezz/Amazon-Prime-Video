import { Component, Input, OnInit } from '@angular/core';
import { ISliderTop } from 'src/app/interfaces/interfaces.module';

@Component({
  selector: 'app-slider-top-card',
  templateUrl: './slider-top-card.component.html',
  styleUrls: ['./slider-top-card.component.scss']
})
export class SliderTopCardComponent implements OnInit {

  @Input() pelicula : ISliderTop = {
    titulo : 'Deep Water',
    href   : '#',
    src    : 'https://m.media-amazon.com/images/S/sonata-images-prod/ES_Hero_Deep_Water_Launch/d4cb6ef2-de79-46f8-bdf7-30d0aca318a7._UR3000,600_SX3000_FMwebp_.jpeg',
    descripcion : 'Ben Affleck (Perdida) y Ana de Armas (Puñales por la espalda) protagonizan este thriller psicológico del director Adrian Lyne (Atracción fatal, Una proposición indecente). Con Deep Water nos adentramos en el matrimonio aparentemente perfecto de Vic (Affleck) y Melinda (de Armas) Van Allen para descubrir sus peligrosos juegos psicológicos y lo que les ocurre a quienes se ven envueltos en ellos.',
    buttons : {
      ver      : true,
      lista    : true,
      detalles : true,
    },
    videoSrc : 'https://avodmp4s3ww-a.akamaihd.net/ww_dub/9aa1/0fad/53ee/4c0b-bbee-43583f9403d0/3f212621-4737-4582-a00e-b8dc36c453c8_video_480p_900kbps_audio_aaclc_128kbps.mp4'
  }
  
  constructor() { }

  ngOnInit(): void {
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
