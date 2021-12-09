import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ComunModule } from '../../../com/comun.module';
import { IonicModule } from '@ionic/angular';
import { ListaInspeccionService } from '../../services/lista-inspeccion.service';

import { ElaboracionInspeccionPage } from './elaboracion-inspeccion.page';
import { ProgramacionInspeccionesComponent } from '../../components/programacion-inspecciones/programacion-inspecciones.component';
import { InspeccionFormComponent } from '../../components/inspeccion-form/inspeccion-form.component';
import { PreguntaInspeccionComponent } from '../../components/pregunta-inspeccion/pregunta-inspeccion.component';
import { InspeccionesSyncComponent } from '../../components/inspecciones-sync/inspecciones-sync.component';
import { InspeccionNoProgramadaComponent } from '../../components/inspeccion-no-programada/inspeccion-no-programada.component';
import { AreaSelectorModule } from '../../../com/components/area-selector/area-selector.component';
import { MenuListaComponent } from '../../components/menu-lista/menu-lista.component';
import { InspeccionPendienteComponent } from '../../components/inspeccion-pendiente/inspeccion-pendiente.component';
import { InspeccionesRealizadasComponent } from '../../components/inspecciones-realizadas/inspecciones-realizadas.component';

const routes: Routes = [
    {
        path: '',
        component: ElaboracionInspeccionPage,
    },
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, ComunModule, RouterModule.forChild(routes), AreaSelectorModule],
    exports: [ComunModule],
    providers: [ListaInspeccionService],
    entryComponents: [InspeccionFormComponent, MenuListaComponent, InspeccionPendienteComponent],
    declarations: [
        ElaboracionInspeccionPage,
        ProgramacionInspeccionesComponent,
        InspeccionFormComponent,
        PreguntaInspeccionComponent,
        InspeccionesSyncComponent,
        InspeccionNoProgramadaComponent,
        MenuListaComponent,
        InspeccionPendienteComponent,
        ProgramacionInspeccionesComponent,
        InspeccionesRealizadasComponent,
    ],
})
export class ElaboracionInspeccionPageModule {}
