import { Observacion } from './../../entities/observacion';
import { OfflineService } from './../../../com/services/offline.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observacion-consultar',
  templateUrl: './observacion-consultar.component.html',
  styleUrls: ['./observacion-consultar.component.scss'],
})
export class ObservacionConsultarComponent implements OnInit {

  observacionLista: Observacion[];
  loading: boolean;
  observacionList: any;
  
  constructor(
    private offlineService: OfflineService,
  ) { }

  ngOnInit() {
    this.cargarObservaciones();
  }
    
  cargarObservaciones() {
    this.loading = true;
    this.offlineService.queryObservacion()
      .then(resp => {
        this.observacionLista = resp['data'];
        this.loading = false;
      })
      .catch(err => {
        this.loading = false;
      });
  }

  convertirAFecha(timestamp: number){
    var date = new Date(timestamp);
    return date.toLocaleString();
    return (date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear());
  }

}
