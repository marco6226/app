import { TareaEvidencesComponent } from './../tarea-evidences/tarea-evidences.component';
import { SeguimientosService } from './../../services/seguimientos.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from '../../entities/tarea';

@Component({
  selector: 'app-tarea-seguimiento',
  templateUrl: './tarea-seguimiento.component.html',
  styleUrls: ['./tarea-seguimiento.component.scss'],
})
export class TareaSeguimientoComponent implements OnInit {
  
  trackings;
  tarea: Tarea;
  datosTarea;
  @Input() Estado;

  constructor(
    private seguimientoService: SeguimientosService,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.leerTareaSeleccionada();
    //console.log(this.Estado)
  }

  async leerTareaSeleccionada(){
    await this.modalController.getTop()
    .then(data => {     
        this.tarea = (<any>data).componentProps.value;          
    }); 
    //console.log(this.tarea)
    this.datosTarea= this.tarea;
    //console.log(this.datosTarea.id);
    this.getSeg();
  }

  async getSeg() {
    try {
        this.trackings = await this.seguimientoService.getSegByTareaID(this.datosTarea.id);

        if (this.trackings.length > 0) {
            //console.log('Se ejecuta el emit')
            /* this.cd.markForCheck();
            this.isFollowExist.emit(true); */
            //console.log(this.trackings)
        }        
    } catch (e) {
        this.trackings = null;
        //console.log(e);
        /*this.msgs.push({
            severity: "error",
            summary: "Mensaje del sistema",
            detail: "Ocurrió un inconveniente al obtener el listado de seguimientos",
        }); */
      }
  }

  async viewEvidence(idEvi:number){
    ////console.log(this.trackings);
    const modal = await this.modalController.create({
      component: TareaEvidencesComponent,
      componentProps: { value: this.trackings, id: idEvi},
      cssClass: "select-modal",
      /* backdropDismiss: true */
    });
    return await modal.present();

  }

}
