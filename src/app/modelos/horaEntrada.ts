export class horaEntrada{

    idhora:number;
    dia:string;
    FechaHoraEntrada:Date;
    nombre:string;
    correo:string;
    idusuario:number;

    constructor(){
        this.idhora=0;
        this.dia="";
        this.FechaHoraEntrada=null;
        this.nombre="";
        this.correo="";
        this.idusuario=0;
    }
}