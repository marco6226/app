import { ListaInspeccionPK } from './../../entities/lista-inspeccion-pk';
import { Component, OnInit, ViewChild } from '@angular/core';
import { InspeccionFormComponent } from '../../components/inspeccion-form/inspeccion-form.component'
import { ModalController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Programacion } from '../../entities/programacion';
import { Inspeccion } from '../../entities/inspeccion';
import { asyncLocalStorage } from '../../../com/utils/util';
import { InspeccionesSyncComponent } from '../../components/inspecciones-sync/inspecciones-sync.component';
import { ProgramacionInspeccionesComponent } from '../../components/programacion-inspecciones/programacion-inspecciones.component';
import { StorageService } from '../../../com/services/storage.service';
import { InspeccionPendienteComponent } from '../../components/inspeccion-pendiente/inspeccion-pendiente.component';
import { ListaInspeccion } from '../../entities/lista-inspeccion';

import { OfflineService } from '../../../com/services/offline.service';
import { Criteria } from '../../../com/entities/filter';
import { FilterQuery } from '../../../com/entities/filter-query';

@Component({
  selector: 'sm-elaboracionInspeccion',
  templateUrl: './elaboracion-inspeccion.page.html',
  styleUrls: ['./elaboracion-inspeccion.page.scss'],
})
export class ElaboracionInspeccionPage implements OnInit {

  @ViewChild('inspSyncComp') inspSyncComp: InspeccionesSyncComponent;
  @ViewChild('progInspComp') progInspComp: ProgramacionInspeccionesComponent;

  filtDisp: boolean;

  segments = { listas: true, prog: false, realizadas: false, insp: false };
  inspCount = 0;

  filtCodigo: string;
  filtVersion: string;
  filtNombre: string;
  filtTipoLista: string;
  filtDescripcion: string;
  filtEstado: string;
  filtFechaDesde: String;
  filtFechaHasta: String;

  count = 0;
  loading = true;
  disabled = false;
  inspeccionList: ListaInspeccion[];
  inspListSelect: ListaInspeccion[];

  constructor(
    public popoverController: PopoverController,
    public storageService: StorageService,
    public modalController: ModalController,
    private offlineService: OfflineService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.filtDisp = this.offlineService.getOfflineMode() != true;
    this.cargarInspPendientes();
  }

  cargarInspPendientes(desdeBoton?: boolean) {    
    this.storageService.getInspeccionesPendientes()
      .then(resp => {
        let inspPend = resp.data;
        console.log(resp.count)
        if (inspPend.length > 0 || desdeBoton == true) {
          this.abrirInspPendientes(inspPend);
        }
      });      
  }

  async abrirInspPendientes(inspecciones: Inspeccion[]) {
    const popOver = await this.popoverController.create({
      component: InspeccionPendienteComponent,
      componentProps: { inspecciones: inspecciones },
    });
    popOver.onDidDismiss()
      .then(resp => {
        let insp: Inspeccion = resp.data;
        if (insp) {
          this.abrirInspeccion(null, null, insp);
        }
      });      
    console.log(Inspeccion)
    return await popOver.present();
  }
  cargarInspRealizadas(desdeBoton?: boolean) {
    this.storageService.getInspeccionesRealizadas().then((resp) => {
        let inspRealizadas = resp.data;
        if (inspRealizadas.length > 0 || desdeBoton == true) {
            this.abrirInspRealizadas(inspRealizadas);
        }
    });
}
async abrirInspRealizadas(inspecciones: Inspeccion[]) {
  const popOver = await this.popoverController.create({
      component: InspeccionPendienteComponent,
      componentProps: { inspecciones: inspecciones },
  });
  popOver.onDidDismiss().then((resp) => {
      let realizadas: Inspeccion = resp.data;
      if (realizadas) {
          this.abrirInspeccion(null, null, realizadas);
      }
  });
  return await popOver.present();
}

  async abrirInspeccion(programacion: Programacion, listaInspeccion: ListaInspeccion, inspeccion: Inspeccion) {
    const modal = await this.modalController.create({
      component: InspeccionFormComponent,
      componentProps: {
        programacion: programacion,
        listaInspeccion: listaInspeccion,
        inspeccion: inspeccion,
      },
      cssClass: "modal-fullscreen"
    });
    modal.onDidDismiss()
      .then(resp => {
        this.onModalDismiss(resp['data'], programacion != null ? programacion : null);
      });
    return await modal.present();
  }

