import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* import {CookieService}from 'ngx-cookie-service' */
//rutas//

import { APP_ROUTING } from './app.routes';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { HomeComponent } from './inicio/home/home.component';
import{HttpClientModule}from '@angular/common/http';
import { ProductosComponent } from './productos/productos/productos.component';
import{FormsModule, ReactiveFormsModule}from'@angular/forms';
import { HigieneComponent } from './higiene/higiene/higiene.component';
import { LoginComponent } from './login/login/login.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { ProvedorComponent } from './provedores/provedor/provedor.component';

import { EmpleadoComponent } from './empleado/empleado/empleado.component';
import { EprincipalComponent } from './RolEmpleado/eprincipal/eprincipal.component';
import { NavAdminComponent } from './AdminLET/nav-admin/nav-admin.component';
import { SindebarComponent } from './AdminLET/sindebar/sindebar/sindebar.component';
import { ContenidoPComponent } from './AdminLET/contenidoPagina/contenido-p/contenido-p.component';
import { ContieneCPComponent } from './AdminLET/contenidoCatalogoProducto/contiene-cp/contiene-cp.component';
import { ContieneCProvedorComponent } from './AdminLET/contenidoCatalogoProducto/contiene-cprovedor/contiene-cprovedor.component';
import { ContieneCcategoriasComponent } from './AdminLET/contenidoCatalogoProducto/contiene-ccategorias/contiene-ccategorias.component';
import { ChoraESComponent } from './principal/catalogos/chora-es/chora-es.component';

import { ApriincipalComponent } from './RolEmpleado/Administrador/apriincipal/apriincipal.component';
import { NavbarAdminComponent } from './AdminLetAdministrador/nav/navbar-admin/navbar-admin.component';
import { SindebarAdminComponent } from './AdminLetAdministrador/sindebar/sindebar-admin/sindebar-admin.component';
import { PrincipalAdminComponent } from './AdminLetAdministrador/contenidoCatalogos/principal-admin/principal-admin.component';
import { CatalogoProvedorComponent } from './AdminLetAdministrador/catalogos/catalogoProvedor/catalogo-provedor/catalogo-provedor.component';
import { RealizarVentaComponent } from './AdminLet/catalogos/realizar-venta/realizar-venta.component';
import { VentasRealizadosComponent } from './AdminLet/catalogos/ventas-realizados/ventas-realizados.component';
import { HoraEntradaComponent } from './AdminLet/catalogos/hora-entrada/hora-entrada.component';
import { HoraSalidaComponent } from './AdminLet/catalogos/hora-salida/hora-salida.component';
import { CarritoVentaComponent } from './AdminLET/catalogos/carrito-venta/carrito-venta.component';
import { CatalogoProductoComponent } from './AdminLetAdministrador/catalogos/catalogo-producto/catalogo-producto.component';
import { NavPrincipalComponent } from './nav-principal/nav-principal.component';
import { FoterComponent } from './footer/foter/foter.component';
import { ApartaProductosComponent } from './inicio/aparta-productos/aparta-productos.component';
/* import { CookieService } from 'ngx-cookie-service'; */
/* import { ErrorTailorModule } from '@ngneat/error-tailor'; */
/* import { ErrorTailorModule } from '@ngneat/error-tailor'; */





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductosComponent,
    HigieneComponent,
    LoginComponent,
    PrincipalComponent,
    ProvedorComponent,
 
    EmpleadoComponent,
    EprincipalComponent,
    NavAdminComponent,
    SindebarComponent,
    ContenidoPComponent,
    ContieneCPComponent,
    ContieneCProvedorComponent,
    ContieneCcategoriasComponent,
    ChoraESComponent,
  
    ApriincipalComponent,
  
    NavbarAdminComponent,
  
    SindebarAdminComponent,
  
    PrincipalAdminComponent,
  
    CatalogoProvedorComponent,
  
    RealizarVentaComponent,
  
    VentasRealizadosComponent,
  
    HoraEntradaComponent,
  
    HoraSalidaComponent,
  
    CarritoVentaComponent,
  
    CatalogoProductoComponent,
  
    NavPrincipalComponent,
  
    FoterComponent,
  
    ApartaProductosComponent,
  

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
     
     
    APP_ROUTING,

  ],
  providers: [/*  CookieService */ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
