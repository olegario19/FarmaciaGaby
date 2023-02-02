import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-catalogo-producto',
  templateUrl: './catalogo-producto.component.html',
  styleUrls: ['./catalogo-producto.component.css']
})
export class CatalogoProductoComponent implements OnInit {
  @ViewChild("miform",{static:false})miform: any;
  consultaproducto:any=[];
  nombreproducto:string="";
  cmbProvedor:any=[];
  constructor(private serviceProducto:ProductoService ) { 
    
    this.connsulta();
    this.cnmProvedor()
  }

  ngOnInit() {
  }

  accionBoton(){
    if (this.miform.status=="INVALID") {
       alert("llena todos los campos")
      
    }
    if (this.miform.status=="VALID") {
      alert("fORMULARIO cORRECTO")
    }
    

  }

  cnmProvedor(){
    this.serviceProducto.getcnmprovedor().subscribe(res=>{
      this.cmbProvedor=res;
      /* console.log(this.cmbProvedor) */
    })
  }

  connsulta(){
    this.serviceProducto.getconsultapro().subscribe(res=>{
      this.consultaproducto=res;

      console.log("consulta producto")
    /*   console.log(this.consultaproducto) */
    })
  }

}
