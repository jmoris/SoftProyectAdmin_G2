import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from '../model-classes/project';
import { map } from "rxjs/operators";
import { environment as env } from '../../environments/environment';
//import { environment as env } from "envi";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  insert(data): Observable<boolean> {

    return this.http.post<any>(`${env.apiUrl}/projects`, data);
  }

  getAll(): Observable<Project[]> {
    return this.http.get<any>(`${env.apiUrl}/projects`)
      .pipe(map(result => {
        console.log(result.msg);
        return result;
      }));
  }

  delete(id){
    return this.http.delete<any>(`${env.apiUrl}/projects/` + id);
  }

}
