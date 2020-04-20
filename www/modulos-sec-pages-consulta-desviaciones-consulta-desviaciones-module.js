(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-sec-pages-consulta-desviaciones-consulta-desviaciones-module"],{

/***/ "./src/app/modulos/ado/entities/documento.ts":
/*!***************************************************!*\
  !*** ./src/app/modulos/ado/entities/documento.ts ***!
  \***************************************************/
/*! exports provided: Documento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Documento", function() { return Documento; });
var Documento = /** @class */ (function () {
    function Documento() {
    }
    return Documento;
}());



/***/ }),

/***/ "./src/app/modulos/sec/components/analisis-desviaciones-sync/analisis-desviaciones-sync.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modulos/sec/components/analisis-desviaciones-sync/analisis-desviaciones-sync.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngFor=\"let analisis of analisisDesvList; let i = index\">\n    <ion-item>\n        <ion-button *ngIf=\"analisis['sync'] != true\" fill=\"outline\" (click)=\"sincronizar(analisis, i)\">\n            {{analisis.fechaElaboracion | date:'dd/MM/yyyy HH:mm'}}\n        </ion-button>\n        <ion-spinner slot=\"start\" class=\"main-spinner\" name=\"dots\" *ngIf=\"analisis['sync'] == true\" color=\"primary\"></ion-spinner>\n\n        <ion-button *ngIf=\"analisis['sync'] != true\" fill=\"clear\" slot=\"end\" (click)=\"presentAlertConfirm(analisis, i)\" color=\"medium\">\n            <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n    </ion-item>\n    <ion-card-header>\n        <ion-card-subtitle>\n            <p *ngFor=\"let desv of analisis.desviacionesList\">{{desv.hashId}}</p>\n        </ion-card-subtitle>\n        <ion-card-subtitle>\n            {{analisis.observacion}}\n        </ion-card-subtitle>\n    </ion-card-header>\n</ion-card>"

/***/ }),

/***/ "./src/app/modulos/sec/components/analisis-desviaciones-sync/analisis-desviaciones-sync.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modulos/sec/components/analisis-desviaciones-sync/analisis-desviaciones-sync.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3Mvc2VjL2NvbXBvbmVudHMvYW5hbGlzaXMtZGVzdmlhY2lvbmVzLXN5bmMvYW5hbGlzaXMtZGVzdmlhY2lvbmVzLXN5bmMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modulos/sec/components/analisis-desviaciones-sync/analisis-desviaciones-sync.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modulos/sec/components/analisis-desviaciones-sync/analisis-desviaciones-sync.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AnalisisDesviacionesSyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalisisDesviacionesSyncComponent", function() { return AnalisisDesviacionesSyncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
/* harmony import */ var _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ado/services/directorio.service */ "./src/app/modulos/ado/services/directorio.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_analisis_desviacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/analisis-desviacion.service */ "./src/app/modulos/sec/services/analisis-desviacion.service.ts");
/* harmony import */ var _ado_entities_documento__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ado/entities/documento */ "./src/app/modulos/ado/entities/documento.ts");
/* harmony import */ var _com_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../com/services/storage.service */ "./src/app/modulos/com/services/storage.service.ts");
/* harmony import */ var _com_utils_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../com/utils/util */ "./src/app/modulos/com/utils/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var AnalisisDesviacionesSyncComponent = /** @class */ (function () {
    function AnalisisDesviacionesSyncComponent(storageService, msgService, dirService, alertController, anDesvService) {
        this.storageService = storageService;
        this.msgService = msgService;
        this.dirService = dirService;
        this.alertController = alertController;
        this.anDesvService = anDesvService;
        this.onEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AnalisisDesviacionesSyncComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storageService.getAnalisisListSync()
            .then(function (resp) {
            if (resp != null) {
                _this.onEvent.emit({ type: 'onLoad', count: resp.count, analisisList: resp.data });
                _this.analisisDesvList = resp.data;
            }
            else {
                _this.onEvent.emit({ type: 'onLoad', count: 0, analisisList: [] });
            }
        });
    };
    AnalisisDesviacionesSyncComponent.prototype.adicionarAnalisis = function (analisis) {
        if (this.analisisDesvList == null)
            this.analisisDesvList = [];
        this.analisisDesvList.push(analisis);
        this.analisisDesvList = this.analisisDesvList.slice();
    };
    AnalisisDesviacionesSyncComponent.prototype.borrarAnalisis = function (analisis, indice, emitEvent) {
        this.storageService.borrarAnalisis(analisis['hash']);
        this.analisisDesvList.splice(indice, 1);
        this.analisisDesvList = this.analisisDesvList.slice();
        if (emitEvent)
            this.onEvent.emit({ type: 'onLocalRemove', count: this.analisisDesvList.length, analisis: analisis });
    };
    AnalisisDesviacionesSyncComponent.prototype.presentAlertConfirm = function (analisis, index) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Eliminar investigación?',
                            message: 'Esto borrará de su entorno local la investigación y no podrá sincronizarla. ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () {
                                        _this.borrarAnalisis(analisis, index, true);
                                        _this.msgService.showMessage({ tipoMensaje: 'info', mensaje: 'Investigación eliminada de entorno local', detalle: '' });
                                    }
                                }, {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'No'
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnalisisDesviacionesSyncComponent.prototype.manejarRespuestaSync = function (analisis, idx, resp) {
        this.msgService.showMessage({
            tipoMensaje: 'success',
            mensaje: 'Investigación sincronizada',
            detalle: 'La investigacion ha sido sincronizada correctamente'
        });
        this.borrarAnalisis(analisis, idx);
        this.onEvent.emit({ type: 'onSync', analisis: resp, count: this.analisisDesvList.length });
    };
    AnalisisDesviacionesSyncComponent.prototype.sincronizar = function (analisis, indice) {
        var _this = this;
        analisis['sync'] = true;
        var documentosList = analisis['imagenes'];
        var documentosEliminarList = analisis['imagenes_eliminar'];
        if (analisis.id == null) {
            this.anDesvService.create(analisis)
                .then(function (resp) {
                analisis.id = resp.id;
                if (documentosList != null) {
                    documentosList.forEach(function (doc) {
                        _com_utils_util__WEBPACK_IMPORTED_MODULE_7__["Util"].dataURLtoFile(doc.url, doc.alias + '.' + doc.ext)
                            .then(function (file) {
                            var docMetadata = new _ado_entities_documento__WEBPACK_IMPORTED_MODULE_5__["Documento"]();
                            docMetadata.descripcion = doc.descripcion;
                            _this.dirService.subirArchAnalisis(file, analisis.id, docMetadata);
                        });
                    });
                }
                _this.storageService.guardarAnalisisDesviacion(resp);
                _this.manejarRespuestaSync(analisis, indice, resp);
            })
                .catch(function (err) {
                analisis['sync'] = false;
            });
        }
        else {
            this.anDesvService.update(analisis)
                .then(function (resp) {
                // Actualiza o crea los documentos del analisis de desviacion realizado
                if (documentosList != null) {
                    documentosList.forEach(function (arch) {
                        if (arch.documentoId == null) {
                            _com_utils_util__WEBPACK_IMPORTED_MODULE_7__["Util"].dataURLtoFile(arch.url, arch.alias + '.' + arch.ext)
                                .then(function (file) {
                                var docMetadata = new _ado_entities_documento__WEBPACK_IMPORTED_MODULE_5__["Documento"]();
                                docMetadata.descripcion = arch.descripcion;
                                _this.dirService.subirArchAnalisis(file, analisis.id, docMetadata);
                            });
                        }
                        else {
                            var docUpdate = new _ado_entities_documento__WEBPACK_IMPORTED_MODULE_5__["Documento"]();
                            docUpdate.id = arch.documentoId;
                            docUpdate.nombre = arch.alias + '.' + arch.ext;
                            docUpdate.descripcion = arch.descripcion;
                            _this.dirService.actualizarArchAnalisis(docUpdate);
                        }
                    });
                }
                // Solicita eliminar los documentos marcados para eliminacion permanente.
                if (documentosEliminarList != null) {
                    documentosEliminarList.forEach(function (arch) {
                        _this.dirService.eliminarArchAnalisis(arch.documentoId);
                    });
                }
                _this.storageService.guardarAnalisisDesviacion(resp);
                _this.manejarRespuestaSync(analisis, indice, resp);
            })
                .catch(function (err) {
                analisis['sync'] = false;
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onEvent'),
        __metadata("design:type", Object)
    ], AnalisisDesviacionesSyncComponent.prototype, "onEvent", void 0);
    AnalisisDesviacionesSyncComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-analisisDesviacionesSync',
            template: __webpack_require__(/*! ./analisis-desviaciones-sync.component.html */ "./src/app/modulos/sec/components/analisis-desviaciones-sync/analisis-desviaciones-sync.component.html"),
            providers: [_services_analisis_desviacion_service__WEBPACK_IMPORTED_MODULE_4__["AnalisisDesviacionService"]],
            styles: [__webpack_require__(/*! ./analisis-desviaciones-sync.component.scss */ "./src/app/modulos/sec/components/analisis-desviaciones-sync/analisis-desviaciones-sync.component.scss")]
        }),
        __metadata("design:paramtypes", [_com_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_1__["MensajeUsuarioService"],
            _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_2__["DirectorioService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _services_analisis_desviacion_service__WEBPACK_IMPORTED_MODULE_4__["AnalisisDesviacionService"]])
    ], AnalisisDesviacionesSyncComponent);
    return AnalisisDesviacionesSyncComponent;
}());



/***/ }),

