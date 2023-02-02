import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsproteccionGuard implements CanActivate {

  constructor(private route:Router){

  }
  redirect(dato:boolean){
    if (dato==false) {
      console.log(dato)
      this.route.navigate(["/logueo"]);
      
    }
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       var datoToken=localStorage.getItem("tokenAcceso");
       var valor:boolean=true;
       if (datoToken==null) {
         valor=false;
         console.log(datoToken, "entroo");
         this.redirect(valor);
         return valor;
       }
       if (datoToken=="") {
        valor=false;
        this.redirect(valor);
        return valor;
       }
       console.log(datoToken, "entroo");
      /*  datoToken=false; */
    /*   this.redirect(datoToken); */
    return valor;
  }
}