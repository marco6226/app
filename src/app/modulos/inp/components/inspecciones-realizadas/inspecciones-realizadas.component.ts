import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Console } from 'console';
import { FilterQuery } from '../../../com/entities/filter-query';
import { OfflineService } from '../../../com/services/offline.service';
import { StorageService } from '../../../com/services/storage.service';
import { TareaSeguimientoComponent } from '../../../sec/components/tarea-seguimiento/tarea-seguimiento.component';
import { Inspeccion } from '../../entities/inspeccion';
import { ListaInspeccion } from '../../entities/lista-inspeccion';
import { InspeccionConsultarFormComponent } from '../inspeccion-consultar-form/inspeccion-consultar-form.component';

@Component({
    selector: 'sm-inspeccion-realizada',
    templateUrl: './inspecciones-realizadas.component.html',
    styleUrls: ['./inspecciones-realizadas.component.css'],
})
export class InspeccionesRealizadasComponent implements OnInit {
    @Output('onInspSelect') onInspSelect = new EventEmitter<Inspeccion>();
    inspList: Inspeccion[];

    filtroToogle: boolean = false;
    rotarIcon: string='rotate(0deg)';

    loading: boolean;
    inspCargadas: boolean;
    filtFechaHasta: any;
    filtFechaDesde: any;
    buttonText = true;
    count: number;
    tituloButton: String = 'Filtrar';

    textoFilt: string;
    campoFilt: string;
    fechaDesde: Date = new Date('1/01/1990');
    fechaHasta: Date = new Date();
    ListaUbicacion: Inspeccion[];



    constructor(private offlineService: OfflineService, private storageService: StorageService, public modalController: ModalController) {}

    ngOnInit() {
        this.cargarRealizadas();
        setTimeout(() => {
            this.extraerUbicacion();            
        }, 1000);
    }


    cargarRealizadas() {
        this.loading = true;
        this.inspCargadas = null;
        this.offlineService
            .queryInspeccionesRealizadas()
            .then((resp) => {
                this.inspList=[];
                // this.inspList = resp['data'];
                (<any[]>resp['data']).forEach((dto) => {
                    this.inspList.push(FilterQuery.dtoToObject(dto)); //Llenar la lista de inspecciones con los datos
                });
                this.loading = false;
                this.inspCargadas = true;
            })
            .catch((err) => {
                this.loading = false;
                this.inspCargadas = false;
            });
    }


    async abrirInspeccion(inspeccion: Inspeccion) {
        const modal = await this.modalController.create({
            component: InspeccionConsultarFormComponent,
            componentProps: { value: inspeccion },
            cssClass: 'modal-fullscreen',
        });
        return await modal.present();
    }

    onInspeccionSelect(inspeccion: Inspeccion) {
        this.onInspSelect.emit(inspeccion);
    }

    // Filtros
    filtrar() {
        this.loading = true;
        this.inspList = [];
        this.count = 0;
        this.cargarListasFiltro(this.filtFechaDesde, this.filtFechaHasta);
    }
    

    filtrarInspecciones(){

        this.filtroToogle = !this.filtroToogle;

        if(this.filtroToogle){
            this.rotarIcon='rotate(180deg)'
        }
        else{
            this.rotarIcon='rotate(0deg)'
        }

        console.log("ok")
        // console.log(this.inspList)
        // let data = this.inspList
        // this.color="blue"
        // let filto= "BOGOTA D.C."
        // this.rotard='rotate(180deg)';
        // data.filter(item => {
        //     return item.equipo.includes(filto)
        // });
        
        // console.log(data)
        // this.textoFilt="23"
        // let data = this.inspList.filter(item=>{
        //     return item.equipo
        // })

    }

    filtrarFechaDesde(event) {
        this.filtFechaDesde = event.detail.value;
        if (this.filtFechaHasta != null && !this.buttonText) {
            this.filtrar();
        }
    }

    filtrarFechaHasta(event) {
        this.filtFechaHasta = event.detail.value;

        if (this.filtFechaDesde != null && !this.buttonText) {
            this.filtrar();
        }
    }

    cargarListasFiltro(desde: Date, hasta: Date) {
        this.loading = true;
        this.inspList = [];
        this.offlineService
            .queryRealizadasListBetween(desde, hasta)
            .then((resp) => {
                this.inspList = [];
                (<any[]>resp['data']).forEach((dto) => {
                    console.log(resp);
                    this.inspList.push(FilterQuery.dtoToObject(dto));
                });
                this.loading = false;
                this.inspCargadas = true;
            })
            .catch((err) => {
                this.loading = false;
                this.inspCargadas = false;
            });
    }
    Reset() {
        if (this.buttonText) {
            if (this.filtFechaDesde != null && this.filtFechaHasta != null) {
                this.tituloButton = 'Borrar Filtro';
                this.buttonText = false;
                this.filtrar();
            }
        } else {
            this.tituloButton = 'Filtrar';
            this.buttonText = true;
            this.filtFechaDesde = new Date()
            this.filtFechaHasta = new Date()
            this.cargarRealizadas();
        }
    }

    ok(){
       this.extraerUbicacion();
    }

    borrarFiltros(){
        this.textoFilt='';
        this.campoFilt='';
        this.fechaDesde = new Date('1/01/1990');
        this.fechaHasta = new Date();
        
    }

    extraerUbicacion(){
        console.log(this.inspList)
          
          var hash = {};
          this.ListaUbicacion = this.inspList.filter(function(current) {
            var exists = !hash[current.area.nombre];
            hash[current.area.nombre] = true;
            return exists;
          });
          
          console.log(this.ListaUbicacion);
    }
}
