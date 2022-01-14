import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterQuery } from '../../../com/entities/filter-query';
import { OfflineService } from '../../../com/services/offline.service';
import { StorageService } from '../../../com/services/storage.service';
import { Inspeccion } from '../../entities/inspeccion';
import { InspeccionConsultarFormComponent } from '../inspeccion-consultar-form/inspeccion-consultar-form.component';

@Component({
  selector: 'sm-inspecciones-realizadas-no-progamadas',
  templateUrl: './inspecciones-realizadas-no-progamadas.component.html',
  styleUrls: ['./inspecciones-realizadas-no-progamadas.component.scss'],
})
export class InspeccionesRealizadasNoProgamadasComponent implements OnInit {
  @Output('onInspSelect') onInspSelect = new EventEmitter<Inspeccion>();
  inspList: Inspeccion[];

  loading: boolean;
  inspCargadas: boolean;
  filtFechaHasta: any;
  filtFechaDesde: any;
  buttonText = true;
  count: number;
  tituloButton: String = 'Filtrar';

  constructor(
    private offlineService: OfflineService,
    public modalController: ModalController) {}

  ngOnInit() {
      this.cargarRealizadas();
  }


  cargarRealizadas() {
      this.loading = true;
      this.inspCargadas = null;
      this.offlineService
          .queryInspeccionesRealizadasNoProg()
          .then((resp) => {
              this.inspList=[];
              (<any[]>resp['data']).forEach((dto) => {
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


  async abrirInspeccion(inspeccion: Inspeccion) {
      const modal = await this.modalController.create({
          component: InspeccionConsultarFormComponent,
          componentProps: { value: inspeccion },
          cssClass: 'modal-fullscreen',
      });
      return await modal.present();
  }

  onInspeccionSelect(inspeccion: Inspeccion) {
      this.onInspSelect.emit(inspeccion);
  }

  filtrar() {
      this.loading = true;
      this.inspList = [];
      this.count = 0;
      this.cargarListasFiltro(this.filtFechaDesde, this.filtFechaHasta);
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

  cargarListasFiltro(desde: Date, hasta: Date) {
      this.loading = true;
      this.inspList = [];
      this.offlineService
          .queryRealizadasListBetweenNoProg(desde, hasta)
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
          this.filtFechaDesde = new Date()
          this.filtFechaHasta = new Date()
          this.cargarRealizadas();
      }
  }
}