  onModalDismiss(inspeccion: Inspeccion, prog: Programacion) {
    if (inspeccion != null && inspeccion.id == null) {
      this.inspSyncComp.adicionarInspeccion(inspeccion);
      this.inspCount += 1;
      if (prog != null)
        this.progInspComp.actualizarProgMetadata(prog.id, null, true);
    } else if (inspeccion != null && prog != null) {
      prog.numeroRealizadas += 1;
    }
  }

  onEvent(event) {
    switch (event.type) {
      case 'onSync':
        // si event.inspeccion.programacion  == null indica que es una programacion no programada
        if (event.inspeccion.programacion != null)
          this.progInspComp.actualizarProgMetadata(event.inspeccion.programacion.id, true, false);
        break;
      case 'onLocalRemove':
        // si event.inspeccion.programacion  == null indica que es una programacion no programada
        if (event.inspeccion.programacion != null)
          this.progInspComp.actualizarProgMetadata(event.inspeccion.programacion.id, null, false);
        break;
    }
    this.inspCount = event.count;
  }

  navegar(url) {
    this.router.navigate([url])
  }

  segmentChanged(event) {
    for (var seg in this.segments) {
      this.segments[seg] = false;
      if (event.detail.value == seg)
        this.segments[seg] = true;

    }
  }

  /* *********************** inspecciones no programadas ******************************** */


  /* *********************** Filtros ******************************** */

  filtrar(lm) {
    this.loading = true;
    let filterQuery = new FilterQuery();
    filterQuery.sortField = "nombre";
    filterQuery.count = true;
    filterQuery.sortOrder = 1;
    filterQuery.offset = 0 + this.count;
    filterQuery.rows = 3 ;
    filterQuery.fieldList = ['nombre','codigo','descripcion'];

    filterQuery.filterList = [];
    
    if (this.filtCodigo != null && this.filtCodigo.length > 0) {
      filterQuery.filterList.push({
        criteria: Criteria.LIKE,
        field: "codigo",
        value1: '%' + this.filtCodigo + '%'
      });
      console.log(filterQuery)
    }

    if (this.filtNombre != null && this.filtNombre.length > 0) {
      filterQuery.filterList.push({
        criteria: Criteria.LIKE,
        field: "nombre",
        value1: '%' + this.filtNombre + '%'
      });
      console.log(filterQuery)
    }

    if (this.filtDescripcion != null && this.filtDescripcion.length > 0) {
      filterQuery.filterList.push({
        criteria: Criteria.LIKE,
        field: "descripcion",
        value1: '%' + this.filtDescripcion + '%'
      });
      console.log(filterQuery)
    }

/**/
    this.offlineService.queryListaInspeccionFilter(filterQuery)
      .then(resp => {
        console.log(filterQuery);
        let count = <number>resp['count'];
        console.log(count);
        (<any[]>resp['data']).forEach(dto => {
          let desv: ListaInspeccion = FilterQuery.dtoToObject(dto);
          desv['selected'] = false;
          this.inspeccionList.push(desv);
          if (this.count >= count) this.disabled = true  ;
          
        });
        this.loading = false;
        this.cargarSeleccionados();
      })
      .catch(err => this.loading = false);
  }
  

  filtrarCodigo(event) {
    this.inspeccionList = [];
    this.count = 0;
    this.filtCodigo = event.detail.value;
    this.filtrar(false);
  }

  filtrarNombre(event) {
    this.inspeccionList = [];
    this.count = 0;
    this.filtNombre = event.detail.value;
    this.filtrar(false);
  }

  
  filtrarDescripcion(event) {
    this.inspeccionList = [];
    this.count = 0;
    this.filtDescripcion = event.detail.value;
    this.filtrar(false);
  }

 
  filtrarFechaDesde(event) {
    this.inspeccionList = [];
    this.count = 0;
    this.filtFechaDesde = event.detail.value;
    this.filtrar(false);
  }

  filtrarFechaHasta(event) {
    this.inspeccionList = [];
    this.count = 0;
    this.filtFechaHasta = event.detail.value;
    this.filtrar(false);
  }




  cargarSeleccionados() {    
    console.log("hola")
    console.log(this.inspListSelect)
    for (let i = 0; i < this.inspeccionList.length; i++) {
      for (let j = 0; j < this.inspeccionList.length; j++) {
        if (this.inspListSelect[j].nombre == this.inspeccionList[i].nombre) {
          this.inspeccionList[i]['selected'] = true;
          break;
        }
      }
    }
  }
}
