(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-inp-pages-elaboracion-inspeccion-elaboracion-inspeccion-module"],{

/***/ "./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"anterior()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <ion-label *ngIf=\"esProgramada\">{{area?.nombre}}</ion-label>\n      <ion-select *ngIf=\"!esProgramada\" placeholder=\"Seleccione área\" [(ngModel)]=\"area\">\n        <ion-select-option *ngFor=\"let area of areasList\" [value]=\"area\">{{area.nombre}}</ion-select-option>\n      </ion-select>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"siguiente()\" *ngIf=\"!visibleGuardar\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>{{listaInspeccion?.nombre}}</ion-label>\n  </ion-item>\n  <ion-item *ngIf=\"listaInspeccion?.descripcion\">\n    <ion-note style=\"padding:10px;\">{{listaInspeccion?.descripcion}}</ion-note>\n  </ion-item>\n  <ion-card [ngClass]=\" (numeroPreguntaActual == -1) ? 'mostrar':'ocultar'\">\n    <ion-item>\n      <sm-formulario *ngIf=\"listaInspeccion?.formulario\" [ngClass]=\" (numeroPreguntaActual == -1) ? 'mostrar':'ocultar'\" #formulario\n        [formularioModel]=\"listaInspeccion?.formulario\"></sm-formulario>\n    </ion-item>\n  </ion-card>\n\n  <sm-preguntaInspeccion *ngIf=\"elementoSelect\" [ngClass]=\"(numeroPreguntaActual >= 0) ? 'mostrar':'ocultar'\" [elementoInspeccion]=\"elementoSelect\"\n    [opcionCalificacionList]=\"listaInspeccion.opcionCalificacionList\" [usarNivelRiesgo]=\"listaInspeccion.usarNivelRiesgo\" [usarTipoHallazgo]=\"listaInspeccion.usarTipoHallazgo\">\n  </sm-preguntaInspeccion>\n\n  <div style=\"height: 150px;\"></div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"guardarInspeccion()\">\n      <ion-icon name=\"save\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mostrar {\n  display: block; }\n\n.ocultar {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9EQVRBL2Rldi9zaWdlc3MvZnJvbnRlbmQvc2lnZXNzX2FwcC9zcmMvYXBwL21vZHVsb3MvaW5wL2NvbXBvbmVudHMvaW5zcGVjY2lvbi1mb3JtL2luc3BlY2Npb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL2lucC9jb21wb25lbnRzL2luc3BlY2Npb24tZm9ybS9pbnNwZWNjaW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9zdHJhcntcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5vY3VsdGFye1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InspeccionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspeccionFormComponent", function() { return InspeccionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_lista_inspeccion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/lista-inspeccion.service */ "./src/app/modulos/inp/services/lista-inspeccion.service.ts");
/* harmony import */ var _services_inspeccion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/inspeccion.service */ "./src/app/modulos/inp/services/inspeccion.service.ts");
/* harmony import */ var _entities_lista_inspeccion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities/lista-inspeccion */ "./src/app/modulos/inp/entities/lista-inspeccion.ts");
/* harmony import */ var _entities_inspeccion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/inspeccion */ "./src/app/modulos/inp/entities/inspeccion.ts");
/* harmony import */ var _com_components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../com/components/formulario/formulario.component */ "./src/app/modulos/com/components/formulario/formulario.component.ts");
/* harmony import */ var _com_entities_respuesta_campo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../com/entities/respuesta-campo */ "./src/app/modulos/com/entities/respuesta-campo.ts");
/* harmony import */ var _com_utils_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../com/utils/util */ "./src/app/modulos/com/utils/util.ts");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
/* harmony import */ var _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ado/services/directorio.service */ "./src/app/modulos/ado/services/directorio.service.ts");
/* harmony import */ var _com_services_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../com/services/storage.service */ "./src/app/modulos/com/services/storage.service.ts");
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













