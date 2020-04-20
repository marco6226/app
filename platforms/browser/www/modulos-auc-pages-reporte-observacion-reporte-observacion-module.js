(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-auc-pages-reporte-observacion-reporte-observacion-module"],{

/***/ "./src/app/modulos/auc/components/observacion-form/observacion-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/auc/components/observacion-form/observacion-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"anterior()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{tarjeta?.nombre}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"guardarInspeccion()\" [disabled]=\"!form.valid\">\n        <ion-icon slot=\"icon-only\" name=\"save\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"observ\">\n    <ion-segment-button value=\"observ\">\n      <ion-label>Reporte</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"detalle\" *ngIf=\"tarjeta?.usarNivelRiesgo || tarjeta?.usarCausaRaiz\">\n      <ion-label>\n        <ion-label>Detalle</ion-label>\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n    <ion-card [style.display]=\"segments['observ'] ? 'block':'none'\">\n      <ion-button color=\"primary\" fill=\"outline\" expand=\"block\" (click)=\"getPicture()\" *sTienePermiso=\"['ADO_POST_DOCSUP']\">\n        <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n      </ion-button>\n\n      <ion-slides pager=\"true\">\n        <ion-slide *ngFor=\"let img of imagenes\">\n          <img [src]=\"img | safeBypass:'resourceUrl'\" />\n        </ion-slide>\n      </ion-slides>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Tipo de observacion*</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" formControlName=\"tipoObservacion\">\n          <ion-select-option *ngFor=\"let to of tarjeta?.campos.tipo_observacion\" [value]=\"to.label\">{{to.label}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Descripción*</ion-label>\n        <ion-textarea formControlName=\"descripcion\" maxlength=\"510\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Afecta:</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" formControlName=\"afecta\" multiple=\"true\">\n          <ion-select-option *ngFor=\"let a of tarjeta?.campos.afecta\" [value]=\"to\">{{a.label}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Recomendación:</ion-label>\n        <ion-textarea formControlName=\"recomendacion\" maxlength=\"510\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Área reportada*</ion-label>\n        <!--<sm-autocomplete (completeMethod)=\"onSearchChange($event)\" fieldLabel=\"nombre\" field=\"nombre\" [options]=\"areasList\"></sm-autocomplete>-->\n        <ion-select placeholder=\"Seleccione área\" formControlName=\"area\">\n          <ion-select-option *ngFor=\"let area of areasList\" [value]=\"area\">{{area.nombre}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Implicación</ion-label>\n        <sm-tree [nodes]=\"tarjeta?.implicacionList\" field=\"implicacionList\" label=\"nombre\" [expanded]=\"true\"></sm-tree>\n      </ion-item>\n\n    </ion-card>\n\n    <ion-card [style.display]=\"segments['detalle'] ? 'block':'none'\" *ngIf=\"tarjeta?.usarNivelRiesgo || tarjeta?.usarCausaRaiz\">\n      <ion-item *ngIf=\"tarjeta?.usarCausaRaiz\">\n        <ion-label position=\"stacked\">Causa raíz:</ion-label>\n        <sm-tree [nodes]=\"sistemaCausaRaiz?.causaRaizList\" field=\"causaRaizList\" label=\"nombre\" [expanded]=\"true\">\n        </sm-tree>\n      </ion-item>\n\n      <ion-item *ngIf=\"tarjeta?.usarNivelRiesgo\">\n        <ion-label position=\"stacked\">Nivel de riesgo:</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" formControlName=\"nivelRiesgo\">\n          <ion-select-option *ngFor=\"let nr of sistemaNivelRiesgo?.nivelRiesgoList\" [value]=\"nr\">{{nr.nombre}} - {{nr.descripcion}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-card>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/auc/components/observacion-form/observacion-form.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/auc/components/observacion-form/observacion-form.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "sm-tree {\n  position: relative;\n  left: -1em;\n  width: 100%; }\n\nsm-autocomplete {\n  width: 100%;\n  z-index: 10; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9EQVRBL2Rldi9zaWdlc3MvZnJvbnRlbmQvc2lnZXNzX2FwcC9zcmMvYXBwL21vZHVsb3MvYXVjL2NvbXBvbmVudHMvb2JzZXJ2YWNpb24tZm9ybS9vYnNlcnZhY2lvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxvcy9hdWMvY29tcG9uZW50cy9vYnNlcnZhY2lvbi1mb3JtL29ic2VydmFjaW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbS10cmVle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAtMWVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5zbS1hdXRvY29tcGxldGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG59Il19 */"

/***/ }),

