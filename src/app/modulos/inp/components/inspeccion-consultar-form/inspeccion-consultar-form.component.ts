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

  empleadoId;

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
        ) {}

    async ngOnInit() {
        await this.leerInspeccionSeleccionada();
        this.cargaDatosLista();
        await this.selectUsuario();
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
          this.empleadoId = await this.empleado.id
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
}
