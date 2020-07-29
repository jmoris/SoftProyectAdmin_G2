import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../../_models/user';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UsuariosService {

    constructor(private http: HttpClient, private router: Router) {}

    getAll() {
        return this.http.get<any>(`${environment.apiUrl}/users`);
    }

    getUserById(id){
        return this.http.get<any>(`${environment.apiUrl}/users/` + id);
    }

    updateUser(id, data){
        return this.http.put<any>(`${environment.apiUrl}/users/` + id, data);
    }

    getStudents() {
        return this.http.get<any>(`${environment.apiUrl}/students`);
    }

    getTeachers() {
        return this.http.get<any>(`${environment.apiUrl}/teachers`);
    }

    insert(data) {
        return this.http.post<any>(`${environment.apiUrl}/users`, data);
    }

    delete(id){
        return this.http.delete<any>(`${environment.apiUrl}/users/` + id);
    }

    infoDash(){
        return this.http.get<any>(`${environment.apiUrl}/info`);
    }

    uploadFile(fileToUpload: File): Observable<boolean> {
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);

        return this.http.post<any>(`${environment.apiUrl}/users/uploadfile`, formData);
    }
}
