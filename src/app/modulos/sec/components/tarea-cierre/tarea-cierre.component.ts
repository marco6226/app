import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tarea-cierre',
  templateUrl: './tarea-cierre.component.html',
  styleUrls: ['./tarea-cierre.component.scss'],
  providers: [Camera]
})
export class TareaCierreComponent implements OnInit {

  fecha:any;
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

  constructor(
    private camera: Camera,
  ) { }

  ngOnInit() {}


  getPicture() {
    this.camera
        .getPicture(this.options)
        .then((imageData) => {
            let imgUrl = (<any>window).Ionic.WebView.convertFileSrc(imageData);
            this.imagenes.push(imgUrl);
            this.imagenes = this.imagenes.slice();
        })
        .catch((error) => {
            console.error(error);
        });
  }

  fechaCierre(event){
    this.fecha = event.detail.value;
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
          imgsUrls = [];

        if (this.imagenes == null)
          this.imagenes = [];

        let imgUrl = (<any>window).Ionic.WebView.convertFileSrc(imageData);
        imgsUrls.push(imgUrl);

        // let imgKey = new Date().toISOString();
        // imgsKeys.push(imgKey);
        // localStorage.setItem(imgKey, imgUrl);

        this.elementoActual.calificacion['img_key'] = imgsUrls;

        this.imagenes.push(imgUrl);
        this.imagenes = this.imagenes.slice();
      }).catch(error => {
        console.error(error);
      });
  }

  async presentAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      header: header,
      message: msg,
      buttons: [{ text: 'Aceptar' }]
    });
    await alert.present();
  } */

}
