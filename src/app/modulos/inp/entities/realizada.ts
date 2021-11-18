import { ListaInspeccion } from './lista-inspeccion';
import { Area } from '../../emp/entities/area';

export class Realizada {
    id: string;
    numeroInspecciones: number;
    numeroRealizadas: number;
    fecha: Date;
    area: Area;
    listaInspeccion: ListaInspeccion;
}
