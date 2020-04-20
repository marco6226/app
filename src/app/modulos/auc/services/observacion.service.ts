import { Injectable } from '@angular/core';
import { ServiceCRUD } from '../../com/services/service-crud.service'
import { Observacion } from '../entities/observacion';

@Injectable()
export class ObservacionService extends ServiceCRUD<Observacion>{

  getClassName(): string {
    return "ObservacionService";
  }
}
