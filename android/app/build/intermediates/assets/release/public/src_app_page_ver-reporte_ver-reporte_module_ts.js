"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_ver-reporte_ver-reporte_module_ts"],{

/***/ 3212:
/*!****************************************************************!*\
  !*** ./src/app/page/ver-reporte/ver-reporte-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerReportePageRoutingModule: () => (/* binding */ VerReportePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ver_reporte_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-reporte.page */ 4230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _VerReportePageRoutingModule;




const routes = [{
  path: '',
  component: _ver_reporte_page__WEBPACK_IMPORTED_MODULE_0__.VerReportePage
}];
class VerReportePageRoutingModule {}
_VerReportePageRoutingModule = VerReportePageRoutingModule;
_VerReportePageRoutingModule.ɵfac = function VerReportePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerReportePageRoutingModule)();
};
_VerReportePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _VerReportePageRoutingModule
});
_VerReportePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VerReportePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3709:
/*!********************************************************!*\
  !*** ./src/app/page/ver-reporte/ver-reporte.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerReportePageModule: () => (/* binding */ VerReportePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _ver_reporte_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-reporte-routing.module */ 3212);
/* harmony import */ var _ver_reporte_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-reporte.page */ 4230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _VerReportePageModule;






class VerReportePageModule {}
_VerReportePageModule = VerReportePageModule;
_VerReportePageModule.ɵfac = function VerReportePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerReportePageModule)();
};
_VerReportePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _VerReportePageModule
});
_VerReportePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ver_reporte_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerReportePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VerReportePageModule, {
    declarations: [_ver_reporte_page__WEBPACK_IMPORTED_MODULE_1__.VerReportePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ver_reporte_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerReportePageRoutingModule]
  });
})();

/***/ }),

/***/ 4230:
/*!******************************************************!*\
  !*** ./src/app/page/ver-reporte/ver-reporte.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerReportePage: () => (/* binding */ VerReportePage)
/* harmony export */ });
/* harmony import */ var C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/supabase/supabase.service */ 7514);
/* harmony import */ var _service_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/autenticacion/autenticacion.service */ 3444);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);

var _VerReportePage;






