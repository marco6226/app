(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modulos-auc-pages-reporte-observacion-reporte-observacion-module~modulos-cop-pages-consulta-~6bf0f5c2"],{

/***/ "./src/app/modulos/com/components/area-selector/area-selector.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/com/components/area-selector/area-selector.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item (click)=\"openModal()\">\r\n  <ion-label position=\"stacked\">Ubicación*</ion-label>\r\n  <p style=\"width: 100%;margin-top: 16px;margin-bottom: 16px;\"  *ngIf=\"areasCargadas == true\">{{value?.nombre}}</p>\r\n\r\n  <div *ngIf=\"loading == true\">\r\n    <ion-spinner slot=\"end\" name=\"dots\" color=\"primary\"></ion-spinner>\r\n  </div>\r\n  <div *ngIf=\"areasCargadas == false\">\r\n    <p style=\"color:#888;\">\r\n      No fue posible cargar el listado\r\n      <a *ngIf=\"areasCargadas == false\" (click)=\"cargarAreas()\">Reintentar</a>\r\n    </p>\r\n  </div>\r\n</ion-item>\r\n\r\n<div id=\"modalNode\" class=\"modal\" [style.display]=\"visibleModal == true ? 'block':'none'\">\r\n  <div class=\"modal-header radio-top-bordes\">\r\n    <ion-searchbar class=\"radio-top-bordes\" placeholder=\"Buscar ubicación\" debounce=\"500\" (ionChange)=\"filtrar($event)\"></ion-searchbar>\r\n  </div>\r\n  <div class=\"modal-container\">\r\n    <sm-tree *ngIf=\"areasFiltradas == null\" [nodes]=\"areas\" field=\"areaList\" label=\"nombre\" [single]=\"true\"></sm-tree>\r\n    <sm-tree *ngIf=\"areasFiltradas != null\" [nodes]=\"areasFiltradas\" field=\"areaList\" label=\"nombre\" [single]=\"true\"></sm-tree>\r\n  </div>\r\n  <div class=\"modal-footer radio-bottom-bordes\">\r\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"aceptar()\">\r\n      Aceptar\r\n    </ion-button>\r\n    <ion-button slot=\"end\" fill=\"clear\" (click)=\"cancelar()\" color=\"medium\">\r\n      Cancelar\r\n    </ion-button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modulos/com/components/area-selector/area-selector.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modulos/com/components/area-selector/area-selector.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  display: block;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #00000077;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1000; }\n\n.modal-container {\n  position: absolute;\n  width: 90%;\n  height: calc(90% - 102px);\n  background-color: #fff;\n  overflow: auto;\n  left: 5%;\n  top: calc(5% + 56px);\n  margin: auto;\n  padding: 10px; }\n\n.modal-header {\n  background-color: #fff;\n  height: 56px;\n  width: 90%;\n  position: absolute;\n  top: 5%;\n  left: 5%;\n  z-index: 100; }\n\n.radio-top-bordes {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n\n.radio-bottom-bordes {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px; }\n\n.modal-footer {\n  background-color: #fff;\n  height: 46px;\n  width: 90%;\n  position: absolute;\n  bottom: 0px;\n  z-index: 100;\n  border-top: solid thin #ccc;\n  bottom: 5%;\n  left: 5%; }\n\n.modal-footer ion-button {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9jb20vY29tcG9uZW50cy9hcmVhLXNlbGVjdG9yL0M6XFxVc2Vyc1xcbGVvbmFyZG9cXERlc2t0b3BcXHdvcmtzXFxhcHAvc3JjXFxhcHBcXG1vZHVsb3NcXGNvbVxcY29tcG9uZW50c1xcYXJlYS1zZWxlY3RvclxcYXJlYS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFFBQVE7RUFDUixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksNEJBQTRCO0VBQzVCLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLCtCQUErQjtFQUMvQixnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFFWiwyQkFBMkI7RUFDM0IsVUFBVTtFQUNWLFFBQVEsRUFBQTs7QUFFWjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY29tL2NvbXBvbmVudHMvYXJlYS1zZWxlY3Rvci9hcmVhLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA3NztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDkwJSAtIDEwMnB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGxlZnQ6IDUlO1xyXG4gICAgdG9wOiBjYWxjKDUlICsgNTZweCk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUlO1xyXG4gICAgbGVmdDogNSU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5yYWRpby10b3AtYm9yZGVze1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5yYWRpby1ib3R0b20tYm9yZGVze1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICNhYWE7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCB0aGluICNjY2M7XHJcbiAgICBib3R0b206IDUlO1xyXG4gICAgbGVmdDogNSU7XHJcbn1cclxuLm1vZGFsLWZvb3RlciBpb24tYnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modulos/com/components/area-selector/area-selector.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modulos/com/components/area-selector/area-selector.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AreaSelectorComponent, AreaSelectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSelectorComponent", function() { return AreaSelectorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSelectorModule", function() { return AreaSelectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _emp_entities_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../emp/entities/area */ "./src/app/modulos/emp/entities/area.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/util */ "./src/app/modulos/com/utils/util.ts");
/* harmony import */ var _services_offline_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/offline.service */ "./src/app/modulos/com/services/offline.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tree/tree.component */ "./src/app/modulos/com/components/tree/tree.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AreaSelectorComponent = /** @class */ (function () {
    function AreaSelectorComponent(offlineService) {
        this.offlineService = offlineService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.propagateChange = function (_) { };
    }
    AreaSelectorComponent_1 = AreaSelectorComponent;
    AreaSelectorComponent.prototype.ngOnInit = function () {
        var modal = document.getElementById("modalNode");
        document.getElementsByTagName(this.appendTo)[0].appendChild(modal);
        this.cargarAreas();
    };
    Object.defineProperty(AreaSelectorComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            if (v !== this._value) {
                this._value = v;
                this.propagateChange(this._value);
            }
        },
        enumerable: true,
        configurable: true
    });
    AreaSelectorComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    AreaSelectorComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AreaSelectorComponent.prototype.registerOnTouched = function () { };
    /* ********************************************* */
    AreaSelectorComponent.prototype.cargarAreas = function () {
        var _this = this;
        this.loading = true;
        this.areasCargadas = null;
        this.offlineService.queryArea()
            .then(function (resp) {
            _this.areas = resp['data'];
            _this.loading = false;
            _this.areasCargadas = true;
        })
            .catch(function (err) {
            _this.loading = false;
            _this.areasCargadas = false;
        });
    };
    AreaSelectorComponent.prototype.openModal = function () {
        if (this.disabled == true || this.areasCargadas == false || this.loading == true) {
            return;
        }
        this.areasFiltradas = null;
        this.visibleModal = true;
        if (this.value != null) {
            this.cargarValor(this.areas, this.value);
        }
    };
    AreaSelectorComponent.prototype.cargarValor = function (areas, areaSelect) {
        var _this = this;
        areas.forEach(function (area) {
            area['selected'] = (area.id == _this.value.id);
            if (area.areaList != null) {
                _this.cargarValor(area.areaList, areaSelect);
            }
        });
    };
    AreaSelectorComponent.prototype.cancelar = function () {
        this.visibleModal = false;
    };
    AreaSelectorComponent.prototype.aceptar = function () {
        var seleccion = [];
        if (this.areasFiltradas != null) {
            _utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getSeleccionArbol('areaList', this.areasFiltradas, seleccion, ['nombre']);
        }
        else {
            _utils_util__WEBPACK_IMPORTED_MODULE_3__["Util"].getSeleccionArbol('areaList', this.areas, seleccion, ['nombre']);
        }
        this.value = seleccion[0];
        this.visibleModal = false;
        this.valueChange.emit(this.value);
    };
    AreaSelectorComponent.prototype.filtrar = function (event) {
        var valor = event.detail.value;
        if (valor != null && valor != "") {
            this.areasFiltradas = [];
            this.busquedaRecursiva(this.areas, valor, this.areasFiltradas);
        }
        else {
            this.areasFiltradas = null;
        }
    };
    AreaSelectorComponent.prototype.busquedaRecursiva = function (arbol, criterio, listado) {
        var _this = this;
        arbol.forEach(function (area) {
            if (area.nombre.toLowerCase().includes(criterio.toLowerCase())) {
                listado.push(area);
            }
            if (area.areaList != null) {
                _this.busquedaRecursiva(area.areaList, criterio, listado);
            }
        });
    };
    var AreaSelectorComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("ngModel"),
        __metadata("design:type", _emp_entities_area__WEBPACK_IMPORTED_MODULE_2__["Area"])
    ], AreaSelectorComponent.prototype, "_value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("ngModelChange"),
        __metadata("design:type", Object)
    ], AreaSelectorComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("appendTo"),
        __metadata("design:type", String)
    ], AreaSelectorComponent.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("disabled"),
        __metadata("design:type", Boolean)
    ], AreaSelectorComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("areas"),
        __metadata("design:type", Array)
    ], AreaSelectorComponent.prototype, "areas", void 0);
    AreaSelectorComponent = AreaSelectorComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-areaSelector',
            template: __webpack_require__(/*! ./area-selector.component.html */ "./src/app/modulos/com/components/area-selector/area-selector.component.html"),
            providers: [
                _services_offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"],
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AreaSelectorComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./area-selector.component.scss */ "./src/app/modulos/com/components/area-selector/area-selector.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"]])
    ], AreaSelectorComponent);
    return AreaSelectorComponent;
}());

