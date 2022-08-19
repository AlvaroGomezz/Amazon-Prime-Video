import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let [termino] = args
    let buscar = value.filter((pelicula : any) => pelicula.titulo.toLowerCase().includes(termino.toLowerCase()))
    if( termino !== ''){
      return buscar; 
    }
    
  }

}
