(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-cop-pages-consulta-actas-consulta-actas-module"],{

/***/ "./src/app/modulos/cop/components/acta-form/acta-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modulos/cop/components/acta-form/acta-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"salir()\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Acta</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <div *ngIf=\"guardando == true\" style=\"width: 320px; margin:auto; text-align: center;\">\r\n        <h6>Guardando acta, por favor espere...</h6>\r\n        <ion-spinner class=\"main-spinner\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n    </div>\r\n\r\n    <div [style.display]=\"guardando != true ? 'block':'none'\">\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Nombre del acta*</ion-label>\r\n            <p style=\"width: 100%\" *ngIf=\"esConsulta\">{{nombre}}</p>\r\n            <ion-input *ngIf=\"!esConsulta\" maxlength=\"126\" [(ngModel)]=\"nombre\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label position=\"stacked\">Descripcion</ion-label>\r\n            <p style=\"width: 100%\" *ngIf=\"esConsulta\">{{descripcion}}</p>\r\n            <ion-textarea *ngIf=\"!esConsulta\" maxlength=\"510\" [(ngModel)]=\"descripcion\"></ion-textarea>\r\n        </ion-item>\r\n        <!-- <ion-item>\r\n            <ion-label position=\"stacked\">Area*</ion-label>\r\n            <p style=\"width: 100%\" *ngIf=\"esConsulta\">{{area.nombre}}</p>\r\n\r\n            <div *ngIf=\"loading == true\">\r\n                <ion-spinner slot=\"end\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n            </div>\r\n            <div *ngIf=\"areasCargadas == false\">\r\n                <p style=\"color:#888;padding:25px\">\r\n                    No fue posible cargar el listado\r\n                    <a *ngIf=\"areasCargadas == false\" (click)=\"cargarAreas()\">Reintentar</a>\r\n                </p>\r\n            </div>\r\n            <ion-select [(ngModel)]=\"area\" [disabled]=\"esConsulta\" *ngIf=\"!esConsulta && areasCargadas == true\">\r\n                <ion-select-option *ngFor=\"let area of areasList\" [value]=\"area\" compareWith=\"id\">{{area.nombre}}</ion-select-option>\r\n            </ion-select>\r\n\r\n        </ion-item> -->\r\n\r\n        <sm-areaSelector [areas]=\"areasList\" [(ngModel)]=\"area\" [disabled]=\"esConsulta\" appendTo=\"ion-modal\"></sm-areaSelector>\r\n\r\n        <input type=\"file\" #fileChooser (change)=\"onFileSelect(fileChooser.files)\" style=\"display: none;\" />\r\n\r\n        <ion-button expand=\"full\" (click)=\"openFileChooser()\" *ngIf=\"!esConsulta\">\r\n            <ion-icon name=\"document\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button expand=\"full\" (click)=\"getPicture()\" *ngIf=\"!esConsulta\">\r\n            <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-button>\r\n\r\n        <ion-item *ngFor=\"let doc of archivosList;let idx = index\">\r\n            <ion-icon slot=\"start\" name=\"images\" *ngIf=\"doc.ext == 'jpg' || doc.ext == 'jpeg' || doc.ext == 'png'\"></ion-icon>\r\n            <ion-icon slot=\"start\" name=\"document\" *ngIf=\"doc.ext != 'jpg' && doc.ext != 'jpeg' && doc.ext != 'png'\"></ion-icon>\r\n\r\n            <ion-input [(ngModel)]=\"doc.alias\" *ngIf=\"!esConsulta\"></ion-input>\r\n            <p style=\"width: 100%\" *ngIf=\"esConsulta\">{{doc.alias}}</p>\r\n\r\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"visualizar(doc)\">\r\n                <ion-icon name=\"eye\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button slot=\"end\" fill=\"clear\" (click)=\"removerDoc(doc, idx)\" *ngIf=\"!esConsulta\" color=\"medium\">\r\n                <ion-icon name=\"close\"></ion-icon>\r\n            </ion-button>\r\n        </ion-item>\r\n    </div>\r\n\r\n    <div style=\"height: 150px;\"></div>\r\n    <ion-fab *ngIf=\"!guardando && !esConsulta\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button (click)=\"guardarActa()\" [disabled]=\"nombre == null || area == null\">\r\n            <ion-icon name=\"save\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/cop/components/acta-form/acta-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modulos/cop/components/acta-form/acta-form.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY29wL2NvbXBvbmVudHMvYWN0YS1mb3JtL2FjdGEtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modulos/cop/components/acta-form/acta-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modulos/cop/components/acta-form/acta-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: ActaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActaFormComponent", function() { return ActaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _entities_acta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../entities/acta */ "./src/app/modulos/cop/entities/acta.ts");
/* harmony import */ var _com_utils_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../com/utils/util */ "./src/app/modulos/com/utils/util.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
/* harmony import */ var _services_acta_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/acta.service */ "./src/app/modulos/cop/services/acta.service.ts");
/* harmony import */ var _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ado/services/directorio.service */ "./src/app/modulos/ado/services/directorio.service.ts");
/* harmony import */ var _com_services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../com/services/storage.service */ "./src/app/modulos/com/services/storage.service.ts");
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












