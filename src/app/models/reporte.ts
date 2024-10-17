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
  id_region: Region;
  id_tipo_vehiculo: TipoVehiculo;
  id_marca: Marca;
}
