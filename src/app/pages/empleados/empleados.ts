import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/empleado';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.html',
  styleUrl: './empleados.css',
})
export class Empleados {

  public dataEmpleados: any;
  public totalEmpleados: number = 0;
  private httpClient = inject(HttpClient);
  
  constructor(){}

  ngOnInit(): void {
    this.httpClient.get("https://finald-d1884-default-rtdb.firebaseio.com/.json").subscribe(data => {
      this.dataEmpleados = DataTransfer;
      this.totalEmpleados = Object.keys(data).length;
      console.log(data);
    
    });
  }

}
