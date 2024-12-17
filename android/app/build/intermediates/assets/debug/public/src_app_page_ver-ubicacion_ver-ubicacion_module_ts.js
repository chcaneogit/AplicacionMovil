"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_ver-ubicacion_ver-ubicacion_module_ts"],{

/***/ 6208:
/*!********************************************************************!*\
  !*** ./src/app/page/ver-ubicacion/ver-ubicacion-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerUbicacionPageRoutingModule: () => (/* binding */ VerUbicacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ver_ubicacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-ubicacion.page */ 7754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _VerUbicacionPageRoutingModule;




const routes = [{
  path: '',
  component: _ver_ubicacion_page__WEBPACK_IMPORTED_MODULE_0__.VerUbicacionPage
}];
class VerUbicacionPageRoutingModule {}
_VerUbicacionPageRoutingModule = VerUbicacionPageRoutingModule;
_VerUbicacionPageRoutingModule.ɵfac = function VerUbicacionPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerUbicacionPageRoutingModule)();
};
_VerUbicacionPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _VerUbicacionPageRoutingModule
});
_VerUbicacionPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VerUbicacionPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6785:
/*!************************************************************!*\
  !*** ./src/app/page/ver-ubicacion/ver-ubicacion.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerUbicacionPageModule: () => (/* binding */ VerUbicacionPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ver_ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-ubicacion-routing.module */ 6208);
/* harmony import */ var _ver_ubicacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-ubicacion.page */ 7754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _VerUbicacionPageModule;






class VerUbicacionPageModule {}
_VerUbicacionPageModule = VerUbicacionPageModule;
_VerUbicacionPageModule.ɵfac = function VerUbicacionPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerUbicacionPageModule)();
};
_VerUbicacionPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _VerUbicacionPageModule
});
_VerUbicacionPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ver_ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerUbicacionPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VerUbicacionPageModule, {
    declarations: [_ver_ubicacion_page__WEBPACK_IMPORTED_MODULE_1__.VerUbicacionPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ver_ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerUbicacionPageRoutingModule]
  });
})();

/***/ }),

/***/ 7754:
/*!**********************************************************!*\
  !*** ./src/app/page/ver-ubicacion/ver-ubicacion.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerUbicacionPage: () => (/* binding */ VerUbicacionPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_service_maps_maps_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/maps/maps.service */ 5580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _VerUbicacionPage;




class VerUbicacionPage {
  constructor(route, mapsService) {
    this.route = route;
    this.mapsService = mapsService;
    this.ubicacion = null;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ubicacion = params['ubicacion'];
      if (this.ubicacion) {
        this.mapsService.loadGoogleMaps().then(() => this.initializeMap()).catch(error => console.error('Error al cargar Google Maps:', error));
      } else {
        console.error('Ubicación no encontrada');
      }
    });
  }
  initializeMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Contenedor del mapa no encontrado');
      return;
    }
    if (this.ubicacion) {
      const [lat, lng] = this.ubicacion.split(',').map(Number);
      const mapOptions = {
        center: {
          lat,
          lng
        },
        zoom: 15
      };
      if (this.map) {
        // Si el mapa ya existe, redibuja y centra
        google.maps.event.trigger(this.map, 'resize');
        this.map.setCenter(mapOptions.center);
      } else {
        // Inicializa el mapa solo si no existe
        this.map = new google.maps.Map(mapElement, mapOptions);
      }
      new google.maps.Marker({
        position: {
          lat,
          lng
        },
        map: this.map
      });
    }
  }
}
_VerUbicacionPage = VerUbicacionPage;
_VerUbicacionPage.ɵfac = function VerUbicacionPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerUbicacionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_maps_maps_service__WEBPACK_IMPORTED_MODULE_0__.MapsService));
};
_VerUbicacionPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _VerUbicacionPage,
  selectors: [["app-ver-ubicacion"]],
  decls: 8,
  vars: 1,
  consts: [[3, "translucent"], ["slot", "start"], ["id", "map", 2, "width", "100%", "height", "100%"]],
  template: function VerUbicacionPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ubicacion del reporte");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  styles: ["@charset \"UTF-8\";\n.container-1[_ngcontent-%COMP%] {\n  background-color: rgba(9, 193, 206, 0.4666666667); \n\n  border: 1px solid #000000; \n\n  border-radius: 8px; \n\n  padding: 10px 16px; \n\n  margin: 16px 16PX; \n\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS92ZXItdWJpY2FjaW9uL3Zlci11YmljYWNpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGlEQUFBLEVBQUEscUJBQUE7RUFDQSx5QkFBQSxFQUFBLHlCQUFBO0VBQ0Esa0JBQUEsRUFBQSx1QkFBQTtFQUNBLGtCQUFBLEVBQUEsb0JBQUE7RUFDQSxpQkFBQSxFQUFBLCtCQUFBO0VBQ0Esd0NBQUEsRUFBQSwyQkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci0xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDljMWNlNzc7IC8qIEZvbmRvIGF6dWwgY2xhcm8gKi9cclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwOyAvKiBCb3JkZSBhenVsIG3Dg8KhcyBjbGFybyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgLyogQm9yZGVzIHJlZG9uZGVhZG9zICovXHJcbiAgcGFkZGluZzogMTBweCAxNnB4OyAvKiBFc3BhY2lvIGludGVybm8gKi9cclxuICBtYXJnaW46IDE2cHggMTZQWDsgLyogTWFyZ2VuIHN1cGVyaW9yIGUgaW5mZXJpb3IgKi9cclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBTb21icmEgbcODwqFzIHByb251bmNpYWRhICovXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_page_ver-ubicacion_ver-ubicacion_module_ts.js.map