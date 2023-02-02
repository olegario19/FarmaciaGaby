import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { provedoresModels } from 'src/app/modelos/provedoresModels';
import { ProvedorService } from 'src/app/servicios/provedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-provedor',
  templateUrl: './provedor.component.html',
  styleUrls: ['./provedor.component.css']
})
export class ProvedorComponent implements OnInit {
   consultapro:any=[];
   datosprovedor=new provedoresModels();
    //cuerpo:any=JSON.stringify(this.datosprovedor);
    public id:number=0;
    public accion="Formulario Provedor"
   // form:FormGroup; 
  constructor(private servicio_provedor:ProvedorService) {  
    this.consultaprovedor();
    
  }

  ngOnInit() {
   
  }

  accionFormulario(){
    
    if (this.id==0) {
      console.log("agregar provedor")
      
      this.guardarpro();

      
    }else{
      this.accion="Actualizar Formulario Provedor"
      console.log("actualizar provedor")
      this.servicio_provedor.putProvedor(this.id,this.datosprovedor).subscribe(resultado=>{
        if (resultado) {
          Swal.fire(
            'Actualizado Correctamente!',
            'You clicked the button!',
            'success'
          )          
        }
        this.consultaprovedor();
        console.log(resultado);
      })

    }

  }
  

  consultaprovedor(){
    this.servicio_provedor.getprovedores().subscribe(res=>{
      this.consultapro=res;
      console.log(res);
    });

  }
    guardarpro(){
     //let dto:any=JSON.stringify(datos);
     this.servicio_provedor.postprovedor(this.datosprovedor).subscribe(respuesta=>{
     
       this.consultaprovedor();
       console.log(respuesta);
       if (respuesta) {
         Swal.fire(
          'Registro insertado exitoso!',
          'You clicked the button!',
          'success'
        )
         
       }
       
      },error=>{
        console.log(error);
     });
   }
   formularioedita(datos){
    this.accion="Actualizar Formulario Provedor"
     this.id=datos.intid;
     this.datosprovedor.intid=datos.intid;
    this.datosprovedor.nompro=datos.nompro;
    this.datosprovedor.vchcorreo=datos.vchcorreo;
    this.datosprovedor.vchdireccion=datos.vchdireccion;
    this.datosprovedor.vchtelefono=datos.vchtelefono;
   }

}