var InspeccionFormComponent = /** @class */ (function () {
    function InspeccionFormComponent(toastController, storageService, alertController, modalController, listaInspeccionService, inspeccionService, offlineService, msgService, dirService) {
        this.toastController = toastController;
        this.storageService = storageService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.listaInspeccionService = listaInspeccionService;
        this.inspeccionService = inspeccionService;
        this.offlineService = offlineService;
        this.msgService = msgService;
        this.dirService = dirService;
        this.numeroPreguntaActual = -1;
        this.indicePreguntas = [];
    }
    InspeccionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obj = this.modalController.getTop().then(function (data) {
            var entidad = data.componentProps.value;
            var listaPk = null;
            // Si la entidad recibida como parametro posee el campo area, indica que es una programacion, de lo contrario debe ser una lista
            _this.esProgramada = entidad.area != null;
            if (_this.esProgramada) {
                _this.programacion = entidad;
                listaPk = _this.programacion.listaInspeccion.listaInspeccionPK;
                _this.area = _this.programacion.area;
            }
            else {
                _this.offlineService.queryArea().then(function (resp) { return _this.areasList = resp['data']; });
                listaPk = entidad.listaInspeccionPK;
            }
            _this.offlineService.queryListaInspeccion(listaPk.id, listaPk.version).then(function (data) {
                _this.listaInspeccion = data['data'][0];
                _this.indexarElementos(_this.listaInspeccion.elementoInspeccionList, null);
            });
        });
    };
    InspeccionFormComponent.prototype.indexarElementos = function (list, padre) {
        var _this = this;
        list.forEach(function (element) {
            element.elementoInspeccionPadre = padre;
            if (element.elementoInspeccionList == null || element.elementoInspeccionList.length <= 0) {
                _this.indicePreguntas.push(element);
            }
            else {
                _this.indexarElementos(element.elementoInspeccionList, element);
            }
        });
    };
    InspeccionFormComponent.prototype.anterior = function () {
        this.numeroPreguntaActual -= 1;
        if (this.numeroPreguntaActual < -1) {
            this.numeroPreguntaActual = -1;
            this.presentAlertaSalir();
            return;
        }
        if (this.numeroPreguntaActual < this.indicePreguntas.length - 1 && this.numeroPreguntaActual >= 0) {
            this.visibleGuardar = false;
            this.asignarElemento();
        }
    };
    InspeccionFormComponent.prototype.presentAlertaSalir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Desea salir de la inspección?',
                            message: 'La inspección no ha sido guardada, los datos serán descartados. ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () {
                                        for (var i = 0; i < _this.indicePreguntas.length; i++) {
                                            var imgKey = _this.indicePreguntas[i].calificacion == null ? null : _this.indicePreguntas[i].calificacion['img_key'];
                                            if (imgKey != null)
                                                localStorage.removeItem(imgKey);
                                        }
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
    InspeccionFormComponent.prototype.siguiente = function () {
        if (this.numeroPreguntaActual == this.indicePreguntas.length - 1) {
            this.visibleGuardar = true;
            return;
        }
        this.numeroPreguntaActual += 1;
        this.asignarElemento();
    };
    InspeccionFormComponent.prototype.asignarElemento = function () {
        this.elementoSelect = this.indicePreguntas[this.numeroPreguntaActual];
        // if (this.elementoSelect.calificacion == null) {
        //   this.elementoSelect.calificacion = new Calificacion();
        //   this.elementoSelect.calificacion.elementoInspeccion = new ElementoInspeccion();
        //   this.elementoSelect.calificacion.elementoInspeccion.id = this.elementoSelect.id;
        //   this.elementoSelect.calificacion.tipoHallazgo = new TipoHallazgo();
        // }
    };
    InspeccionFormComponent.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            position: 'middle',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    InspeccionFormComponent.prototype.guardarInspeccion = function () {
        var _this = this;
        if (this.formulario.form.status == 'INVALID') {
            this.numeroPreguntaActual = -1;
            this.visibleGuardar = false;
            this.presentToast('Por favor diligencie los datos generales faltantes de la inspección');
            return;
        }
        if (!this.esProgramada && this.area == null) {
            this.presentToast('Por favor especifique el área de la inspección (campo ubicado en la parte superior azul)');
            return;
        }
        var calificacionList = [];
        for (var i = 0; i < this.indicePreguntas.length; i++) {
            var calf = this.indicePreguntas[i].calificacion;
            if (calf == null || calf.opcionCalificacion == null) {
                this.numeroPreguntaActual = i;
                this.elementoSelect = this.indicePreguntas[this.numeroPreguntaActual];
                this.visibleGuardar = this.numeroPreguntaActual == this.indicePreguntas.length - 1;
                this.presentToast('Por favor especifique la calificación de la pregunta \"' + this.elementoSelect.codigo + ' ' + this.elementoSelect.nombre + '\"');
                return;
            }
            if (calf.nivelRiesgo != null && (calf.recomendacion == null || calf.recomendacion.length <= 0)) {
                this.numeroPreguntaActual = i;
                this.elementoSelect = this.indicePreguntas[this.numeroPreguntaActual];
                this.visibleGuardar = this.numeroPreguntaActual == this.indicePreguntas.length - 1;
                this.presentToast('Por favor especifique la descripción del hallazgo según el nivel de riesgo establecido');
                return;
            }
            calificacionList.push(calf);
        }
        var inspeccion = new _entities_inspeccion__WEBPACK_IMPORTED_MODULE_5__["Inspeccion"]();
        inspeccion.calificacionList = calificacionList;
        inspeccion.respuestasCampoList = [];
        if (this.esProgramada) {
            inspeccion.programacion = this.programacion;
        }
        else {
            inspeccion.area = this.area;
            inspeccion.listaInspeccion = new _entities_lista_inspeccion__WEBPACK_IMPORTED_MODULE_4__["ListaInspeccion"]();
            inspeccion.listaInspeccion.listaInspeccionPK = this.listaInspeccion.listaInspeccionPK;
            inspeccion.listaInspeccion.nombre = this.listaInspeccion.nombre;
            inspeccion.listaInspeccion.codigo = this.listaInspeccion.codigo;
        }
        this.listaInspeccion.formulario.campoList.forEach(function (campo) {
            var respCampo = new _com_entities_respuesta_campo__WEBPACK_IMPORTED_MODULE_7__["RespuestaCampo"]();
            respCampo.campoId = campo.id;
            if (campo.tipo == 'timestamp' || campo.tipo == 'date') {
                respCampo.valor = new Date(_this.formulario.form.value[campo.nombre]);
            }
            else if (campo.tipo == 'multiple_select' && campo.respuestaCampo.valor != null) {
                respCampo.valor = _com_utils_util__WEBPACK_IMPORTED_MODULE_8__["Util"].arrayAString(';', campo.respuestaCampo.valor);
            }
            else {
                respCampo.valor = _this.formulario.form.value[campo.nombre];
            }
            inspeccion.respuestasCampoList.push(respCampo);
        });
        this.persistirInspeccion(inspeccion).then(function (data) { return _this.manageResponse(data); });
    };
    InspeccionFormComponent.prototype.persistirInspeccion = function (inspeccion) {
        var _this = this;
        if (this.offlineService.getOfflineMode()) {
            return new Promise(function (resolve, reject) {
                inspeccion.fechaRealizada = new Date();
                inspeccion['hash'] = inspeccion.fechaRealizada.toISOString();
                _this.storageService.guardarInspeccion(inspeccion)
                    .then(function () { return resolve(inspeccion); })
                    .catch(function (err) { return reject(err); });
            });
        }
        else {
            return this.inspeccionService.create(inspeccion).then(function (resp) {
                var inp = resp;
                var _loop_1 = function (i) {
                    var calf = inp.calificacionList[i];
                    var imgKey = inspeccion.calificacionList[i]['img_key'];
                    var url = localStorage.getItem(imgKey);
                    if (url != null) {
                        _com_utils_util__WEBPACK_IMPORTED_MODULE_8__["Util"].dataURLtoFile(url, 'img_' + i + '_inp_calf_' + calf.id + '.jpeg').then(function (file) { return _this.dirService.upload(file, null, 'INP', calf.id).then(function (imgResp) { return localStorage.removeItem(imgKey); }); });
                    }
                };
                for (var i = 0; i < inp.calificacionList.length; i++) {
                    _loop_1(i);
                }
            });
        }
    };
    InspeccionFormComponent.prototype.manageResponse = function (inspeccion) {
        var _this = this;
        this.modalController.dismiss(inspeccion).then(function (resp) { return _this.msgService.showMessage({
            tipoMensaje: 'success',
            mensaje: 'INSPECCIÓN REALIZADA',
            detalle: 'Se ha registrado correctamente la inspección'
        }); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formulario'),
        __metadata("design:type", _com_components_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_6__["FormularioComponent"])
    ], InspeccionFormComponent.prototype, "formulario", void 0);
    InspeccionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-inspeccionForm',
            template: __webpack_require__(/*! ./inspeccion-form.component.html */ "./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.html"),
            providers: [_services_inspeccion_service__WEBPACK_IMPORTED_MODULE_3__["InspeccionService"]],
            styles: [__webpack_require__(/*! ./inspeccion-form.component.scss */ "./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _com_services_storage_service__WEBPACK_IMPORTED_MODULE_12__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_lista_inspeccion_service__WEBPACK_IMPORTED_MODULE_2__["ListaInspeccionService"],
            _services_inspeccion_service__WEBPACK_IMPORTED_MODULE_3__["InspeccionService"],
            _com_services_offline_service__WEBPACK_IMPORTED_MODULE_9__["OfflineService"],
            _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_10__["MensajeUsuarioService"],
            _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_11__["DirectorioService"]])
    ], InspeccionFormComponent);
    return InspeccionFormComponent;
}());



