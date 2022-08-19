import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IData } from 'src/app/interfaces/interfaces.module';

@Component({
  selector: 'app-slider-peliculas-card',
  templateUrl: './slider-peliculas-card.component.html',
  styleUrls: ['./slider-peliculas-card.component.scss']
})
export class SliderPeliculasCardComponent implements OnInit {

  activo : boolean = false

  @Input() pelicula : IData = {
    href        : '#',
    title       : 'Deep Water',
    src         : 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/05f055accfde1dbadebbf53ca257188c9180f2d88d6dcbaebe7d3921adbb90ff._RI_V_TTW_SX712_FMwebp_.jpg',
    srcVideo    : 'https://s3-iad-2.cf.trailer.row.aiv-cdn.net/6111/b87f/2efc/4de4-b16a-ae8c405ca274/bcffd02e-a3b2-4055-b694-0a56bef38053_video_900_audio_aaclc_128.mp4?Expires=1649323544&Signature=gvFzALKv6yoS6w2iaCTWrfCZk~-UHPly173MZEER8UOZ9lX9bmDYB0PDX7c4xlaDxiyL-vKR8Ww9BONrherHqlBJSGXu0hWzfO-juX1AcxEDgKBwk4ov0KTROmldv~FJy8vzj8y~x0wsSkes2VekPc8cCUndFW5xdHho0KwDOspS2x~XWQjMpNN9K0PqtjReBADFT0V1yxCbO7igIzAwN5qyrStblZlJ~dmfIc1e6DiVSZSuDZC2QwwLQ9QxVEa9WrTwMtXqPjuzS3Ky6N4kjfxueVrvZw2Iw8mCRz3mduu9pOR3c5xCr2fJxZ0omGYCzejz~~nyxAxZebP4VLqVoQ__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA',
    srcPrime    : 'https://m.media-amazon.com/images/G/01/digital/video/web/cues/v3/prime.svg',
    reproducir  : 'Reproducir T5 E1',
    prime       : true,
    description : 'Ben Affleck (Perdida) y Ana de Armas (Puñales por la espalda) protagonizan este thriller psicológico del director Adrian Lyne (Atracción fatal, Una proposición indecente). Con Deep Water nos adentramos en el matrimonio aparentemente perfecto de Vic (Affleck) y Melinda (de Armas) Van Allen para descubrir sus peligrosos juegos psicológicos y lo que les ocurre a quienes se ven envueltos en ellos.',
    duration    : '1 h 56 min',
    year        : 2022,
    subtitles   : true,
    age         : 16
  }

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {}

  setActivo() : void{
    this.activo = !this.activo
  }
  navegar( url : string ) : void {
    this.router.navigate( ['pelicula' , url ])
  }
}
