import { ProgramacionService } from '../../inp/services/programacion.service';
import { FilterQuery } from '../entities/filter-query';
import { SesionService } from './sesion.service';
import { Filter, Criteria } from '../entities/filter';
import { Injectable } from '@angular/core';
import { ListaInspeccionService } from '../../inp/services/lista-inspeccion.service';
import { SistemaNivelRiesgoService } from './sistema-nivel-riesgo.service';
import { MensajeUsuario } from '../entities/mensaje-usuario';
import { TarjetaService } from '../../auc/services/tarjeta.service';
import { AreaService } from '../../emp/services/area.service';
import { SistemaCausaRaizService } from '../../sec/services/sistema-causa-raiz.service';
import { SistemaCausaInmediataService } from '../../sec/services/sistema-causa-inmediata.service';
import { DesviacionService } from './../../sec/services/desviacion.service';
import { StorageService } from './storage.service';
import { ActaService } from '../../cop/services/acta.service'
import { SistemaCausaAdministrativaService } from '../../sec/services/sistema-causa-administrativa.service';
import { Subject } from 'rxjs';
import { ManualService } from './manual.service';

@Injectable()
export class OfflineService {

    public toggleSubject = new Subject<boolean>();
    public sessionService: SesionService;

    constructor(
        private sistCausAdminService: SistemaCausaAdministrativaService,
        private storageService: StorageService,
        private desviacionService: DesviacionService,
        private areaService: AreaService,
        private tarjetaService: TarjetaService,
        private programacionService: ProgramacionService,
        private listaInspeccionService: ListaInspeccionService,
        private sistemaNivelRiesgoService: SistemaNivelRiesgoService,
        private sistemaCausaRaizService: SistemaCausaRaizService,
        private SistemaCausaInmediataService: SistemaCausaInmediataService,
        // public sessionService: SesionService,
        private manualService: ManualService,
        private actaService: ActaService
    ) {
        this.sessionService = this.storageService.getSessionService();
    }

    getOfflineMode(): boolean {
        return this.sessionService.getOfflineMode();
    }

    setOfflineMode(offlineMode) {
        this.sessionService.setOfflineMode(offlineMode);
        this.toggleSubject.next(offlineMode);
    }

