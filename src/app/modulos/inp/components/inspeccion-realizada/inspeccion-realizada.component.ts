import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OfflineService } from '../../../com/services/offline.service';
import { StorageService } from '../../../com/services/storage.service';
import { ListaInspeccion } from '../../entities/lista-inspeccion';
import { Realizada } from '../../entities/realizada';

@Component({
    selector: 'app-inspeccion-realizada',
    templateUrl: './inspeccion-realizada.component.html',
    styleUrls: ['./inspeccion-realizada.component.css'],
})
export class InspeccionRealizadaComponent implements OnInit {
    @Output('onRealizadaSelect') onRealizadaSelect = new EventEmitter<Realizada>();
    realizadasList: Realizada[];

    loading: boolean;
    realizadasCargadas: boolean;
    constructor(private offlineService: OfflineService, private storageService: StorageService) {}

    ngOnInit() {
        this.cargarRealizadas();
    }

    cargarRealizadas() {
        this.loading = true;
        this.realizadasCargadas = null;
        this.offlineService
            .queryInspeccionesRealizadas()
            .then((resp) => {
                this.realizadasList = resp['data'];
                this.loading = false;
                this.realizadasCargadas = true;
            })
            .catch((err) => {
                this.loading = false;
                this.realizadasCargadas = false;
            });
    }
    /*
    actualizarProgMetadata(id: string, aumentarRealizadas: boolean, aumentarOffline: boolean) {
        let realizada: Realizada;
        for (let i = 0; i < this.realizadasList.length; i++) {
            if (id == this.realizadasList[i].id) {
                realizada = this.realizadasList[i];
                break;
            }
        }
        if (realizada['offlineDone'] == null) realizada['offlineDone'] = 0;
        realizada.numeroRealizadas += aumentarRealizadas == null ? 0 : aumentarRealizadas ? 1 : -1;
        realizada['offlineDone'] += aumentarOffline == null ? 0 : aumentarOffline ? 1 : -1;
        this.storageService.updateProgramacion(realizada);
    }
*/
    seleccionarListaRealizadas(lista) {
        this.onRealizadaSelect.emit(lista);
    }
}
