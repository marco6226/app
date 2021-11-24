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

  observacionLista: Observacion[];
  observacionLista2: Observacion[];
  consultar: boolean;
  observacion: Observacion;
  listado: boolean=true;
  constructor(
    
    private alertController: AlertController,
    private modalController: ModalController,
    private offlineService: OfflineService,

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
}
