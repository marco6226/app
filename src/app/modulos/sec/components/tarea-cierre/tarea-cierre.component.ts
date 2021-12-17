import { SeguimientosService } from './../../services/seguimientos.service';
import { Empleado } from './../../../emp/entities/empleado';
import { Component, Input, OnInit, Output, OnChanges, SimpleChanges, EventEmitter, SecurityContext } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Criteria } from '../../../com/entities/filter';
import { FilterQuery } from '../../../com/entities/filter-query';
import { EmpleadoService } from '../../../com/services/empleado.service';
import { SesionService } from '../../../com/services/sesion.service';
import { Usuario } from '../../../emp/entities/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { OfflineService } from '../../../com/services/offline.service';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-tarea-cierre',
  templateUrl: './tarea-cierre.component.html',
  styleUrls: ['./tarea-cierre.component.scss'],
  providers: [Camera]
})
export class TareaCierreComponent implements OnInit{

  @Input() value;
  @Input() Estado;
  @Input() IsSeguimiento: boolean=false;
  @Output() DatosCierre = new EventEmitter<object>();

  fechaActual: Date = new Date();
  maxDate: string = new Date().toISOString();
  minDate: string;
  selectDate;
  usuarioCierre: UserCierre;

  numMaxFotos: number;
  options: CameraOptions = {
    quality: 75,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 960,
    targetHeight: 960,
  };

  imagenes: any[] = [];
  user: Usuario;
  empleado: Empleado;
  nombreEmpleado: string;
  descripcion: string;
  empleadoId;
  labelDescripcion: string="Descripción de la acción realizada";
  labelFecha: string="Fecha de cierre";
  labelCorreo: string="Usuario que gestiona";
  labelTitulo: string="Datos de cierre";


  constructor(
    private camera: Camera,
    private sesionService: SesionService,
    private empleadoService: EmpleadoService,
    public alertController: AlertController,
    private modalController: ModalController,
    private seguimientoService: SeguimientosService,
    public toastController: ToastController,
    private offlineService: OfflineService,
  ) { 
    this.numMaxFotos = this.offlineService.sessionService.getConfigParam('NUM_MAX_FOTO_INP');
  }

  async ngOnInit() {
    console.log(this.fechaActual,"as"+ this.fechaActual.toLocaleTimeString())
    await this.selectUsuario();
    this.rangoFechaCierre();    
    this.selectDate = this.maxDate;
    
    this.change();

    if(this.IsSeguimiento){
      this.labelDescripcion = "Descripción del seguimiento";
      this.labelFecha = "Fecha del seguimiento"
      this.labelCorreo = "Usuario que realiza el seguimiento"
      this.labelTitulo = "Crear nuevo seguimiento"   
    }
  }


  async selectUsuario(){
    this.user = this.sesionService.getUsuario();
    console.log(this.user)
    //this.empleado = this.empleadoService.buscar(this.user.email)
    //let ok = Object.values(this.empleado)
    //console.log(this.empleado, ok)

    let fq = new FilterQuery();
    fq.filterList = [{ field: 'usuario.id', value1: this.user.id, criteria: Criteria.EQUALS, value2: null }];
    await this.empleadoService.findByFilter(fq).then(
      resp => {
        this.empleado = (<Empleado[]>resp['data'])[0];
        if (this.empleado != null) {
          this.nombreEmpleado = this.empleado.primerNombre + " " + this.empleado.segundoNombre + " " +
           this.empleado.primerApellido + " " + this.empleado.segundoApellido
        }
      }
    );

      console.log(this.empleado)
      this.empleadoId = await this.empleado.id
  }

