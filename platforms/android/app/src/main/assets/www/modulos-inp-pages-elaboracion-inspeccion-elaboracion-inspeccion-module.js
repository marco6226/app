(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-inp-pages-elaboracion-inspeccion-elaboracion-inspeccion-module"],{

/***/ "./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"anterior()\" [disabled]=\"guardando == true\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title (click)=\"abrirMenu()\">\r\n      Elementos {{numeroRespondidas}}/{{indicePreguntas.length}}\r\n      <!-- \r\n      <div *ngIf=\"loadingArea == true\">\r\n        <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\r\n      </div>\r\n      <div *ngIf=\"areasCargadas == false\">\r\n        <a style=\"color:white\" (click)=\"cargarAreas()\">--Reintentar cargar areas--</a>\r\n      </div>\r\n\r\n      <ion-select *ngIf=\"!esProgramada && areasCargadas == true\" placeholder=\"Seleccione área\" [(ngModel)]=\"area\" [disabled]=\"guardando == true\">\r\n        <ion-select-option *ngFor=\"let area of areasList\" [value]=\"area\">{{area.nombre}}</ion-select-option>\r\n      </ion-select> -->\r\n\r\n\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"siguiente()\" *ngIf=\"!visibleGuardar && listaCargada == true\" [disabled]=\"guardando == true\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-forward\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div *ngIf=\"loadingLI == true\">\r\n    <ion-spinner class=\"main-spinner\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n  </div>\r\n  <div *ngIf=\"listaCargada == false\">\r\n    <p style=\"color:#888;padding:25px\">\r\n      No fue posible cargar la lista de inspección\r\n      <a *ngIf=\"listaCargada == false\" (click)=\"cargarListaInsp()\">Reintentar</a>\r\n    </p>\r\n  </div>\r\n\r\n  <div *ngIf=\"guardando == true\" style=\"width: 320px; margin:auto; text-align: center;\">\r\n    <h6>Guardando inspección, por favor espere...</h6>\r\n    <ion-spinner class=\"main-spinner\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n  </div>\r\n\r\n  <div [style.display]=\"guardando != true ? 'block':'none'\">\r\n    <ion-item *ngIf=\"listaCargada == true\">\r\n      <ion-label>{{listaInspeccion?.nombre}}</ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"listaInspeccion?.descripcion && listaCargada == true\">\r\n      <ion-note style=\"padding:10px;\">{{listaInspeccion?.descripcion}}</ion-note>\r\n    </ion-item>\r\n    <ion-label style=\"margin-left:15px;\" *ngIf=\"esProgramada\">{{area?.nombre}}</ion-label>\r\n    <sm-areaSelector *ngIf=\"!esProgramada\" [(ngModel)]=\"area\" [disabled]=\"guardando == true\" appendTo=\"ion-modal\"></sm-areaSelector>\r\n    <ion-card *ngIf=\"listaCargada == true\" [ngClass]=\" (numeroPreguntaActual == -1) ? 'mostrar':'ocultar'\">\r\n      <ion-item>\r\n        <sm-formulario *ngIf=\"listaInspeccion?.formulario\" [ngClass]=\" (numeroPreguntaActual == -1) ? 'mostrar':'ocultar'\" #formulario\r\n          [formularioModel]=\"listaInspeccion?.formulario\" [respuestasList]=\"inspPend?.respuestasCampoList\"></sm-formulario>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <sm-preguntaInspeccion *ngIf=\"elementoSelect\" [ngClass]=\"(numeroPreguntaActual >= 0) ? 'mostrar':'ocultar'\" [elementoInspeccion]=\"elementoSelect\"\r\n      [opcionCalificacionList]=\"listaInspeccion.opcionCalificacionList\" [usarNivelRiesgo]=\"listaInspeccion.usarNivelRiesgo\"\r\n      [usarTipoHallazgo]=\"listaInspeccion.usarTipoHallazgo\" (onCalificacionChange)=\"registrarCambioCalif($event)\">\r\n    </sm-preguntaInspeccion>\r\n\r\n  </div>\r\n\r\n  <div style=\"height: 150px;\"></div>\r\n  <ion-fab *ngIf=\"!guardando && listaCargada == true\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"guardarInspeccion()\">\r\n      <ion-icon name=\"save\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ion-fab *ngIf=\"!guardando && listaCargada == true\" vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"presentAlertaSalir()\" color=\"light\">\r\n      <ion-icon name=\"undo\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-form/inspeccion-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mostrar {\n  display: block; }\n\n.ocultar {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9pbnAvY29tcG9uZW50cy9pbnNwZWNjaW9uLWZvcm0vQzpcXFVzZXJzXFxsZW9uYXJkb1xcRGVza3RvcFxcd29ya3NcXGFwcC9zcmNcXGFwcFxcbW9kdWxvc1xcaW5wXFxjb21wb25lbnRzXFxpbnNwZWNjaW9uLWZvcm1cXGluc3BlY2Npb24tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL2lucC9jb21wb25lbnRzL2luc3BlY2Npb24tZm9ybS9pbnNwZWNjaW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9zdHJhcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5vY3VsdGFye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"

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
/* harmony import */ var _menu_lista_menu_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../menu-lista/menu-lista.component */ "./src/app/modulos/inp/components/menu-lista/menu-lista.component.ts");
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
    function InspeccionFormComponent(popoverController, toastController, storageService, alertController, modalController, listaInspeccionService, inspeccionService, offlineService, msgService, dirService) {
        this.popoverController = popoverController;
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
        this.numeroRespondidas = 0;
    }
    InspeccionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalController.getTop()
            .then(function (data) {
            var parametro = data.componentProps;
            if (parametro.programacion != null) {
                _this.esProgramada = true;
                _this.programacion = parametro.programacion;
                _this.listaPk = _this.programacion.listaInspeccion.listaInspeccionPK;
                _this.area = _this.programacion.area;
            }
            else if (parametro.listaInspeccion != null) {
                _this.esProgramada = false;
                _this.listaPk = parametro.listaInspeccion.listaInspeccionPK;
            }
            else if (parametro.inspeccion) {
                _this.programacion = parametro.inspeccion.programacion;
                _this.esProgramada = _this.programacion != null;
                _this.inspPend = parametro.inspeccion;
                if (_this.esProgramada) {
                    _this.listaPk = _this.programacion.listaInspeccion.listaInspeccionPK;
                    _this.area = _this.programacion.area;
                }
                else {
                    _this.listaPk = parametro.inspeccion.listaInspeccion.listaInspeccionPK;
                    _this.area = parametro.inspeccion.area;
                }
            }
            _this.cargarListaInsp();
        });
    };
    InspeccionFormComponent.prototype.construirListaAreas = function (listado, areas) {
        for (var i = 0; i < areas.length; i++) {
            var area = areas[i];
            var areaObj = { id: area.id, nombre: area.nombre };
            listado.push(areaObj);
            if (area.areaList != null && area.areaList.length > 0) {
                this.construirListaAreas(listado, area.areaList);
            }
        }
    };
    InspeccionFormComponent.prototype.cargarListaInsp = function () {
        var _this = this;
        this.loadingLI = true;
        this.listaCargada = null;
        this.offlineService.queryListaInspeccion(this.listaPk.id, this.listaPk.version)
            .then(function (data) {
            _this.listaInspeccion = data['data'][0];
            _this.indexarElementos(_this.listaInspeccion.elementoInspeccionList, null);
            _this.loadingLI = false;
            _this.listaCargada = true;
            if (_this.inspPend != null) {
                _this.cargarInspeccion();
            }
        })
            .catch(function (err) {
            _this.loadingLI = false;
            _this.listaCargada = false;
        });
    };
    InspeccionFormComponent.prototype.cargarInspeccion = function () {
        this.numeroRespondidas = 0;
        for (var i = 0; i < this.inspPend.calificacionList.length; i++) {
            var calf = this.inspPend.calificacionList[i];
            if (calf == null)
                continue;
            for (var j = 0; j < this.indicePreguntas.length; j++) {
                var elem = this.indicePreguntas[j];
                if (elem.id == calf.elementoInspeccion.id) {
                    this.numeroRespondidas += (calf.opcionCalificacion != null ? 1 : 0);
                    elem.calificacion = calf;
                    break;
                }
            }
        }
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
        if (!this.validarRequerirFoto()) {
            return;
        }
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
                            header: 'Salir de la inspección',
                            message: '¿Que acción desea realizar?',
                            buttons: [{
                                    text: 'Salir y descartar avances realizados',
                                    handler: function () { return _this.confirmarSalir(); }
                                },
                                {
                                    text: 'Salir y guardar avances realizados',
                                    handler: function () {
                                        var inspeccion = _this.generarInspeccion();
                                        if (_this.inspPend == null) {
                                            inspeccion.fechaRealizada = new Date();
                                            inspeccion['hash'] = inspeccion.fechaRealizada.getTime();
                                            _this.storageService.guardarInspeccionPendiente(inspeccion);
                                        }
                                        else {
                                            inspeccion.fechaRealizada = _this.inspPend.fechaRealizada;
                                            inspeccion['hash'] = _this.inspPend['hash'];
                                            _this.storageService.actualizarInspeccionPendiente(inspeccion);
                                        }
                                        _this.modalController.dismiss();
                                    }
                                },
                                {
                                    text: 'Continuar la inspección',
                                    role: 'cancel'
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
    InspeccionFormComponent.prototype.confirmarSalir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Salir de la inspección',
                            message: '¿Confirma salir y descartar la inspección actual?',
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
                                },
                                {
                                    text: 'No',
                                    role: 'cancel'
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
        if (!this.validarRequerirFoto()) {
            return;
        }
        this.numeroPreguntaActual += 1;
        this.asignarElemento();
    };
    InspeccionFormComponent.prototype.validarRequerirFoto = function () {
        if ((this.elementoSelect != null &&
            this.elementoSelect.calificacion != null &&
            this.elementoSelect.calificacion.opcionCalificacion != null &&
            this.elementoSelect.calificacion.opcionCalificacion.requerirDoc == true) &&
            (this.elementoSelect.calificacion['img_key'] == null ||
                this.elementoSelect.calificacion['img_key'].length == 0)) {
            this.presentToast("Debe especificar al menos una fotografía para la calificación \""
                + this.elementoSelect.calificacion.opcionCalificacion.nombre + "\"");
            return false;
        }
        return true;
    };
    InspeccionFormComponent.prototype.asignarElemento = function () {
        this.elementoSelect = this.indicePreguntas[this.numeroPreguntaActual];
    };
    InspeccionFormComponent.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        try {
                            this.toastController.dismiss();
                        }
                        catch (e) { }
                        return [4 /*yield*/, this.toastController.create({
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
    InspeccionFormComponent.prototype.generarInspeccion = function (validar) {
        var _this = this;
        var calificacionList = [];
        for (var i = 0; i < this.indicePreguntas.length; i++) {
            var calf = this.indicePreguntas[i].calificacion;
            if (validar && (calf == null || calf.opcionCalificacion == null)) {
                this.numeroPreguntaActual = i;
                this.elementoSelect = this.indicePreguntas[this.numeroPreguntaActual];
                this.visibleGuardar = this.numeroPreguntaActual == this.indicePreguntas.length - 1;
                this.presentToast('Por favor especifique la calificación de la pregunta \"' + this.elementoSelect.codigo + ' ' + this.elementoSelect.nombre + '\"');
                return;
            }
            if (validar && (calf.nivelRiesgo != null && (calf.recomendacion == null || calf.recomendacion.length <= 0))) {
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
                respCampo.valor = new Date(_this.formulario.form.value[campo.id + "_" + campo.nombre]);
            }
            else if (campo.tipo == 'multiple_select' && campo.respuestaCampo.valor != null) {
                respCampo.valor = _com_utils_util__WEBPACK_IMPORTED_MODULE_8__["Util"].arrayAString(';', campo.respuestaCampo.valor);
            }
            else {
                respCampo.valor = _this.formulario.form.value[campo.id + "_" + campo.nombre];
            }
            inspeccion.respuestasCampoList.push(respCampo);
        });
        return inspeccion;
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
            this.presentToast('Por favor diligencie el campo ubicación');
            return;
        }
        var inspeccion = this.generarInspeccion(true);
        if (inspeccion == null)
            return;
        this.guardando = true;
        this.persistirInspeccion(inspeccion)
            .then(function (data) {
            _this.guardando = false;
            _this.manageResponse(data);
            if (_this.inspPend != null)
                _this.storageService.borrarInspeccionPendiente(_this.inspPend);
        })
            .catch(function (err) {
            _this.guardando = false;
        });
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
            return this.inspeccionService.create(inspeccion)
                .then(function (resp) {
                var inp = resp;
                var _loop_1 = function (i) {
                    var calf = inp.calificacionList[i];
                    var imgsUrls = inspeccion.calificacionList[i]['img_key'];
                    if (imgsUrls != null) {
                        var j_1 = 0;
                        imgsUrls.forEach(function (url) {
                            if (url != null) {
                                _com_utils_util__WEBPACK_IMPORTED_MODULE_8__["Util"].dataURLtoFile(url, 'img_' + i + j_1 + '_inp_calf_' + calf.id + '.jpeg').then(function (file) { return _this.dirService.upload(file, null, 'INP', calf.id).then(function (imgResp) { return localStorage.removeItem(url); }); });
                            }
                            j_1 += 1;
                        });
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
    InspeccionFormComponent.prototype.abrirMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _menu_lista_menu_lista_component__WEBPACK_IMPORTED_MODULE_13__["MenuListaComponent"],
                            componentProps: { 'listaInspeccion': this.listaInspeccion }
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onDidDismiss()
                            .then(function (param) {
                            _this.redireccionar(param.data);
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InspeccionFormComponent.prototype.redireccionar = function (indice) {
        if (!this.validarRequerirFoto())
            return;
        if (indice == null)
            return;
        this.numeroPreguntaActual = indice;
        this.asignarElemento();
    };
    InspeccionFormComponent.prototype.registrarCambioCalif = function (event) {
        var _this = this;
        this.numeroRespondidas = 0;
        this.indicePreguntas.forEach(function (el) {
            if (el.calificacion != null && el.calificacion.opcionCalificacion != null)
                _this.numeroRespondidas += 1;
        });
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
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
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

module.exports = "\r\n<div *ngIf=\"loading == true\">\r\n    <ion-spinner class=\"main-spinner\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n  </div>\r\n\r\n<div *ngIf=\"listasCargadas == false\">\r\n    <p style=\"color:#888;padding:25px\">\r\n        No fue posible cargar las listas de inspección.\r\n        <a *ngIf=\"listasCargadas == false\" (click)=\"cargarListas()\">Reintentar</a>\r\n    </p>\r\n</div>\r\n\r\n<ion-card *ngFor=\"let lista of listasInspeccion; let i = index\">\r\n    <ion-card-header>\r\n        <ion-item>\r\n            <h6>{{lista.nombre}}</h6>\r\n            <ion-button fill=\"outline\" slot=\"end\" *sTienePermiso=\"['SEC_GET_SISTNR', 'INP_GET_LISTINP']\" (click)=\"seleccionarLista(lista)\">\r\n                Realizar\r\n            </ion-button>\r\n        </ion-item>\r\n        <ion-card-content>\r\n            <p>{{lista.codigo}}</p>\r\n            <p>{{lista.descripcion}}</p>\r\n        </ion-card-content>\r\n    </ion-card-header>\r\n</ion-card>"

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
    }
    InspeccionNoProgramadaComponent.prototype.ngOnInit = function () {
        this.cargarListas();
    };
    InspeccionNoProgramadaComponent.prototype.cargarListas = function () {
        var _this = this;
        this.loading = true;
        this.listasCargadas = null;
        this.offlineService.queryListasInspeccion()
            .then(function (resp) {
            _this.listasInspeccion = resp['data'];
            _this.loading = false;
            _this.listasCargadas = true;
        })
            .catch(function (err) {
            _this.loading = false;
            _this.listasCargadas = false;
        });
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

/***/ "./src/app/modulos/inp/components/inspeccion-pendiente/inspeccion-pendiente.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-pendiente/inspeccion-pendiente.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item>\r\n    <ion-icon [name]=\"inspeccionesList.length > 0 ? 'alert' : 'checkmark-circle'\" [color]=\"inspeccionesList.length > 0 ? 'warning' : 'success'\"></ion-icon>\r\n    <ion-label>\r\n        <h4 *ngIf=\"inspeccionesList.length > 0\">Inspecciones iniciadas</h4>\r\n        <h4 *ngIf=\"inspeccionesList.length == 0\">Sin pendientes</h4>\r\n    </ion-label>\r\n</ion-item>\r\n\r\n<ion-list>\r\n    <ion-item *ngFor=\"let item of inspeccionesList; let idx = index;\" button>\r\n        <ion-label (click)=\"seleccionar(item)\">\r\n            <h4>{{item.fechaRealizada | date:'yyyy-MM-dd HH:mm'}}</h4>\r\n            <p>{{item.listaInspeccion.codigo}} - {{item.listaInspeccion.nombre}}</p>\r\n        </ion-label>\r\n        <ion-button (click)=\"elimianrInsp(item, idx)\" slot=\"end\" fill=\"clear\">\r\n            <ion-icon name=\"close\"></ion-icon>\r\n        </ion-button>\r\n    </ion-item>\r\n</ion-list>"

/***/ }),

/***/ "./src/app/modulos/inp/components/inspeccion-pendiente/inspeccion-pendiente.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-pendiente/inspeccion-pendiente.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvaW5wL2NvbXBvbmVudHMvaW5zcGVjY2lvbi1wZW5kaWVudGUvaW5zcGVjY2lvbi1wZW5kaWVudGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modulos/inp/components/inspeccion-pendiente/inspeccion-pendiente.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspeccion-pendiente/inspeccion-pendiente.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: InspeccionPendienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspeccionPendienteComponent", function() { return InspeccionPendienteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../com/services/storage.service */ "./src/app/modulos/com/services/storage.service.ts");
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



var InspeccionPendienteComponent = /** @class */ (function () {
    function InspeccionPendienteComponent(alertController, storageService, navParams, popoverController) {
        this.alertController = alertController;
        this.storageService = storageService;
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.contador = 0;
    }
    InspeccionPendienteComponent.prototype.ngOnInit = function () {
        this.inspeccionesList = (this.navParams.data.inspecciones);
    };
    InspeccionPendienteComponent.prototype.seleccionar = function (insp) {
        this.popoverController.dismiss(insp);
    };
    InspeccionPendienteComponent.prototype.elimianrInsp = function (insp, idx) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmar acción',
                            message: 'Esto borrará permanentemente la inspección que habia inciado ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () {
                                        _this.storageService.borrarInspeccionPendiente(insp);
                                        _this.inspeccionesList.splice(idx, 1);
                                        if (_this.inspeccionesList.length == 0)
                                            _this.popoverController.dismiss();
                                    }
                                },
                                {
                                    text: 'No',
                                    role: 'cancel'
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
    InspeccionPendienteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-inspeccionPendiente',
            template: __webpack_require__(/*! ./inspeccion-pendiente.component.html */ "./src/app/modulos/inp/components/inspeccion-pendiente/inspeccion-pendiente.component.html"),
            styles: [__webpack_require__(/*! ./inspeccion-pendiente.component.scss */ "./src/app/modulos/inp/components/inspeccion-pendiente/inspeccion-pendiente.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _com_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])
    ], InspeccionPendienteComponent);
    return InspeccionPendienteComponent;
}());



/***/ }),

/***/ "./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/inspecciones-sync/inspecciones-sync.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngFor=\"let inp of inspList; let i = index\">\r\n  <ion-item>\r\n\r\n    <ion-button *ngIf=\"inp['sync'] == null || inp['sync'] == false\" fill=\"outline\" (click)=\"sincronizar(inp, i)\">\r\n      {{inp.fechaRealizada | date:'dd/MM/yyyy HH:mm'}}\r\n    </ion-button>\r\n\r\n    <ion-spinner *ngIf=\"inp['sync'] == true\" class=\"main-spinner\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n\r\n    <ion-button *ngIf=\"inp['sync'] == null || inp['sync'] == false\" fill=\"clear\" slot=\"end\" (click)=\"presentAlertConfirm(inp, i)\"\r\n      color=\"medium\">\r\n      <ion-icon name=\"close\"></ion-icon>\r\n    </ion-button>\r\n\r\n  </ion-item>\r\n  <ion-card-header>\r\n    <ion-label *ngIf=\"inp.programacion\">{{inp.programacion.listaInspeccion.nombre}}</ion-label>\r\n    <ion-label *ngIf=\"inp.listaInspeccion\">{{inp.listaInspeccion.nombre}}</ion-label>\r\n    <ion-card-subtitle>\r\n      <ion-label *ngIf=\"inp.programacion\">{{inp.programacion.area.nombre}}</ion-label>\r\n      <ion-label *ngIf=\"inp.area\">{{inp.area.nombre}}</ion-label>\r\n    </ion-card-subtitle>\r\n    <ion-card-subtitle *ngIf=\"inp.programacion\"> {{inp.programacion.fecha | date:'dd/MM/yyyy'}} </ion-card-subtitle>\r\n    <ion-card-subtitle *ngIf=\"!inp.programacion\"> No programada </ion-card-subtitle>\r\n  </ion-card-header>\r\n</ion-card>"

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
        insp['sync'] = true;
        this.inspeccionService.create(insp)
            .then(function (resp) {
            var _loop_1 = function (i) {
                var calf = resp.calificacionList[i];
                var imgsUrls = insp.calificacionList[i]['img_key'];
                if (imgsUrls != null) {
                    var j_1 = 0;
                    imgsUrls.forEach(function (url) {
                        // let url = localStorage.getItem(key);
                        if (url != null) {
                            _com_utils_util__WEBPACK_IMPORTED_MODULE_1__["Util"].dataURLtoFile(url, 'img_' + i + j_1 + '_inp_calf_' + calf.id + '.jpeg').then(function (file) { return _this.dirService.upload(file, null, 'INP', calf.id).then(function (imgResp) { return localStorage.removeItem(url); }); });
                        }
                        j_1 += 1;
                    });
                }
            };
            for (var i = 0; i < insp.calificacionList.length; i++) {
                _loop_1(i);
            }
            console.log("Sincronizando insp...");
            _this.borrarInspeccion(insp, indice)
                .then(function () {
                insp['sync'] = false;
                _this.msgService.showMessage({
                    tipoMensaje: 'success',
                    mensaje: 'Inspección sincronizada',
                    detalle: 'La inspección ha sido sincronizada correctamente'
                });
                _this.onEvent.emit({ type: 'onSync', inspeccion: resp, count: _this.inspList.length });
            });
        })
            .catch(function (err) {
            insp['sync'] = false;
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

/***/ "./src/app/modulos/inp/components/menu-lista/menu-lista.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modulos/inp/components/menu-lista/menu-lista.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\r\n    <ion-item *ngFor=\"let item of items\" button (click)=\"seleccionar(item.indice)\">\r\n        <ion-icon slot=\"start\" *ngIf=\"item.calificable\" name=\"checkmark-circle\" [color]=\"item.checked ? 'primary':'light'\"></ion-icon>\r\n        <ion-label>{{item.label}}</ion-label>\r\n    </ion-item>\r\n</ion-list>"

/***/ }),

/***/ "./src/app/modulos/inp/components/menu-lista/menu-lista.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modulos/inp/components/menu-lista/menu-lista.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvaW5wL2NvbXBvbmVudHMvbWVudS1saXN0YS9tZW51LWxpc3RhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modulos/inp/components/menu-lista/menu-lista.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modulos/inp/components/menu-lista/menu-lista.component.ts ***!
  \***************************************************************************/
/*! exports provided: MenuListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListaComponent", function() { return MenuListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuListaComponent = /** @class */ (function () {
    function MenuListaComponent(navParams, popoverController) {
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.contador = 0;
    }
    MenuListaComponent.prototype.ngOnInit = function () {
        var lista = (this.navParams.data.listaInspeccion);
        this.items = [{
                label: lista.formulario.nombre,
                calificable: false,
                checked: false,
                indice: -1
            }];
        this.generarMenu(this.items, lista.elementoInspeccionList);
    };
    MenuListaComponent.prototype.generarMenu = function (list, elementos) {
        var _this = this;
        elementos.forEach(function (el) {
            var calificable = el.elementoInspeccionList == null || el.elementoInspeccionList.length == 0;
            list.push({
                label: el.codigo + ' ' + el.nombre,
                calificable: calificable,
                checked: el.calificacion != null && el.calificacion.opcionCalificacion != null,
                indice: (calificable ? _this.contador : null)
            });
            if (calificable)
                _this.contador += 1;
            if (el.elementoInspeccionList != null && el.elementoInspeccionList.length > 0) {
                _this.generarMenu(list, el.elementoInspeccionList);
            }
        });
    };
    MenuListaComponent.prototype.seleccionar = function (indice) {
        if (indice != null)
            this.popoverController.dismiss(indice);
    };
    MenuListaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-menuLista',
            template: __webpack_require__(/*! ./menu-lista.component.html */ "./src/app/modulos/inp/components/menu-lista/menu-lista.component.html"),
            styles: [__webpack_require__(/*! ./menu-lista.component.scss */ "./src/app/modulos/inp/components/menu-lista/menu-lista.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])
    ], MenuListaComponent);
    return MenuListaComponent;
}());



/***/ }),

/***/ "./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngIf=\"elementoActual\">\r\n  <ion-item *ngFor=\"let elem of elementoParents\">\r\n    <p>{{elem}}</p>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Calificación</ion-label>\r\n    <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" compareWith=\"id\" [(ngModel)]=\"elementoActual.calificacion.opcionCalificacion\"\r\n      (ionChange)=\"emitirCambioCalificacion($event)\">\r\n      <ion-select-option *ngFor=\"let opc of opcionCalificacionList\" [value]=\"opc\">\r\n        {{opc.nombre}} - {{opc.descripcion}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"stacked\">Descripción del hallazgo</ion-label>\r\n    <ion-textarea [(ngModel)]=\"elementoActual.calificacion.recomendacion\" maxlength=\"510\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-button color=\"primary\" fill=\"outline\" expand=\"block\" (click)=\"getPicture()\">\r\n    <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\r\n  </ion-button>\r\n  <ion-item>\r\n    <!-- <img [src]=\"image\" *ngIf=\"image\" /> -->\r\n    <ion-slides pager=\"true\" #ionSlides>\r\n      <ion-slide *ngFor=\"let img of imagenes;let i = index\">\r\n        <div>\r\n          <div class=\"img-toolbar\">\r\n            <ion-button slot=\"end\" fill=\"clear\" color=\"medium\" (click)=\"presentRemoveImg(i)\">\r\n              <ion-icon name=\"close\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n          <img [src]=\"img | safeBypass:'resourceUrl'\" />\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"usarTipoHallazgo\">\r\n    <ion-label position=\"stacked\">Tipo hallazgo</ion-label>\r\n    <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.tipoHallazgo\">\r\n      <ion-select-option *ngFor=\"let th of elementoActual?.tipoHallazgoList\" [value]=\"th\">{{th.nombre}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"usarNivelRiesgo\">\r\n    <ion-label position=\"stacked\">Nivel de riesgo</ion-label>\r\n    <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.nivelRiesgo\">\r\n      <ion-select-option *ngFor=\"let nr of sistNivelRiesgo?.nivelRiesgoList\" [value]=\"nr\">{{nr.nombre}} - {{nr.descripcion}}\r\n      </ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-card>\r\n\r\n\r\n<!-- <ion-grid *ngIf=\"elementoActual\">\r\n  <ion-row>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\">\r\n      <p *ngFor=\"let elem of elementoParents\">{{elem}}</p>\r\n    </ion-col>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\">\r\n      <ion-button color=\"primary\" fill=\"outline\" expand=\"block\" (click)=\"getPicture()\">\r\n        <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\r\n      </ion-button>\r\n      <img [src]=\"image\" *ngIf=\"image\" />\r\n    </ion-col>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Calificación</ion-label>\r\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.opcionCalificacion\">\r\n          <ion-select-option *ngFor=\"let opc of opcionCalificacionList\" [value]=\"opc\">{{opc.nombre}} -\r\n            {{opc.descripcion}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\" *ngIf=\"usarTipoHallazgo\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Tipo hallazgo</ion-label>\r\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.tipoHallazgo\">\r\n          <ion-select-option *ngFor=\"let th of elementoActual?.tipoHallazgoList\" [value]=\"th\">{{th.nombre}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\" *ngIf=\"usarNivelRiesgo\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Nivel de riesgo</ion-label>\r\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" [(ngModel)]=\"elementoActual.calificacion.nivelRiesgo\">\r\n          <ion-select-option *ngFor=\"let nr of sistNivelRiesgo?.nivelRiesgoList\" [value]=\"nr\">{{nr.nombre}} -\r\n            {{nr.descripcion}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"12\" size-lg=\"12\" size-xl=\"12\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Recomendación</ion-label>\r\n        <ion-textarea [(ngModel)]=\"elementoActual.calificacion.recomendacion\"></ion-textarea>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-grid> -->"

/***/ }),

/***/ "./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modulos/inp/components/pregunta-inspeccion/pregunta-inspeccion.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-toolbar {\n  height: 50px; }\n\n.img-toolbar ion-button {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9pbnAvY29tcG9uZW50cy9wcmVndW50YS1pbnNwZWNjaW9uL0M6XFxVc2Vyc1xcbGVvbmFyZG9cXERlc2t0b3BcXHdvcmtzXFxhcHAvc3JjXFxhcHBcXG1vZHVsb3NcXGlucFxcY29tcG9uZW50c1xccHJlZ3VudGEtaW5zcGVjY2lvblxccHJlZ3VudGEtaW5zcGVjY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bG9zL2lucC9jb21wb25lbnRzL3ByZWd1bnRhLWluc3BlY2Npb24vcHJlZ3VudGEtaW5zcGVjY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctdG9vbGJhcntcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmltZy10b29sYmFyIGlvbi1idXR0b257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

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
/* harmony import */ var _entities_calificacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../entities/calificacion */ "./src/app/modulos/inp/entities/calificacion.ts");
/* harmony import */ var _entities_tipo_hallazgo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../entities/tipo-hallazgo */ "./src/app/modulos/inp/entities/tipo-hallazgo.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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







var PreguntaInspeccionComponent = /** @class */ (function () {
    function PreguntaInspeccionComponent(alertController, offlineService, camera) {
        this.alertController = alertController;
        this.offlineService = offlineService;
        this.camera = camera;
        this.onCalificacionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // image: any;
        this.imagenes = [];
        this.options = {
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 960,
            targetHeight: 960,
        };
        this.numMaxFotos = this.offlineService.sessionService.getConfigParam('NUM_MAX_FOTO_INP');
    }
    // getPicture() {
    //   let options: CameraOptions = {
    //     quality: 75,
    //     destinationType: this.camera.DestinationType.FILE_URI,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     correctOrientation: true,
    //     mediaType: this.camera.MediaType.PICTURE,
    //     targetWidth: 960,
    //     targetHeight: 960,
    //   }
    //   this.camera.getPicture(options)
    //     .then(imageData => {
    //       let imgKey = this.elementoActual.calificacion['img_key'];
    //       if (imgKey == null) {
    //         imgKey = new Date().toISOString();
    //       } else {
    //         localStorage.removeItem(imgKey);
    //       }
    //       this.elementoActual.calificacion['img_key'] = imgKey;
    //       let ionImageUrl = (<any>window).Ionic.WebView.convertFileSrc(imageData);
    //       this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(ionImageUrl);
    //       localStorage.setItem(imgKey, ionImageUrl);
    //     })
    //     .catch(error => console.error(error));
    // }
    PreguntaInspeccionComponent.prototype.getPicture = function () {
        var _this = this;
        if (this.imagenes != null && this.imagenes.length >= this.numMaxFotos) {
            this.presentAlert("Número máximo de fotografías alcanzado", "No es posible adjuntar mas de " + this.numMaxFotos + " fotografía(s) por hallazgo");
            return;
        }
        this.camera.getPicture(this.options)
            .then(function (imageData) {
            var imgsUrls = _this.elementoActual.calificacion['img_key'];
            if (imgsUrls == null)
                imgsUrls = [];
            if (_this.imagenes == null)
                _this.imagenes = [];
            var imgUrl = window.Ionic.WebView.convertFileSrc(imageData);
            imgsUrls.push(imgUrl);
            // let imgKey = new Date().toISOString();
            // imgsKeys.push(imgKey);
            // localStorage.setItem(imgKey, imgUrl);
            _this.elementoActual.calificacion['img_key'] = imgsUrls;
            _this.imagenes.push(imgUrl);
            _this.imagenes = _this.imagenes.slice();
        }).catch(function (error) {
            console.error(error);
        });
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
            var _this = this;
            console.log("Setting elemento...");
            this._elementoActual = value;
            this.imagenes = null;
            if (value != null && value.calificacion != null) {
                this._elementoActual.calificacion = value.calificacion;
                var imgsUrls = value.calificacion['img_key'];
                if (imgsUrls != null) {
                    this.imagenes = [];
                    imgsUrls.forEach(function (imgurl) { return _this.imagenes.push(imgurl); });
                }
            }
            else {
                this._elementoActual.calificacion = new _entities_calificacion__WEBPACK_IMPORTED_MODULE_4__["Calificacion"]();
                this._elementoActual.calificacion.elementoInspeccion = new _entities_elemento_inspeccion__WEBPACK_IMPORTED_MODULE_1__["ElementoInspeccion"]();
                this._elementoActual.calificacion.elementoInspeccion.id = this._elementoActual.id;
                this._elementoActual.calificacion.tipoHallazgo = new _entities_tipo_hallazgo__WEBPACK_IMPORTED_MODULE_5__["TipoHallazgo"]();
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
    PreguntaInspeccionComponent.prototype.removerImg = function (index) {
        var _this = this;
        var imgsUrls = this.elementoActual.calificacion['img_key'];
        // let imgurl = imgsUrls[index];
        var imgsAux = this.imagenes.slice();
        imgsAux.splice(index, 1);
        this.imagenes = null;
        imgsUrls.splice(index, 1);
        this.elementoActual.calificacion['img_key'] = imgsUrls;
        setTimeout(function () {
            _this.imagenes = imgsAux;
        }, 50);
        // localStorage.removeItem(imgurl);
    };
    PreguntaInspeccionComponent.prototype.presentRemoveImg = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Desea remover la fotografía?',
                            message: 'La fotografía será eliminada. ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () { return _this.removerImg(index); }
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
    PreguntaInspeccionComponent.prototype.presentAlert = function (header, msg) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: msg,
                            buttons: [{ text: 'Aceptar' }]
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
    PreguntaInspeccionComponent.prototype.emitirCambioCalificacion = function (event) {
        this.onCalificacionChange.emit(event.detail.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onCalificacionChange"),
        __metadata("design:type", Object)
    ], PreguntaInspeccionComponent.prototype, "onCalificacionChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("ionSlides"),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"])
    ], PreguntaInspeccionComponent.prototype, "ionSlides", void 0);
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
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
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

module.exports = "<div *ngIf=\"loading == true\">\r\n  <ion-spinner class=\"main-spinner\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n</div>\r\n<div *ngIf=\"progCargada == false\">\r\n  <p style=\"color:#888;padding:25px\">\r\n    No fue posible cargar la programación de inspecciones.\r\n    <a *ngIf=\"progCargada == false\" (click)=\"cargarProgramacion()\">Reintentar</a>\r\n  </p>\r\n</div>\r\n\r\n<ion-card *ngFor=\"let prog of programacionList\">\r\n  <ion-item>\r\n    <ion-label>{{prog.area.nombre}} </ion-label>\r\n    <ion-button [color]=\"prog.numeroRealizadas == prog.numeroInspecciones ? 'secondary':'primary'\" [disabled]=\"prog.numeroRealizadas == prog.numeroInspecciones\"\r\n      fill=\"outline\" slot=\"end\" (click)=\"onProgSelect(prog)\" *sTienePermiso=\"['SEC_GET_SISTNR', 'INP_GET_LISTINP']\">\r\n      {{prog.numeroRealizadas == prog.numeroInspecciones ? 'Finalizado':'Realizar'}}\r\n    </ion-button>\r\n  </ion-item>\r\n  <ion-card-header>\r\n    <ion-card-title>{{prog.numeroRealizadas}}/{{prog.numeroInspecciones}} </ion-card-title>\r\n    <ion-card-subtitle>{{prog.listaInspeccion.nombre}} <br/> {{prog.fecha | date:'dd/MM/yyyy'}}\r\n    </ion-card-subtitle>\r\n  </ion-card-header>\r\n  <ion-card-content *ngIf=\"prog.offlineDone > 0\">\r\n    <p>\r\n      Pdte sincronizar:\r\n      <ion-badge color=\"warning\">{{prog.offlineDone}}</ion-badge>\r\n    </p>\r\n  </ion-card-content>\r\n</ion-card>"

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
        this.cargarProgramacion();
    };
    ProgramacionInspeccionesComponent.prototype.cargarProgramacion = function () {
        var _this = this;
        this.loading = true;
        this.progCargada = null;
        this.offlineService.queryProgramacionList()
            .then(function (resp) {
            _this.programacionList = [];
            resp['data'].forEach(function (dto) {
                _this.programacionList.push(_com_entities_filter_query__WEBPACK_IMPORTED_MODULE_1__["FilterQuery"].dtoToObject(dto));
            });
            _this.loading = false;
            _this.progCargada = true;
        })
            .catch(function (err) {
            _this.loading = false;
            _this.progCargada = false;
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
/* harmony import */ var _com_components_area_selector_area_selector_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../com/components/area-selector/area-selector.component */ "./src/app/modulos/com/components/area-selector/area-selector.component.ts");
/* harmony import */ var _components_menu_lista_menu_lista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/menu-lista/menu-lista.component */ "./src/app/modulos/inp/components/menu-lista/menu-lista.component.ts");
/* harmony import */ var _components_inspeccion_pendiente_inspeccion_pendiente_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/inspeccion-pendiente/inspeccion-pendiente.component */ "./src/app/modulos/inp/components/inspeccion-pendiente/inspeccion-pendiente.component.ts");
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
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _com_components_area_selector_area_selector_component__WEBPACK_IMPORTED_MODULE_13__["AreaSelectorModule"]
            ],
            exports: [_com_comun_module__WEBPACK_IMPORTED_MODULE_4__["ComunModule"]],
            providers: [_services_lista_inspeccion_service__WEBPACK_IMPORTED_MODULE_6__["ListaInspeccionService"]],
            entryComponents: [_components_inspeccion_form_inspeccion_form_component__WEBPACK_IMPORTED_MODULE_9__["InspeccionFormComponent"], _components_menu_lista_menu_lista_component__WEBPACK_IMPORTED_MODULE_14__["MenuListaComponent"], _components_inspeccion_pendiente_inspeccion_pendiente_component__WEBPACK_IMPORTED_MODULE_15__["InspeccionPendienteComponent"]],
            declarations: [
                _elaboracion_inspeccion_page__WEBPACK_IMPORTED_MODULE_7__["ElaboracionInspeccionPage"],
                _components_programacion_inspecciones_programacion_inspecciones_component__WEBPACK_IMPORTED_MODULE_8__["ProgramacionInspeccionesComponent"],
                _components_inspeccion_form_inspeccion_form_component__WEBPACK_IMPORTED_MODULE_9__["InspeccionFormComponent"],
                _components_pregunta_inspeccion_pregunta_inspeccion_component__WEBPACK_IMPORTED_MODULE_10__["PreguntaInspeccionComponent"],
                _components_inspecciones_sync_inspecciones_sync_component__WEBPACK_IMPORTED_MODULE_11__["InspeccionesSyncComponent"],
                _components_inspeccion_no_programada_inspeccion_no_programada_component__WEBPACK_IMPORTED_MODULE_12__["InspeccionNoProgramadaComponent"],
                _components_menu_lista_menu_lista_component__WEBPACK_IMPORTED_MODULE_14__["MenuListaComponent"],
                _components_inspeccion_pendiente_inspeccion_pendiente_component__WEBPACK_IMPORTED_MODULE_15__["InspeccionPendienteComponent"]
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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"navegar('/app/home')\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title (click)=\"cargarInspPendientes(true)\">\r\n      Elaboracion inspeccion\r\n      <ion-icon name=\"alert\"></ion-icon>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"listas\">\r\n    <ion-segment-button value=\"listas\">\r\n      <ion-label>Listas</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"prog\">\r\n      <ion-label>Programación</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"insp\">\r\n      <ion-label>\r\n        Sincronizar\r\n        <ion-badge *ngIf=\"inspCount > 0\" color=\"warning\">{{inspCount}}</ion-badge>\r\n      </ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <sm-inspeccionNoProgramada [style.display]=\"segments['listas'] ? 'block':'none'\" (onListaSelect)=\"abrirInspeccion(null, $event, null)\"></sm-inspeccionNoProgramada>\r\n\r\n  <sm-programacionInspecciones [style.display]=\"segments['prog'] ? 'block':'none'\" (onProgramacionSelect)=\"abrirInspeccion($event, null, null)\"\r\n    #progInspComp></sm-programacionInspecciones>\r\n\r\n  <sm-inspeccionesSync [style.display]=\"segments['insp'] ? 'block':'none'\" (onEvent)=\"onEvent($event)\" #inspSyncComp></sm-inspeccionesSync>\r\n\r\n\r\n\r\n</ion-content>"

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
/* harmony import */ var _com_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../com/services/storage.service */ "./src/app/modulos/com/services/storage.service.ts");
/* harmony import */ var _components_inspeccion_pendiente_inspeccion_pendiente_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/inspeccion-pendiente/inspeccion-pendiente.component */ "./src/app/modulos/inp/components/inspeccion-pendiente/inspeccion-pendiente.component.ts");
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
    function ElaboracionInspeccionPage(popoverController, storageService, modalController, router) {
        this.popoverController = popoverController;
        this.storageService = storageService;
        this.modalController = modalController;
        this.router = router;
        this.segments = { 'listas': true, 'prog': false, 'insp': false };
        this.inspCount = 0;
    }
    ElaboracionInspeccionPage.prototype.ngOnInit = function () {
        this.cargarInspPendientes();
    };
    ElaboracionInspeccionPage.prototype.cargarInspPendientes = function (desdeBoton) {
        var _this = this;
        this.storageService.getInspeccionesPendientes()
            .then(function (resp) {
            var inspPend = resp.data;
            if (inspPend.length > 0 || desdeBoton == true) {
                _this.abrirInspPendientes(inspPend);
            }
        });
    };
    ElaboracionInspeccionPage.prototype.abrirInspPendientes = function (inspecciones) {
        return __awaiter(this, void 0, void 0, function () {
            var popOver;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_inspeccion_pendiente_inspeccion_pendiente_component__WEBPACK_IMPORTED_MODULE_7__["InspeccionPendienteComponent"],
                            componentProps: { 'inspecciones': inspecciones }
                        })];
                    case 1:
                        popOver = _a.sent();
                        popOver.onDidDismiss()
                            .then(function (resp) {
                            var insp = resp.data;
                            if (insp) {
                                _this.abrirInspeccion(null, null, insp);
                            }
                        });
                        return [4 /*yield*/, popOver.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ElaboracionInspeccionPage.prototype.abrirInspeccion = function (programacion, listaInspeccion, inspeccion) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_inspeccion_form_inspeccion_form_component__WEBPACK_IMPORTED_MODULE_1__["InspeccionFormComponent"],
                            componentProps: {
                                'programacion': programacion,
                                'listaInspeccion': listaInspeccion,
                                'inspeccion': inspeccion
                            },
                            cssClass: "modal-fullscreen"
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (resp) {
                            _this.onModalDismiss(resp['data'], programacion != null ? programacion : null);
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
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
            _com_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ElaboracionInspeccionPage);
    return ElaboracionInspeccionPage;
}());



/***/ })

}]);
//# sourceMappingURL=modulos-inp-pages-elaboracion-inspeccion-elaboracion-inspeccion-module.js.map