import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CursosService {

    constructor(private http: HttpClient, private router: Router) {}

    getAll() {
        return this.http.get<any>(`${environment.apiUrl}/courses`);
    }

    insert(data) {
        return this.http.post<any>(`${environment.apiUrl}/courses`, data);
    }

    delete(id){
        return this.http.delete<any>(`${environment.apiUrl}/courses/` + id);
    }
}
