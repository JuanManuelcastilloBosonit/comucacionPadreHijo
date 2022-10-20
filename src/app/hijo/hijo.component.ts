import { Component, EventEmitter, Input,Output } from '@angular/core';
import { ComunicacionService } from '../service/comunicacion.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent  {

  constructor(private comuService: ComunicacionService) { }
  @Input() msgInput: string =''
  @Output() msgOutput: EventEmitter<string> = new EventEmitter

  mensajeService(){
    return this.msgOutput.emit(this.comuService.mensajeServiceHijo())
  }
  mensajeOutput(){
    this.msgOutput.emit('CHILD USING INPUT PROPERTY')
  }
  mensajeSubject(){
    this.msgOutput.emit(this.comuService.mensajeObsHijo())
  }

}
