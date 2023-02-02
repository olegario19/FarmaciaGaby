import { Component, OnInit } from '@angular/core';
import { horaEntrada } from 'src/app/modelos/horaEntrada';
import {formatDate } from '@angular/common';
import { HoraEntradaService } from 'src/app/servicios/hora-entrada.service';
import Swal from 'sweetalert2';
import * as countdown from 'countdown';
import { timer } from 'rxjs';

@Component({
  selector: 'app-hora-entrada',
  templateUrl: './hora-entrada.component.html',
  styleUrls: ['./hora-entrada.component.css']
})
export class HoraEntradaComponent implements OnInit {
  HyE =new horaEntrada();
   dateDay = new Date().getDay();
   tiempoRestante:any={
    hours:0,
    minutes:0,
    seconds:0
   };
   timerId:number=null;
  datofecha=new Date();
  fechaDiaSiguiente:any;
  hours = this.datofecha.getHours();
  observacion:any={
    valor:null,

  }
   /* getMinutes(); */
/* formatoFecha:any=formatDate(this.datofecha,'yyyy-MM-dd hh:mm:ss a', 'en-US'); */
formatoFecha:any=formatDate(this.datofecha,'yyyy-MM-ddThh:mm:ss', 'en-US');



  dato:any={
  /*   nombre:"edgar",
    correo:"edgar@gmail.com",
    fecha:this.formatoFecha,
    //dia:new Date().getDay(),
    codigo:"12", */
  }

  constructor(private servicioHyE:HoraEntradaService) {
    console.log(this.datofecha)
 /*    localStorage.setItem("observacion",JSON.stringify(this.observacion));  */
       
      let datoF=new Date('Dec 21 2021 20:30:23 GMT-0600');
      this.timerId= countdown(datoF,(ts)=>{
      this.tiempoRestante=ts;
      console.log (this.tiempoRestante)
      if (this.tiempoRestante.value >0) {
        console.log("entroo al iff")
        clearInterval(this.timerId);
        this.tiempoRestante.hours=0;
        this.tiempoRestante.minutes=0;
        this.tiempoRestante.seconds=0;
      }
    },countdown.HOURS | countdown.MINUTES | countdown.SECONDS)
   }

  ngOnInit() {
    console.log("obtenemos la fechaa");
    this.datofecha.setHours(8);
    var hora=this.datofecha;
    this.datofecha.setMinutes(30)
    var minuto=this.datofecha;
     this.fechaDiaSiguiente= new Date(this.datofecha.getFullYear(),this.datofecha.getMonth(),this.datofecha.getDate(),hora.getHours(),minuto.getMinutes());
    console.log(this.obtenerFechaDiaSiguiente(this.fechaDiaSiguiente));
    console.log("obtenemos la fechaa");
   
  }
  obtenerFechaDiaSiguiente(fecha){

    return new Date(fecha.setDate(fecha.getDate()+1))
  }

  obtenerHorario(){
      var dia=Array(7);
        dia[0]="Domingo";
        dia[1]="Lunes";
        dia[2]="Martes";
        dia[3]="Miercoles";
        dia[4]="Jueves";
        dia[5]="Viernes";
        dia[6]="Sabado";
        dia[7]="Domingo";
      

      this.dato=JSON.parse(localStorage.getItem("datoUsuario"));
      this.HyE.FechaHoraEntrada=this.formatoFecha;
      this.HyE.dia=dia[this.dateDay];
      this.HyE.nombre=this.dato.nombre;
      this.HyE.correo=this.dato.correo;
      this.HyE.idusuario=this.dato.codigo;

  }
  guardarHoraentrada(){
    localStorage.setItem("observacion",JSON.stringify(this.observacion));
    var valorValido={
      valor:null,
    }
    valorValido=JSON.parse(localStorage.getItem("observacion"));
    console.log(valorValido)
    if (this.HyE.FechaHoraEntrada==null) {
      console.log("usted debe capturar la hortsa")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usted debe Obtener la Hora!',
       /*  footer: '<a href="">Why do I have this issue?</a>' */
      })
      return
    }
    if (valorValido.valor==true) {
  /*     console.log("el tiempoo es ",this.tiempoRestante.hours ) */
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usted ya capturo la Hora!',
      
      })
      return
    }
    this.servicioHyE.postHoraEntrada(this.HyE).subscribe(res=>{
      console.log(res);
      if (res) {
        Swal.fire(
          'Hora capturado!',
          'Exitoso!',
          'success'
        )
        this.observacion.valor=true;
        localStorage.setItem("observacion",JSON.stringify(this.observacion));     
      }
    });

  }
  validaCapturaHora(){
 
  }

}
interface tiempo{
  hora:number,
  minuto:number,
  segundo:number
}


