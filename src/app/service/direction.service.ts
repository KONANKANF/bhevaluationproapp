import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from "../interfaces/direction";

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  private apiServerUrl = '';

  constructor(private http: HttpClient) { }

  public getDirections():Observable<Direction[]>{
    return this.http.get<Direction[]>('${this.apiServerUrl}/direction');
  }

  public getDirection(id:number):Observable<Direction>{
    return this.http.get<Direction>('${this.apiServerUrl}/direction/${id}');
  }

  public addDirection(direction:Direction):Observable<Direction>{
    return this.http.post<Direction>('${this.apiServerUrl}/direction/', direction);
  }

  public updateDirection(direction:Direction, id:number):Observable<Direction>{
    return this.http.put<Direction>('${this.apiServerUrl}/direction/${id}', direction);
  }

  public deleteDirection(id:number):Observable<void>{
    return this.http.delete<void>('${this.apiServerUrl}/direction/${id}');
  }
}
