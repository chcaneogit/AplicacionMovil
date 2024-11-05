import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase/supabase.service';
import { HttpResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { AutenticacionService } from '../../service/autenticacion/autenticacion.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

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
    desconocidoModelo: false,
    desconocidoPatente: false,
    foto: ''  // Propiedad temporal para almacenar la foto
  };

  constructor(
    private supabaseService: SupabaseService,
    private alertController: AlertController,
    private autenticacionService: AutenticacionService,
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
      this.nuevoReporte.modelo = 'Desconocido';
    } else {
      this.nuevoReporte.modelo = '';
    }
  }

  onDesconocidoPatente() {
    if (this.nuevoReporte.desconocidoPatente) {
      this.nuevoReporte.patente = 'Desconocido';
    } else {
      this.nuevoReporte.patente = '';
    }
  }

  async agregarReporte() {
    const today = new Date();
    this.nuevoReporte.fecha_publicacion = today.toISOString().split('T')[0];
    console.log("Formulario enviado");

    if (!this.nuevoReporte.id_region || !this.nuevoReporte.id_tipo_vehiculo || !this.nuevoReporte.id_marca ||
      (!this.nuevoReporte.modelo && !this.nuevoReporte.desconocidoModelo) ||
      (!this.nuevoReporte.patente && !this.nuevoReporte.desconocidoPatente) ||
      !this.nuevoReporte.color) {
      await this.presentErrorAlert('Por favor, completa todos los campos requeridos.');
      return;
    }

    if (this.nuevoReporte.patente && !this.nuevoReporte.desconocidoPatente) {
      const patenteLength = this.nuevoReporte.patente.length;
      if (patenteLength < 5 || patenteLength > 6) {
        await this.presentErrorAlert('Patente no corresponde');
        return;
      }
    }

    this.autenticacionService.obtenerRutUsuario().subscribe({
      next: (rutUsuario) => {
        if (!rutUsuario) {
          this.presentErrorAlert('Error: Usuario no autenticado. Por favor, inicia sesión.');
          return;
        }

        const reporteData = {
          id_region: this.nuevoReporte.id_region,
          id_tipo_vehiculo: this.nuevoReporte.id_tipo_vehiculo,
          color: this.nuevoReporte.color,
          patente: this.nuevoReporte.desconocidoPatente ? 'Desconocido' : this.nuevoReporte.patente,
          modelo: this.nuevoReporte.desconocidoModelo ? 'Desconocido' : this.nuevoReporte.modelo,
          id_marca: this.nuevoReporte.id_marca,
          fecha_publicacion: this.nuevoReporte.fecha_publicacion,
          rut_usuario: rutUsuario
        };

        this.supabaseService.addReporte(reporteData).subscribe({
          next: async (response) => {
            console.log('Respuesta del servidor:', response);
            this.cargarReportes();
            this.resetNuevoReporte();
            await this.presentSuccessAlert('Reporte agregado con éxito.');
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
      foto: ''  // Reiniciar la foto
    };
  }

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
  
      // Asignar solo si image.dataUrl es definido
      if (image.dataUrl) {
        this.nuevoReporte.foto = image.dataUrl;
      } else {
        console.error('No se pudo obtener la foto');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
  
}
