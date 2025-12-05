import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Empresa } from './pages/empresa/empresa';
import { Empleados } from './pages/empleados/empleados';

const routes: Routes = [

  {path: "" , component: Inicio},
  {path: "empresa" , component: Empresa},
  {path: "empleados" , component: Empleados}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