/***/ "./src/app/modulos/sec/components/formulario-tareas/formulario-tareas.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/sec/components/formulario-tareas/formulario-tareas.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card>\n    <ion-card-content>\n        <div *ngFor=\"let tarea of tareasList; let i = index\" [id]=\"'taritem_' + i\" class=\"tarea-content\">\n            <p style=\"margin-bottom: 10px;\">\n                <ion-button slot=\"end\" (click)=\"cargarTarea(tarea, i)\" color=\"success\" fill=\"outline\" size=\"small\" *ngIf=\"readOnly != true && tarea.estado == 'NUEVO'\">\n                    <ion-icon name=\"create\"></ion-icon>\n                    Modificar\n                </ion-button>\n                <ion-button slot=\"end\" (click)=\"eliminarTarea(tarea, i)\" color=\"medium\" style=\"float: right;\" fill=\"clear\" size=\"small\" *ngIf=\"readOnly != true && tarea.estado == 'NUEVO'\">\n                    <ion-icon name=\"close\"></ion-icon>\n                </ion-button>\n            </p>\n            <ion-badge [ngClass]=\"{\n                'nueva':tarea.estado == 'NUEVO', \n                'realizada':tarea.estado == 'REALIZADA', \n                'finalizada':tarea.estado == 'FINALIZADA'\n              }\">{{tarea.estado}}</ion-badge>\n            <h2>{{tarea?.nombre}}</h2>\n            <p>Descripción: {{tarea?.descripcion}}</p>\n            <p>Tipo de acción: {{tarea?.tipoAccion}}</p>\n            <p>Fecha: {{tarea?.fechaProyectada | date: 'dd/MM/yyyy'}}</p>\n            <p>Ubicación: {{tarea.areaResponsable?.nombre}}</p>\n        </div>\n    </ion-card-content>\n</ion-card>\n\n<ion-card id=\"form-tareas\" *ngIf=\"readOnly != true\">\n    <ion-card-content>\n        <ion-item>\n            <ion-label position=\"stacked\">Actividad*</ion-label>\n            <ion-input [(ngModel)]=\"nombre\" maxlength=\"254\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">Descripcion</ion-label>\n            <ion-textarea [(ngModel)]=\"descripcion\" maxlength=\"1022\"></ion-textarea>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">Tipo acción*</ion-label>\n            <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"tipoAccion\">\n                <ion-select-option value=\"MEJORAMIENTO\">Mejoramiento</ion-select-option>\n                <ion-select-option value=\"PREVENTIVO\">Preventiva</ion-select-option>\n                <ion-select-option value=\"CORRECTIVO\">Correctiva</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">Fecha proyectada*</ion-label>\n            <ion-datetime display-format=\"DD/MM/YYYY\" picker-format=\"YYYY MMMM DD\" [(ngModel)]=\"fechaProyectada\"></ion-datetime>\n        </ion-item>\n\n        <sm-areaSelector *ngIf=\"!esProgramada\" [(ngModel)]=\"areaResp\" [disabled]=\"guardando == true\" appendTo=\"ion-modal\"></sm-areaSelector>\n        <!-- <ion-item>\n            <ion-label position=\"stacked\">Area responsable*</ion-label>\n\n            <div *ngIf=\"loading == true\">\n                <ion-spinner slot=\"end\" name=\"dots\" color=\"primary\"></ion-spinner>\n            </div>\n            <div *ngIf=\"areasCargadas == false\">\n                <p style=\"color:#888;padding:25px\">\n                    No fue posible cargar el listado\n                    <a *ngIf=\"areasCargadas == false\" (click)=\"cargarAreas()\">Reintentar</a>\n                </p>\n            </div>\n\n            <ion-select *ngIf=\"areasCargadas == true\" okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"areaResp\">\n                <ion-select-option *ngFor=\"let area of areasList\" [value]=\"area\">{{area.nombre}}</ion-select-option>\n            </ion-select>\n        </ion-item> -->\n        <ion-button *ngIf=\"idxTareaEditar < 0\" expand=\"full\" (click)=\"adicionarTarea()\">Adicionar actividad</ion-button>\n        <ion-button *ngIf=\"idxTareaEditar >= 0\" (click)=\"modificarTarea()\" color=\"success\">\n            <ion-icon name=\"create\"></ion-icon>\n            Guardar\n        </ion-button>\n        <ion-button *ngIf=\"idxTareaEditar >= 0\" (click)=\"cancelarEdicion()\" color=\"light\">Cancelar</ion-button>\n    </ion-card-content>\n</ion-card>"

/***/ }),

/***/ "./src/app/modulos/sec/components/formulario-tareas/formulario-tareas.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/sec/components/formulario-tareas/formulario-tareas.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tarea-content {\n  border-bottom: solid thin #ccc;\n  margin-bottom: 20px;\n  padding-bottom: 10px; }\n\nh2 {\n  color: #222;\n  margin-bottom: 10px; }\n\n.realizada {\n  background-color: #ffaa00; }\n\n.nueva {\n  background-color: #ff0000; }\n\n.finalizada {\n  background-color: #00AA00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0YWxrZXIvRGVza3RvcC8xbWlsbG9uL2Zyb250ZW5kL3NpZ2Vzc19hcHAvc3JjL2FwcC9tb2R1bG9zL3NlYy9jb21wb25lbnRzL2Zvcm11bGFyaW8tdGFyZWFzL2Zvcm11bGFyaW8tdGFyZWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL3NlYy9jb21wb25lbnRzL2Zvcm11bGFyaW8tdGFyZWFzL2Zvcm11bGFyaW8tdGFyZWFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhcmVhLWNvbnRlbnR7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmgye1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5yZWFsaXphZGF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWEwMDtcbn1cbi5udWV2YXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xufVxuLmZpbmFsaXphZGF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUEwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modulos/sec/components/formulario-tareas/formulario-tareas.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/sec/components/formulario-tareas/formulario-tareas.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormularioTareasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioTareasComponent", function() { return FormularioTareasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _entities_tarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../entities/tarea */ "./src/app/modulos/sec/entities/tarea.ts");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FormularioTareasComponent = /** @class */ (function () {
    function FormularioTareasComponent(alertController, toastController, offlineService, fb) {
        this.alertController = alertController;
        this.toastController = toastController;
        this.offlineService = offlineService;
        this.fb = fb;
        this.idxTareaEditar = -1;
        this.onEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = true;
        this.form = fb.group({
            'id': [null],
            'nombre': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'descripcion': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'tipoAccion': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'fechaProyectada': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'areaResponsable': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    FormularioTareasComponent.prototype.ngOnInit = function () {
        this.cargarAreas();
    };
    FormularioTareasComponent.prototype.cargarAreas = function () {
        var _this = this;
        this.loading = true;
        this.areasCargadas = null;
        this.offlineService.queryArea()
            .then(function (res) {
            _this.areasList = [];
            _this.construirListaAreas(_this.areasList, res['data']);
            _this.loading = false;
            _this.areasCargadas = true;
        })
            .catch(function (err) {
            _this.loading = false;
            _this.areasCargadas = false;
        });
    };
    FormularioTareasComponent.prototype.construirListaAreas = function (listado, areas) {
        for (var i = 0; i < areas.length; i++) {
            var area = areas[i];
            var areaObj = { id: area.id, nombre: area.nombre };
            listado.push(areaObj);
            if (area.areaList != null && area.areaList.length > 0) {
                this.construirListaAreas(listado, area.areaList);
            }
        }
    };
    FormularioTareasComponent.prototype.adicionarTarea = function () {
        if (this.tareasList == null) {
            this.tareasList = [];
        }
        if (this.validarTarea()) {
            var tarea = new _entities_tarea__WEBPACK_IMPORTED_MODULE_2__["Tarea"]();
            tarea.nombre = this.nombre;
            tarea.descripcion = this.descripcion;
            tarea.tipoAccion = this.tipoAccion;
            tarea.fechaProyectada = this.fechaProyectada;
            tarea.areaResponsable = this.areaResp;
            tarea.estado = 'NUEVO';
            this.tareasList.push(tarea);
            this.limpiarCampos();
            this.presentToast('Tarea ' + tarea.nombre + ' adicionada.');
            this.onEvent.emit({ type: 'onCreate', data: this.tareasList });
        }
    };
    FormularioTareasComponent.prototype.limpiarCampos = function () {
        this.nombre = null;
        this.descripcion = null;
        this.tipoAccion = null;
        this.fechaProyectada = null;
        this.areaResp = null;
    };
    FormularioTareasComponent.prototype.validarTarea = function () {
        if (this.nombre == null) {
            this.presentToast('Debe completar el campo actividad');
            return false;
        }
        if (this.tipoAccion == null) {
            this.presentToast('Debe completar el campo tipo de acción');
            return false;
        }
        if (this.fechaProyectada == null) {
            this.presentToast('Debe completar el campo fecha proyectada');
            return false;
        }
        if (this.areaResp == null) {
            this.presentToast('Debe completar el campo area responsable');
            return false;
        }
        return true;
    };
    FormularioTareasComponent.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormularioTareasComponent.prototype.cargarTarea = function (tarea, idx) {
        this.nombre = tarea.nombre;
        this.descripcion = tarea.descripcion;
        this.tipoAccion = tarea.tipoAccion;
        this.fechaProyectada = tarea.fechaProyectada;
        this.areaResp = tarea.areaResponsable;
        this.idxTareaEditar = idx;
        document.querySelector('#form-tareas').scrollIntoView({
            behavior: 'smooth'
        });
    };
    FormularioTareasComponent.prototype.modificarTarea = function () {
        var tarea = this.tareasList[this.idxTareaEditar];
        tarea.nombre = this.nombre;
        tarea.descripcion = this.descripcion;
        tarea.tipoAccion = this.tipoAccion;
        tarea.fechaProyectada = this.fechaProyectada;
        tarea.areaResponsable = this.areaResp;
        this.limpiarCampos();
        document.querySelector('#taritem_' + this.idxTareaEditar).scrollIntoView({
            behavior: 'smooth'
        });
        this.presentToast('Se han modificado los datos de la tarea ' + tarea.nombre);
        this.idxTareaEditar = -1;
        this.onEvent.emit({ type: 'onUpdate', data: this.tareasList });
    };
    FormularioTareasComponent.prototype.cancelarEdicion = function () {
        this.limpiarCampos();
        document.querySelector('#taritem_' + this.idxTareaEditar).scrollIntoView({
            behavior: 'smooth'
        });
        this.idxTareaEditar = -1;
    };
    FormularioTareasComponent.prototype.eliminarTarea = function (tarea, idx) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Eliminar actividad?',
                            message: 'La actividad \"' + tarea.nombre + '\" será eliminada. ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () {
                                        _this.tareasList.splice(idx, 1);
                                        _this.presentToast('La actividad \"' + tarea.nombre + '\" ha sido  eliminada');
                                        _this.onEvent.emit({ type: 'onRemove', data: _this.tareasList });
                                    }
                                }, {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'No'
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onEvent"),
        __metadata("design:type", Object)
    ], FormularioTareasComponent.prototype, "onEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tareasList'),
        __metadata("design:type", Array)
    ], FormularioTareasComponent.prototype, "tareasList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('readOnly'),
        __metadata("design:type", Boolean)
    ], FormularioTareasComponent.prototype, "readOnly", void 0);
    FormularioTareasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-formularioTareas',
            template: __webpack_require__(/*! ./formulario-tareas.component.html */ "./src/app/modulos/sec/components/formulario-tareas/formulario-tareas.component.html"),
            styles: [__webpack_require__(/*! ./formulario-tareas.component.scss */ "./src/app/modulos/sec/components/formulario-tareas/formulario-tareas.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _com_services_offline_service__WEBPACK_IMPORTED_MODULE_3__["OfflineService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormularioTareasComponent);
    return FormularioTareasComponent;
}());