/***/ "./src/app/modulos/auc/components/observacion-form/observacion-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modulos/auc/components/observacion-form/observacion-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ObservacionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservacionFormComponent", function() { return ObservacionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _entities_tarjeta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/tarjeta */ "./src/app/modulos/auc/entities/tarjeta.ts");
/* harmony import */ var _sec_services_sistema_causa_raiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../sec/services/sistema-causa-raiz.service */ "./src/app/modulos/sec/services/sistema-causa-raiz.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _entities_observacion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../entities/observacion */ "./src/app/modulos/auc/entities/observacion.ts");
/* harmony import */ var _services_observacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/observacion.service */ "./src/app/modulos/auc/services/observacion.service.ts");
/* harmony import */ var _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ado/services/directorio.service */ "./src/app/modulos/ado/services/directorio.service.ts");
/* harmony import */ var _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _com_utils_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../com/utils/util */ "./src/app/modulos/com/utils/util.ts");
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












var ObservacionFormComponent = /** @class */ (function () {
    function ObservacionFormComponent(alertController, mensajeUsuarioService, directorioService, observacionService, camera, offlineService, fb, modalController) {
        this.alertController = alertController;
        this.mensajeUsuarioService = mensajeUsuarioService;
        this.directorioService = directorioService;
        this.observacionService = observacionService;
        this.camera = camera;
        this.offlineService = offlineService;
        this.fb = fb;
        this.modalController = modalController;
        this.segments = { 'detalle': false, 'observ': true };
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
        this.form = fb.group({
            id: null,
            tipoObservacion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            afecta: null,
            descripcion: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            recomendacion: null,
            nivelRiesgo: null,
            causaRaiz: null,
            area: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ObservacionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.offlineService.queryArea().then(function (resp) { return _this.areasList = resp['data']; });
        this.offlineService.querySistemaNivelRiesgo().then(function (data) { return _this.sistemaNivelRiesgo = data['data'][0]; });
        this.offlineService.querySistemaCausaRaiz().then(function (data) { return _this.sistemaCausaRaiz = data; });
        this.modalController.getTop().then(function (data) {
            _this.tarjeta = data.componentProps.value;
            _this.tarjeta.campos = JSON.parse(_this.tarjeta.campos);
        });
    };
    ObservacionFormComponent.prototype.anterior = function () {
        this.presentAlertaSalir();
    };
    ObservacionFormComponent.prototype.presentAlertaSalir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Desea salir?',
                            message: 'La observación no ha sido guardada, los datos serán descartados. ¿Confirma esta acción?',
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
    ObservacionFormComponent.prototype.getPicture = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            var imgUrl = window.Ionic.WebView.convertFileSrc(imageData);
            _this.imagenes.push(imgUrl);
            _this.imagenes = _this.imagenes.slice();
        }).catch(function (error) {
            console.error(error);
        });
    };
    ObservacionFormComponent.prototype.buildList = function (field, tree, list) {
        var _this = this;
        tree.forEach(function (node) {
            if (node[field] != null && node[field].length > 0) {
                _this.buildList(field, node[field], list);
            }
            if (node['selected'] == true) {
                list.push({ id: node.id });
            }
        });
    };
    ObservacionFormComponent.prototype.onSubmit = function () {
    };
    ObservacionFormComponent.prototype.guardarInspeccion = function () {
        var _this = this;
        var observacion = new _entities_observacion__WEBPACK_IMPORTED_MODULE_6__["Observacion"]();
        observacion.tipoObservacion = this.form.value.tipoObservacion;
        observacion.descripcion = this.form.value.descripcion;
        var implicacionList = [];
        this.buildList('implicacionList', this.tarjeta.implicacionList, implicacionList);
        observacion.implicacionList = implicacionList;
        observacion.area = this.form.value.area;
        observacion.afecta = this.form.value.afecta;
        observacion.recomendacion = this.form.value.recomendacion;
        var causaRaizList = [];
        this.buildList('causaRaizList', this.sistemaCausaRaiz.causaRaizList, causaRaizList);
        observacion.causaRaizList = causaRaizList;
        observacion.nivelRiesgo = this.form.value.nivelRiesgo;
        observacion.tarjeta = new _entities_tarjeta__WEBPACK_IMPORTED_MODULE_3__["Tarjeta"]();
        observacion.tarjeta.id = this.tarjeta.id;
        observacion.tarjeta.nombre = this.tarjeta.nombre;
        this.persistirObservacion(observacion).then(function (resp) { return _this.manageResponse(resp); });
    };
    ObservacionFormComponent.prototype.persistirObservacion = function (observacion) {
        var _this = this;
        if (this.offlineService.getOfflineMode()) {
            return new Promise(function (resolve, reject) {
                observacion['imagenes'] = _this.imagenes;
                observacion.fechaObservacion = new Date();
                observacion['hash'] = observacion.fechaObservacion.toISOString();
                _com_utils_util__WEBPACK_IMPORTED_MODULE_11__["asyncLocalStorage"].setItem(observacion['hash'], JSON.stringify(observacion));
                _com_utils_util__WEBPACK_IMPORTED_MODULE_11__["asyncLocalStorage"].getItem('observaciones').then(function (data) {
                    var obserStore = data == null ? [] : data;
                    obserStore.push(observacion['hash']);
                    _com_utils_util__WEBPACK_IMPORTED_MODULE_11__["asyncLocalStorage"].setItem('observaciones', JSON.stringify(obserStore));
                });
                resolve(observacion);
            });
        }
        else {
            return this.observacionService.create(observacion).then(function (data) {
                observacion.id = data.id;
                var cod = 1;
                _this.imagenes.forEach(function (url) {
                    _com_utils_util__WEBPACK_IMPORTED_MODULE_11__["Util"].dataURLtoFile(url, 'img_' + cod + '_obs_' + observacion.id + '.jpeg').then(function (file) { return _this.directorioService.upload(file, null, 'AUC', observacion.id); });
                    cod++;
                });
            });
        }
    };
    ObservacionFormComponent.prototype.manageResponse = function (observacion) {
        var _this = this;
        this.modalController.dismiss(observacion).then(function (resp) { return _this.mensajeUsuarioService.showMessage({
            tipoMensaje: 'success',
            mensaje: 'OBSERVACIÓN REALIZADA',
            detalle: 'Se ha registrado correctamente la observación'
        }); });
    };
    ObservacionFormComponent.prototype.segmentChanged = function (event) {
        for (var seg in this.segments) {
            this.segments[seg] = false;
            if (event.detail.value == seg)
                this.segments[seg] = true;
        }
    };
    ObservacionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-observacion-form',
            template: __webpack_require__(/*! ./observacion-form.component.html */ "./src/app/modulos/auc/components/observacion-form/observacion-form.component.html"),
            providers: [_sec_services_sistema_causa_raiz_service__WEBPACK_IMPORTED_MODULE_4__["SistemaCausaRaizService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _services_observacion_service__WEBPACK_IMPORTED_MODULE_7__["ObservacionService"], _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_8__["DirectorioService"]],
            styles: [__webpack_require__(/*! ./observacion-form.component.scss */ "./src/app/modulos/auc/components/observacion-form/observacion-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_9__["MensajeUsuarioService"],
            _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_8__["DirectorioService"],
            _services_observacion_service__WEBPACK_IMPORTED_MODULE_7__["ObservacionService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _com_services_offline_service__WEBPACK_IMPORTED_MODULE_10__["OfflineService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ObservacionFormComponent);
    return ObservacionFormComponent;
}());



/***/ }),

/***/ "./src/app/modulos/auc/components/observaciones-sync/observacion-sync.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/auc/components/observaciones-sync/observacion-sync.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card *ngFor=\"let obs of obserList; let i = index\">\n    <ion-item>\n        <ion-button fill=\"clear\" slot=\"end\" (click)=\"presentAlertConfirm(obs, i)\" color=\"medium\">\n            <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"outline\" (click)=\"sincronizar(obs, i)\">\n            {{obs.fechaObservacion | date:'dd/MM/yyyy HH:mm'}}\n        </ion-button>\n    </ion-item>\n    <ion-card-header>\n        <ion-label>{{obs.tarjeta.nombre}}</ion-label>\n        <ion-card-subtitle>\n            {{obs.area.nombre}}\n        </ion-card-subtitle>\n        <ion-card-subtitle>\n            {{obs.tipoObservacion}}\n        </ion-card-subtitle>\n        <ion-card-subtitle>\n            {{obs.descripcion}}\n        </ion-card-subtitle>\n    </ion-card-header>\n</ion-card>"

/***/ }),

