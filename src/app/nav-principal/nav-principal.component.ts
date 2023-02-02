import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-principal',
  templateUrl: './nav-principal.component.html',
  styleUrls: ['./nav-principal.component.css']
})
export class NavPrincipalComponent implements OnInit {
  @ViewChild('btnMenu',{static:true}) btnmenu:any;
  @ViewChild('Menu',{static:true}) menu:any;

  
  constructor( private  render2:Renderer2) {

   }

  ngOnInit() {
  }
  /* mostrar(){
    const estiloMenu=this.menu.nativeElement;
    this.render2.setStyle(estiloMenu,'color','red');
  }
 */

}
