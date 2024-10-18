import { Role } from "./role";

export interface Usuario{
    rut: number|null;
    dv: string;
    nombre: string;
    password: string;
    correo: string;
    fecha_nacimiento: string;
}
