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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      SIGESS\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item (click)=\"navegar('/app/inp/elaboracionInspeccion')\" *sTienePermiso=\"['INP']\">\n    <ion-thumbnail slot=\"start\">\n      <div class=\"icon icon-inp\"></div>\n    </ion-thumbnail>\n    <ion-label>Inspecciones</ion-label>\n  </ion-item>\n\n  <ion-item (click)=\"navegar('/app/auc/reporteObservacion')\" *sTienePermiso=\"['AUC']\">\n    <ion-thumbnail slot=\"start\">\n      <div class=\"icon icon-auc\"></div>\n    </ion-thumbnail>\n    <ion-label>{{nombreAuc}}</ion-label>\n  </ion-item>\n\n  <ion-item (click)=\"navegar('/app/cop/consultaActas')\" *sTienePermiso=\"['COP']\">\n    <ion-thumbnail slot=\"start\">\n      <div class=\"icon icon-cop\"></div>\n    </ion-thumbnail>\n    <ion-label>COPASST</ion-label>\n  </ion-item>\n\n  <ion-item (click)=\"navegar('/app/sec/secInicio')\" *sTienePermiso=\"['SEC']\">\n    <ion-thumbnail slot=\"start\">\n      <div class=\"icon icon-sec\"></div>\n    </ion-thumbnail>\n    <ion-label>Seguimiento y control</ion-label>\n  </ion-item>\n\n  <ion-item (click)=\"navegar('/app/ind/consultaTablero')\"  *sTienePermiso=\"['IND']\">\n    <ion-thumbnail slot=\"start\">\n      <div class=\"icon icon-ind\"></div>\n    </ion-thumbnail>\n    <ion-label>Indicadores</ion-label>\n  </ion-item>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  background-size: 30px 30px;\n  background-repeat: no-repeat;\n  padding-top: 2px;\n  padding-bottom: 5px;\n  width: 56px;\n  height: 56px;\n  background-position: center center; }\n\n.icon-adm {\n  background-image: url(\"/assets/images/adm.svg\"); }\n\n.icon-emp {\n  background-image: url(\"/assets/images/emp.svg\"); }\n\n.icon-inp {\n  background-image: url(\"/assets/images/inp.svg\"); }\n\n.icon-aue {\n  background-image: url(\"/assets/images/aue.svg\"); }\n\n.icon-sec {\n  background-image: url(\"/assets/images/sec.svg\"); }\n\n.icon-auc {\n  background-image: url(\"/assets/images/auc.svg\"); }\n\n.icon-rai {\n  background-image: url(\"/assets/images/rai.svg\"); }\n\n.icon-ado {\n  background-image: url(\"/assets/images/ado.svg\"); }\n\n.icon-aus {\n  background-image: url(\"/assets/images/aus.svg\"); }\n\n.icon-ind {\n  background-image: url(\"/assets/images/ind.svg\"); }\n\n.icon-ipr {\n  background-image: url(\"/assets/images/ipr.svg\"); }\n\n.icon-ctr {\n  background-image: url(\"/assets/images/ctr.svg\"); }\n\n.icon-cop {\n  background-image: url(\"/assets/images/cop.svg\"); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9EQVRBL2Rldi9zaWdlc3MvZnJvbnRlbmQvc2lnZXNzX2FwcC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0MsRUFBQTs7QUFFcEM7RUFDRSwrQ0FBK0MsRUFBQTs7QUFFakQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDSSwrQ0FBK0MsRUFBQTs7QUFFbkQ7RUFDRSwrQ0FBK0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pY29ue1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB9XG4gIC5pY29uLWFkbXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2FkbS5zdmcnKTtcbiAgfVxuICAuaWNvbi1lbXB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2VtcC5zdmcnKTtcbiAgfVxuICAuaWNvbi1pbnB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lucC5zdmcnKTtcbiAgfVxuICAuaWNvbi1hdWV7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2F1ZS5zdmcnKTtcbiAgfVxuICAuaWNvbi1zZWN7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlYy5zdmcnKTtcbiAgfVxuICAuaWNvbi1hdWN7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2F1Yy5zdmcnKTtcbiAgfVxuICAuaWNvbi1yYWl7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3JhaS5zdmcnKTtcbiAgfVxuICAuaWNvbi1hZG97XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fkby5zdmcnKTtcbiAgfVxuICAuaWNvbi1hdXN7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2F1cy5zdmcnKTtcbiAgfVxuICAuaWNvbi1pbmR7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2luZC5zdmcnKTtcbiAgfVxuICAuaWNvbi1pcHJ7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2lwci5zdmcnKTtcbiAgfVxuICAuaWNvbi1jdHJ7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2N0ci5zdmcnKTtcbiAgfVxuICAuaWNvbi1jb3B7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jb3Auc3ZnJyk7XG4gIH0iXX0= */"

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
    function HomePage(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.nombreAuc = this.sessionService.getConfigParam('NOMB_MOD_AUC');
    }
    HomePage.prototype.navegar = function (url) {
        this.router.navigate([url]);
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_modulos_com_services_sesion_service__WEBPACK_IMPORTED_MODULE_2__["SesionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map