/***/ }),

/***/ "./src/app/modulos/inp/components/inspeccion-no-programada/inspeccion-no-programada.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-no-programada/inspeccion-no-programada.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-spinner class=\"main-spinner\" name=\"dots\" *ngIf=\"loading == true\" color=\"primary\"></ion-spinner>\n\n<ion-card *ngFor=\"let lista of listasInspeccion; let i = index\">\n    <ion-card-header>\n        <ion-item>\n            <h6>{{lista.nombre}}</h6>\n            <ion-button fill=\"outline\" slot=\"end\" *sTienePermiso=\"['SEC_GET_SISTNR', 'INP_GET_LISTINP']\" (click)=\"seleccionarLista(lista)\">\n                Realizar\n            </ion-button>\n        </ion-item>\n        <ion-card-content>\n            <p>{{lista.codigo}}</p>\n            <p>{{lista.descripcion}}</p>\n        </ion-card-content>\n    </ion-card-header>\n</ion-card>"

/***/ }),

/***/ "./src/app/modulos/inp/components/inspeccion-no-programada/inspeccion-no-programada.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-no-programada/inspeccion-no-programada.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvaW5wL2NvbXBvbmVudHMvaW5zcGVjY2lvbi1uby1wcm9ncmFtYWRhL2luc3BlY2Npb24tbm8tcHJvZ3JhbWFkYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modulos/inp/components/inspeccion-no-programada/inspeccion-no-programada.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-no-programada/inspeccion-no-programada.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: InspeccionNoProgramadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspeccionNoProgramadaComponent", function() { return InspeccionNoProgramadaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InspeccionNoProgramadaComponent = /** @class */ (function () {
    function InspeccionNoProgramadaComponent(offlineService) {
        this.offlineService = offlineService;
        this.onListaSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loading = true;
    }
    InspeccionNoProgramadaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.offlineService.queryListasInspeccion()
            .then(function (resp) {
            _this.listasInspeccion = resp['data'];
            _this.loading = false;
        })
            .catch(function (err) { return _this.loading = null; });
    };
    InspeccionNoProgramadaComponent.prototype.seleccionarLista = function (lista) {
        this.onListaSelect.emit(lista);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onListaSelect"),
        __metadata("design:type", Object)
    ], InspeccionNoProgramadaComponent.prototype, "onListaSelect", void 0);
    InspeccionNoProgramadaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-inspeccionNoProgramada',
            template: __webpack_require__(/*! ./inspeccion-no-programada.component.html */ "./src/app/modulos/inp/components/inspeccion-no-programada/inspeccion-no-programada.component.html"),
            styles: [__webpack_require__(/*! ./inspeccion-no-programada.component.scss */ "./src/app/modulos/inp/components/inspeccion-no-programada/inspeccion-no-programada.component.scss")]
        }),
        __metadata("design:paramtypes", [_com_services_offline_service__WEBPACK_IMPORTED_MODULE_1__["OfflineService"]])
    ], InspeccionNoProgramadaComponent);
    return InspeccionNoProgramadaComponent;
}());



/***/ }),

/***/ "./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngFor=\"let inp of inspList; let i = index\">\n  <ion-item>\n    <ion-button fill=\"clear\" slot=\"end\" (click)=\"presentAlertConfirm(inp, i)\" color=\"medium\">\n      <ion-icon name=\"close\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"outline\" (click)=\"sincronizar(inp, i)\">\n      {{inp.fechaRealizada | date:'dd/MM/yyyy HH:mm'}}\n    </ion-button>\n  </ion-item>\n  <ion-card-header>\n    <ion-label *ngIf=\"inp.programacion\">{{inp.programacion.listaInspeccion.nombre}}</ion-label>\n    <ion-label *ngIf=\"inp.listaInspeccion\">{{inp.listaInspeccion.nombre}}</ion-label>\n    <ion-card-subtitle>\n      <ion-label *ngIf=\"inp.programacion\">{{inp.programacion.area.nombre}}</ion-label>\n      <ion-label *ngIf=\"inp.area\">{{inp.area.nombre}}</ion-label>\n    </ion-card-subtitle>\n    <ion-card-subtitle *ngIf=\"inp.programacion\"> {{inp.programacion.fecha | date:'dd/MM/yyyy'}} </ion-card-subtitle>\n    <ion-card-subtitle *ngIf=\"!inp.programacion\"> No programada </ion-card-subtitle>\n  </ion-card-header>\n</ion-card>"

