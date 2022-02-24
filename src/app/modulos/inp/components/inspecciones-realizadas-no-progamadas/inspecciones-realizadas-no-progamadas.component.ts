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

  textoFilt: string;
  campoFilt: string;
  fechaDesde: Date = new Date('1/01/1990');
  fechaHasta: Date = new Date();
  ListaUbicacion: Inspeccion[];
  ubicaionFilt: string;
  filtroToogle: boolean = false;
  rotarIcon: string='rotate(0deg)';

  constructor(
    private offlineService: OfflineService,
    public modalController: ModalController) {}

  async ngOnInit() {
    await this.cargarRealizadas();
    // setTimeout(() => {
    //     this.extraerUbicacion();            
    // }, 5000);
  }


  cargarRealizadas() {
      this.loading = true;
      this.inspCargadas = null;
      this.offlineService
          .queryInspeccionesRealizadasNoProg()
          .then((resp) => {
              this.inspList=[];
              (<any[]>resp['data']).forEach(async (dto) => {
                  await this.inspList.push(FilterQuery.dtoToObject(dto)); 
              });
              this.loading = false;
              this.inspCargadas = true;
            //   setTimeout(() => {
                // this.extraerUbicacion();            
            //   }, 1000);
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

    filtrarInspecciones(){

        this.filtroToogle = !this.filtroToogle;

        if(this.filtroToogle){
            this.rotarIcon='rotate(180deg)'
        }
        else{
            this.rotarIcon='rotate(0deg)'
        }
        this.extraerUbicacion(); 
    }

    borrarFiltros(){
        this.textoFilt='';
        this.campoFilt='';
        this.fechaDesde = new Date('1/01/1990');
        this.fechaHasta = new Date();
        this.ubicaionFilt = '';
    }

    extraerUbicacion(){
        console.log("filtro ubicacion")  
        var hash = {};
        if(this.inspList.length>0){
           this.ListaUbicacion = this.inspList.filter(function(current) {
                if(current.area.nombre != null){
                    var exists = !hash[current.area.nombre];
                    hash[current.area.nombre] = true;
                    return exists;
                }
            }); 
        }
        
    }
}
