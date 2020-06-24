(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-sec-pages-sec-inicio-sec-inicio-module"],{

/***/ "./src/app/modulos/sec/pages/sec-inicio/sec-inicio.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modulos/sec/pages/sec-inicio/sec-inicio.module.ts ***!
  \*******************************************************************/
/*! exports provided: SecInicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecInicioPageModule", function() { return SecInicioPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sec_inicio_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sec-inicio.page */ "./src/app/modulos/sec/pages/sec-inicio/sec-inicio.page.ts");
/* harmony import */ var _com_comun_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../com/comun.module */ "./src/app/modulos/com/comun.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _sec_inicio_page__WEBPACK_IMPORTED_MODULE_5__["SecInicioPage"]
    }
];
var SecInicioPageModule = /** @class */ (function () {
    function SecInicioPageModule() {
    }
    SecInicioPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _com_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [
                _com_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"],
            ],
            providers: [],
            entryComponents: [],
            declarations: [
                _sec_inicio_page__WEBPACK_IMPORTED_MODULE_5__["SecInicioPage"]
            ]
        })
    ], SecInicioPageModule);
    return SecInicioPageModule;
}());



/***/ }),

/***/ "./src/app/modulos/sec/pages/sec-inicio/sec-inicio.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/modulos/sec/pages/sec-inicio/sec-inicio.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"navegar('/app/home')\">\r\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n            </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Seguimiento y control</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-item button (click)=\"navegar('/app/sec/consultaDesviaciones')\" *sTienePermiso=\"['SEC_GET_DESV']\">\r\n        <ion-thumbnail slot=\"start\">\r\n            <div class=\"icon icon-inv-hallazgo\"></div>\r\n        </ion-thumbnail>\r\n        <ion-label>Investigación de desviaciones</ion-label>\r\n    </ion-item>\r\n    <ion-item button (click)=\"navegar('/app/sec/consultaTareas')\" *sTienePermiso=\"['SEC_GET_TAR']\">\r\n        <ion-thumbnail slot=\"start\">\r\n            <div class=\"icon icon-asign-tareas\"></div>\r\n        </ion-thumbnail>\r\n        <ion-label>Actividades asignadas</ion-label>\r\n    </ion-item>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/sec/pages/sec-inicio/sec-inicio.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modulos/sec/pages/sec-inicio/sec-inicio.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3Mvc2VjL3BhZ2VzL3NlYy1pbmljaW8vc2VjLWluaWNpby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modulos/sec/pages/sec-inicio/sec-inicio.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/sec/pages/sec-inicio/sec-inicio.page.ts ***!
  \*****************************************************************/
/*! exports provided: SecInicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecInicioPage", function() { return SecInicioPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecInicioPage = /** @class */ (function () {
    function SecInicioPage(router) {
        this.router = router;
    }
    SecInicioPage.prototype.ngOnInit = function () {
    };
    SecInicioPage.prototype.navegar = function (url) {
        this.router.navigate([url]);
    };
    SecInicioPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-secInicio',
            template: __webpack_require__(/*! ./sec-inicio.page.html */ "./src/app/modulos/sec/pages/sec-inicio/sec-inicio.page.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./sec-inicio.page.scss */ "./src/app/modulos/sec/pages/sec-inicio/sec-inicio.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SecInicioPage);
    return SecInicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=modulos-sec-pages-sec-inicio-sec-inicio-module.js.map