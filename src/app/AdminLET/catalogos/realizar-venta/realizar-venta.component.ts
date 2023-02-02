import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-realizar-venta',
  templateUrl: './realizar-venta.component.html',
  styleUrls: ['./realizar-venta.component.css']
})
export class RealizarVentaComponent implements OnInit {
  numero:number=+1;
  datosCarrito:any=[];
  productos:any=[];
  ob:any={
    nombre:"ole",
    ape:"marti"
  }

  constructor(private servicioProducto:ProductoService) {
    this.aumenta();
    this.consultaProductos();

    console.log(this.datosCarrito);
   }

  ngOnInit() {
  }
  aumenta(){
    this.numero;
  }
  consultaProductos(){
    this.servicioProducto.getconsultapro().subscribe(res=>{
      this.productos=res;
      console.log(this.productos)
  
    })
  }
  agregarCarrito(dato:any){
  var dat=dato;
  delete(dat.provedor);
  
    this.numero;
    console.log(dat);
    this.datosCarrito.push(dat);
    var resultado=this.datosCarrito;
    /* push(dat);  */
    localStorage.setItem("carritoVenta",JSON.stringify(resultado) );
    /* console.log(this.datosCarrito); */
  }
 
  eliminar(dato){
    var indice= this.datosCarrito.indexOf(dato); 
   this.datosCarrito.splice(indice,1);
   var resultado=this.datosCarrito;
   localStorage.setItem("carritoVenta",JSON.stringify(resultado));
   console.log(resultado);
   
  }
}
