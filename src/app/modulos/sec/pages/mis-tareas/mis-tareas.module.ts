import { TareaSeguimientoComponent } from './../../components/tarea-seguimiento/tarea-seguimiento.component';
import { TareaCierreComponent } from './../../components/tarea-cierre/tarea-cierre.component';
import { TareaGeneralComponent } from './../../components/tarea-general/tarea-general.component';
import { TareaPage } from './../tarea/tarea.page';
import { TareaComponent } from './../../components/tarea/tarea.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ComunModule } from '../../../com/comun.module'
import { IonicModule } from '@ionic/angular';
import { MisTareasPage } from './mis-tareas.page';
import { TareaEvidencesComponent } from '../../components/tarea-evidences/tarea-evidences.component';
import { TareaModule } from '../../components/tarea/tarea.module';


const routes: Routes = [
  {
    path: '',
    component: MisTareasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TareaModule
  ],
  exports: [],
  providers: [],
  entryComponents: [
    // TareaComponent, 
    // TareaModule, 
    // TareaGeneralComponent, 
    // TareaCierreComponent,
    // TareaSeguimientoComponent,
    // TareaEvidencesComponent
  ],
  declarations: [
    MisTareasPage,
    // TareaComponent,
    TareaPage,
    TareaGeneralComponent,
    TareaCierreComponent,
    TareaSeguimientoComponent,
    TareaEvidencesComponent
  ],
})
export class MisTareasPageModule {

}
