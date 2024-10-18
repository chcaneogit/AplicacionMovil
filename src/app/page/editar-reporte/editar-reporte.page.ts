import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';

@Component({
  selector: 'app-editar-reporte',
  templateUrl: './editar-reporte.page.html',
  styleUrls: ['./editar-reporte.page.scss'],
})
export class EditarReportePage implements OnInit {
  id_reporte: number | null = null;
  reporte: any = {
    color: '',
    patente: '',
    modelo: ''
  };

  constructor(private route: ActivatedRoute, private supabaseService: SupabaseService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id_reporte');
      this.id_reporte = idParam ? +idParam : null;
      if (this.id_reporte) {
        this.cargarReporte(this.id_reporte);
      } else {
        console.error('El ID del reporte es undefined');
      }
    });
  }

  cargarReporte(id: number) {
    this.supabaseService.getReporteById(id).subscribe({
      next: (report: HttpResponse<any>) => {
        if (report.body) {
          this.reporte = report.body;
          console.log(this.reporte);
        } else {
          console.error('No se encontró el reporte');
        }
      },
      error: (err: any) => {
        console.error('Error al cargar el reporte:', err);
      }
    });
  }

  guardarCambios() {
    if (this.id_reporte) {
      const updatedData = {
        id_reporte: this.id_reporte,
        color: this.reporte.color,
        patente: this.reporte.patente,
        modelo: this.reporte.modelo,
      };

      this.supabaseService.updateReporte(updatedData).subscribe({
        next: (response: HttpResponse<any>) => {  // Especifica el tipo de response
          console.log('Reporte actualizado:', response);
          // Puedes agregar una notificación o redirigir al usuario a otra página
        },
        error: (err: any) => {  // Especifica el tipo de err
          console.error('Error al actualizar el reporte:', err);
        }
      });
    } else {
      console.error('El ID del reporte es undefined');
    }
  }

}
