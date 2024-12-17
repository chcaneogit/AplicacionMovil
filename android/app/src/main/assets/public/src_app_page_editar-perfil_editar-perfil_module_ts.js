"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_editar-perfil_editar-perfil_module_ts"],{

/***/ 7948:
/*!********************************************************************!*\
  !*** ./src/app/page/editar-perfil/editar-perfil-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditarPerfilPageRoutingModule: () => (/* binding */ EditarPerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _editar_perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-perfil.page */ 8582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _EditarPerfilPageRoutingModule;




const routes = [{
  path: '',
  component: _editar_perfil_page__WEBPACK_IMPORTED_MODULE_0__.EditarPerfilPage
}];
class EditarPerfilPageRoutingModule {}
_EditarPerfilPageRoutingModule = EditarPerfilPageRoutingModule;
_EditarPerfilPageRoutingModule.ɵfac = function EditarPerfilPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditarPerfilPageRoutingModule)();
};
_EditarPerfilPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _EditarPerfilPageRoutingModule
});
_EditarPerfilPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditarPerfilPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 877:
/*!************************************************************!*\
  !*** ./src/app/page/editar-perfil/editar-perfil.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditarPerfilPageModule: () => (/* binding */ EditarPerfilPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _editar_perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-perfil-routing.module */ 7948);
/* harmony import */ var _editar_perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-perfil.page */ 8582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _EditarPerfilPageModule;






class EditarPerfilPageModule {}
_EditarPerfilPageModule = EditarPerfilPageModule;
_EditarPerfilPageModule.ɵfac = function EditarPerfilPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditarPerfilPageModule)();
};
_EditarPerfilPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _EditarPerfilPageModule
});
_EditarPerfilPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _editar_perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarPerfilPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EditarPerfilPageModule, {
    declarations: [_editar_perfil_page__WEBPACK_IMPORTED_MODULE_1__.EditarPerfilPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _editar_perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarPerfilPageRoutingModule]
  });
})();

/***/ }),

/***/ 8582:
/*!**********************************************************!*\
  !*** ./src/app/page/editar-perfil/editar-perfil.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditarPerfilPage: () => (/* binding */ EditarPerfilPage)
/* harmony export */ });
/* harmony import */ var C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/supabase/supabase.service */ 7514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var src_app_service_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/autenticacion/autenticacion.service */ 3444);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);

var _EditarPerfilPage;






