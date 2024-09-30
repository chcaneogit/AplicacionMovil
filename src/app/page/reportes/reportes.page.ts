// src/app/page/reportes/reportes.page.ts
import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../service/reportes/reportes.service';

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

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    this.reportes = this.reportesService.getReportes();
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
      this.nuevoReporte.patente = ''; // Reiniciar el modelo si se desactiva
    }
  }

  agregarReporte() {
    const today = new Date();
    this.nuevoReporte.fecha_publicacion = today.toISOString().split('T')[0];

    this.reportesService.agregarReporte({ ...this.nuevoReporte });

    this.reportes = this.reportesService.getReportes();

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