/***/ }),

/***/ "./src/app/modulos/sec/components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modulos/sec/components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"anterior()\" [disabled]=\"guardando == true\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Investigación desviaciones</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ng-container *ngIf=\"loading == true\">\n        <ion-spinner class=\"main-spinner\" name=\"dots\" color=\"primary\"></ion-spinner>\n    </ng-container>\n\n    <div *ngIf=\"guardando == true\" style=\"width: 320px; margin:auto; text-align: center;\">\n        <h6>Guardando investigación, por favor espere...</h6>\n        <ion-spinner class=\"main-spinner\" name=\"dots\" color=\"primary\"></ion-spinner>\n    </div>\n\n    <div [style.display]=\"guardando != true ? 'block':'none'\">\n        <ng-container *ngIf=\"analisisNoEncontrado == false && loading == false\">\n            <ion-card>\n                <ion-card-title color=\"primary\">\n                    <h6 style=\"text-align: center\">Desviaciones</h6>\n                </ion-card-title>\n                <ion-card-content>\n                    <div *ngFor=\"let desv of desviacionesList\" class=\"desv-div\">\n                        <p>{{desv.hashId}}</p>\n                        <h2 style=\"color:#333\">{{desv.concepto}}</h2>\n                        <p>Area origen: {{desv.area?.nombre}}</p>\n                        <p>{{desv.aspectoCausante}}</p>\n                    </div>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"investigacion\">\n                <ion-segment-button value=\"investigacion\">\n                    <ion-label>Investigación</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"plan\">\n                    <ion-label> Plan de trabajo </ion-label>\n                </ion-segment-button>\n            </ion-segment>\n\n            <sm-formularioTareas (onEvent)=\"onEvent($event)\" [tareasList]=\"tareasList\" [style.display]=\"segments['plan'] ? 'block':'none'\"\n                [readOnly]=\"consultar\"></sm-formularioTareas>\n\n            <ion-slides #slider pager=\"true\" [style.display]=\"segments['investigacion'] ? 'block':'none'\">\n                <ion-slide id=\"causainmediata\">\n                    <ion-card class=\"inner-card\">\n                        <ion-card-title color=\"primary\">\n                            <h6>Causa inmediata</h6>\n                        </ion-card-title>\n                        <ion-card-content>\n                            <sm-tree [nodes]=\"sistemaCausaInmediata?.causaInmediataList\" field=\"causaInmediataList\" label=\"nombre\" [expanded]=\"true\">\n                            </sm-tree>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n                <ion-slide id=\"causaraiz\">\n                    <ion-card class=\"inner-card\">\n                        <ion-card-title color=\"primary\">\n                            <h6>Causa raíz</h6>\n                        </ion-card-title>\n                        <ion-card-content>\n                            <sm-tree [nodes]=\"sistemaCausaRaiz?.causaRaizList\" field=\"causaRaizList\" label=\"nombre\" [expanded]=\"true\"> </sm-tree>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n                <ion-slide id=\"causaadmin\">\n                    <ion-card class=\"inner-card\">\n                        <ion-card-title color=\"primary\">\n                            <h6>Causa administrativa</h6>\n                        </ion-card-title>\n                        <ion-card-content>\n                            <sm-tree [nodes]=\"sistemaCausaAdmin?.causaAdminList\" field=\"causaAdminList\" label=\"nombre\" [expanded]=\"true\"> </sm-tree>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n                <ion-slide id=\"participantes\" *sConfig=\"'FORM_PART_INVST'\">\n                    <ion-card class=\"inner-card\">\n                        <ion-card-title color=\"primary\">\n                            <h6>Participantes</h6>\n                        </ion-card-title>\n                        <ion-card-content>\n                            <ion-button expand=\"full\" (click)=\"adicionarParticipante()\">Adicionar participante</ion-button>\n                            <ion-card *ngFor=\"let part of participantes; let i = index\" class=\"inner-card\">\n                                <ion-button fill=\"clear\" slot=\"end\" (click)=\"eliminarParticipante(part, i)\" color=\"medium\">\n                                    <ion-icon name=\"close\"></ion-icon>\n                                </ion-button>\n                                <ion-card-content>\n                                    <ion-item>\n                                        <ion-label position=\"stacked\">Nombres y apellidos</ion-label>\n                                        <ion-input [(ngModel)]=\"part.nombresApellidos\"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-label position=\"stacked\">Cargo</ion-label>\n                                        <ion-input [(ngModel)]=\"part.cargo\"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-label position=\"stacked\">Tipo identificación</ion-label>\n                                        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"part.tipoIdentificacion\">\n                                            <ion-select-option value=\"Cedula de ciudadanía\">Cedula de ciudadanía</ion-select-option>\n                                            <ion-select-option value=\"Cédula de extranjería\">Cédula de extranjería</ion-select-option>\n                                            <ion-select-option value=\"Tarjeta de identidad\">Tarjeta de identidad</ion-select-option>\n                                            <ion-select-option value=\"Pasaporte\">Pasaporte</ion-select-option>\n                                        </ion-select>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-label position=\"stacked\">Número identificación</ion-label>\n                                        <ion-input [(ngModel)]=\"part.numeroIdentificacion\"></ion-input>\n                                    </ion-item>\n                                </ion-card-content>\n                            </ion-card>\n                        </ion-card-content>\n                    </ion-card>\n\n                </ion-slide>\n                <ion-slide id=\"documentos\">\n                    <input type=\"file\" #fileChooser (change)=\"onFileSelect(fileChooser.files)\" style=\"display: none;\" />\n                    <ion-card class=\"inner-card\">\n                        <ion-card-title color=\"primary\">\n                            <h6>Documentos</h6>\n                        </ion-card-title>\n                        <ion-card-content>\n                            <ion-card *ngFor=\"let doc of documentosList; let i = index;\">\n                                <ion-card-content>\n                                    <ion-item>\n                                        <ion-icon name=\"images\" *ngIf=\"doc.ext == 'jpg' || doc.ext == 'jpeg' || doc.ext == 'png'\"></ion-icon>\n                                        <ion-icon name=\"document\" *ngIf=\"doc.ext != 'jpg' && doc.ext != 'jpeg' && doc.ext != 'png'\"></ion-icon>\n                                        <ion-button slot=\"end\" fill=\"clear\" (click)=\"visualizar(doc)\">\n                                            <ion-icon name=\"eye\"></ion-icon>\n                                        </ion-button>\n                                        <ion-button slot=\"end\" fill=\"clear\" (click)=\"removerDoc(doc, i)\" color=\"medium\">\n                                            <ion-icon name=\"close\"></ion-icon>\n                                        </ion-button>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-label position=\"stacked\">Nombre documento</ion-label>\n                                        <ion-input maxlength=\"98\" [(ngModel)]=\"doc.alias\"></ion-input>\n                                    </ion-item>\n                                    <ion-item>\n                                        <ion-label position=\"stacked\">Descripción</ion-label>\n                                        <ion-textarea maxlength=\"253\" [(ngModel)]=\"doc.descripcion\"></ion-textarea>\n                                    </ion-item>\n                                </ion-card-content>\n                            </ion-card>\n                            <ion-button expand=\"block\" (click)=\"openFileChooser()\">\n                                <ion-icon name=\"document\"></ion-icon>\n                            </ion-button>\n                            <ion-button expand=\"block\" (click)=\"getPicture()\">\n                                <ion-icon name=\"camera\"></ion-icon>\n                            </ion-button>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n                <ion-slide id=\"observaciones\">\n                    <ion-card class=\"inner-card\">\n                        <ion-card-title color=\"primary\">\n                            <h6>Comentarios</h6>\n                        </ion-card-title>\n                        <ion-card-content>\n                            <ion-textarea maxlength=\"510\" rows=\"11\" [(ngModel)]=\"observStr\" placeholder=\"Comentarios y/o recomendaciones de la investigación\"></ion-textarea>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>\n        </ng-container>\n\n        <div style=\"height: 150px;\"></div>\n\n    </div>\n    <ng-container *ngIf=\"analisisNoEncontrado == true && loading == false\">\n        No fue posible cargar el detalle de la investigación\n    </ng-container>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"!guardando && !loading && !consultar\">\n        <ion-fab-button (click)=\"guardarInvestigacion()\">\n            <ion-icon name=\"save\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/sec/components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modulos/sec/components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inner-card {\n  width: 100%; }\n\nh6 {\n  margin-bottom: 0px !important;\n  margin-top: 20px !important; }\n\n.desv-div {\n  margin-bottom: 20px;\n  border-bottom: solid thin #ccc;\n  padding-bottom: 10px;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0YWxrZXIvRGVza3RvcC8xbWlsbG9uL2Zyb250ZW5kL3NpZ2Vzc19hcHAvc3JjL2FwcC9tb2R1bG9zL3NlYy9jb21wb25lbnRzL2ludmVzdGlnYWNpb24tZGVzdmlhY2lvbmVzLmNvbXBvbmVudC50cy9pbnZlc3RpZ2FjaW9uLWRlc3ZpYWNpb25lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLDZCQUE2QjtFQUM3QiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3Mvc2VjL2NvbXBvbmVudHMvaW52ZXN0aWdhY2lvbi1kZXN2aWFjaW9uZXMuY29tcG9uZW50LnRzL2ludmVzdGlnYWNpb24tZGVzdmlhY2lvbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlubmVyLWNhcmR7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmg2e1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmRlc3YtZGl2e1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgdGhpbiAjY2NjO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/modulos/sec/components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modulos/sec/components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: InvestigacionDesviacionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigacionDesviacionesComponent", function() { return InvestigacionDesviacionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _com_utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../com/utils/util */ "./src/app/modulos/com/utils/util.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
/* harmony import */ var _entities_analisis_desviacion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../entities/analisis-desviacion */ "./src/app/modulos/sec/entities/analisis-desviacion.ts");
/* harmony import */ var _services_analisis_desviacion_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/analisis-desviacion.service */ "./src/app/modulos/sec/services/analisis-desviacion.service.ts");
/* harmony import */ var _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ado/services/directorio.service */ "./src/app/modulos/ado/services/directorio.service.ts");
/* harmony import */ var _ado_entities_documento__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ado/entities/documento */ "./src/app/modulos/ado/entities/documento.ts");
/* harmony import */ var _com_services_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../com/services/storage.service */ "./src/app/modulos/com/services/storage.service.ts");
/* harmony import */ var _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../com/entities/filter-query */ "./src/app/modulos/com/entities/filter-query.ts");
/* harmony import */ var _com_entities_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../com/entities/filter */ "./src/app/modulos/com/entities/filter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};