var ActaFormComponent = /** @class */ (function () {
    function ActaFormComponent(loadingController, storageService, dirService, actaService, msgService, camera, file, offlineService, alertController, modalController, fileOpener) {
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.dirService = dirService;
        this.actaService = actaService;
        this.msgService = msgService;
        this.camera = camera;
        this.file = file;
        this.offlineService = offlineService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.fileOpener = fileOpener;
        this.options = {
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 960,
            targetHeight: 960,
        };
    }
    ActaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalController.getTop()
            .then(function (data) {
            if (data.componentProps != null) {
                var acta = data.componentProps.value;
                _this.esConsulta = true;
                _this.nombre = acta.nombre;
                _this.descripcion = acta.descripcion;
                _this.area = acta.area;
                acta.documentosList.forEach(function (doc) {
                    if (_this.archivosList == null)
                        _this.archivosList = [];
                    var arch = {
                        nombre: doc.nombre,
                        ext: _com_utils_util__WEBPACK_IMPORTED_MODULE_4__["Util"].getExtension(doc.nombre),
                        url: null,
                        fechaCreacion: null,
                        alias: doc.nombre
                    };
                    arch['docId'] = doc.id;
                    _this.archivosList.push(arch);
                });
            }
            else {
                // this.cargarAreas();
            }
        });
    };
    // cargarAreas() {
    //   this.loading = true;
    //   this.areasCargadas = null;
    //   this.offlineService.queryArea()
    //     .then(resp => {
    //       this.areasList = <any>resp['data'];
    //       this.loading = false;
    //       this.areasCargadas = true;
    //     })
    //     .catch(err => {
    //       this.loading = false;
    //       this.areasCargadas = false;
    //     });
    // }
    ActaFormComponent.prototype.salir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.esConsulta) {
                            this.modalController.dismiss();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.alertController.create({
                                header: '¿Desea salir?',
                                message: 'El acta no ha sido guardada, los datos serán descartados. ¿Confirma esta acción?',
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
    /* ********************** DOCUMENTOS ****************************** */
    ActaFormComponent.prototype.openFileChooser = function () {
        this.fileChooser.nativeElement.click();
    };
    ActaFormComponent.prototype.onFileSelect = function (file) {
        var _this = this;
        _com_utils_util__WEBPACK_IMPORTED_MODULE_4__["Util"].readBlobFile(file.item(0)).then(function (blob) {
            var f = _com_utils_util__WEBPACK_IMPORTED_MODULE_4__["Util"].blobToFile(blob, file.item(0).name);
            _this.guardarArchivoLocal(f, f.name);
        });
    };
    ActaFormComponent.prototype.getPicture = function () {
        var _this = this;
        this.camera.getPicture(this.options)
            .then(function (imageData) {
            var pathFile = imageData;
            var lastIndex = pathFile.lastIndexOf("/");
            var fileName = pathFile.substring(lastIndex + 1, pathFile.length);
            var url = window.Ionic.WebView.convertFileSrc(imageData);
            _com_utils_util__WEBPACK_IMPORTED_MODULE_4__["Util"].dataURLtoFile(url, fileName).then(function (file) { return _this.guardarArchivoLocal(file, fileName); });
        });
    };
    ActaFormComponent.prototype.guardarArchivoLocal = function (fileParam, fileName) {
        var _this = this;
        var dirPath = this.file.dataDirectory;
        this.file.writeFile(dirPath, fileName, fileParam, { replace: true })
            .then(function (fileEntry) {
            var fe = fileEntry;
            var dir = {
                nombre: fileName,
                fechaCreacion: new Date(),
                ext: _com_utils_util__WEBPACK_IMPORTED_MODULE_4__["Util"].getExtension(fileName),
                url: window.Ionic.WebView.convertFileSrc(fe.nativeURL),
                alias: fileName.split(".")[0]
            };
            if (_this.archivosList == null) {
                _this.archivosList = [];
            }
            _this.archivosList.unshift(dir);
        });
    };
    ActaFormComponent.prototype.visualizar = function (doc) {
        var _this = this;
        var filePath = this.file.dataDirectory;
        this.file.checkFile(filePath, doc.nombre)
            .then(function (exist) {
            return _this.file.resolveDirectoryUrl(filePath);
        })
            .then(function (dirEntry) {
            return _this.file.getFile(dirEntry, doc.nombre, null);
        })
            .then(function (fileEntry) {
            return fileEntry.file(function (fp) { return _this.openFile(fileEntry, fp.type); });
        })
            .catch(function (err) {
            _this.downloadFile(doc['docId'], filePath, doc.nombre);
        });
    };
    ActaFormComponent.prototype.removerDoc = function (doc, index) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¿Retirar documento?',
                            message: 'El documento ' + doc.alias + ' será retirado. ¿Confirma esta acción?',
                            buttons: [{
                                    text: 'Si',
                                    handler: function () {
                                        var dirPath = _this.file.dataDirectory;
                                        _this.archivosList.splice(index, 1);
                                        _this.file.removeFile(dirPath, doc.nombre);
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
    ActaFormComponent.prototype.downloadFile = function (idDocumento, workingPath, fileName) {
        var _this = this;
        var loading = this.showLoading('Descargando archivo...');
        this.dirService.download(idDocumento, 'cop')
            .then(function (resp) {
            var blob = new Blob([resp]);
            return _this.file.writeFile(workingPath, fileName, blob, { replace: true });
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
    ActaFormComponent.prototype.openFile = function (fileEntry, type) {
        var _this = this;
        this.fileOpener.open(fileEntry.toURL(), type).catch(function (err) { return _this.msgService.showMessage({
            tipoMensaje: 'info', mensaje: 'No ha sido posible visualizar el archivo',
            detalle: "No existe una aplicacion para abrir " + fileEntry.name + "."
        }); });
    };
    ActaFormComponent.prototype.showLoading = function (msg) {
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
    /*************** PERSISTENCIA ************* */
    ActaFormComponent.prototype.guardarActa = function () {
        var _this = this;
        var acta = new _entities_acta__WEBPACK_IMPORTED_MODULE_3__["Acta"]();
        acta.nombre = this.nombre;
        acta.descripcion = this.descripcion;
        acta.area = this.area;
        this.guardando = true;
        this.persistirActa(acta)
            .then(function (acta) {
            _this.guardando = false;
            _this.modalController.dismiss(acta).then(function (resp) { return _this.msgService.showMessage({
                tipoMensaje: 'success',
                mensaje: 'ACTA REGISTRADA',
                detalle: 'Se ha registrado correctamente el acta'
            }); });
        })
            .catch(function (err) {
            _this.guardando = false;
        });
    };
    ActaFormComponent.prototype.persistirActa = function (acta) {
        var _this = this;
        if (this.offlineService.getOfflineMode()) {
            return new Promise(function (resolve, reject) {
                acta['documentos'] = _this.archivosList;
                acta.fechaElaboracion = new Date();
                acta['hashId'] = acta.fechaElaboracion.toISOString();
                _this.storageService.guardarSyncActaCopasst(acta)
                    .then(function () {
                    resolve(acta);
                });
            });
        }
        else {
            return this.actaService.subirActa(acta, this.archivosList);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileChooser'),
        __metadata("design:type", HTMLInputElement)
    ], ActaFormComponent.prototype, "fileChooser", void 0);
    ActaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-actaForm',
            template: __webpack_require__(/*! ./acta-form.component.html */ "./src/app/modulos/cop/components/acta-form/acta-form.component.html"),
            providers: [_ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"]],
            styles: [__webpack_require__(/*! ./acta-form.component.scss */ "./src/app/modulos/cop/components/acta-form/acta-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _com_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
            _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_10__["DirectorioService"],
            _services_acta_service__WEBPACK_IMPORTED_MODULE_9__["ActaService"],
            _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_8__["MensajeUsuarioService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"],
            _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__["OfflineService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__["FileOpener"]])
    ], ActaFormComponent);
    return ActaFormComponent;
}());



/***/ }),

/***/ "./src/app/modulos/cop/entities/acta.ts":
/*!**********************************************!*\
  !*** ./src/app/modulos/cop/entities/acta.ts ***!
  \**********************************************/
/*! exports provided: Acta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Acta", function() { return Acta; });
var Acta = /** @class */ (function () {
    function Acta() {
    }
    return Acta;
}());



/***/ }),

/***/ "./src/app/modulos/cop/pages/consulta-actas/consulta-actas.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modulos/cop/pages/consulta-actas/consulta-actas.module.ts ***!
  \***************************************************************************/
/*! exports provided: ConsultaActasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaActasPageModule", function() { return ConsultaActasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consulta_actas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consulta-actas.page */ "./src/app/modulos/cop/pages/consulta-actas/consulta-actas.page.ts");
/* harmony import */ var _components_acta_form_acta_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/acta-form/acta-form.component */ "./src/app/modulos/cop/components/acta-form/acta-form.component.ts");
/* harmony import */ var _com_components_area_selector_area_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../com/components/area-selector/area-selector.component */ "./src/app/modulos/com/components/area-selector/area-selector.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _consulta_actas_page__WEBPACK_IMPORTED_MODULE_5__["ConsultaActasPage"]
    }
];
var ConsultaActasPageModule = /** @class */ (function () {
    function ConsultaActasPageModule() {
    }
    ConsultaActasPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _com_components_area_selector_area_selector_component__WEBPACK_IMPORTED_MODULE_7__["AreaSelectorModule"]
            ],
            exports: [],
            entryComponents: [_components_acta_form_acta_form_component__WEBPACK_IMPORTED_MODULE_6__["ActaFormComponent"]],
            declarations: [_consulta_actas_page__WEBPACK_IMPORTED_MODULE_5__["ConsultaActasPage"], _components_acta_form_acta_form_component__WEBPACK_IMPORTED_MODULE_6__["ActaFormComponent"]]
        })
    ], ConsultaActasPageModule);
    return ConsultaActasPageModule;
}());