/***/ }),

/***/ "./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvaW5wL2NvbXBvbmVudHMvaW5zcGVjY2lvbmVzLXN5bmMvaW5zcGVjY2lvbmVzLXN5bmMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InspeccionesSyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspeccionesSyncComponent", function() { return InspeccionesSyncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _com_utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../com/utils/util */ "./src/app/modulos/com/utils/util.ts");
/* harmony import */ var _services_inspeccion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/inspeccion.service */ "./src/app/modulos/inp/services/inspeccion.service.ts");
/* harmony import */ var _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
/* harmony import */ var _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ado/services/directorio.service */ "./src/app/modulos/ado/services/directorio.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../com/services/storage.service */ "./src/app/modulos/com/services/storage.service.ts");
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







var InspeccionesSyncComponent = /** @class */ (function () {
    // @Output('onLoadEvent') onLoadEvent = new EventEmitter<any>();
    function InspeccionesSyncComponent(storageService, inspeccionService, msgService, dirService, alertController) {
        this.storageService = storageService;
        this.inspeccionService = inspeccionService;
        this.msgService = msgService;
        this.dirService = dirService;
        this.alertController = alertController;
        this.onEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InspeccionesSyncComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storageService.getInspecciones()
            .then(function (resp) {
            if (resp != null) {
                _this.onEvent.emit({ type: 'onLoad', count: resp.count });
                _this.inspList = resp['data'];
            }
            else {
                _this.onEvent.emit({ type: 'onLoad', count: 0 });
            }
        });
    };
    InspeccionesSyncComponent.prototype.adicionarInspeccion = function (inspeccion) {
        if (this.inspList == null)
            this.inspList = [];
        this.inspList.push(inspeccion);
        this.inspList = this.inspList.slice();
    };
    InspeccionesSyncComponent.prototype.borrarInspeccion = function (insp, indice, emitEvent) {
        var _this = this;
        return this.storageService.borrarInspeccion(insp)
            .then(function () {
            _this.inspList.splice(indice, 1);
            _this.inspList = _this.inspList.slice();
            if (emitEvent)
                _this.onEvent.emit({ type: 'onLocalRemove', count: _this.inspList.length, inspeccion: insp });
        });
    };
    InspeccionesSyncComponent.prototype.presentAlertConfirm = function (inp, index) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Eliminar inspección?',
                            message: 'Esto borrará de su entorno local la inspección y no podrá sincronizarla. ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () {
                                        _this.borrarInspeccion(inp, index, true);
                                        _this.msgService.showMessage({ tipoMensaje: 'info', mensaje: 'Inspección eliminada de entorno local', detalle: '' });
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
    InspeccionesSyncComponent.prototype.sincronizar = function (insp, indice) {
        var _this = this;
        this.inspeccionService.create(insp).then(function (resp) {
            var _loop_1 = function (i) {
                var calf = resp.calificacionList[i];
                var imgKey = insp.calificacionList[i]['img_key'];
                var img = localStorage.getItem(imgKey);
                if (img != null)
                    _com_utils_util__WEBPACK_IMPORTED_MODULE_1__["Util"].dataURLtoFile(img, 'img_' + i + '_inp_calf_' + calf.id + '.jpeg').then(function (file) {
                        return _this.dirService.upload(file, null, 'INP', calf.id).then(function (imgResp) {
                            localStorage.removeItem(imgKey);
                        });
                    });
            };
            for (var i = 0; i < insp.calificacionList.length; i++) {
                _loop_1(i);
            }
            console.log("Sincronizando insp...");
            _this.borrarInspeccion(insp, indice)
                .then(function () {
                _this.msgService.showMessage({
                    tipoMensaje: 'success',
                    mensaje: 'Inspección sincronizada',
                    detalle: 'La inspección ha sido sincronizada correctamente'
                });
                _this.onEvent.emit({ type: 'onSync', inspeccion: resp, count: _this.inspList.length });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('inspecciones'),
        __metadata("design:type", Array)
    ], InspeccionesSyncComponent.prototype, "inspList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onEvent'),
        __metadata("design:type", Object)
    ], InspeccionesSyncComponent.prototype, "onEvent", void 0);
    InspeccionesSyncComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-inspeccionesSync',
            template: __webpack_require__(/*! ./inspecciones-sync.component.html */ "./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.html"),
            styles: [__webpack_require__(/*! ./inspecciones-sync.component.scss */ "./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.scss")]
        }),
        __metadata("design:paramtypes", [_com_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _services_inspeccion_service__WEBPACK_IMPORTED_MODULE_2__["InspeccionService"],
            _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_3__["MensajeUsuarioService"],
            _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_4__["DirectorioService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], InspeccionesSyncComponent);
    return InspeccionesSyncComponent;
}());



/***/ }),

/***/ "./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngIf=\"elementoActual\">\n  <ion-item *ngFor=\"let elem of elementoParents\">\n    <p >{{elem}}</p>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Calificación</ion-label>\n    <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.opcionCalificacion\">\n      <ion-select-option *ngFor=\"let opc of opcionCalificacionList\" [value]=\"opc\">{{opc.nombre}} -\n        {{opc.descripcion}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"stacked\">Descripción del hallazgo</ion-label>\n    <ion-textarea [(ngModel)]=\"elementoActual.calificacion.recomendacion\"  maxlength=\"510\"></ion-textarea>\n  </ion-item>\n  <ion-button color=\"primary\" fill=\"outline\" expand=\"block\" (click)=\"getPicture()\">\n    <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n  </ion-button>\n  <ion-item>\n    <img [src]=\"image\" *ngIf=\"image\" />\n  </ion-item>\n  <ion-item *ngIf=\"usarTipoHallazgo\">\n    <ion-label position=\"stacked\">Tipo hallazgo</ion-label>\n    <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.tipoHallazgo\">\n      <ion-select-option *ngFor=\"let th of elementoActual?.tipoHallazgoList\" [value]=\"th\">{{th.nombre}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"usarNivelRiesgo\">\n    <ion-label position=\"stacked\">Nivel de riesgo</ion-label>\n    <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.nivelRiesgo\">\n      <ion-select-option *ngFor=\"let nr of sistNivelRiesgo?.nivelRiesgoList\" [value]=\"nr\">{{nr.nombre}} -\n        {{nr.descripcion}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-card>\n\n\n<!-- <ion-grid *ngIf=\"elementoActual\">\n  <ion-row>\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\">\n      <p *ngFor=\"let elem of elementoParents\">{{elem}}</p>\n    </ion-col>\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\">\n      <ion-button color=\"primary\" fill=\"outline\" expand=\"block\" (click)=\"getPicture()\">\n        <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n      </ion-button>\n      <img [src]=\"image\" *ngIf=\"image\" />\n    </ion-col>\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\">\n      <ion-item>\n        <ion-label position=\"stacked\">Calificación</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.opcionCalificacion\">\n          <ion-select-option *ngFor=\"let opc of opcionCalificacionList\" [value]=\"opc\">{{opc.nombre}} -\n            {{opc.descripcion}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\" *ngIf=\"usarTipoHallazgo\">\n      <ion-item>\n        <ion-label position=\"stacked\">Tipo hallazgo</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.tipoHallazgo\">\n          <ion-select-option *ngFor=\"let th of elementoActual?.tipoHallazgoList\" [value]=\"th\">{{th.nombre}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\" *ngIf=\"usarNivelRiesgo\">\n      <ion-item>\n        <ion-label position=\"stacked\">Nivel de riesgo</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.nivelRiesgo\">\n          <ion-select-option *ngFor=\"let nr of sistNivelRiesgo?.nivelRiesgoList\" [value]=\"nr\">{{nr.nombre}} -\n            {{nr.descripcion}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\">\n      <ion-item>\n        <ion-label position=\"stacked\">Recomendación</ion-label>\n        <ion-textarea [(ngModel)]=\"elementoActual.calificacion.recomendacion\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n</ion-grid> -->"

/***/ }),