var InvestigacionDesviacionesComponent = /** @class */ (function () {
    function InvestigacionDesviacionesComponent(storageService, loadingController, alertController, dirService, anDesvService, msgService, camera, fileOpener, file, modalController, offlineService) {
        this.storageService = storageService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.dirService = dirService;
        this.anDesvService = anDesvService;
        this.msgService = msgService;
        this.camera = camera;
        this.fileOpener = fileOpener;
        this.file = file;
        this.modalController = modalController;
        this.offlineService = offlineService;
        this.options = {
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 960,
            targetHeight: 960,
        };
        this.segments = { 'investigacion': true, 'plan': false };
        this.loading = true;
    }
    InvestigacionDesviacionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalController.getTop()
            .then(function (data) {
            _this.consultar = data.componentProps.operacion == 'GET';
            _this.modificar = data.componentProps.operacion == 'PUT';
            _this.adicionar = data.componentProps.operacion == 'POST';
            if (_this.consultar == true || _this.modificar == true) {
                _this.consultarAnalisis(data.componentProps.valor.analisisId);
            }
            else {
                var completado_1 = {
                    completoCI: false,
                    completoCR: false,
                    completoCA: false,
                };
                _this.offlineService.querySistemaCausaInmediata()
                    .then(function (resp) {
                    _this.sistemaCausaInmediata = resp;
                    completado_1['completoCI'] = true;
                    if (_this.validarFinCarga(completado_1)) {
                        _this.analisisNoEncontrado = false;
                        _this.loading = false;
                    }
                })
                    .catch(function (err) {
                    _this.analisisNoEncontrado = true;
                    _this.loading = false;
                });
                _this.offlineService.querySistemaCausaRaiz()
                    .then(function (resp) {
                    _this.sistemaCausaRaiz = resp;
                    completado_1['completoCR'] = true;
                    if (_this.validarFinCarga(completado_1)) {
                        _this.analisisNoEncontrado = false;
                        _this.loading = false;
                    }
                })
                    .catch(function (err) {
                    _this.analisisNoEncontrado = true;
                    _this.loading = false;
                });
                _this.offlineService.querySistemaCausaAdmin()
                    .then(function (resp) {
                    _this.sistemaCausaAdmin = resp;
                    completado_1['completoCA'] = true;
                    if (_this.validarFinCarga(completado_1)) {
                        _this.analisisNoEncontrado = false;
                        _this.loading = false;
                    }
                })
                    .catch(function (err) {
                    _this.analisisNoEncontrado = true;
                    _this.loading = false;
                });
                _this.desviacionesList = data.componentProps.valor;
            }
        });
    };
    InvestigacionDesviacionesComponent.prototype.consultarAnalisis = function (analisisId) {
        var _this = this;
        this.analisisId = analisisId;
        var fq = new _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_13__["FilterQuery"]();
        fq.filterList = [{ criteria: _com_entities_filter__WEBPACK_IMPORTED_MODULE_14__["Criteria"].EQUALS, field: 'id', value1: analisisId }];
        this.anDesvService.findByFilter(fq)
            .then(function (servResp) {
            if (servResp['data'].length > 0) {
                _this.storageService.guardarAnalisisDesviacion(servResp['data'][0]);
                _this.cargarDatos(servResp['data'][0]);
            }
            else {
                _this.analisisNoEncontrado = true;
            }
        }).catch(function (err) {
            _this.storageService.getAnalisisDesviacion(analisisId)
                .then(function (resp) {
                if (resp.data.length > 0) {
                    _this.cargarDatos(resp.data[0]);
                }
                else {
                    _this.analisisNoEncontrado = true;
                    _this.loading = false;
                }
            })
                .catch(function (err) {
                _this.analisisNoEncontrado = true;
                _this.loading = false;
            });
        });
    };
    InvestigacionDesviacionesComponent.prototype.validarFinCarga = function (completado) {
        var finalizado = true;
        for (var key in completado) {
            finalizado = finalizado && completado[key];
        }
        return finalizado;
    };
    InvestigacionDesviacionesComponent.prototype.cargarDatos = function (anlisisParam) {
        var _this = this;
        var completado = {
            completoCI: false,
            completoCR: false,
            completoCA: false,
        };
        var analisis = anlisisParam;
        this.desviacionesList = analisis.desviacionesList;
        this.observStr = analisis.observacion;
        this.offlineService.querySistemaCausaInmediata()
            .then(function (resp) {
            _this.sistemaCausaInmediata = resp;
            _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].cargarSeleccionArbol('causaInmediataList', _this.sistemaCausaInmediata.causaInmediataList, analisis.causaInmediataList, 'id');
            completado['completoCI'] = true;
            if (_this.validarFinCarga(completado)) {
                _this.analisisNoEncontrado = false;
                _this.loading = false;
            }
        })
            .catch(function (err) {
            _this.analisisNoEncontrado = true;
            _this.loading = false;
        });
        this.offlineService.querySistemaCausaRaiz()
            .then(function (resp) {
            _this.sistemaCausaRaiz = resp;
            _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].cargarSeleccionArbol('causaRaizList', _this.sistemaCausaRaiz.causaRaizList, analisis.causaRaizList, 'id');
            completado['completoCR'] = true;
            if (_this.validarFinCarga(completado)) {
                _this.analisisNoEncontrado = false;
                _this.loading = false;
            }
        })
            .catch(function (err) {
            _this.analisisNoEncontrado = true;
            _this.loading = false;
        });
        this.offlineService.querySistemaCausaAdmin()
            .then(function (resp) {
            _this.sistemaCausaAdmin = resp;
            _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].cargarSeleccionArbol('causaAdminList', _this.sistemaCausaAdmin.causaAdminList, analisis.causasAdminList, 'id');
            completado['completoCA'] = true;
            if (_this.validarFinCarga(completado)) {
                _this.analisisNoEncontrado = false;
                _this.loading = false;
            }
        })
            .catch(function (err) {
            _this.analisisNoEncontrado = true;
            _this.loading = false;
        });
        this.participantes = JSON.parse(analisis.participantes);
        this.documentosList = [];
        if (analisis.documentosList != null) {
            for (var _i = 0, _a = analisis.documentosList; _i < _a.length; _i++) {
                var doc = _a[_i];
                var arch = {
                    alias: doc.nombre.split('.')[0],
                    nombre: doc.nombre,
                    fechaCreacion: new Date(),
                    ext: _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getExtension(doc.nombre),
                    descripcion: doc.descripcion,
                    documentoId: doc.id,
                    url: null
                };
                this.documentosList.push(arch);
            }
        }
        this.tareasList = analisis.tareaDesviacionList;
    };
    InvestigacionDesviacionesComponent.prototype.anterior = function () {
        this.presentAlertaSalir();
    };
    InvestigacionDesviacionesComponent.prototype.presentAlertaSalir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Desea salir?',
                            message: 'La investigación no ha sido guardada, los datos serán descartados. ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () {
                                        _this.modalController.dismiss();
                                    }
                                }, {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'No'
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InvestigacionDesviacionesComponent.prototype.adicionarParticipante = function () {
        var part = { cargo: '', nombresApellidos: '', numeroIdentificacion: null, tipoIdentificacion: '' };
        if (this.participantes == null) {
            this.participantes = [];
        }
        this.participantes.unshift(part);
    };
    InvestigacionDesviacionesComponent.prototype.eliminarParticipante = function (part, idx) {
        this.participantes.splice(idx, 1);
    };
    /* ********************** DOCUMENTOS ****************************** */
    InvestigacionDesviacionesComponent.prototype.openFileChooser = function () {
        this.fileChooser.nativeElement.click();
    };
    InvestigacionDesviacionesComponent.prototype.onFileSelect = function (file) {
        var _this = this;
        _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].readBlobFile(file.item(0)).then(function (blob) {
            var f = _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].blobToFile(blob, file.item(0).name);
            _this.guardarArchivoLocal(f, f.name);
        });
    };
    InvestigacionDesviacionesComponent.prototype.getPicture = function () {
        var _this = this;
        this.camera.getPicture(this.options)
            .then(function (imageData) {
            var pathFile = imageData;
            var lastIndex = pathFile.lastIndexOf("/");
            var fileName = pathFile.substring(lastIndex + 1, pathFile.length);
            var url = window.Ionic.WebView.convertFileSrc(imageData);
            _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].dataURLtoFile(url, fileName).then(function (file) { return _this.guardarArchivoLocal(file, fileName); });
        });
    };
    InvestigacionDesviacionesComponent.prototype.guardarArchivoLocal = function (fileParam, fileName) {
        var _this = this;
        var dirPath = this.file.dataDirectory;
        var nombre = (new Date().getTime() + '_' + fileName);
        this.file.writeFile(dirPath, nombre, fileParam, { replace: true })
            .then(function (fileEntry) {
            var fe = fileEntry;
            var dir = {
                alias: fileName.split('.')[0],
                nombre: nombre,
                fechaCreacion: new Date(),
                ext: _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getExtension(fileName),
                url: window.Ionic.WebView.convertFileSrc(fe.nativeURL)
            };
            if (_this.documentosList == null) {
                _this.documentosList = [];
            }
            _this.documentosList.push(dir);
        });
    };
    InvestigacionDesviacionesComponent.prototype.visualizar = function (arch) {
        var _this = this;
        var filePath = this.file.dataDirectory;
        this.file.checkFile(filePath, arch.nombre)
            .then(function (exist) {
            return _this.file.resolveDirectoryUrl(filePath);
        })
            .then(function (dirEntry) {
            return _this.file.getFile(dirEntry, arch.nombre, null);
        })
            .then(function (fileEntry) {
            return fileEntry.file(function (fp) { return _this.openFile(fileEntry, fp.type); });
        })
            .catch(function (err) {
            if (arch.documentoId != null) {
                _this.downloadFile(arch);
            }
            else {
                _this.msgService.showMessage({
                    tipoMensaje: 'warn', mensaje: 'Archivo no encontrado',
                    detalle: "No se ha encontrado el archivo " + arch.alias
                });
            }
        });
    };
    InvestigacionDesviacionesComponent.prototype.downloadFile = function (arch) {
        var _this = this;
        var workingPath = this.file.dataDirectory;
        var loading = this.showLoading('Descargando archivo...');
        this.dirService.descargarArchAnalisis(arch.documentoId)
            .then(function (resp) {
            var blob = new Blob([resp]);
            return _this.file.writeFile(workingPath, arch.nombre, blob, { replace: true });
        })
            .then(function (fileEntry) {
            return fileEntry.file(function (file) { return loading
                .then(function (loadPop) {
                loadPop.dismiss();
                _this.openFile(fileEntry, file.type);
            }); });
        })
            .catch(function (err) {
            loading.then(function (loadPop) { return loadPop.dismiss(); });
        });
    };
    InvestigacionDesviacionesComponent.prototype.showLoading = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg,
                            translucent: true,
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, loading];
                }
            });
        });
    };
    InvestigacionDesviacionesComponent.prototype.openFile = function (fileEntry, type) {
        var _this = this;
        this.fileOpener.open(fileEntry.toURL(), type).catch(function (err) { return _this.msgService.showMessage({
            tipoMensaje: 'info', mensaje: 'No ha sido posible visualizar el archivo',
            detalle: "No existe una aplicacion para abrir " + fileEntry.name + "."
        }); });
    };
    InvestigacionDesviacionesComponent.prototype.removerDoc = function (arch, idx) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Retirar documento?',
                            message: 'El documento \"' + arch.alias + '\" será retirado. ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () {
                                        _this.documentosList.splice(idx, 1);
                                        if (arch.documentoId != null) {
                                            if (_this.documentosEliminarList == null) {
                                                _this.documentosEliminarList = [];
                                            }
                                            _this.documentosEliminarList.push(arch);
                                        }
                                        _this.file.removeFile(_this.file.dataDirectory, arch.nombre);
                                    }
                                }, {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'No'
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /* ******************* PERSISTENCIA ******************** */
    InvestigacionDesviacionesComponent.prototype.guardarInvestigacion = function () {
        var _this = this;
        var causaRaizList = [];
        _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getSeleccionArbol('causaRaizList', this.sistemaCausaRaiz.causaRaizList, causaRaizList);
        var causaInmediataList = [];
        _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getSeleccionArbol('causaInmediataList', this.sistemaCausaInmediata.causaInmediataList, causaInmediataList);
        var causaAdminList = [];
        _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getSeleccionArbol('causaAdminList', this.sistemaCausaAdmin.causaAdminList, causaAdminList);
        var analisis = new _entities_analisis_desviacion__WEBPACK_IMPORTED_MODULE_8__["AnalisisDesviacion"]();
        analisis.id = this.analisisId;
        analisis.causaInmediataList = causaInmediataList;
        analisis.causaRaizList = causaRaizList;
        analisis.causasAdminList = causaAdminList;
        analisis.desviacionesList = this.desviacionesList;
        analisis.observacion = this.observStr;
        analisis.participantes = JSON.stringify(this.participantes);
        analisis.tareaDesviacionList = this.tareasList;
        this.guardando = true;
        this.persistirInvestigacion(analisis)
            .then(function (resp) {
            _this.guardando = false;
            _this.msgService.showMessage({
                tipoMensaje: 'success',
                mensaje: 'Investigación realizada',
                detalle: 'Se ha realizado correctamente la investigación.'
            });
            _this.modalController.dismiss({
                analisisDesviacion: resp,
                desviaciones: _this.desviacionesList,
                offline: _this.offlineService.getOfflineMode()
            });
        })
            .catch(function (err) {
            _this.guardando = false;
        });
    };
    InvestigacionDesviacionesComponent.prototype.persistirInvestigacion = function (analisis) {
        var _this = this;
        if (this.offlineService.getOfflineMode()) {
            return new Promise(function (resolve, reject) {
                analisis['imagenes'] = _this.documentosList;
                analisis['imagenes_eliminar'] = _this.documentosEliminarList;
                if (analisis.fechaElaboracion == null)
                    analisis.fechaElaboracion = new Date();
                if (analisis['hash'] == null)
                    analisis['hash'] = analisis.fechaElaboracion.toISOString();
                _this.storageService.guardarAnalisisSync(analisis)
                    .then(function () {
                    resolve(analisis);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                if (analisis.id == null) {
                    _this.anDesvService.create(analisis)
                        .then(function (resp) {
                        analisis.id = resp.id;
                        if (_this.documentosList != null) {
                            _this.documentosList.forEach(function (doc) {
                                _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].dataURLtoFile(doc.url, doc.alias + '.' + doc.ext)
                                    .then(function (file) {
                                    var docMetadata = new _ado_entities_documento__WEBPACK_IMPORTED_MODULE_11__["Documento"]();
                                    docMetadata.descripcion = doc.descripcion;
                                    _this.dirService.subirArchAnalisis(file, analisis.id, docMetadata);
                                });
                            });
                        }
                        resolve(resp);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
                else {
                    _this.anDesvService.update(analisis)
                        .then(function (resp) {
                        // Actualiza o crea los documentos del analisis de desviacion realizado
                        if (_this.documentosList != null) {
                            _this.documentosList.forEach(function (arch) {
                                if (arch.documentoId == null) {
                                    _com_utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].dataURLtoFile(arch.url, arch.alias + '.' + arch.ext)
                                        .then(function (file) {
                                        var docMetadata = new _ado_entities_documento__WEBPACK_IMPORTED_MODULE_11__["Documento"]();
                                        docMetadata.descripcion = arch.descripcion;
                                        _this.dirService.subirArchAnalisis(file, analisis.id, docMetadata);
                                    });
                                }
                                else {
                                    var docUpdate = new _ado_entities_documento__WEBPACK_IMPORTED_MODULE_11__["Documento"]();
                                    docUpdate.id = arch.documentoId;
                                    docUpdate.nombre = arch.alias + '.' + arch.ext;
                                    docUpdate.descripcion = arch.descripcion;
                                    _this.dirService.actualizarArchAnalisis(docUpdate);
                                }
                            });
                        }
                        // Solicita eliminar los documentos marcados para eliminacion permanente.
                        if (_this.documentosEliminarList != null) {
                            _this.documentosEliminarList.forEach(function (arch) {
                                _this.dirService.eliminarArchAnalisis(arch.documentoId);
                            });
                        }
                        resolve(resp);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
            });
        }
    };
    /******************************* */
    InvestigacionDesviacionesComponent.prototype.segmentChanged = function (event) {
        for (var seg in this.segments) {
            this.segments[seg] = false;
            if (event.detail.value == seg)
                this.segments[seg] = true;
        }
    };
    InvestigacionDesviacionesComponent.prototype.onEvent = function (event) {
        this.tareasList = event.data;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileChooser'),
        __metadata("design:type", HTMLInputElement)
    ], InvestigacionDesviacionesComponent.prototype, "fileChooser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slider'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InvestigacionDesviacionesComponent.prototype, "slider", void 0);
    InvestigacionDesviacionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-investigacionDesviaciones',
            template: __webpack_require__(/*! ./investigacion-desviaciones.component.html */ "./src/app/modulos/sec/components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component.html"),
            providers: [_ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"], _services_analisis_desviacion_service__WEBPACK_IMPORTED_MODULE_9__["AnalisisDesviacionService"]],
            styles: [__webpack_require__(/*! ./investigacion-desviaciones.component.scss */ "./src/app/modulos/sec/components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component.scss")]
        }),
        __metadata("design:paramtypes", [_com_services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_10__["DirectorioService"],
            _services_analisis_desviacion_service__WEBPACK_IMPORTED_MODULE_9__["AnalisisDesviacionService"],
            _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_7__["MensajeUsuarioService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__["OfflineService"]])
    ], InvestigacionDesviacionesComponent);
    return InvestigacionDesviacionesComponent;
}());



/***/ }),

/***/ "./src/app/modulos/sec/entities/analisis-desviacion.ts":
/*!*************************************************************!*\
  !*** ./src/app/modulos/sec/entities/analisis-desviacion.ts ***!
  \*************************************************************/
/*! exports provided: AnalisisDesviacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalisisDesviacion", function() { return AnalisisDesviacion; });
// import { AnalisisCosto } from './analisis-costo';
var AnalisisDesviacion = /** @class */ (function () {
    function AnalisisDesviacion() {
    }
    return AnalisisDesviacion;
}());



/***/ }),

/***/ "./src/app/modulos/sec/entities/tarea.ts":
/*!***********************************************!*\
  !*** ./src/app/modulos/sec/entities/tarea.ts ***!
  \***********************************************/
/*! exports provided: Tarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tarea", function() { return Tarea; });
// import { AnalisisDesviacion } from 'app/modulos/sec/entities/analisis-desviacion'
// import { Area } from 'app/modulos/empresa/entities/area'
// import { Usuario } from 'app/modulos/empresa/entities/usuario'
var Tarea = /** @class */ (function () {
    function Tarea() {
    }
    return Tarea;
}());



/***/ }),

