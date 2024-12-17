"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_reportes_reportes_module_ts"],{

/***/ 4978:
/*!**********************************************************!*\
  !*** ./src/app/page/reportes/reportes-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportesPageRoutingModule: () => (/* binding */ ReportesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _reportes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportes.page */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _ReportesPageRoutingModule;




const routes = [{
  path: '',
  component: _reportes_page__WEBPACK_IMPORTED_MODULE_0__.ReportesPage
}];
class ReportesPageRoutingModule {}
_ReportesPageRoutingModule = ReportesPageRoutingModule;
_ReportesPageRoutingModule.ɵfac = function ReportesPageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportesPageRoutingModule)();
};
_ReportesPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _ReportesPageRoutingModule
});
_ReportesPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReportesPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 955:
/*!**************************************************!*\
  !*** ./src/app/page/reportes/reportes.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportesPageModule: () => (/* binding */ ReportesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportes-routing.module */ 4978);
/* harmony import */ var _reportes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportes.page */ 740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _ReportesPageModule;






class ReportesPageModule {}
_ReportesPageModule = ReportesPageModule;
_ReportesPageModule.ɵfac = function ReportesPageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportesPageModule)();
};
_ReportesPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _ReportesPageModule
});
_ReportesPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportesPageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReportesPageModule, {
    declarations: [_reportes_page__WEBPACK_IMPORTED_MODULE_1__.ReportesPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _reportes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportesPageRoutingModule]
  });
})();

/***/ }),

/***/ 740:
/*!************************************************!*\
  !*** ./src/app/page/reportes/reportes.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportesPage: () => (/* binding */ ReportesPage)
/* harmony export */ });
/* harmony import */ var C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 2601);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ 8321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/supabase/supabase.service */ 7514);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _service_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/autenticacion/autenticacion.service */ 3444);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_service_maps_maps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/maps/maps.service */ 5580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);

var _ReportesPage;










