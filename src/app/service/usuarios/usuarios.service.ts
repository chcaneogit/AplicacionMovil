import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private lista_de_usuarios: Usuario[] = [
    {
      id: 1,
      nombre: "Carlos",
      apellido: "Mendoza",
      username: "cmendoza",
      password: "password123",
      email: "carlos.mendoza@example.com",
      edad: 28,
      role: [
        { id: 1, nombre: "cliente" }
      ],
   
    },
    {
      id: 2,
      nombre: "Lucía",
      apellido: "Gómez",
      username: "lgomez",
      password: "securepass",
      email: "lucia.gomez@example.com",
      edad: 35,
      role: [
        { id: 2, nombre: "usuario" },
        { id: 3, nombre: "administrador" }
      ],
    
    },
    {
      id: 3,
      nombre: "Diego",
      apellido: "Martínez",
      username: "dmartinez",
      password: "mypassword",
      email: "diego.martinez@example.com",
      edad: 42,
      role: [
        { id: 2, nombre: "usuario" }
      ],
     
    }
  ];
  
  constructor() { }

  public obtener_lista_usuarios(): Usuario[]{
    return this.lista_de_usuarios;
  }

  public obtener_info_usuario(username: string): Usuario | undefined{
    console.log(username)
    return this.lista_de_usuarios.find(usuario => username == usuario.username)
  }

}
