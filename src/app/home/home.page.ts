import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importar Router
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
    private router: Router // Inyectar Router
  ) {}

  ngOnInit() {
    this.supabaseService.getReportes().subscribe({
      next: (response) => {
        if (response.body) {
          this.reportes = response.body;
          console.log('Reportes obtenidos:', this.reportes);
        }
      },
      error: (err) => {
        console.error('Error al obtener reportes:', err);
      }
    });
  }


  async verificarReportes() {
    if (!this.autenticacionService.estaAutenticado()) {
      const alert = await this.alertController.create({
        header: 'Acceso Denegado',
        message: 'Debe iniciar sesión para poder ver la ubicación.',
        buttons: ['OK']
      });

      await alert.present();
    } else {
      // Navegar a la página de ver-ubicacion
      this.router.navigate(['/ver-ubicacion']);
    }
  }

}
