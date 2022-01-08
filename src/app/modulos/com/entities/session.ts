

import { Usuario } from '../../emp/entities/usuario';
import { Permiso } from '../../emp/entities/permiso';
import { Empresa } from '../../emp/entities/empresa';
import { Empleado } from '../../emp/entities/empleado';
import { ConfiguracionGeneral } from './configuracion-general';
import { Empleado } from '../../emp/entities/empleado';

export class Session {
    token: string;
    recordar: boolean;
    usuario: Usuario;
    empleado: Empleado;
    isLoggedIn: boolean;
    empleado: Empleado;
    empresa: Empresa;
    permisosList: Permiso[];
    permisosMap: Map<string, boolean>;
    offlineMode: boolean;
    configuracion: Map<string, any>;
}