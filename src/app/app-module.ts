import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/commons/header/header';
import { Footer } from './components/commons/footer/footer';
import { Menu } from './components/commons/menu/menu';
import { Empleados } from './pages/empleados/empleados';
import { Empresa } from './pages/empresa/empresa';
import { Inicio } from './pages/inicio/inicio';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Menu,
    Empleados,
    Empresa,
    Inicio
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
