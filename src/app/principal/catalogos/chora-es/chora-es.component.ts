import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-chora-es',
  templateUrl: './chora-es.component.html',
  styleUrls: ['./chora-es.component.css']
})
export class ChoraESComponent implements OnInit {

  nombre:string="";
 //dateFormat = require('dateFormat');
 //"2021-11-11T17:23:13.383"
 now = new Date();

  fechadato = formatDate(this.now, 'yyyy-MM-dd hh:mm:ss a', 'en-US');

// dateFormat(now,'dd-MMM-yy h:mm:ss a');
    //dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    //console.log(this.dateFormat)
    dato:any={}
  datousuario:any={
    nombre:"",
    correo:"",
    codigo:"",
    fechaentrada:"",

  };
  
  constructor() { 

  console.log(this.fechadato)
    this.obtenerLocalStorage();
  }

  ngOnInit() {
  }

  obtenerLocalStorage(){
    this.nombre= localStorage.getItem("nombreUsuario");
    this.dato=JSON.parse(localStorage.getItem("datoUsuario")) ;
  this.datousuario.nombre=this.dato.nombre,
  this.datousuario.correo=this.dato.correo,
  this.datousuario.codigo=this.dato.codigo,
  this.datousuario.fechaentrada=this.fechadato,
   // console.log(this.nombre);
    console.log(this.datousuario);
  }
}