    queryManualesPorUsuario(): any {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getManualesUsuario();
        } else {
            return this.manualService.buscarPorUsuario();
        }
    }

    querySistemaCausaAdmin(): any {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getSistemaCausaAdministrativa();
        } else {
            return this.sistCausAdminService.findDefault();
        }
    }

    queryListasInspeccion(completo?: boolean) {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getListasInspeccion();
        } else {
            let filterQuery = new FilterQuery();
            filterQuery.sortField = "nombre";
            filterQuery.sortOrder = -1;
            if (!completo) {
                filterQuery.fieldList = [
                    'listaInspeccionPK',
                    'nombre',
                    'codigo',
                    'descripcion'
                ];
            }

            return this.listaInspeccionService.findByFilter(filterQuery);
        }
    }

    querySistemaCausaInmediata(): any {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getSistemaCausaInmediata();
        } else {
            return this.SistemaCausaInmediataService.findDefault();
        }
    }

    queryDesviaciones(filterQuery?: FilterQuery, completo?: boolean) {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getDesviaciones();
        } else {
            let areasPerm = this.sessionService.getPermisosMap()['SEC_GET_DESV'].areas;
            if (filterQuery == null) {
                filterQuery = new FilterQuery();
                // filterQuery.sortField = "modulo";
                // filterQuery.sortOrder = 1;
                filterQuery.offset = 0;
                filterQuery.rows = 10;
                filterQuery.fieldList = ['hashId', 'modulo', 'aspectoCausante', 'concepto', 'area_nombre', 'analisisId'];
                filterQuery.filterList = [
                    { criteria: Criteria.CONTAINS, field: "area.id", value1: areasPerm }
                ];
            } else if (filterQuery.filterList != null) {
                filterQuery.filterList.push({ criteria: Criteria.CONTAINS, field: "area.id", value1: areasPerm });
            } else {
                filterQuery.filterList = [
                    { criteria: Criteria.CONTAINS, field: "area.id", value1: areasPerm }
                ];
            }
            return this.desviacionService.findByFilter(filterQuery);
        }
    }

    queryActasCopasst() {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getActasCopasst();
        } else {
            let areas = this.sessionService.getPermisosMap()['COP_GET_ACT'].areas;
            let filterQuery = new FilterQuery();
            filterQuery.sortField = "fechaElaboracion";
            filterQuery.sortOrder = 1;
            filterQuery.offset = 0;
            filterQuery.rows = 24;
            filterQuery.count = true;
            filterQuery.filterList = [
                { field: 'area.id', value1: areas, criteria: Criteria.CONTAINS }
            ];
            //filterQuery.fieldList = ['id', 'nombre', 'fechaElaboracion', 'descripcion', 'area_id', 'area_nombre', 'documentosList_id', 'documentosList_nombre'];
            return this.actaService.findByFilter(filterQuery);
        }
    }

    querySistemaCausaRaiz(): any {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getSistemaCausaRaiz();
        } else {
            return this.sistemaCausaRaizService.findDefault();
        }
    }

    queryArea(): any {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getAreas();
        } else {
            let fq = new FilterQuery()
            //fq.fieldList = ["id", "nombre"];
            fq.sortField = 'nombre';
            fq.sortOrder = -1;
            fq.filterList = [
                { field: 'areaPadre.id', criteria: Criteria.IS_NULL, value1: null }
            ]
            return this.areaService.buscarPorFiltro(fq, false);
        }
    }

    queryTarjetaObservacion(): any {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getTarjetas();
        } else {
            return this.tarjetaService.findByFilter();
        }
    }

    querySistemaNivelRiesgo() {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getSistemaNivelRiesgo();
        } else {
            let filterQuery = new FilterQuery();
            let filter = new Filter();
            filter.criteria = Criteria.EQUALS;
            filter.field = 'seleccionado';
            filter.value1 = 'true';
            filterQuery.filterList = [filter];
            return this.sistemaNivelRiesgoService.findByFilter(filterQuery);
        }
    }

    queryProgramacionList() {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getProgramaciones();
        } else {
            let filterQuery = new FilterQuery();
            filterQuery.sortField = 'fecha';
            filterQuery.sortOrder = 1;
            filterQuery.fieldList = [
                'id',
                'fecha',
                'area_nombre',
                'listaInspeccion_listaInspeccionPK',
                'listaInspeccion_nombre',
                'numeroInspecciones',
                'numeroRealizadas'
            ];
            let areas = this.sessionService.getPermisosMap()['INP_GET_PROG'].areas;
            filterQuery.filterList = [
                {
                    criteria: Criteria.CONTAINS,
                    field: "area.id",
                    value1: (areas == null ? null : areas.toString())
                },
                {
                    criteria: Criteria.NOT_EQUALS,
                    field: 'numeroInspecciones',
                    value1: 'numeroRealizadas',
                    isExpression: true
                }
            ];
            return this.programacionService.findByFilter(filterQuery);
        }
    }


    queryListaInspeccion(idLista: string, versionLista: number) {
        if (this.sessionService.getOfflineMode()) {
            return this.storageService.getListaInspeccion(idLista, versionLista);
        } else {
            let filterQuery = new FilterQuery();
            let filterId = new Filter();
            filterId.criteria = Criteria.EQUALS;
            filterId.field = "listaInspeccionPK.id";
            filterId.value1 = idLista;
            let filterVersion = new Filter();
            filterVersion.criteria = Criteria.EQUALS;
            filterVersion.field = "listaInspeccionPK.version";
            filterVersion.value1 = '' + versionLista;
            filterQuery.filterList = [filterId, filterVersion];
            return this.listaInspeccionService.findByFilter(filterQuery);
        }

    }

    loadData() {

        let permSistemaCR = this.sessionService.getPermisosMap()['SEC_GET_SCRDEF'];
        permSistemaCR = permSistemaCR == null ? { valido: false } : permSistemaCR;

        let permAreas = this.sessionService.getPermisosMap()['EMP_GET_AREA'];
        permAreas = permAreas == null ? { valido: false } : permAreas;

        let permTarjetaObser = this.sessionService.getPermisosMap()['AUC_GET_TARJ'];
        permTarjetaObser = permTarjetaObser == null ? { valido: false } : permTarjetaObser;

        let permSistemaNR = this.sessionService.getPermisosMap()['SEC_GET_SISTNR'];
        permSistemaNR = permSistemaNR == null ? { valido: false } : permSistemaNR;

        let permProgInsp = this.sessionService.getPermisosMap()['INP_GET_PROG'];
        permProgInsp = permProgInsp == null ? { valido: false } : permProgInsp;

        let permListActCop = this.sessionService.getPermisosMap()['COP_GET_ACT'];
        permListActCop = permListActCop == null ? { valido: false } : permListActCop;

        let permListDesv = this.sessionService.getPermisosMap()['SEC_GET_DESV'];
        permListDesv = permListDesv == null ? { valido: false } : permListDesv;

        let permListCausInm = this.sessionService.getPermisosMap()['SEC_GET_DESV'];
        permListCausInm = permListCausInm == null ? { valido: false } : permListCausInm;

        let permListasInspeccion = this.sessionService.getPermisosMap()['INP_GET_LISTINP'];
        permListasInspeccion = permListasInspeccion == null ? { valido: false } : permListasInspeccion;

        let permListCausAdmin = this.sessionService.getPermisosMap()['SEC_GET_DESV'];
        permListCausAdmin = permListCausAdmin == null ? { valido: false } : permListCausAdmin;

        let permManUsr = this.sessionService.getPermisosMap()['CONF_GET_MANUSR'];
        permManUsr = permManUsr == null ? { valido: false } : permManUsr;

        let queries = {
            querySistemaCausaRaiz: !permSistemaCR.valido,
            queryArea: !permAreas.valido,
            queryTarjetaObservacion: !permTarjetaObser.valido,
            querySistemaNivelRiesgo: !permSistemaNR.valido,
            queryProgramacionList: !permProgInsp.valido,
            queryActasCopasst: !permListActCop.valido,
            queryDesviaciones: !permListDesv.valido,
            querySistemaCausaInm: !permListCausInm.valido,
            queryListasInspeccion: !permListasInspeccion.valido,
            querySistemaCausaAdmin: !permListCausAdmin.valido,
            queryManualesPorUsuario: !permManUsr.valido,
        };
        this.setOfflineMode(false);
        return new Promise((resolve, reject) => {

            // Queries manuales de usuario
            if (permManUsr.valido) {
                this.queryManualesPorUsuario()
                    .then(resp => {
                        this.storageService.setManualesUsuario(resp['data']);
                        if (this.verificarCarga(queries, 'queryManualesPorUsuario'))
                            resolve();
                    })
                    .catch(err => reject(err));
            }

            // Queries sistema causa administrativa
            if (permListCausAdmin.valido) {
                this.querySistemaCausaAdmin()
                    .then(resp => {
                        this.storageService.setSistemaCausaAdministrativa([resp]);
                        if (this.verificarCarga(queries, 'querySistemaCausaAdmin'))
                            resolve();
                    })
                    .catch(err => reject(err));
            }

            // Queries sistema Listas inspeccion
            if (permListasInspeccion.valido) {
                this.queryListasInspeccion(true)
                    .then(resp => {
                        this.storageService.setListasInspeccion(resp['data']);
                        if (this.verificarCarga(queries, 'queryListasInspeccion'))
                            resolve();
                    }).catch(err => reject(err));
            }

            // Queries sistema causa inmediata
            if (permListCausInm.valido) {
                this.querySistemaCausaInmediata()
                    .then(resp => {
                        this.storageService.setSistemaCausaInmediata([resp]);
                        if (this.verificarCarga(queries, 'querySistemaCausaInm'))
                            resolve();
                    }).catch(err => err => reject(err));
            }

            // Queries desviaciones
            if (permListDesv.valido) {
                this.queryDesviaciones(null, true)
                    .then(resp => {
                        this.storageService.setDesviaciones(resp['data']);
                        if (this.verificarCarga(queries, 'queryDesviaciones'))
                            resolve();
                    }).catch(err => reject(err));
            }

            // Queries Actas COPASST
            if (permListActCop.valido) {
                this.queryActasCopasst()
                    .then(resp => {
                        this.storageService.setActasCopasst(resp['data']);
                        if (this.verificarCarga(queries, 'queryActasCopasst'))
                            resolve();
                    }).catch(err => reject(err));
            }

            // Queries AREAS
            if (permAreas.valido) {
                this.queryArea()
                    .then(resp => {
                        this.storageService.setAreas(resp['data']);
                        if (this.verificarCarga(queries, 'queryArea'))
                            resolve();
                    }).catch(err => reject(err));
            }

            // Queries CAUSA RAIZ
            if (permSistemaCR.valido) {
                this.querySistemaCausaRaiz()
                    .then(resp => {
                        this.storageService.setSistemaCausaRaiz([resp]);
                        if (this.verificarCarga(queries, 'querySistemaCausaRaiz'))
                            resolve();
                    }).catch(err => reject(err));
            }

            // Queries OBSERVACIONES
            if (permTarjetaObser.valido) {
                this.queryTarjetaObservacion()
                    .then(resp => {
                        this.storageService.setTarjetas(resp);
                        if (this.verificarCarga(queries, 'queryTarjetaObservacion'))
                            resolve();
                    }).catch(err => reject(err));
            }



            // Queries INSPECCIONES

            if (permSistemaNR.valido) {
                this.querySistemaNivelRiesgo()
                    .then(resp => {
                        this.storageService.setSistemaNivelRiesgo(resp['data']);
                        if (this.verificarCarga(queries, 'querySistemaNivelRiesgo'))
                            resolve();
                    }).catch(err => reject(err));
            }

            if (permProgInsp.valido) {
                let listas = {};
                this.queryProgramacionList()
                    .then(resp => {
                        this.storageService.setProgramaciones(resp['data']);
                        if (this.verificarCarga(queries, 'queryProgramacionList'))
                            resolve();
                    }).catch(err => reject(err));
            }
        });
    }

    verificarCarga(ctrlQueries: any, queriFin) {
        ctrlQueries[queriFin] = true;
        for (let key in ctrlQueries) {
            if (ctrlQueries[key] == false) return false;
        }
        this.setOfflineMode(true);
        return true;
    }

    sincronizar() {
        this.setOfflineMode(false);
        return new Promise((resolve, reject) => {
            let msg: MensajeUsuario = {
                tipoMensaje: 'info',
                mensaje: 'Modo online activado',
                detalle: ''
            };
            this.clearLocalStorage();
            resolve(msg);
        });
    }
    clearLocalStorage() {
        this.storageService.borrarSistemaNivelRiesgo();
        this.storageService.borrarProgramaciones();
        this.storageService.borrarAreas();
        this.storageService.borrarTarjetas();
        this.storageService.borrarSistemaCausaRaiz();
        this.storageService.borrarActasCopasst();
        this.storageService.borrarDesviaciones();
        this.storageService.borrarSistemaCausaInmediata();
        this.storageService.borrarListasInspeccion();
        this.storageService.borrarManualesUsuario();
    }
}