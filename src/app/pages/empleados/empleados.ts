import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-empleados',
  standalone: false,
  templateUrl: './empleados.html',
  styleUrl: './empleados.css',
})
export class Empleados {

  public dataEmpleados: any;
  public totalEmpleados: number = 6;
  private httpClient = inject(HttpClient);
  constructor() {}

  ngOnInit() {
    this.getEmpleados();
  }

  getEmpleados(){
    this.httpClient.get("https://empresas-2e93a-default-rtdb.firebaseio.com/.json").subscribe(data => {
      this.dataEmpleados = data;
      this.totalEmpleados = Object.keys(data).length;
      console.log(data);
    })
  }

}
