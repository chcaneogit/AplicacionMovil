"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_editar-reporte_editar-reporte_module_ts"],{

/***/ 1044:
/*!**********************************************************************!*\
  !*** ./src/app/page/editar-reporte/editar-reporte-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditarReportePageRoutingModule: () => (/* binding */ EditarReportePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _editar_reporte_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-reporte.page */ 5134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _EditarReportePageRoutingModule;




const routes = [{
  path: '',
  component: _editar_reporte_page__WEBPACK_IMPORTED_MODULE_0__.EditarReportePage
}];
class EditarReportePageRoutingModule {}
_EditarReportePageRoutingModule = EditarReportePageRoutingModule;
_EditarReportePageRoutingModule.ɵfac = function EditarReportePageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditarReportePageRoutingModule)();
};
_EditarReportePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _EditarReportePageRoutingModule
});
_EditarReportePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditarReportePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1013:
/*!**************************************************************!*\
  !*** ./src/app/page/editar-reporte/editar-reporte.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditarReportePageModule: () => (/* binding */ EditarReportePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _editar_reporte_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-reporte-routing.module */ 1044);
/* harmony import */ var _editar_reporte_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-reporte.page */ 5134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _EditarReportePageModule;






class EditarReportePageModule {}
_EditarReportePageModule = EditarReportePageModule;
_EditarReportePageModule.ɵfac = function EditarReportePageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditarReportePageModule)();
};
_EditarReportePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _EditarReportePageModule
});
_EditarReportePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _editar_reporte_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarReportePageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EditarReportePageModule, {
    declarations: [_editar_reporte_page__WEBPACK_IMPORTED_MODULE_1__.EditarReportePage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _editar_reporte_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarReportePageRoutingModule]
  });
})();

/***/ }),

/***/ 5134:
/*!************************************************************!*\
  !*** ./src/app/page/editar-reporte/editar-reporte.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditarReportePage: () => (/* binding */ EditarReportePage)
/* harmony export */ });
/* harmony import */ var C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/supabase/supabase.service */ 7514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);

var _EditarReportePage;





