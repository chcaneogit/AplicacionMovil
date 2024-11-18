import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MapsService {
  private scriptLoaded = false;

  loadGoogleMaps(): Promise<void> {
    if (this.scriptLoaded) {
      return Promise.resolve(); // Si el script ya se cargó, no hacer nada
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDRsFGmvUnCW63BCMGfwpCfqBIswI_KWUE`; // Cambia tu API key aquí
      script.defer = true;

      script.onload = () => {
        this.scriptLoaded = true;
        resolve();
      };

      script.onerror = (error) => {
        console.error('Error al cargar Google Maps:', error);
        reject(error);
      };

      document.body.appendChild(script);
    });
  }
}
