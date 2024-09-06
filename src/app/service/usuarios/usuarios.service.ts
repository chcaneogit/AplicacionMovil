import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private lista_de_usuarios: Usuario[] = [
    {
      rut: '11111-1',
      nombre: "Carlos Mendoxsxaza",
      password: "password123",
      correo: "ejemplo1@ejemplo.com",
      edad: 28,
      role: [
        { id: 1, nombre: "cliente" }
      ],
   
    },
    {
      rut: '11111-2',
      nombre: "Carlos asd",
      password: "password123",
      correo: "ejemplo2@ejemplo.com",
      edad: 28,
      role: [
        { id: 2, nombre: "administrador" }
      ],
   
    },
    {
      rut: '11111-1',
      nombre: "Carlos dsd",
      password: "password123",
      correo: "ejemplo3@ejemplo.com",
      edad: 28,
      role: [
        { id: 1, nombre: "cliente" }
      ],
   
    },
  ];
  
  constructor() { }

  public obtener_lista_usuarios(): Usuario[]{
    return this.lista_de_usuarios;
  }

  public obtener_info_usuario(username: string): Usuario | undefined{
    console.log(username)
    return this.lista_de_usuarios.find(usuario => username == usuario.correo)
  }

}