class EditarReportePage {
  constructor(route, supabaseService, alertController, router) {
    this.route = route;
    this.supabaseService = supabaseService;
    this.alertController = alertController;
    this.router = router;
    this.id_reporte = null;
    this.reporte = {
      color: '',
      patente: '',
      modelo: '',
      desconocidoModelo: false,
      desconocidoPatente: false
    };
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id_reporte');
      this.id_reporte = idParam ? +idParam : null;
      if (this.id_reporte) {
        this.cargarReporte(this.id_reporte);
      } else {
        console.error('El ID del reporte es undefined');
      }
    });
  }
  cargarReporte(id) {
    this.supabaseService.getReporteById(id).subscribe({
      next: report => {
        if (report.body) {
          this.reporte = report.body;
          if (this.reporte.modelo === 'Desconocido') {
            this.reporte.desconocidoModelo = true;
          }
          if (this.reporte.patente === 'Desconocido') {
            this.reporte.desconocidoPatente = true;
          }
        } else {
          console.error('No se encontró el reporte');
        }
      },
      error: err => {
        console.error('Error al cargar el reporte:', err);
      }
    });
  }
  onDesconocidoModelo() {
    if (this.reporte.desconocidoModelo) {
      this.reporte.modelo = 'Desconocido';
    } else {
      this.reporte.modelo = '';
    }
  }
  onDesconocidoPatente() {
    if (this.reporte.desconocidoPatente) {
      this.reporte.patente = 'Desconocido';
    } else {
      this.reporte.patente = '';
    }
  }
  // Método para mostrar alertas de éxito o error
  mostrarAlerta(mensaje, esExito) {
    var _this = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: esExito ? 'Éxito' : 'Error',
        message: mensaje,
        buttons: [{
          text: 'OK',
          handler: () => {
            if (esExito) {
              _this.router.navigate(['ver-reporte']);
            }
          }
        }]
      });
      yield alert.present();
    })();
  }
  // Validaciones para los campos color, patente y modelo
  validarCampos() {
    if (!this.reporte.color) {
      this.mostrarAlerta('El campo color es obligatorio', false);
      return false;
    }
    if (!this.reporte.desconocidoPatente && !this.reporte.patente) {
      this.mostrarAlerta('El campo patente es obligatorio o debe seleccionar "Desconocido"', false);
      return false;
    }
    if (!this.reporte.desconocidoModelo && !this.reporte.modelo) {
      this.mostrarAlerta('El campo modelo es obligatorio o debe seleccionar "Desconocido"', false);
      return false;
    }
    return true;
  }
  guardarCambios() {
    if (!this.validarCampos()) {
      return; // Si las validaciones fallan, no continuar
    }
    if (this.id_reporte) {
      const updatedData = {
        id_reporte: this.id_reporte,
        color: this.reporte.color,
        patente: this.reporte.desconocidoPatente ? 'Desconocido' : this.reporte.patente,
        modelo: this.reporte.desconocidoModelo ? 'Desconocido' : this.reporte.modelo
      };
      this.supabaseService.updateReporte(updatedData).subscribe({
        next: response => {
          console.log('Reporte actualizado:', response);
          this.mostrarAlerta('El reporte se actualizó correctamente', true); // Mostrar mensaje de éxito
        },
        error: err => {
          console.error('Error al actualizar el reporte:', err);
          this.mostrarAlerta('Hubo un error al actualizar el reporte', false); // Mostrar mensaje de error
        }
      });
    } else {
      console.error('El ID del reporte es undefined');
    }
  }
}
_EditarReportePage = EditarReportePage;
_EditarReportePage.ɵfac = function EditarReportePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditarReportePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_EditarReportePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _EditarReportePage,
  selectors: [["app-editar-reporte"]],
  decls: 61,
  vars: 8,
  consts: [[3, "translucent"], ["slot", "start"], [1, "ion-padding"], [1, "form-container"], ["name", "color", "placeholder", "Selecciona un color", "required", "", 3, "ngModelChange", "ngModel"], ["value", "Negro"], ["value", "Blanco"], ["value", "Gris"], ["value", "Rojo"], ["value", "Azul"], ["value", "Verde"], ["value", "Amarillo"], ["value", "Naranjo"], ["value", "Dorado"], ["value", "Plateado"], ["value", "Morado"], ["value", "Celeste"], ["value", "Rosa"], ["value", "Cafe"], ["name", "patente", "placeholder", "AABB12", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["name", "desconocido", 3, "ngModelChange", "ionChange", "ngModel"], ["name", "modelo", "placeholder", "Ingrese modelo", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["expand", "full", 3, "click"]],
  template: function EditarReportePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Editar reporte");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2)(7, "div", 3)(8, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Editar Reporte");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form")(11, "ion-item")(12, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Color: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EditarReportePage_Template_ion_select_ngModelChange_14_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.reporte.color, $event) || (ctx.reporte.color = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-select-option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Negro");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-select-option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Blanco");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-select-option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Gris");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-select-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Rojo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-select-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Azul");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Verde");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Amarillo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-select-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Naranjo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-select-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Dorado");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ion-select-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Plateado");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Morado");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-select-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Celeste");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-select-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Rosa");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ion-select-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Caf\u00E9");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "ion-item")(44, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Patente:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div")(47, "ion-input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EditarReportePage_Template_ion_input_ngModelChange_47_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.reporte.patente, $event) || (ctx.reporte.patente = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Desconocido");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ion-toggle", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EditarReportePage_Template_ion_toggle_ngModelChange_50_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.reporte.desconocidoPatente, $event) || (ctx.reporte.desconocidoPatente = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function EditarReportePage_Template_ion_toggle_ionChange_50_listener() {
        return ctx.onDesconocidoPatente();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "ion-item")(52, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Modelo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div")(55, "ion-input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EditarReportePage_Template_ion_input_ngModelChange_55_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.reporte.modelo, $event) || (ctx.reporte.modelo = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "ion-toggle", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EditarReportePage_Template_ion_toggle_ngModelChange_56_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.reporte.desconocidoModelo, $event) || (ctx.reporte.desconocidoModelo = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function EditarReportePage_Template_ion_toggle_ionChange_56_listener() {
        return ctx.onDesconocidoModelo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Desconocido");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "ion-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditarReportePage_Template_ion_button_click_59_listener() {
        return ctx.guardarCambios();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Guardar Cambios");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.reporte.color);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.reporte.patente);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.reporte.desconocidoPatente);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.reporte.desconocidoPatente);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.reporte.modelo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.reporte.desconocidoModelo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.reporte.desconocidoModelo);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-image: url(\"/assets/imagenes/logo.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffffff;\n  max-width: 500px;\n  border: 1px solid #000000;\n  border-radius: 8px;\n  padding: 10px 16px;\n  margin: 16px 16PX;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS9lZGl0YXItcmVwb3J0ZS9lZGl0YXItcmVwb3J0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBREY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUFIRjs7QUFPQTtFQUNFLFdBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZW5lcy9sb2dvLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIG1hcmdpbjogMTZweCAxNlBYO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG59XHJcblxyXG5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_page_editar-reporte_editar-reporte_module_ts.js.map