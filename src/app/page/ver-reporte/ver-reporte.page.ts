import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase/supabase.service';
import { AutenticacionService } from '../../service/autenticacion/autenticacion.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ver-reporte',
  templateUrl: './ver-reporte.page.html',
  styleUrls: ['./ver-reporte.page.scss'],
})
export class VerReportePage implements OnInit {
  reportes: any[] = [];
  rutUsuario: string | null = null;

  constructor(
    private supabaseService: SupabaseService,
    private autenticacionService: AutenticacionService,
    private router: Router,
    private alertController: AlertController
  ) {}

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
        next: (response: HttpResponse<any>) => {
          this.reportes = response.body; // Extraer el cuerpo de la respuesta
        },
        error: (err) => {
          console.error('Error al cargar reportes:', err);
        }
      });
    }
  }

  navegarAEditarReporte(id_reporte: number) {
    this.router.navigate(['/editar-reporte', id_reporte]);
  }

  async eliminarReporte(id_reporte: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar este reporte?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.supabaseService.deleteReporte(id_reporte).subscribe({
              next: (response) => {
                console.log('Reporte eliminado:', response);
                this.router.navigate(['home'])
              },
              error: (err) => {
                console.error('Error al eliminar el reporte:', err);
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
