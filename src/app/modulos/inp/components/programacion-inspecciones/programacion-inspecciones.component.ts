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
  filtFechaDesde: Date;
  filtFechaHasta: Date;
  buttonText: boolean = true;
  tituloButton: String = "Filtrar";

  constructor(
    private storageService: StorageService,
    private offlineService: OfflineService,
  ) { }

  ngOnInit() {
    this.cargarProgramacion();
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
  /* *********************** Filtros ********************************* */ 
  filtrarFechaDesde(event) {
    this.filtFechaDesde = event.detail.value;   
  }

  filtrarFechaHasta(event) {
    
    this.filtFechaHasta = event.detail.value;
  }

  filtrar(){
    this.loading = true;
    this.programacionLista = [];
    this.count = 0;   
    this.cargarListasFiltro(this.filtFechaDesde, this.filtFechaHasta)
  }

  cargarListasFiltro(desde: Date, hasta: Date) {
    this.loading = true;
    this.programacionList = [];
    this.offlineService.queryProgramacionListBetween(desde,hasta)
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

  Reset(){
    if(this.buttonText){      
      if(this.filtFechaDesde!=null && this.filtFechaHasta!=null){
        this.tituloButton = "Borrar Filtro"
        this.buttonText = false;
        this.filtrar();
      }
    }else{
      this.tituloButton = "Filtrar"
      this.buttonText = true;
      this.cargarProgramacion();
    }    
  }

}
