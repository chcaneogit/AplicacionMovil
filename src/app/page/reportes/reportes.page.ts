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
  marker: any;

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
    fotoUri: '',  // Guardará la URI de la foto tomada
    ubicacion:''
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
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDRsFGmvUnCW63BCMGfwpCfqBIswI_KWUE`;
    script.defer = true;

    script.onload = async () => {
      try {
        // Obtener la ubicación del usuario antes de inicializar el mapa
        await this.getUserLocation();

        // Inicializar el mapa con la ubicación del usuario
        this.initializeMap();
      } catch (error) {
        console.error('Error durante la carga de Google Maps o la obtención de la ubicación:', error);
        this.presentErrorAlert('No se pudo cargar el mapa. Verifica tus configuraciones de GPS.');
      }
    };

    document.body.appendChild(script);
  }


  async getUserLocation() {
    try {
      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      });

      this.userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      console.log('Ubicación del usuario:', this.userPosition);
    } catch (error) {
      console.error('Error al obtener la ubicación del usuario:', error);
      this.userPosition = null; // Manejar la falta de ubicación
      throw error;
    }
  }



  updateUserLocation() {
    this.getUserLocation().then(() => {
      if (this.userPosition) {
        // Centrar el mapa en la nueva ubicación
        this.map.setCenter(this.userPosition);

        // Elimina el marcador anterior si existe
        if (this.marker) {
          this.marker.setMap(null);
        }

        // Agrega el nuevo marcador en la ubicación actualizada
        this.marker = new google.maps.Marker({
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
      center: this.userPosition || { lat: -33.4489, lng: -70.6693 }, // Default: Santiago, Chile
      zoom: 15, // Nivel de zoom cercano para la ubicación actual
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Agregar marcador en la ubicación actual del usuario si está disponible
    if (this.userPosition) {
      this.marker = new google.maps.Marker({
        position: this.userPosition,
        map: this.map,
        title: 'Ubicación Actual',
      });
    } else {
      console.log('No se pudo inicializar el marcador porque no se obtuvo la ubicación del usuario.');
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
    console.log("Formulario enviado");

    // Validaciones previas
    if (!this.nuevoReporte.id_region || !this.nuevoReporte.id_tipo_vehiculo || !this.nuevoReporte.id_marca ||
      (!this.nuevoReporte.modelo && !this.nuevoReporte.desconocidoModelo) ||
      (!this.nuevoReporte.patente && !this.nuevoReporte.desconocidoPatente) ||
      !this.nuevoReporte.color) {
      await this.presentErrorAlert('Por favor, completa todos los campos requeridos.');
      return;
    }

    // Validación de la patente
    if (this.nuevoReporte.patente && !this.nuevoReporte.desconocidoPatente) {
      const patenteLength = this.nuevoReporte.patente.length;
      if (patenteLength < 5 || patenteLength > 6) {
        await this.presentErrorAlert('Patente no corresponde');
        return;
      }
    }

    // Validación de foto: Si no hay foto, no permitir enviar el reporte
    if (!this.nuevoReporte.fotoUri) {
      await this.presentErrorAlert('Por favor, toma una foto antes de enviar el reporte.');
      return;
    }

    // Validar que las coordenadas del usuario estén disponibles
    if (!this.userPosition) {
      await this.presentErrorAlert('No se pudo obtener la ubicación. Por favor, intenta nuevamente.');
      return;
    }

    this.autenticacionService.obtenerRutUsuario().subscribe({
      next: (rutUsuario) => {
        if (!rutUsuario) {
          this.presentErrorAlert('Error: Usuario no autenticado. Por favor, inicia sesión.');
          return;
        }

        const reporteData = {
          id_region: this.nuevoReporte.id_region,
          id_tipo_vehiculo: this.nuevoReporte.id_tipo_vehiculo,
          color: this.nuevoReporte.color,
          patente: this.nuevoReporte.desconocidoPatente ? 'Desconocido' : this.nuevoReporte.patente,
          modelo: this.nuevoReporte.desconocidoModelo ? 'Desconocido' : this.nuevoReporte.modelo,
          id_marca: this.nuevoReporte.id_marca,
          fecha_publicacion: this.nuevoReporte.fecha_publicacion,
          rut_usuario: rutUsuario,
          foto: '',
          ubicacion: `${this.userPosition?.lat},${this.userPosition?.lng}` // Almacenar las coordenadas en el campo "ubicacion"
        };

        // Subir la foto si se ha capturado una
        if (this.nuevoReporte.fotoUri) {
          this.subirFoto(this.nuevoReporte.fotoUri).then((publicUrl) => {
            reporteData.foto = publicUrl; // Incluir la URL de la foto subida

            // Agregar el reporte con la URL de la foto y la ubicación
            this.supabaseService.addReporte(reporteData).subscribe({
              next: async (response) => {
                console.log('Respuesta del servidor:', response);
                this.cargarReportes();
                this.resetNuevoReporte();
                await this.presentSuccessAlert('Reporte agregado con éxito.');
              },
              error: (err) => {
                console.error('Error al agregar reporte:', err);
                this.presentErrorAlert('Error al agregar el reporte. Intenta nuevamente.');
              }
            });
          });
        }
      },
      error: (err) => {
        console.error('Error al obtener el RUT del usuario:', err);
        this.presentErrorAlert('Error al obtener el RUT del usuario.');
      }
    });

    console.log('Reporte agregado:', this.nuevoReporte);
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
      fotoUri: '',
      ubicacion:''
    };
  }

  async tomarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,  // Usar Uri para obtener una referencia de la foto
        source: CameraSource.Camera
      });

      // Guardar la URI de la imagen capturada
      this.nuevoReporte.fotoUri = image.webPath!;
      console.log('Foto tomada correctamente:', this.nuevoReporte.fotoUri);
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }


  async subirFoto(fotoUri: string) {
    try {
      const response = await fetch(fotoUri);
      const blob = await response.blob();

      // Generar un nombre único para la imagen en el bucket (por ejemplo, con un timestamp)
      const fileName = `${new Date().getTime()}.jpg`; // Nombre único basado en el timestamp

      // Subir la imagen al bucket de Supabase
      const filePath = await this.supabaseService.uploadFile(fileName, blob);

      // Obtener la URL pública de la imagen
      const publicUrl = this.supabaseService.getPublicUrl(filePath);
      console.log('Foto subida correctamente:', publicUrl);
      return publicUrl;
    } catch (error) {
      console.error('Error al subir la foto:', error);
      throw error;
    }
  }
}
