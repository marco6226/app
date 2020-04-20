import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MensajeUsuarioService } from './modulos/com/services/mensaje-usuario.service'
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
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ hardwareBackButton: false }),
    AppRoutingModule,
    ComunModule,
    HttpClientModule
  ],
  providers: [
    // FileTransfer,
    MensajeUsuarioService,
    CambioPasswdService,
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
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
