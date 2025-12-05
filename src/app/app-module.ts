import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Menu } from './components/commons/menu/menu';
import { Header } from './components/commons/header/header';
import { Footer } from './components/commons/footer/footer';
import { Empresa } from './pages/empresa/empresa';
import { Empleados } from './pages/empleados/empleados';
import { Inicio } from './pages/inicio/inicio';

import { provideHttpClient } from '@angular/common/http';
import { Firebase } from './pages/firebase/firebase';
import { Servicios } from './servicios/servicios';


@NgModule({
  declarations: [
    App,
    Menu,
    Header,
    Footer,
    Empresa,
    Empleados,
    Inicio,
    Firebase,
    Servicios
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  
  bootstrap: [App]
})
export class AppModule { }