/***/ "./src/app/modulos/auc/components/observaciones-sync/observacion-sync.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modulos/auc/components/observaciones-sync/observacion-sync.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvYXVjL2NvbXBvbmVudHMvb2JzZXJ2YWNpb25lcy1zeW5jL29ic2VydmFjaW9uLXN5bmMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modulos/auc/components/observaciones-sync/observacion-sync.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modulos/auc/components/observaciones-sync/observacion-sync.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ObservacionSyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservacionSyncComponent", function() { return ObservacionSyncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _com_utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../com/utils/util */ "./src/app/modulos/com/utils/util.ts");
/* harmony import */ var _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
/* harmony import */ var _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ado/services/directorio.service */ "./src/app/modulos/ado/services/directorio.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_observacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/observacion.service */ "./src/app/modulos/auc/services/observacion.service.ts");
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






var ObservacionSyncComponent = /** @class */ (function () {
    function ObservacionSyncComponent(msgService, dirService, alertController, obserService) {
        this.msgService = msgService;
        this.dirService = dirService;
        this.alertController = alertController;
        this.obserService = obserService;
        this.onEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ObservacionSyncComponent.prototype.ngOnInit = function () {
        var _this = this;
        _com_utils_util__WEBPACK_IMPORTED_MODULE_1__["asyncLocalStorage"].getItem('observaciones').then(function (resp) {
            if (resp != null) {
                _this.onEvent.emit({ type: 'onLoad', count: resp.length });
                _this.obserList = [];
                resp.forEach(function (inpKey) {
                    _com_utils_util__WEBPACK_IMPORTED_MODULE_1__["asyncLocalStorage"].getItem(inpKey).then(function (resp) {
                        var obser = resp;
                        obser.fechaObservacion = obser.fechaObservacion == null ? null : new Date(obser.fechaObservacion);
                        _this.obserList.push(obser);
                        _this.obserList = _this.obserList.slice();
                    });
                });
            }
            else {
                _this.onEvent.emit({ type: 'onLoad', count: 0 });
            }
        });
    };
    ObservacionSyncComponent.prototype.adicionarObservacion = function (obser) {
        if (this.obserList == null)
            this.obserList = [];
        this.obserList.push(obser);
        this.obserList = this.obserList.slice();
    };
    ObservacionSyncComponent.prototype.borrarObservacion = function (observ, indice, emitEvent) {
        var inspHash = observ['hash'];
        _com_utils_util__WEBPACK_IMPORTED_MODULE_1__["asyncLocalStorage"].removeItem(inspHash);
        this.obserList.splice(indice, 1);
        this.obserList = this.obserList.slice();
        if (emitEvent)
            this.onEvent.emit({ type: 'onLocalRemove', count: this.obserList.length, inspeccion: observ });
        _com_utils_util__WEBPACK_IMPORTED_MODULE_1__["asyncLocalStorage"].getItem('observaciones').then(function (resp) {
            if (resp.length <= 1) {
                _com_utils_util__WEBPACK_IMPORTED_MODULE_1__["asyncLocalStorage"].removeItem('observaciones');
            }
            else {
                for (var i = 0; i < resp.length; i++) {
                    if (resp[i] == inspHash) {
                        resp.splice(i, 1);
                        break;
                    }
                }
                _com_utils_util__WEBPACK_IMPORTED_MODULE_1__["asyncLocalStorage"].setItem('observaciones', JSON.stringify(resp));
            }
        });
    };
    ObservacionSyncComponent.prototype.presentAlertConfirm = function (obser, index) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Eliminar observación?',
                            message: 'Esto borrará de su entorno local la observación y no podrá sincronizarla. ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () {
                                        _this.borrarObservacion(obser, index, true);
                                        _this.msgService.showMessage({ tipoMensaje: 'info', mensaje: 'Observación eliminada de entorno local', detalle: '' });
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
    ObservacionSyncComponent.prototype.sincronizar = function (obser, indice) {
        var _this = this;
        this.obserService.create(obser).then(function (obsResp) {
            if (obser['imagenes'] != null) {
                for (var i = 0; i < obser['imagenes'].length; i++) {
                    var img = obser['imagenes'][i];
                    if (img != null)
                        _com_utils_util__WEBPACK_IMPORTED_MODULE_1__["Util"].dataURLtoFile(img, 'img_' + i + '_obs_' + obsResp['id'] + '.jpeg').then(function (file) {
                            return _this.dirService.upload(file, null, 'AUC', obsResp['id']);
                        });
                }
            }
            _this.borrarObservacion(obser, indice);
            _this.msgService.showMessage({
                tipoMensaje: 'success',
                mensaje: 'Observación sincronizada',
                detalle: 'La observación ha sido sincronizada correctamente'
            });
            _this.onEvent.emit({ type: 'onSync', observacion: obsResp, count: _this.obserList.length });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onEvent'),
        __metadata("design:type", Object)
    ], ObservacionSyncComponent.prototype, "onEvent", void 0);
    ObservacionSyncComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-observacionSync',
            template: __webpack_require__(/*! ./observacion-sync.component.html */ "./src/app/modulos/auc/components/observaciones-sync/observacion-sync.component.html"),
            providers: [_services_observacion_service__WEBPACK_IMPORTED_MODULE_5__["ObservacionService"]],
            styles: [__webpack_require__(/*! ./observacion-sync.component.scss */ "./src/app/modulos/auc/components/observaciones-sync/observacion-sync.component.scss")]
        }),
        __metadata("design:paramtypes", [_com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_2__["MensajeUsuarioService"],
            _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_3__["DirectorioService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _services_observacion_service__WEBPACK_IMPORTED_MODULE_5__["ObservacionService"]])
    ], ObservacionSyncComponent);
    return ObservacionSyncComponent;
}());



/***/ }),

