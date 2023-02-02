import { Route } from "@angular/compiler/src/core";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
/* import { CookieService } from "ngx-cookie-service"; */
import { ProvedorService } from "src/app/servicios/provedor.service";
import { UsuarioService } from "src/app/servicios/usuario.service";
import { sweetalert } from "src/app/sweetAlert/sweetAler";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild("miform", { static: false }) miform: any;
  datoLogin: any = {
    corre: "",
    contrasena: "",
  };
  datosRol:any=[];
  datousuario:any={}
  alertas= new sweetalert();
  constructor(private servicio_login:UsuarioService, private route: Router) {}

  ngOnInit() {
   this.consultaRol();

  }
  login() {
    console.log(this.miform);
    if (this.miform.form.status == "INVALID") {
      alert("invalido")
      return
    }
   var respuesta:any= this.servicio_login.postlogin(this.datoLogin).subscribe(res=> {
    respuesta=res;
  
 /*    console.log(res) */
        if (respuesta == null) {
          this.alertas.errorLogin();
          
        }
        if (respuesta.token && respuesta.usuarioLogin.rol.nombreRol=="Administrador") {
          console.log(respuesta)
        // alert (respuesta.usuarioLogin.vchnombreusuario);
        this.datousuario={
         nombre:respuesta.usuarioLogin.vchnombreusuario,
         correo:respuesta.usuarioLogin.vchcorreo,
         codigo:respuesta.usuarioLogin.intidusuario,
         rol:respuesta.usuarioLogin.rol.nombreRol,
         token:respuesta.token,
        }
        localStorage.setItem("datoUsuario",JSON.stringify(this.datousuario) );
        localStorage.setItem("tokenAcceso",respuesta.token)
          this.route.navigate(["/Aprincipal"]);
          console.log(this.datousuario);
        }else{
          if (respuesta.token && respuesta.usuarioLogin.rol.nombreRol=="Empleado") {
            this.datousuario={
              nombre:respuesta.usuarioLogin.vchnombreusuario,
              correo:respuesta.usuarioLogin.vchcorreo,
              codigo:respuesta.usuarioLogin.intidusuario,
              rol:respuesta.usuarioLogin.rol.nombreRol,
              token:respuesta.token,
            }
            localStorage.setItem("datoUsuario",JSON.stringify(this.datousuario));
            localStorage.setItem("tokenAcceso",respuesta.token)
            this.route.navigate(["/Eprincipal"]);
          }else{
            this.route.navigate(["/logueo"]);
          }
        }
       // console.log(res);
      },
      (error) => {
        console.log(error);
        alert("Usuario o contraseña incorrecto");

      }
    );
  }

  consultaRol(){
    this.servicio_login.getRol().subscribe(res=>{
      this.datosRol=res;
      console.log(res);
    })
  }
}
