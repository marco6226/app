import { Tarea } from './../../entities/tarea';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
})
export class TareaPage implements OnInit {
  consultar: boolean;
  tarea: Tarea;
  segments = { 'general': true, 'seguimientos':false, 'cierre': false };
  constructor(
    private modalController: ModalController,
    private router: Router,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    //this.leerTareaSeleccionada();
  }
  /* 
  async leerTareaSeleccionada(){
    await this.modalController.getTop()
    .then(data => {     
        this.tarea = (<any>data).componentProps.value;          
    }); 
    console.log(this.tarea)
  }
 */
  segmentChanged(event) {
    for (var seg in this.segments) {
      this.segments[seg] = false;
      if (event.detail.value == seg)
        this.segments[seg] = true;

    }
  }

  anterior() {
    this.presentAlertaSalir();
  }

  async presentAlertaSalir() {
    const alert = await this.alertController.create({
      header: '¿Desea salir?',
      message: 'La tarea no ha sido guardada, los datos serán descartados. ¿Confirma esta acción?',
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
}