/***/ "./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvaW5wL2NvbXBvbmVudHMvcHJlZ3VudGEtaW5zcGVjY2lvbi9wcmVndW50YS1pbnNwZWNjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PreguntaInspeccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntaInspeccionComponent", function() { return PreguntaInspeccionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _entities_elemento_inspeccion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../entities/elemento-inspeccion */ "./src/app/modulos/inp/entities/elemento-inspeccion.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _entities_calificacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/calificacion */ "./src/app/modulos/inp/entities/calificacion.ts");
/* harmony import */ var _entities_tipo_hallazgo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../entities/tipo-hallazgo */ "./src/app/modulos/inp/entities/tipo-hallazgo.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PreguntaInspeccionComponent = /** @class */ (function () {
    function PreguntaInspeccionComponent(domSanitizer, offlineService, camera) {
        this.domSanitizer = domSanitizer;
        this.offlineService = offlineService;
        this.camera = camera;
    }
    PreguntaInspeccionComponent.prototype.getPicture = function () {
        var _this = this;
        var options = {
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 960,
            targetHeight: 960,
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            var imgKey = _this.elementoActual.calificacion['img_key'];
            if (imgKey == null) {
                imgKey = new Date().toISOString();
            }
            else {
                localStorage.removeItem(imgKey);
            }
            _this.elementoActual.calificacion['img_key'] = imgKey;
            var ionImageUrl = window.Ionic.WebView.convertFileSrc(imageData);
            _this.image = _this.domSanitizer.bypassSecurityTrustResourceUrl(ionImageUrl);
            localStorage.setItem(imgKey, ionImageUrl);
        })
            .catch(function (error) { return console.error(error); });
    };
    PreguntaInspeccionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // -- Consulta niveles de riesgo
        this.offlineService.querySistemaNivelRiesgo().then(function (resp) { return _this.sistNivelRiesgo = resp['data'][0]; });
    };
    Object.defineProperty(PreguntaInspeccionComponent.prototype, "elementoActual", {
        get: function () {
            return this._elementoActual;
        },
        set: function (value) {
            this._elementoActual = value;
            if (value != null && value.calificacion != null) {
                var ionImageUrl = localStorage.getItem(value.calificacion['img_key']);
                this.image = ionImageUrl == null ? null : this.domSanitizer.bypassSecurityTrustResourceUrl(ionImageUrl);
            }
            else {
                this._elementoActual.calificacion = new _entities_calificacion__WEBPACK_IMPORTED_MODULE_5__["Calificacion"]();
                this._elementoActual.calificacion.elementoInspeccion = new _entities_elemento_inspeccion__WEBPACK_IMPORTED_MODULE_1__["ElementoInspeccion"]();
                this._elementoActual.calificacion.elementoInspeccion.id = this._elementoActual.id;
                this._elementoActual.calificacion.tipoHallazgo = new _entities_tipo_hallazgo__WEBPACK_IMPORTED_MODULE_6__["TipoHallazgo"]();
                this.image = null;
            }
            this.elementoParents = [];
            this.fillElementosParent(this._elementoActual, this.elementoParents);
        },
        enumerable: true,
        configurable: true
    });
    PreguntaInspeccionComponent.prototype.fillElementosParent = function (elem, elementos) {
        if (elem.elementoInspeccionPadre != null) {
            this.fillElementosParent(elem.elementoInspeccionPadre, elementos);
        }
        elementos.push((elem.codigo == null ? '' : elem.codigo + ' ') + elem.nombre);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('usarTipoHallazgo'),
        __metadata("design:type", Boolean)
    ], PreguntaInspeccionComponent.prototype, "usarTipoHallazgo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('usarNivelRiesgo'),
        __metadata("design:type", Boolean)
    ], PreguntaInspeccionComponent.prototype, "usarNivelRiesgo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('opcionCalificacionList'),
        __metadata("design:type", Array)
    ], PreguntaInspeccionComponent.prototype, "opcionCalificacionList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('elementoInspeccion'),
        __metadata("design:type", _entities_elemento_inspeccion__WEBPACK_IMPORTED_MODULE_1__["ElementoInspeccion"]),
        __metadata("design:paramtypes", [_entities_elemento_inspeccion__WEBPACK_IMPORTED_MODULE_1__["ElementoInspeccion"]])
    ], PreguntaInspeccionComponent.prototype, "elementoActual", null);
    PreguntaInspeccionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-preguntaInspeccion',
            template: __webpack_require__(/*! ./pregunta-inspeccion.component.html */ "./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.html"),
            providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]],
            styles: [__webpack_require__(/*! ./pregunta-inspeccion.component.scss */ "./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _com_services_offline_service__WEBPACK_IMPORTED_MODULE_3__["OfflineService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]])
    ], PreguntaInspeccionComponent);
    return PreguntaInspeccionComponent;
}());



