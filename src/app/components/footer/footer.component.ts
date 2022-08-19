import { Component, OnInit } from '@angular/core';
import { IHeader } from 'src/app/interfaces/interfaces.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer : IHeader[] = [
    {nombre : 'Términos y Aviso de privacidad', url : '/'},
    {nombre : 'Envíanos tus comentarios'      , url : '/'},
    {nombre : 'Ayuda'                         , url : '/'},
    {nombre : 'Aviso sobre cookies'           , url : '/'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
