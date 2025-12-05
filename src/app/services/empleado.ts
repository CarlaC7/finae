import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService{

  private url = 'https://finald-d1884-default-rtdb.firebaseio.com/Empresa/empleados.json';

  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      map((data: any) => {
        return data?.Empresa?.empleado || [];
      })
    );
  }
}

   