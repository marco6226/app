(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modulos-com-pages-app-update-app-update-module"],{

/***/ "./src/app/modulos/com/pages/app-update/app-update.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modulos/com/pages/app-update/app-update.module.ts ***!
  \*******************************************************************/
/*! exports provided: AppUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUpdatePageModule", function() { return AppUpdatePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_update_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-update.page */ "./src/app/modulos/com/pages/app-update/app-update.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _app_update_page__WEBPACK_IMPORTED_MODULE_5__["AppUpdatePage"]
    }
];
var AppUpdatePageModule = /** @class */ (function () {
    function AppUpdatePageModule() {
    }
    AppUpdatePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [],
            providers: [],
            entryComponents: [],
            declarations: [
                _app_update_page__WEBPACK_IMPORTED_MODULE_5__["AppUpdatePage"]
            ]
        })
    ], AppUpdatePageModule);
    return AppUpdatePageModule;
}());



/***/ }),

/***/ "./src/app/modulos/com/pages/app-update/app-update.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/modulos/com/pages/app-update/app-update.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Actualizar App</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <h2>Existe una nueva versión de la App</h2>\n    <p>Por favor actualiza a la versión más reciente para seguir haciendo uso de la aplicación</p>\n    <p>\n        Si no puedes visualizar el boton de actualizar desde la tienda de aplicaciones, \n        desinstala la aplicación y vuelve a instalarla.\n    </p>\n    <ion-button (click)=\"redireccionar()\">\n        Actualizar\n    </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/modulos/com/pages/app-update/app-update.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modulos/com/pages/app-update/app-update.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY29tL3BhZ2VzL2FwcC11cGRhdGUvYXBwLXVwZGF0ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modulos/com/pages/app-update/app-update.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/com/pages/app-update/app-update.page.ts ***!
  \*****************************************************************/
/*! exports provided: AppUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUpdatePage", function() { return AppUpdatePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/modulos/com/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppUpdatePage = /** @class */ (function () {
    function AppUpdatePage(authService, modalCtrl, market) {
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.market = market;
    }
    AppUpdatePage.prototype.ngOnInit = function () {
        this.authService.logout();
        this.modalCtrl.dismiss();
    };
    AppUpdatePage.prototype.redireccionar = function () {
        var so = localStorage.getItem('plataforma');
        if (so == 'android') {
            this.market.open('co.sigess.app');
        }
        else if (so == 'ios') {
            this.market.open('1473016574');
        }
        else {
            alert("Plataforma no detectada");
        }
    };
    AppUpdatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-appUpdae',
            template: __webpack_require__(/*! ./app-update.page.html */ "./src/app/modulos/com/pages/app-update/app-update.page.html"),
            providers: [_ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_1__["Market"]],
            styles: [__webpack_require__(/*! ./app-update.page.scss */ "./src/app/modulos/com/pages/app-update/app-update.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_1__["Market"]])
    ], AppUpdatePage);
    return AppUpdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=modulos-com-pages-app-update-app-update-module.js.map