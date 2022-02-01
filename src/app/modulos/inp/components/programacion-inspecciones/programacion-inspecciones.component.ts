import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Programacion } from '../../entities/programacion';
import { FilterQuery } from '../../../com/entities/filter-query';
import { OfflineService } from '../../../com/services/offline.service';
import { StorageService } from '../../../com/services/storage.service';

import { Criteria } from '../../../com/entities/filter';

@Component({
    selector: 'sm-programacionInspecciones',
    templateUrl: './programacion-inspecciones.component.html',
    styleUrls: ['./programacion-inspecciones.component.scss'],
})
export class ProgramacionInspeccionesComponent implements OnInit {
    @Output('onProgramacionSelect') onProgramacionSelect = new EventEmitter<Programacion>();
    programacionList: Programacion[];

    loading: boolean;
    progCargada: boolean;

    programacionLista: Programacion[];
    count = 0;
    filtFechaDesde: Date;
    filtFechaHasta: Date;
    buttonText: boolean = true;
    tituloButton: String = 'Filtrar';

    nombreFilt: string;
    fechaDesde: Date = new Date('1/01/1990');
    fechaHasta: Date = new Date();
    ListaUbicacion: Programacion[];
    ubicaionFilt: string;
    filtroToogle: boolean = false;
    rotarIcon: string='rotate(0deg)';

    constructor(private storageService: StorageService, private offlineService: OfflineService) {}

    ngOnInit() {
        this.cargarProgramacion();
        setTimeout(() => {
            this.extraerUbicacion();            
        }, 1000);
    }

    cargarProgramacion() {
        this.loading = true;
        this.progCargada = null;
        this.offlineService
            .queryProgramacionList()
            .then((resp) => {
                this.programacionList = [];
                (<any[]>resp['data']).forEach((dto) => {
                    // console.log(resp);
                    this.programacionList.push(FilterQuery.dtoToObject(dto));
                });
                this.loading = false;
                this.progCargada = true;
            })
            .catch((err) => {
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
        if (prog['offlineDone'] == null) prog['offlineDone'] = 0;
        prog.numeroRealizadas += aumentarRealizadas == null ? 0 : aumentarRealizadas ? 1 : -1;
        prog['offlineDone'] += aumentarOffline == null ? 0 : aumentarOffline ? 1 : -1;
        this.storageService.updateProgramacion(prog);
    }

    onProgSelect(prog: Programacion) {
        this.onProgramacionSelect.emit(prog);
    }
    
    filtrarInspecciones(){

        this.filtroToogle = !this.filtroToogle;

        if(this.filtroToogle){
            this.rotarIcon='rotate(180deg)'
        }
        else{
            this.rotarIcon='rotate(0deg)'
        }
    }


    borrarFiltros(){
        this.nombreFilt='';
        this.fechaDesde = new Date('1/01/1990');
        this.fechaHasta = new Date();
        this.ubicaionFilt = '';
    }

    extraerUbicacion(){
          
        var hash = {};
        this.ListaUbicacion = this.programacionList.filter(function(current) {
          if(current.area.nombre != null){
              var exists = !hash[current.area.nombre];
              hash[current.area.nombre] = true;
              return exists;
          }
        });
  }

    ok(){
        console.log(this.programacionList, this.ListaUbicacion)
    }
}
