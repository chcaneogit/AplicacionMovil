import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './guards/isAuthenticated.guard';
import { isExpiredTimeGuard } from './guards/timeExpired.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./page/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./page/dashboard/dashboard.module').then((m) => m.DashboardPageModule),
    canActivate: [isAuthenticatedGuard, isExpiredTimeGuard],
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./page/registro/registro.module').then(
        (m) => m.RegistroPageModule
      ),
  },
  {
    path: 'reportes', // Nueva ruta para Reportes
    loadChildren: () =>
      import('./page/reportes/reportes.module').then(
        (m) => m.ReportesPageModule
      ),
    canActivate: [isAuthenticatedGuard, isExpiredTimeGuard],
  },
  {
    path: 'ver-reporte',
    loadChildren: () =>
      import('./page/ver-reporte/ver-reporte.module').then(
        (m) => m.VerReportePageModule
      ),
    canActivate: [isExpiredTimeGuard],
  },
  {
    path: 'editar-perfil',
    loadChildren: () =>
      import('./page/editar-perfil/editar-perfil.module').then(
        (m) => m.EditarPerfilPageModule
      ),
    canActivate: [isExpiredTimeGuard],
  },
  {
    path: 'editar-reporte/:id_reporte',
    loadChildren: () =>
      import('./page/editar-reporte/editar-reporte.module').then(
        (m) => m.EditarReportePageModule
      ),
    canActivate: [isExpiredTimeGuard],
  },
  {
    path: 'ver-ubicacion',
    loadChildren: () =>
      import('./page/ver-ubicacion/ver-ubicacion.module').then(
        (m) => m.VerUbicacionPageModule
      ),
    canActivate: [isExpiredTimeGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
