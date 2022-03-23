import { Component, OnInit } from '@angular/core';
import { BazaService, TabelaNBP, Wskazniki } from '../_services/baza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tabelanbp: Array<TabelaNBP> = [];

  pelnaLista: Array<Wskazniki> = [];
  krotkaLista: Array<Wskazniki> = [];
  ostatecznaLista: Array<Wskazniki> = [];

  constructor(private bazaService: BazaService) { }

  ngOnInit(): void { this.uruchomListeWalut(); }

  uruchomListeWalut(): void
  {
    this.bazaService.urlNBPTabelaA().subscribe( przedmiot => {
     this.tabelanbp = przedmiot;
     this.tabelanbp[0].rates.forEach( (wskaznik) => {
        this.pelnaLista.push(wskaznik);
     });
     this.krotkaLista.push(this.pelnaLista[1]);
     this.krotkaLista.push(this.pelnaLista[7]);
     this.krotkaLista.push(this.pelnaLista[10]);
     this.krotkaLista.push(this.pelnaLista[9]);
     this.ostatecznaLista = this.krotkaLista;
     console.log(this.krotkaLista[0]);
    });
  }
}
