import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  // Variable para almacenar el nuevo reporte
  nuevoReporte = {
    region: '',
    tipoVehiculo: '',
    color: '',
    patente: ''
  };

  // Lista para almacenar los reportes
  reportes: Array<any> = [];

  constructor() { }

  ngOnInit() {
    // Inicializar con reportes predefinidos o cargar desde una fuente de datos
    // this.reportes = [{ region: 'Región 1', tipoVehiculo: 'SUV', color: 'Rojo', patente: 'ABC123' }];
  }

  agregarReporte() {
    if (this.nuevoReporte.region && this.nuevoReporte.tipoVehiculo && this.nuevoReporte.color && this.nuevoReporte.patente) {
      this.reportes.push({...this.nuevoReporte});
      // Limpiar los campos después de agregar el reporte
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
