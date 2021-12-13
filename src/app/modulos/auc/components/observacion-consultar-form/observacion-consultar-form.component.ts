import { DomSanitizer } from '@angular/platform-browser';
import { DirectorioService } from './../../../ado/services/directorio.service';
//import { Usuario } from 'app/modulos/empresa/entities/usuario';
import { ObservacionService } from './../../services/observacion.service';
import { OfflineService } from './../../../com/services/offline.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Observacion } from '../../entities/observacion';
import { url } from 'inspector';
import { Criteria, Filter } from '../../../com/entities/filter';
import { FilterQuery } from '../../../com/entities/filter-query';
import { Tarjeta } from '../../entities/tarjeta';
import { ObservacionFormComponent } from '../observacion-form/observacion-form.component';
import { ObservacionSyncComponent } from '../observaciones-sync/observacion-sync.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-observacion-consultar-form',
  templateUrl: './observacion-consultar-form.component.html',
  styleUrls: ['./observacion-consultar-form.component.scss'],
})
export class ObservacionConsultarFormComponent implements OnInit {

  @ViewChild('obserSyncComp') obserSyncComp: ObservacionSyncComponent;

  observacionLista: Observacion;
  consultar: boolean;
  observacion: Observacion;
  listado: boolean=true;
  CambioObs: boolean=false;
  imagenesList: any = [];
  isGestionar: boolean=false;
  motivo: string;
  msg: string;
  tarjeta: Tarjeta;
  obsCount = 0;

  constructor(
    
    private alertController: AlertController,
    private modalController: ModalController,
    private offlineService: OfflineService,
    private observacionService: ObservacionService,
    private directorioService: DirectorioService,
    private domSanitizer: DomSanitizer

  ) { }

  async ngOnInit() {    
    await this.leerObservacionSeleccionada();
    this.cargaDatosLista();  
  }

  async leerObservacionSeleccionada(){
    await this.modalController.getTop()
    .then(data => {
      this.consultar = (<any>data).componentProps.operacion == 'GET';
      if (this.consultar == true) {
        this.observacion = (<any>data).componentProps.value;
      }      
    }); 
  }

  anterior() {
    this.presentAlertaSalir();
  }

  async presentAlertaSalir() {
    const alert = await this.alertController.create({
      header: '¿Desea salir?',
      message: 'La observación no ha sido guardada, los datos serán descartados. ¿Confirma esta acción?',
      buttons: [{
        text: 'Si',
        handler: () => {
          this.modalController.dismiss();
        }
      }, {
        text: 'No',
        role: 'cancel',
        cssClass: 'No'
      }]
    });
    await alert.present();
  }
  cargarObservacion(){
    
      this.offlineService.queryObservacion()
      .then(resp => {
        this.observacionLista = resp['data'];
      })
  }

  cargaDatosLista(){
    //this.loading = true;this.observacion.id.toString()
    if(Number.parseInt(this.observacion.id) > 0){
      this.offlineService.queryObservacionSelectID(this.observacion.id)
        .then(resp => {
          this.observacionLista = resp['data'];
        })
    }  

    let filter = new Filter();
        filter.criteria = Criteria.EQUALS;
        filter.field = "id";
        filter.value1 = this.observacion.id;
        let filterQuery = new FilterQuery();
        filterQuery.filterList = [filter];

    this.observacionService
      .findByFilter(filterQuery)
      .then((resp) => (this.observacion = resp["data"][0]))
      .then((resp) => {
          this.observacion.documentoList.forEach((doc) => {
              this.directorioService.download(doc.id).then((data) => {
                  let urlData = this.domSanitizer.bypassSecurityTrustUrl(
                      URL.createObjectURL(<any>data)
                  );
                  this.imagenesList.push({ source: Object.values(urlData) });
                  this.imagenesList = this.imagenesList.slice();
              });
          });
      });      
  }

  convertirAFecha(timestamp: number){
    var date = new Date(timestamp);
    return date.toLocaleString();
  }

  gestionarObservacion(){
    this.motivo = this.observacionLista.motivo;
    this.isGestionar = true;
    
  }

  back(){
    this.isGestionar = false;
    this.CambioObs = false;
  }

  async FinishReturn(){
    console.log(this.msg)
    const alert = await this.alertController.create({
      header: 'Datos Almacenados',
      message: this.msg,
      buttons: [{
        text: 'Si',
        handler: () => {
          this.modalController.dismiss();
        }
      },]
    });
    await alert.present();
  }

  guardarGestionObervacion(tipoEstado: string){
    this.observacion.motivo = this.motivo;
    this.observacionService
        .guardarGestionObervacion(this.observacion, tipoEstado)
        .then((data) => {
            /* this.visibleObservacion = false;*/
          this.msg = "La observación ha sido aceptada correctamente"; 
          this.FinishReturn();
        });      
  }
  
  
  async onTarjetaSelect() {
    this.tarjeta = this.observacionLista[0].tarjeta;
    console.log(this.observacionLista)
    const modal = await this.modalController.create({
      component: ObservacionFormComponent,
      //componentProps: { value: this.tarjeta },
      //componentProps: { value: this.observacion, operacion:"GET" },
      componentProps: { value: this.tarjeta, operacion:"GET", value1: this.observacion },
      cssClass: 'NoSE'
    });
    modal.onDidDismiss().then(
      resp => this.onModalDismiss(resp.data)
    );
    return await modal.present();
  }

  onModalDismiss(obser: Observacion) {
    if (obser != null && obser.id == null) {
      this.obsCount += 1;
      this.obserSyncComp.adicionarObservacion(obser);
    }
  }

}
