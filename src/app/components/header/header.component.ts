import { Component, OnInit } from '@angular/core';
import { IHeader } from 'src/app/interfaces/interfaces.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username : string = 'álvaro'

  nav : IHeader[] = [
    {nombre : 'Inicio', url : '/'},
    {nombre : 'Tienda', url : '/'},
    {nombre : 'Canales', url : '/'},
    {nombre : 'Categorías', url : '/'},
    {nombre : 'Mi espacio', url : '/'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
