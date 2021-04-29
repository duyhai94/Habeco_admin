import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {


  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get(`${environment.API_URL}/api/maintenance`).pipe(map((res: any) => res));
  }

  delete(id) {
    return this.http.delete(`${environment.API_URL}/api/maintenance/${id}`).pipe(map((res: any) => res));
  }

  create(data) {
    return this.http.post(`${environment.API_URL}/api/maintenance`, data).pipe(map((res: any) => res));
  }

  update(id, data) {
    return this.http.put(`${environment.API_URL}/api/maintenance/${id}`, data).pipe(map((res: any) => res));
  }
}
