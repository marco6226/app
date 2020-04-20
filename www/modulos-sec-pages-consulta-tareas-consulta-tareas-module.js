(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-sec-pages-consulta-tareas-consulta-tareas-module"],{

/***/ "./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ConsultaTareasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaTareasPageModule", function() { return ConsultaTareasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_comun_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../com/comun.module */ "./src/app/modulos/com/comun.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consulta_tareas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consulta-tareas.page */ "./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _consulta_tareas_page__WEBPACK_IMPORTED_MODULE_6__["ConsultaTareasPage"]
    }
];
var ConsultaTareasPageModule = /** @class */ (function () {
    function ConsultaTareasPageModule() {
    }
    ConsultaTareasPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_com_comun_module__WEBPACK_IMPORTED_MODULE_4__["ComunModule"]],
            providers: [],
            entryComponents: [],
            declarations: [
                _consulta_tareas_page__WEBPACK_IMPORTED_MODULE_6__["ConsultaTareasPage"]
            ]
        })
    ], ConsultaTareasPageModule);
    return ConsultaTareasPageModule;
}());



/***/ }),

/***/ "./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navegar('/app/sec/secInicio')\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Actividades asignadas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div>\n    <ion-spinner slot=\"start\" class=\"main-spinner\" name=\"dots\" color=\"primary\" *ngIf=\"loading == true\"></ion-spinner>\n  </div>\n\n  <ion-card *ngFor=\"let tarea of tareasList; let i = index\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        <div class=\"cabecera\">\n          <ion-badge [ngClass]=\"{\n            'nueva':tarea.estado == 'NUEVO', \n            'realizada':tarea.estado == 'REALIZADA', \n            'finalizada':tarea.estado == 'FINALIZADA'\n          }\">{{tarea.estado}}</ion-badge>\n        </div>\n\n        <p class=\"tarea-nombre\">\n          {{tarea.nombre}}\n        </p>\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content>\n      <strong>Tipo de acción:</strong>\n      <p>{{tarea.tipoAccion}}</p>\n      <strong>Descripción:</strong>\n      <p>{{tarea.descripcion}}</p>\n      <strong>Fecha proyectada:</strong>\n      <p>{{tarea.fechaProyectada | date:'dd-MMM-yyyy'}}</p>\n      <strong>{{tarea.areaResponsable?.tipoArea.nombre}}:</strong>\n      <p>{{tarea.areaResponsable?.nombre}}</p>\n      <strong *ngIf=\"tarea.usuarioRealiza?.email != null\">Usuario realiza:</strong>\n      <p *ngIf=\"tarea.usuarioRealiza?.email != null\">{{tarea.usuarioRealiza.email}} - {{tarea.fechaRealizacion | date:'dd/MMM/yyyy'}}</p>\n      <strong *ngIf=\"tarea.usuarioRealiza?.email != null\">Observaciones usuario realiza:</strong>\n      <p *ngIf=\"tarea.usuarioRealiza?.email != null\">{{tarea.observacionesRealizacion}}</p>\n      <strong *ngIf=\"tarea.usuarioVerifica?.email != null\">Usuario verifica:</strong>\n      <p *ngIf=\"tarea.usuarioVerifica?.email != null\">{{tarea.usuarioVerifica.email}} - {{tarea.fechaVerificacion | date:'dd/MMM/yyyy'}}</p>\n      <strong *ngIf=\"tarea.usuarioVerifica?.email != null\">Observaciones usuario verifica:</strong>\n      <p *ngIf=\"tarea.usuarioVerifica?.email != null\">{{tarea.observacionesVerificacion}}</p>\n\n      <ion-item *ngIf=\"tarea.estado == 'NUEVO' || tarea.estado == 'REALIZADA'\">\n        <ion-label *ngIf=\"tarea.estado == 'NUEVO'\" position=\"stacked\">Reportar cumplimiento</ion-label>\n        <ion-label *ngIf=\"tarea.estado == 'REALIZADA'\" position=\"stacked\">Reportar verificación</ion-label>\n\n        <ion-textarea style=\"flex: 50%;\" *ngIf=\"tarea.estado == 'NUEVO' && (tarea['loading'] == null || tarea['loading'] == false)\"\n          [(ngModel)]=\"tarea.observacionesRealizacion\" placeholder=\"Comentarios\" maxlength=\"510\"></ion-textarea>\n\n        <ion-textarea style=\"flex: 50%;\" *ngIf=\"tarea.estado == 'REALIZADA' && (tarea['loading'] == null || tarea['loading'] == false)\"\n          [(ngModel)]=\"tarea.observacionesVerificacion\" placeholder=\"Comentarios\" maxlength=\"510\"></ion-textarea>\n\n        <div>\n          <ion-button slot=\"end\" fill=\"clear\" *ngIf=\"tarea.estado == 'NUEVO' && (tarea['loading'] == null || tarea['loading'] == false)\"\n            (click)=\"abrirDlg(tarea, i, true)\">\n            <ion-icon slot=\"icon-only\" name=\"checkmark-circle\"></ion-icon>\n          </ion-button>\n\n          <ion-button slot=\"end\" fill=\"clear\" *ngIf=\"tarea.estado == 'REALIZADA' && (tarea['loading'] == null || tarea['loading'] == false)\"\n            (click)=\"abrirDlg(tarea, i, false)\">\n            <ion-icon name=\"thumbs-up\"></ion-icon>\n          </ion-button>\n\n          <ion-spinner slot=\"end\" class=\"main-spinner\" name=\"dots\" color=\"primary\" *ngIf=\"tarea['loading'] == true\"></ion-spinner>\n        </div>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cabecera {\n  display: flex;\n  align-items: center; }\n\n.realizada {\n  background-color: #ffaa00; }\n\n.nueva {\n  background-color: #ff0000; }\n\n.finalizada {\n  background-color: #00AA00; }\n\n.tarea-nombre {\n  color: #333; }\n\nstrong {\n  color: #333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0YWxrZXIvRGVza3RvcC8xbWlsbG9uL2Zyb250ZW5kL3NpZ2Vzc19hcHAvc3JjL2FwcC9tb2R1bG9zL3NlYy9wYWdlcy9jb25zdWx0YS10YXJlYXMvY29uc3VsdGEtdGFyZWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL3NlYy9wYWdlcy9jb25zdWx0YS10YXJlYXMvY29uc3VsdGEtdGFyZWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWJlY2VyYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmVhbGl6YWRhe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFhMDA7XG59XG4ubnVldmF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cbi5maW5hbGl6YWRhe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFBMDA7XG59XG4udGFyZWEtbm9tYnJle1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG5zdHJvbmd7XG4gICAgY29sb3I6IzMzMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.page.ts ***!
  \***************************************************************************/
