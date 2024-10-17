import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase/supabase.service';
import { AutenticacionService } from '../../service/autenticacion/autenticacion.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-ver-reporte',
  templateUrl: './ver-reporte.page.html',
  styleUrls: ['./ver-reporte.page.scss'],
})
export class VerReportePage implements OnInit {
  reportes: any[] = [];
  rutUsuario: string | null = null; // Para almacenar el RUT del usuario autenticado

  constructor(
    private supabaseService: SupabaseService,
    private autenticacionService: AutenticacionService
  ) {}

  ngOnInit() {
    // Obtener el RUT del usuario autenticado y luego cargar los reportes
    this.autenticacionService.obtenerRutUsuario().subscribe(rut => {
      this.rutUsuario = rut;
      if (this.rutUsuario) {
        this.cargarReportes(); // Cargar reportes solo si el usuario está autenticado
      }
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
}
