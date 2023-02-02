import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {API}from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url="https://localhost:44369";
  constructor(private htttp:HttpClient,) { }

  postlogin( login:any){
    try{
      return this.htttp.post(`${this.url}/api/usuario`,login)
    }catch (error) {
      console.log(error);
      alert("password o contraseña incorrecta");
    }
  }
   
  

  login(datos:any){
    try {
      console.log(datos)
      return this.htttp.post(API+"/usuario",datos);
    } catch (error) {
      console.log(error);
      alert("password o contraseña incorrecta");
    }
  }

  getRol(){
    try{
      return this.htttp.get(`${this.url}/api/usuario/GetRol`)
    }catch(error){console.log(error
    )};
    
  }
  // async login(datos: any) {
  //   try {
  //     return await this.htttp.post(`${this.url}/api/usuario`,datos).toPromise();
  //   } catch (error) {
  //     console.log(error);
  //     alert("password o contraseña incorrecta");
  //   }
  // }
}

