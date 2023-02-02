import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { provedoresModels } from "src/app/modelos/provedoresModels";
import { ProductoService } from "src/app/servicios/producto.service";
import { ProvedorService } from "src/app/servicios/provedor.service";

@Component({
  selector: "app-higiene",
  templateUrl: "./higiene.component.html",
  styleUrls: ["./higiene.component.css"],
})
export class HigieneComponent implements OnInit {
  consultapro: any = [];
  provedoresmodels = new provedoresModels();
  public accion = "insertar";
  public canbiobtn="Guardar"
  id: number = 0;
  public provedor:any;

  constructor(
    private formbuilder: FormBuilder,
    private productoservice: ProductoService,
    private provedorservice: ProvedorService
  ) {
    this.productoservice.getconsultapro().subscribe((resultado) => {
      console.log(resultado);
    });
    this.consulta();
  }

  ngOnInit(): void {
    // this.formHigiene = this.formbuilder.group({
    //   id: ["", Validators.required],
    //   nombre: ["", [Validators.required]],
    //   correo: ["", [Validators.required, Validators.email]],
    //   direccion: ["", [Validators.required]],
    //   telefono: ["", [Validators.required, Validators.minLength(10)]],
    // });
  }

  consulta() {
    this.provedorservice.getprovedores().subscribe((res) => {
      this.consultapro = res;
      console.log(res);
    });
  }

  funcionFormulario() {
   
    if (this.id == 0) {
      console.log("agregaremos Provedores");
       this.guardar();
    } else {
      //this.id=this.provedor.intid;
     //this.editarprovedor(this.provedor);
     console.log("actualizaremos Provedor");
     console.log(this.provedor);
  
      this.provedorservice.putProvedor(this.id,this.provedoresmodels).subscribe(res=>{
        this.consulta();
        console.log(res);
      })
      // this.provedorservice.putProvedir(this.id,this.provedoresmodels).subscribe(res=>{

      //   console.log(res);
      // })

    }
  }

  guardar() {
    this.productoservice
      .getprovedor(this.provedoresmodels)
      .subscribe((resul) => {
        console.log(resul);
      });
  }
 
  editarprovedor(provedor:provedoresModels) {
    this.id=provedor.intid;
    console.log(provedor.intid)
    this.accion="actualizar";
    console.log(provedor);
    this.canbiobtn="Actualizar"
    this.provedoresmodels.intid=provedor.intid;
    this.provedoresmodels.nompro=provedor.nompro;
    this.provedoresmodels.vchcorreo=provedor.vchcorreo;
    this.provedoresmodels.vchdireccion=provedor.vchdireccion;
    this.provedoresmodels.vchtelefono=provedor.vchtelefono;
 
  }
}