/***/ "./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConsultaDesviacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaDesviacionesPageModule", function() { return ConsultaDesviacionesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_comun_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../com/comun.module */ "./src/app/modulos/com/comun.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consulta_desviaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consulta-desviaciones.page */ "./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.page.ts");
/* harmony import */ var _components_investigacion_desviaciones_component_ts_investigacion_desviaciones_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component */ "./src/app/modulos/sec/components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component.ts");
/* harmony import */ var _com_components_tree_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../com/components/tree/tree.component */ "./src/app/modulos/com/components/tree/tree.component.ts");
/* harmony import */ var _components_analisis_desviaciones_sync_analisis_desviaciones_sync_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/analisis-desviaciones-sync/analisis-desviaciones-sync.component */ "./src/app/modulos/sec/components/analisis-desviaciones-sync/analisis-desviaciones-sync.component.ts");
/* harmony import */ var _components_formulario_tareas_formulario_tareas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/formulario-tareas/formulario-tareas.component */ "./src/app/modulos/sec/components/formulario-tareas/formulario-tareas.component.ts");
/* harmony import */ var _com_components_area_selector_area_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../com/components/area-selector/area-selector.component */ "./src/app/modulos/com/components/area-selector/area-selector.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _consulta_desviaciones_page__WEBPACK_IMPORTED_MODULE_6__["ConsultaDesviacionesPage"]
    }
];
var ConsultaDesviacionesPageModule = /** @class */ (function () {
    function ConsultaDesviacionesPageModule() {
    }
    ConsultaDesviacionesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _com_comun_module__WEBPACK_IMPORTED_MODULE_4__["ComunModule"],
                _com_components_tree_tree_component__WEBPACK_IMPORTED_MODULE_8__["TreeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _com_components_area_selector_area_selector_component__WEBPACK_IMPORTED_MODULE_11__["AreaSelectorModule"]
            ],
            exports: [_com_comun_module__WEBPACK_IMPORTED_MODULE_4__["ComunModule"]],
            providers: [],
            entryComponents: [_components_investigacion_desviaciones_component_ts_investigacion_desviaciones_component__WEBPACK_IMPORTED_MODULE_7__["InvestigacionDesviacionesComponent"]],
            declarations: [
                _consulta_desviaciones_page__WEBPACK_IMPORTED_MODULE_6__["ConsultaDesviacionesPage"],
                _components_investigacion_desviaciones_component_ts_investigacion_desviaciones_component__WEBPACK_IMPORTED_MODULE_7__["InvestigacionDesviacionesComponent"],
                _components_analisis_desviaciones_sync_analisis_desviaciones_sync_component__WEBPACK_IMPORTED_MODULE_9__["AnalisisDesviacionesSyncComponent"],
                _components_formulario_tareas_formulario_tareas_component__WEBPACK_IMPORTED_MODULE_10__["FormularioTareasComponent"]
            ]
        })
    ], ConsultaDesviacionesPageModule);
    return ConsultaDesviacionesPageModule;
}());



