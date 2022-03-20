import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BazaService } from './_services/baza.service';
import { WalutyComponent } from './components/waluty/waluty.component';

@NgModule({
  declarations: [
    AppComponent,
    WalutyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BazaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