/*! exports provided: ConsultaTareasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaTareasPage", function() { return ConsultaTareasPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../com/services/sesion.service */ "./src/app/modulos/com/services/sesion.service.ts");
/* harmony import */ var _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../com/entities/filter-query */ "./src/app/modulos/com/entities/filter-query.ts");
/* harmony import */ var _services_tarea_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/tarea.service */ "./src/app/modulos/sec/services/tarea.service.ts");
/* harmony import */ var _com_entities_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../com/entities/filter */ "./src/app/modulos/com/entities/filter.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConsultaTareasPage = /** @class */ (function () {
    function ConsultaTareasPage(msgService, alertController, tareaService, sesionService, router) {
        this.msgService = msgService;
        this.alertController = alertController;
        this.tareaService = tareaService;
        this.sesionService = sesionService;
        this.router = router;
        this.loading = true;
    }
    ConsultaTareasPage.prototype.ngOnInit = function () {
        var _this = this;
        var areas = this.sesionService.getPermisosMap()['SEC_GET_TAR'].areas;
        var fq = new _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_3__["FilterQuery"]();
        fq.fieldList = [
            'id', 'nombre', 'descripcion', 'observacionesRealizacion', 'tipoAccion', 'usuarioRealiza_id',
            'estado', 'fechaProyectada', 'fechaRealizacion', 'usuarioRealiza_email', 'areaResponsable_id',
            'areaResponsable_nombre', 'areaResponsable_tipoArea_nombre'
        ];
        fq.filterList = [
            { field: 'areaResponsable.id', value1: areas, criteria: _com_entities_filter__WEBPACK_IMPORTED_MODULE_5__["Criteria"].CONTAINS },
            { field: 'estado', value1: 'FINALIZADA', criteria: _com_entities_filter__WEBPACK_IMPORTED_MODULE_5__["Criteria"].NOT_EQUALS }
        ];
        this.tareaService.findByFilter(fq)
            .then(function (resp) {
            _this.tareasList = [];
            (resp['data']).forEach(function (tarea) {
                var obj = _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_3__["FilterQuery"].dtoToObject(tarea);
                _this.tareasList.push(obj);
            });
            _this.loading = false;
        })
            .catch(function (err) {
            _this.loading = false;
        });
    };
    ConsultaTareasPage.prototype.navegar = function (url) {
        this.router.navigate([url]);
    };
    ConsultaTareasPage.prototype.abrirDlg = function (tarea, idx, repCump) {
        // this.confirmarTarea(tarea, idx, repCump);
        this.reportar(tarea, repCump, idx);
    };
    // async confirmarTarea(tarea: Tarea, idx: number, repCump: boolean) {
    //   let accion = repCump ? 'cumplimiento' : 'verificación';
    //   let alert = await this.alertController.create({
    //     subHeader: 'Reporte de ' + accion + ':',
    //     message: tarea.nombre,
    //     inputs: [
    //       { name: 'descripcion', type: 'text', placeholder: 'Observaciones de ' + accion }
    //     ],
    //     buttons: [
    //       {
    //         text: 'Reportar',
    //         handler: data => this.reportar(tarea, repCump, idx, data.descripcion)
    //       },
    //       {
    //         text: 'Cancel',
    //         role: 'cancel',
    //         cssClass: 'secondary',
    //         handler: () => {
    //           console.log('Confirm Cancel');
    //         }
    //       }
    //     ]
    //   }).;
    //   await alert.present();
    // }
    ConsultaTareasPage.prototype.reportar = function (tarea, repCump, idx) {
        var _this = this;
        tarea['loading'] = true;
        if (repCump == true) {
            this.tareaService.reportarCumplimiento(tarea)
                .then(function (resp) {
                _this.tareasList[idx] = resp;
                _this.msgService.showMessage({
                    mensaje: 'Reporte realizado',
                    detalle: 'El cumplimiento de la tarea fue reportado correctamente',
                    tipoMensaje: 'success'
                });
                tarea['loading'] = false;
            })
                .catch(function (err) {
                tarea['loading'] = false;
            });
        }
        else {
            this.tareaService.reportarVerificacion(tarea)
                .then(function (resp) {
                _this.tareasList[idx] = resp;
                _this.msgService.showMessage({
                    mensaje: 'Reporte realizado',
                    detalle: 'La verificación de la tarea fue reportada correctamente',
                    tipoMensaje: 'success'
                });
                tarea['loading'] = false;
            })
                .catch(function (err) {
                tarea['loading'] = false;
            });
            ;
        }
    };
    ConsultaTareasPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-consultaTareas',
            template: __webpack_require__(/*! ./consulta-tareas.page.html */ "./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.page.html"),
            providers: [_services_tarea_service__WEBPACK_IMPORTED_MODULE_4__["TareaService"]],
            styles: [__webpack_require__(/*! ./consulta-tareas.page.scss */ "./src/app/modulos/sec/pages/consulta-tareas/consulta-tareas.page.scss")]
        }),
        __metadata("design:paramtypes", [_com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_7__["MensajeUsuarioService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _services_tarea_service__WEBPACK_IMPORTED_MODULE_4__["TareaService"],
            _com_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__["SesionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConsultaTareasPage);
    return ConsultaTareasPage;
}());



/***/ }),

