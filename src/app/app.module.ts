import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BazaService } from './_services/baza.service';
import { WalutyComponent } from './components/waluty/waluty.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { WykresComponent } from './components/wykres/wykres.component';

@NgModule({
  declarations: [
    AppComponent,
    WalutyComponent,
    HomeComponent,
    WykresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [BazaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
