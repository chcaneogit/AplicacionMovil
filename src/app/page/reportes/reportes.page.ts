import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../../service/supabase/supabase.service';
import { HttpResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { AutenticacionService } from '../../service/autenticacion/autenticacion.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
  reportes: any[] = [];
  map: any;
  userPosition: { lat: number; lng: number } | null = null;

  nuevoReporte = {
    id_region: '',
    id_tipo_vehiculo: '',
    color: '',
    patente: '',
    modelo: '',
    id_marca: '',
    fecha_publicacion: '',
    desconocidoModelo: false,
    desconocidoPatente: false,
    foto: '',
  };

  constructor(
    private supabaseService: SupabaseService,
    private alertController: AlertController,
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarReportes();
    this.loadGoogleMaps();
  }

  async loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDRsFGmvUnCW63BCMGfwpCfqBIswI_KWUE`; // Reemplaza con tu clave de API de Google Maps
    script.async = true;
    script.defer = true;
    script.onload = async () => {
      await this.getUserLocation(); // Obtén la ubicación del usuario
      this.initializeMap();
    };
    document.body.appendChild(script);
  }

  async getUserLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      console.log("Ubicación del usuario:", this.userPosition);
    } catch (error) {
      console.error("Error al obtener la ubicación del usuario:", error);
      this.userPosition = { lat: -34.397, lng: 150.644 }; // Coordenadas predeterminadas en caso de error
    }
  }

  updateUserLocation() {
    this.getUserLocation().then(() => {
      if (this.userPosition) {
        // Actualizar el centro del mapa a la nueva ubicación
        this.map.setCenter(this.userPosition);
        // Mover el marcador a la nueva ubicación
        const marker = new google.maps.Marker({
          position: this.userPosition,
          map: this.map,
          title: 'Ubicación Actual',
        });
      }
    }).catch(error => {
      console.error('Error al actualizar la ubicación:', error);
    });
  }

  initializeMap() {
    const mapOptions = {
      center: this.userPosition || { lat: -34.397, lng: 150.644 }, // Ubicación actual o coordenadas por defecto
      zoom: 15, // Nivel de zoom cercano para la ubicación actual
    };
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Agregar marcador en la ubicación actual del usuario
    if (this.userPosition) {
      new google.maps.Marker({
        position: this.userPosition,
        map: this.map,
        title: "Ubicación Actual",
      });
    }
  }

  cargarReportes() {
    this.supabaseService.getReportes().subscribe({
      next: (response: HttpResponse<any>) => {
        this.reportes = response.body;
      },
      error: (err) => {
        console.error('Error al cargar reportes:', err);
      }
    });
  }

  onDesconocidoModelo() {
    this.nuevoReporte.modelo = this.nuevoReporte.desconocidoModelo ? 'Desconocido' : '';
  }

  onDesconocidoPatente() {
    this.nuevoReporte.patente = this.nuevoReporte.desconocidoPatente ? 'Desconocido' : '';
  }

  async agregarReporte() {
    const today = new Date();
    this.nuevoReporte.fecha_publicacion = today.toISOString().split('T')[0];
    if (!this.validarFormulario()) return;

    this.autenticacionService.obtenerRutUsuario().subscribe({
      next: (rutUsuario) => {
        if (!rutUsuario) {
          this.presentErrorAlert('Error: Usuario no autenticado. Por favor, inicia sesión.');
          return;
        }

        const reporteData = {
          ...this.nuevoReporte,
          rut_usuario: rutUsuario,
          foto: '',
        };

        if (this.nuevoReporte.foto) {
          this.subirFoto(this.nuevoReporte.foto).then((publicUrl) => {
            reporteData.foto = publicUrl;

            this.supabaseService.addReporte(reporteData).subscribe({
              next: async () => {
                this.cargarReportes();
                this.resetNuevoReporte();
                await this.presentSuccessAlert('Reporte agregado con éxito.');
              },
              error: () => {
                this.presentErrorAlert('Error al agregar el reporte. Intenta nuevamente.');
              }
            });
          });
        }
      },
      error: () => {
        this.presentErrorAlert('Error al obtener el RUT del usuario.');
      }
    });
  }

  validarFormulario(): boolean {
    const { id_region, id_tipo_vehiculo, id_marca, modelo, patente, color, foto, desconocidoModelo, desconocidoPatente } = this.nuevoReporte;

    if (!id_region || !id_tipo_vehiculo || !id_marca || (!modelo && !desconocidoModelo) || (!patente && !desconocidoPatente) || !color) {
      this.presentErrorAlert('Por favor, completa todos los campos requeridos.');
      return false;
    }

    if (patente && !desconocidoPatente && (patente.length < 5 || patente.length > 6)) {
      this.presentErrorAlert('Patente no corresponde');
      return false;
    }

    if (!foto) {
      this.presentErrorAlert('Por favor, toma una foto antes de enviar el reporte.');
      return false;
    }

    return true;
  }

  async presentErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentSuccessAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  cancelar() {
    this.router.navigate(['/home']);
  }

  resetNuevoReporte() {
    this.nuevoReporte = {
      id_region: '',
      id_tipo_vehiculo: '',
      id_marca: '',
      modelo: '',
      color: '',
      patente: '',
      fecha_publicacion: '',
      desconocidoModelo: false,
      desconocidoPatente: false,
      foto: '',
    };
  }

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
      this.nuevoReporte.foto = image.webPath!;
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  async subirFoto(fotoUri: string) {
    try {
      const response = await fetch(fotoUri);
      const blob = await response.blob();
      const fileName = `${new Date().getTime()}.jpg`;
      const filePath = await this.supabaseService.uploadFile(fileName, blob);
      return this.supabaseService.getPublicUrl(filePath);
    } catch (error) {
      console.error('Error al subir la foto:', error);
      throw error;
    }
  }
}
