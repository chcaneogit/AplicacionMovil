import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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
    modelo: '',
    desconocidoModelo: false,
    desconocidoPatente: false
  };

  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
    private alertController: AlertController,
    private router: Router
  ) {}

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

          if (this.reporte.modelo === 'Desconocido') {
            this.reporte.desconocidoModelo = true;
          }

          if (this.reporte.patente === 'Desconocido') {
            this.reporte.desconocidoPatente = true;
          }

        } else {
          console.error('No se encontró el reporte');
        }
      },
      error: (err: any) => {
        console.error('Error al cargar el reporte:', err);
      }
    });
  }

  onDesconocidoModelo() {
    if (this.reporte.desconocidoModelo) {
      this.reporte.modelo = 'Desconocido';
    } else {
      this.reporte.modelo = '';
    }
  }

  onDesconocidoPatente() {
    if (this.reporte.desconocidoPatente) {
      this.reporte.patente = 'Desconocido';
    } else {
      this.reporte.patente = '';
    }
  }

  // Método para mostrar alertas de éxito o error
  async mostrarAlerta(mensaje: string, esExito: boolean) {
    const alert = await this.alertController.create({
      header: esExito ? 'Éxito' : 'Error',
      message: mensaje,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (esExito) {
              this.router.navigate(['ver-reporte']);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  // Validaciones para los campos color, patente y modelo
  validarCampos(): boolean {
    if (!this.reporte.color) {
      this.mostrarAlerta('El campo color es obligatorio', false);
      return false;
    }

    if (!this.reporte.desconocidoPatente && !this.reporte.patente) {
      this.mostrarAlerta('El campo patente es obligatorio o debe seleccionar "Desconocido"', false);
      return false;
    }

    if (!this.reporte.desconocidoModelo && !this.reporte.modelo) {
      this.mostrarAlerta('El campo modelo es obligatorio o debe seleccionar "Desconocido"', false);
      return false;
    }

    return true;
  }

  guardarCambios() {
    if (!this.validarCampos()) {
      return; // Si las validaciones fallan, no continuar
    }

    if (this.id_reporte) {
      const updatedData = {
        id_reporte: this.id_reporte,
        color: this.reporte.color,
        patente: this.reporte.desconocidoPatente ? 'Desconocido' : this.reporte.patente,
        modelo: this.reporte.desconocidoModelo ? 'Desconocido' : this.reporte.modelo
      };

      this.supabaseService.updateReporte(updatedData).subscribe({
        next: (response: HttpResponse<any>) => {
          console.log('Reporte actualizado:', response);
          this.mostrarAlerta('El reporte se actualizó correctamente', true); // Mostrar mensaje de éxito
        },
        error: (err: any) => {
          console.error('Error al actualizar el reporte:', err);
          this.mostrarAlerta('Hubo un error al actualizar el reporte', false); // Mostrar mensaje de error
        }
      });
    } else {
      console.error('El ID del reporte es undefined');
    }
  }
}
