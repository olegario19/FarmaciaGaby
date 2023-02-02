import { Component, OnInit } from '@angular/core';
import { prependToElement } from '@fullcalendar/core/util/dom-manip';

import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aparta-productos',
  templateUrl: './aparta-productos.component.html',
  styleUrls: ['./aparta-productos.component.css']
})
export class ApartaProductosComponent implements OnInit {

  productos:any=[];
  productoApartado={
    nombre:"",
    descripcion:"",
    precio:"",
    cantidad:"2"
  };
  listaProductosApartados:any=[];
  consultCarrito:any=[]
  constructor( private servicio:ProductoService) {

   
    /* localStorage.setItem("apartadoProducto",JSON.stringify(this.listaProductosApartados)); */
    this.consulta();
   /*  this.consultaCarrito(); */
    this.consultaCarrito();
    /* this.listaapartado=JSON.parse(localStorage.getItem("apartadoProducto"));
    console.log(this.listaapartado) */

   }

  ngOnInit() {
  }

  consulta(){
    this.servicio.getconsultapro().subscribe(res=>{
      this.productos=res;
    });
  }
  consultaCarrito(){
      this.consultCarrito=JSON.parse(localStorage.getItem("apartadoProducto"));
   /*  if (this.consultCarrito.length==0) {
      alert ("falsoo")
      return
    } */
    /* console.log(this.consultCarrito) */
  }
  agregarProducto(dato:any){
    
   if (localStorage.getItem("apartadoProducto")) {
     console.log("valee localstorage si existe ")
     if (JSON.parse(localStorage.getItem("apartadoProducto")).length>9) {
      Swal.fire({
        icon: 'error',
        title: 'Excedio el limite de productos apartados',
        text: 'No puede apartar mas de 10 productos!',
       
      })
      return;
     }
     this.listaProductosApartados.push(dato);
     var arreglo:any=[];
     localStorage.setItem("apartadoProducto",JSON.stringify(this.listaProductosApartados));
   /*   arreglo.push(this.listaProductosApartados); */
     console.log(arreglo)
      this.consultaCarrito(); 
    return
   }else{
     if (localStorage.getItem("apartadoProducto")==null) {
       console.log("agregamos aparata Producto")
      localStorage.setItem("apartadoProducto",JSON.stringify(this.listaProductosApartados));
      return
     }
   }
  
    this.listaProductosApartados.push(dato);
   JSON.parse(localStorage.getItem("apartadoProducto")).push(this.listaProductosApartados);
    var resultado:any=[];
    resultado=JSON.parse(localStorage.getItem("apartadoProducto"));
   
   resultado.push(dato)
    console.log(resultado);
    /* localStorage.getItem("apartadoProducstaProductosApartadosto").push(JSON.stringify(resultado)); */
/*     localStorage.setItem("apartadoProducto",JSON.stringify(resultado)); */
    /* this.consultaCarrito(); */
   /*  console.log(this.listaProductosApartados) */

  }
  calculaApartado(){
    if (JSON.parse(localStorage.getItem("apartadoProducto")).length>10) {
       alert("usted excedio el limite")
      return
    }
  }

}