/***/ }),

/***/ "./src/app/modulos/inp/components/programacion-inspecciones/programacion-inspecciones.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/programacion-inspecciones/programacion-inspecciones.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngFor=\"let prog of programacionList\">\n  <ion-item>\n    <ion-label>{{prog.area.nombre}} </ion-label>\n    <ion-button [color]=\"prog.numeroRealizadas == prog.numeroInspecciones ? 'secondary':'primary'\" [disabled]=\"prog.numeroRealizadas == prog.numeroInspecciones\"\n      fill=\"outline\" slot=\"end\" (click)=\"onProgSelect(prog)\" *sTienePermiso=\"['SEC_GET_SISTNR', 'INP_GET_LISTINP']\">\n      {{prog.numeroRealizadas == prog.numeroInspecciones ? 'Finalizado':'Realizar'}}\n    </ion-button>\n  </ion-item>\n  <ion-card-header>\n    <ion-card-title>{{prog.numeroRealizadas}}/{{prog.numeroInspecciones}} </ion-card-title>\n    <ion-card-subtitle>{{prog.listaInspeccion.nombre}} <br/> {{prog.fecha | date:'dd/MM/yyyy'}}\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content *ngIf=\"prog.offlineDone > 0\">\n    <p>\n      Pdte sincronizar:\n      <ion-badge color=\"warning\">{{prog.offlineDone}}</ion-badge>\n    </p>\n  </ion-card-content>\n</ion-card>"

/***/ }),

/***/ "./src/app/modulos/inp/components/programacion-inspecciones/programacion-inspecciones.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/programacion-inspecciones/programacion-inspecciones.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvaW5wL2NvbXBvbmVudHMvcHJvZ3JhbWFjaW9uLWluc3BlY2Npb25lcy9wcm9ncmFtYWNpb24taW5zcGVjY2lvbmVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modulos/inp/components/programacion-inspecciones/programacion-inspecciones.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/programacion-inspecciones/programacion-inspecciones.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ProgramacionInspeccionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramacionInspeccionesComponent", function() { return ProgramacionInspeccionesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../com/entities/filter-query */ "./src/app/modulos/com/entities/filter-query.ts");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _com_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../com/services/storage.service */ "./src/app/modulos/com/services/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramacionInspeccionesComponent = /** @class */ (function () {
    function ProgramacionInspeccionesComponent(storageService, offlineService) {
        this.storageService = storageService;
        this.offlineService = offlineService;
        this.onProgramacionSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProgramacionInspeccionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.offlineService.queryProgramacionList().then(function (resp) {
            _this.programacionList = [];
            resp['data'].forEach(function (dto) {
                _this.programacionList.push(_com_entities_filter_query__WEBPACK_IMPORTED_MODULE_1__["FilterQuery"].dtoToObject(dto));
            });
        });
    };
    ProgramacionInspeccionesComponent.prototype.actualizarProgMetadata = function (id, aumentarRealizadas, aumentarOffline) {
        var prog;
        for (var i = 0; i < this.programacionList.length; i++) {
            if (id == this.programacionList[i].id) {
                prog = this.programacionList[i];
                break;
            }
        }
        if (prog['offlineDone'] == null)
            prog['offlineDone'] = 0;
        prog.numeroRealizadas += aumentarRealizadas == null ? 0 : (aumentarRealizadas ? 1 : -1);
        prog['offlineDone'] += aumentarOffline == null ? 0 : (aumentarOffline ? 1 : -1);
        this.storageService.updateProgramacion(prog);
    };
    ProgramacionInspeccionesComponent.prototype.onProgSelect = function (prog) {
        this.onProgramacionSelect.emit(prog);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onProgramacionSelect"),
        __metadata("design:type", Object)
    ], ProgramacionInspeccionesComponent.prototype, "onProgramacionSelect", void 0);
    ProgramacionInspeccionesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-programacionInspecciones',
            template: __webpack_require__(/*! ./programacion-inspecciones.component.html */ "./src/app/modulos/inp/components/programacion-inspecciones/programacion-inspecciones.component.html"),
            styles: [__webpack_require__(/*! ./programacion-inspecciones.component.scss */ "./src/app/modulos/inp/components/programacion-inspecciones/programacion-inspecciones.component.scss")]
        }),
        __metadata("design:paramtypes", [_com_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
            _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__["OfflineService"]])
    ], ProgramacionInspeccionesComponent);
    return ProgramacionInspeccionesComponent;
}());



