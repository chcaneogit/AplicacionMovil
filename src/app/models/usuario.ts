import { Role } from "./role";

import interface Usuario{
    id: number;
    nombre: string;
    username: string;
    password: string;
    role: Role[]

    apellido: string;
    email: string;
    edad: number;
}