import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  muestra_productos=true;
  private productos:any={
    titulo:"productos",
    descripcion:"Somos una farmacia enfocada en ofrecer productos para la atencion de la enfermedad renal Venta de medicamentos y productos para padecimientos de los riñones",
    imagen:"assets/imagenes/productos.jpg"
  };
  private Higiene:any={
    titulo:"Higiene",
    descripcion:"la higiene personal es lo mas importante cuda tu higiene personal",
    imagen:"assets/imagenes/higiene.jpg"

  };
  constructor() { }

  ngOnInit() {
  }

}
