import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { productoModel } from '../modelos/productoModel';
import { provedoresModels } from '../modelos/provedoresModels';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 private url="https://localhost:44369";
 //private url="http://192.168.45.74:45455";
  constructor(private http:HttpClient) { }
  getconsultapro(){
    return this.http.get(`${this.url}/api/producto`);
  }
  getproductosexpiracion(){
    return this.http.get(`${this.url}/api/producto/consultaCaducidad`)
  }
  getbuscarProducto(dato:any){
    return this.http.get(`${this.url}/api/producto/buscaproducto?nombre=${dato}`);
  }

  getcnmprovedor(){
    try{
      return this.http.get(`${this.url}/api/provedores/consultacmb`)
    }catch(error){
      console.log(error)
    }
  }
  getprovedor(provedor:provedoresModels){

    return this.http.post(`${this.url}/api/provedores`,provedor);
  }

  postproducto(datos:productoModel){

    try{
      return this.http.post(`${this.url}/api/producto/postproductos`,datos)

    }catch(error){
      console.log(error)
    }
  }

  putProducto(id:number,datos:productoModel){
    try{
      return this.http.put(`${this.url}/api/producto/PutProducto/`+id,datos)
    }catch(error){
      console.log(error)
    }
  }


}

