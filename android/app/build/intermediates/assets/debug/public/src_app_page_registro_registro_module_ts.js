"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_registro_registro_module_ts"],{

/***/ 4720:
/*!**********************************************************!*\
  !*** ./src/app/page/registro/registro-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistroPageRoutingModule: () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 8173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _RegistroPageRoutingModule;




const routes = [{
  path: '',
  component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
}];
class RegistroPageRoutingModule {}
_RegistroPageRoutingModule = RegistroPageRoutingModule;
_RegistroPageRoutingModule.ɵfac = function RegistroPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegistroPageRoutingModule)();
};
_RegistroPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _RegistroPageRoutingModule
});
_RegistroPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegistroPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 385:
/*!**************************************************!*\
  !*** ./src/app/page/registro/registro.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistroPageModule: () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 4720);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 8173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _RegistroPageModule;






class RegistroPageModule {}
_RegistroPageModule = RegistroPageModule;
_RegistroPageModule.ɵfac = function RegistroPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegistroPageModule)();
};
_RegistroPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _RegistroPageModule
});
_RegistroPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RegistroPageModule, {
    declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule]
  });
})();

/***/ }),

/***/ 8173:
/*!************************************************!*\
  !*** ./src/app/page/registro/registro.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistroPage: () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/supabase/supabase.service */ 7514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);

var _RegistroPage;