/***/ }),

/***/ "./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navegar('/app/sec/secInicio')\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Consulta desviaciones</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"desviaciones\">\n    <ion-segment-button value=\"desviaciones\">\n      <ion-label>Desviaciones</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"analisis\">\n      <ion-label>\n        Sincronizar\n        <ion-badge *ngIf=\"analisisCount > 0\" color=\"warning\">{{analisisCount}}</ion-badge>\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <sm-analisisDesviacionesSync [style.display]=\"segments['analisis'] ? 'block':'none'\" #analisisDesvSyncComp (onEvent)=\"onEvent($event)\"></sm-analisisDesviacionesSync>\n\n\n\n  <ion-slides #slider [style.display]=\"segments['desviaciones'] ? 'block':'none'\">\n\n    <ion-slide>\n      <div style=\"width: 100%;\">\n        <ion-item *ngIf=\"filtDisp == false\">\n          <ion-label color=\"medium\"> Filtros no disponibles en modo offline </ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"filtDisp == true\">\n          <ion-icon name=\"search\" slot=\"start\"></ion-icon>\n          <ion-label position=\"stacked\">\n            Modulo\n          </ion-label>\n          <ion-select (ionChange)=\"filtrarModulo($event)\">\n            <ion-select-option [value]=\"null\">Todos</ion-select-option>\n            <ion-select-option value=\"Reporte A/I\">Reporte A/I</ion-select-option>\n            <ion-select-option value=\"Inspecciones\">Inspecciones</ion-select-option>\n            <ion-select-option value=\"Observaciones\">Observaciones</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"filtDisp == true\">\n          <ion-icon name=\"search\" slot=\"start\"></ion-icon>\n          <ion-label position=\"stacked\">\n            Investigado\n          </ion-label>\n          <ion-select (ionChange)=\"filtrarInvestigado($event)\">\n            <ion-select-option [value]=\"null\">Todos</ion-select-option>\n            <ion-select-option [value]=\"true\">Si</ion-select-option>\n            <ion-select-option [value]=\"false\">No</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item *ngIf=\"filtDisp == true\">\n          <ion-icon name=\"search\" slot=\"start\"></ion-icon>\n          <ion-label position=\"stacked\">\n            Código\n          </ion-label>\n          <ion-input (ionChange)=\"filtrarCodigo($event)\" clear-input=\"true\" debounce=\"500\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"filtDisp == true\">\n          <ion-icon name=\"search\" slot=\"start\"></ion-icon>\n          <ion-label position=\"stacked\">\n            Concepto\n          </ion-label>\n          <ion-input (ionChange)=\"filtrarConcepto($event)\" clear-input=\"true\" debounce=\"500\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"filtDisp == true\">\n          <ion-icon name=\"search\" slot=\"start\"></ion-icon>\n          <ion-label position=\"stacked\">\n            Ubicación origen\n          </ion-label>\n          <ion-input (ionChange)=\"filtrarArea($event)\" clear-input=\"true\" debounce=\"500\"></ion-input>\n        </ion-item>\n\n        <ion-item *ngIf=\"filtDisp == true\">\n          <ion-icon name=\"search\" slot=\"start\"></ion-icon>\n          <ion-label position=\"stacked\">\n            Aspecto causante\n          </ion-label>\n          <ion-input (ionChange)=\"filtrarAspecto($event)\" clear-input=\"true\" debounce=\"500\"></ion-input>\n        </ion-item>\n        <ion-spinner class=\"main-spinner\" name=\"dots\" *ngIf=\"loading == true\" color=\"primary\"></ion-spinner>\n\n\n        <ng-container *ngFor=\"let desv of desviacionesList; let idx = index;\">\n          <ion-card *ngIf=\"!desv.oculto\">\n            <ion-card-content>\n              <div>\n                <ion-item>\n                  <div>\n                    <ion-checkbox [(ngModel)]=\"desv.selected\" (ionChange)=\"toggleSelect($event, desv, idx)\" [disabled]=\"desv.analizado\" *ngIf=\"desv.analisisId == null\"></ion-checkbox>\n                  </div>\n                  <ng-container *sTienePermiso=\"['SEC_GET_ANADESV']\">\n                    <ion-button (click)=\"abrirAnalisis(desv, 'GET')\" *ngIf=\"desv.analisisId != null\" fill=\"clear\">\n                      <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n                    </ion-button>\n                  </ng-container>\n                  <ng-container *sTienePermiso=\"['SEC_PUT_ANADESV']\">\n                    <ion-button color=\"success\" (click)=\"abrirAnalisis(desv, 'PUT')\" *ngIf=\"desv.analisisId != null\" fill=\"clear\">\n                      <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                    </ion-button>\n                  </ng-container>\n                  <ion-button slot=\"end\" (click)=\"pinDesv(desv, idx)\" fill=\"clear\" color=\"medium\">\n                    <ion-icon slot=\"icon-only\" src=\"/assets/images/unpinned.svg\"></ion-icon>\n                  </ion-button>\n                </ion-item>\n                <p>{{desv.hashId}}</p>\n                <h2 style=\"color:#333\">{{desv.concepto}}</h2>\n                <p>Ubicación origen: {{desv.area?.nombre}}</p>\n                <p>{{desv.aspectoCausante}}</p>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </ng-container>\n\n      </div>\n    </ion-slide>\n\n\n\n    <ion-slide id=\"fijos\">\n      <div>\n        <ion-card *ngFor=\"let desv of desviacionesFavList; let idx = index;\">\n          <ion-card-content>\n            <div class=\"desv-div\">\n              <ion-item>\n                <div>\n                  <ion-checkbox [(ngModel)]=\"desv.selected\" (ionChange)=\"toggleSelect($event, desv, idx)\" [disabled]=\"desv.analizado\" *ngIf=\"desv.analisisId == null\"></ion-checkbox>\n                </div>\n                <ng-container *sTienePermiso=\"['SEC_GET_ANADESV']\">\n                  <ion-button (click)=\"abrirAnalisis(desv, 'GET')\" *ngIf=\"desv.analisisId != null\" fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n                  </ion-button>\n                </ng-container>\n                <ng-container *sTienePermiso=\"['SEC_PUT_ANADESV']\">\n                  <ion-button color=\"success\" (click)=\"abrirAnalisis(desv, 'PUT')\" *ngIf=\"desv.analisisId != null\" fill=\"clear\">\n                    <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                  </ion-button>\n                </ng-container>\n                <ion-button slot=\"end\" (click)=\"unpinDesv(desv, idx)\" fill=\"clear\">\n                  <ion-icon slot=\"icon-only\" src=\"/assets/images/pinned.svg\"></ion-icon>\n                </ion-button>\n              </ion-item>\n              <p>{{desv.hashId}}</p>\n              <h2 style=\"color:#333\">{{desv.concepto}}</h2>\n              <p>Area origen: {{desv.area?.nombre}}</p>\n              <p>{{desv.aspectoCausante}}</p>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n\n\n\n\n\n  <ng-container *sTienePermiso=\"['SEC_POST_ANADESV']\">\n    <ion-fab *ngIf=\"loading == false\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" [style.display]=\"segments['desviaciones'] ? 'block':'none'\">\n      <ion-fab-button (click)=\"iniciarAnalisis()\" [disabled]=\"desvListSelect == null || desvListSelect.length == 0\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </ng-container>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-none {\n  display: none; }\n\np, h2 {\n  margin-top: 7px;\n  margin-bottom: 7px;\n  text-align: left; }\n\n.inner-card {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0YWxrZXIvRGVza3RvcC8xbWlsbG9uL2Zyb250ZW5kL3NpZ2Vzc19hcHAvc3JjL2FwcC9tb2R1bG9zL3NlYy9wYWdlcy9jb25zdWx0YS1kZXN2aWFjaW9uZXMvY29uc3VsdGEtZGVzdmlhY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQTs7QUFHaEI7RUFDRyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3Mvc2VjL3BhZ2VzL2NvbnN1bHRhLWRlc3ZpYWNpb25lcy9jb25zdWx0YS1kZXN2aWFjaW9uZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktbm9uZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4gcCwgaDJ7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaW5uZXItY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ConsultaDesviacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaDesviacionesPage", function() { return ConsultaDesviacionesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../com/entities/filter-query */ "./src/app/modulos/com/entities/filter-query.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_investigacion_desviaciones_component_ts_investigacion_desviaciones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component */ "./src/app/modulos/sec/components/investigacion-desviaciones.component.ts/investigacion-desviaciones.component.ts");
/* harmony import */ var _components_analisis_desviaciones_sync_analisis_desviaciones_sync_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/analisis-desviaciones-sync/analisis-desviaciones-sync.component */ "./src/app/modulos/sec/components/analisis-desviaciones-sync/analisis-desviaciones-sync.component.ts");
/* harmony import */ var _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
/* harmony import */ var _com_entities_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../com/entities/filter */ "./src/app/modulos/com/entities/filter.ts");
/* harmony import */ var _com_services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../com/services/storage.service */ "./src/app/modulos/com/services/storage.service.ts");
/* harmony import */ var _services_analisis_desviacion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/analisis-desviacion.service */ "./src/app/modulos/sec/services/analisis-desviacion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var ConsultaDesviacionesPage = /** @class */ (function () {
    function ConsultaDesviacionesPage(analisisService, toastController, storageService, msgService, modalController, offlineService, router) {
        this.analisisService = analisisService;
        this.toastController = toastController;
        this.storageService = storageService;
        this.msgService = msgService;
        this.modalController = modalController;
        this.offlineService = offlineService;
        this.router = router;
        this.segments = { 'desviaciones': true, 'analisis': false };
        this.analisisCount = 0;
        this.loading = true;
    }
    ConsultaDesviacionesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.filtDisp = this.offlineService.getOfflineMode() != true;
        this.offlineService.toggleSubject
            .subscribe(function (isoffline) {
            _this.filtDisp = !isoffline;
        });
        this.storageService.getDesviacionesFav()
            .then(function (resp) { return _this.desviacionesFavList = resp['data']; });
    };
    ConsultaDesviacionesPage.prototype.toggleSelect = function (event, desv, idx) {
        desv['selected'] = event.detail.checked;
        if (this.desvListSelect == null) {
            this.desvListSelect = [];
        }
        if (desv['selected']) {
            this.desvListSelect.push(desv);
        }
        else {
            for (var i = 0; i < this.desvListSelect.length; i++) {
                var element = this.desvListSelect[i];
                if (desv.hashId == element.hashId) {
                    this.desvListSelect.splice(i, 1);
                    break;
                }
            }
        }
    };
    // doRefresh(event) {
    //   console.log(event);
    //   this.inicializar(this.analisisDesvSyncComp.analisisDesvList, event);
    // }
    ConsultaDesviacionesPage.prototype.inicializar = function (analisisSyncList, refreshEvent) {
        var _this = this;
        this.offlineService.queryDesviaciones()
            .then(function (resp) {
            var desvList = resp['data'];
            _this.desviacionesList = [];
            desvList.forEach(function (dto) {
                var desv = _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_3__["FilterQuery"].dtoToObject(dto);
                desv['selected'] = false;
                for (var _i = 0, analisisSyncList_1 = analisisSyncList; _i < analisisSyncList_1.length; _i++) { // Recorre los analisis por sincronizar
                    var anSync = analisisSyncList_1[_i];
                    for (var _a = 0, _b = anSync.desviacionesList; _a < _b.length; _a++) { // Recorre las desviaciones de cada analisis
                        var desvSync = _b[_a];
                        if (desvSync.hashId == desv.hashId) {
                            desv['analizado'] = true;
                            break;
                        }
                    }
                }
                _this.desviacionesList.push(desv);
            });
            _this.loading = false;
            if (refreshEvent != null)
                refreshEvent.target.complete();
        })
            .catch(function (err) {
            _this.loading = null;
            if (refreshEvent != null)
                refreshEvent.target.complete();
        });
    };
    ConsultaDesviacionesPage.prototype.onEvent = function (event) {
        var _this = this;
        if (event == null) {
            return;
        }
        if (event.type == 'onLoad') {
            this.inicializar(event.analisisList);
        }
        else if (event.type == 'onLocalRemove') {
            event.analisis.desviacionesList.forEach(function (desv) {
                var desvEnc = _this.buscarDesviacion(desv.hashId);
                if (desvEnc != null)
                    desvEnc['analizado'] = false;
            });
        }
        else if (event.type == 'onSync') {
            event.analisis.desviacionesList.forEach(function (desv) {
                var desvEnc = _this.buscarDesviacion(desv.hashId);
                if (desvEnc != null)
                    desvEnc.analisisId = event.analisis.id;
            });
        }
        this.analisisCount = event.count;
    };
    ConsultaDesviacionesPage.prototype.buscarDesviacion = function (hashId) {
        if (this.desviacionesList == null) {
            return null;
        }
        for (var i = 0; i < this.desviacionesList.length; i++) {
            if (hashId == this.desviacionesList[i].hashId) {
                return this.desviacionesList[i];
            }
        }
        if (this.desviacionesFavList == null) {
            return null;
        }
        for (var i = 0; i < this.desviacionesFavList.length; i++) {
            if (hashId == this.desviacionesFavList[i].hashId) {
                return this.desviacionesFavList[i];
            }
        }
    };
    ConsultaDesviacionesPage.prototype.navegar = function (url) {
        this.router.navigate([url]);
    };
    ConsultaDesviacionesPage.prototype.removerDuplicados = function (array, criteriaField) {
        var unique = {};
        array.forEach(function (element) {
            unique[element[criteriaField]] = element;
        });
        var newArray = [];
        for (var key in unique) {
            newArray.push(unique[key]);
        }
        return newArray;
    };
    ConsultaDesviacionesPage.prototype.iniciarAnalisis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var desvList, modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.desvListSelect.length == 0) {
                            this.msgService.showMessage({
                                tipoMensaje: 'warn',
                                mensaje: 'Desviación no seleccionada',
                                detalle: 'Debe seleccionar al menos una desviación para iniciar la investigación'
                            });
                            return [2 /*return*/];
                        }
                        desvList = this.removerDuplicados(this.desvListSelect, 'hashId');
                        return [4 /*yield*/, this.modalController.create({
                                component: _components_investigacion_desviaciones_component_ts_investigacion_desviaciones_component__WEBPACK_IMPORTED_MODULE_5__["InvestigacionDesviacionesComponent"],
                                componentProps: { valor: desvList, operacion: 'POST' },
                                cssClass: "modal-fullscreen"
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (resp) { return _this.onModalDismiss(resp.data); });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ConsultaDesviacionesPage.prototype.onModalDismiss = function (event) {
        if (event == null) {
            return;
        }
        var analisis = event.analisisDesviacion;
        var desviaciones = event.desviaciones;
        if (analisis != null) {
            if (event.offline == true) {
                this.analisisCount += 1;
                this.analisisDesvSyncComp.adicionarAnalisis(analisis);
            }
            for (var j = 0; j < desviaciones.length; j++) {
                var enviado = (analisis.id != null);
                // Elimina del listado actual la desviacion si analisis.id es diferente de null (eso indica que fue enviado el analisis al servidor)
                var desv = this.buscarDesviacion(desviaciones[j].hashId);
                if (desv == null) {
                    continue;
                }
                if (!enviado) {
                    desv['analizado'] = true;
                    desv['selected'] = false;
                }
                else {
                    desv.analisisId = analisis.id;
                }
            }
            this.desvListSelect = null;
        }
    };
    ConsultaDesviacionesPage.prototype.segmentChanged = function (event) {
        for (var seg in this.segments) {
            this.segments[seg] = false;
            if (event.detail.value == seg)
                this.segments[seg] = true;
        }
    };
    ConsultaDesviacionesPage.prototype.pinDesv = function (desv, idx) {
        var _this = this;
        desv['oculto'] = true;
        if (this.desviacionesFavList == null)
            this.desviacionesFavList = [];
        var repetido = false;
        for (var _i = 0, _a = this.desviacionesFavList; _i < _a.length; _i++) {
            var desvFav = _a[_i];
            if (desvFav.hashId == desv.hashId) {
                repetido = true;
                break;
            }
        }
        if (repetido == false) {
            this.desviacionesFavList.push(desv);
            this.storageService.setDesviacionFav([desv]);
            if (desv.analisisId != null) {
                this.analisisService.find(desv.analisisId)
                    .then(function (resp) {
                    _this.storageService.guardarAnalisisDesviacion(resp);
                });
            }
        }
        this.presentToast("La desviacion ha sido fijada (desliza a la izquierda para visualizar)");
    };
    ConsultaDesviacionesPage.prototype.unpinDesv = function (desv, idx) {
        this.storageService.borrarDesviacionFav(desv.hashId);
        desv['oculto'] = false;
        this.desviacionesFavList.splice(idx, 1);
        this.presentToast("La desviacion ha sido devuelta");
    };
    ConsultaDesviacionesPage.prototype.filtrarModulo = function (event) {
        this.filtModulo = event.detail.value;
        this.filtrar();
    };
    ConsultaDesviacionesPage.prototype.filtrarInvestigado = function (event) {
        this.filtInvest = event.detail.value;
        this.filtrar();
    };
    ConsultaDesviacionesPage.prototype.filtrarConcepto = function (event) {
        this.filtConcepto = event.detail.value;
        this.filtrar();
    };
    ConsultaDesviacionesPage.prototype.filtrarAspecto = function (event) {
        this.filtAspecto = event.detail.value;
        this.filtrar();
    };
    ConsultaDesviacionesPage.prototype.filtrarCodigo = function (event) {
        this.filtCodigo = event.detail.value;
        this.filtrar();
    };
    ConsultaDesviacionesPage.prototype.filtrarArea = function (event) {
        this.filtArea = event.detail.value;
        this.filtrar();
    };
    ConsultaDesviacionesPage.prototype.filtrar = function () {
        var _this = this;
        this.loading = true;
        var filterQuery = new _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_3__["FilterQuery"]();
        filterQuery.sortField = "modulo";
        filterQuery.sortOrder = 1;
        filterQuery.offset = 0;
        filterQuery.rows = 10;
        filterQuery.fieldList = ['hashId', 'modulo', 'aspectoCausante', 'concepto', 'area_nombre', 'analisisId'];
        filterQuery.filterList = [];
        if (this.filtModulo != null && this.filtModulo.length > 0) {
            filterQuery.filterList.push({
                criteria: _com_entities_filter__WEBPACK_IMPORTED_MODULE_8__["Criteria"].EQUALS,
                field: "modulo",
                value1: this.filtModulo
            });
        }
        if (this.filtInvest != null) {
            filterQuery.filterList.push({
                criteria: this.filtInvest ? _com_entities_filter__WEBPACK_IMPORTED_MODULE_8__["Criteria"].IS_NOT_NULL : _com_entities_filter__WEBPACK_IMPORTED_MODULE_8__["Criteria"].IS_NULL,
                field: "analisisId",
                value1: null
            });
        }
        if (this.filtAspecto != null && this.filtAspecto.length > 0) {
            filterQuery.filterList.push({
                criteria: _com_entities_filter__WEBPACK_IMPORTED_MODULE_8__["Criteria"].LIKE,
                field: "aspectoCausante",
                value1: '%' + this.filtAspecto + '%'
            });
        }
        if (this.filtConcepto != null && this.filtConcepto.length > 0) {
            filterQuery.filterList.push({
                criteria: _com_entities_filter__WEBPACK_IMPORTED_MODULE_8__["Criteria"].LIKE,
                field: "concepto",
                value1: '%' + this.filtConcepto + '%'
            });
        }
        if (this.filtCodigo != null && this.filtCodigo.length > 0) {
            filterQuery.filterList.push({
                criteria: _com_entities_filter__WEBPACK_IMPORTED_MODULE_8__["Criteria"].LIKE,
                field: "hashId",
                value1: '%' + this.filtCodigo + '%'
            });
        }
        if (this.filtArea != null && this.filtArea.length > 0) {
            filterQuery.filterList.push({
                criteria: _com_entities_filter__WEBPACK_IMPORTED_MODULE_8__["Criteria"].LIKE,
                field: "area.nombre",
                value1: '%' + this.filtArea + '%'
            });
        }
        this.offlineService.queryDesviaciones(filterQuery)
            .then(function (resp) {
            _this.desviacionesList = [];
            resp['data'].forEach(function (dto) {
                var desv = _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_3__["FilterQuery"].dtoToObject(dto);
                desv['selected'] = false;
                _this.desviacionesList.push(desv);
            });
            _this.loading = false;
            _this.cargarSeleccionados();
        })
            .catch(function (err) { return _this.loading = false; });
    };
    ConsultaDesviacionesPage.prototype.cargarSeleccionados = function () {
        for (var i = 0; i < this.desviacionesList.length; i++) {
            for (var j = 0; j < this.desvListSelect.length; j++) {
                if (this.desvListSelect[j].hashId == this.desviacionesList[i].hashId) {
                    this.desviacionesList[i]['selected'] = true;
                    break;
                }
            }
        }
    };
    ConsultaDesviacionesPage.prototype.abrirAnalisis = function (desviacion, operacion) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_investigacion_desviaciones_component_ts_investigacion_desviaciones_component__WEBPACK_IMPORTED_MODULE_5__["InvestigacionDesviacionesComponent"],
                            componentProps: { valor: desviacion, operacion: operacion },
                            cssClass: "modal-fullscreen"
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (resp) { return _this.onModalDismiss(resp.data); });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ConsultaDesviacionesPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 5000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('analisisDesvSyncComp'),
        __metadata("design:type", _components_analisis_desviaciones_sync_analisis_desviaciones_sync_component__WEBPACK_IMPORTED_MODULE_6__["AnalisisDesviacionesSyncComponent"])
    ], ConsultaDesviacionesPage.prototype, "analisisDesvSyncComp", void 0);
    ConsultaDesviacionesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-consultaDesviaciones',
            template: __webpack_require__(/*! ./consulta-desviaciones.page.html */ "./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.page.html"),
            providers: [_services_analisis_desviacion_service__WEBPACK_IMPORTED_MODULE_10__["AnalisisDesviacionService"]],
            styles: [__webpack_require__(/*! ./consulta-desviaciones.page.scss */ "./src/app/modulos/sec/pages/consulta-desviaciones/consulta-desviaciones.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_analisis_desviacion_service__WEBPACK_IMPORTED_MODULE_10__["AnalisisDesviacionService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _com_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"],
            _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_7__["MensajeUsuarioService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__["OfflineService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConsultaDesviacionesPage);
    return ConsultaDesviacionesPage;
}());



/***/ }),

/***/ "./src/app/modulos/sec/services/analisis-desviacion.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modulos/sec/services/analisis-desviacion.service.ts ***!
  \*********************************************************************/
/*! exports provided: AnalisisDesviacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalisisDesviacionService", function() { return AnalisisDesviacionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _com_services_service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../com/services/service-crud.service */ "./src/app/modulos/com/services/service-crud.service.ts");
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


var AnalisisDesviacionService = /** @class */ (function (_super) {
    __extends(AnalisisDesviacionService, _super);
    function AnalisisDesviacionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnalisisDesviacionService.prototype.findByTarea = function (tareaId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.httpInt.get(_this.end_point + 'tarea/' + tareaId)
                .subscribe(function (res) { return resolve(res); }, function (err) { return _this.manageError(err); });
        });
    };
    AnalisisDesviacionService.prototype.getClassName = function () {
        return "AnalisisDesviacionService";
    };
    AnalisisDesviacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AnalisisDesviacionService);
    return AnalisisDesviacionService;
}(_com_services_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["ServiceCRUD"]));



/***/ })

}]);
//# sourceMappingURL=modulos-sec-pages-consulta-desviaciones-consulta-desviaciones-module.js.map