import { Routes, RouterModule } from "@angular/router";
import { Component, NgModule } from "@angular/core";


import { HomeComponent } from "./inicio/home/home.component";
import { ProductosComponent } from "./productos/productos/productos.component";
import { HigieneComponent } from "./higiene/higiene/higiene.component";
import { LoginComponent } from "./login/login/login.component";
import { PrincipalComponent } from "./principal/principal/principal.component";
import { ProvedorComponent } from "./provedores/provedor/provedor.component";

import { EmpleadoComponent } from "./empleado/empleado/empleado.component";
import { EprincipalComponent } from "./RolEmpleado/eprincipal/eprincipal.component";
import { GuardGuard } from "./seguridadGuard/guard.guard";
import { ContieneCPComponent } from "./AdminLET/contenidoCatalogoProducto/contiene-cp/contiene-cp.component";
import { ContieneCProvedorComponent } from "./AdminLET/contenidoCatalogoProducto/contiene-cprovedor/contiene-cprovedor.component";
import { ChoraESComponent } from "./principal/catalogos/chora-es/chora-es.component";
import { ApriincipalComponent } from "./RolEmpleado/Administrador/apriincipal/apriincipal.component";
import { CatalogoProvedorComponent } from "./AdminLetAdministrador/catalogos/catalogoProvedor/catalogo-provedor/catalogo-provedor.component";
import { VentasRealizadosComponent } from "./AdminLet/catalogos/ventas-realizados/ventas-realizados.component";
import { HoraEntradaComponent } from "./AdminLet/catalogos/hora-entrada/hora-entrada.component";
import { HoraSalidaComponent } from "./AdminLet/catalogos/hora-salida/hora-salida.component";
import { RealizarVentaComponent } from "./AdminLet/catalogos/realizar-venta/realizar-venta.component";
import { GuardsproteccionGuard } from "./guards/guardsproteccion.guard";
import { GuardsAdministradorGuard } from "./guards/guards-administrador.guard";
import { CarritoVentaComponent } from "./AdminLET/catalogos/carrito-venta/carrito-venta.component";
import { CatalogoProductoComponent } from "./AdminLetAdministrador/catalogos/catalogo-producto/catalogo-producto.component";
import { ApartaProductosComponent } from "./inicio/aparta-productos/aparta-productos.component";

const routes: Routes = [
  /// Ruta Clientes///
  { path: "home", component: HomeComponent },
  {path:"logeo",component:LoginComponent},
  {path:"apartaProducto",component:ApartaProductosComponent},


  {path:"principal",component:PrincipalComponent,canActivate:[GuardGuard]},
  {path:"productos",component:ProductosComponent},
  {path:"provedores",component:ProvedorComponent},
  {path:'higiene',component:HigieneComponent},
  /* rutas Empleados */
 
  {path:"empleadoPrincipal",component:EmpleadoComponent},
  {path:"Eprincipal",component:EprincipalComponent,canActivate:[GuardsproteccionGuard]},
  {path:"mostrarVenta",component:VentasRealizadosComponent,canActivate:[GuardsproteccionGuard]},
  {path:"realizarVenta",component:RealizarVentaComponent,canActivate:[GuardsproteccionGuard]},
  {path:"HoraEntrada",component:HoraEntradaComponent,canActivate:[GuardsproteccionGuard]},
  {path:"HoraSalida",component:HoraSalidaComponent,canActivate:[GuardsproteccionGuard]},
  {path:"CarritoVenta",component:CarritoVentaComponent,canActivate:[GuardsproteccionGuard]},
 /*  {path:"CP_producto",component:ContieneCPComponent},
  {path:"CP_provedor",component:ContieneCProvedorComponent}, */
  {path:"HoraEyS",component:ChoraESComponent},
  /* {path:"Cproductos",component:CatalogoProductosComponent},  */

  /* rutas  adaministrador */

  {path:"Aprincipal",component:ApriincipalComponent,canActivate:[GuardsAdministradorGuard]},
  {path:"CatalogoProducto",component:CatalogoProductoComponent,canActivate:[GuardsAdministradorGuard]},
  {path:"ACatalogoProvedor",component:CatalogoProvedorComponent,canActivate:[GuardsAdministradorGuard]},
  { path: "**", pathMatch:'full', redirectTo:'logeo'},
  
  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const APP_ROUTING=RouterModule.forRoot(routes);