function ReportesPage_ion_item_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.nuevoReporte.fotoUri, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
class ReportesPage {
  constructor(supabaseService, alertController, autenticacionService, router, mapsService, loadingController) {
    this.supabaseService = supabaseService;
    this.alertController = alertController;
    this.autenticacionService = autenticacionService;
    this.router = router;
    this.mapsService = mapsService;
    this.loadingController = loadingController;
    this.reportes = [];
    this.userPosition = null;
    this.nuevoReporte = {
      id_region: '',
      id_tipo_vehiculo: '',
      color: '',
      patente: '',
      modelo: '',
      id_marca: '',
      fecha_publicacion: '',
      desconocidoModelo: false,
      desconocidoPatente: false,
      fotoUri: '',
      // Guardará la URI de la foto tomada
      ubicacion: ''
    };
  }
  ngOnInit() {
    this.cargarReportes();
    this.getUserLocation().then(() => {
      this.mapsService.loadGoogleMaps().then(() => this.initializeMap()).catch(error => console.error('Error al cargar Google Maps:', error));
    }).catch(error => {
      console.error('Error al obtener la ubicación:', error);
    });
  }
  initializeMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Contenedor del mapa no encontrado');
      return;
    }
    const mapOptions = {
      center: this.userPosition || {
        lat: -33.4489,
        lng: -70.6693
      },
      zoom: 15
    };
    if (this.map) {
      // Si el mapa ya existe, fuerza un redibujado.
      google.maps.event.trigger(this.map, 'resize');
      this.map.setCenter(mapOptions.center);
    } else {
      // Inicializa el mapa solo si no existe.
      this.map = new google.maps.Map(mapElement, mapOptions);
    }
    if (this.userPosition) {
      if (this.marker) {
        this.marker.setMap(null); // Elimina el marcador anterior si existe
      }
      this.marker = new google.maps.Marker({
        position: this.userPosition,
        map: this.map,
        title: 'Ubicación Actual'
      });
    }
  }
  getUserLocation() {
    var _this = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__.Geolocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        });
        _this.userPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log('Ubicación del usuario:', _this.userPosition);
      } catch (error) {
        console.error('Error al obtener la ubicación del usuario:', error);
        _this.userPosition = null; // Manejar la falta de ubicación
        throw error;
      }
    })();
  }
  updateUserLocation() {
    this.getUserLocation().then(() => {
      if (this.userPosition) {
        // Centrar el mapa en la nueva ubicación
        this.map.setCenter(this.userPosition);
        // Elimina el marcador anterior si existe
        if (this.marker) {
          this.marker.setMap(null);
        }
        // Agrega el nuevo marcador en la ubicación actualizada
        this.marker = new google.maps.Marker({
          position: this.userPosition,
          map: this.map,
          title: 'Ubicación Actual'
        });
      }
    }).catch(error => {
      console.error('Error al actualizar la ubicación:', error);
    });
  }
  cargarReportes() {
    this.supabaseService.getReportes().subscribe({
      next: response => {
        this.reportes = response.body;
      },
      error: err => {
        console.error('Error al cargar reportes:', err);
      }
    });
  }
  onDesconocidoModelo() {
    this.nuevoReporte.modelo = this.nuevoReporte.desconocidoModelo ? 'Desconocido' : '';
  }
  onDesconocidoPatente() {
    this.nuevoReporte.patente = this.nuevoReporte.desconocidoPatente ? 'Desconocido' : '';
  }
  agregarReporte() {
    var _this2 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const today = new Date();
      _this2.nuevoReporte.fecha_publicacion = today.toISOString().split('T')[0];
      console.log("Formulario enviado");
      // Validaciones previas
      if (!_this2.nuevoReporte.id_region || !_this2.nuevoReporte.id_tipo_vehiculo || !_this2.nuevoReporte.id_marca || !_this2.nuevoReporte.modelo && !_this2.nuevoReporte.desconocidoModelo || !_this2.nuevoReporte.patente && !_this2.nuevoReporte.desconocidoPatente || !_this2.nuevoReporte.color) {
        yield _this2.presentErrorAlert('Por favor, completa todos los campos requeridos.');
        return;
      }
      // Validación de la patente
      if (_this2.nuevoReporte.patente && !_this2.nuevoReporte.desconocidoPatente) {
        const patenteLength = _this2.nuevoReporte.patente.length;
        if (patenteLength < 5 || patenteLength > 6) {
          yield _this2.presentErrorAlert('Patente no corresponde');
          return;
        }
      }
      // Validación de foto: Si no hay foto, no permitir enviar el reporte
      if (!_this2.nuevoReporte.fotoUri) {
        yield _this2.presentErrorAlert('Por favor, toma una foto antes de enviar el reporte.');
        return;
      }
      // Validar que las coordenadas del usuario estén disponibles
      if (!_this2.userPosition) {
        yield _this2.presentErrorAlert('No se pudo obtener la ubicación. Por favor, intenta nuevamente.');
        return;
      }
      _this2.autenticacionService.obtenerRutUsuario().subscribe({
        next: rutUsuario => {
          var _this2$userPosition, _this2$userPosition2;
          if (!rutUsuario) {
            _this2.presentErrorAlert('Error: Usuario no autenticado. Por favor, inicia sesión.');
            return;
          }
          const reporteData = {
            id_region: _this2.nuevoReporte.id_region,
            id_tipo_vehiculo: _this2.nuevoReporte.id_tipo_vehiculo,
            color: _this2.nuevoReporte.color,
            patente: _this2.nuevoReporte.desconocidoPatente ? 'Desconocido' : _this2.nuevoReporte.patente,
            modelo: _this2.nuevoReporte.desconocidoModelo ? 'Desconocido' : _this2.nuevoReporte.modelo,
            id_marca: _this2.nuevoReporte.id_marca,
            fecha_publicacion: _this2.nuevoReporte.fecha_publicacion,
            rut_usuario: rutUsuario,
            foto: '',
            ubicacion: `${(_this2$userPosition = _this2.userPosition) === null || _this2$userPosition === void 0 ? void 0 : _this2$userPosition.lat},${(_this2$userPosition2 = _this2.userPosition) === null || _this2$userPosition2 === void 0 ? void 0 : _this2$userPosition2.lng}` // Almacenar las coordenadas en el campo "ubicacion"
          };
          // Subir la foto si se ha capturado una
          if (_this2.nuevoReporte.fotoUri) {
            _this2.subirFoto(_this2.nuevoReporte.fotoUri).then(publicUrl => {
              reporteData.foto = publicUrl; // Incluir la URL de la foto subida
              // Agregar el reporte con la URL de la foto y la ubicación
              _this2.supabaseService.addReporte(reporteData).subscribe({
                next: function () {
                  var _ref = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
                    console.log('Respuesta del servidor:', response);
                    _this2.cargarReportes();
                    _this2.resetNuevoReporte();
                    yield _this2.presentSuccessAlert('Reporte agregado con éxito.');
                  });
                  return function next(_x) {
                    return _ref.apply(this, arguments);
                  };
                }(),
                error: err => {
                  console.error('Error al agregar reporte:', err);
                  _this2.presentErrorAlert('Error al agregar el reporte. Intenta nuevamente.');
                }
              });
            });
          }
        },
        error: err => {
          console.error('Error al obtener el RUT del usuario:', err);
          _this2.presentErrorAlert('Error al obtener el RUT del usuario.');
        }
      });
      console.log('Reporte agregado:', _this2.nuevoReporte);
      _this2.router.navigate(['ver-reporte']);
    })();
  }
  presentErrorAlert(message) {
    var _this3 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Error',
        message: message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  presentSuccessAlert(message) {
    var _this4 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: 'Éxito',
        message: message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
  cancelar() {
    this.router.navigate(['/home']);
  }
  resetNuevoReporte() {
    this.nuevoReporte = {
      id_region: '',
      id_tipo_vehiculo: '',
      id_marca: '',
      modelo: '',
      color: '',
      patente: '',
      fecha_publicacion: '',
      desconocidoModelo: false,
      desconocidoPatente: false,
      fotoUri: '',
      ubicacion: ''
    };
  }
  tomarFoto() {
    var _this5 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
          quality: 70,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Uri,
          // Usar Uri para obtener una referencia de la foto
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Camera
        });
        // Guardar la URI de la imagen capturada
        _this5.nuevoReporte.fotoUri = image.webPath;
        console.log('Foto tomada correctamente:', _this5.nuevoReporte.fotoUri);
      } catch (error) {
        console.error('Error al tomar la foto:', error);
      }
    })();
  }
  subirFoto(fotoUri) {
    var _this6 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this6.loadingController.create({
        message: 'Subiendo foto...',
        spinner: 'crescent',
        backdropDismiss: false
      });
      yield loading.present(); // Mostrar el spinner
      try {
        const response = yield fetch(fotoUri);
        const blob = yield response.blob();
        // Generar un nombre único para la imagen en el bucket
        const fileName = `${new Date().getTime()}.jpg`;
        // Subir la imagen al bucket de Supabase
        const filePath = yield _this6.supabaseService.uploadFile(fileName, blob);
        // Obtener la URL pública de la imagen
        const publicUrl = _this6.supabaseService.getPublicUrl(filePath);
        console.log('Foto subida correctamente:', publicUrl);
        yield loading.dismiss(); // Ocultar el spinner
        return publicUrl;
      } catch (error) {
        console.error('Error al subir la foto:', error);
        yield loading.dismiss(); // Ocultar el spinner incluso si hay un error
        throw error;
      }
    })();
  }
  doRefresh(event) {
    console.log('Pull-to-Refresh activado');
    // Recargar reportes
    this.cargarReportes();
    // Opcional: Recargar mapa y ubicación
    this.updateUserLocation();
    // Finalizar el refresco tras unos segundos
    setTimeout(() => {
      console.log('Refresco completado');
      event.target.complete();
    }, 2000);
  }
}
_ReportesPage = ReportesPage;
_ReportesPage.ɵfac = function ReportesPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_3__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_4__.AutenticacionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_maps_maps_service__WEBPACK_IMPORTED_MODULE_5__.MapsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController));
};
_ReportesPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _ReportesPage,
  selectors: [["app-reportes"]],
  decls: 134,
  vars: 12,
  consts: [[3, "translucent"], ["slot", "start"], [1, "ion-padding"], ["slot", "fixed", 3, "ionRefresh"], ["refreshingSpinner", "bubbles"], ["expand", "full", 3, "click"], ["id", "map", 2, "width", "100%", "height", "400px"], [1, "form-container"], [3, "ngSubmit"], ["name", "region", "placeholder", "Selecciona una regi\u00F3n", "required", "", 3, "ngModelChange", "ngModel"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["name", "tipo_vehiculo", "placeholder", "Selecciona el tipo de vehiculo", "required", "", 3, "ngModelChange", "ngModel"], ["name", "marca", "placeholder", "Selecciona una marca", "required", "", 3, "ngModelChange", "ngModel"], ["name", "modelo", "placeholder", "Ingrese modelo", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["name", "desconocido", 3, "ngModelChange", "ionChange", "ngModel"], ["name", "color", "placeholder", "Selecciona un color", "required", "", 3, "ngModelChange", "ngModel"], ["value", "Negro"], ["value", "Blanco"], ["value", "Gris"], ["value", "Rojo"], ["value", "Azul"], ["value", "Verde"], ["value", "Amarillo"], ["value", "Naranjo"], ["value", "Dorado"], ["value", "Plateado"], ["value", "Morado"], ["value", "Celeste"], ["value", "Rosa"], ["value", "Cafe"], [3, "click"], [4, "ngIf"], ["name", "patente", "placeholder", "AABB12", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["expand", "full", "type", "submit"], ["alt", "Foto del veh\u00EDculo", 2, "width", "100%", "height", "auto", "margin-top", "10px", 3, "src"]],
  template: function ReportesPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Crear Reporte");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-content", 2)(7, "ion-refresher", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionRefresh", function ReportesPage_Template_ion_refresher_ionRefresh_7_listener($event) {
        return ctx.doRefresh($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "ion-refresher-content", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReportesPage_Template_ion_button_click_9_listener() {
        return ctx.updateUserLocation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Actualizar Ubicaci\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 7)(13, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Agregar Reporte");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ReportesPage_Template_form_ngSubmit_15_listener() {
        return ctx.agregarReporte();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ion-item")(17, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Regi\u00F3n:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ion-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ReportesPage_Template_ion_select_ngModelChange_19_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.nuevoReporte.id_region, $event) || (ctx.nuevoReporte.id_region = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Regi\u00F3n de Arica y Parinacota");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Regi\u00F3n de Tarapac\u00E1");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "ion-select-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Regi\u00F3n de Antofagasta");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ion-select-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Regi\u00F3n de Atacama");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "ion-select-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Regi\u00F3n de Coquimbo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Regi\u00F3n de Valpara\u00EDso");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "ion-select-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Regi\u00F3n Metropolitana");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "ion-select-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Regi\u00F3n de O\u2019Higgins");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "ion-select-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Regi\u00F3n del Maule");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "ion-select-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Regi\u00F3n del \u00D1uble");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "ion-select-option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Regi\u00F3n del Biob\u00EDo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "ion-select-option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Regi\u00F3n de La Araucan\u00EDa");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "ion-select-option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Regi\u00F3n de Los R\u00EDos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "ion-select-option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Regi\u00F3n de Los Lagos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "ion-select-option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Regi\u00F3n de Ays\u00E9n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "ion-select-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Regi\u00F3n de Magallanes");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "ion-item")(53, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Tipo de vehiculo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "ion-select", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ReportesPage_Template_ion_select_ngModelChange_55_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.nuevoReporte.id_tipo_vehiculo, $event) || (ctx.nuevoReporte.id_tipo_vehiculo = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Auto");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Camioneta");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "ion-select-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Motocicleta");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "ion-item")(63, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Marca:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "ion-select", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ReportesPage_Template_ion_select_ngModelChange_65_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.nuevoReporte.id_marca, $event) || (ctx.nuevoReporte.id_marca = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "ion-select-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Toyota");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "ion-select-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Chevrolet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "ion-select-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Ford");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "ion-select-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Hyundai");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "ion-select-option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Honda");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "ion-item")(77, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Modelo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div")(80, "ion-input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ReportesPage_Template_ion_input_ngModelChange_80_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.nuevoReporte.modelo, $event) || (ctx.nuevoReporte.modelo = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "ion-toggle", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ReportesPage_Template_ion_toggle_ngModelChange_81_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.nuevoReporte.desconocidoModelo, $event) || (ctx.nuevoReporte.desconocidoModelo = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function ReportesPage_Template_ion_toggle_ionChange_81_listener() {
        return ctx.onDesconocidoModelo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Desconocido");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "ion-item")(85, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Color:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "ion-select", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ReportesPage_Template_ion_select_ngModelChange_87_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.nuevoReporte.color, $event) || (ctx.nuevoReporte.color = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "ion-select-option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Negro");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "ion-select-option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Blanco");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "ion-select-option", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Gris");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "ion-select-option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Rojo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "ion-select-option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Azul");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "ion-select-option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99, "Verde");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "ion-select-option", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](101, "Amarillo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "ion-select-option", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Naranjo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "ion-select-option", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "Dorado");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "ion-select-option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "Plateado");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "ion-select-option", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Morado");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "ion-select-option", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "Celeste");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "ion-select-option", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "Rosa");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "ion-select-option", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Caf\u00E9");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "ion-item")(117, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "Foto del Veh\u00EDculo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "ion-button", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReportesPage_Template_ion_button_click_119_listener() {
        return ctx.tomarFoto();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Insertar Foto");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](121, ReportesPage_ion_item_121_Template, 2, 1, "ion-item", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "ion-item")(123, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "Patente:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div")(126, "ion-input", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ReportesPage_Template_ion_input_ngModelChange_126_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.nuevoReporte.patente, $event) || (ctx.nuevoReporte.patente = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "Desconocido");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "ion-toggle", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function ReportesPage_Template_ion_toggle_ngModelChange_129_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.nuevoReporte.desconocidoPatente, $event) || (ctx.nuevoReporte.desconocidoPatente = $event);
        return $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ionChange", function ReportesPage_Template_ion_toggle_ionChange_129_listener() {
        return ctx.onDesconocidoPatente();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "ion-button", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "Agregar Reporte");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReportesPage_Template_ion_button_click_132_listener() {
        return ctx.cancelar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Cancelar Reporte");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevoReporte.id_region);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevoReporte.id_tipo_vehiculo);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevoReporte.id_marca);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevoReporte.modelo);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.nuevoReporte.desconocidoModelo);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevoReporte.desconocidoModelo);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevoReporte.color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.nuevoReporte.fotoUri);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevoReporte.patente);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.nuevoReporte.desconocidoPatente);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.nuevoReporte.desconocidoPatente);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRefresher, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRefresherContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: none;\n  background-image: url(\"/assets/imagenes/logo.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffffff;\n  max-width: 500px;\n  border: 1px solid #000000;\n  border-radius: 8px;\n  padding: 10px 16px;\n  margin: 16px 16PX;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS9yZXBvcnRlcy9yZXBvcnRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBREY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUFIRjs7QUFPQTtFQUNFLFdBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZW5lcy9sb2dvLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIG1hcmdpbjogMTZweCAxNlBYO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG59XHJcblxyXG5mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6984:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraDirection: () => (/* binding */ CameraDirection),
/* harmony export */   CameraResultType: () => (/* binding */ CameraResultType),
/* harmony export */   CameraSource: () => (/* binding */ CameraSource)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
  /**
   * Prompts the user to select either the photo album or take a photo.
   */
  CameraSource["Prompt"] = "PROMPT";
  /**
   * Take a new photo using the camera.
   */
  CameraSource["Camera"] = "CAMERA";
  /**
   * Pick an existing photo from the gallery or photo album.
   */
  CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
  CameraDirection["Rear"] = "REAR";
  CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
  CameraResultType["Uri"] = "uri";
  CameraResultType["Base64"] = "base64";
  CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));