/***/ "./src/app/modulos/auc/entities/observacion.ts":
/*!*****************************************************!*\
  !*** ./src/app/modulos/auc/entities/observacion.ts ***!
  \*****************************************************/
/*! exports provided: Observacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observacion", function() { return Observacion; });
var Observacion = /** @class */ (function () {
    function Observacion() {
    }
    return Observacion;
}());



/***/ }),

/***/ "./src/app/modulos/auc/entities/tarjeta.ts":
/*!*************************************************!*\
  !*** ./src/app/modulos/auc/entities/tarjeta.ts ***!
  \*************************************************/
/*! exports provided: Tarjeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tarjeta", function() { return Tarjeta; });
var Tarjeta = /** @class */ (function () {
    function Tarjeta() {
    }
    return Tarjeta;
}());



/***/ }),

/***/ "./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ReporteObservacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteObservacionPageModule", function() { return ReporteObservacionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reporte_observacion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporte-observacion.page */ "./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.page.ts");
/* harmony import */ var _components_observacion_form_observacion_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/observacion-form/observacion-form.component */ "./src/app/modulos/auc/components/observacion-form/observacion-form.component.ts");
/* harmony import */ var _com_components_tree_tree_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../com/components/tree/tree.component */ "./src/app/modulos/com/components/tree/tree.component.ts");
/* harmony import */ var _com_comun_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../com/comun.module */ "./src/app/modulos/com/comun.module.ts");
/* harmony import */ var _components_observaciones_sync_observacion_sync_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/observaciones-sync/observacion-sync.component */ "./src/app/modulos/auc/components/observaciones-sync/observacion-sync.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _reporte_observacion_page__WEBPACK_IMPORTED_MODULE_5__["ReporteObservacionPage"]
    }
];
var ReporteObservacionPageModule = /** @class */ (function () {
    function ReporteObservacionPageModule() {
    }
    ReporteObservacionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _com_comun_module__WEBPACK_IMPORTED_MODULE_8__["ComunModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _com_components_tree_tree_component__WEBPACK_IMPORTED_MODULE_7__["TreeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_com_comun_module__WEBPACK_IMPORTED_MODULE_8__["ComunModule"]],
            entryComponents: [_components_observacion_form_observacion_form_component__WEBPACK_IMPORTED_MODULE_6__["ObservacionFormComponent"]],
            declarations: [_reporte_observacion_page__WEBPACK_IMPORTED_MODULE_5__["ReporteObservacionPage"], _components_observacion_form_observacion_form_component__WEBPACK_IMPORTED_MODULE_6__["ObservacionFormComponent"], _components_observaciones_sync_observacion_sync_component__WEBPACK_IMPORTED_MODULE_9__["ObservacionSyncComponent"]]
        })
    ], ReporteObservacionPageModule);
    return ReporteObservacionPageModule;
}());



