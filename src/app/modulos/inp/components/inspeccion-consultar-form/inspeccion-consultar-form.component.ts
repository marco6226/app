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
import { Calificacion } from '../../entities/calificacion';
import { ElementoInspeccion } from '../../entities/elemento-inspeccion';
import { Inspeccion } from '../../entities/inspeccion';
import { ListaInspeccion } from '../../entities/lista-inspeccion';
import { InspeccionService } from '../../services/inspeccion.service';
import { ListaInspeccionFormComponent } from '../inspeccion-form/lista-inspeccion-form/lista-inspeccion-form.component';


@Component({
    selector: 'app-inspeccion-consultar-form',
    templateUrl: './inspeccion-consultar-form.component.html',
    styleUrls: ['./inspeccion-consultar-form.component.scss'],

})
export class 
InspeccionConsultarFormComponent implements OnInit {
    @ViewChild('listaInspeccionForm') listaInspeccionForm: ListaInspeccionFormComponent
    consultar: boolean;
    inspeccionId:string;
    inspeccion: Inspeccion;
    inspList: Inspeccion[];
    
    imagenesList: any=[];
    id:string;
    nivelRiesgoList: SelectItem[] = [{ label: '--seleccione--', value: null }];
    listaInspeccion: ListaInspeccion;
    area: Area;

    

    constructor(
        private modalController: ModalController, 
        private alertController: AlertController, 
        private offlineService:OfflineService, 
        private inspeccionService: InspeccionService,
        private directorioService:DirectorioService,
        private empleadoService: EmpleadoService,
        private sistemaNivelRiesgoService: SistemaNivelRiesgoService,
        private domSanitizer: DomSanitizer
        ) {}

    async ngOnInit() {
        await this.leerInspeccionSeleccionada();
        this.cargaDatosLista();
        this.cargarListaCalificaciones();

       
        
    }

    async leerInspeccionSeleccionada() {
        await this.modalController.getTop().then(data => {
            this.inspeccion = (<any>data).componentProps.value;
            this.id=this.inspeccion.id;
            return (<any>data).componentProps.value;
        });
    }

    getSistemaNivelRiesgo(){
        let filterQuery = new FilterQuery();
        let filter = new Filter();
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
        // this.presentAlertaSalir();
        this.modalController.dismiss();
    }

    async presentAlertaSalir() {
        const alert = await this.alertController.create({
            header: '¿Desea salir?',
            message: 'La inspección no ha sido guardada, los datos serán descartados. ¿Confirma esta acción?',
            buttons: [
                {
                    text: 'Si',
                    handler: () => {
                        this.modalController.dismiss();
                    },
                },
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'No',
                },
            ],
        });
        await alert.present();
    }

    onModalDismiss(inspeccion: Inspeccion) {
        // if (obser != null && obser.id == null) {
        //this.obsCount += 1;
        //this.obserSyncComp.adicionarObservacion(obser);
        // }
    }
    cargaDatosLista() {

        let filter = new Filter();
        filter.criteria = Criteria.EQUALS;
        filter.field = 'id';
        filter.value1 = this.id;
        // filter.value1 = this.inspeccion.id;
        let filterQuery = new FilterQuery();
        filterQuery.filterList = [filter];
        // this.inspeccion = this.offlineService.queryInspeccionSelectID(this.id)
        // console.log("TRAIDA DE LA BD FILTRADA(): ", this.inspeccion);
        this.inspeccionService
            .findByFilter(filterQuery)
            .then((resp) => (this.inspeccion = resp['data'][0]))
            .then((resp) => {
                this.inspeccion.calificacionList.forEach((listaCalif) => {
                    listaCalif.documentosList.forEach((doc)=>{
                        this.directorioService.download(doc.id).then((data) => {
                            let urlData = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
                            this.imagenesList.push({ source: Object.values(urlData) });
                            this.imagenesList = this.imagenesList.slice();
                            
                        });
                    });
                    
                });
            });
    }

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    }
  };

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
                let calif = this.buscarCalificacion(elemList[i], calificacionList);
                elemList[i].calificacion = calif;
            }
        }
    }

    private cargarListaCalificaciones(){//Es este el que suelta undefined
        let filterQuery = new FilterQuery();
        let filterId = new Filter();
        filterId.criteria = Criteria.EQUALS;
        filterId.field = 'id';
        filterId.value1 = this.inspeccion.id.toString();
        this.inspeccionId = this.inspeccion.id;

        filterQuery.filterList = [filterId];
        // this.initLoading = true;
        this.inspeccionService
            .findByFilter(filterQuery)
            .then((data) => {
                this.inspeccion = (<Inspeccion[]>data['data'])[0];
                this.listaInspeccion = this.inspeccion.listaInspeccion ;
                this.area = this.inspeccion.area;
                // this.getTareaEvidences(parseInt(this.listaInspeccion.listaInspeccionPK.id), this.listaInspeccion.listaInspeccionPK.version);
                // setTimeout(() => {
                //     this.empleadoService.findempleadoByUsuario(this.inspeccion.usuarioRegistra.id).then((resp) => {
                //         this.empleadoelabora = <Empleado>resp;
                //         this.getFirma(this.empleadoelabora.id);
                //     });
                // }, 2000);

                // this.listaInspeccion.formulario.campoList.forEach((campo) => {
                //     for (let i = 0; i < this.inspeccion.respuestasCampoList.length; i++) {
                //         let rc = this.inspeccion.respuestasCampoList[i];
                //         if (rc.campoId == campo.id) {
                //             campo.respuestaCampo = rc;
                //             break;
                //         }
                //     }
                // });
                this.cargarCalificaciones(this.listaInspeccion.elementoInspeccionList, this.inspeccion.calificacionList);
                // this.initLoading = false;
            })
            .catch((err) => {
                // this.initLoading = false;
            });

    }

    
}