const _c0 = a0 => ["/editar-reporte", a0];
function VerReportePage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No hay reportes creados");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function VerReportePage_div_10_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 12);
  }
  if (rf & 2) {
    const reporte_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", reporte_r2.foto, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function VerReportePage_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, VerReportePage_div_10_img_3_Template, 1, 1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-list", 9)(5, "ion-item")(6, "ion-label")(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VerReportePage_div_10_Template_ion_button_click_21_listener() {
      const reporte_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.eliminarReporte(reporte_r2.id_reporte));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const reporte_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Publicado el ", reporte_r2.fecha_publicacion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", reporte_r2.foto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Regi\u00F3n: ", reporte_r2.region == null ? null : reporte_r2.region.nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Tipo de Veh\u00EDculo: ", reporte_r2.tipo_vehiculo == null ? null : reporte_r2.tipo_vehiculo.tipo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Marca: ", reporte_r2.marca == null ? null : reporte_r2.marca.marca, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Modelo: ", reporte_r2.modelo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Color: ", reporte_r2.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Patente: ", reporte_r2.patente, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, reporte_r2.id_reporte));
  }
}
class VerReportePage {
  constructor(supabaseService, autenticacionService, router, alertController) {
    this.supabaseService = supabaseService;
    this.autenticacionService = autenticacionService;
    this.router = router;
    this.alertController = alertController;
    this.reportes = [];
    this.rutUsuario = null;
  }
  ngOnInit() {
    // Obtener el RUT del usuario autenticado y luego cargar los reportes
    this.autenticacionService.obtenerRutUsuario().subscribe(rut => {
      this.rutUsuario = rut;
      if (this.rutUsuario) {
        this.cargarReportes(); // Cargar reportes solo si el usuario está autenticado
      }
    });
    // Suscribirse a los cambios de reportes
    this.supabaseService.reportes$.subscribe(reportes => {
      this.reportes = reportes.filter(reporte => reporte.rut_usuario === this.rutUsuario); // Filtrar por RUT de usuario
    });
  }
  cargarReportes() {
    if (this.rutUsuario) {
      this.supabaseService.getReportesByUsuario(this.rutUsuario).subscribe({
        next: response => {
          this.reportes = response.body; // Extraer el cuerpo de la respuesta
        },
        error: err => {
          console.error('Error al cargar reportes:', err);
        }
      });
    }
  }
  navegarAEditarReporte(id_reporte) {
    this.router.navigate(['/editar-reporte', id_reporte]);
  }
  eliminarReporte(id_reporte) {
    var _this = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Confirmar Eliminación',
        message: '¿Estás seguro de que deseas eliminar este reporte?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Eliminar',
          handler: () => {
            _this.supabaseService.deleteReporte(id_reporte).subscribe({
              next: function () {
                var _ref = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
                  console.log('Reporte eliminado:', response);
                  // Mostrar mensaje de éxito
                  const successAlert = yield _this.alertController.create({
                    header: 'Éxito',
                    message: 'El reporte ha sido eliminado con éxito.',
                    buttons: ['OK']
                  });
                  yield successAlert.present();
                  // Redirigir después de la eliminación
                  _this.router.navigate(['ver-reporte']);
                });
                return function next(_x) {
                  return _ref.apply(this, arguments);
                };
              }(),
              error: err => {
                console.error('Error al eliminar el reporte:', err);
              }
            });
          }
        }]
      });
      yield alert.present();
    })();
  }
  doRefresh(event) {
    console.log('Actualizando reportes...');
    // Muestra el cargador mientras se actualizan los reportes
    this.cargarReportes();
    // Finalizar el refresher
    event.target.complete();
  }
}
_VerReportePage = VerReportePage;
_VerReportePage.ɵfac = function VerReportePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VerReportePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__.AutenticacionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController));
};
_VerReportePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _VerReportePage,
  selectors: [["app-ver-reporte"]],
  decls: 11,
  vars: 3,
  consts: [[3, "translucent"], ["slot", "start"], ["slot", "fixed", 3, "ionRefresh"], ["refreshingSpinner", "bubbles"], ["class", "empty-state", 4, "ngIf"], ["class", "container-1", 4, "ngFor", "ngForOf"], [1, "empty-state"], [1, "container-1"], ["alt", "Foto del reporte", "class", "responsive-img", 3, "src", 4, "ngIf"], [1, "home"], [3, "routerLink"], ["color", "danger", 3, "click"], ["alt", "Foto del reporte", 1, "responsive-img", 3, "src"]],
  template: function VerReportePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Mis reportes");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content")(7, "ion-refresher", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionRefresh", function VerReportePage_Template_ion_refresher_ionRefresh_7_listener($event) {
        return ctx.doRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "ion-refresher-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VerReportePage_div_9_Template, 3, 0, "div", 4)(10, VerReportePage_div_10_Template, 23, 11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.reportes.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.reportes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["@charset \"UTF-8\";\n.container-1[_ngcontent-%COMP%] {\n  background-color: #ffffff; \n\n  border: 1px solid #000000; \n\n  border-radius: 8px; \n\n  padding: 10px 16px; \n\n  margin: 16px 16PX; \n\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); \n\n}\n\n.home[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-image: url(\"/assets/imagenes/logo.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\nh4[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS92ZXItcmVwb3J0ZS92ZXItcmVwb3J0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UseUJBQUEsRUFBQSxxQkFBQTtFQUNBLHlCQUFBLEVBQUEseUJBQUE7RUFDQSxrQkFBQSxFQUFBLHVCQUFBO0VBQ0Esa0JBQUEsRUFBQSxvQkFBQTtFQUNBLGlCQUFBLEVBQUEsK0JBQUE7RUFDQSx3Q0FBQSxFQUFBLDJCQUFBO0FBRUY7O0FBQUE7RUFDQSx5QkFBQTtBQUdBOztBQURBO0VBQ0Esa0JBQUE7RUFDQSxrREFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUlBOztBQURBO0VBQ0EsY0FBQTtBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci0xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBGb25kbyBhenVsIGNsYXJvICovXHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDsgLyogQm9yZGUgYXp1bCBtw4PCoXMgY2xhcm8gKi9cclxuICBib3JkZXItcmFkaXVzOiA4cHg7IC8qIEJvcmRlcyByZWRvbmRlYWRvcyAqL1xyXG4gIHBhZGRpbmc6IDEwcHggMTZweDsgLyogRXNwYWNpbyBpbnRlcm5vICovXHJcbiAgbWFyZ2luOiAxNnB4IDE2UFg7IC8qIE1hcmdlbiBzdXBlcmlvciBlIGluZmVyaW9yICovXHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLyogU29tYnJhIG3Dg8KhcyBwcm9udW5jaWFkYSAqL1xyXG59XHJcbi5ob21le1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuLS1iYWNrZ3JvdW5kOiBub25lO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VuZXMvbG9nby5qcGcnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5oNCxwe1xyXG5jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_page_ver-reporte_ver-reporte_module_ts.js.map