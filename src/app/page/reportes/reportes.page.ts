import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase/supabase.service';
import { HttpResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { AutenticacionService } from '../../service/autenticacion/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
  reportes: any[] = [];

  nuevoReporte = {
    id_region: '',
    id_tipo_vehiculo: '',
    color: '',
    patente: '',
    modelo: '',
    id_marca: '',
    fecha_publicacion: '',
    desconocidoModelo: false,  // Propiedad para el toggle
    desconocidoPatente: false  // Propiedad para el toggle
  };

  constructor(
    private supabaseService: SupabaseService,
    private alertController: AlertController,
    private AutenticacionService: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarReportes(); // Cargar reportes al iniciar
  }

  cargarReportes() {
    this.supabaseService.getReportes().subscribe({
      next: (response: HttpResponse<any>) => {
        this.reportes = response.body;
      },
      error: (err) => {
        console.error('Error al cargar reportes:', err);
      }
    });
  }

  onDesconocidoModelo() {
    if (this.nuevoReporte.desconocidoModelo) {
      this.nuevoReporte.modelo = 'Desconocido'; // Almacenar como "desconocido"
    } else {
      this.nuevoReporte.modelo = ''; // Reiniciar el modelo si se desactiva
    }
  }

  onDesconocidoPatente() {
    if (this.nuevoReporte.desconocidoPatente) {
      this.nuevoReporte.patente = 'Desconocido'; // Almacenar como "desconocido"
    } else {
      this.nuevoReporte.patente = ''; // Reiniciar la patente si se desactiva
    }
  }

  async agregarReporte() {
    const today = new Date();
    this.nuevoReporte.fecha_publicacion = today.toISOString().split('T')[0];
    console.log("Formulario enviado");
    this.router.navigate(['home'])

    // Validar campos vacíos y longitud de campos
    if (!this.nuevoReporte.id_region || !this.nuevoReporte.id_tipo_vehiculo || !this.nuevoReporte.id_marca ||
      (!this.nuevoReporte.modelo && !this.nuevoReporte.desconocidoModelo) ||
      (!this.nuevoReporte.patente && !this.nuevoReporte.desconocidoPatente) ||
      !this.nuevoReporte.color) {
      await this.presentErrorAlert('Por favor, completa todos los campos requeridos.');
      return; // Salir del método si hay campos vacíos
    }

    // Validación de longitud de la patente
    if (this.nuevoReporte.patente && !this.nuevoReporte.desconocidoPatente) {
      const patenteLength = this.nuevoReporte.patente.length;
      if (patenteLength < 5 || patenteLength > 6) {
        await this.presentErrorAlert('Patente no corresponde');
        return; // Salir del método si la longitud de la patente es incorrecta
      }
    }

    // Obtener el rut del usuario autenticado directamente
    this.AutenticacionService.obtenerRutUsuario().subscribe({
      next: (rutUsuario) => {
        if (!rutUsuario) {
          this.presentErrorAlert('Error: Usuario no autenticado. Por favor, inicia sesión.');
          return;
        }

        // Crear un nuevo objeto con solo las propiedades que existen en la tabla 'reporte'
        const reporteData = {
          id_region: this.nuevoReporte.id_region,
          id_tipo_vehiculo: this.nuevoReporte.id_tipo_vehiculo,
          color: this.nuevoReporte.color,
          // Establecer "Desconocido" si el usuario ha marcado el toggle
          patente: this.nuevoReporte.desconocidoPatente ? 'Desconocido' : this.nuevoReporte.patente,
          modelo: this.nuevoReporte.desconocidoModelo ? 'Desconocido' : this.nuevoReporte.modelo,
          id_marca: this.nuevoReporte.id_marca,
          fecha_publicacion: this.nuevoReporte.fecha_publicacion,
          rut_usuario: rutUsuario // Incluir el rut del usuario autenticado
        };

        // Llamar al servicio de Supabase para agregar el reporte
        this.supabaseService.addReporte(reporteData).subscribe({
          next: async (response) => {
            console.log('Respuesta del servidor:', response);
            this.cargarReportes(); // Volver a cargar los reportes después de agregar
            this.resetNuevoReporte(); // Reiniciar el formulario
            await this.presentSuccessAlert('Reporte agregado con éxito.'); // Mostrar mensaje de éxito
          },
          error: (err) => {
            console.error('Error al agregar reporte:', err);
            this.presentErrorAlert('Error al agregar el reporte. Intenta nuevamente.');
          }
        });
      },
      error: (err) => {
        console.error('Error al obtener el RUT del usuario:', err);
        this.presentErrorAlert('Error al obtener el RUT del usuario.');
      }
    });

    console.log('Reporte agregado:', this.nuevoReporte);
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  cancelar(){
    this.router.navigate(['/home'])
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
      desconocidoModelo: false,  // Reiniciar estado del toggle
      desconocidoPatente: false  // Reiniciar estado del toggle
    };
  }
}
