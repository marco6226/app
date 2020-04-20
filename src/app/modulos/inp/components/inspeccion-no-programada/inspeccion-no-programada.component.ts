import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OfflineService } from '../../../com/services/offline.service';
import { ListaInspeccion } from '../../entities/lista-inspeccion';

@Component({
  selector: 'sm-inspeccionNoProgramada',
  templateUrl: './inspeccion-no-programada.component.html',
  styleUrls: ['./inspeccion-no-programada.component.scss']
})
export class InspeccionNoProgramadaComponent implements OnInit {

  @Output("onListaSelect") onListaSelect = new EventEmitter<ListaInspeccion>();
  listasInspeccion: ListaInspeccion[];

  loading: boolean;
  listasCargadas: boolean;

  constructor(
    private offlineService: OfflineService,
  ) { }

  ngOnInit() {
    this.cargarListas();
  }

  cargarListas() {
    this.loading = true;
    this.listasCargadas = null;
    this.offlineService.queryListasInspeccion()
      .then(resp => {
        this.listasInspeccion = resp['data'];
        this.loading = false;
        this.listasCargadas = true;
      })
      .catch(err => {
        this.loading = false;
        this.listasCargadas = false;
      });
  }

  seleccionarLista(lista) {
    this.onListaSelect.emit(lista);
  }

}
