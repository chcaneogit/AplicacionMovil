import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AutenticacionService } from '../service/autenticacion/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  reportes: any[] = [];

  constructor(
    private supabaseService: SupabaseService,
    private autenticacionService: AutenticacionService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.cargarReportes();
  }

  async cargarReportes() {
    const loading = await this.loadingController.create({
      message: 'Cargando reportes...',
      spinner: 'crescent', // Estilo del cargador
    });
    await loading.present(); // Muestra el cargador

    this.supabaseService.getReportes().subscribe({
      next: (response) => {
        if (response.body) {
          this.reportes = response.body;
          console.log('Reportes obtenidos:', this.reportes);
        }
      },
      error: (err) => {
        console.error('Error al obtener reportes:', err);
      },
      complete: () => {
        loading.dismiss(); // Oculta el cargador cuando los reportes se cargan
      },
    });
  }

  doRefresh(event: any) {
    console.log('Actualizando reportes...');

    // Muestra el cargador mientras se actualizan los reportes
    this.cargarReportes();

    // Finalizar el refresher
    event.target.complete();
  }

  async verificarReportes(reporte: any) {
    if (!this.autenticacionService.estaAutenticado()) {
      const alert = await this.alertController.create({
        header: 'Acceso Denegado',
        message: 'Debe iniciar sesión para poder ver la ubicación.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      this.router.navigate(['/ver-ubicacion'], {
        queryParams: {
          ubicacion: reporte.ubicacion,
          modelo: reporte.modelo,
          patente: reporte.patente,
        },
      });
    }
  }
}
