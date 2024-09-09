import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReportesService {
  // Lista de reportes (puedes inicializarla con algunos valores de ejemplo)
  private reportes = [
    {
      region: 'Región Metropolitana',
      tipoVehiculo: 'Sedán',
      color: 'Rojo',
      patente: 'ABC1234',
    },
   
  ];

  constructor() {}

  // Método para obtener la lista de reportes
  getReportes() {
    return this.reportes;
  }

  // Método para agregar un nuevo reporte
  agregarReporte(reporte: any) {
    this.reportes.push(reporte);
  }
}
