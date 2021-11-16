import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Programacion } from '../../entities/programacion';
import { FilterQuery } from '../../../com/entities/filter-query'
import { OfflineService } from '../../../com/services/offline.service'
import { StorageService } from '../../../com/services/storage.service';

import { Criteria } from '../../../com/entities/filter';

@Component({
  selector: 'sm-programacionInspecciones',
  templateUrl: './programacion-inspecciones.component.html',
  styleUrls: ['./programacion-inspecciones.component.scss']
})
export class ProgramacionInspeccionesComponent implements OnInit {

  @Output("onProgramacionSelect") onProgramacionSelect = new EventEmitter<Programacion>();
  programacionList: Programacion[];

  loading: boolean;
  progCargada: boolean;

  programacionLista: Programacion[];
  count = 0;  
  filtFechaDesde: Date = new Date();
  filtFechaHasta: Date = new Date();

  constructor(
    private storageService: StorageService,
    private offlineService: OfflineService,
  ) { }

  ngOnInit() {
    this.cargarProgramacion();
    //this.filtFechaDesde.
  }

  cargarProgramacion() {
    this.loading = true;
    this.progCargada = null;
    this.offlineService.queryProgramacionList()
      .then(resp => {
        this.programacionList = [];
        (<any[]>resp['data']).forEach(dto => {
          console.log(resp);
          this.programacionList.push(FilterQuery.dtoToObject(dto));
        });
        this.loading = false;
        this.progCargada = true;
      })
      .catch(err => {
        this.loading = false;
        this.progCargada = false;
      });
  } 

  actualizarProgMetadata(id: string, aumentarRealizadas: boolean, aumentarOffline: boolean) {
    let prog: Programacion;
    for (let i = 0; i < this.programacionList.length; i++) {
      if (id == this.programacionList[i].id) {
        prog = this.programacionList[i];
        break;
      }
    }
    if (prog['offlineDone'] == null)
      prog['offlineDone'] = 0;
    prog.numeroRealizadas += aumentarRealizadas == null ? 0 : (aumentarRealizadas ? 1 : -1);
    prog['offlineDone'] += aumentarOffline == null ? 0 : (aumentarOffline ? 1 : -1);
    this.storageService.updateProgramacion(prog);
  }

  onProgSelect(prog: Programacion) {
    this.onProgramacionSelect.emit(prog);
  }
  /* *********************** Filtros ******************************** */

 
  filtrarFechaDesde(event) {
    this.programacionLista = [];
    this.count = 0;
    this.filtFechaDesde = event.detail.value;
    this.filtrar();
    
  }

  filtrarFechaHasta(event) {
    this.programacionLista = [];
    this.count = 0;
    this.filtFechaHasta = event.detail.value;
    this.filtrar();
  }

  filtrar(){
    this.loading = true;
    let filterQuery = new FilterQuery();
    filterQuery.sortField = "id";
    filterQuery.count = true;
    filterQuery.sortOrder = 1;
    filterQuery.offset = 0 + this.count;
    //filterQuery.rows = 3 ;
    
    
    filterQuery.fieldList = ['id',
                              'fecha',
                              'area_nombre',
                              'listaInspeccion_listaInspeccionPK',
                              'listaInspeccion_nombre',
                              'numeroInspecciones',
                              'numeroRealizadas'];

    filterQuery.filterList = [];

   
      filterQuery.filterList.push({
        criteria: Criteria.BETWEEN,
        field: "fecha",
        value1: this.filtFechaDesde.toString(), 
        value2: this.filtFechaHasta.toString()
      });
    
    console.log(filterQuery)   
   
    if (filterQuery.filterList.length > 0){      
      this.cargarListasFiltro(filterQuery);
    }else{
      this.cargarProgramacion();
    }
    
  }

  cargarListasFiltro(filterQuery: FilterQuery) {
    this.loading = true;
    this.programacionLista = null;
    this.offlineService.queryProgramacionListBetween(filterQuery)
      .then(resp => {
        this.programacionLista = resp['data'];
        this.loading = false;
       // this.listasCargadas = true;
      })
      .catch(err => {
        this.loading = false;
       // this.listasCargadas = false;
      });
  }

}