/***/ }),

/***/ "./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.page.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navegar('/app/home')\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{nombreAuc}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"tarjeta\">\n    <ion-segment-button value=\"tarjeta\">\n      <ion-label>Tarjetas</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"observ\">\n      <ion-label>\n        Sincronizar\n        <ion-badge *ngIf=\"obsCount > 0\" color=\"warning\">{{obsCount}}</ion-badge>\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-spinner class=\"main-spinner\" name=\"dots\" *ngIf=\"loading == true\" color=\"primary\"></ion-spinner>\n\n  <sm-observacionSync [style.display]=\"segments['observ'] ? 'block':'none'\" #obserSyncComp (onEvent)=\"onEvent($event)\"></sm-observacionSync>\n\n  <div *ngIf=\"loading == false\" [style.display]=\"segments['tarjeta'] ? 'block':'none'\">\n    <ion-card *ngFor=\"let tarjeta of tarjetaList\">\n      <ion-item>\n        <ion-label>{{tarjeta.nombre}}</ion-label>\n        <ion-button fill=\"outline\" slot=\"end\" (click)=\"onTarjetaSelect(tarjeta)\" *sTienePermiso=\"['EMP_GET_AREA', 'SEC_GET_SCRDEF']\">Registrar</ion-button>\n      </ion-item>\n      <ion-card-content>\n        <p>{{tarjeta.codigo}} </p>\n        <p>{{tarjeta.descripcion}} </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvYXVjL3BhZ2VzL3JlcG9ydGUtb2JzZXJ2YWNpb24vcmVwb3J0ZS1vYnNlcnZhY2lvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ReporteObservacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteObservacionPage", function() { return ReporteObservacionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_observacion_form_observacion_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/observacion-form/observacion-form.component */ "./src/app/modulos/auc/components/observacion-form/observacion-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _components_observaciones_sync_observacion_sync_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/observaciones-sync/observacion-sync.component */ "./src/app/modulos/auc/components/observaciones-sync/observacion-sync.component.ts");
/* harmony import */ var _com_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../com/services/sesion.service */ "./src/app/modulos/com/services/sesion.service.ts");
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







