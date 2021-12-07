import { Tarea } from './../../entities/tarea';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tarea-general',
  templateUrl: './tarea-general.component.html',
  styleUrls: ['./tarea-general.component.scss'],
})
export class TareaGeneralComponent implements OnInit {
  tarea: Tarea;
  datosTarea;
  constructor(
    private modalController: ModalController,
    private router: Router,
    private alertController: AlertController,) { }

  ngOnInit() {
    this.leerTareaSeleccionada();
  }

  async leerTareaSeleccionada(){
    await this.modalController.getTop()
    .then(data => {     
        this.tarea = (<any>data).componentProps.value;          
    }); 
    console.log(this.tarea,this.tarea)
    this.datosTarea= this.tarea;
    console.log(this.datosTarea.module)
  }

}