  rangoFechaCierre(){
    //this.fechaMinima = event.detail.value;
    let permiso = this.sesionService.getPermisosMap()["SEC_CHANGE_FECHACIERRE"];
    if (permiso != null && permiso.valido == true) {
        this.minDate = "2000-01-01";
    } else {
        this.minDate = this.maxDate;
    }
    console.log(permiso)
  }

  
  getPicture() {
    if (this.imagenes != null && this.imagenes.length >= this.numMaxFotos) {
      this.presentAlert("Número máximo de fotografías alcanzado", "No es posible adjuntar mas de " + this.numMaxFotos + " fotografías por seguimiento");
      return;
    }
    this.camera
        .getPicture(this.options)
        .then((imageData) => {

            let imgsUrls = [];
           
            if (this.imagenes == null){
              this.imagenes = [];
            } 
           
            let imgUrl = (<any>window).Ionic.WebView.convertFileSrc(imageData);

            this.imagenes.push(imgUrl);
            //this.imagenes = this.imagenes.slice();
        })
        .catch((error) => {
            console.error(error);
        });
  }


  /*  getPicture2() {
    if (this.imagenes != null && this.imagenes.length >= this.numMaxFotos) {
      this.presentAlert("Número máximo de fotografías alcanzado", "No es posible adjuntar mas de " + this.numMaxFotos + " fotografía(s) por hallazgo");
      return;
    }
    this.camera.getPicture(this.options)
      .then(imageData => {
        let imgsUrls = this.elementoActual.calificacion['img_key'];
        if (imgsUrls == null)
          

        if (this.imagenes == null){
          this.imagenes = [];
        }          

        let imgUrl = (<any>window).Ionic.WebView.convertFileSrc(imageData);
        imgsUrls.push(imgUrl);

        // let imgKey = new Date().toISOString();
        // imgsKeys.push(imgKey);
        // localStorage.setItem(imgKey, imgUrl);

        this.elementoActual.calificacion['img_key'] = imgsUrls;

        this.imagenes.push(imgUrl);
        this.imagenes = this.imagenes.slidescripcion();
      }).catch(error => {
        console.error(error);
      });
  } */

  async presentAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: [{ text: 'Adescripcionptar' }]
    });
    await alert.present();
  } 

  async presentRemoveImg(index: number) {
    this.removerImg(index)
  /*   const alert = await this.alertController.create({
        header: '¿Desea remover la fotografía?',
        message: 'La fotografía será eliminada. ¿Confirma esta acción?',
        buttons: [
            {
                text: 'Si',
                handler: () => this.removerImg(index),
            },
            {
                text: 'No',
                role: 'cancel',
                cssClass: 'No',
            },
        ],
    });
    await alert.present();*/
}

removerImg(index: number) {
  

  // localStorage.removeItem(imgurl);
}

  imgLoaded(){
    console.log('loaded');
  }
 
  
  async change(){

    this.usuarioCierre={id: this.empleadoId}

    // console.log(this.Estado,this.value)
   await this.DatosCierre.emit({
     correo: this.user.email,
     nombre: this.nombreEmpleado,
     fechaDeCierre: this.selectDate,
     Descripcion: this.descripcion,
     Evidencias: this.imagenes,
     usuarioCierre: this.usuarioCierre,
   })
  }

  async presentAlertaSalir() {
    const alert = await this.alertController.create({
      header: '¿Desea salir?',
      message: 'El seguimiento no ha sido guardado, los datos serán descartados. ¿Confirma esta acción?',
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

  async guardar(){

    if(this.descripcion==null || this.descripcion == ""){
      await this.presentToast('Por favor diligencie los datos faltantes del seguimiento');
    }else{

      console.log(this.value)
      await this.presentToast('entrando');
      let follow = {
        tareaId: await this.value.id,
        pkUser: await this.value.usuario,
        followDate: await this.selectDate,
        description: await this.descripcion,
        evidences: await this.imagenes,
      }
      await this.presentToast('saliendo');
      console.log(follow)

      let res = await this.seguimientoService.createSeg(follow);
      if (res) {
        await this.presentToast('¡Se ha creado exitosamente el seguimiento!');
        this.modalController.dismiss();
      }else{
        await this.presentToast('Ha ocurrido un error al crear el seguimiento');
      }
    }
  }

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

}


interface UserCierre{
	id: string;	
}