/***/ }),

/***/ "./src/app/modulos/cop/pages/consulta-actas/consulta-actas.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/modulos/cop/pages/consulta-actas/consulta-actas.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"navegar('/app/home')\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Actas COPASST</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item *ngFor=\"let acta of actasLocales;let idx = index\">\r\n\r\n    <ion-spinner slot=\"end\" *ngIf=\"acta['sync'] == true\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n    <ion-button *ngIf=\"acta['sync'] == null || acta['sync'] == false\" slot=\"end\" fill=\"clear\" (click)=\"sincronizar(acta, idx)\"\r\n      color=\"warning\">\r\n      <ion-icon name=\"cloud-upload\"></ion-icon>\r\n    </ion-button>\r\n\r\n\r\n    <ion-label>\r\n      <h2>{{ acta.nombre }}</h2>\r\n      <h3>{{ acta.area?.nombre }}</h3>\r\n      <p>{{ acta.descripcion }}</p>\r\n      <p>--/--/-- --:--</p>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <div *ngIf=\"loading == true\">\r\n    <ion-spinner class=\"main-spinner\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n  </div>\r\n\r\n  <div *ngIf=\"actasCargadas == false\">\r\n    <p style=\"color:#888;padding:25px\">\r\n      No fue posible cargar las actas.\r\n      <a (click)=\"cargarActas()\">Reintentar</a>\r\n    </p>\r\n  </div>\r\n\r\n  <ion-item *ngFor=\"let acta of actasList\" (click)=\"abrirModal(acta)\">\r\n    <ion-label>\r\n      <h2>{{ acta.nombre }}</h2>\r\n      <h3>{{ acta.area?.nombre }}</h3>\r\n      <p>{{ acta.descripcion }}</p>\r\n      <p>{{ acta.fechaElaboracion | date: 'dd/MM/yyyy HH:mm' }}</p>\r\n    </ion-label>\r\n  </ion-item>\r\n  <div style=\"height: 75px;\"></div>\r\n\r\n  <ion-fab *ngIf=\"loading == false\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button *ngIf=\"visibleAdd\" (click)=\"abrirDlgForm()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/cop/pages/consulta-actas/consulta-actas.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modulos/cop/pages/consulta-actas/consulta-actas.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY29wL3BhZ2VzL2NvbnN1bHRhLWFjdGFzL2NvbnN1bHRhLWFjdGFzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modulos/cop/pages/consulta-actas/consulta-actas.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modulos/cop/pages/consulta-actas/consulta-actas.page.ts ***!
  \*************************************************************************/