class EditarPerfilPage {
  constructor(router, supabaseService, alertController, autenticacionService) {
    this.router = router;
    this.supabaseService = supabaseService;
    this.alertController = alertController;
    this.autenticacionService = autenticacionService;
    this.usuario = {
      nombre: '',
      correo: '',
      password: '',
      fecha_nacimiento: '',
      rut: null,
      dv: ''
    };
    this.editField = '';
  }
  ngOnInit() {
    this.cargarUsuario();
  }
  cargarUsuario() {
    this.autenticacionService.obtenerRutUsuario().subscribe(rut => {
      if (rut) {
        this.supabaseService.getUsuarioByRut(+rut).subscribe(response => {
          if (response && response.length > 0) {
            this.usuario = response[0];
          }
        });
      }
    });
  }
  editarCampo(campo) {
    this.editField = campo;
  }
  cancelarEdicion() {
    this.editField = '';
    this.cargarUsuario(); // Recargar datos del usuario en caso de cancelar
  }
  guardarCambios() {
    var _this = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.validarCampos()) {
        return;
      }
      // Verificar si el correo ya existe
      const existeCorreo = yield _this.verificarCorreoExistente(_this.usuario.correo);
      if (existeCorreo) {
        yield _this.presentAlert('Error de validación', 'El correo ya está registrado por otro usuario.');
        return;
      }
      _this.supabaseService.updateUsuario(_this.usuario).subscribe({
        next: function () {
          var _ref = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            yield _this.presentAlert('Éxito', 'Los cambios han sido guardados.');
            _this.editField = '';
            // Emitir el usuario actualizado
            _this.autenticacionService.usuarioActualSubject.next(_this.usuario);
            _this.router.navigate(['/dashboard']);
          });
          return function next() {
            return _ref.apply(this, arguments);
          };
        }(),
        error: function () {
          var _ref2 = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_error) {
            console.error('Error al guardar cambios:', _error);
            yield _this.presentAlert('Error', 'No se pudieron guardar los cambios.');
          });
          return function error(_x) {
            return _ref2.apply(this, arguments);
          };
        }()
      });
    })();
  }
  verificarCorreoExistente(correo) {
    var _this2 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        _this2.supabaseService.getUsuarioByCorreo(correo).subscribe(response => {
          if (response && response.length > 0) {
            // Si hay usuarios que tienen el mismo correo, retornar true
            resolve(true);
          } else {
            // No hay usuarios con el mismo correo
            resolve(false);
          }
        }, error => {
          console.error('Error al verificar el correo:', error);
          resolve(false); // En caso de error, asumimos que el correo no existe
        });
      });
    })();
  }
  validarCampos() {
    if (!this.usuario.nombre || !this.usuario.correo || !this.usuario.password || !this.usuario.fecha_nacimiento) {
      this.presentAlert('Error de validación', 'Todos los campos son obligatorios.');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.usuario.correo)) {
      this.presentAlert('Error de validación', 'Por favor, ingresa un correo electrónico válido.');
      return false;
    }
    return true;
  }
  presentAlert(header, message) {
    var _this3 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: header,
        message: message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
}
_EditarPerfilPage = EditarPerfilPage;
_EditarPerfilPage.ɵfac = function EditarPerfilPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EditarPerfilPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_1__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_2__.AutenticacionService));
};
_EditarPerfilPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _EditarPerfilPage,
  selectors: [["app-editar-perfil"]],
  decls: 35,
  vars: 9,
  consts: [[3, "translucent"], ["slot", "start"], ["slot", "end"], [3, "click"], [1, "ion-padding"], [1, "form-container"], ["type", "text", "name", "nombre", "required", "", 3, "ngModelChange", "ngModel", "readonly"], ["slot", "end", "color", "primary", 3, "click"], ["name", "create"], ["type", "email", "name", "correo", "required", "", 3, "ngModelChange", "ngModel", "readonly"], ["type", "password", "name", "password", "required", "", 3, "ngModelChange", "ngModel", "readonly"], ["type", "date", "name", "fecha_nacimiento", "required", "", 3, "ngModelChange", "ngModel", "readonly"]],
  template: function EditarPerfilPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Editar Perfil");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-buttons", 2)(7, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditarPerfilPage_Template_ion_button_click_7_listener() {
        return ctx.guardarCambios();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Guardar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-content", 4)(10, "div", 5)(11, "ion-item")(12, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Nombre:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function EditarPerfilPage_Template_ion_input_ngModelChange_14_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.usuario.nombre, $event) || (ctx.usuario.nombre = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditarPerfilPage_Template_ion_button_click_15_listener() {
        return ctx.editarCampo("nombre");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-item")(18, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Correo Electr\u00F3nico:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function EditarPerfilPage_Template_ion_input_ngModelChange_20_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.usuario.correo, $event) || (ctx.usuario.correo = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditarPerfilPage_Template_ion_button_click_21_listener() {
        return ctx.editarCampo("correo");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ion-item")(24, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Contrase\u00F1a:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function EditarPerfilPage_Template_ion_input_ngModelChange_26_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.usuario.password, $event) || (ctx.usuario.password = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditarPerfilPage_Template_ion_button_click_27_listener() {
        return ctx.editarCampo("password");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-item")(30, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Fecha de Nacimiento:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function EditarPerfilPage_Template_ion_input_ngModelChange_32_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.usuario.fecha_nacimiento, $event) || (ctx.usuario.fecha_nacimiento = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditarPerfilPage_Template_ion_button_click_33_listener() {
        return ctx.editarCampo("fecha_nacimiento");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.usuario.nombre);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.editField !== "nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.usuario.correo);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.editField !== "correo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.usuario.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.editField !== "password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.usuario.fecha_nacimiento);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.editField !== "fecha_nacimiento");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-image: url(\"/assets/imagenes/logo.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid #000000;\n  border-radius: 8px;\n  padding: 10px 16px;\n  margin: 16px 16PX;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS9lZGl0YXItcGVyZmlsL2VkaXRhci1wZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrREFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZW5lcy9sb2dvLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgbWFyZ2luOiAxNnB4IDE2UFg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_page_editar-perfil_editar-perfil_module_ts.js.map