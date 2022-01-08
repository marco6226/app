import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, ModalController } from '@ionic/angular';
import { SelectItem } from 'primeng/primeng';
import { DirectorioService } from '../../../ado/services/directorio.service';
import { Criteria, Filter } from '../../../com/entities/filter';
import { FilterQuery } from '../../../com/entities/filter-query';
import { SistemaNivelRiesgo } from '../../../com/entities/sistema-nivel-riesgo';
import { EmpleadoService } from '../../../com/services/empleado.service';
import { OfflineService } from '../../../com/services/offline.service';
import { SistemaNivelRiesgoService } from '../../../com/services/sistema-nivel-riesgo.service';
import { Area } from '../../../emp/entities/area';
import { Empleado } from '../../../emp/entities/empleado';
import { Calificacion } from '../../entities/calificacion';
import { ElementoInspeccion } from '../../entities/elemento-inspeccion';
import { Inspeccion } from '../../entities/inspeccion';
import { ListaInspeccion } from '../../entities/lista-inspeccion';
import { InspeccionService } from '../../services/inspeccion.service';
import { ListaInspeccionService } from '../../services/lista-inspeccion.service';
import { ListaInspeccionFormComponent } from '../inspeccion-form/lista-inspeccion-form/lista-inspeccion-form.component';
import { SesionService } from '../../../com/services/sesion.service';
import { Usuario } from '../../../emp/entities/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-inspeccion-consultar-form',
    templateUrl: './inspeccion-consultar-form.component.html',
    styleUrls: ['./inspeccion-consultar-form.component.scss'],

})
export class InspeccionConsultarFormComponent implements OnInit {
    @ViewChild('listaInspeccionForm') listaInspeccionForm: ListaInspeccionFormComponent;
    consultar: boolean;
    inspeccionId: string;
    inspeccion: Inspeccion;
    inspList: Inspeccion[];
    empleadoElabora: Empleado;
    
    fechaActual = new Date();
    user: Usuario;
    empleado: Empleado;
    nombreEmpleado: string;
    cargo: string;

    FormHseq: FormGroup;
    FormIng: FormGroup;
    permisoHse:boolean=false;
    permisoIngenieria:boolean=false;
    mostarHseGet: boolean=true;
    mostarIngGet: boolean=true;
    maxDateHse: string = new Date().toISOString();
    minDateHse: string;
    selectDateHse;
    maxDateIngenieria: string = new Date().toISOString();
    minDateIngenieria: string;
    selectDateIngenieria;
    isEmpleadoValid: boolean;

    imagenesList: any = [];

    // imagenesList: any=[];
    id: string;
    nivelRiesgoList: SelectItem[] = [{ label: '--seleccione--', value: null }];
    listaInspeccion: ListaInspeccion;
    area: Area;
    firma = [];

