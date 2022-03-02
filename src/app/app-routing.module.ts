import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modulos/com/components/login/login.component';
import { InicioComponent } from './modulos/com/components/inicio/inicio.component';
import { MisTareasPageModule } from './modulos/sec/pages/mis-tareas/mis-tareas.module';
import { MisTareasPage } from './modulos/sec/pages/mis-tareas/mis-tareas.page';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'appUpdate', loadChildren: './modulos/com/pages/app-update/app-update.module#AppUpdatePageModule' },
  { path: 'login', component: LoginComponent, },
  {
    path: 'app',
    component: InicioComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule'
      },
      {
        path: 'ayuda',
        loadChildren: './ayuda/ayuda.module#AyudaPageModule'
      },
      {
        path: 'inp/elaboracionInspeccion',
        loadChildren: './modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.module#ElaboracionInspeccionPageModule'
      },
      {
        path: 'auc/reporteObservacion',
        loadChildren: './modulos/auc/pages/reporte-observacion/reporte-observacion.module#ReporteObservacionPageModule'
      },
      {
        path: 'cop/consultaActas',
        loadChildren: './modulos/cop/pages/consulta-actas/consulta-actas.module#ConsultaActasPageModule'
      },
      {
        path: 'sec/consultaTareas',
        loadChildren: './modulos/sec/pages/consulta-tareas/consulta-tareas.module#ConsultaTareasPageModule'
      },
      // {
      //   path: 'sec/misTareas',
      //   loadChildren: './modulos/sec/pages/mis-tareas/mis-tareas.module#MisTareasPageModule'
      // },
      {
        path: 'sec',
        children:[
          {path:'misTareas', component: MisTareasPage},
          {path:'misTareas/:id', component: MisTareasPage}
        ]
      },
      {
        path: 'sec/secInicio',
        loadChildren: './modulos/sec/pages/sec-inicio/sec-inicio.module#SecInicioPageModule'
      },
      {
        path: 'sec/consultaDesviaciones',
        loadChildren: './modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.module#ConsultaDesviacionesPageModule'
      },
      {
        path: 'ind/consultaTablero',
        loadChildren: './modulos/ind/pages/consulta-tablero/consulta-tablero.module#ConsultaTableroPageModule'
      }
    ]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