class RegistroPage {
  constructor(supabaseService, router, alertController) {
    this.supabaseService = supabaseService;
    this.router = router;
    this.alertController = alertController;
    this.nuevo_usuario = {
      rut: null,
      dv: '',
      nombre: '',
      correo: '',
      password: '',
      fecha_nacimiento: ''
    };
  }
  ngOnInit() {}
  registrarUsuario() {
    var _this = this;
    // Validar campos antes de continuar
    if (!this.validarCampos()) {
      return; // Si la validación falla, salir del método
    }
    if (this.nuevo_usuario.rut === null) {
      this.presentAlert('Error de validación', 'El RUT es obligatorio.');
      return;
    }
    // Verificar si el RUT ya existe en la base de datos
    this.supabaseService.getUsuarioByRut(this.nuevo_usuario.rut).subscribe({
      next: function () {
        var _ref = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (usuarioExistente) {
          if (usuarioExistente && usuarioExistente.length > 0) {
            yield _this.presentAlert('Error de registro', 'El RUT ya está registrado en el sistema.');
            return;
          }
          // Verificar si el correo ya existe en la base de datos
          _this.supabaseService.getUsuarioByCorreo(_this.nuevo_usuario.correo).subscribe({
            next: function () {
              var _ref2 = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resultados) {
                if (resultados && resultados.length > 0) {
                  yield _this.presentAlert('Error de registro', 'El correo ya está registrado en el sistema.');
                  return;
                }
                // Procede con el registro
                _this.supabaseService.addUsuario(_this.nuevo_usuario).subscribe({
                  next: function () {
                    var _ref3 = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                      yield _this.presentAlert('Registro Exitoso', 'Te has registrado exitosamente.', true);
                    });
                    return function next() {
                      return _ref3.apply(this, arguments);
                    };
                  }(),
                  error: function () {
                    var _ref4 = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error) {
                      console.error('Error al registrar usuario:', _error);
                      yield _this.presentAlert('Error al registrar usuario', 'Por favor, intenta nuevamente.');
                    });
                    return function error(_x3) {
                      return _ref4.apply(this, arguments);
                    };
                  }()
                });
              });
              return function next(_x2) {
                return _ref2.apply(this, arguments);
              };
            }(),
            error: function () {
              var _ref5 = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error2) {
                console.error('Error al verificar correo:', _error2);
                yield _this.presentAlert('Error al verificar correo', 'Por favor, intenta nuevamente.');
              });
              return function error(_x4) {
                return _ref5.apply(this, arguments);
              };
            }()
          });
        });
        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      error: function () {
        var _ref6 = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error3) {
          console.error('Error al verificar RUT:', _error3);
          yield _this.presentAlert('Error al verificar RUT', 'Por favor, intenta nuevamente.');
        });
        return function error(_x5) {
          return _ref6.apply(this, arguments);
        };
      }()
    });
  }
  validarCampos() {
    var _this$nuevo_usuario$r;
    if (!this.nuevo_usuario.rut || !this.nuevo_usuario.dv || !this.nuevo_usuario.nombre || !this.nuevo_usuario.correo || !this.nuevo_usuario.password || !this.nuevo_usuario.fecha_nacimiento) {
      this.presentAlert('Error de validación', 'Todos los campos son obligatorios');
      return false;
    }
    const rutPattern = /^[0-9]{7,8}$/;
    if (!rutPattern.test((_this$nuevo_usuario$r = this.nuevo_usuario.rut) === null || _this$nuevo_usuario$r === void 0 ? void 0 : _this$nuevo_usuario$r.toString())) {
      this.presentAlert('Error de validación', 'El RUT debe contener 7 u 8 dígitos numéricos');
      return false;
    }
    const dvPattern = /^[0-9kK]{1}$/;
    if (!dvPattern.test(this.nuevo_usuario.dv)) {
      this.presentAlert('Error de validación', 'El dígito verificador debe ser un número del 0 al 9 o "K".');
      return false;
    }
    if (!this.validarRutConDv(this.nuevo_usuario.rut, this.nuevo_usuario.dv)) {
      this.presentAlert('Error de validación', 'El RUT y el dígito verificador no coinciden.');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.nuevo_usuario.correo)) {
      this.presentAlert('Error de validación', 'Por favor, ingresa un correo electrónico válido.');
      return false;
    }
    if (!this.esMayorDeEdad(this.nuevo_usuario.fecha_nacimiento)) {
      this.presentAlert('Error de validación', 'Debes tener entre 18 y 100 años para registrarte.');
      return false;
    }
    return true;
  }
  esMayorDeEdad(fechaNacimiento) {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const fechaActual = new Date();
    // Validar que la fecha no sea futura
    if (fechaNacimientoDate > fechaActual) {
      this.presentAlert('Error de validación', 'La fecha de nacimiento no puede ser futura.');
      return false;
    }
    const edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    // Ajuste si el cumpleaños aún no ha ocurrido este año
    if (fechaActual.getMonth() < fechaNacimientoDate.getMonth() || fechaActual.getMonth() === fechaNacimientoDate.getMonth() && fechaActual.getDate() < fechaNacimientoDate.getDate()) {
      return edad - 1 >= 18 && edad - 1 <= 100;
    }
    return edad >= 18 && edad <= 100;
  }
  validarRutConDv(rut, dv) {
    let suma = 0;
    let multiplicador = 2;
    const rutString = rut.toString();
    for (let i = rutString.length - 1; i >= 0; i--) {
      suma += parseInt(rutString.charAt(i), 10) * multiplicador;
      multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
    }
    const residuo = 11 - suma % 11;
    let dvEsperado;
    if (residuo === 11) {
      dvEsperado = '0';
    } else if (residuo === 10) {
      dvEsperado = 'K';
    } else {
      dvEsperado = residuo.toString();
    }
    return dvEsperado.toUpperCase() === dv.toUpperCase();
  }
  presentAlert(header, message, navigateAfter) {
    var _this2 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: header,
        message: message,
        buttons: ['OK']
      });
      yield alert.present();
      if (navigateAfter) {
        yield alert.onDidDismiss();
        _this2.router.navigate(['/login']);
      }
    })();
  }
}
_RegistroPage = RegistroPage;
_RegistroPage.ɵfac = function RegistroPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegistroPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController));
};
_RegistroPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _RegistroPage,
  selectors: [["app-registro"]],
  decls: 37,
  vars: 7,
  consts: [[3, "translucent"], ["slot", "start"], [1, "ion-padding"], [1, "form-container"], [3, "ngSubmit"], ["type", "text", "name", "rut", "placeholder", " Sin puntos ni gui\u00F3n", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "dv", "placeholder", " Sin gui\u00F3n", "required", "", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "nombre", "placeholder", " Ingrese su nombre", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "correo", "placeholder", " Ingrese su correo", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "placeholder", " Ingrese su contrase\u00F1a", "required", "", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "fecha_nacimiento", "required", "", 3, "ngModelChange", "ngModel"], ["expand", "full", "type", "submit"]],
  template: function RegistroPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "FindCar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content", 2)(7, "div", 3)(8, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Registro");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegistroPage_Template_form_ngSubmit_10_listener() {
        return ctx.registrarUsuario();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-item")(12, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "RUT: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegistroPage_Template_ion_input_ngModelChange_14_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.nuevo_usuario.rut, $event) || (ctx.nuevo_usuario.rut = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-item")(16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "D\u00EDgito verificador: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegistroPage_Template_ion_input_ngModelChange_18_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.nuevo_usuario.dv, $event) || (ctx.nuevo_usuario.dv = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-item")(20, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Nombre: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegistroPage_Template_ion_input_ngModelChange_22_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.nuevo_usuario.nombre, $event) || (ctx.nuevo_usuario.nombre = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-item")(24, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Correo Electr\u00F3nico: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegistroPage_Template_ion_input_ngModelChange_26_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.nuevo_usuario.correo, $event) || (ctx.nuevo_usuario.correo = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-item")(28, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Contrase\u00F1a: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegistroPage_Template_ion_input_ngModelChange_30_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.nuevo_usuario.password, $event) || (ctx.nuevo_usuario.password = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-item")(32, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Fecha de nacimiento: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RegistroPage_Template_ion_input_ngModelChange_34_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.nuevo_usuario.fecha_nacimiento, $event) || (ctx.nuevo_usuario.fecha_nacimiento = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Registrarse ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevo_usuario.rut);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevo_usuario.dv);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevo_usuario.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevo_usuario.correo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevo_usuario.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevo_usuario.fecha_nacimiento);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-image: url(\"/assets/imagenes/logo.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffffff;\n  max-width: 500px;\n  border: 1px solid #000000;\n  border-radius: 8px;\n  padding: 10px 16px;\n  margin: 16px 16PX;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS9yZWdpc3Ryby9yZWdpc3Ryby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBREY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUFIRjs7QUFPQTtFQUNFLFdBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZW5lcy9sb2dvLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIG1hcmdpbjogMTZweCAxNlBYO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG59XHJcblxyXG5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_page_registro_registro_module_ts.js.map