     // Configuration for each Slider
  slideOptsOne = {
        initialSlide: 0,
        slidesPerView: 1,
        autoplay: true, pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        }
  };




    constructor(
        private modalController: ModalController,
        private alertController: AlertController,
        private offlineService: OfflineService,
        private inspeccionService: InspeccionService,
        private directorioService: DirectorioService,
        private empleadoService: EmpleadoService,
        private listaInspeccionService: ListaInspeccionService,
        private sistemaNivelRiesgoService: SistemaNivelRiesgoService,
        private domSanitizer: DomSanitizer,
        private sesionService: SesionService,
        private fb: FormBuilder
        ) {}

    async ngOnInit() {
        
        await this.leerInspeccionSeleccionada();
        this.cargaDatosLista();
        await this.selectUsuario();
        // this.vistoPermisos();
    }

    async leerInspeccionSeleccionada() {
        await this.modalController.getTop().then(data => {

            this.inspeccion = (<any>data).componentProps.value;
            this.id = this.inspeccion.id;
            return (<any>data).componentProps.value;
        });
    }

    async selectUsuario(){
        this.user = this.sesionService.getUsuario();
        console.log(this.user)
    
        let fq = new FilterQuery();
        fq.filterList = [{ field: 'usuario.id', value1: this.user.id, criteria: Criteria.EQUALS, value2: null }];
        await this.empleadoService.findByFilter(fq).then(
          resp => {
            this.empleado = (<Empleado[]>resp['data'])[0];
            if (this.empleado != null) {
              this.nombreEmpleado = this.empleado.primerNombre + " " + this.empleado.segundoNombre + " " +
               this.empleado.primerApellido + " " + this.empleado.segundoApellido;
               this.cargo = this.empleado.cargo.nombre
            }
          }
        );
    
          console.log(this.empleado)
      }

    getSistemaNivelRiesgo() {
        const filterQuery = new FilterQuery();
        const filter = new Filter();
        filter.criteria = Criteria.EQUALS;
        filter.field = 'seleccionado';
        filter.value1 = 'true';
        filterQuery.filterList = [filter];
        this.sistemaNivelRiesgoService.findByFilter(filterQuery).then(
            resp => (<SistemaNivelRiesgo>resp['data'][0]).nivelRiesgoList.forEach(element => {
                this.nivelRiesgoList.push({ label: element.nombre, value: element.id });
            })
        );
    }

    anterior() {
        this.modalController.dismiss();
    }

    cargaDatosLista() {

        const filter = new Filter();
        filter.criteria = Criteria.EQUALS;
        filter.field = 'id';
        filter.value1 = this.inspeccion.id;
        // filter.value1 = this.inspeccion.id;
        const filterQuery = new FilterQuery();
        filterQuery.filterList = [filter];
        this.inspeccionService
            .findByFilter(filterQuery)
            .then((resp) => {
                this.inspeccion = (<Inspeccion[]>resp['data'])[0];
                this.listaInspeccion = this.inspeccion.listaInspeccion;
                this.area = this.inspeccion.area;
                this.cargarCalificaciones(this.listaInspeccion.elementoInspeccionList, this.inspeccion.calificacionList);
                this.getListaInspeccionEvidences(
                    parseInt(this.listaInspeccion.listaInspeccionPK.id), this.listaInspeccion.listaInspeccionPK.version
                );
                console.log(this.inspeccion)
                this.vistoPermisos();
                })
            .catch(err => {
            });
    }

    private buscarCalificacion(elem: ElementoInspeccion, calificacionList: Calificacion[]): Calificacion {
            for (let i = 0; i < calificacionList.length; i++) {
                if (calificacionList[i].elementoInspeccion.id === elem.id) {
                    return calificacionList[i];
                }
            }
            return null;
        }

    private cargarCalificaciones(elemList: ElementoInspeccion[], calificacionList: Calificacion[]) {
        for (let i = 0; i < elemList.length; i++) {

            if (elemList[i].elementoInspeccionList != null && elemList[i].elementoInspeccionList.length > 0) {
                this.cargarCalificaciones(elemList[i].elementoInspeccionList, calificacionList);
            } else {
                const calif = this.buscarCalificacion(elemList[i], calificacionList);
                elemList[i].calificacion = calif;
            }
        }
    }

    // CONSULTA LAS EVIDENCIAS DE LA LISTA
    async getListaInspeccionEvidences(lista_id: number, version_id: number) {
        try {
            const res: any = await this.listaInspeccionService.getInspeccionImagen(lista_id, version_id);

            if (res) {
                res.files.forEach(async (evidence) => {
                    this.directorioService.download(evidence).then((data) => {
                        const urlData = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(<Blob> data));
                        this.imagenesList.push({ source: Object.values(urlData) });
                    });
                });
            }
        } catch (e) {
        }
    }

    botonAceptar(tipo: string){
        if(tipo=='HSE'){
            this.FormHseq.value.concepto = "Aceptado"
        }
        else if(tipo=='ING'){
            this.FormIng.value.concepto = "Aceptado"
        }
        this.guardarVistoBueno(tipo)
    }

    botonDenegar(tipo: string){
        if(tipo=='HSE'){
            this.FormHseq.value.concepto = "Denegado"
        }
        else if(tipo=='ING'){
            this.FormIng.value.concepto = "Denegado"
        }
        this.guardarVistoBueno(tipo)    
    }
    
    async guardarVistoBueno(tipo: string){
        let calificacionList: Calificacion[] = [];
        try {
            // this.extraerCalificaciones(this.listaInspeccion.elementoInspeccionList, calificacionList);

            let inspeccion = new Inspeccion();
            inspeccion.area = this.area;

            if(this.FormHseq.value.concepto == 'Aceptado'||this.FormHseq.value.concepto == 'Denegado'){
                inspeccion.fechavistohse = this.FormHseq.value.fecha;
                inspeccion.empleadohse = this.empleado;
                inspeccion.conceptohse = this.FormHseq.value.concepto;
            }
            
            if(this.FormIng.value.concepto == 'Aceptado'||this.FormIng.value.concepto == 'Denegado'){
                inspeccion.fechavistoing = this.FormIng.value.fecha;
                inspeccion.empleadoing = this.empleado;
                inspeccion.conceptoing = this.FormIng.value.concepto;
            }
            inspeccion.calificacionList = calificacionList;
            inspeccion.respuestasCampoList = [];
           
                       
            inspeccion.id = this.inspeccion.id
           
            this.inspeccionService.update(inspeccion)
            .then(data => {})
            
            
        } catch (error) {
            // this.msgs = [];
            // this.msgs.push({ severity: 'warn', detail: error });
        }
        
    }

    async vistoPermisos(){

        this.isEmpleadoValid = this.sesionService.getEmpleado() == null;
        console.log(this.isEmpleadoValid)

        // if(this.consultar && this.inspeccion.conceptohse == null){
        //      this.mostarHseGet = false;
        // }

        // if(this.consultar && this.inspeccion.conceptoing == null){
        //     this.mostarIngGet = false;
        // }
      
        
        this.permisoHse = this.sesionService.getPermisosMap()["HSE"];
        this.permisoIngenieria = this.sesionService.getPermisosMap()["INGENIERIA"];
        
        if(this.permisoHse){
            this.selectDateHse = this.maxDateHse;      
            if(this.inspeccion.conceptohse != null){
                this.FormHseq = this.fb.group({
                    concepto: [this.inspeccion.conceptohse,Validators.required],
                    usuarioGestiona: [this.inspeccion.empleadohse.primerNombre + " " + this.inspeccion.empleadohse.primerApellido,Validators.required],
                    cargo: [this.inspeccion.empleadohse.cargo.nombre,Validators.required],
                    fecha: [this.inspeccion.fechavistohse,Validators.required]
                });
                this.selectDateHse = this.inspeccion.fechavistohse
            }
            else if(this.sesionService.getEmpleado()!=null){
                this.FormHseq = this.fb.group({
                    concepto: [null,Validators.required],
                    usuarioGestiona: [this.sesionService.getEmpleado().primerNombre + " " + this.sesionService.getEmpleado().primerApellido ,Validators.required],
                    cargo: [this.sesionService.getEmpleado().cargo.nombre,Validators.required],
                    fecha: ['',Validators.required]
                });
            }
            else{
                this.FormHseq = this.fb.group({
                    concepto: [null,Validators.required],
                    usuarioGestiona: [null,Validators.required],
                    cargo: [null,Validators.required],
                    fecha: [null,Validators.required]
                });
            }
        }
        else{
            this.FormHseq = this.fb.group({
                concepto: [null,Validators.required],
                usuarioGestiona: [null,Validators.required],
                cargo: [null,Validators.required],
                fecha: [null,Validators.required]
            });
        }  

        if(this.permisoIngenieria){
            this.selectDateIngenieria = this.maxDateIngenieria;
            if(this.inspeccion.conceptoing != null){
                this.FormIng = this.fb.group({
                    concepto: [this.inspeccion.conceptoing,Validators.required],
                    usuarioGestiona: [this.inspeccion.empleadoing.primerNombre + " " + this.inspeccion.empleadoing.primerApellido,Validators.required],
                    cargo: [this.inspeccion.empleadoing.cargo.nombre,Validators.required],
                    fecha: [this.inspeccion.fechavistoing,Validators.required]
                });
                this.selectDateIngenieria = this.inspeccion.fechavistoing
            }
            else if(this.sesionService.getEmpleado()!=null){
                this.FormIng = this.fb.group({
                    concepto: [null,Validators.required],
                    usuarioGestiona: [this.sesionService.getEmpleado().primerNombre + " " + this.sesionService.getEmpleado().primerApellido,Validators.required],
                    cargo: [this.sesionService.getEmpleado().cargo.nombre,Validators.required],
                    fecha: ['',Validators.required]
                });
            }
            else{
                this.FormIng = this.fb.group({
                    concepto: [null,Validators.required],
                    usuarioGestiona: [null,Validators.required],
                    cargo: [null,Validators.required],
                    fecha: [null,Validators.required]
                });
            }  
        }
        else{
            this.FormIng = this.fb.group({
                concepto: [null,Validators.required],
                usuarioGestiona: [null,Validators.required],
                cargo: [null,Validators.required],
                fecha: [null,Validators.required]
            });
        }   
    }
}