/***/ }),

/***/ "./src/app/modulos/inp/entities/calificacion.ts":
/*!******************************************************!*\
  !*** ./src/app/modulos/inp/entities/calificacion.ts ***!
  \******************************************************/
/*! exports provided: Calificacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calificacion", function() { return Calificacion; });
var Calificacion = /** @class */ (function () {
    function Calificacion() {
    }
    return Calificacion;
}());



/***/ }),

/***/ "./src/app/modulos/inp/entities/elemento-inspeccion.ts":
/*!*************************************************************!*\
  !*** ./src/app/modulos/inp/entities/elemento-inspeccion.ts ***!
  \*************************************************************/
/*! exports provided: ElementoInspeccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementoInspeccion", function() { return ElementoInspeccion; });
var ElementoInspeccion = /** @class */ (function () {
    function ElementoInspeccion() {
        this.elementoInspeccionList = [];
    }
    return ElementoInspeccion;
}());



/***/ }),

/***/ "./src/app/modulos/inp/entities/inspeccion.ts":
/*!****************************************************!*\
  !*** ./src/app/modulos/inp/entities/inspeccion.ts ***!
  \****************************************************/
/*! exports provided: Inspeccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inspeccion", function() { return Inspeccion; });
var Inspeccion = /** @class */ (function () {
    function Inspeccion() {
    }
    return Inspeccion;
}());



/***/ }),

/***/ "./src/app/modulos/inp/entities/lista-inspeccion-pk.ts":
/*!*************************************************************!*\
  !*** ./src/app/modulos/inp/entities/lista-inspeccion-pk.ts ***!
  \*************************************************************/
/*! exports provided: ListaInspeccionPK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaInspeccionPK", function() { return ListaInspeccionPK; });
var ListaInspeccionPK = /** @class */ (function () {
    function ListaInspeccionPK() {
    }
    return ListaInspeccionPK;
}());



/***/ }),

/***/ "./src/app/modulos/inp/entities/lista-inspeccion.ts":
/*!**********************************************************!*\
  !*** ./src/app/modulos/inp/entities/lista-inspeccion.ts ***!
  \**********************************************************/
/*! exports provided: ListaInspeccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaInspeccion", function() { return ListaInspeccion; });
/* harmony import */ var _lista_inspeccion_pk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista-inspeccion-pk */ "./src/app/modulos/inp/entities/lista-inspeccion-pk.ts");

var ListaInspeccion = /** @class */ (function () {
    function ListaInspeccion() {
        this.listaInspeccionPK = new _lista_inspeccion_pk__WEBPACK_IMPORTED_MODULE_0__["ListaInspeccionPK"]();
        this.opcionCalificacionList = [];
    }
    return ListaInspeccion;
}());



/***/ }),

/***/ "./src/app/modulos/inp/entities/tipo-hallazgo.ts":
/*!*******************************************************!*\
  !*** ./src/app/modulos/inp/entities/tipo-hallazgo.ts ***!
  \*******************************************************/
/*! exports provided: TipoHallazgo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoHallazgo", function() { return TipoHallazgo; });
var TipoHallazgo = /** @class */ (function () {
    function TipoHallazgo() {
    }
    return TipoHallazgo;
}());



/***/ }),

/***/ "./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ElaboracionInspeccionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElaboracionInspeccionPageModule", function() { return ElaboracionInspeccionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_comun_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../com/comun.module */ "./src/app/modulos/com/comun.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_lista_inspeccion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/lista-inspeccion.service */ "./src/app/modulos/inp/services/lista-inspeccion.service.ts");
/* harmony import */ var _elaboracion_inspeccion_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elaboracion-inspeccion.page */ "./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.page.ts");
/* harmony import */ var _components_programacion_inspecciones_programacion_inspecciones_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/programacion-inspecciones/programacion-inspecciones.component */ "./src/app/modulos/inp/components/programacion-inspecciones/programacion-inspecciones.component.ts");
/* harmony import */ var _components_inspeccion_form_inspeccion_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/inspeccion-form/inspeccion-form.component */ "./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.ts");
/* harmony import */ var _components_pregunta_inspeccion_pregunta_inspeccion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/pregunta-inspeccion/pregunta-inspeccion.component */ "./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.ts");
/* harmony import */ var _components_inspecciones_sync_inspecciones_sync_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/inspecciones-sync/inspecciones-sync.component */ "./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.ts");
/* harmony import */ var _components_inspeccion_no_programada_inspeccion_no_programada_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/inspeccion-no-programada/inspeccion-no-programada.component */ "./src/app/modulos/inp/components/inspeccion-no-programada/inspeccion-no-programada.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        component: _elaboracion_inspeccion_page__WEBPACK_IMPORTED_MODULE_7__["ElaboracionInspeccionPage"]
    }
];
var ElaboracionInspeccionPageModule = /** @class */ (function () {
    function ElaboracionInspeccionPageModule() {
    }
    ElaboracionInspeccionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _com_comun_module__WEBPACK_IMPORTED_MODULE_4__["ComunModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_com_comun_module__WEBPACK_IMPORTED_MODULE_4__["ComunModule"]],
            providers: [_services_lista_inspeccion_service__WEBPACK_IMPORTED_MODULE_6__["ListaInspeccionService"]],
            entryComponents: [_components_inspeccion_form_inspeccion_form_component__WEBPACK_IMPORTED_MODULE_9__["InspeccionFormComponent"]],
            declarations: [
                _elaboracion_inspeccion_page__WEBPACK_IMPORTED_MODULE_7__["ElaboracionInspeccionPage"],
                _components_programacion_inspecciones_programacion_inspecciones_component__WEBPACK_IMPORTED_MODULE_8__["ProgramacionInspeccionesComponent"],
                _components_inspeccion_form_inspeccion_form_component__WEBPACK_IMPORTED_MODULE_9__["InspeccionFormComponent"],
                _components_pregunta_inspeccion_pregunta_inspeccion_component__WEBPACK_IMPORTED_MODULE_10__["PreguntaInspeccionComponent"],
                _components_inspecciones_sync_inspecciones_sync_component__WEBPACK_IMPORTED_MODULE_11__["InspeccionesSyncComponent"],
                _components_inspeccion_no_programada_inspeccion_no_programada_component__WEBPACK_IMPORTED_MODULE_12__["InspeccionNoProgramadaComponent"]
            ]
        })
    ], ElaboracionInspeccionPageModule);
    return ElaboracionInspeccionPageModule;
}());