/***/ "./src/app/modulos/sec/services/tarea.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modulos/sec/services/tarea.service.ts ***!
  \*******************************************************/
/*! exports provided: TareaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TareaService", function() { return TareaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _com_services_service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../com/services/service-crud.service */ "./src/app/modulos/com/services/service-crud.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TareaService = /** @class */ (function (_super) {
    __extends(TareaService, _super);
    function TareaService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TareaService.prototype.reportarCumplimiento = function (tarea) {
        var _this = this;
        var body = JSON.stringify(tarea);
        return new Promise(function (resolve, reject) {
            _this.httpInt.put(_this.end_point + "reportarCumplimiento", body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(_this.timeout))
                .subscribe(function (res) { return resolve(res); }, function (err) {
                reject(err);
                _this.manageError(err);
            });
        });
    };
    TareaService.prototype.reportarVerificacion = function (tarea) {
        var _this = this;
        var body = JSON.stringify(tarea);
        return new Promise(function (resolve, reject) {
            _this.httpInt.put(_this.end_point + "reportarVerificacion", body)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(_this.timeout))
                .subscribe(function (res) { return resolve(res); }, function (err) {
                reject(err);
                _this.manageError(err);
            });
        });
    };
    TareaService.prototype.findByUsuario = function (usuarioId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpInt.get(_this.end_point + 'usuario/' + usuarioId)
                .subscribe(function (res) { return resolve(res); }, function (err) {
                _this.manageError(err);
                reject(err);
            });
        });
    };
    TareaService.prototype.getClassName = function () {
        return "TareaService";
    };
    TareaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TareaService);
    return TareaService;
}(_com_services_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["ServiceCRUD"]));



/***/ })

}]);
//# sourceMappingURL=modulos-sec-pages-consulta-tareas-consulta-tareas-module.js.map