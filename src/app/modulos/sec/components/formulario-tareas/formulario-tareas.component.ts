import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Tarea } from '../../entities/tarea';
import { OfflineService } from '../../../com/services/offline.service';
import { Area } from '../../../emp/entities/area';


import { ToastController, AlertController } from '@ionic/angular';

@Component({
    selector: 'sm-formularioTareas',
    templateUrl: './formulario-tareas.component.html',
    styleUrls: ['./formulario-tareas.component.scss']
})
export class FormularioTareasComponent implements OnInit {

    nombre: string;
    descripcion: string;
    tipoAccion: string;
    fechaProyectada: Date;
    areaResp: Area;

    idxTareaEditar: number = -1;
    @Output("onEvent") onEvent = new EventEmitter();

    @Input('tareasList') tareasList: Tarea[];
    @Input('readOnly') readOnly: boolean;

    areasList: Area[];
    form: FormGroup;

    loading: boolean = true;
    areasCargadas: boolean;

    constructor(
        private alertController: AlertController,
        public toastController: ToastController,
        public offlineService: OfflineService,
        public fb: FormBuilder,
    ) {
        this.form = fb.group({
            'id': [null],
            'nombre': [null, Validators.required],
            'descripcion': [null, Validators.required],
            'tipoAccion': [null, Validators.required],
            'fechaProyectada': [null, Validators.required],
            'areaResponsable': [null, Validators.required]
        });
    }

    ngOnInit() {
        this.cargarAreas();
    }

    cargarAreas() {
        this.loading = true;
        this.areasCargadas = null;

        this.offlineService.queryArea()
            .then(res => {
                this.areasList = [];
                this.construirListaAreas(this.areasList, <any>res['data']);
                this.loading = false;
                this.areasCargadas = true;
            })
            .catch(err => {
                this.loading = false;
                this.areasCargadas = false;
            });
    }

    construirListaAreas(listado: Area[], areas: Area[]) {
        for (let i = 0; i < areas.length; i++) {
            let area = areas[i];
            let areaObj = <Area>{ id: area.id, nombre: area.nombre };
            listado.push(areaObj);
            if (area.areaList != null && area.areaList.length > 0) {
                this.construirListaAreas(listado, area.areaList);
            }
        }
    }

    adicionarTarea() {
        if (this.tareasList == null) {
            this.tareasList = [];
        }
        if (this.validarTarea()) {
            let tarea = new Tarea();
            tarea.nombre = this.nombre;
            tarea.descripcion = this.descripcion;
            tarea.tipoAccion = this.tipoAccion;
            tarea.fechaProyectada = this.fechaProyectada;
            tarea.areaResponsable = this.areaResp;
            tarea.estado = 'NUEVO';
            this.tareasList.push(tarea);
            this.limpiarCampos();
            this.presentToast('Tarea ' + tarea.nombre + ' adicionada.');
            this.onEvent.emit({ type: 'onCreate', data: this.tareasList });
        }
    }

    limpiarCampos() {
        this.nombre = null;
        this.descripcion = null;
        this.tipoAccion = null;
        this.fechaProyectada = null;
        this.areaResp = null;
    }

    validarTarea() {
        if (this.nombre == null) {
            this.presentToast('Debe completar el campo actividad');
            return false;
        }
        if (this.tipoAccion == null) {
            this.presentToast('Debe completar el campo tipo de acción');
            return false;
        }
        if (this.fechaProyectada == null) {
            this.presentToast('Debe completar el campo fecha proyectada');
            return false;
        }
        if (this.areaResp == null) {
            this.presentToast('Debe completar el campo area responsable');
            return false;
        }
        return true;
    }

    async presentToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }

    cargarTarea(tarea: Tarea, idx: number) {
        this.nombre = tarea.nombre;
        this.descripcion = tarea.descripcion;
        this.tipoAccion = tarea.tipoAccion;
        this.fechaProyectada = tarea.fechaProyectada;
        this.areaResp = tarea.areaResponsable;
        this.idxTareaEditar = idx;
        document.querySelector('#form-tareas').scrollIntoView({
            behavior: 'smooth'
        });
    }

    modificarTarea() {
        let tarea = this.tareasList[this.idxTareaEditar];
        tarea.nombre = this.nombre;
        tarea.descripcion = this.descripcion;
        tarea.tipoAccion = this.tipoAccion;
        tarea.fechaProyectada = this.fechaProyectada;
        tarea.areaResponsable = this.areaResp;
        this.limpiarCampos();
        document.querySelector('#taritem_' + this.idxTareaEditar).scrollIntoView({
            behavior: 'smooth'
        });
        this.presentToast('Se han modificado los datos de la tarea ' + tarea.nombre);
        this.idxTareaEditar = -1;
        this.onEvent.emit({ type: 'onUpdate', data: this.tareasList });
    }

    cancelarEdicion() {
        this.limpiarCampos();
        document.querySelector('#taritem_' + this.idxTareaEditar).scrollIntoView({
            behavior: 'smooth'
        });
        this.idxTareaEditar = -1;
    }

    async eliminarTarea(tarea: Tarea, idx: number) {
        const alert = await this.alertController.create({
            header: '¿Eliminar actividad?',
            message: 'La actividad \"' + tarea.nombre + '\" será eliminada. ¿Confirma esta acción?',
            buttons: [{
                text: 'Si',
                handler: () => {
                    this.tareasList.splice(idx, 1);
                    this.presentToast('La actividad \"' + tarea.nombre + '\" ha sido  eliminada');
                    this.onEvent.emit({ type: 'onRemove', data: this.tareasList });
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