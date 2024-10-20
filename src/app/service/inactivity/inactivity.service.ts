import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  private timeout: any;
  private sessionDuration = 5 * 60 * 1000;

  constructor(
    private router: Router,
    private authService: AutenticacionService

  ) {
    this.startTimer(); // Iniciar el temporizador al crear el servicio
    this.setupEventListeners(); // Configurar los oyentes de eventos para la inactividad
  }

  // Iniciar el temporizador de inactividad
  private startTimer() {
    this.resetTimer();
  }

  // Resetear el temporizador
  private resetTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.authService.cerrarSesion();
    }, this.sessionDuration);
  }

  // Configurar los oyentes de eventos
  private setupEventListeners() {
    window.onload = this.resetTimer.bind(this);
    window.onmousemove = this.resetTimer.bind(this);
    window.onscroll = this.resetTimer.bind(this);
  }
}
