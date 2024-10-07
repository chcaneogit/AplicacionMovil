// src/app/page/reportes/reportes.page.ts
import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase/supabase.service';
import { HttpResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  reportes: any[] = [];

  nuevoReporte = {
    region: '',
    tipo_vehiculo: '',
    color: '',
    patente: '',
    modelo: '',
    marca: '',
    fecha_publicacion: '',
    desconocidoModelo: false,  // Propiedad para el toggle
    desconocidoPatente: false  // Propiedad para el toggle
  };

  constructor(private supabaseService: SupabaseService, private alertController: AlertController) { }

  ngOnInit() {
    this.cargarReportes(); // Cargar reportes al iniciar
  }

  cargarReportes() {
    this.supabaseService.getReportes().subscribe({
      next: (response: HttpResponse<any>) => {
        this.reportes = response.body; // Asumimos que los datos vienen en el body
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

    // Validar campos vacíos y longitud de campos
if (!this.nuevoReporte.region || !this.nuevoReporte.tipo_vehiculo || !this.nuevoReporte.marca ||
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

    // Crear un nuevo objeto con solo las propiedades que existen en la tabla 'reporte'
    const reporteData = {
      region: this.nuevoReporte.region,
      tipo_vehiculo: this.nuevoReporte.tipo_vehiculo,
      color: this.nuevoReporte.color,
      // Establecer "Desconocido" si el usuario ha marcado el toggle
      patente: this.nuevoReporte.desconocidoPatente ? 'Desconocido' : this.nuevoReporte.patente,
      modelo: this.nuevoReporte.desconocidoModelo ? 'Desconocido' : this.nuevoReporte.modelo,
      marca: this.nuevoReporte.marca,
      fecha_publicacion: this.nuevoReporte.fecha_publicacion,
    };

    this.supabaseService.addReporte(reporteData).subscribe({
      next: () => {
        this.cargarReportes(); // Volver a cargar los reportes después de agregar
        this.resetNuevoReporte(); // Reiniciar el formulario
      },
      error: (err) => {
        console.error('Error al agregar reporte:', err);
        this.presentErrorAlert('Error al agregar el reporte. Intenta nuevamente.');
      }
    });
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  resetNuevoReporte() {
    this.nuevoReporte = {
      region: '',
      tipo_vehiculo: '',
      marca: '',
      modelo: '', // Reiniciar modelo
      color: '',
      patente: '',
      fecha_publicacion: '',
      desconocidoModelo: false,  // Reiniciar estado del toggle
      desconocidoPatente: false  // Reiniciar estado del toggle
    };
  }
}
