import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { horaEntrada } from '../modelos/horaEntrada';

@Injectable({
  providedIn: 'root'
})
export class HoraEntradaService {
  private url="https://localhost:44369";
  constructor( private http:HttpClient) { }

  postHoraEntrada( dato:horaEntrada){
    console.log(dato);
    console.log("entrooooo");
    return  this.http.post(`${this.url}/api/horaEntrada`,dato)
    return this.http.post(`${this.url}/api/horaEntrada`,dato);
    /* return this.http.post(`${this.url}/api/producto/postproductos`,datos) */
  }
  postproducto(datos:horaEntrada){

    try{
      return this.http.post(`${this.url}/api/horaEntrada`,datos)

    }catch(error){
      console.log(error)
    }
  }
}