/***/ }),

/***/ 2601:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera),
/* harmony export */   CameraDirection: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection),
/* harmony export */   CameraResultType: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraResultType),
/* harmony export */   CameraSource: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web */ 8436);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 6984);


const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
  web: () => new _web__WEBPACK_IMPORTED_MODULE_1__.CameraWeb()
});



/***/ }),

/***/ 8436:
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/web.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Camera: () => (/* binding */ Camera),
/* harmony export */   CameraWeb: () => (/* binding */ CameraWeb)
/* harmony export */ });
/* harmony import */ var C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 6984);



class CameraWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.WebPlugin {
  getPhoto(options) {
    var _this = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (options.webUseInput || options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos) {
            _this.fileInputExperience(options, resolve, reject);
          } else if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt) {
            let actionSheet = document.querySelector('pwa-action-sheet');
            if (!actionSheet) {
              actionSheet = document.createElement('pwa-action-sheet');
              document.body.appendChild(actionSheet);
            }
            actionSheet.header = options.promptLabelHeader || 'Photo';
            actionSheet.cancelable = false;
            actionSheet.options = [{
              title: options.promptLabelPhoto || 'From Photos'
            }, {
              title: options.promptLabelPicture || 'Take Picture'
            }];
            actionSheet.addEventListener('onSelection', /*#__PURE__*/function () {
              var _ref2 = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                const selection = e.detail;
                if (selection === 0) {
                  _this.fileInputExperience(options, resolve, reject);
                } else {
                  _this.cameraExperience(options, resolve, reject);
                }
              });
              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
          } else {
            _this.cameraExperience(options, resolve, reject);
          }
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  pickImages(_options) {
    var _this2 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          _this2.multipleFileInputExperience(resolve, reject);
        });
        return function (_x4, _x5) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  cameraExperience(options, resolve, reject) {
    var _this3 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (customElements.get('pwa-camera-modal')) {
        const cameraModal = document.createElement('pwa-camera-modal');
        cameraModal.facingMode = options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front ? 'user' : 'environment';
        document.body.appendChild(cameraModal);
        try {
          yield cameraModal.componentOnReady();
          cameraModal.addEventListener('onPhoto', /*#__PURE__*/function () {
            var _ref4 = (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
              const photo = e.detail;
              if (photo === null) {
                reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
              } else if (photo instanceof Error) {
                reject(photo);
              } else {
                resolve(yield _this3._getCameraPhoto(photo, options));
              }
              cameraModal.dismiss();
              document.body.removeChild(cameraModal);
            });
            return function (_x6) {
              return _ref4.apply(this, arguments);
            };
          }());
          cameraModal.present();
        } catch (e) {
          _this3.fileInputExperience(options, resolve, reject);
        }
      } else {
        console.error(`Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements.`);
        _this3.fileInputExperience(options, resolve, reject);
      }
    })();
  }
  fileInputExperience(options, resolve, reject) {
    let input = document.querySelector('#_capacitor-camera-input');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement('input');
      input.id = '_capacitor-camera-input';
      input.type = 'file';
      input.hidden = true;
      document.body.appendChild(input);
      input.addEventListener('change', _e => {
        const file = input.files[0];
        let format = 'jpeg';
        if (file.type === 'image/png') {
          format = 'png';
        } else if (file.type === 'image/gif') {
          format = 'gif';
        }
        if (options.resultType === 'dataUrl' || options.resultType === 'base64') {
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            if (options.resultType === 'dataUrl') {
              resolve({
                dataUrl: reader.result,
                format
              });
            } else if (options.resultType === 'base64') {
              const b64 = reader.result.split(',')[1];
              resolve({
                base64String: b64,
                format
              });
            }
            cleanup();
          });
          reader.readAsDataURL(file);
        } else {
          resolve({
            webPath: URL.createObjectURL(file),
            format: format
          });
          cleanup();
        }
      });
      input.addEventListener('cancel', _e => {
        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
        cleanup();
      });
    }
    input.accept = 'image/*';
    input.capture = true;
    if (options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos || options.source === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Prompt) {
      input.removeAttribute('capture');
    } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Front) {
      input.capture = 'user';
    } else if (options.direction === _definitions__WEBPACK_IMPORTED_MODULE_2__.CameraDirection.Rear) {
      input.capture = 'environment';
    }
    input.click();
  }
  multipleFileInputExperience(resolve, reject) {
    let input = document.querySelector('#_capacitor-camera-input-multiple');
    const cleanup = () => {
      var _a;
      (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
    };
    if (!input) {
      input = document.createElement('input');
      input.id = '_capacitor-camera-input-multiple';
      input.type = 'file';
      input.hidden = true;
      input.multiple = true;
      document.body.appendChild(input);
      input.addEventListener('change', _e => {
        const photos = [];
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          let format = 'jpeg';
          if (file.type === 'image/png') {
            format = 'png';
          } else if (file.type === 'image/gif') {
            format = 'gif';
          }
          photos.push({
            webPath: URL.createObjectURL(file),
            format: format
          });
        }
        resolve({
          photos
        });
        cleanup();
      });
      input.addEventListener('cancel', _e => {
        reject(new _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CapacitorException('User cancelled photos app'));
        cleanup();
      });
    }
    input.accept = 'image/*';
    input.click();
  }
  _getCameraPhoto(photo, options) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const format = photo.type.split('/')[1];
      if (options.resultType === 'uri') {
        resolve({
          webPath: URL.createObjectURL(photo),
          format: format,
          saved: false
        });
      } else {
        reader.readAsDataURL(photo);
        reader.onloadend = () => {
          const r = reader.result;
          if (options.resultType === 'dataUrl') {
            resolve({
              dataUrl: r,
              format: format,
              saved: false
            });
          } else {
            resolve({
              base64String: r.split(',')[1],
              format: format,
              saved: false
            });
          }
        };
        reader.onerror = e => {
          reject(e);
        };
      }
    });
  }
  checkPermissions() {
    var _this4 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (typeof navigator === 'undefined' || !navigator.permissions) {
        throw _this4.unavailable('Permissions API not available in this browser');
      }
      try {
        // https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query
        // the specific permissions that are supported varies among browsers that implement the
        // permissions API, so we need a try/catch in case 'camera' is invalid
        const permission = yield window.navigator.permissions.query({
          name: 'camera'
        });
        return {
          camera: permission.state,
          photos: 'granted'
        };
      } catch (_a) {
        throw _this4.unavailable('Camera permissions are not available in this browser');
      }
    })();
  }
  requestPermissions() {
    var _this5 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this5.unimplemented('Not implemented on web.');
    })();
  }
  pickLimitedLibraryPhotos() {
    var _this6 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this6.unavailable('Not implemented on web.');
    })();
  }
  getLimitedLibraryPhotos() {
    var _this7 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      throw _this7.unavailable('Not implemented on web.');
    })();
  }
}
const Camera = new CameraWeb();


/***/ }),

/***/ 1116:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8321:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Geolocation: () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 4070);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1116);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8659)).then(m => new m.GeolocationWeb())
});



/***/ })

}]);
//# sourceMappingURL=src_app_page_reportes_reportes_module_ts.js.map