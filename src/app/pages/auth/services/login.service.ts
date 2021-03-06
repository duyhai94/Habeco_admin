import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private http: HttpClient) { }
    public login(data: Login): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post<any>(`cognito/login`, data, httpOptions);
    }
}