/***/ }),

/***/ "./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.page.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navegar('/app/home')\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Elaboracion inspeccion</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"listas\">\n    <ion-segment-button value=\"listas\">\n      <ion-label>Listas</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"prog\">\n      <ion-label>Programación</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"insp\">\n      <ion-label>\n        Sincronizar\n        <ion-badge *ngIf=\"inspCount > 0\" color=\"warning\">{{inspCount}}</ion-badge>\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <sm-inspeccionNoProgramada [style.display]=\"segments['listas'] ? 'block':'none'\" (onListaSelect)=\"abrirInspeccion($event, false)\"></sm-inspeccionNoProgramada>\n\n  <sm-programacionInspecciones [style.display]=\"segments['prog'] ? 'block':'none'\" (onProgramacionSelect)=\"abrirInspeccion($event, true)\"\n    #progInspComp></sm-programacionInspecciones>\n\n  <sm-inspeccionesSync [style.display]=\"segments['insp'] ? 'block':'none'\" (onEvent)=\"onEvent($event)\" #inspSyncComp></sm-inspeccionesSync>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.page.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.page.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvaW5wL3BhZ2VzL2VsYWJvcmFjaW9uLWluc3BlY2Npb24vZWxhYm9yYWNpb24taW5zcGVjY2lvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.page.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: ElaboracionInspeccionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElaboracionInspeccionPage", function() { return ElaboracionInspeccionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_inspeccion_form_inspeccion_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/inspeccion-form/inspeccion-form.component */ "./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_inspecciones_sync_inspecciones_sync_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/inspecciones-sync/inspecciones-sync.component */ "./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.ts");
/* harmony import */ var _components_programacion_inspecciones_programacion_inspecciones_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/programacion-inspecciones/programacion-inspecciones.component */ "./src/app/modulos/inp/components/programacion-inspecciones/programacion-inspecciones.component.ts");
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






var ElaboracionInspeccionPage = /** @class */ (function () {
    function ElaboracionInspeccionPage(modalController, router) {
        this.modalController = modalController;
        this.router = router;
        this.segments = { 'listas': true, 'prog': false, 'insp': false };
        this.inspCount = 0;
    }
    ElaboracionInspeccionPage.prototype.ngOnInit = function () {
    };
    ElaboracionInspeccionPage.prototype.abrirInspeccion = function (entidad, desdeProg) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_inspeccion_form_inspeccion_form_component__WEBPACK_IMPORTED_MODULE_1__["InspeccionFormComponent"],
                            componentProps: { value: entidad },
                            cssClass: "modal-fullscreen"
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (resp) {
                            _this.onModalDismiss(resp['data'], desdeProg ? entidad : null);
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ElaboracionInspeccionPage.prototype.onModalDismiss = function (inspeccion, prog) {
        if (inspeccion != null && inspeccion.id == null) {
            this.inspSyncComp.adicionarInspeccion(inspeccion);
            this.inspCount += 1;
            if (prog != null)
                this.progInspComp.actualizarProgMetadata(prog.id, null, true);
        }
        else if (inspeccion != null && prog != null) {
            prog.numeroRealizadas += 1;
        }
    };
    ElaboracionInspeccionPage.prototype.onEvent = function (event) {
        switch (event.type) {
            case 'onSync':
                // si event.inspeccion.programacion  == null indica que es una programacion no programada
                if (event.inspeccion.programacion != null)
                    this.progInspComp.actualizarProgMetadata(event.inspeccion.programacion.id, true, false);
                break;
            case 'onLocalRemove':
                // si event.inspeccion.programacion  == null indica que es una programacion no programada
                if (event.inspeccion.programacion != null)
                    this.progInspComp.actualizarProgMetadata(event.inspeccion.programacion.id, null, false);
                break;
        }
        this.inspCount = event.count;
    };
    ElaboracionInspeccionPage.prototype.navegar = function (url) {
        this.router.navigate([url]);
    };
    ElaboracionInspeccionPage.prototype.segmentChanged = function (event) {
        for (var seg in this.segments) {
            this.segments[seg] = false;
            if (event.detail.value == seg)
                this.segments[seg] = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inspSyncComp'),
        __metadata("design:type", _components_inspecciones_sync_inspecciones_sync_component__WEBPACK_IMPORTED_MODULE_4__["InspeccionesSyncComponent"])
    ], ElaboracionInspeccionPage.prototype, "inspSyncComp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('progInspComp'),
        __metadata("design:type", _components_programacion_inspecciones_programacion_inspecciones_component__WEBPACK_IMPORTED_MODULE_5__["ProgramacionInspeccionesComponent"])
    ], ElaboracionInspeccionPage.prototype, "progInspComp", void 0);
    ElaboracionInspeccionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-elaboracionInspeccion',
            template: __webpack_require__(/*! ./elaboracion-inspeccion.page.html */ "./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.page.html"),
            styles: [__webpack_require__(/*! ./elaboracion-inspeccion.page.scss */ "./src/app/modulos/inp/pages/elaboracion-inspeccion/elaboracion-inspeccion.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ElaboracionInspeccionPage);
    return ElaboracionInspeccionPage;
}());



/***/ })

}]);
//# sourceMappingURL=modulos-inp-pages-elaboracion-inspeccion-elaboracion-inspeccion-module.js.map