import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/service/supabase/supabase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  reportes: any[] = []; // Almacena los reportes

  constructor(private supabaseService: SupabaseService) {}

  ngOnInit() {
    // Obtener los reportes desde Supabase
    this.supabaseService.getReportes().subscribe({
      next: (response) => {
        // Maneja la respuesta aquí
        if (response.body) {
          this.reportes = response.body; // Almacena los reportes
          console.log('Reportes obtenidos:', this.reportes);
        }
      },
      error: (err) => {
        console.error('Error al obtener reportes:', err); // Manejar el error
      }
    });
  }

  verificarReportes() {
    console.log('Reportes en HomePage:', this.reportes); // Muestra los reportes en la consola al hacer clic en el botón
  }
}
