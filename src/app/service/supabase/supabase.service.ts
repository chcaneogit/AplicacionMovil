import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  baseUrl = environment.api_url;
  private reportesSubject = new BehaviorSubject<any[]>([]);
  reportes$ = this.reportesSubject.asObservable();
  private supabase = createClient(environment.storage_url, environment.apiKeySupabase); // Cliente de Supabase

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
    const params = new HttpParams()
      .set('select', '*, region(*), tipo_vehiculo(*), marca(*)')
      .set('order', 'foto.desc');
    return this.get<any>('reporte', params).pipe(
      tap((response) => {
        this.reportesSubject.next(response.body); // Actualiza el BehaviorSubject
      }),
      catchError(this.handleError)
    );
  }

  addReporte(reporte: any): Observable<HttpResponse<any>> {
    return this.post<any>('reporte', reporte).pipe(
      tap(() => this.getReportes().subscribe()) // Llama a getReportes para actualizar la lista
    );
  }

  getReportesByUsuario(rutUsuario: string): Observable<HttpResponse<any>> {
    const params = new HttpParams()
      .set('rut_usuario', `eq.${rutUsuario}`)
      .set('select', '*, region(*), tipo_vehiculo(*), marca(*)') // Incluir las relaciones
      .set('order', 'foto.desc');

    return this.get<any>('reporte', params).pipe(
      catchError(this.handleError)
    );
  }

  getReporteById(id_reporte: number): Observable<HttpResponse<any>> {
    const params = new HttpParams().set('select', '*');
    return this.get<any>(`reporte?id_reporte=eq.${id_reporte}`, params);
  }

  updateReporte(reporte: any): Observable<HttpResponse<any>> {
    const path = `reporte?id_reporte=eq.${reporte.id_reporte}`;
    return this.http.put<any>(`${this.baseUrl}${path}`, reporte, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  deleteReporte(id_reporte: number): Observable<HttpResponse<any>> {
    return this.http.delete<HttpResponse<any>>(`${this.baseUrl}/reporte?id_reporte=eq.${id_reporte}`, { headers: this.getHeaders(), observe: 'response' })
      .pipe(catchError(this.handleError));
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

  // Método para subir un archivo al storage
  async uploadFile(filePath: string, fileBlob: Blob): Promise<any> {
    try {
      const { data, error } = await this.supabase.storage
        .from('fotos') // Nombre del bucket
        .upload(filePath, fileBlob, { upsert: true }); // upsert: true permite sobrescribir si el archivo ya existe

      if (error) {
        throw new Error(`Error al subir el archivo: ${error.message}`);
      }

      return data?.path; // Devolvemos la ruta del archivo
    } catch (error) {
      console.error('Error en el uploadFile:', error);
      throw error;
    }
  }

  // Método para obtener la URL pública de un archivo
  getPublicUrl(filePath: string): string {
    const { data } = this.supabase.storage
      .from('fotos') // Nombre del bucket
      .getPublicUrl(filePath); // Obtenemos la URL pública

    return data?.publicUrl || ''; // Retorna la URL pública
  }



}
