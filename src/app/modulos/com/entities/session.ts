

import { Usuario } from '../../emp/entities/usuario';
import { Permiso } from '../../emp/entities/permiso';
import { Empresa } from '../../emp/entities/empresa';
import { ConfiguracionGeneral } from './configuracion-general';

export class Session {
    token: string;
    recordar: boolean;
    usuario: Usuario;
    isLoggedIn: boolean;
    empresa: Empresa;
    permisosList: Permiso[];
    permisosMap: Map<string, boolean>;
    offlineMode: boolean;
    configuracion: Map<string, any>;
}