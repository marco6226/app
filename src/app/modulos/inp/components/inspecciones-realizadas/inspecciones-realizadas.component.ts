import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterQuery } from '../../../com/entities/filter-query';
import { OfflineService } from '../../../com/services/offline.service';
import { StorageService } from '../../../com/services/storage.service';
import { Inspeccion } from '../../entities/inspeccion';
import { ListaInspeccion } from '../../entities/lista-inspeccion';
import { Realizada } from '../../entities/realizada';

@Component({
    selector: 'sm-inspeccion-realizada',
    templateUrl: './inspecciones-realizadas.component.html',
    styleUrls: ['./inspecciones-realizadas.component.css'],
})
export class InspeccionesRealizadasComponent implements OnInit {
    @Output('onRealizadaSelect') onRealizadaSelect = new EventEmitter<Realizada>();
    inspList: Inspeccion[];

    loading: boolean;
    inspCargadas: boolean;
    filtFechaHasta: any;
    filtFechaDesde: any;
    buttonText: boolean = true;
    count: number;
    tituloButton: String = 'Filtrar';
    constructor(private offlineService: OfflineService, private storageService: StorageService) {}

    ngOnInit() {
        this.cargarRealizadas();
    }

    cargarRealizadas() {
        this.loading = true;
        this.inspCargadas = false;
        // this.storageService
        //     .getInspecciones()
        //     .then((resp) => {
        //         this.realizadasList = resp['data'];
        //         this.loading = false;
        //         this.realizadasCargadas = true;
        //     })
        //     .catch((err) => {
        //         this.loading = false;
        //         this.realizadasCargadas = false;
        //     });
        this.offlineService
            .queryInspeccionesRealizadas()
            .then((resp) => {
                this.inspList = [];
                (<any[]>resp['data']).forEach((dto) => {
                    // console.log(resp);
                    this.inspList.push(FilterQuery.dtoToObject(dto)); //Llenar la lista de inspecciones con los datos
                });
                this.loading = false;
                this.inspCargadas = true;
                console.log(this.inspList);
            })
            .catch((err) => {
                this.loading = false;
                this.inspCargadas = false;
            });
    }

    filtrarFechaDesde(event) {
        this.filtFechaDesde = event.detail.value;
        if (this.filtFechaHasta != null && !this.buttonText) {
            this.filtrar();
        }
    }

    filtrarFechaHasta(event) {
        this.filtFechaHasta = event.detail.value;
        if (this.filtFechaDesde != null && !this.buttonText) {
            this.filtrar();
        }
    }

    filtrar() {
        this.loading = true;
        this.inspList = [];
        this.count = 0;
        this.cargarListasFiltro(this.filtFechaDesde, this.filtFechaHasta);
    }

    cargarListasFiltro(desde: Date, hasta: Date) {
        this.loading = true;
        this.inspList = [];
        this.offlineService
            .queryProgramacionListBetween(desde, hasta)
            .then((resp) => {
                this.inspList = [];
                (<any[]>resp['data']).forEach((dto) => {
                    console.log(resp);
                    this.inspList.push(FilterQuery.dtoToObject(dto));
                });
                this.loading = false;
                this.inspCargadas = true;
            })
            .catch((err) => {
                this.loading = false;
                this.inspCargadas = false;
            });
    }
    Reset() {
        if (this.buttonText) {
            if (this.filtFechaDesde != null && this.filtFechaHasta != null) {
                this.tituloButton = 'Borrar Filtro';
                this.buttonText = false;
                this.filtrar();
            }
        } else {
            this.tituloButton = 'Filtrar';
            this.buttonText = true;
            this.cargarRealizadas();
        }
    }
}
