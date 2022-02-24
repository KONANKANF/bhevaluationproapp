import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Direction } from "../interfaces/direction";
import { Response } from "../interfaces/response";

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDirections():Observable<Response>{
    return this.http.get<Response>(`${this.apiServerUrl}/direction/all`);
  }

  public getDirection(id:number):Observable<Response>{
    return this.http.get<Response>(`${this.apiServerUrl}/direction/${id}`);
  }

  public addDirection(direction:Direction):Observable<Response>{
    return this.http.post<Response>(`${this.apiServerUrl}/direction/add`, direction);
  }

  public updateDirection(direction:Direction):Observable<Response>{
    return this.http.put<Response>(`${this.apiServerUrl}/direction/update`, direction);
  }

  public deleteDirection(direction:Direction):Observable<Response>{
    return this.http.put<Response>(`${this.apiServerUrl}/direction/delete`,direction);
  }
}
