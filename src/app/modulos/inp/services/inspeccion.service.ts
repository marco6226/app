import { Injectable } from '@angular/core';
import { ServiceCRUD } from '../../com/services/service-crud.service'
import { Inspeccion } from '../entities/inspeccion';

@Injectable()
export class InspeccionService extends ServiceCRUD<Inspeccion>{

  // create(entity: Inspeccion) {
  //   let body = JSON.stringify(entity);
  //   return new Promise(resolve => {
  //     this.httpInt.post(this.end_point, body)
  //       .subscribe(
  //         res => {
  //           let inp = <Inspeccion>res;
  //           if (inp.id != null) {
              
  //           }
  //           resolve(res);
  //         }
  //         ,
  //         err => this.manageError(err)
  //       )
  //   });
  // }

  getClassName(): string {
    return "InspeccionService";
  }
}