var ReporteObservacionPage = /** @class */ (function () {
    function ReporteObservacionPage(sesionService, offlineService, modalController, router) {
        this.sesionService = sesionService;
        this.offlineService = offlineService;
        this.modalController = modalController;
        this.router = router;
        this.segments = { 'tarjeta': true, 'observ': false };
        this.obsCount = 0;
        this.loading = true;
    }
    ReporteObservacionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.nombreAuc = this.sesionService.getConfigParam('NOMB_MOD_AUC');
        this.offlineService.queryTarjetaObservacion()
            .then(function (resp) {
            _this.tarjetaList = resp;
            _this.loading = false;
        })
            .catch(function (err) { return _this.loading = null; });
    };
    ReporteObservacionPage.prototype.onTarjetaSelect = function (tarjeta) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_observacion_form_observacion_form_component__WEBPACK_IMPORTED_MODULE_2__["ObservacionFormComponent"],
                            componentProps: { value: tarjeta },
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
    ReporteObservacionPage.prototype.onModalDismiss = function (obser) {
        if (obser != null && obser.id == null) {
            this.obsCount += 1;
            this.obserSyncComp.adicionarObservacion(obser);
        }
    };
    ReporteObservacionPage.prototype.onEvent = function (event) {
        this.obsCount = event.count;
    };
    ReporteObservacionPage.prototype.navegar = function (url) {
        this.router.navigate([url]);
    };
    ReporteObservacionPage.prototype.segmentChanged = function (event) {
        for (var seg in this.segments) {
            this.segments[seg] = false;
            if (event.detail.value == seg)
                this.segments[seg] = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('obserSyncComp'),
        __metadata("design:type", _components_observaciones_sync_observacion_sync_component__WEBPACK_IMPORTED_MODULE_5__["ObservacionSyncComponent"])
    ], ReporteObservacionPage.prototype, "obserSyncComp", void 0);
    ReporteObservacionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-reporteObservacion',
            template: __webpack_require__(/*! ./reporte-observacion.page.html */ "./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.page.html"),
            styles: [__webpack_require__(/*! ./reporte-observacion.page.scss */ "./src/app/modulos/auc/pages/reporte-observacion/reporte-observacion.page.scss")]
        }),
        __metadata("design:paramtypes", [_com_services_sesion_service__WEBPACK_IMPORTED_MODULE_6__["SesionService"],
            _com_services_offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ReporteObservacionPage);
    return ReporteObservacionPage;
}());



/***/ }),

/***/ "./src/app/modulos/auc/services/observacion.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/modulos/auc/services/observacion.service.ts ***!
  \*************************************************************/
/*! exports provided: ObservacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservacionService", function() { return ObservacionService; });
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


var ObservacionService = /** @class */ (function (_super) {
    __extends(ObservacionService, _super);
    function ObservacionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObservacionService.prototype.getClassName = function () {
        return "ObservacionService";
    };
    ObservacionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ObservacionService);
    return ObservacionService;
}(_com_services_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["ServiceCRUD"]));



/***/ })

}]);
//# sourceMappingURL=modulos-auc-pages-reporte-observacion-reporte-observacion-module.js.map