/*! exports provided: ConsultaActasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaActasPage", function() { return ConsultaActasPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../com/services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ado/services/directorio.service */ "./src/app/modulos/ado/services/directorio.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_acta_form_acta_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/acta-form/acta-form.component */ "./src/app/modulos/cop/components/acta-form/acta-form.component.ts");
/* harmony import */ var _com_entities_filter_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../com/entities/filter-query */ "./src/app/modulos/com/entities/filter-query.ts");
/* harmony import */ var _com_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../com/services/storage.service */ "./src/app/modulos/com/services/storage.service.ts");
/* harmony import */ var _services_acta_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/acta.service */ "./src/app/modulos/cop/services/acta.service.ts");
/* harmony import */ var _com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../com/services/mensaje-usuario.service */ "./src/app/modulos/com/services/mensaje-usuario.service.ts");
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













var ConsultaActasPage = /** @class */ (function () {
    function ConsultaActasPage(msgService, actaService, storageService, modalController, camera, offlineService, router) {
        this.msgService = msgService;
        this.actaService = actaService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.camera = camera;
        this.offlineService = offlineService;
        this.router = router;
        this.options = {
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 960,
            targetHeight: 960,
        };
    }
    ConsultaActasPage.prototype.ngOnInit = function () {
        var _this = this;
        var permMap = this.offlineService.sessionService.getPermisosMap();
        this.visibleAdd = (permMap['COP_POST_ACT'] != null && permMap['COP_POST_ACT'].valido == true) && (permMap['COP_POST_DOCACT'] != null && permMap['COP_POST_DOCACT'].valido == true);
        this.storageService.getSyncActasCopasst()
            .then(function (resp) {
            _this.actasLocales = resp['data'];
        });
        this.cargarActas();
    };
    ConsultaActasPage.prototype.cargarActas = function () {
        var _this = this;
        this.loading = true;
        this.actasCargadas = null;
        this.offlineService.queryActasCopasst()
            .then(function (resp) {
            _this.actasList = [];
            resp['data'].forEach(function (dto) {
                _this.actasList.push(_com_entities_filter_query__WEBPACK_IMPORTED_MODULE_9__["FilterQuery"].dtoToObject(dto));
            });
            _this.loading = false;
            _this.actasCargadas = true;
        })
            .catch(function (err) {
            _this.loading = false;
            _this.actasCargadas = false;
        });
    };
    ConsultaActasPage.prototype.abrirDlgForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_acta_form_acta_form_component__WEBPACK_IMPORTED_MODULE_8__["ActaFormComponent"],
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
    ConsultaActasPage.prototype.onModalDismiss = function (acta) {
        if (acta == null) {
            return;
        }
        if (acta.id == null) {
            this.actasLocales.unshift(acta);
        }
        else {
            this.actasList.unshift(acta);
        }
    };
    ConsultaActasPage.prototype.abrirModal = function (acta) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _components_acta_form_acta_form_component__WEBPACK_IMPORTED_MODULE_8__["ActaFormComponent"],
                            componentProps: { value: acta },
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ConsultaActasPage.prototype.navegar = function (url) {
        this.router.navigate([url]);
    };
    ConsultaActasPage.prototype.sincronizar = function (acta, idx) {
        var _this = this;
        acta['sync'] = true;
        this.actaService.subirActa(acta, acta['documentos'])
            .then(function (resp) {
            acta['sync'] = false;
            // Retira del listado de actas por sincronizar
            _this.actasLocales.splice(idx, 1);
            _this.storageService.borrarSyncActasCopasst(acta);
            // Adiciona el acta al listado de actas creadas y si está en modo offline la adiciona en el espacio local
            _this.actasList.unshift(resp);
            if (_this.offlineService.getOfflineMode())
                _this.storageService.setActasCopasst([resp]);
            // Despliega mensaje de confirmación
            _this.msgService.showMessage({
                tipoMensaje: 'success', mensaje: 'ACTA SINCRONIZADA',
                detalle: "Se ha sincronizado correctamente el acta  " + acta.nombre
            });
        })
            .catch(function (err) {
            acta['sync'] = false;
        });
    };
    ConsultaActasPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-consultaActas',
            template: __webpack_require__(/*! ./consulta-actas.page.html */ "./src/app/modulos/cop/pages/consulta-actas/consulta-actas.page.html"),
            providers: [
                _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__["OfflineService"],
                _ado_services_directorio_service__WEBPACK_IMPORTED_MODULE_3__["DirectorioService"],
                _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
                _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            ],
            styles: [__webpack_require__(/*! ./consulta-actas.page.scss */ "./src/app/modulos/cop/pages/consulta-actas/consulta-actas.page.scss")]
        }),
        __metadata("design:paramtypes", [_com_services_mensaje_usuario_service__WEBPACK_IMPORTED_MODULE_12__["MensajeUsuarioService"],
            _services_acta_service__WEBPACK_IMPORTED_MODULE_11__["ActaService"],
            _com_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _com_services_offline_service__WEBPACK_IMPORTED_MODULE_2__["OfflineService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ConsultaActasPage);
    return ConsultaActasPage;
}());



/***/ })

}]);
//# sourceMappingURL=modulos-cop-pages-consulta-actas-consulta-actas-module.js.map