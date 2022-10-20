import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  obsPadre: BehaviorSubject<string> = new BehaviorSubject('PARENT USING SUBJECT');
  obsHijo: BehaviorSubject<string> = new BehaviorSubject('CHILD USING SUBJECT');
  constructor() { }

  valorObsPadre:string=''
  valorObsHijo:string=''

  mensajeServicePadre():string{
    return 'PARENT USING SERVICES'
  }
  mensajeServiceHijo():string{
    return 'CHILD USING SERVICES'
  }

  mensajeObsPadre():string{
    this.obsPadre
      .subscribe(valor =>{
        this.valorObsPadre=valor
      })
    return this.valorObsPadre    
  }

  mensajeObsHijo():string{
    this.obsHijo
      .subscribe(valor=>{
        this.valorObsHijo = valor
      })
      return this.valorObsHijo
  }
}
