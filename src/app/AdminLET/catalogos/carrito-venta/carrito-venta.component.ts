import { CurrencyPipe } from "@angular/common";
import { Reference } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductoService } from "src/app/servicios/producto.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-carrito-venta",
  templateUrl: "./carrito-venta.component.html",
  styleUrls: ["./carrito-venta.component.css"],
})
export class CarritoVentaComponent implements OnInit {
  datosCarrito: any = [];
  nombre="";
  buscaProducto:any=[];
  buscar:any={
	  nombre:""
  }
  sumatotal = 0;

  constructor(private route: Router, private serviceproducto:ProductoService) {
    localStorage.setItem("carritoVenta",JSON.stringify( this.datosCarrito));
  /*    */
  /* this.sumatotal; */
  this.consultaCarrito();
    console.log(this.datosCarrito);
    /* this.calculaTotal(); */
   this. calculaTotal();
    
  }
  ngOnInit() {}

  consultaCarrito(){
    this.datosCarrito = JSON.parse(localStorage.getItem("carritoVenta"));
  }

  buscarproducto(){
	  console.log("entroo")
	  var buscapro=this.serviceproducto.getbuscarProducto(this.nombre).subscribe(res=>{
		  this.buscaProducto=res;
      if (this.buscaProducto=="") {
        console.log("no disponibre")
        Swal.fire({
          icon: 'error',
          title: 'Producto No encontrado',
          text: 'Este Producto no se encuentra registrado!',
         /*  footer: '<a href="">Why do I have this issue?</a>' */
        })
      }
		  console.log(this.buscaProducto);
	  });
  }

  muestra(){
	  if (this.buscaProducto.length==0) {
		
		 return false
		  
	  }
	  if (this.buscaProducto.length>0) {
		
		 return true
	  }

  }
  
  cerrar(){
	  this.buscaProducto=false;
	  /* this.datosCarrito=true; */
  }
  agregar(dato:any){
    console.log(dato)
    this.datosCarrito.push(dato);
    var resultado=this.datosCarrito;
    localStorage.setItem("carritoVenta",JSON.stringify( resultado));
    this.calculaTotal();
    
  }
  eliminar(dato) {
    var indice = this.datosCarrito.indexOf(dato);
    this.datosCarrito.splice(indice, 1);
    /*  var resultado=this.datosCarrito; */
    localStorage.setItem("carritoVenta", JSON.stringify(this.datosCarrito));
    if (JSON.parse(localStorage.getItem("carritoVenta"))=="") {
      this.sumatotal=0;
      
    }
    this.restaTotal(dato)
  }
  calculaTotal() {
    if (JSON.parse(localStorage.getItem("carritoVenta"))=="") {
      return
    }
    var resultafo:any
    for (var i = 0; i <JSON.parse(localStorage.getItem("carritoVenta")).length; i++) {
       resultafo = JSON.parse(localStorage.getItem("carritoVenta"))[i];
      console.log(resultafo);
      /*  var precio= this.datosCarrito.find(elemento =>elemento.fltprecio==elemento.fltprecio); */
      
      console.log(this.sumatotal);
    }
    return this.sumatotal += resultafo.fltprecio;
  }

  restaTotal(dato) {
    this.sumatotal;
    this.sumatotal -= dato.fltprecio;
    if (this.sumatotal<0) {
      console.log("entroo resta")
      return this.sumatotal=0;
    }
   return this.sumatotal ;
  }
}
