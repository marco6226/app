
import { Calificacion } from './calificacion'
import { Programacion } from './programacion'
import { Usuario } from '../../emp/entities/usuario';
import { RespuestaCampo } from '../../com/entities/respuesta-campo';
import { Empresa } from '../../emp/entities/empresa';
import { ListaInspeccion } from './lista-inspeccion';
import { Area } from '../../emp/entities/area';

export class Inspeccion {
  id: string;
  fechaRealizada: Date;
  fechaModificacion: Date;
  observacion: string;
  lugar: string;
  equipo: string;
  marca: string;
  modelo: string;
  serial: string;
  descripcion: string;
  empresa: Empresa;
  calificacionList: Calificacion[];
  respuestasCampoList: RespuestaCampo[];
  programacion: Programacion;
  usuarioRegistra: Usuario;
  usuarioModifica: Usuario;
  listaInspeccion: ListaInspeccion;
  area: Area;
}
