import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsService } from 'src/app/service/maps/maps.service';

declare var google: any;

@Component({
  selector: 'app-ver-ubicacion',
  templateUrl: './ver-ubicacion.page.html',
  styleUrls: ['./ver-ubicacion.page.scss'],
})
export class VerUbicacionPage implements OnInit {
  ubicacion: string | null = null;
  map: any;

  constructor(private route: ActivatedRoute, private mapsService: MapsService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.ubicacion = params['ubicacion'];
      if (this.ubicacion) {
        this.mapsService
          .loadGoogleMaps()
          .then(() => this.initializeMap())
          .catch((error) => console.error('Error al cargar Google Maps:', error));
      } else {
        console.error('Ubicación no encontrada');
      }
    });
  }

  initializeMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Contenedor del mapa no encontrado');
      return;
    }

    if (this.ubicacion) {
      const [lat, lng] = this.ubicacion.split(',').map(Number);

      const mapOptions = {
        center: { lat, lng },
        zoom: 15,
      };

      if (this.map) {
        // Si el mapa ya existe, redibuja y centra
        google.maps.event.trigger(this.map, 'resize');
        this.map.setCenter(mapOptions.center);
      } else {
        // Inicializa el mapa solo si no existe
        this.map = new google.maps.Map(mapElement, mapOptions);
      }

      new google.maps.Marker({
        position: { lat, lng },
        map: this.map,
      });
    }
  }

}
