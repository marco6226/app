import { DirectorioService } from './../../../ado/services/directorio.service';
//import { Usuario } from 'app/modulos/empresa/entities/usuario';
import { ObservacionService } from './../../services/observacion.service';
import { OfflineService } from './../../../com/services/offline.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observacion } from '../../entities/observacion';
import { url } from 'inspector';
import { Criteria, Filter } from '../../../com/entities/filter';
import { FilterQuery } from '../../../com/entities/filter-query';
import { Tarjeta } from '../../entities/tarjeta';
import { ObservacionFormComponent } from '../observacion-form/observacion-form.component';

@Component({
  selector: 'app-observacion-consultar-form',
  templateUrl: './observacion-consultar-form.component.html',
  styleUrls: ['./observacion-consultar-form.component.scss'],
})
export class ObservacionConsultarFormComponent implements OnInit {

  observacionLista: Observacion;
  consultar: boolean;
  observacion: Observacion;
  listado: boolean=true;
  CambioObs: boolean=false;
  imagenesList: any = [];
  isGestionar: boolean=false;
  motivo: string;
  msg: string;
  domSanitizer: any;

  constructor(
    
    private alertController: AlertController,
    private modalController: ModalController,
    private offlineService: OfflineService,
    private observacionService: ObservacionService,
    private directorioService: DirectorioService,

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

  async cargaDatosLista(){
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

    await this.observacionService
      .findByFilter(filterQuery)
      .then((resp) => (this.observacion = resp["data"][0]))
      .then((resp) => {
          this.observacion.documentoList.forEach(async (doc) => {
              await this.directorioService.download(doc.id).then((data) => {
                  let urlData = this.domSanitizer.bypassSecurityTrustUrl(
                      URL.createObjectURL(data)
                  );
                  this.imagenesList.push({ source: urlData });
                  this.imagenesList = this.imagenesList.slice();
                  console.log(urlData)
              });
          });
      });

      console.log(this.imagenesList)
      /* this.observacionService.download(this.observacion.id).then((data)=>{
        let urlData = this.domSanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(data)          
      ); 
      console.log(urlData)      
    });*/
      
  }

  convertirAFecha(timestamp: number){
    var date = new Date(timestamp);
    return date.toLocaleString();
  }

  gestionarObservacion(){
    this.motivo = this.observacionLista.motivo;
    this.isGestionar = true;
    
  }
  gestionarObservacionDato(value: string){
    console.log(value)
    
  }

  ok(){
    if(this.motivo.length>0){
      this.CambioObs=true;
    }
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
  
  
  async onTarjetaSelect(tarjeta: Tarjeta) {
    const modal = await this.modalController.create({
      component: ObservacionFormComponent,
      componentProps: { value: tarjeta },
      cssClass: "modal-fullscreen"
    });
    modal.onDidDismiss().then(
      resp => this.onModalDismiss(resp.data)
    );
    return await modal.present();
  }

  onModalDismiss(obser: Observacion) {
    if (obser != null && obser.id == null) {
      //this.obsCount += 1;
      //this.obserSyncComp.adicionarObservacion(obser);
    }
  }

}
