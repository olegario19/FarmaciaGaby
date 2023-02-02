import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsAdministradorGuard implements CanActivate {
  constructor(private route:Router){

  }
  redireccion(dato:boolean){
    if (dato==false) {
      console.log("no cuenta con token")
      this.route.navigate(["/logueo"]);
    }
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var valorToken=localStorage.getItem("tokenAcceso");
      var valor:boolean=true;
      if (valorToken==null) {
        valor=false;
        this.redireccion(valor);
        return valor;
      }
    return valor;
  }
}