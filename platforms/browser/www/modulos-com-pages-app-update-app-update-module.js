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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"navegar('/app/home')\">\n                <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Actualizar App</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n   \n\n\n</ion-content>"

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
    function AppUpdatePage() {
    }
    AppUpdatePage.prototype.ngOnInit = function () {
    };
    AppUpdatePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-appUpdae',
            template: __webpack_require__(/*! ./app-update.page.html */ "./src/app/modulos/com/pages/app-update/app-update.page.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./app-update.page.scss */ "./src/app/modulos/com/pages/app-update/app-update.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppUpdatePage);
    return AppUpdatePage;
}());



/***/ })

}]);
//# sourceMappingURL=modulos-com-pages-app-update-app-update-module.js.map