import { Area } from './area';
import { Cargo } from './cargo';
import { Usuario } from './usuario';

export class Empleado {
    id: string;
    codigo: string;
    direccion: string;
    fechaIngreso: Date;
    fechaNacimiento: Date;
    genero: string;
    numeroIdentificacion: string;
    primerApellido: string;
    primerNombre: string;
    segundoApellido: string;
    segundoNombre: string;
    telefono1: string;
    telefono2: string;
    // afp: Afp;
    // ccf: Ccf;
    corporativePhone: string;
    emergencyContact: string;
    phoneEmergencyContact: string;
    emailEmergencyContact: string;
    // ciudad: Ciudad;
    // eps: Eps;
    tipoIdentificacion: any;
    tipoVinculacion: string;
    zonaResidencia: string;
    area: Area;
     cargo: Cargo;
    direccionGerencia: string;
    ciudadGerencia: string;
    businessPartner: Empleado;
    jefeInmediato: Empleado;
    regional: string;
    correoPersonal: string;
    usuario: Usuario;
    // configuracionJornadaList: ConfiguracionJornada[];
    // horasExtraList: HorasExtra[];
    // documentosList: Documento[];
    estado: string;
}