(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _modulos_com_comun_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modulos/com/comun.module */ "./src/app/modulos/com/comun.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _modulos_com_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            exports: [_modulos_com_comun_module__WEBPACK_IMPORTED_MODULE_6__["ComunModule"]],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      SIGESS\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item button (click)=\"navegar('/app/inp/elaboracionInspeccion')\" *sTienePermiso=\"['INP']\">\r\n    <ion-icon slot=\"start\" src=\"/assets/images/inp.svg\" class=\"nostroke\"></ion-icon>\r\n    <ion-label>{{nombreInp}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item button (click)=\"navegar('/app/auc/reporteObservacion')\" *sTienePermiso=\"['AUC']\">\r\n    <ion-icon slot=\"start\" src=\"/assets/images/auc.svg\" class=\"nostroke\"></ion-icon>\r\n    <ion-label>{{nombreAuc}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item button (click)=\"navegar('/app/cop/consultaActas')\" *sTienePermiso=\"['COP']\">\r\n    <ion-icon slot=\"start\" src=\"/assets/images/cop.svg\" class=\"nostroke\"></ion-icon>\r\n    <ion-label>{{nombreCop}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item button (click)=\"navegar('/app/sec/secInicio')\" *sTienePermiso=\"['SEC']\">\r\n    <ion-icon slot=\"start\" src=\"/assets/images/sec.svg\" class=\"nostroke\"></ion-icon>\r\n    <ion-label>{{nombreSec}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item button (click)=\"navegar('/app/ind/consultaTablero')\" *sTienePermiso=\"['IND']\">\r\n    <ion-icon slot=\"start\" src=\"/assets/images/ind.svg\" class=\"nostroke\"></ion-icon>\r\n    <ion-label>{{nombreInd}}</ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item button (click)=\"navegar('/app/ayuda')\" *sTienePermiso=\"['CONF_GET_MANUSR']\">\r\n    <ion-icon slot=\"start\" name=\"help\"></ion-icon>\r\n    <ion-label>Ayuda</ion-label>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n\r\n<ion-footer color=\"light\">\r\n  <ion-item button (click)=\"actualizar()\" *ngIf=\"versionDisponible != version\">\r\n    <ion-icon slot=\"start\" name=\"arrow-round-up\" color=\"primary\"></ion-icon>\r\n    <div style=\"width: 100%;font-size: 14px;\">\r\n      <p style=\"float: left;color:#3ba2dc\">Versión {{versionDisponible}} disponible</p>\r\n      <p style=\"float: right;color:#aaa;\">v{{version}}</p>\r\n    </div>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"versionDisponible == version\">\r\n    <div style=\"width: 100%;font-size: 14px;\">\r\n      <p style=\"float: right;color:#aaa;\">v{{version}}</p>\r\n    </div>\r\n  </ion-item>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modulos_com_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modulos/com/services/sesion.service */ "./src/app/modulos/com/services/sesion.service.ts");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var _modulos_com_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modulos/com/services/auth.service */ "./src/app/modulos/com/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(authService, sessionService, router, market) {
        var _this = this;
        this.authService = authService;
        this.sessionService = sessionService;
        this.router = router;
        this.market = market;
        this.nombreInp = this.sessionService.getConfigParam('NOMB_MOD_INP');
        this.nombreAuc = this.sessionService.getConfigParam('NOMB_MOD_AUC');
        this.nombreCop = this.sessionService.getConfigParam('NOMB_MOD_COP');
        this.nombreSec = this.sessionService.getConfigParam('NOMB_MOD_SEC');
        this.nombreInd = this.sessionService.getConfigParam('NOMB_MOD_IND');
        this.authService.consultarUpdateDisponible()
            .then(function (resp) {
            _this.version = resp['versionActual'];
            _this.versionDisponible = resp['versionDisponible'];
        });
    }
    HomePage.prototype.navegar = function (url) {
        this.router.navigate([url]);
    };
    HomePage.prototype.actualizar = function () {
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
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            providers: [_ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_3__["Market"]],
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_modulos_com_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _modulos_com_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__["SesionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_3__["Market"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map