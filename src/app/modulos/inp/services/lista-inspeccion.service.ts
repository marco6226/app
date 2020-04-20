import { Injectable } from '@angular/core';
import { ServiceCRUD } from '../../com/services/service-crud.service'
import { ListaInspeccion } from '../entities/lista-inspeccion'
import { ListaInspeccionPK } from '../entities/lista-inspeccion-pk'

@Injectable({
  providedIn: 'root'
})
export class ListaInspeccionService extends ServiceCRUD<ListaInspeccion>{

  getClassName(): string {
    return "ListaInspeccionService";
  }
}
