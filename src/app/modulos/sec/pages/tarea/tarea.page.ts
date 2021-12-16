import { Tarea } from './../../entities/tarea';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
})
export class TareaPage implements OnInit {
  @Input() Estado;
  consultar: boolean;
  tarea: Tarea;
  segments = { 'general': true, 'seguimientos':false, 'cierre': false };
  color: string;
  constructor(
    private modalController: ModalController,
    private router: Router,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.selectColor();
  }

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
  selectColor(){
    console.log(this.Estado)
    switch (this.Estado){
      case 'Vencida':
        this.color = 'danger';
        break;
      case 'Cerrada fuera de tiempo':
        this.color = 'danger';
        break;
      case 'Abierta':
        this.color = 'success';
        break;
      case 'Cerrada en el tiempo':
        this.color = 'success';
        break;
      case 'En seguimiento':
        this.color = 'primary';
        break;
      case 'N/A':
        this.color = 'warning';
        break;
    }
  }
}
