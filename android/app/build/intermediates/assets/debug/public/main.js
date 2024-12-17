(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _guards_timeExpired_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/timeExpired.guard */ 5452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _AppRoutingModule;




const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 5055)).then(m => m.HomePageModule)
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/login/login.module */ 8141)).then(m => m.LoginPageModule)
}, {
  path: 'dashboard',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/dashboard/dashboard.module */ 9190)).then(m => m.DashboardPageModule)
}, {
  path: 'registro',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_registro_registro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/registro/registro.module */ 385)).then(m => m.RegistroPageModule)
}, {
  path: 'reportes',
  // Nueva ruta para Reportes
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_page_reportes_reportes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/reportes/reportes.module */ 955)).then(m => m.ReportesPageModule),
  canActivate: [_guards_timeExpired_guard__WEBPACK_IMPORTED_MODULE_0__.isExpiredTimeGuard]
}, {
  path: 'ver-reporte',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_ver-reporte_ver-reporte_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/ver-reporte/ver-reporte.module */ 3709)).then(m => m.VerReportePageModule),
  canActivate: [_guards_timeExpired_guard__WEBPACK_IMPORTED_MODULE_0__.isExpiredTimeGuard]
}, {
  path: 'editar-perfil',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_editar-perfil_editar-perfil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/editar-perfil/editar-perfil.module */ 877)).then(m => m.EditarPerfilPageModule),
  canActivate: [_guards_timeExpired_guard__WEBPACK_IMPORTED_MODULE_0__.isExpiredTimeGuard]
}, {
  path: 'editar-reporte/:id_reporte',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_editar-reporte_editar-reporte_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/editar-reporte/editar-reporte.module */ 1013)).then(m => m.EditarReportePageModule),
  canActivate: [_guards_timeExpired_guard__WEBPACK_IMPORTED_MODULE_0__.isExpiredTimeGuard]
}, {
  path: 'ver-ubicacion',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_page_ver-ubicacion_ver-ubicacion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/ver-ubicacion/ver-ubicacion.module */ 6785)).then(m => m.VerUbicacionPageModule),
  canActivate: [_guards_timeExpired_guard__WEBPACK_IMPORTED_MODULE_0__.isExpiredTimeGuard]
}];
class AppRoutingModule {}
_AppRoutingModule = AppRoutingModule;
_AppRoutingModule.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppRoutingModule)();
};
_AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _AppRoutingModule
});
_AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
  }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/autenticacion/autenticacion.service */ 3444);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
var _AppComponent;







function AppComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-menu-toggle", 3)(2, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_17_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.irLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Iniciar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-menu-toggle", 3)(7, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_17_Template_ion_item_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.irRegistro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Registrarse");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function AppComponent_ng_container_18_ion_list_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list")(1, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_18_ion_list_12_Template_ion_item_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.irReportes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Ver mis reportes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_18_ion_list_12_Template_ion_item_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.irRegistroReporte());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Agregar reporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function AppComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-menu-toggle", 3)(2, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_18_Template_ion_item_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.irPerfil());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_18_Template_ion_item_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.toggleReportes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Reportes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-menu-toggle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_ng_container_18_ion_list_12_Template, 9, 0, "ion-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-menu-toggle", 3)(14, "ion-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_ng_container_18_Template_ion_item_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.cerrarSesion());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Cerrar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r1.mostrarReportes ? "chevron-up-outline" : "chevron-down-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.mostrarReportes);
  }
}
class AppComponent {
  constructor(_authService, router) {
    this._authService = _authService;
    this.router = router;
    this.usuarioNombre = null;
    this.usuarioAutenticado = false;
    this.mostrarReportes = false;
    this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  ngOnInit() {
    this._authService.usuarioAutenticado$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.unsubscribe$)).subscribe(estado => {
      this.usuarioAutenticado = estado;
    });
    this._authService.usuarioActualSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.unsubscribe$)).subscribe(usuario => {
      this.usuarioNombre = usuario ? `Hola ${usuario.nombre}` : null;
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  irHome() {
    this.router.navigate(['/home']);
  }
  irLogin() {
    this.router.navigate(['/login']);
  }
  irPerfil() {
    this.router.navigate(['/dashboard']);
  }
  irRegistro() {
    this.router.navigate(['/registro']);
  }
  cerrarSesion() {
    this._authService.cerrarSesion();
    this.router.navigate(['/login']);
  }
  irReportes() {
    this.router.navigate(['/ver-reporte']);
  }
  irRegistroReporte() {
    this.router.navigate(['/reportes']);
  }
  toggleReportes() {
    this.mostrarReportes = !this.mostrarReportes;
  }
}
_AppComponent = AppComponent;
_AppComponent.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_0__.AutenticacionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
_AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _AppComponent,
  selectors: [["app-root"]],
  decls: 20,
  vars: 3,
  consts: [["contentId", "main-content"], ["slot", "start"], ["slot", "icon-only", "name", "close-outline"], ["auto-hide", "false"], [3, "click"], ["name", "home-outline", "slot", "start"], [4, "ngIf"], ["id", "main-content"], ["name", "person-outline", "slot", "start"], ["name", "person-add-outline", "slot", "start"], ["name", "document-text-outline", "slot", "start"], ["slot", "end", 3, "name"], ["name", "log-out-outline", "slot", "start"], [2, "--padding-start", "30px", 3, "click"], ["name", "eye-outline"], ["name", "add-circle-outline"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-app")(1, "ion-menu", 0)(2, "ion-header")(3, "ion-toolbar")(4, "ion-buttons", 1)(5, "ion-menu-toggle")(6, "ion-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content")(11, "ion-list")(12, "ion-menu-toggle", 3)(13, "ion-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_13_listener() {
        return ctx.irHome();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_ng_container_17_Template, 11, 0, "ng-container", 6)(18, AppComponent_ng_container_18_Template, 18, 2, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-router-outlet", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.usuarioNombre || "Bienvenido");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.usuarioAutenticado);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuarioAutenticado);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonRouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var _AppModule;









class AppModule {}
_AppModule = AppModule;
_AppModule.ɵfac = function AppModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppModule)();
};
_AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
_AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicRouteStrategy
  }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.withInterceptorsFromDi)())],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
  });
})();

/***/ }),

/***/ 5452:
/*!*********************************************!*\
  !*** ./src/app/guards/timeExpired.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isExpiredTimeGuard: () => (/* binding */ isExpiredTimeGuard)
/* harmony export */ });
/* harmony import */ var C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _service_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/autenticacion/autenticacion.service */ 3444);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);

var _isExpiredTimeGuard;



class isExpiredTimeGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    var _this = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const expired = yield _this.authService.isDateExpired();
      if (!expired) {
        return true;
      } else {
        _this.authService.cerrarSesion();
        _this.router.navigate(['/login']);
        return false;
      }
    })();
  }
}
_isExpiredTimeGuard = isExpiredTimeGuard;
_isExpiredTimeGuard.ɵfac = function isExpiredTimeGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _isExpiredTimeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_autenticacion_autenticacion_service__WEBPACK_IMPORTED_MODULE_1__.AutenticacionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
_isExpiredTimeGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _isExpiredTimeGuard,
  factory: _isExpiredTimeGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3444:
/*!****************************************************************!*\
  !*** ./src/app/service/autenticacion/autenticacion.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutenticacionService: () => (/* binding */ AutenticacionService)
/* harmony export */ });
/* harmony import */ var C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 6493);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto-js */ 5720);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/supabase/supabase.service */ 7514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);

var _AutenticacionService;







