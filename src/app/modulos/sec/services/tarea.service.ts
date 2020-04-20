import { Injectable } from '@angular/core';
import { ServiceCRUD } from '../../com/services/service-crud.service';
import { Tarea } from '../entities/tarea';
import { timeout } from 'rxjs/operators';

@Injectable()
export class TareaService extends ServiceCRUD<Tarea>{

  reportarCumplimiento(tarea: Tarea) {
    let body = JSON.stringify(tarea);
    return new Promise((resolve, reject) => {
      this.httpInt.put(this.end_point + "reportarCumplimiento", body)
        .pipe(timeout(this.timeout))
        .subscribe(
          res => resolve(res),
          err => {
            reject(err);
            this.manageError(err);
          })
    });
  }

  reportarVerificacion(tarea: Tarea) {
    let body = JSON.stringify(tarea);
    return new Promise((resolve, reject) => {
      this.httpInt.put(this.end_point + "reportarVerificacion", body)
        .pipe(timeout(this.timeout))
        .subscribe(
          res => resolve(res),
          err => {
            reject(err);
            this.manageError(err);
          }
        )
    });
  }

  findByUsuario(usuarioId: string) {
    return new Promise((resolve, reject) => {
      this.httpInt.get(this.end_point + 'usuario/' + usuarioId)
        .subscribe(
          res => resolve(res),
          err => {
            this.manageError(err);
            reject(err);
          }
        )
    });
  }

  getClassName(): string {
    return "TareaService";
  }

}