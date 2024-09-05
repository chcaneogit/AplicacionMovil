import { Role } from "./role";

export interface Usuario{
    rut: string;
    nombre: string;
    correo: string;
    password: string;
    role: Role[]
    fecha_nacimiento: string;
}