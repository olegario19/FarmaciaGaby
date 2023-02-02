import { Component, OnInit } from '@angular/core';
import { productoModel } from 'src/app/modelos/productoModel';
import { provedoresModels } from 'src/app/modelos/provedoresModels';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productosmodel=new productoModel();
  provedormodels=new provedoresModels();
  productoss:any=[];
  
  
  constructor(private producto_service:ProductoService) { 
    this.consulta();
    
  }
  ngOnInit() {
  
   

  }
  consulta(){
    this.producto_service.getconsultapro().subscribe(res=>{
      this.productoss=res;
     console.log(res);
   });

  }
 
  guardar(){
    this.producto_service.getprovedor(this.provedormodels).subscribe(res=>{
      console.log(res);
    });
    // return this.productosmodel;
  }
}