class AutenticacionService {
  constructor(supabaseService, router) {
    this.supabaseService = supabaseService;
    this.router = router;
    this.usuarioAutenticadoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.usuarioAutenticado$ = this.usuarioAutenticadoSubject.asObservable();
    this.rutUsuarioSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.nombreUsuarioSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
    this.usuarioActualSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
  }
  // Método para establecer el estado de autenticación y emitir el usuario
  setAutenticado(estado, rut = null) {
    this.usuarioAutenticadoSubject.next(estado);
    this.rutUsuarioSubject.next(rut);
    if (estado && rut) {
      this.supabaseService.getUsuarioByRut(+rut).subscribe({
        next: usuario => {
          if (usuario && usuario.length > 0) {
            this.nombreUsuarioSubject.next(usuario[0].nombre);
            this.usuarioActualSubject.next(usuario[0]);
          } else {
            this.nombreUsuarioSubject.next(null);
            this.usuarioActualSubject.next(null);
          }
        },
        error: err => {
          console.error('Error al obtener el usuario por RUT:', err);
          this.nombreUsuarioSubject.next(null);
          this.usuarioActualSubject.next(null);
        }
      });
    } else {
      this.nombreUsuarioSubject.next(null);
      this.usuarioActualSubject.next(null);
    }
  }
  // Método para verificar si la sesión ha expirado
  isDateExpired() {
    var _this = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userData = yield _this.getDecryptedUserData();
      if (userData !== null && userData !== void 0 && userData.expiration && Date.now() < userData.expiration) {
        console.log('Usuario dentro del tiempo de expiración');
        return false; // La sesión es válida si el tiempo actual es menor a la expiración
      }
      console.log('Usuario fuera del tiempo de expiración');
      yield _this.cerrarSesion(); // Si ya pasó el tiempo, desloguea
      return true;
    })();
  }
  // Método para obtener el estado de autenticación (boolean)
  estaAutenticado() {
    return this.usuarioAutenticadoSubject.value; // Devuelve el valor actual
  }
  // Método para obtener el RUT del usuario
  obtenerRutUsuario() {
    return this.rutUsuarioSubject.asObservable();
  }
  // Método para obtener el nombre del usuario
  obtenerNombreUsuario() {
    return this.nombreUsuarioSubject.asObservable(); // Retorna un Observable del nombre
  }
  // Método para obtener el usuario actual
  obtenerUsuarioActual() {
    return this.usuarioActualSubject.asObservable();
  }
  // Método para desencriptar los datos del usuario almacenados en el dispositivo
  getDecryptedUserData() {
    var _this2 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        value
      } = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({
        key: 'userData'
      });
      if (value) {
        try {
          const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_3__.AES.decrypt(value, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKeySupabase);
          const decryptedData = JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_3__.enc.Utf8));
          return decryptedData;
        } catch (e) {
          console.error(e);
          _this2.cerrarSesion();
        }
      }
      return null;
    })();
  }
  // Método para cerrar sesión
  cerrarSesion() {
    var _this3 = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.setAutenticado(false); // Cambiar el estado de autenticación
      _this3.rutUsuarioSubject.next(null); // Limpiar el RUT al cerrar sesión
      _this3.nombreUsuarioSubject.next(null); // Limpiar el nombre al cerrar sesión
      _this3.usuarioActualSubject.next(null); // Limpiar el usuario actual
      // Redirigir al usuario a la página de inicio de sesión
      _this3.router.navigate(['/login']);
    })();
  }
}
_AutenticacionService = AutenticacionService;
_AutenticacionService.ɵfac = function AutenticacionService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AutenticacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_service_supabase_supabase_service__WEBPACK_IMPORTED_MODULE_4__.SupabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};
_AutenticacionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _AutenticacionService,
  factory: _AutenticacionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7514:
/*!******************************************************!*\
  !*** ./src/app/service/supabase/supabase.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupabaseService: () => (/* binding */ SupabaseService)
/* harmony export */ });
/* harmony import */ var C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @supabase/supabase-js */ 2014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);

var _SupabaseService;







