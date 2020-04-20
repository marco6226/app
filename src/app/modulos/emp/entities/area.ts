import { TipoArea } from './tipo-area'

export class Area {
  id: string;
  nombre: string;
  descripcion: string;
  nivel: number;
  tipoArea: TipoArea;
  areaPadre: Area;
  areaList: Area[];

  numero: number;

}
