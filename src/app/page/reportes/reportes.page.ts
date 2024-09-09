// src/app/page/reportes/reportes.page.ts
import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../service/reportes.service'; 

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  // Variable para almacenar la lista de reportes
  reportes: any[] = [];

  // Objeto para un nuevo reporte
  nuevoReporte = {
    region: '',
    tipoVehiculo: '',
    color: '',
    patente: ''
  };

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    // Cargar los reportes existentes al iniciar el componente
    this.reportes = this.reportesService.getReportes();
  }

  // Método para agregar un nuevo reporte
  agregarReporte() {
    if (this.nuevoReporte.region && this.nuevoReporte.tipoVehiculo && this.nuevoReporte.color && this.nuevoReporte.patente) {
      // Agregar el nuevo reporte
      this.reportesService.agregarReporte({...this.nuevoReporte});
      
      // Actualizar la lista de reportes
      this.reportes = this.reportesService.getReportes();

      // Reiniciar el formulario
      this.nuevoReporte = {
        region: '',
        tipoVehiculo: '',
        color: '',
        patente: ''
      };
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
