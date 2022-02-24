import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personnel } from '../interfaces/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  private apiServerUrl = `${environment.apiBaseUrl}`;

  constructor(private http: HttpClient) { }

  public getDirections(): Observable<Response> {
    return this.http.get<Response>(`${this.apiServerUrl}/direction/all`);
  }

  public getDirection(id: number): Observable<Response> {
    return this.http.get<Response>(`${this.apiServerUrl}/direction/find/${id}`);
  }

  public addDirection(personnel: Personnel): Observable<Response> {
    return this.http.post<Response>(`${this.apiServerUrl}/direction/add`, personnel);
  }

  public updateDirection(personnel: Personnel): Observable<Response> {
    return this.http.put<Response>(`${this.apiServerUrl}/direction/update`, personnel);
  }

  public deleteDirection(personnel: Personnel): Observable<Response> {
    return this.http.put<Response>(`${this.apiServerUrl}/direction/delete`, personnel);
  }
}
