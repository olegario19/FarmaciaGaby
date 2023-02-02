import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eprincipal',
  templateUrl: './eprincipal.component.html',
  styleUrls: ['./eprincipal.component.css']
})
export class EprincipalComponent implements OnInit {
  datoUsu={
    nombre:"",
    correo:"",
    codigo:"",
    rol:"",
  };
  dat={
    nombre:"este"
  }
  constructor( private route:Router) {
   /*  this.datoUsu=JSON.parse(localStorage.getItem("datoUsuario"));
    if (this.datoUsu==null) {
      this.route.navigate(["/logeo"]);
      
    } 
    if (this.datoUsu.rol=="Administrador") {
    
      this.route.navigate(["/logeo"]);
      localStorage.clear();
      
    }
      console.log(this.datoUsu!)  */
        /* alert("entro empleado") */
   /* console.log(this.dat)
 */
   }

  ngOnInit() {
  }

}
