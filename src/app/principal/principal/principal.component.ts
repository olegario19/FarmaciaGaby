import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  private consultaProExpiracion:any=[];
  constructor(private producto_service:ProductoService) {
    this.getconsulta()
   }

  ngOnInit() {
  }

  getconsulta(){
    this.producto_service.getproductosexpiracion().subscribe(respuesta=>{

      console.log(respuesta);
      this.consultaProExpiracion=respuesta;
    })
  }

}
