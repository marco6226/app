import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ComunModule } from '../../../com/comun.module'
import { IonicModule } from '@ionic/angular';
import { MisTareasPage } from './mis-tareas.page';


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
    RouterModule.forChild(routes)
  ],
  exports: [ComunModule],
  providers: [],
  entryComponents: [],
  declarations: [
    MisTareasPage
  ]
})
export class MisTareasPageModule {

}
