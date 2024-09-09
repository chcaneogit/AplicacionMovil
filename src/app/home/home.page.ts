import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../service/reportes.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  reportes: any[] = [];

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    // Aquí obtendremos los reportes desde el servicio
    this.reportes = this.reportesService.getReportes();
  }
}
