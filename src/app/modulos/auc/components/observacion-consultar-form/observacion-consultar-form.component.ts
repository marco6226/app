//import { Usuario } from 'app/modulos/empresa/entities/usuario';
import { ObservacionService } from './../../services/observacion.service';
import { OfflineService } from './../../../com/services/offline.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observacion } from '../../entities/observacion';

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

  isGestionar: boolean=false;
  motivo: string;
  msg: string;

  constructor(
    
    private alertController: AlertController,
    private modalController: ModalController,
    private offlineService: OfflineService,
    private observacionService: ObservacionService,

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
        //this.loading = false;
      })
      .catch(err => {
        //this.loading = false;
      });
  }

  cargaDatosLista(){
    //this.loading = true;this.observacion.id.toString()
    if(Number.parseInt(this.observacion.id) > 0){
      this.offlineService.queryObservacionSelectID(this.observacion.id)
        .then(resp => {
          this.observacionLista = resp['data'];
        })
    }  
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
    console.log("ok")
/*       console.log(this.observacionLista.usuarioReporta.email)
 */      console.log(this.observacion)
 console.log(this.observacionLista[0].usuarioReporta.email)
    
    this.observacionLista[0].motivo = this.motivo;
    console.log(this.observacionLista[0].motivo)
    //this.cargaDatosLista();
    
  }

  guardarDenegar() {
    console.log(this.observacionLista[0].usuarioReporta.email)
    this.observacionLista.motivo = this.motivo;
    this.observacionService
        .denegarObservacion(this.observacionLista[0])
        .then((data) => {
            //this.visibleObservacion = false;
          this.msg = "Se ha denegado la observación correctamente";
          this.FinishReturn();
/*            this.authServizce.sendNotificationObservacionDenegada(
                this.observacion.usuarioReporta.email,
                this.observacion
            ); */
        });
    }

    guardarAceptar() {
      this.observacion.motivo = this.motivo;
      this.observacionService
          .aceptarObservacion(this.observacion)
          .then((data) => {
              /* this.visibleObservacion = false;*/
            console.log("ok")
            this.msg = "La observación ha sido aceptada correctamente"; 
            this.FinishReturn();
          });      
  }

  back(){
    this.isGestionar = false;
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
    if(this.CambioObs){

    }
    this.observacion.motivo = this.motivo;
    this.observacionService
        .guardarGestionObervacion(this.observacion, tipoEstado)
        .then((data) => {
            /* this.visibleObservacion = false;*/
          console.log("ok")
          this.msg = "La observación ha sido aceptada correctamente"; 
          this.FinishReturn();
        });      
  }

}