class SupabaseService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api_url;
    this.reportesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.reportes$ = this.reportesSubject.asObservable();
    this.supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_3__.createClient)(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.storage_url, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKeySupabase); // Cliente de Supabase
  }
  // Configurar headers comunes
  getHeaders() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
      'Content-Type': 'application/json',
      'apiKey': src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKeySupabase,
      'Authorization': `Bearer ${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKeySupabase}`
    });
  }
  // Manejo de errores
  handleError(error) {
    console.error('Error ocurrido:', error);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
  }
  // Método GET genérico
  get(path, params) {
    return this.http.get(`${this.baseUrl}/${path}`, {
      headers: this.getHeaders(),
      observe: 'response',
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError));
  }
  // Método POST genérico
  post(path, data) {
    return this.http.post(`${this.baseUrl}${path}`, data, {
      headers: this.getHeaders(),
      observe: 'response'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError));
  }
  // Métodos específicos para reportes
  getReportes() {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('select', '*, region(*), tipo_vehiculo(*), marca(*)').set('order', 'foto.desc');
    return this.get('reporte', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(response => {
      this.reportesSubject.next(response.body); // Actualiza el BehaviorSubject
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError));
  }
  addReporte(reporte) {
    return this.post('reporte', reporte).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.getReportes().subscribe()) // Llama a getReportes para actualizar la lista
    );
  }
  getReportesByUsuario(rutUsuario) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('rut_usuario', `eq.${rutUsuario}`).set('select', '*, region(*), tipo_vehiculo(*), marca(*)') // Incluir las relaciones
    .set('order', 'foto.desc');
    return this.get('reporte', params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError));
  }
  getReporteById(id_reporte) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('select', '*');
    return this.get(`reporte?id_reporte=eq.${id_reporte}`, params);
  }
  updateReporte(reporte) {
    const path = `reporte?id_reporte=eq.${reporte.id_reporte}`;
    return this.http.put(`${this.baseUrl}${path}`, reporte, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError));
  }
  deleteReporte(id_reporte) {
    return this.http.delete(`${this.baseUrl}/reporte?id_reporte=eq.${id_reporte}`, {
      headers: this.getHeaders(),
      observe: 'response'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError));
  }
  // Métodos específicos para usuarios
  getUsuarios() {
    return this.get('usuario'); // Usar el método genérico
  }
  addUsuario(usuario) {
    return this.post('usuario', usuario); // Usar el método genérico
  }
  getUsuarioByRut(rut) {
    return this.http.get(`${this.baseUrl}/usuario?rut=eq.${rut}`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError) // Manejar errores
    );
  }
  getUsuarioByCorreo(correo) {
    return this.http.get(`${this.baseUrl}/usuario?correo=eq.${correo}`, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError));
  }
  updateUsuario(usuario) {
    const path = `usuario?rut=eq.${usuario.rut}`;
    return this.http.put(`${this.baseUrl}/${path}`, usuario, {
      headers: this.getHeaders()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError));
  }
  // Método para subir un archivo al storage
  uploadFile(filePath, fileBlob) {
    var _this = this;
    return (0,C_Users_ccane_OneDrive_Documentos_GitHub_AplicacionMovil_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const {
          data,
          error
        } = yield _this.supabase.storage.from('fotos') // Nombre del bucket
        .upload(filePath, fileBlob, {
          upsert: true
        }); // upsert: true permite sobrescribir si el archivo ya existe
        if (error) {
          throw new Error(`Error al subir el archivo: ${error.message}`);
        }
        return data === null || data === void 0 ? void 0 : data.path; // Devolvemos la ruta del archivo
      } catch (error) {
        console.error('Error en el uploadFile:', error);
        throw error;
      }
    })();
  }
  // Método para obtener la URL pública de un archivo
  getPublicUrl(filePath) {
    const {
      data
    } = this.supabase.storage.from('fotos') // Nombre del bucket
    .getPublicUrl(filePath); // Obtenemos la URL pública
    return (data === null || data === void 0 ? void 0 : data.publicUrl) || ''; // Retorna la URL pública
  }
}
_SupabaseService = SupabaseService;
_SupabaseService.ɵfac = function SupabaseService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SupabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
_SupabaseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: _SupabaseService,
  factory: _SupabaseService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  "api_url": "https://xexvjjrvjjxmgpbccipz.supabase.co/rest/v1/",
  "apiKeySupabase": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleHZqanJ2amp4bWdwYmNjaXB6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODI0MTI1OSwiZXhwIjoyMDQzODE3MjU5fQ.apERQut3NXEoruKEIhIxpd_2mLmrEGhZGKwCAAMmp9s",
  "storage_url": "https://xexvjjrvjjxmgpbccipz.supabase.co"
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 8996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		7518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		1981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		1603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		2273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		2095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		2335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		7184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		1769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-ae11fd43_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		6534,
		"default-node_modules_ionic_core_dist_esm_data-ae11fd43_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		5458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		6034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
	],
	"./ion-input.entry.js": [
		761,
		"default-node_modules_ionic_core_dist_esm_input_utils-09c71bc7_js-node_modules_ionic_core_dist-8b8a84",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		8353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		1024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		9160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-option.entry.js": [
		8442,
		"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
	],
	"./ion-picker-column.entry.js": [
		3110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
	],
	"./ion-picker.entry.js": [
		5575,
		"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
	],
	"./ion-popover.entry.js": [
		6772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		4639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		7971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		3184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		2392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		6059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_input_utils-09c71bc7_js-node_modules_ionic_core_dist-8b8a84",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 4140;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 477:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map