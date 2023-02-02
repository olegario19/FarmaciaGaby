import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { provedoresModels } from '../modelos/provedoresModels';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {
  private url="https://localhost:44369";
  
  constructor(private http:HttpClient) { 
//http://192.168.45.226
  }
  getprovedores(){
    return this.http.get(`${this.url}/api/provedores`)
  }
  postprovedor(datosProvedor:provedoresModels){
    return this.http.post(`${this.url}/api/provedores`,datosProvedor)
  }
  creaprovedor(provedor:provedoresModels){

    return this.http.post(`${this.url}/api/provedores`,provedor);
  }

  putProvedor(id:number,dato:provedoresModels){
    console.log(id,dato)
    return  this.http.put(`${this.url}/api/provedores/`+id,dato)
  }

  postlogin(datos:any){
    return this.http.post(`${this.url}/api/usuario`,datos)

  }
}
