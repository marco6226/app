import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../../com/services/sesion.service';
import { FilterQuery } from '../../../com/entities/filter-query';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../entities/tarea';
import { Criteria } from '../../../com/entities/filter';
import { AlertController } from '@ionic/angular';
import { MensajeUsuarioService } from '../../../com/services/mensaje-usuario.service';
import { ReporteObservacionPage } from '../../../auc/pages/reporte-observacion/reporte-observacion.page';
import * as moment from "moment";


@Component({
  selector: 'sm-MisTareas',
  templateUrl: './mis-tareas.page.html',
  styleUrls: ['./mis-tareas.page.scss'],
  providers: [TareaService]
})
export class MisTareasPage implements OnInit {
 tareasList: any;
  loading: boolean = true;
  tareaSelect: Tarea;
  es: any;
 

  constructor(
    private msgService: MensajeUsuarioService,
    private alertController: AlertController,
    private tareaService: TareaService,
    private sesionService: SesionService,
    private router: Router
  ) { }

  ngOnInit() {

    this.loading = true;

    let statuses = {
      0: 'N/A',
      1: 'En seguimiento',
      2: 'Abierta',
      3: 'Cerrada en el tiempo',
      4: 'Cerrada fuera de tiempo',
      5: 'Vencida',
  }

    let areas: string = this.sesionService.getPermisosMap()['SEC_GET_TAR'].areas;

    let id = this.sesionService.getUsuario().id;
    let fq = new FilterQuery();
    fq.fieldList = [
      'id', 'nombre', 'descripcion', 'observacionesRealizacion', 'tipoAccion', 'usuarioRealiza_id',
      'estado', 'fechaProyectada', 'fechaRealizacion', 'usuarioRealiza_email', 'areaResponsable_id',
      'areaResponsable_nombre', 'areaResponsable_tipoArea_nombre'
    ]
    fq.filterList = [
      { field: 'areaResponsable.id', value1: areas, criteria: Criteria.CONTAINS },
      { field: 'estado', value1: 'FINALIZADA', criteria: Criteria.NOT_EQUALS }
    ];

    this.tareaService.findByDetailsByEmpleado(id).then(
      async resp => { 
          this.tareasList = resp;
          this.tareasList = await Promise.all(this.tareasList.map(async tarea => {
              let status = await this.verifyStatus(tarea);
              tarea.estado = statuses[status];
              tarea.fecha_proyectada = new Date(tarea.fecha_proyectada).toISOString();
              return tarea;
          }));
          this.loading = false;
          
           let estados = this.tareasList.map(x => x.estado)
         
          
      }            
  );
  }

  navegar(url) {
    this.router.navigate([url]);
  }

  devolverEstados (){
    let total =[];
    const estados = this.tareasList.map(x => x.estado)
    total = estados.reduce(( a , d ) => (a[d] ? a[d] += 1 : a[d] = 1 , a), { } );
    
    return total;      
    }   

    selectTarea(tarea: Tarea) {
      this.tareaSelect = tarea;
  }

  async verifyStatus(tarea) {

    let trackings = tarea.trackings
    let isFollow = (trackings > 0) ? true : false;
    
    /* Vars */
    
    let now = moment({});
    
    let fecha_cierre = moment(tarea.fecha_cierre);

    let fecha_proyectada = moment(tarea.fecha_proyectada);


    if (!fecha_cierre.isValid() && fecha_proyectada.isAfter(now,'day') && isFollow) return 1;    
    if (!fecha_cierre.isValid() && fecha_proyectada.isBefore(now,'day') && isFollow) return 1;
    if (!fecha_cierre.isValid() && fecha_proyectada.isSameOrAfter(now,'day') && isFollow) return 1;
    if (!fecha_cierre.isValid() && fecha_proyectada.isSameOrAfter(now,'day') && !isFollow) return 2;
    if (fecha_cierre.isValid() && fecha_proyectada.isAfter(now,'day')) return 3;
    if (fecha_cierre.isValid() && fecha_proyectada.isSameOrBefore(now,'day')) return 4;        
    if (!fecha_cierre.isValid() && fecha_proyectada.isBefore(now,'day') && !isFollow) return 5;
    

    return 0;
    
}

  abrirDlg(tarea: Tarea, idx: number, repCump: boolean) {
    // this.confirmarTarea(tarea, idx, repCump);
    this.reportar(tarea, repCump, idx);
  }

  // async confirmarTarea(tarea: Tarea, idx: number, repCump: boolean) {
  //   let accion = repCump ? 'cumplimiento' : 'verificación';
  //   let alert = await this.alertController.create({
  //     subHeader: 'Reporte de ' + accion + ':',
  //     message: tarea.nombre,
  //     inputs: [
  //       { name: 'descripcion', type: 'text', placeholder: 'Observaciones de ' + accion }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Reportar',
  //         handler: data => this.reportar(tarea, repCump, idx, data.descripcion)
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }
  //     ]
  //   }).;
  //   await alert.present();
  // }

  reportar(tarea: Tarea, repCump: boolean, idx: number): any {
    tarea['loading'] = true;
    if (repCump == true) {
      this.tareaService.reportarCumplimiento(tarea)
        .then((resp: Tarea) => {
          this.tareasList[idx] = resp;
          this.msgService.showMessage({
            mensaje: 'Reporte realizado',
            detalle: 'El cumplimiento de la tarea fue reportado correctamente',
            tipoMensaje: 'success'
          });
          tarea['loading'] = false;
        })
        .catch(err => {
          tarea['loading'] = false;
        });
    } else {
      this.tareaService.reportarVerificacion(tarea)
        .then((resp: Tarea) => {
          this.tareasList[idx] = resp;
          this.msgService.showMessage({
            mensaje: 'Reporte realizado',
            detalle: 'La verificación de la tarea fue reportada correctamente',
            tipoMensaje: 'success'
          });
          tarea['loading'] = false;
        })
        .catch(err => {
          tarea['loading'] = false;
        });;
    }
  }


}
