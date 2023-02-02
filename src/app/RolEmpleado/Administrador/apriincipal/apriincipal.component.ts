import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apriincipal',
  templateUrl: './apriincipal.component.html',
  styleUrls: ['./apriincipal.component.css']
})
export class ApriincipalComponent implements OnInit {
/* datologueo:any={} */
 datologueo:any=JSON.parse(localStorage.getItem("datoUsuario"));

  constructor( private route: Router) {
 /*    if (this.datologueo==null ) {
  
      console.log("entrooo")
      this.route.navigate(["/logeo"]);
    } else{if (this.datologueo.rol=="Empleado") {
    
      this.route.navigate(["/logeo"]);
      localStorage.clear();
    }

    } */
     /*    this.datologueo.nombre==null && this.datologueo.codigo==null */
    /* console.log(this.datologueo.nombre) */

   }

  ngOnInit() {
  }

}
