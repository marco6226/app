import { TareaCierreComponent } from './../../components/tarea-cierre/tarea-cierre.component';
import { Tarea } from './../../entities/tarea';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguimientosService } from '../../services/seguimientos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
})
export class TareaPage implements OnInit {
  @Input() Estado;
  @Input() value: Tarea;
  cierre: {
    correo: string,
    nombre: string,
    fechaDeCierre: string,
    Descripcion: string,
    Evidencias: any[],
    usuarioCierre: {}
  };
  tareaForm: FormGroup;

  consultar: boolean;
  tarea: Tarea;
  segments = { 'general': true, 'seguimientos':false, 'cierre': false };
  color: string;
  constructor(
    private fb: FormBuilder,
    private modalController: ModalController,
    private router: Router,
    private alertController: AlertController,
    public toastController: ToastController,
    private seguimientoService: SeguimientosService,
  ) {
    this.tareaForm = fb.group({
      id: ["", Validators.required],
      usuarioCierre: ["", Validators.required],
      email: ["", null],
      fechaCierre: ["", Validators.required],
      descripcionCierre: ["", Validators.required],
      evidences: [[]],
  });
   }

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

  infoCierre(event){
    console.log(event);    
    this.cierre = event;
  }

  async guardarCierre() {
    
    
    if(this.cierre.Descripcion == null || this.cierre.Descripcion == ""){
      await this.presentToast('Por favor diligencie los datos faltantes del cierre');
      return;
    }else{

      await this.tareaForm.patchValue({ 
        id: parseInt(this.value.id),
        usuarioCierre: this.cierre.usuarioCierre, 
        descripcionCierre: this.cierre.Descripcion,
        email: this.cierre.correo,
        fechaCierre: this.cierre.fechaDeCierre,
        evidences: this.cierre.Evidencias,
      });
      console.log(this.cierre, this.tareaForm);

      let res = await this.seguimientoService.closeTarea(
        this.tareaForm.value
      );

      if (res) {
          this.tareaForm.reset();
          this.submitted = false;
          this.cargando = false;
          console.log("si guardo")
          await this.presentToast('¡Se ha cerrado exitosamente esta tarea!');
           this.getTarea();
         /* this.msgs.push({
              severity: "success",
              summary: "Mensaje del sistema",
              detail: "¡Se ha cerrado exitosamente esta tarea!",
          }); */
      }
    }
    
  }

  submitted = false;
  cargando = false;
  

  async presentToast(msg: string) {
    /* try {
      this.toastController.dismiss();
    } catch (e) { } */

    const toast = await this.toastController.create({
      message: msg,
      position: 'middle',
      duration: 3000
    });
    toast.present();
  }

  getTarea(){

    let dateString = this.value.fecha_proyectada.toLocaleString();

    let cierre = Date.parse(this.cierre.fechaDeCierre);
    let proyect = Date.parse(dateString);

    if( proyect < cierre ){
      // console.log("si")      
      this.Estado='Cerrada fuera de tiempo'
      this.color = 'danger';
    }else{
      // console.log("no")
      this.Estado='Cerrada en el tiempo'
      this.color = 'success';
    }
    
  }

  async agregarSeguimiento(){
    const modal = await this.modalController.create({
      component: TareaCierreComponent,
      //component: TareaComponent,
      componentProps: { value: this.value, Estado: this.Estado, IsSeguimiento: true },
      // cssClass: "modal-peq"
      cssClass: "modal-fullscreen"
    });
    return await modal.present();
  }
}
