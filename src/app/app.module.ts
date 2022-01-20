import { TareaCierreComponent } from './modulos/sec/components/tarea-cierre/tarea-cierre.component';
import { TareaGeneralComponent } from './modulos/sec/components/tarea-general/tarea-general.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MensajeUsuarioService } from './modulos/com/services/mensaje-usuario.service';
import { SesionService } from './modulos/com/services/sesion.service';
import { HttpClientModule } from '@angular/common/http';

import { ComunModule } from './modulos/com/comun.module';
import { AuthService } from './modulos/com/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpAuthInterceptor } from './modulos/com/services/http-auth-interceptor';
import { CambioPasswdService } from './modulos/com/services/cambio-passwd.service';
import { OfflineService } from './modulos/com/services/offline.service';
import { StorageService } from './modulos/com/services/storage.service';
import { SQLite, SQLiteDatabaseConfig, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { TienePermisoDirective } from './modulos/com/directives/tiene-permiso.directive';
// import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { EmpleadoService } from './modulos/com/services/empleado.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MisTareasPageModule } from './modulos/sec/pages/mis-tareas/mis-tareas.module';
import { MisTareasPage } from './modulos/sec/pages/mis-tareas/mis-tareas.page';
import { TareaPage } from './modulos/sec/pages/tarea/tarea.page';
import { TareaSeguimientoComponent } from './modulos/sec/components/tarea-seguimiento/tarea-seguimiento.component';

// class SQLiteMock {
//   public create(config: SQLiteDatabaseConfig): Promise<SQLiteObject> {
//     return new Promise((resolve, reject) => {
//       resolve(new SQLiteObject(new Object()));
//     });
//   }

//   public executeSql(sql: string): Promise<SQLiteObject> {
//     return new Promise((resolve, reject) => {
//       resolve(new SQLiteObject(new Object()));
//     });
//   }
// }

@NgModule({
    declarations: [
        AppComponent,
        MisTareasPage,
        TareaPage,
        TareaGeneralComponent,
        TareaSeguimientoComponent,
        TareaCierreComponent
    ],
    entryComponents: [TareaPage],
    imports: [
        BrowserModule, 
        BrowserAnimationsModule, 
        IonicModule.forRoot({ hardwareBackButton: false }), 
        AppRoutingModule, 
        ComunModule, 
        HttpClientModule, 
        AutoCompleteModule,
        
    ],
    providers: [
        // FileTransfer,
        MensajeUsuarioService,
        CambioPasswdService,
        EmpleadoService,
        SesionService,
        StatusBar,
        SplashScreen,
        Camera,
        AuthService,
        OfflineService,
        SQLite,
        StorageService,
        AppVersion,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        // { provide: SQLite, useClass: SQLiteMock },
        { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
