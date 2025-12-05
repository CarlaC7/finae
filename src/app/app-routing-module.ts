import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Empleados } from './pages/empleados/empleados';
import { Empresa } from './pages/empresa/empresa';


const routes: Routes = [
  { path: "" , component: Inicio },
  { path: "empleados" , component: Empleados},
  { path: "empresa" , component: Empresa},
  { path: "**" , redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
