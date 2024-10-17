import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  baseUrl = environment.api_url;

  constructor(private http: HttpClient) { }

  // Configurar headers comunes
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'apiKey': environment.apiKeySupabase,
      'Authorization': `Bearer ${environment.apiKeySupabase}`
    });
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    console.error('Error ocurrido:', error);
    return throwError(() => error);
  }

  // Método GET genérico
  get<T>(path: string, params?: HttpParams): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, { headers: this.getHeaders(), observe: 'response', params })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método POST genérico
  post<T>(path: string, data: T): Observable<HttpResponse<T>> {
    return this.http.post<T>(`${this.baseUrl}${path}`, data, { headers: this.getHeaders(), observe: 'response' })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Métodos específicos para reportes
  getReportes(): Observable<HttpResponse<any>> {
  const params = new HttpParams().set('select', '*, region(*), tipo_vehiculo(*), marca(*)');
  return this.get<any>('reporte', params); // Usar el método genérico
}


  addReporte(reporte: any): Observable<HttpResponse<any>> {
    return this.post<any>('reporte', reporte);
  }

  // src/app/service/supabase/supabase.service.ts
getReportesByUsuario(rutUsuario: string): Observable<HttpResponse<any>> {
  const params = new HttpParams()
      .set('rut_usuario', `eq.${rutUsuario}`)
      .set('select', '*, region(*), tipo_vehiculo(*), marca(*)'); // Incluir las relaciones

  return this.get<any>('reporte', params) // Asegúrate de que la ruta sea correcta
    .pipe(
      catchError(this.handleError)
    );
}


  // Métodos específicos para usuarios
  getUsuarios(): Observable<HttpResponse<any>> {
    return this.get<any>('usuario'); // Usar el método genérico
  }

  addUsuario(usuario: any): Observable<HttpResponse<any>> {
    return this.post<any>('usuario', usuario); // Usar el método genérico
  }

  getUsuarioByRut(rut: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuario?rut=eq.${rut}`, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError) // Manejar errores
      );
  }

  getUsuarioByCorreo(correo: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuario?correo=eq.${correo}`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }
  updateUsuario(usuario: any): Observable<HttpResponse<any>> {
    const path = `usuario?rut=eq.${usuario.rut}`;
    return this.http.put<any>(`${this.baseUrl}/${path}`, usuario, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

}


