import { FiltroPipe } from './../inp/components/inspecciones-realizadas/filtro/filtro.pipe';
import { TareaGeneralComponent } from './../sec/components/tarea-general/tarea-general.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { EmpleadoSelectorComponent } from './components/empleado-selector/empleado-selector.component';
import { ObservacionTarjetasComponent } from './../auc/components/observacion-tarjetas/observacion-tarjetas.component';
import { ObservacionConsultarComponent } from './../auc/components/observacion-consultar/observacion-consultar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicModule } from '@ionic/angular';

import { HttpInt } from './services/http-int.service';
import { MensajeUsuarioComponent } from './components/mensaje-usuario/mensaje-usuario.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CambioPasswdComponent } from './components/cambio-passwd/cambio-passwd.component';
import { ProgramacionService } from '../inp/services/programacion.service';
import { InspeccionService } from '../inp/services/inspeccion.service';
import { DirectorioService } from '../ado/services/directorio.service';
import { AreaService } from '../emp/services/area.service';
import { SistemaCausaRaizService } from '../sec/services/sistema-causa-raiz.service';
import { TarjetaService } from '../auc/services/tarjeta.service';
import { TienePermisoDirective } from './directives/tiene-permiso.directive';
import { ConfiguracionGeneralDirective } from './directives/configuracion-general.directive';

import { SafeBypassPipe } from './pipes/safe-bypass.pipe';
import { DesviacionService } from '../sec/services/desviacion.service';
import { SistemaCausaInmediataService } from '../sec/services/sistema-causa-inmediata.service';
import { SistemaCausaAdministrativaService } from '../sec/services/sistema-causa-administrativa.service';
import { ConfiguracionGeneralService } from './services/configuracion-general.service';
import { ActaService } from '../cop/services/acta.service';
import { HTMLSanitizerService } from './services/html-sanitizer.service';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';

import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
    imports: [
        CommonModule, 
        HttpModule, 
        FormsModule, 
        IonicModule, 
        ReactiveFormsModule, 
        AutoCompleteModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FormularioComponent,
        MensajeUsuarioComponent,
        CambioPasswdComponent,
        TerminosCondicionesComponent,
        LoginComponent,
        TienePermisoDirective,
        ConfiguracionGeneralDirective,
        SafeBypassPipe,
        ObservacionConsultarComponent,
        ObservacionTarjetasComponent,
        EmpleadoSelectorComponent,
        AutoCompleteModule,
        FiltroPipe
    ],
    declarations: [
        MensajeUsuarioComponent,
        CambioPasswdComponent,
        TerminosCondicionesComponent,
        FormularioComponent,
        LoginComponent,
        InicioComponent,
        TienePermisoDirective,
        ConfiguracionGeneralDirective,
        SafeBypassPipe,
        ObservacionConsultarComponent,
        ObservacionTarjetasComponent,
        EmpleadoSelectorComponent,
        AutocompleteComponent,
        FiltroPipe
    ],
    providers: [
        HttpInt,
        ProgramacionService,
        InspeccionService,
        DirectorioService,
        AreaService,
        SistemaCausaRaizService,
        TarjetaService,
        DesviacionService,
        SistemaCausaInmediataService,
        SistemaCausaAdministrativaService,
        ConfiguracionGeneralService,
        ActaService,
        HTMLSanitizerService,
    ],
})
export class ComunModule {}