var AreaSelectorModule = /** @class */ (function () {
    function AreaSelectorModule() {
    }
    AreaSelectorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _tree_tree_component__WEBPACK_IMPORTED_MODULE_6__["TreeModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"]],
            exports: [AreaSelectorComponent],
            declarations: [AreaSelectorComponent]
        })
    ], AreaSelectorModule);
    return AreaSelectorModule;
}());



/***/ }),

/***/ "./src/app/modulos/com/components/tree/tree.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/com/components/tree/tree.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template ngFor let-node [ngForOf]=\"nodes\" let-i=\"index\">\r\n  <ul>\r\n    <div style=\"display: flex;flex-direction: row;border-bottom: solid thin #ccc;align-items: center;\">\r\n      <div (click)=\"toggle(node)\" *ngIf=\"node[field] && node[field].length > 0\" [ngClass]=\"node['expanded'] ? 'li-icon li-expanded':'li-icon'\"></div>\r\n      <li (click)=\"toggle(node)\">{{node[label]}}</li>\r\n      <div [ngClass]=\"node['selected'] ? 'li-selectable li-selected' : 'li-selectable'\" (click)=\"toggleSelect(node)\">\r\n        <div [ngClass]=\"node['childTouched'] ? 'child-touch' : 'child-untouch'\" class=\"\"></div>\r\n      </div>\r\n    </div>\r\n    <sm-tree *ngIf=\"node[field]\" [nodes]=\"node[field]\" [field]=\"field\" [label]=\"label\" [ngClass]=\"node['expanded'] ? 'ul-expanded ul-init' : 'ul-unexpanded ul-init'\"\r\n      [parent]=\"node\" [single]=\"single\" (onClear)=\"clearSelect()\" [isRoot]=\"false\"></sm-tree>\r\n  </ul>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/modulos/com/components/tree/tree.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modulos/com/components/tree/tree.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ul-init {\n  height: inherit;\n  display: block; }\n\nsm-tree {\n  width: 100%; }\n\nul {\n  padding-left: 15px;\n  list-style-type: none;\n  font-size: 13px; }\n\n.li-icon {\n  background: url(/assets/images/arrow-right.svg) no-repeat;\n  background-position-y: 17px;\n  width: 20px;\n  height: 50px;\n  background-position: center;\n  background-size: 8px;\n  margin-right: 5px; }\n\n.li-expanded {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.li-selectable {\n  width: 35px;\n  height: 30px;\n  border-radius: 50%;\n  border: solid thin #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.li-selected {\n  background: url(/assets/images/check.svg) no-repeat;\n  background-size: 10px;\n  background-position: center; }\n\nli {\n  cursor: pointer;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  width: 100%; }\n\n.ul-unexpanded {\n  height: 0px;\n  display: none; }\n\n.child-touch {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #555;\n  display: block; }\n\n.child-untouch {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxvcy9jb20vY29tcG9uZW50cy90cmVlL0M6XFxVc2Vyc1xcbGVvbmFyZG9cXERlc2t0b3BcXHdvcmtzXFxhcHAvc3JjXFxhcHBcXG1vZHVsb3NcXGNvbVxcY29tcG9uZW50c1xcdHJlZVxcdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR25CO0VBQ0kseURBQTBEO0VBQzFELDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0NBQXdCO1VBQXhCLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG1EQUFtRDtFQUNuRCxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7O0FBSS9CO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFPakI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsb3MvY29tL2NvbXBvbmVudHMvdHJlZS90cmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVsLWluaXR7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuc20tdHJlZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG51bHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmxpLWljb257XHJcbiAgICBiYWNrZ3JvdW5kOiAgdXJsKC9hc3NldHMvaW1hZ2VzL2Fycm93LXJpZ2h0LnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxN3B4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubGktZXhwYW5kZWR7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi5saS1zZWxlY3RhYmxle1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIHRoaW4gI2NjYztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saS1zZWxlY3RlZHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlcy9jaGVjay5zdmcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbmxpe1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udWwtdW5leHBhbmRlZHtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVsLWV4cGFuZGVke1xyXG5cclxufVxyXG5cclxuLmNoaWxkLXRvdWNoe1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG59XHJcbi5jaGlsZC11bnRvdWNoe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modulos/com/components/tree/tree.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modulos/com/components/tree/tree.component.ts ***!
  \***************************************************************/
