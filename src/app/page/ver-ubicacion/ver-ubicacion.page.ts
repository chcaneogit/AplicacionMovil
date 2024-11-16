import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-ver-ubicacion',
  templateUrl: './ver-ubicacion.page.html',
  styleUrls: ['./ver-ubicacion.page.scss'],
})
export class VerUbicacionPage implements OnInit {
  ubicacion: string | null = null;
  map: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.ubicacion = params['ubicacion'];
      this.loadGoogleMaps();
    });
  }

  loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDRsFGmvUnCW63BCMGfwpCfqBIswI_KWUE`;
    script.defer = true;
    script.onload = () => this.initializeMap();
    document.body.appendChild(script);
  }

  initializeMap() {
    if (this.ubicacion) {
      const [lat, lng] = this.ubicacion.split(',').map(Number);

      const mapOptions = {
        center: { lat, lng },
        zoom: 15,
      };

      this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      new google.maps.Marker({
        position: { lat, lng },
        map: this.map,
      });
    }
  }
}
