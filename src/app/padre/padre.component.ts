import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ComunicacionService } from '../service/comunicacion.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent  {

  constructor(private comuService: ComunicacionService) { }
 
  mensaje:string=''
  mensajeHijo:string=''
  
  mensajeService(){
    this.mensajeHijo=this.comuService.mensajeServicePadre()
  }
  mensajeInput(){
    this.mensajeHijo=('PARENT USING INPUT PROPERTY')
  }
  mensajeSubject(){
    this.mensajeHijo=(this.comuService.mensajeObsPadre())
  }
  mensajeOutput($event:string){
    this.mensaje=$event
  }

}
