import { Region } from './region';
import { Marca } from './marca';
import { TipoVehiculo } from './tipo-vehiculo';

export interface Reporte {
  id_reporte: number;
  color: string;
  patente: string;
  modelo: string;
  fecha_publicacion: Date;
  rut_usuario: string;
  region: Region;
  tipo_vehiculo: TipoVehiculo;
  marca: Marca;
}
