import { Injectable } from '@angular/core';
import { ServiceCRUD } from '../../com/services/service-crud.service'
import { Observacion } from '../entities/observacion';

@Injectable({
  providedIn: 'root'
})
export class ObservacionService extends ServiceCRUD<Observacion>{

  getClassName(): string {
    return "ObservacionService";
  }
}

  guardarGestionObervacion(observacion: Observacion, estado: string){
    let body = JSON.stringify(observacion);
    return new Promise((resolve) => {
        this.httpInt
            .put(this.end_point + estado, body)
            .subscribe(
                (res) => {
                    resolve(res);
                },
                (err) => this.manageError(err)
            );
    });
  }

}
