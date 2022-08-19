import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IData, ISliders1, ISliderTop1 } from '../interfaces/interfaces.module';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(
    private http : HttpClient
  ) { }

  getPeliculas() : Observable<IData>{
    /* const options = {
      headers : new HttpHeaders({
        "Access-Control-Allow-Origin" : "*"
      })
    } */
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Origin', 'https://localhost:4006')
      .set('Access-Control-Allow-Credentials', 'true');

    return this.http.get<IData>('https://gomez-api-amazon.herokuapp.com/', {headers: headers})
  }
  getPeliculasByNombre(nombre : string) : Observable<IData> {
    /* const options = {
      headers : new HttpHeaders({
        "Access-Control-Allow-Origin" : "*"
      })
    } */
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Origin', 'https://localhost:4006')
      .set('Access-Control-Allow-Credentials', 'true');
    return this.http.get<IData>('https://gomez-api-amazon.herokuapp.com/pelicula/'+nombre, {headers: headers})
  }
  getSliderOriginals() : Observable<ISliders1>{
    /* const options = {
      headers : new HttpHeaders({
        "Access-Control-Allow-Origin" : "*"
      })
    } */
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Origin', 'https://localhost:4006')
      .set('Access-Control-Allow-Credentials', 'true');
    return this.http.get<ISliders1>('https://gomez-api-amazon.herokuapp.com/sliderOriginals', {headers: headers})
  }
  getSliderSeries() : Observable<ISliders1>{
    /* const options = {
      headers : new HttpHeaders({
        "Access-Control-Allow-Origin" : "*"
      })
    } */
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Origin', 'https://localhost:4006')
      .set('Access-Control-Allow-Credentials', 'true');
    return this.http.get<ISliders1>('https://gomez-api-amazon.herokuapp.com/sliderSeries', {headers: headers})
  }
  getSliderPeliculas() : Observable<ISliders1>{
    /* const options = {
      headers : new HttpHeaders({
        "Access-Control-Allow-Origin" : "*"
      })
    } */
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Origin', 'https://localhost:4006')
      .set('Access-Control-Allow-Credentials', 'true');
    return this.http.get<ISliders1>('https://gomez-api-amazon.herokuapp.com/sliderPeliculas', {headers: headers})
  }
  getSliderDescubrir() : Observable<ISliders1>{
    /* const options = {
      headers : new HttpHeaders({
        "Access-Control-Allow-Origin" : "*"
      })
    } */
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Origin', 'https://localhost:4006')
      .set('Access-Control-Allow-Credentials', 'true');
    return this.http.get<ISliders1>('https://gomez-api-amazon.herokuapp.com/sliderDescubrir', {headers: headers})
  }
  getSliderImdb() : Observable<ISliders1>{
    /* const options = {
      headers : new HttpHeaders({
        "Access-Control-Allow-Origin" : "*"
      })
    } */
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Origin', 'https://localhost:4006')
      .set('Access-Control-Allow-Credentials', 'true');
    return this.http.get<ISliders1>('https://gomez-api-amazon.herokuapp.com/sliderImdb', {headers: headers})
  }
  getSliderTop() : Observable<ISliderTop1>{
    /* const options = {
      headers : new HttpHeaders({
        "Access-Control-Allow-Origin" : "*"
      })
    } */
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Origin', 'https://localhost:4006')
      .set('Access-Control-Allow-Credentials', 'true');
    return this.http.get<ISliderTop1>('https://gomez-api-amazon.herokuapp.com/sliderTop', {headers: headers})
  }
}