/*! exports provided: TreeComponent, TreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModule", function() { return TreeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        /**
         * Para saber cual es el nodo raiz se carga por defecto isRoot como true, y
         * en la plantilla, el componente hijo (tree) se marca con atributo isRoot = false
         */
        this.isRoot = true;
        /**
         * El evento permite notificar recursivamente al componente raiz en que momento
         * se debe realizar limpieza de los items seleccionados
         */
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._nodes != null) {
            this._nodes.forEach(function (node) {
                node['parent'] = _this._parent;
                //node['expanded'] = this.expanded === true;
            });
        }
    };
    TreeComponent.prototype.toggle = function (node) {
        node['expanded'] = !node['expanded'];
    };
    TreeComponent.prototype.toggleSelect = function (node) {
        if (node['selected'] == null) {
            node['selected'] = false;
        }
        if (this.single == true) {
            this.clearSelect();
        }
        node['selected'] = !node['selected'];
    };
    TreeComponent.prototype.clearSelect = function () {
        if (this.isRoot == true) {
            this.clearNodes(this._nodes);
        }
        this.onClear.emit();
    };
    TreeComponent.prototype.clearNodes = function (nodes) {
        var _this = this;
        nodes.forEach(function (node) {
            node['selected'] = false;
            if (node[_this.field] != null)
                _this.clearNodes(node[_this.field]);
        });
    };
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        set: function (nodes) {
            this._nodes = nodes;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("parent"),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "_parent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("nodes"),
        __metadata("design:type", Array)
    ], TreeComponent.prototype, "_nodes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("field"),
        __metadata("design:type", String)
    ], TreeComponent.prototype, "field", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("label"),
        __metadata("design:type", String)
    ], TreeComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("expanded"),
        __metadata("design:type", Boolean)
    ], TreeComponent.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("single"),
        __metadata("design:type", Boolean)
    ], TreeComponent.prototype, "single", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("isRoot"),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "isRoot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onClear"),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "onClear", void 0);
    TreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sm-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/modulos/com/components/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.scss */ "./src/app/modulos/com/components/tree/tree.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
}());

var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [TreeComponent],
            declarations: [TreeComponent]
        })
    ], TreeModule);
    return TreeModule;
}());



/***/ }),

/***/ "./src/app/modulos/emp/entities/area.ts":
/*!**********************************************!*\
  !*** ./src/app/modulos/emp/entities/area.ts ***!
  \**********************************************/
/*! exports provided: Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
var Area = /** @class */ (function () {
    function Area() {
    }
    return Area;
}());



/***/ })

}]);
//# sourceMappingURL=default~modulos-auc-pages-reporte-observacion-reporte-observacion-module~modulos-cop-pages-consulta-~6bf0f5c2.js.map